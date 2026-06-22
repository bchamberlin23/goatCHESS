import type { MoveAnalysis, PlayerReport, GameReport, KeyMoment, ClassificationCounts, GamePhase } from "@/lib/types";
import { EMPTY_COUNTS } from "@/lib/types";
import { getMovePhase } from "@/lib/chess-utils";

export function calculateAccuracy(moves: MoveAnalysis[], color: "w" | "b"): number {
  const playerMoves = moves.filter((m) => m.color === color);
  if (playerMoves.length === 0) return 100;

  const avgCpLoss =
    playerMoves.reduce((sum, move) => sum + move.cpLoss, 0) / playerMoves.length;

  const accuracy = 103.1668 * Math.exp(-0.04354 * avgCpLoss) - 3.1668;
  return Math.max(0, Math.min(100, Math.round(accuracy * 10) / 10));
}

export function countClassifications(
  moves: MoveAnalysis[],
  color: "w" | "b",
): ClassificationCounts {
  const counts = { ...EMPTY_COUNTS };
  for (const move of moves) {
    if (move.color === color) {
      counts[move.classification]++;
    }
  }
  return counts;
}

export function calculatePhaseAccuracy(
  moves: MoveAnalysis[],
  color: "w" | "b",
  phase: GamePhase,
): { accuracy: number; moveCount: number } {
  const phaseMoves = moves.filter(
    (m) => m.color === color && getMovePhase(m.ply) === phase,
  );
  if (phaseMoves.length === 0) return { accuracy: 0, moveCount: 0 };

  const avgCpLoss =
    phaseMoves.reduce((sum, m) => sum + m.cpLoss, 0) / phaseMoves.length;
  const accuracy = 103.1668 * Math.exp(-0.04354 * avgCpLoss) - 3.1668;

  return {
    accuracy: Math.max(0, Math.min(100, Math.round(accuracy * 10) / 10)),
    moveCount: phaseMoves.length,
  };
}

export function buildGameReport(
  moves: MoveAnalysis[],
  whiteName: string,
  blackName: string,
  whiteRating?: string,
  blackRating?: string,
  result?: string,
): GameReport {
  const phases: GamePhase[] = ["opening", "middlegame", "endgame"];

  const white: PlayerReport = {
    color: "w",
    name: whiteName,
    rating: whiteRating,
    accuracy: calculateAccuracy(moves, "w"),
    counts: countClassifications(moves, "w"),
    phases: phases.map((phase) => ({
      phase,
      ...calculatePhaseAccuracy(moves, "w", phase),
    })),
  };

  const black: PlayerReport = {
    color: "b",
    name: blackName,
    rating: blackRating,
    accuracy: calculateAccuracy(moves, "b"),
    counts: countClassifications(moves, "b"),
    phases: phases.map((phase) => ({
      phase,
      ...calculatePhaseAccuracy(moves, "b", phase),
    })),
  };

  const keyMoments: KeyMoment[] = moves
    .filter((m) => ["blunder", "mistake", "brilliant", "great"].includes(m.classification))
    .map((m) => ({
      ply: m.ply,
      san: m.san,
      color: m.color,
      classification: m.classification,
      evalSwing: m.cpLoss,
    }))
    .sort((a, b) => b.evalSwing - a.evalSwing)
    .slice(0, 8);

  return { white, black, keyMoments, result: result ?? "*" };
}

import { hashString } from "@/lib/utils";

export async function getAnalysisCacheKey(pgn: string): Promise<string> {
  const hash = await hashString(pgn.trim());
  return `chess-analyze:${hash}`;
}

function getLegacyCacheKey(pgn: string): string {
  return `chess-analyze:${pgn.trim().slice(0, 200)}`;
}

export async function saveAnalysisToCache(
  pgn: string,
  moves: MoveAnalysis[],
  report: GameReport,
) {
  try {
    const key = await getAnalysisCacheKey(pgn);
    localStorage.setItem(key, JSON.stringify({ moves, report, timestamp: Date.now() }));
  } catch {
    // ignore quota errors
  }
}

export async function loadAnalysisFromCache(
  pgn: string,
): Promise<{ moves: MoveAnalysis[]; report: GameReport } | null> {
  try {
    const key = await getAnalysisCacheKey(pgn);
    let raw = localStorage.getItem(key);
    if (!raw) {
      raw = localStorage.getItem(getLegacyCacheKey(pgn));
    }
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
