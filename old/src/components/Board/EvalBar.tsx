"use client";

import { formatEval, clampEvalForDisplay } from "@/lib/win-probability";
import { cn } from "@/lib/utils";

interface EvalBarProps {
  score: number;
  mate: number | null;
  orientation?: "white" | "black";
  className?: string;
}

export function EvalBar({ score, mate, orientation = "white", className }: EvalBarProps) {
  const displayScore = clampEvalForDisplay(score, mate);
  const whitePercent = ((displayScore + 10) / 20) * 100;
  const label = formatEval(score, mate);

  return (
    <div
      className={cn(
        "relative w-6 rounded-sm overflow-hidden border border-zinc-700 bg-zinc-900",
        className,
      )}
    >
      <div
        className="absolute inset-x-0 bottom-0 bg-zinc-100 transition-all duration-300 ease-out"
        style={{ height: `${whitePercent}%` }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={cn(
            "rotate-90 text-[10px] font-bold whitespace-nowrap z-10",
            Math.abs(displayScore) > 3 ? "text-zinc-900" : "text-zinc-100",
          )}
        >
          {label}
        </span>
      </div>
      {orientation === "black" && (
        <div className="absolute inset-0 pointer-events-none rotate-180" />
      )}
    </div>
  );
}
