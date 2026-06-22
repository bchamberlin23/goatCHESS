import puzzlePackJson from "@/data/lichessPuzzlePack.json";

export type PuzzleLevel =
  | "Beginner"
  | "Improver"
  | "Club"
  | "Advanced"
  | "Expert";

export interface PuzzleThemeInfo {
  key: string;
  name: string;
  description: string;
}

export interface LichessPuzzle {
  id: string;
  fen: string;
  startFen: string;
  opponentMove: string;
  opponentMoveSan: string;
  solution: string[];
  solutionSans: string[];
  rating: number;
  ratingDeviation: number;
  popularity: number;
  plays: number;
  themes: string[];
  primaryTheme: string;
  gameUrl: string;
  openingTags: string[];
  level: PuzzleLevel;
  userColor: "w" | "b";
  solutionLength: number;
}

export interface PuzzlePack {
  generatedAt: string;
  source: string;
  rowsScanned: number;
  totalCandidates: number;
  puzzles: LichessPuzzle[];
  themes: Record<string, PuzzleThemeInfo>;
}

export interface PuzzleProfile {
  rating: number;
  solved: number;
  failed: number;
  skipped: number;
  attempts: number;
  streak: number;
  bestStreak: number;
  hintsUsed: number;
  seenIds: string[];
  favoriteIds: string[];
  missedIds: string[];
  themeStats: Record<string, { solved: number; failed: number }>;
  history: PuzzleHistoryItem[];
}

export interface PuzzleHistoryItem {
  id: string;
  title: string;
  rating: number;
  result: "solved" | "failed" | "skipped" | "revealed";
  delta: number;
  at: string;
}

export const puzzlePack = puzzlePackJson as PuzzlePack;
export const puzzles = puzzlePack.puzzles;
export const puzzleThemes = puzzlePack.themes;

export const puzzleLevels: ("All" | PuzzleLevel)[] = [
  "All",
  "Beginner",
  "Improver",
  "Club",
  "Advanced",
  "Expert",
];

export const defaultPuzzleProfile: PuzzleProfile = {
  rating: 1200,
  solved: 0,
  failed: 0,
  skipped: 0,
  attempts: 0,
  streak: 0,
  bestStreak: 0,
  hintsUsed: 0,
  seenIds: [],
  favoriteIds: [],
  missedIds: [],
  themeStats: {},
  history: [],
};

export function getPuzzleTitle(puzzle: LichessPuzzle) {
  const theme = puzzleThemes[puzzle.primaryTheme]?.name ?? "Tactic";
  return `${theme} (${puzzle.rating})`;
}

export function getPuzzleThemeDescription(puzzle: LichessPuzzle) {
  return (
    puzzleThemes[puzzle.primaryTheme]?.description ||
    "Find the forcing continuation."
  );
}

export function expectedScore(playerRating: number, puzzleRating: number) {
  return 1 / (1 + 10 ** ((puzzleRating - playerRating) / 400));
}

export function getRatingDelta(
  playerRating: number,
  puzzleRating: number,
  score: 0 | 0.35 | 1
) {
  const expected = expectedScore(playerRating, puzzleRating);
  const k = score === 1 ? 28 : 22;
  return Math.round(k * (score - expected));
}

export function formatOpening(openingTags: string[]) {
  if (!openingTags.length) return "No opening tag";
  return openingTags[openingTags.length - 1].replace(/_/g, " ");
}

export function getDailyChallengePuzzles(
  allPuzzles: LichessPuzzle[]
): LichessPuzzle[] {
  const dateStr = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = dateStr.charCodeAt(i) + ((hash << 5) - hash);
  }

  const getIndex = (offset: number, mod: number) => {
    return Math.abs((hash + offset) % mod);
  };

  const easy = allPuzzles.filter((p) => p.rating < 1100);
  const medium = allPuzzles.filter((p) => p.rating >= 1100 && p.rating < 1600);
  const hard = allPuzzles.filter((p) => p.rating >= 1600);

  const dailyEasy = easy[getIndex(100, easy.length || 1)] || allPuzzles[0];
  const dailyMedium =
    medium[getIndex(200, medium.length || 1)] || allPuzzles[1];
  const dailyHard = hard[getIndex(300, hard.length || 1)] || allPuzzles[2];

  return [dailyEasy, dailyMedium, dailyHard];
}
