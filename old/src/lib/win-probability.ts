export function centipawnsToWinProbability(cp: number): number {
  return 1 / (1 + Math.pow(10, -cp / 400));
}

export function mateToWinProbability(mate: number, color: "w" | "b"): number {
  const mateForSide = color === "w" ? mate : -mate;
  if (mateForSide > 0) return 1;
  if (mateForSide < 0) return 0;
  return 0.5;
}

export function evalToWinProbability(
  score: number,
  mate: number | null,
  color: "w" | "b",
): number {
  if (mate !== null) {
    return mateToWinProbability(mate, color);
  }
  const sideScore = color === "w" ? score : -score;
  return centipawnsToWinProbability(sideScore);
}

export function scoreForColor(whiteScore: number, color: "w" | "b"): number {
  return color === "w" ? whiteScore : -whiteScore;
}

export function formatEval(score: number, mate: number | null): string {
  if (mate !== null) {
    return mate > 0 ? `M${mate}` : `-M${Math.abs(mate)}`;
  }
  const pawns = score / 100;
  const sign = pawns > 0 ? "+" : "";
  return `${sign}${pawns.toFixed(1)}`;
}

export function clampEvalForDisplay(score: number, mate: number | null): number {
  if (mate !== null) {
    return mate > 0 ? 10 : -10;
  }
  return Math.max(-10, Math.min(10, score / 100));
}
