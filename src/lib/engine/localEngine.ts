import { Chess } from "chess.js";
import { getIsStalemate, getWhoIsCheckmated } from "@/lib/chess";
import { getLichessEval } from "@/lib/lichess";
import { logMessageIfLocalhost } from "@/lib/helpers";
import {
  EvaluateGameParams,
  EvaluatePositionWithUpdateParams,
  GameEval,
  PositionEval,
} from "@/types/eval";
import { Engine } from "./engine";
import { BRIDGE_URL } from "./bridge";
import { computeAccuracy } from "./helpers/accuracy";
import { computeEstimatedElo } from "./helpers/estimateElo";
import { getMovesClassification } from "./helpers/moveClassification";
import { parseEvaluationResults } from "./helpers/parseResults";
import { LocalEngineConfig } from "./localEngineConfig";

type Command = {
  commands: string[];
  finalMessage: string;
  onNewMessage?: (messages: string[]) => void;
  resolve: (messages: string[]) => void;
  reject: (err: Error) => void;
};

export class LocalEngine implements Engine {
  public readonly name: string;
  private ws: WebSocket | null = null;
  private isReadyFlag = false;
  private multiPv = 3;
  private elo: number | undefined = undefined;
  private queue: Command[] = [];
  private processing = false;
  private pendingLines: string[] = [];

  private constructor(config: LocalEngineConfig) {
    this.name = config.id;
  }

  public static async create(config: LocalEngineConfig): Promise<LocalEngine> {
    const engine = new LocalEngine(config);
    await engine.connect(config);
    engine.isReadyFlag = true;
    return engine;
  }

  public getIsReady(): boolean {
    return this.isReadyFlag;
  }

