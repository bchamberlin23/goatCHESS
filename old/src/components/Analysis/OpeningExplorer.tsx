"use client";

import type { OpeningInfo } from "@/lib/types";
import { useOpeningExplorer } from "@/hooks/useOpeningExplorer";

interface OpeningExplorerProps {
  fen: string;
  moveSans?: string[];
  localOpening?: OpeningInfo | null;
  onMoveSelect?: (san: string) => void;
}

export function OpeningExplorerPanel({ fen, moveSans = [], localOpening, onMoveSelect }: OpeningExplorerProps) {
  const { moves, openingName, eco, loading, error, source } = useOpeningExplorer(fen, moveSans);

  const displayName = openingName ?? localOpening?.name;
  const displayEco = eco ?? localOpening?.eco;

  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-3 space-y-3">
      <div>
        <h3 className="text-sm font-semibold text-zinc-200">Opening Explorer</h3>
        {displayName && (
          <p className="text-xs text-zinc-400 mt-1">
            {displayEco && <span className="text-emerald-400 mr-2">{displayEco}</span>}
            {displayName}
          </p>
        )}
      </div>

      {loading && (
        <p className="text-xs text-zinc-500">
          {source === "book" ? "Loading opening book..." : "Loading master games..."}
        </p>
      )}
      {error && <p className="text-xs text-red-400">{error}</p>}

      {moves.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="text-zinc-500 border-b border-zinc-800">
                <th className="text-left py-1 pr-2">Move</th>
                <th className="text-right py-1 px-1">
                  {source === "book" ? "Lines" : "Games"}
                </th>
                {source !== "book" && (
                  <>
                    <th className="text-right py-1 px-1 text-zinc-300">W</th>
                    <th className="text-right py-1 px-1 text-zinc-400">D</th>
                    <th className="text-right py-1 px-1 text-zinc-500">B</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {moves.map((move) => (
                <tr
                  key={move.uci}
                  className="border-b border-zinc-800/50 hover:bg-zinc-800/30 cursor-pointer"
                  onClick={() => onMoveSelect?.(move.san)}
                >
                  <td className="py-1.5 pr-2 font-mono text-zinc-200">{move.san}</td>
                  <td className="text-right py-1.5 px-1 text-zinc-500">{move.total.toLocaleString()}</td>
                  {source !== "book" && (
                    <>
                      <td className="text-right py-1.5 px-1 text-zinc-300">{move.white}%</td>
                      <td className="text-right py-1.5 px-1 text-zinc-400">{move.draws}%</td>
                      <td className="text-right py-1.5 px-1 text-zinc-500">{move.black}%</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!loading && moves.length === 0 && !error && (
        <p className="text-xs text-zinc-500">No explorer data for this position</p>
      )}
    </div>
  );
}
