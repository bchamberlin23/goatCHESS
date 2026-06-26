#!/usr/bin/env node
// Local chess engine bridge.
//
// Runs a WebSocket server on ws://localhost:8765. The browser connects to
// this, sends an `init` message with a binary path, and the bridge spawns
// the engine subprocess, speaks UCI on its stdio, and streams output back.
//
// One bridge process can serve many engines — each WebSocket connection
// gets its own engine subprocess. Idle subprocesses are reaped after
// IDLE_TIMEOUT_MS of no activity.
//
// Usage: `node scripts/engine-bridge.mjs` (started automatically by
// `npm run dev` via concurrently).

import { WebSocketServer } from "ws";
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { execSync } from "node:child_process";
import os from "node:os";
import path from "node:path";

const PORT = Number(process.env.CHESSKIT_BRIDGE_PORT) || 8765;

const expandTilde = (inputPath) => {
  if (typeof inputPath !== "string") return inputPath;
  if (inputPath === "~" || inputPath.startsWith("~/")) {
    const home = os.homedir();
    if (!home) return inputPath;
    return path.join(home, inputPath.slice(1));
  }
  return inputPath;
};

const MY_ENGINE_FOLDER_NAME = "my chess engine";
const MY_ENGINE_BINARY_NAMES = [
  "engine",
  "my_chess_engine",
  "chess_engine",
  "my_engine",
  "main",
  "a.out",
  "chess",
];

const detectMyEngine = () => {
  const home = os.homedir();
  if (!home) return null;

  const folder = path.join(home, "Desktop", MY_ENGINE_FOLDER_NAME);
  if (!existsSync(folder)) return null;

  const ext = process.platform === "win32" ? ".exe" : "";
  for (const name of MY_ENGINE_BINARY_NAMES) {
    const binaryPath = path.join(folder, `${name}${ext}`);
    if (existsSync(binaryPath)) {
      return { name: "My Engine", path: binaryPath };
    }
  }
  return null;
};

// On startup, scan a few common locations for installed engines so the
// client can show "detected" engines in the settings UI.
const detectEngines = () => {
  const candidates = [
    { name: "stockfish", args: ["-h"] },
    { name: "lc0", args: ["--help"] },
    { name: "komodo", args: ["-h"] },
    { name: "berserk", args: ["-h"] },
    { name: "ethereal", args: ["-h"] },
    { name: "rubichess", args: ["-h"] },
  ];

  const found = [];
  for (const { name, args } of candidates) {
    try {
      const binaryPath = execSync(`command -v ${name}`, {
        stdio: ["ignore", "pipe", "ignore"],
      })
        .toString()
        .trim();
      if (binaryPath && existsSync(binaryPath)) {
        found.push({ name, path: binaryPath });
      }
    } catch {
      // not installed
    }
  }

  const myEngine = detectMyEngine();
  if (myEngine) {
    found.push(myEngine);
  }

  return found;
};

class EngineSession {
  constructor(ws, enginePath, options = {}) {
    this.ws = ws;
    this.enginePath = enginePath;
    this.options = options;
    this.proc = null;
    this.stdoutBuf = "";
    this.stderrBuf = "";
    this.closed = false;
  }

  async start() {
    try {
      this.proc = spawn(this.enginePath, [], {
        stdio: ["pipe", "pipe", "pipe"],
        // Detach so the engine dies with the bridge, not with the client.
        detached: false,
      });
    } catch (err) {
      this.send({
        type: "error",
        message: `Failed to spawn engine: ${err.message}`,
      });
      this.cleanup();
      return;
    }

    this.proc.on("error", (err) => {
      this.send({
        type: "error",
        message: `Engine process error: ${err.message}`,
      });
      this.cleanup();
    });

    this.proc.on("exit", (code, signal) => {
      if (!this.closed) {
        this.send({
          type: "closed",
          reason: `Engine exited (code=${code}, signal=${signal})`,
        });
      }
      this.cleanup();
    });

    this.proc.stdout.on("data", (chunk) => this.handleStdout(chunk));
    this.proc.stderr.on("data", (chunk) => {
      // Most engines log to stderr too. Surface it as output lines.
      this.handleStdout(chunk, true);
    });

    // UCI handshake
    try {
      await this.runUntil("uciok", ["uci"]);
      const optionCommands = Object.entries(this.options).map(
        ([name, value]) => `setoption name ${name} value ${value}`
      );
      if (optionCommands.length > 0) {
        await this.runUntil("readyok", [...optionCommands, "isready"]);
      }
      await this.runUntil("readyok", ["ucinewgame", "isready"]);
      this.send({ type: "ready" });
    } catch (err) {
      this.send({
        type: "error",
        message: `UCI handshake failed: ${err.message}`,
      });
      this.cleanup();
    }
  }

