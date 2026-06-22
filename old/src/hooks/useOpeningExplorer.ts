"use client";

import { useCallback, useEffect, useState } from "react";
import type { ExplorerMove } from "@/lib/types";
import { detectOpening, getOpeningContinuations } from "@/lib/openings";
import { sanToUci } from "@/lib/chess-utils";

export function useOpeningExplorer(fen: string | null, moveSans: string[] = []) {
  const [moves, setMoves] = useState<ExplorerMove[]>([]);
  const [openingName, setOpeningName] = useState<string | null>(null);
  const [eco, setEco] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [source, setSource] = useState<"book" | "lichess" | null>(null);

  const fetchExplorer = useCallback(async (positionFen: string, sans: string[]) => {
    setLoading(true);
    setError(null);

    try {
      const localOpening = detectOpening(sans);
      setOpeningName(localOpening?.name ?? null);
      setEco(localOpening?.eco ?? null);

      const continuations = await getOpeningContinuations(sans);
      if (continuations.length > 0) {
        setMoves(
          continuations.map(({ san, count }) => ({
            uci: sanToUci(positionFen, san) ?? san,
            san,
            white: 0,
            draws: 0,
            black: 0,
            total: count,
          })),
        );
        setSource("book");
        return;
      }

      const url = `https://explorer.lichess.ovh/lichess?variant=standard&speeds=blitz,rapid,classical&ratings=2000,2200,2500&fen=${encodeURIComponent(positionFen)}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("No opening data available for this position");
      }

      const data = (await response.json()) as {
        opening?: { eco: string; name: string };
        moves: Array<{
          uci: string;
          san: string;
          white: number;
          draws: number;
          black: number;
        }>;
      };

      setOpeningName(data.opening?.name ?? localOpening?.name ?? null);
      setEco(data.opening?.eco ?? localOpening?.eco ?? null);

      const totalAll = data.moves.reduce((s, m) => s + m.white + m.draws + m.black, 0);
      setMoves(
        data.moves.slice(0, 8).map((m) => {
          const total = m.white + m.draws + m.black;
          return {
            uci: m.uci,
            san: m.san,
            white: total ? Math.round((m.white / total) * 100) : 0,
            draws: total ? Math.round((m.draws / total) * 100) : 0,
            black: total ? Math.round((m.black / total) * 100) : 0,
            total: total || totalAll,
          };
        }),
      );
      setSource("lichess");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Explorer error");
      setMoves([]);
      setSource(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (fen) {
      const timer = setTimeout(() => fetchExplorer(fen, moveSans), 300);
      return () => clearTimeout(timer);
    }
  }, [fen, moveSans, fetchExplorer]);

  return { moves, openingName, eco, loading, error, source };
}
