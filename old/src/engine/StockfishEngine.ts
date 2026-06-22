import { Chess } from "chess.js";
import type { EngineEval, MoveAnalysis, MoveRecord } from "@/lib/types";
import { classifyMove, computeCpLoss } from "./classifier";
import { uciToSan } from "@/lib/chess-utils";
import { evalToWinProbability } from "@/lib/win-probability";
import { resolveEngineVariant, type EngineVariant } from "./engine-config";

const SINGLE_THREADED_VARIANT: EngineVariant = {
  mode: "single",
  path: "/stockfish/stockfish-18-lite-single.js#/stockfish/stockfish-18-lite-single.wasm",
  label: "Single-threaded",
  threads: 1,
};

interface LoadEngineInstance {
  send: (cmd: string, cb?: (msg: string) => void, stream?: (line: string) => void) => void;
  stop_moves: () => void;
  quit: () => void;
}

declare global {
  interface Window {
    loadEngine?: (path: string) => LoadEngineInstance;
  }
}

function parseInfoLine(line: string): Partial<EngineEval> | null {
  if (!line.startsWith("info ")) return null;

  const depthMatch = line.match(/\bdepth (\d+)/);
  const multipvMatch = line.match(/\bmultipv (\d+)/);
  const scoreCpMatch = line.match(/\bscore cp (-?\d+)/);
  const scoreMateMatch = line.match(/\bscore mate (-?\d+)/);
  const pvMatch = line.match(/\bpv (.+)$/);

  if (!depthMatch) return null;

  const pv = pvMatch ? pvMatch[1].trim().split(/\s+/) : [];

  return {
    depth: parseInt(depthMatch[1], 10),
    score: scoreCpMatch ? parseInt(scoreCpMatch[1], 10) : scoreMateMatch ? (parseInt(scoreMateMatch[1], 10) > 0 ? 10000 : -10000) : 0,
    mate: scoreMateMatch ? parseInt(scoreMateMatch[1], 10) : null,
    pv,
    multipv: multipvMatch ? parseInt(multipvMatch[1], 10) : 1,
  };
}

function parseBestMove(line: string): string | null {
  const match = line.match(/^bestmove (\S+)/);
  return match ? match[1] : null;
}

async function ensureLoadEngine(): Promise<(path: string) => LoadEngineInstance> {
  if (typeof window === "undefined") {
    throw new Error("Stockfish can only run in the browser");
  }

  if (window.loadEngine) {
    return window.loadEngine;
  }

  await new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "/stockfish/loadEngine.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Stockfish loader"));
    document.head.appendChild(script);
  });

  if (!window.loadEngine) {
    throw new Error("Stockfish loader unavailable");
  }

  return window.loadEngine;
}

export class StockfishEngine {
  private engine: LoadEngineInstance | null = null;
  private ready = false;
  private initPromise: Promise<void> | null = null;
  private opQueue: Promise<unknown> = Promise.resolve();
  private messageHandlers: Array<(msg: string) => void> = [];
  private targetDepth = 18;
  private multiPv = 3;
  private variant: EngineVariant | null = null;

  getVariant(): EngineVariant {
    return this.variant ?? resolveEngineVariant();
  }

  private runExclusive<T>(fn: () => Promise<T>): Promise<T> {
    const result = this.opQueue.then(fn, fn);
    this.opQueue = result.then(
      () => undefined,
      () => undefined,
    );
    return result;
  }

  async init(): Promise<void> {
    if (this.ready) return;
    if (this.initPromise) return this.initPromise;

    this.initPromise = this.initEngine(resolveEngineVariant()).catch(async (err) => {
      if (this.variant?.mode === "multi") {
        this.destroy();
        return this.initEngine(SINGLE_THREADED_VARIANT);
      }
      this.initPromise = null;
      throw err;
    });

    return this.initPromise;
  }

