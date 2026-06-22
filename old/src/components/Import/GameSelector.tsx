"use client";

import type { FetchedGame } from "@/lib/types";
import { cn } from "@/lib/utils";

interface GameSelectorProps {
  games: FetchedGame[];
  onSelect: (game: FetchedGame) => void;
  loading?: boolean;
}

export function GameSelector({ games, onSelect, loading }: GameSelectorProps) {
  if (loading) {
    return <p className="text-sm text-zinc-500 py-4 text-center">Loading games...</p>;
  }

  if (games.length === 0) {
    return <p className="text-sm text-zinc-500 py-4 text-center">No games found</p>;
  }

  return (
    <div className="max-h-64 overflow-y-auto space-y-1">
      {games.map((game) => (
        <button
          key={game.id}
          onClick={() => onSelect(game)}
          className={cn(
            "w-full rounded-lg border border-zinc-800 px-3 py-2 text-left text-sm",
            "hover:bg-zinc-800 hover:border-zinc-700 transition-colors",
          )}
        >
          <div className="flex items-center justify-between">
            <span className="text-zinc-200">
              {game.white}
              {game.whiteElo && <span className="text-zinc-500 ml-1">({game.whiteElo})</span>}
              {" vs "}
              {game.black}
              {game.blackElo && <span className="text-zinc-500 ml-1">({game.blackElo})</span>}
            </span>
            <span className="text-xs text-zinc-500">{game.result}</span>
          </div>
          {game.date && <div className="text-xs text-zinc-600 mt-0.5">{game.date}</div>}
        </button>
      ))}
    </div>
  );
}
