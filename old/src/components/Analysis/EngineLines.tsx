"use client";

import type { EngineEval } from "@/lib/types";
import { formatEval } from "@/lib/win-probability";
import { uciLineToSan } from "@/lib/chess-utils";

interface EngineLinesProps {
  lines: EngineEval[];
  fen: string;
  depth?: number;
  liveDepth?: number;
  onLineClick?: (moves: string[]) => void;
}

export function EngineLines({ lines, fen, depth, liveDepth, onLineClick }: EngineLinesProps) {
  if (lines.length === 0) {
    return (
      <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-3 text-sm text-zinc-500">
        Engine lines will appear during analysis
      </div>
    );
  }

  const sorted = [...lines].sort((a, b) => a.multipv - b.multipv);
  const displayDepth = liveDepth ?? depth ?? sorted[0]?.depth;

  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-3 space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-zinc-200">Engine Lines</h3>
        {displayDepth && <span className="text-xs text-zinc-500">Depth {displayDepth}</span>}
      </div>
      <div className="space-y-1.5">
        {sorted.map((line) => {
          const sanLine = uciLineToSan(fen, line.pv.slice(0, 8));

          return (
            <button
              key={line.multipv}
              onClick={() => onLineClick?.(line.pv)}
              className="flex w-full items-start gap-2 rounded px-2 py-1.5 text-left text-xs hover:bg-zinc-800 transition-colors"
            >
              <span className="font-bold text-emerald-400 w-12 shrink-0">
                {formatEval(line.score, line.mate)}
              </span>
              <span className="text-zinc-400 font-mono truncate">
                {sanLine.join(" ")}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