  private initEngine(variant: EngineVariant): Promise<void> {
    return new Promise((resolve, reject) => {
      void (async () => {
        try {
          const loadEngine = await ensureLoadEngine();
          this.variant = variant;
          this.engine = loadEngine(this.variant.path);

          const hashMb = this.variant.mode === "multi"
            ? Math.min(256, this.variant.threads * 32)
            : 128;

          const timeout = setTimeout(() => {
            this.initPromise = null;
            reject(new Error("Stockfish failed to initialize"));
          }, 90000);

          this.engine.send("uci", () => {
            this.engine?.send(`setoption name Hash value ${hashMb}`);
            if (this.variant?.mode === "multi") {
              this.engine?.send(`setoption name Threads value ${this.variant.threads}`);
            }
            this.engine?.send("setoption name MultiPV value 3");
            this.engine?.send("isready", () => {
              clearTimeout(timeout);
              this.ready = true;
              this.multiPv = 3;
              resolve();
            });
          });
        } catch (err) {
          this.initPromise = null;
          reject(err);
        }
      })();
    });
  }

  onMessage(handler: (msg: string) => void) {
    this.messageHandlers.push(handler);
    return () => {
      this.messageHandlers = this.messageHandlers.filter((h) => h !== handler);
    };
  }

  stop() {
    this.engine?.stop_moves();
  }

  private configureOptions(options: { multiPv?: number; hashMb?: number }): Promise<void> {
    return this.runExclusive(async () => {
      if (!this.engine) await this.init();
      if (!this.engine) throw new Error("Engine not initialized");

      return new Promise<void>((resolve) => {
        if (options.hashMb !== undefined) {
          this.engine!.send(`setoption name Hash value ${options.hashMb}`);
        }
        if (options.multiPv !== undefined) {
          this.multiPv = options.multiPv;
          this.engine!.send(`setoption name MultiPV value ${options.multiPv}`);
        }
        this.engine!.send("isready", () => resolve());
      });
    });
  }

  async evaluate(
    fen: string,
    depth: number,
    onUpdate?: (evals: EngineEval[]) => void,
  ): Promise<EngineEval[]> {
    return this.runExclusive(async () => {
      if (!this.engine) await this.init();
      if (!this.engine) throw new Error("Engine not initialized");

      this.targetDepth = depth;

      return new Promise<EngineEval[]>((resolve, reject) => {
        const currentEvals = new Map<number, EngineEval>();

        const emitUpdate = () => {
          const evals = Array.from(currentEvals.values()).sort((a, b) => a.multipv - b.multipv);
          if (evals.length) onUpdate?.(evals);
        };

        const handleStream = (line: string) => {
          this.messageHandlers.forEach((h) => h(line));
          const partial = parseInfoLine(line);
          if (partial && partial.depth !== undefined) {
            const multipv = partial.multipv ?? 1;
            const existing = currentEvals.get(multipv);
            if (!existing || (partial.depth ?? 0) >= existing.depth) {
              currentEvals.set(multipv, partial as EngineEval);
              emitUpdate();
            }
          }
        };

        const timeout = setTimeout(() => {
          this.engine?.stop_moves();
          const evals = Array.from(currentEvals.values()).sort((a, b) => a.multipv - b.multipv);
          if (evals.length) {
            resolve(evals);
          } else {
            reject(new Error("Engine timeout"));
          }
        }, 60000);

        this.engine!.send("stop");
        this.engine!.send(`position fen ${fen}`);
        this.engine!.send(
          `go depth ${depth}`,
          (message) => {
            clearTimeout(timeout);
            const bestMove = parseBestMove(message);
            const evals = Array.from(currentEvals.values()).sort((a, b) => a.multipv - b.multipv);
            if (evals.length) {
              resolve(evals);
              return;
            }

            resolve([{
              depth,
              score: 0,
              mate: null,
              pv: bestMove && bestMove !== "(none)" ? [bestMove] : [],
              multipv: 1,
            }]);
          },
          handleStream,
        );
      });
    });
  }

