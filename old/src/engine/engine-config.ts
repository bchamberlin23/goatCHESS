export type EngineMode = "multi" | "single";

export interface EngineVariant {
  mode: EngineMode;
  path: string;
  label: string;
  threads: number;
}

export function canUseMultiThreadedEngine(): boolean {
  return typeof crossOriginIsolated !== "undefined" && crossOriginIsolated;
}

export function getThreadCount(): number {
  const cores = typeof navigator !== "undefined" ? navigator.hardwareConcurrency : 4;
  return Math.min(Math.max(cores - 1, 2), 32);
}

export function resolveEngineVariant(): EngineVariant {
  if (canUseMultiThreadedEngine()) {
    const threads = getThreadCount();
    return {
      mode: "multi",
      path: "/stockfish/stockfish-18-lite.js#/stockfish/stockfish-18-lite.wasm",
      label: `Multi-threaded (${threads} threads)`,
      threads,
    };
  }

  return {
    mode: "single",
    path: "/stockfish/stockfish-18-lite-single.js#/stockfish/stockfish-18-lite-single.wasm",
    label: "Single-threaded",
    threads: 1,
  };
}
