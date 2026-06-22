import assert from "node:assert/strict";
import test from "node:test";
import { EngineName, MoveClassification } from "@/types/enums";
import { GameEval } from "@/types/eval";
import { LoadedGame } from "@/types/game";
import { InsightsGameResult } from "@/types/insights";
import { aggregateInsights } from "./aggregateInsights";

const emptyClassifications = (): Record<MoveClassification, number> =>
  Object.values(MoveClassification).reduce(
    (acc, classification) => {
      acc[classification] = 0;
      return acc;
    },
    {} as Record<MoveClassification, number>
  );

const emptyEval = (estimatedElo: number): GameEval => ({
  positions: [{ lines: [{ cp: 0, depth: 14, multiPv: 1, pv: [] }] }],
  accuracy: { white: 0, black: 0 },
  estimatedElo: { white: estimatedElo, black: estimatedElo },
  settings: {
    engine: EngineName.Stockfish18,
    depth: 14,
    multiPv: 2,
    date: "2026-01-01",
  },
});

const gameResult = ({
  id,
  userColor = "white",
  userRating,
  opponentRating,
  result,
  accuracy,
  estimatedElo,
  date,
}: {
  id: string;
  userColor?: "white" | "black";
  userRating: number;
  opponentRating: number;
  result: "win" | "draw" | "loss";
  accuracy: number;
  estimatedElo: number;
  date: string;
}): InsightsGameResult => {
  const game: LoadedGame = {
    id,
    pgn: `[Event "Test"]\n[Site "?"]\n[Date "${date}"]\n[Round "?"]\n[White "${userColor === "white" ? "Alice" : "Opponent"}"]\n[Black "${userColor === "black" ? "Alice" : "Opponent"}"]\n[Result "1/2-1/2"]\n\n1. e4 e5 1/2-1/2`,
    date,
    white: {
      name: userColor === "white" ? "Alice" : "Opponent",
      rating: userColor === "white" ? userRating : opponentRating,
    },
    black: {
      name: userColor === "black" ? "Alice" : "Opponent",
      rating: userColor === "black" ? userRating : opponentRating,
    },
    result,
    timeControl: "10+0",
  };

  return {
    game,
    gameEval: emptyEval(estimatedElo),
    userColor,
    userAccuracy: accuracy,
    userEstimatedElo: estimatedElo,
    classifications: emptyClassifications(),
    result,
    timeControl: "10+0",
    date,
  };
};

test("aggregates opponent quality and expected score context", () => {
  const insights = aggregateInsights([
    gameResult({
      id: "upset",
      userRating: 1500,
      opponentRating: 1700,
      result: "win",
      accuracy: 82,
      estimatedElo: 1660,
      date: "2026-01-01",
    }),
    gameResult({
      id: "missed-favorite",
      userRating: 1500,
      opponentRating: 1300,
      result: "loss",
      accuracy: 58,
      estimatedElo: 1380,
      date: "2026-01-02",
    }),
    gameResult({
      id: "even",
      userRating: 1500,
      opponentRating: 1500,
      result: "draw",
      accuracy: 70,
      estimatedElo: 1500,
      date: "2026-01-03",
    }),
  ]);

  assert.equal(insights.opponentProfile.avgOpponentRating, 1500);
  assert.equal(insights.opponentProfile.avgRatingDiff, 0);
  assert.equal(insights.opponentProfile.upsetWins, 1);
  assert.equal(insights.opponentProfile.missedFavorites, 1);
  assert.equal(insights.opponentProfile.gamesAsUnderdog, 1);
  assert.equal(insights.opponentProfile.gamesAsFavorite, 1);
  assert.equal(insights.opponentProfile.actualScore, 1.5);
  assert.equal(insights.opponentProfile.expectedScore, 1.5);
  assert.equal(insights.opponentProfile.scoreVsExpected, 0);
  assert.equal(insights.opponentProfile.performanceRating, 1500);
});

test("summarizes analyzed range and recent form", () => {
  const games = Array.from({ length: 12 }, (_, index) =>
    gameResult({
      id: `game-${index + 1}`,
      userRating: 1600,
      opponentRating: 1600,
      result: index >= 9 ? "win" : "loss",
      accuracy: index < 6 ? 60 : 78,
      estimatedElo: index < 6 ? 1450 : 1700,
      date: `2026-01-${String(index + 1).padStart(2, "0")}`,
    })
  );

  const insights = aggregateInsights(games);

  assert.deepEqual(insights.analysisRange, {
    totalGames: 12,
    firstDate: "2026-01-01",
    lastDate: "2026-01-12",
  });
  assert.equal(insights.recentForm.recentGames, 10);
  assert.equal(insights.recentForm.recentAccuracy, 70.8);
  assert.equal(insights.recentForm.previousAccuracy, 60);
  assert.equal(insights.recentForm.accuracyDelta, 10.8);
  assert.deepEqual(insights.recentForm.currentStreak, {
    result: "win",
    length: 3,
  });
  assert.ok(
    insights.keyInsights.some((item) =>
      item.message.includes("Recent accuracy is up")
    )
  );
});