  public shutdown(): void {
    this.isReadyFlag = false;
    const abandoned = this.queue;
    this.queue = [];
    for (const cmd of abandoned) {
      cmd.reject(new Error("Engine shut down"));
    }
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      try {
        this.ws.send(JSON.stringify({ type: "close" }));
      } catch {
        // ignore
      }
      this.ws.close();
    }
    this.ws = null;
  }

  public async stopAllCurrentJobs(): Promise<void> {
    this.queue = [];
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      try {
        this.ws.send(JSON.stringify({ type: "command", line: "stop" }));
      } catch {
        // ignore
      }
    }
  }

  private async connect(config: LocalEngineConfig): Promise<void> {
    return new Promise((resolve, reject) => {
      const ws = new WebSocket(BRIDGE_URL);
      this.ws = ws;

      const timeout = setTimeout(() => {
        ws.close();
        reject(
          new Error(
            `Local engine bridge not reachable at ${BRIDGE_URL}. Is \`npm run dev\` running?`
          )
        );
      }, 10000);

      const initOptions: Record<string, string> = { Threads: "1", Hash: "16" };
      if (config.options) {
        Object.assign(initOptions, config.options);
      }

      ws.onopen = () => {
        ws.send(
          JSON.stringify({
            type: "init",
            path: config.path,
            options: initOptions,
          })
        );
      };

      ws.onmessage = (event) => {
        let msg: { type: string; line?: string; message?: string };
        try {
          msg = JSON.parse(event.data);
        } catch {
          return;
        }

        if (msg.type === "ready") {
          clearTimeout(timeout);
          resolve();
        } else if (msg.type === "error") {
          clearTimeout(timeout);
          reject(new Error(msg.message ?? "Unknown bridge error"));
        } else if (msg.type === "closed") {
          this.isReadyFlag = false;
          const err = new Error(msg.message ?? "Engine closed");
          const current = this.queue.shift();
          current?.reject(err);
          this.processQueue();
        } else if (msg.type === "output" && msg.line !== undefined) {
          this.pendingLines.push(msg.line);
          const current = this.queue[0];
          if (current) {
            if (current.onNewMessage) {
              current.onNewMessage(this.pendingLines);
            }
            if (msg.line.startsWith(current.finalMessage)) {
              const finished = this.queue.shift()!;
              const lines = this.pendingLines;
              this.pendingLines = [];
              this.processing = false;
              finished.resolve(lines);
              this.processQueue();
            }
          }
        }
      };

      ws.onerror = () => {
        clearTimeout(timeout);
        reject(
          new Error(`Failed to connect to engine bridge at ${BRIDGE_URL}`)
        );
      };

      ws.onclose = () => {
        if (this.isReadyFlag) {
          this.isReadyFlag = false;
        }
      };
    });
  }

  private processQueue(): void {
    if (this.processing || this.queue.length === 0) return;
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;
    this.processing = true;
    const next = this.queue[0];
    this.pendingLines = [];
    for (const command of next.commands) {
      this.ws.send(JSON.stringify({ type: "command", line: command }));
    }
  }

  private enqueue(
    commands: string[],
    finalMessage: string,
    onNewMessage?: (messages: string[]) => void
  ): Promise<string[]> {
    return new Promise((resolve, reject) => {
      this.queue.push({
        commands,
        finalMessage,
        onNewMessage,
        resolve,
        reject,
      });
      this.processQueue();
    });
  }

  private async setMultiPv(multiPv: number): Promise<void> {
    if (multiPv === this.multiPv) return;
    if (multiPv < 2 || multiPv > 6) {
      throw new Error(`Invalid MultiPV value: ${multiPv}`);
    }
    await this.enqueue(
      [`setoption name MultiPV value ${multiPv}`, "isready"],
      "readyok"
    );
    this.multiPv = multiPv;
  }

  private async setElo(elo: number): Promise<void> {
    if (elo === this.elo) return;

    if (elo >= 3200) {
      await this.enqueue(
        ["setoption name UCI_LimitStrength value false", "isready"],
        "readyok"
      );
      this.elo = elo;
      return;
    }

    const clampedElo = Math.max(1320, Math.min(3190, elo));
    await this.enqueue(
      ["setoption name UCI_LimitStrength value true", "isready"],
      "readyok"
    );
    await this.enqueue(
      [`setoption name UCI_Elo value ${clampedElo}`, "isready"],
      "readyok"
    );
    this.elo = elo;
  }

  public async evaluateGame({
    fens,
    uciMoves,
    depth = 16,
    multiPv = this.multiPv,
    setEvaluationProgress,
    playersRatings,
    signal,
  }: EvaluateGameParams): Promise<GameEval> {
    this.throwErrorIfNotReady();
    this.isReadyFlag = false;
    setEvaluationProgress?.(1);

    try {
      if (signal?.aborted) {
        throw new DOMException("Analysis cancelled", "AbortError");
      }

      await this.setMultiPv(multiPv);

      const positions: PositionEval[] = new Array(fens.length);
      let completed = 0;

      const updateEval = (index: number, positionEval: PositionEval) => {
        completed++;
        positions[index] = positionEval;
        const progress = completed / fens.length;
        setEvaluationProgress?.(99 - Math.exp(-4 * progress) * 99);
      };

      const abortHandler = () => {
        this.stopAllCurrentJobs().catch(console.error);
      };
      signal?.addEventListener("abort", abortHandler);

      try {
        for (let i = 0; i < fens.length; i++) {
          if (signal?.aborted) {
            throw new DOMException("Analysis cancelled", "AbortError");
          }

          const fen = fens[i];
          const whoIsCheckmated = getWhoIsCheckmated(fen);
          if (whoIsCheckmated) {
            updateEval(i, {
              lines: [
                {
                  pv: [],
                  depth: 0,
                  multiPv: 1,
                  mate: whoIsCheckmated === "w" ? -1 : 1,
                },
              ],
            });
            continue;
          }

          const isStalemate = getIsStalemate(fen);
          if (isStalemate) {
            updateEval(i, {
              lines: [
                {
                  pv: [],
                  depth: 0,
                  multiPv: 1,
                  cp: 0,
                },
              ],
            });
            continue;
          }

          const result = await this.evaluatePosition(fen, depth);
          updateEval(i, result);
        }
      } finally {
        signal?.removeEventListener("abort", abortHandler);
      }

      const positionsWithClassification = getMovesClassification(
        positions,
        uciMoves,
        fens
      );
      const accuracy = computeAccuracy(positions);
      const estimatedElo = computeEstimatedElo(
        positions,
        playersRatings?.white,
        playersRatings?.black
      );

      return {
        positions: positionsWithClassification,
        estimatedElo,
        accuracy,
        settings: {
          engine: this.name,
          date: new Date().toISOString(),
          depth,
          multiPv,
        },
      };
    } catch (error) {
      await this.stopAllCurrentJobs().catch(console.error);
      throw error;
    } finally {
      this.isReadyFlag = true;
    }
  }

  private async evaluatePosition(
    fen: string,
    depth = 16
  ): Promise<PositionEval> {
    const results = await this.enqueue(
      [`position fen ${fen}`, `go depth ${depth}`],
      "bestmove"
    );
    return parseEvaluationResults(results, fen);
  }

  public async evaluatePositionWithUpdate({
    fen,
    depth = 16,
    multiPv = this.multiPv,
    setPartialEval,
  }: EvaluatePositionWithUpdateParams): Promise<PositionEval> {
    this.throwErrorIfNotReady();

    const lichessEvalPromise = getLichessEval(fen, multiPv);

    await this.stopAllCurrentJobs();
    await this.setMultiPv(multiPv);

    let lastUpdate = 0;
    const THROTTLE_MS = 60;

    const onNewMessage = (messages: string[]) => {
      if (!setPartialEval) return;
      const now = performance.now();
      if (now < lastUpdate + THROTTLE_MS) return;
      lastUpdate = now;
      const parsedResults = parseEvaluationResults(messages, fen);
      setPartialEval(parsedResults);
    };

    logMessageIfLocalhost(`Evaluating position: ${fen}`);

    const lichessEval = await lichessEvalPromise;
    if (
      lichessEval.lines.length >= multiPv &&
      lichessEval.lines[0].depth >= depth
    ) {
      setPartialEval?.(lichessEval);
      return lichessEval;
    }

    const results = await this.enqueue(
      [`position fen ${fen}`, `go depth ${depth}`],
      "bestmove",
      onNewMessage
    );

    return parseEvaluationResults(results, fen);
  }

  public async getEngineNextMove(
    fen: string,
    elo: number,
    depth = 16
  ): Promise<string | undefined> {
    this.throwErrorIfNotReady();
    await this.stopAllCurrentJobs();

    let targetDepth = depth;
    if (elo < 400) targetDepth = 1;
    else if (elo < 800) targetDepth = 2;
    else if (elo < 1200) targetDepth = 3;
    else if (elo < 1500) targetDepth = 5;
    else if (elo < 1800) targetDepth = 8;
    else if (elo < 2200) targetDepth = 12;
    else targetDepth = 16;

    await this.setElo(elo);

    if (elo < 1320) {
      const blunderProb = 0.5 * Math.pow(1 - elo / 1320, 2);
      if (Math.random() < blunderProb) {
        try {
          const game = new Chess(fen);
          const moves = game.moves({ verbose: true });
          if (moves.length > 0) {
            const randomMove = moves[Math.floor(Math.random() * moves.length)];
            const lan =
              randomMove.from + randomMove.to + (randomMove.promotion ?? "");
            logMessageIfLocalhost(
              `[Bot Elo ${elo}] Making random blunder move: ${lan} (prob: ${blunderProb.toFixed(3)})`
            );
            return lan;
          }
        } catch (e) {
          console.error("Error generating random blunder move:", e);
        }
      }
    }

    logMessageIfLocalhost(
      `Evaluating position: ${fen} with depth ${targetDepth}`
    );

    const results = await this.enqueue(
      [`position fen ${fen}`, `go depth ${targetDepth}`],
      "bestmove"
    );

    const moveResult = results.find((result) => result.startsWith("bestmove"));
    const move = moveResult?.split(" ")[1];
    if (!move) {
      throw new Error("No move found");
    }
    return move === "(none)" ? undefined : move;
  }

  private throwErrorIfNotReady(): void {
    if (!this.isReadyFlag) {
      throw new Error(`${this.name} is not ready`);
    }
  }
}
