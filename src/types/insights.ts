import { MoveClassification } from "./enums";
import { GameEval } from "./eval";
import { LoadedGame } from "./game";

export interface InsightsGameResult {
  game: LoadedGame;
  gameEval: GameEval;
  userColor: "white" | "black";
  userAccuracy: number;
  userEstimatedElo: number;
  classifications: Record<MoveClassification, number>;
  opening?: string;
  result: "win" | "draw" | "loss";
  timeControl?: string;
  date?: string;
}

export interface InsightsReport {
  username: string;
  platform: "chesscom" | "lichess";
  games: InsightsGameResult[];
  aggregated: AggregatedInsights;
  analyzedAt: string;
}

export interface AggregatedInsights {
  totalGames: number;
  analysisRange: AnalysisRange;
  overallAccuracy: number;
  estimatedRating: number;
  winRate: { wins: number; draws: number; losses: number };
  accuracyTrend: { date: string; accuracy: number; gameIndex: number }[];
  bestMoves: RankedMove[];
  worstMoves: RankedMove[];
  commonMistakes: MistakePattern[];
  openingStats: OpeningStat[];
  timeControlStats: TimeControlStat[];
  phaseAccuracy: { opening: number; middlegame: number; endgame: number };
  classificationTotals: Record<MoveClassification, number>;
  ratingTrend: {
    date: string;
    rating: number;
    estimatedElo: number;
    gameIndex: number;
  }[];
  accuracyByColor: { white: number; black: number };
  opponentProfile: OpponentProfile;
  recentForm: RecentForm;
  keyInsights: KeyInsight[];
}

export interface RankedMove {
  gameId: string;
  gameIndex: number;
  moveIndex: number;
  moveSan: string;
  moveNumber: number;
  fen: string;
  evalBefore: number;
  evalAfter: number;
  classification: MoveClassification;
  opening?: string;
  gameDate?: string;
  pgn: string;
  whiteName: string;
  blackName: string;
}

export interface MistakePattern {
  description: string;
  count: number;
  examples: RankedMove[];
  phase: "opening" | "middlegame" | "endgame";
}

export interface OpeningStat {
  name: string;
  count: number;
  wins: number;
  draws: number;
  losses: number;
  winRate: number;
  avgAccuracy: number;
}

export interface TimeControlStat {
  timeControl: string;
  label: string;
  count: number;
  wins: number;
  draws: number;
  losses: number;
  winRate: number;
  avgAccuracy: number;
}

export interface AnalysisRange {
  totalGames: number;
  firstDate?: string;
  lastDate?: string;
}

export interface OpponentProfile {
  avgOpponentRating: number;
  avgUserRating: number;
  avgRatingDiff: number;
  strongestOpponentRating: number;
  weakestOpponentRating: number;
  gamesWithRatings: number;
  gamesAsFavorite: number;
  gamesAsUnderdog: number;
  gamesAsPeer: number;
  upsetWins: number;
  missedFavorites: number;
  actualScore: number;
  expectedScore: number;
  scoreVsExpected: number;
  performanceRating: number;
  bucketStats: OpponentBucketStat[];
}

export interface OpponentBucketStat {
  label: string;
  count: number;
  wins: number;
  draws: number;
  losses: number;
  score: number;
  expectedScore: number;
  scoreVsExpected: number;
  avgAccuracy: number;
}

export interface RecentForm {
  recentGames: number;
  recentAccuracy: number;
  previousAccuracy: number;
  accuracyDelta: number;
  recentScore: number;
  previousScore: number;
  scoreDelta: number;
  currentStreak: {
    result: "win" | "draw" | "loss";
    length: number;
  } | null;
}

export interface KeyInsight {
  title: string;
  message: string;
  tone: "good" | "warning" | "neutral";
  icon: string;
}