  async analyzeMove(
    fenBefore: string,
    move: MoveRecord,
    depth: number,
    moveSansBefore: string[],
    previousClassification?: MoveAnalysis["classification"],
    onProgress?: (evals: EngineEval[]) => void,
    chainedBeforeEvals?: EngineEval[] | null,
  ): Promise<{ analysis: MoveAnalysis; afterEvals: EngineEval[] }> {
      const beforeEvals = chainedBeforeEvals
        ?? await this.evaluate(fenBefore, depth, onProgress);
      const bestLine = beforeEvals[0];
      const bestMoveUci = bestLine.pv[0] ?? "";
      const evalBefore = bestLine.score;
      const mateBefore = bestLine.mate;

      const chess = new Chess(fenBefore);
      const bestMoveSan = bestMoveUci ? uciToSan(fenBefore, bestMoveUci) : "";

      chess.move(move.san);
      const fenAfter = chess.fen();
      const afterEvals = await this.evaluate(fenAfter, depth);
      const evalAfter = afterEvals[0].score;
      const mateAfter = afterEvals[0].mate;

      let bestEvalAfter = evalAfter;
      let bestMateAfter = mateAfter;
      if (bestMoveUci && bestMoveUci !== move.uci) {
        const bestChess = new Chess(fenBefore);
        try {
          const from = bestMoveUci.slice(0, 2);
          const to = bestMoveUci.slice(2, 4);
          const promotion = bestMoveUci.length > 4 ? bestMoveUci[4] : undefined;
          bestChess.move({ from, to, promotion });
          const altDepth = Math.max(depth - 3, 12);
          const bestAfterEvals = await this.evaluate(bestChess.fen(), altDepth);
          bestEvalAfter = bestAfterEvals[0].score;
          bestMateAfter = bestAfterEvals[0].mate;
        } catch {
          bestEvalAfter = evalBefore;
        }
      }

      const classification = classifyMove({
        move,
        fenBefore,
        evalBefore,
        mateBefore,
        evalAfter,
        mateAfter,
        bestMoveUci,
        bestEvalAfter,
        bestMateAfter,
        moveSansBefore,
        previousClassification,
      });

      const cpLoss = computeCpLoss(evalBefore, evalAfter, bestEvalAfter, move.color);
      const wpBefore = evalToWinProbability(evalBefore, mateBefore, move.color);
      const wpAfter = evalToWinProbability(evalAfter, mateAfter, move.color);

      return {
        analysis: {
          ...move,
          classification,
          evalBefore,
          evalAfter,
          mateBefore,
          mateAfter,
          bestMove: bestMoveUci,
          bestMoveSan: bestMoveSan || bestMoveUci,
          pv: bestLine.pv,
          expectedPointsLoss: Math.max(0, wpBefore - wpAfter),
          cpLoss,
          engineLines: beforeEvals,
        },
        afterEvals,
      };
  }

  async *analyzeFullGame(
    moves: MoveRecord[],
    depth: number,
    startingFen?: string,
    signal?: AbortSignal,
    onProgressEval?: (evals: EngineEval[]) => void,
  ): AsyncGenerator<{ move: MoveAnalysis; progress: number }> {
    let fenBefore = startingFen ?? new Chess().fen();
    const moveSans: string[] = [];
    let previousClassification: MoveAnalysis["classification"] | undefined;
    let chainedAfterEvals: EngineEval[] | null = null;

    await this.configureOptions({ multiPv: 1 });

    try {
      for (let i = 0; i < moves.length; i++) {
        if (signal?.aborted) break;

        const move = moves[i];
        const { analysis, afterEvals } = await this.analyzeMove(
          fenBefore,
          move,
          depth,
          moveSans,
          previousClassification,
          i === 0 || !chainedAfterEvals ? onProgressEval : undefined,
          chainedAfterEvals,
        );

        chainedAfterEvals = afterEvals;

        if (i > 0) {
          previousClassification = analysis.classification;
        }

        moveSans.push(move.san);
        fenBefore = move.fen;

        yield {
          move: analysis,
          progress: (i + 1) / moves.length,
        };
      }
    } finally {
      await this.configureOptions({ multiPv: 3 });
    }
  }

  destroy() {
    this.engine?.quit();
    this.engine = null;
    this.ready = false;
    this.initPromise = null;
    this.variant = null;
    this.opQueue = Promise.resolve();
  }
}

let engineInstance: StockfishEngine | null = null;

export function getEngine(): StockfishEngine {
  if (!engineInstance) {
    engineInstance = new StockfishEngine();
  }
  return engineInstance;
}

export function destroyEngine() {
  engineInstance?.destroy();
  engineInstance = null;
}