  handleStdout(chunk, isStderr = false) {
    this.stdoutBuf += chunk.toString("utf8");
    const lines = this.stdoutBuf.split("\n");
    this.stdoutBuf = lines.pop() ?? "";
    for (const line of lines) {
      const trimmed = line.replace(/\r$/, "");
      if (trimmed.length > 0) {
        this.send({
          type: "output",
          line: trimmed,
          stream: isStderr ? "stderr" : "stdout",
        });
        for (const handler of this._outputHandlers ?? []) {
          handler({ line: trimmed, stream: isStderr ? "stderr" : "stdout" });
        }
      }
    }
  }

  send(msg) {
    if (this.ws.readyState === this.ws.OPEN) {
      try {
        this.ws.send(JSON.stringify(msg));
      } catch {
        // socket gone, ignore
      }
    }
  }

  handleCommand(line) {
    if (!this.proc || this.proc.killed) {
      this.send({ type: "error", message: "Engine not running" });
      return;
    }
    try {
      this.proc.stdin.write(line + "\n");
    } catch (err) {
      this.send({ type: "error", message: `Write failed: ${err.message}` });
    }
  }

  runUntil(finalMessage, commands) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.removeOutputHandler(handler);
        reject(new Error(`Timeout waiting for "${finalMessage}"`));
      }, 10000);

      const handler = (msg) => {
        if (msg.line.startsWith(finalMessage)) {
          clearTimeout(timer);
          this.removeOutputHandler(handler);
          resolve();
        }
      };
      this.addOutputHandler(handler);

      for (const cmd of commands) {
        try {
          this.proc.stdin.write(cmd + "\n");
        } catch (err) {
          clearTimeout(timer);
          this.removeOutputHandler(handler);
          reject(err);
          return;
        }
      }
    });
  }

  addOutputHandler(handler) {
    if (!this._outputHandlers) this._outputHandlers = [];
    this._outputHandlers.push(handler);
  }

  removeOutputHandler(handler) {
    if (!this._outputHandlers) return;
    this._outputHandlers = this._outputHandlers.filter((h) => h !== handler);
  }

  cleanup() {
    this.closed = true;
    if (this.proc && !this.proc.killed) {
      try {
        this.proc.stdin.write("quit\n");
      } catch {
        // ignore
      }
      setTimeout(() => {
        if (this.proc && !this.proc.killed) {
          this.proc.kill("SIGTERM");
        }
      }, 500);
    }
    if (this.ws.readyState === this.ws.OPEN) {
      this.ws.close();
    }
  }
}

const detectedEngines = detectEngines();
console.log(
  `[chesskit-bridge] Detected engines: ${
    detectedEngines.length === 0
      ? "none"
      : detectedEngines.map((e) => e.name).join(", ")
  }`
);

const wss = new WebSocketServer({ port: PORT, host: "127.0.0.1" });

wss.on("listening", () => {
  console.log(`[chesskit-bridge] Listening on ws://127.0.0.1:${PORT}`);
});

wss.on("connection", (ws) => {
  let session = null;

  ws.on("message", (data) => {
    let msg;
    try {
      msg = JSON.parse(data.toString("utf8"));
    } catch (err) {
      ws.send(
        JSON.stringify({
          type: "error",
          message: `Invalid JSON: ${err.message}`,
        })
      );
      return;
    }

    if (msg.type === "hello") {
      ws.send(JSON.stringify({ type: "hello", version: 1, detectedEngines }));
      return;
    }

    if (msg.type === "init") {
      if (session) {
        ws.send(
          JSON.stringify({
            type: "error",
            message: "Session already initialized",
          })
        );
        return;
      }
      if (!msg.path || typeof msg.path !== "string") {
        ws.send(
          JSON.stringify({ type: "error", message: "Missing engine path" })
        );
        return;
      }
      const resolvedPath = expandTilde(msg.path);
    if (!existsSync(resolvedPath)) {
        ws.send(
          JSON.stringify({
            type: "error",
            message: `Engine binary not found: ${resolvedPath}`,
          })
        );
        return;
      }
      session = new EngineSession(ws, resolvedPath, msg.options);
      session.start();
      return;
    }

    if (msg.type === "command") {
      if (!session) {
        ws.send(
          JSON.stringify({ type: "error", message: "No active session" })
        );
        return;
      }
      session.handleCommand(msg.line);
      return;
    }

    if (msg.type === "close") {
      if (session) session.cleanup();
      return;
    }

    ws.send(
      JSON.stringify({
        type: "error",
        message: `Unknown message type: ${msg.type}`,
      })
    );
  });

  ws.on("close", () => {
    if (session) session.cleanup();
  });

  ws.on("error", () => {
    if (session) session.cleanup();
  });
});

wss.on("error", (err) => {
  console.error(`[chesskit-bridge] Server error: ${err.message}`);
  if (err.code === "EADDRINUSE") {
    console.error(
      `[chesskit-bridge] Port ${PORT} is already in use. Set CHESSKIT_BRIDGE_PORT to use a different port.`
    );
    process.exit(1);
  }
});

const shutdown = () => {
  console.log("[chesskit-bridge] Shutting down");
  wss.close(() => process.exit(0));
  setTimeout(() => process.exit(0), 2000).unref();
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
