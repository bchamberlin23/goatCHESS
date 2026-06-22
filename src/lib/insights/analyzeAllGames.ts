import { Chess } from "chess.js";
import { MoveClassification } from "@/types/enums";
import { GameEval } from "@/types/eval";
import { LoadedGame } from "@/types/game";
import { InsightsGameResult, InsightsReport } from "@/types/insights";
import { getEvaluateGameParams } from "@/lib/chess";
import { Engine } from "@/lib/engine/engine";
import { aggregateInsights } from "./aggregateInsights";

export interface AnalyzeAllGamesParams {
  games: LoadedGame[];
  username: string;
  platform: "chesscom" | "lichess";
  engine: Engine;
  depth?: number;
  onGameStart?: (gameIndex: number, game: LoadedGame) => void;
  onGameComplete?: (gameIndex: number, gameResult: InsightsGameResult) => void;
  onProgress?: (progress: number) => void;
  signal?: AbortSignal;
}

export const analyzeAllGames = async ({
  games,
  username,
  platform,
  engine,
  depth = 14,
  onGameStart,
  onGameComplete,
  onProgress,
  signal,
}: AnalyzeAllGamesParams): Promise<InsightsReport> => {
  const results: InsightsGameResult[] = [];
  const total = games.length;

  for (let i = 0; i < total; i++) {
    if (signal?.aborted) {
      throw new DOMException("Analysis cancelled", "AbortError");
    }

    const game = games[i];
    onGameStart?.(i, game);

    try {
      const gameResult = await analyzeGame(
        game,
        username,
        engine,
        depth,
        signal
      );
      results.push(gameResult);
      onGameComplete?.(i, gameResult);
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        throw error;
      }
      console.error(`Error analyzing game ${i}:`, error);
      // Skip failed games
    }

    onProgress?.(((i + 1) / total) * 100);
  }

  if (results.length === 0) {
    throw new Error("No games could be analyzed");
  }

  const aggregated = aggregateInsights(results);

  return {
    username,
    platform,
    games: results,
    aggregated,
    analyzedAt: new Date().toISOString(),
  };
};

const analyzeGame = async (
  game: LoadedGame,
  username: string,
  engine: Engine,
  depth: number,
  signal?: AbortSignal
): Promise<InsightsGameResult> => {
  const chess = new Chess();
  chess.loadPgn(game.pgn);

  const { fens, uciMoves } = getEvaluateGameParams(chess);

  const userColor: "white" | "black" =
    game.white.name.toLowerCase() === username.toLowerCase()
      ? "white"
      : "black";

  const playersRatings = {
    white: game.white.rating,
    black: game.black.rating,
  };

  const gameEval: GameEval = await engine.evaluateGame({
    fens,
    uciMoves,
    depth,
    multiPv: 2,
    playersRatings,
    workersNb: 1,
    signal,
  });

  const userAccuracy =
    userColor === "white" ? gameEval.accuracy.white : gameEval.accuracy.black;

  const userEstimatedElo =
    userColor === "white"
      ? (gameEval.estimatedElo?.white ?? 0)
      : (gameEval.estimatedElo?.black ?? 0);

  // Count classifications for user's moves
  const classifications = Object.values(MoveClassification).reduce(
    (acc, key) => {
      acc[key] = 0;
      return acc;
    },
    {} as Record<MoveClassification, number>
  );

  const history = chess.history({ verbose: true });
  for (let i = 1; i < gameEval.positions.length && i <= history.length; i++) {
    const move = history[i - 1];
    const isUserMove =
      (userColor === "white" && move.color === "w") ||
      (userColor === "black" && move.color === "b");

    if (!isUserMove) continue;

    const classification = gameEval.positions[i].moveClassification;
    if (classification) {
      classifications[classification]++;
    }
  }

  // Determine opening from game eval
  let opening: string | undefined;
  for (let i = gameEval.positions.length - 1; i >= 0; i--) {
    if (gameEval.positions[i].opening) {
      opening = gameEval.positions[i].opening;
      break;
    }
  }

  // Determine result
  let result: "win" | "draw" | "loss";
  const gameResult = game.result;
  if (gameResult === "1/2-1/2" || gameResult === "draw") {
    result = "draw";
  } else if (
    (gameResult === "1-0" && userColor === "white") ||
    (gameResult === "0-1" && userColor === "black")
  ) {
    result = "win";
  } else {
    result = "loss";
  }

  return {
    game,
    gameEval,
    userColor,
    userAccuracy,
    userEstimatedElo,
    classifications,
    opening,
    result,
    timeControl: game.timeControl,
    date: game.date,
  };
};
