"use client";

import { useEffect, useRef } from "react";
import type { MoveAnalysis } from "@/lib/types";
import {
  CLASSIFICATION_COLORS,
  CLASSIFICATION_LABELS,
  CLASSIFICATION_SYMBOLS,
} from "@/lib/types";
import { formatEval, scoreForColor } from "@/lib/win-probability";
import { cn } from "@/lib/utils";

interface MoveListProps {
  moves: MoveAnalysis[];
  currentPly: number;
  onMoveClick: (ply: number) => void;
  explorationMoves?: string[];
  onResetExploration?: () => void;
}

export function MoveList({
  moves,
  currentPly,
  onMoveClick,
  explorationMoves = [],
  onResetExploration,
}: MoveListProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const active = containerRef.current?.querySelector("[data-active='true']");
    active?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [currentPly]);

  const rows: Array<{ moveNumber: number; white?: MoveAnalysis; black?: MoveAnalysis }> = [];
  for (let i = 0; i < moves.length; i += 2) {
    rows.push({
      moveNumber: Math.floor(i / 2) + 1,
      white: moves[i],
      black: moves[i + 1],
    });
  }

  const variationRowIndex = explorationMoves.length > 0
    ? Math.ceil(currentPly / 2)
    : null;

  return (
    <div ref={containerRef} className="flex flex-col h-full overflow-y-auto text-sm font-mono">
      {rows.map(({ moveNumber, white, black }) => (
        <div key={moveNumber}>
          <div className="grid grid-cols-[2rem_1fr_1fr] gap-1 px-2 py-0.5 hover:bg-zinc-800/50">
            <span className="text-zinc-500">{moveNumber}.</span>
            <MoveButton
              move={white}
              isActive={!!white && currentPly === white.ply && explorationMoves.length === 0}
              onClick={() => white && onMoveClick(white.ply)}
            />
            <MoveButton
              move={black}
              isActive={!!black && currentPly === black.ply && explorationMoves.length === 0}
              onClick={() => black && onMoveClick(black.ply)}
            />
          </div>
          {variationRowIndex === moveNumber && explorationMoves.length > 0 && (
            <div className="px-2 py-1 ml-4 border-l-2 border-zinc-700 text-zinc-500 text-xs">
              <div className="flex items-center justify-between gap-2">
                <span className="truncate">
                  (variation) {explorationMoves.join(" ")}
                </span>
                {onResetExploration && (
                  <button
                    onClick={onResetExploration}
                    className="shrink-0 text-emerald-500 hover:text-emerald-400"
                  >
                    mainline
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function MoveButton({
  move,
  isActive,
  onClick,
}: {
  move?: MoveAnalysis;
  isActive: boolean;
  onClick: () => void;
}) {
  if (!move) {
    return <span />;
  }

  const color = CLASSIFICATION_COLORS[move.classification];
  const sideEval = scoreForColor(move.evalAfter, move.color);
  const evalText = formatEval(sideEval, move.mateAfter);

  const symbol = CLASSIFICATION_SYMBOLS[move.classification];

  return (
    <button
      data-active={isActive}
      onClick={onClick}
      className={cn(
        "flex items-center gap-1.5 rounded px-1.5 py-0.5 text-left transition-colors min-w-0",
        isActive ? "bg-emerald-700/40 text-white" : "text-zinc-200 hover:bg-zinc-700",
      )}
    >
      {symbol ? (
        <span
          className="text-[10px] font-bold shrink-0 w-4 text-center"
          style={{ color }}
          title={CLASSIFICATION_LABELS[move.classification]}
        >
          {symbol}
        </span>
      ) : (
        <span
          className="h-2 w-2 rounded-full shrink-0"
          style={{ backgroundColor: color }}
          title={CLASSIFICATION_LABELS[move.classification]}
        />
      )}
      <span className="truncate">{move.san}</span>
      <span className="text-zinc-500 text-[10px] shrink-0">({evalText})</span>
    </button>
  );
}
