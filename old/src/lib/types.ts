export type MoveClassification =
  | "brilliant"
  | "great"
  | "best"
  | "excellent"
  | "good"
  | "book"
  | "inaccuracy"
  | "mistake"
  | "blunder"
  | "miss";

export type GamePhase = "opening" | "middlegame" | "endgame";

export interface EngineEval {
  depth: number;
  score: number;
  mate: number | null;
  pv: string[];
  multipv: number;
}

export interface MoveRecord {
  san: string;
  from: string;
  to: string;
  fen: string;
  color: "w" | "b";
  ply: number;
  uci: string;
}

export interface MoveAnalysis extends MoveRecord {
  classification: MoveClassification;
  evalBefore: number;
  evalAfter: number;
  mateBefore: number | null;
  mateAfter: number | null;
  bestMove: string;
  bestMoveSan: string;
  pv: string[];
  expectedPointsLoss: number;
  cpLoss: number;
  engineLines: EngineEval[];
}

export interface GameHeaders {
  white: string;
  black: string;
  whiteElo?: string;
  blackElo?: string;
  result: string;
  date?: string;
  event?: string;
  site?: string;
}

export interface ParsedGame {
  id: string;
  headers: GameHeaders;
  moves: MoveRecord[];
  pgn: string;
  startingFen: string;
}

export interface ClassificationCounts {
  brilliant: number;
  great: number;
  best: number;
  excellent: number;
  good: number;
  book: number;
  inaccuracy: number;
  mistake: number;
  blunder: number;
  miss: number;
}

export interface PhaseStats {
  phase: GamePhase;
  accuracy: number;
  moveCount: number;
}

export interface PlayerReport {
  color: "w" | "b";
  name: string;
  rating?: string;
  accuracy: number;
  counts: ClassificationCounts;
  phases: PhaseStats[];
}

export interface KeyMoment {
  ply: number;
  san: string;
  color: "w" | "b";
  classification: MoveClassification;
  evalSwing: number;
}

export interface GameReport {
  white: PlayerReport;
  black: PlayerReport;
  keyMoments: KeyMoment[];
  result: string;
}

export interface AnalysisState {
  moves: MoveAnalysis[];
  report: GameReport | null;
  progress: number;
  isAnalyzing: boolean;
  isComplete: boolean;
  currentDepth: number;
  estimatedSecondsRemaining: number | null;
  liveEngineLines: EngineEval[];
  liveDepth: number;
}

export interface OpeningInfo {
  eco: string;
  name: string;
  moves: string;
}

export interface ExplorerMove {
  uci: string;
  san: string;
  white: number;
  draws: number;
  black: number;
  total: number;
}

export interface FetchedGame {
  id: string;
  pgn: string;
  white: string;
  black: string;
  result: string;
  date: string;
  whiteElo?: string;
  blackElo?: string;
  url?: string;
}

export const CLASSIFICATION_COLORS: Record<MoveClassification, string> = {
  brilliant: "#1baca6",
  great: "#5c8bb0",
  best: "#81b64c",
  excellent: "#96bc4b",
  good: "#96af8b",
  book: "#a88865",
  inaccuracy: "#f0c15d",
  mistake: "#e6912c",
  blunder: "#ca3431",
  miss: "#dbac66",
};

export const CLASSIFICATION_SYMBOLS: Record<MoveClassification, string> = {
  brilliant: "!!",
  great: "!",
  best: "\u2713",
  excellent: "",
  good: "",
  book: "\u2658",
  inaccuracy: "?!",
  mistake: "?",
  blunder: "??",
  miss: "\u00F8",
};
export const CLASSIFICATION_LABELS: Record<MoveClassification, string> = {
  brilliant: "Brilliant",
  great: "Great",
  best: "Best",
  excellent: "Excellent",
  good: "Good",
  book: "Book",
  inaccuracy: "Inaccuracy",
  mistake: "Mistake",
  blunder: "Blunder",
  miss: "Miss",
};

export const EMPTY_COUNTS: ClassificationCounts = {
  brilliant: 0,
  great: 0,
  best: 0,
  excellent: 0,
  good: 0,
  book: 0,
  inaccuracy: 0,
  mistake: 0,
  blunder: 0,
  miss: 0,
};
