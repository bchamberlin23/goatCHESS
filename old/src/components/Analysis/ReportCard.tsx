"use client";

import type { GameReport } from "@/lib/types";
import {
  CLASSIFICATION_COLORS,
  CLASSIFICATION_LABELS,
  CLASSIFICATION_SYMBOLS,
  type ClassificationCounts,
} from "@/lib/types";
import { cn } from "@/lib/utils";

interface ReportCardProps {
  report: GameReport | null;
  onKeyMomentClick?: (ply: number) => void;
}

export function ReportCard({ report, onKeyMomentClick }: ReportCardProps) {
  if (!report) {
    return (
      <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 text-sm text-zinc-500">
        Complete game analysis to view the report card.
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-zinc-100">Report Card</h3>
        <span className="text-xs text-zinc-500">Result: {report.result}</span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <PlayerCard player={report.white} />
        <PlayerCard player={report.black} />
      </div>

      {report.keyMoments.length > 0 && (
        <div>
          <h4 className="text-xs uppercase tracking-wide text-zinc-500 mb-2">Key Moments</h4>
          <div className="space-y-1">
            {report.keyMoments.map((moment) => (
              <button
                key={moment.ply}
                onClick={() => onKeyMomentClick?.(moment.ply)}
                className="flex w-full items-center gap-2 rounded px-2 py-1 text-left text-sm hover:bg-zinc-800"
              >
                <span
                  className="text-[10px] font-bold w-4 text-center shrink-0"
                  style={{ color: CLASSIFICATION_COLORS[moment.classification] }}
                >
                  {CLASSIFICATION_SYMBOLS[moment.classification] || "\u2022"}
                </span>
                <span className="text-zinc-300">
                  {Math.ceil(moment.ply / 2)}.{moment.ply % 2 === 0 ? ".." : ""} {moment.san}
                </span>
                <span className="ml-auto text-xs text-zinc-500">
                  {CLASSIFICATION_LABELS[moment.classification]}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function PlayerCard({ player }: { player: GameReport["white"] }) {
  return (
    <div className="rounded-lg bg-zinc-800/50 p-3 space-y-2">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium text-zinc-100 truncate">{player.name}</div>
          {player.rating && <div className="text-xs text-zinc-500">{player.rating}</div>}
        </div>
        <div
          className={cn(
            "text-2xl font-bold",
            player.accuracy >= 90 ? "text-emerald-400" :
            player.accuracy >= 80 ? "text-lime-400" :
            player.accuracy >= 70 ? "text-yellow-400" :
            "text-orange-400",
          )}
        >
          {player.accuracy}%
        </div>
      </div>

      <ClassificationSummary counts={player.counts} />

      <div className="grid grid-cols-3 gap-1 text-[10px] text-zinc-500">
        {player.phases.map((phase) => (
          <div key={phase.phase} className="text-center">
            <div className="capitalize">{phase.phase.slice(0, 3)}</div>
            <div className="text-zinc-300 font-medium">
              {phase.moveCount > 0 ? `${phase.accuracy}%` : "—"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ClassificationSummary({ counts }: { counts: ClassificationCounts }) {
  const entries = Object.entries(counts).filter(([, v]) => v > 0) as [keyof ClassificationCounts, number][];

  return (
    <div className="flex flex-wrap gap-1">
      {entries.map(([key, count]) => (
        <span
          key={key}
          className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[10px] bg-zinc-900"
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: CLASSIFICATION_COLORS[key] }}
          />
          {CLASSIFICATION_SYMBOLS[key] && (
            <span className="font-bold">{CLASSIFICATION_SYMBOLS[key]}</span>
          )}
          {count} {CLASSIFICATION_LABELS[key].slice(0, 3)}
        </span>
      ))}
    </div>
  );
}
