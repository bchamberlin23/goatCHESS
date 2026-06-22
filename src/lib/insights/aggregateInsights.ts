import { Chess } from "chess.js";
import { MoveClassification } from "@/types/enums";
import {
  AggregatedInsights,
  AnalysisRange,
  InsightsGameResult,
  KeyInsight,
  MistakePattern,
  OpponentBucketStat,
  OpponentProfile,
  OpeningStat,
  RankedMove,
  RecentForm,
  TimeControlStat,
} from "@/types/insights";
import { getPositionWinPercentage } from "@/lib/engine/helpers/winPercentage";

export const aggregateInsights = (
  games: InsightsGameResult[]
): AggregatedInsights => {
  const totalGames = games.length;

  const analysisRange = computeAnalysisRange(games);
  const overallAccuracy = computeOverallAccuracy(games);
  const estimatedRating = computeEstimatedRating(games);
  const winRate = computeWinRate(games);
  const accuracyTrend = computeAccuracyTrend(games);
  const ratingTrend = computeRatingTrend(games);
  const { bestMoves, worstMoves } = findBestWorstMoves(games);
  const commonMistakes = detectCommonMistakes(games);
  const openingStats = computeOpeningStats(games);
  const timeControlStats = computeTimeControlStats(games);
  const phaseAccuracy = computePhaseAccuracy(games);
  const classificationTotals = computeClassificationTotals(games);
  const accuracyByColor = computeAccuracyByColor(games);
  const opponentProfile = computeOpponentProfile(games);
  const recentForm = computeRecentForm(games);
  const keyInsights = buildKeyInsights({
    overallAccuracy,
    opponentProfile,
    recentForm,
    phaseAccuracy,
    accuracyByColor,
  });

  return {
    totalGames,
    analysisRange,
    overallAccuracy,
    estimatedRating,
    winRate,
    accuracyTrend,
    ratingTrend,
    bestMoves,
    worstMoves,
    commonMistakes,
    openingStats,
    timeControlStats,
    phaseAccuracy,
    classificationTotals,
    accuracyByColor,
    opponentProfile,
    recentForm,
    keyInsights,
  };
};

const round = (value: number, decimals = 1): number => {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
};

const getUserRating = (game: InsightsGameResult): number => {
  return game.userColor === "white"
    ? game.game.white.rating || 0
    : game.game.black.rating || 0;
};

const getOpponentRating = (game: InsightsGameResult): number => {
  return game.userColor === "white"
    ? game.game.black.rating || 0
    : game.game.white.rating || 0;
};

const getActualScore = (result: InsightsGameResult["result"]): number => {
  if (result === "win") return 1;
  if (result === "draw") return 0.5;
  return 0;
};

const getExpectedScore = (userRating: number, opponentRating: number): number =>
  1 / (1 + 10 ** ((opponentRating - userRating) / 400));

const ratingDiffFromScore = (scoreRate: number): number => {
  const clamped = Math.min(0.99, Math.max(0.01, scoreRate));
  return -400 * Math.log10(1 / clamped - 1);
};

const getDatedGames = (games: InsightsGameResult[]): InsightsGameResult[] => {
  return [...games].sort((a, b) => {
    const aTime = new Date(a.date || "").getTime();
    const bTime = new Date(b.date || "").getTime();

    if (Number.isNaN(aTime) && Number.isNaN(bTime)) return 0;
    if (Number.isNaN(aTime)) return 1;
    if (Number.isNaN(bTime)) return -1;
    return aTime - bTime;
  });
};

const computeAnalysisRange = (games: InsightsGameResult[]): AnalysisRange => {
  const datedGames = getDatedGames(games).filter((game) => game.date);

  return {
    totalGames: games.length,
    firstDate: datedGames[0]?.date,
    lastDate: datedGames[datedGames.length - 1]?.date,
  };
};

const computeOverallAccuracy = (games: InsightsGameResult[]): number => {
  if (games.length === 0) return 0;
  const sum = games.reduce((acc, g) => acc + g.userAccuracy, 0);
  return round(sum / games.length);
};

const computeEstimatedRating = (games: InsightsGameResult[]): number => {
  if (games.length === 0) return 0;
  const sum = games.reduce((acc, g) => acc + g.userEstimatedElo, 0);
  return Math.round(sum / games.length);
};

const computeWinRate = (
  games: InsightsGameResult[]
): { wins: number; draws: number; losses: number } => {
  return games.reduce(
    (acc, g) => {
      if (g.result === "win") acc.wins++;
      else if (g.result === "draw") acc.draws++;
      else acc.losses++;
      return acc;
    },
    { wins: 0, draws: 0, losses: 0 }
  );
};

const computeAccuracyTrend = (
  games: InsightsGameResult[]
): { date: string; accuracy: number; gameIndex: number }[] => {
  return [...games]
    .sort(
      (a, b) =>
        new Date(a.date || "").getTime() - new Date(b.date || "").getTime()
    )
    .map((g, i) => ({
      date: g.date || `Game ${i + 1}`,
      accuracy: Math.round(g.userAccuracy * 10) / 10,
      gameIndex: i,
    }));
};

const computeRatingTrend = (
  games: InsightsGameResult[]
): {
  date: string;
  rating: number;
  estimatedElo: number;
  gameIndex: number;
}[] => {
  return [...games]
    .sort(
      (a, b) =>
        new Date(a.date || "").getTime() - new Date(b.date || "").getTime()
    )
    .map((g, i) => {
      const actualRating =
        g.userColor === "white"
          ? g.game.white.rating || 0
          : g.game.black.rating || 0;
      return {
        date: g.date || `Game ${i + 1}`,
        rating: actualRating,
        estimatedElo: Math.round(g.userEstimatedElo),
        gameIndex: i,
      };
    });
};

const findBestWorstMoves = (
  games: InsightsGameResult[]
): { bestMoves: RankedMove[]; worstMoves: RankedMove[] } => {
  const allMoves: RankedMove[] = [];

  for (let gi = 0; gi < games.length; gi++) {
    const g = games[gi];
    const { gameEval, game, userColor } = g;
    const positions = gameEval.positions;

    // Use chess.js to get move history
    let chessInstance: Chess | null = null;
    try {
      chessInstance = new Chess();
      chessInstance.loadPgn(game.pgn);
    } catch {
      continue;
    }

    if (!chessInstance) continue;
    const history = chessInstance.history({ verbose: true });

    for (let i = 1; i < positions.length && i <= history.length; i++) {
      const move = history[i - 1];
      const isUserMove =
        (userColor === "white" && move.color === "w") ||
        (userColor === "black" && move.color === "b");

      if (!isUserMove) continue;

      const classification = positions[i].moveClassification;
      if (!classification) continue;

      const evalBefore = getPositionWinPercentage(positions[i - 1]);
      const evalAfter = getPositionWinPercentage(positions[i]);

      allMoves.push({
        gameId: game.id,
        gameIndex: gi,
        moveIndex: i,
        moveSan: move.san,
        moveNumber: Math.floor((i - 1) / 2) + 1,
        fen: move.before,
        evalBefore,
        evalAfter,
        classification,
        opening: g.opening,
        gameDate: g.date,
        pgn: game.pgn,
        whiteName: game.white.name,
        blackName: game.black.name,
      });
    }
  }

  const sorted = [...allMoves].sort(
    (a, b) => a.evalAfter - a.evalBefore - (b.evalAfter - b.evalBefore)
  );

  // Best moves: highest positive win% change (from user's perspective)
  const bestMoves = [...allMoves]
    .sort((a, b) => {
      const aChange =
        a.classification === MoveClassification.Splendid
          ? 100
          : a.classification === MoveClassification.Perfect
            ? 50
            : 0;
      const bChange =
        b.classification === MoveClassification.Splendid
          ? 100
          : b.classification === MoveClassification.Perfect
            ? 50
            : 0;

      const aDiff =
        (a.evalAfter - a.evalBefore) * (a.fen.includes(" w ") ? 1 : -1);
      const bDiff =
        (b.evalAfter - b.evalBefore) * (b.fen.includes(" w ") ? 1 : -1);

      return bChange + bDiff - (aChange + aDiff);
    })
    .slice(0, 10);

  // Worst moves: biggest blunders/mistakes
  const worstMoves = sorted
    .filter(
      (m) =>
        m.classification === MoveClassification.Blunder ||
        m.classification === MoveClassification.Mistake
    )
    .slice(0, 10);

  return { bestMoves, worstMoves };
};

const getMovePhase = (
  moveIndex: number
): "opening" | "middlegame" | "endgame" => {
  const moveNumber = Math.floor(moveIndex / 2) + 1;
  if (moveNumber <= 10) return "opening";
  if (moveNumber <= 25) return "middlegame";
  return "endgame";
};

const detectCommonMistakes = (
  games: InsightsGameResult[]
): MistakePattern[] => {
  const phaseBlunders: Record<
    string,
    {
      count: number;
      examples: RankedMove[];
      phase: "opening" | "middlegame" | "endgame";
    }
  > = {};

  for (let gi = 0; gi < games.length; gi++) {
    const g = games[gi];
    const { gameEval, game, userColor } = g;
    const positions = gameEval.positions;

    let chessInstance: Chess | null = null;
    try {
      chessInstance = new Chess();
      chessInstance.loadPgn(game.pgn);
    } catch {
      continue;
    }

    if (!chessInstance) continue;
    const history = chessInstance.history({ verbose: true });

    for (let i = 1; i < positions.length && i <= history.length; i++) {
      const move = history[i - 1];
      const isUserMove =
        (userColor === "white" && move.color === "w") ||
        (userColor === "black" && move.color === "b");

      if (!isUserMove) continue;

      const classification = positions[i].moveClassification;
      if (
        classification !== MoveClassification.Blunder &&
        classification !== MoveClassification.Mistake
      ) {
        continue;
      }

      const phase = getMovePhase(i);
      const key = `${phase}_${classification}`;

      if (!phaseBlunders[key]) {
        phaseBlunders[key] = { count: 0, examples: [], phase };
      }

      phaseBlunders[key].count++;

      if (phaseBlunders[key].examples.length < 5) {
        const evalBefore = getPositionWinPercentage(positions[i - 1]);
        const evalAfter = getPositionWinPercentage(positions[i]);

        phaseBlunders[key].examples.push({
          gameId: game.id,
          gameIndex: gi,
          moveIndex: i,
          moveSan: move.san,
          moveNumber: Math.floor((i - 1) / 2) + 1,
          fen: move.before,
          evalBefore,
          evalAfter,
          classification,
          opening: g.opening,
          gameDate: g.date,
          pgn: game.pgn,
          whiteName: game.white.name,
          blackName: game.black.name,
        });
      }
    }
  }

  const patterns: MistakePattern[] = Object.entries(phaseBlunders)
    .map(([key, data]) => {
      const [phase, classification] = key.split("_");
      const classLabel =
        classification === MoveClassification.Blunder ? "Blunders" : "Mistakes";
      const phaseLabel =
        phase === "opening"
          ? "Opening"
          : phase === "middlegame"
            ? "Middlegame"
            : "Endgame";

      return {
        description: `${phaseLabel} ${classLabel}`,
        count: data.count,
        examples: data.examples,
        phase: data.phase,
      };
    })
    .filter((p) => p.count > 0)
    .sort((a, b) => b.count - a.count);

  return patterns;
};

const computeOpeningStats = (games: InsightsGameResult[]): OpeningStat[] => {
  const openingMap: Record<
    string,
    {
      count: number;
      wins: number;
      draws: number;
      losses: number;
      accuracySum: number;
    }
  > = {};

  for (const g of games) {
    const opening = g.opening || "Unknown Opening";
    if (!openingMap[opening]) {
      openingMap[opening] = {
        count: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        accuracySum: 0,
      };
    }

    openingMap[opening].count++;
    openingMap[opening].accuracySum += g.userAccuracy;

    if (g.result === "win") openingMap[opening].wins++;
    else if (g.result === "draw") openingMap[opening].draws++;
    else openingMap[opening].losses++;
  }

  return Object.entries(openingMap)
    .map(([name, data]) => ({
      name,
      count: data.count,
      wins: data.wins,
      draws: data.draws,
      losses: data.losses,
      winRate:
        data.count > 0 ? Math.round((data.wins / data.count) * 1000) / 10 : 0,
      avgAccuracy:
        data.count > 0
          ? Math.round((data.accuracySum / data.count) * 10) / 10
          : 0,
    }))
    .sort((a, b) => b.count - a.count);
};

const getTimeControlLabel = (tc: string): string => {
  if (!tc) return "Unknown";

  // Parse common formats
  const parts = tc.split("+");
  const base = parseInt(parts[0], 10);

  if (isNaN(base)) return tc;

  if (base < 180) return "Bullet";
  if (base < 600) return "Blitz";
  if (base < 1800) return "Rapid";
  return "Classical";
};

const computeTimeControlStats = (
  games: InsightsGameResult[]
): TimeControlStat[] => {
  const tcMap: Record<
    string,
    {
      label: string;
      count: number;
      wins: number;
      draws: number;
      losses: number;
      accuracySum: number;
    }
  > = {};

  for (const g of games) {
    const tc = g.timeControl || "Unknown";
    const label = getTimeControlLabel(tc);

    if (!tcMap[label]) {
      tcMap[label] = {
        label,
        count: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        accuracySum: 0,
      };
    }

    tcMap[label].count++;
    tcMap[label].accuracySum += g.userAccuracy;

    if (g.result === "win") tcMap[label].wins++;
    else if (g.result === "draw") tcMap[label].draws++;
    else tcMap[label].losses++;
  }

  return Object.entries(tcMap)
    .map(([, data]) => ({
      timeControl: data.label,
      label: data.label,
      count: data.count,
      wins: data.wins,
      draws: data.draws,
      losses: data.losses,
      winRate:
        data.count > 0 ? Math.round((data.wins / data.count) * 1000) / 10 : 0,
      avgAccuracy:
        data.count > 0
          ? Math.round((data.accuracySum / data.count) * 10) / 10
          : 0,
    }))
    .sort((a, b) => b.count - a.count);
};

const computePhaseAccuracy = (
  games: InsightsGameResult[]
): { opening: number; middlegame: number; endgame: number } => {
  const phaseData = {
    opening: { sum: 0, count: 0 },
    middlegame: { sum: 0, count: 0 },
    endgame: { sum: 0, count: 0 },
  };

  for (const g of games) {
    const { gameEval, userColor } = g;
    const positions = gameEval.positions;

    for (let i = 1; i < positions.length; i++) {
      const isUserMove =
        (userColor === "white" && i % 2 === 1) ||
        (userColor === "black" && i % 2 === 0);

      if (!isUserMove) continue;

      const phase = getMovePhase(i);
      const evalBefore = getPositionWinPercentage(positions[i - 1]);
      const evalAfter = getPositionWinPercentage(positions[i]);

      const isWhiteMove = i % 2 === 1;
      const winDiff = isWhiteMove
        ? Math.max(0, evalBefore - evalAfter)
        : Math.max(0, evalAfter - evalBefore);

      // Convert to accuracy using the same formula as the main accuracy computation
      const rawAccuracy =
        103.1668100711649 * Math.exp(-0.04354415386753951 * winDiff) -
        3.166924740191411;
      const accuracy = Math.min(100, Math.max(0, rawAccuracy + 1));

      phaseData[phase].sum += accuracy;
      phaseData[phase].count++;
    }
  }

  return {
    opening:
      phaseData.opening.count > 0
        ? Math.round((phaseData.opening.sum / phaseData.opening.count) * 10) /
          10
        : 0,
    middlegame:
      phaseData.middlegame.count > 0
        ? Math.round(
            (phaseData.middlegame.sum / phaseData.middlegame.count) * 10
          ) / 10
        : 0,
    endgame:
      phaseData.endgame.count > 0
        ? Math.round((phaseData.endgame.sum / phaseData.endgame.count) * 10) /
          10
        : 0,
  };
};

const computeClassificationTotals = (
  games: InsightsGameResult[]
): Record<MoveClassification, number> => {
  const totals = Object.values(MoveClassification).reduce(
    (acc, key) => {
      acc[key] = 0;
      return acc;
    },
    {} as Record<MoveClassification, number>
  );

  for (const g of games) {
    for (const [key, count] of Object.entries(g.classifications)) {
      totals[key as MoveClassification] += count;
    }
  }

  return totals;
};

const computeAccuracyByColor = (
  games: InsightsGameResult[]
): { white: number; black: number } => {
  const whiteGames = games.filter((g) => g.userColor === "white");
  const blackGames = games.filter((g) => g.userColor === "black");

  const whiteAccuracy =
    whiteGames.length > 0
      ? whiteGames.reduce((sum, g) => sum + g.userAccuracy, 0) /
        whiteGames.length
      : 0;

  const blackAccuracy =
    blackGames.length > 0
      ? blackGames.reduce((sum, g) => sum + g.userAccuracy, 0) /
        blackGames.length
      : 0;

  return {
    white: round(whiteAccuracy),
    black: round(blackAccuracy),
  };
};

const getOpponentBucket = (ratingDiff: number): string => {
  if (ratingDiff >= 150) return "Heavy favorite";
  if (ratingDiff >= 50) return "Slight favorite";
  if (ratingDiff <= -150) return "Heavy underdog";
  if (ratingDiff <= -50) return "Slight underdog";
  return "Peer games";
};

const emptyBucket = (label: string) => ({
  label,
  count: 0,
  wins: 0,
  draws: 0,
  losses: 0,
  score: 0,
  expectedScore: 0,
  accuracySum: 0,
});

const computeOpponentProfile = (
  games: InsightsGameResult[]
): OpponentProfile => {
  const ratedGames = games
    .map((game) => ({
      game,
      userRating: getUserRating(game),
      opponentRating: getOpponentRating(game),
      actualScore: getActualScore(game.result),
    }))
    .filter(
      ({ userRating, opponentRating }) => userRating > 0 && opponentRating > 0
    );

  if (ratedGames.length === 0) {
    return {
      avgOpponentRating: 0,
      avgUserRating: 0,
      avgRatingDiff: 0,
      strongestOpponentRating: 0,
      weakestOpponentRating: 0,
      gamesWithRatings: 0,
      gamesAsFavorite: 0,
      gamesAsUnderdog: 0,
      gamesAsPeer: 0,
      upsetWins: 0,
      missedFavorites: 0,
      actualScore: 0,
      expectedScore: 0,
      scoreVsExpected: 0,
      performanceRating: 0,
      bucketStats: [],
    };
  }

  const buckets = new Map<string, ReturnType<typeof emptyBucket>>();
  const orderedBucketLabels = [
    "Heavy underdog",
    "Slight underdog",
    "Peer games",
    "Slight favorite",
    "Heavy favorite",
  ];
  for (const label of orderedBucketLabels) {
    buckets.set(label, emptyBucket(label));
  }

  let userRatingSum = 0;
  let opponentRatingSum = 0;
  let actualScore = 0;
  let expectedScore = 0;
  let gamesAsFavorite = 0;
  let gamesAsUnderdog = 0;
  let gamesAsPeer = 0;
  let upsetWins = 0;
  let missedFavorites = 0;

  for (const item of ratedGames) {
    const { game, userRating, opponentRating } = item;
    const ratingDiff = userRating - opponentRating;
    const gameScore = item.actualScore;
    const gameExpectedScore = getExpectedScore(userRating, opponentRating);
    const bucket = buckets.get(getOpponentBucket(ratingDiff));

    userRatingSum += userRating;
    opponentRatingSum += opponentRating;
    actualScore += gameScore;
    expectedScore += gameExpectedScore;

    if (ratingDiff >= 100) gamesAsFavorite++;
    else if (ratingDiff <= -100) gamesAsUnderdog++;
    else gamesAsPeer++;

    if (ratingDiff <= -100 && game.result === "win") upsetWins++;
    if (ratingDiff >= 100 && game.result === "loss") missedFavorites++;

    if (bucket) {
      bucket.count++;
      bucket.score += gameScore;
      bucket.expectedScore += gameExpectedScore;
      bucket.accuracySum += game.userAccuracy;
      if (game.result === "win") bucket.wins++;
      else if (game.result === "draw") bucket.draws++;
      else bucket.losses++;
    }
  }

  const avgOpponentRating = Math.round(opponentRatingSum / ratedGames.length);
  const avgUserRating = Math.round(userRatingSum / ratedGames.length);
  const scoreRate = actualScore / ratedGames.length;
  const performanceRating = Math.round(
    avgOpponentRating + ratingDiffFromScore(scoreRate)
  );

  const bucketStats: OpponentBucketStat[] = orderedBucketLabels
    .map((label) => buckets.get(label))
    .filter((bucket): bucket is ReturnType<typeof emptyBucket> =>
      Boolean(bucket)
    )
    .filter((bucket) => bucket.count > 0)
    .map((bucket) => ({
      label: bucket.label,
      count: bucket.count,
      wins: bucket.wins,
      draws: bucket.draws,
      losses: bucket.losses,
      score: round(bucket.score),
      expectedScore: round(bucket.expectedScore),
      scoreVsExpected: round(bucket.score - bucket.expectedScore),
      avgAccuracy: round(bucket.accuracySum / bucket.count),
    }));

  return {
    avgOpponentRating,
    avgUserRating,
    avgRatingDiff: Math.round(avgUserRating - avgOpponentRating),
    strongestOpponentRating: Math.max(
      ...ratedGames.map((game) => game.opponentRating)
    ),
    weakestOpponentRating: Math.min(
      ...ratedGames.map((game) => game.opponentRating)
    ),
    gamesWithRatings: ratedGames.length,
    gamesAsFavorite,
    gamesAsUnderdog,
    gamesAsPeer,
    upsetWins,
    missedFavorites,
    actualScore: round(actualScore),
    expectedScore: round(expectedScore),
    scoreVsExpected: round(actualScore - expectedScore),
    performanceRating,
    bucketStats,
  };
};

const computeAverageAccuracy = (games: InsightsGameResult[]): number => {
  if (games.length === 0) return 0;
  return round(
    games.reduce((sum, game) => sum + game.userAccuracy, 0) / games.length
  );
};

const computeScoreRate = (games: InsightsGameResult[]): number => {
  if (games.length === 0) return 0;
  return round(
    (games.reduce((sum, game) => sum + getActualScore(game.result), 0) /
      games.length) *
      100
  );
};

const computeCurrentStreak = (
  games: InsightsGameResult[]
): RecentForm["currentStreak"] => {
  const latestGames = getDatedGames(games).reverse();
  const first = latestGames[0];
  if (!first) return null;

  let length = 0;
  for (const game of latestGames) {
    if (game.result !== first.result) break;
    length++;
  }

  return { result: first.result, length };
};

const computeRecentForm = (games: InsightsGameResult[]): RecentForm => {
  const datedGames = getDatedGames(games);
  const recentGames = datedGames.slice(-10);
  const previousGames = datedGames.slice(-20, -10);
  const recentAccuracy = computeAverageAccuracy(recentGames);
  const previousAccuracy = computeAverageAccuracy(previousGames);
  const recentScore = computeScoreRate(recentGames);
  const previousScore = computeScoreRate(previousGames);

  return {
    recentGames: recentGames.length,
    recentAccuracy,
    previousAccuracy,
    accuracyDelta: round(recentAccuracy - previousAccuracy),
    recentScore,
    previousScore,
    scoreDelta: round(recentScore - previousScore),
    currentStreak: computeCurrentStreak(games),
  };
};

const buildKeyInsights = ({
  opponentProfile,
  recentForm,
  phaseAccuracy,
  accuracyByColor,
}: {
  overallAccuracy: number;
  opponentProfile: OpponentProfile;
  recentForm: RecentForm;
  phaseAccuracy: { opening: number; middlegame: number; endgame: number };
  accuracyByColor: { white: number; black: number };
}): KeyInsight[] => {
  const insights: KeyInsight[] = [];

  if (opponentProfile.gamesWithRatings > 0) {
    const scoreDiff = opponentProfile.scoreVsExpected;
    insights.push({
      title: scoreDiff >= 0 ? "Outperforming expectation" : "Below expectation",
      message:
        scoreDiff >= 0
          ? `Scored ${scoreDiff.toFixed(1)} points above the rating expectation against an average ${opponentProfile.avgOpponentRating} opponent.`
          : `Scored ${Math.abs(scoreDiff).toFixed(1)} points below rating expectation against an average ${opponentProfile.avgOpponentRating} opponent.`,
      tone: scoreDiff >= 0 ? "good" : "warning",
      icon: scoreDiff >= 0 ? "mdi:chart-line-variant" : "mdi:target-variant",
    });
  }

  if (recentForm.recentGames > 0 && recentForm.previousAccuracy > 0) {
    const delta = recentForm.accuracyDelta;
    insights.push({
      title: delta >= 0 ? "Recent accuracy is up" : "Recent accuracy is down",
      message:
        delta >= 0
          ? `Recent accuracy is up ${delta.toFixed(1)} points over the previous sample.`
          : `Recent accuracy is down ${Math.abs(delta).toFixed(1)} points from the previous sample.`,
      tone: delta >= 0 ? "good" : "warning",
      icon: delta >= 0 ? "mdi:trending-up" : "mdi:trending-down",
    });
  }

  const phaseEntries = Object.entries(phaseAccuracy).filter(
    ([, value]) => value > 0
  );
  if (phaseEntries.length > 0) {
    const [weakestPhase, weakestAccuracy] = phaseEntries.sort(
      (a, b) => a[1] - b[1]
    )[0];

    insights.push({
      title: "Phase focus",
      message: `${weakestPhase[0].toUpperCase()}${weakestPhase.slice(1)} accuracy is the softest phase at ${weakestAccuracy.toFixed(1)}%.`,
      tone: weakestAccuracy < 70 ? "warning" : "neutral",
      icon: "mdi:chess-knight",
    });
  }

  const colorGap = round(accuracyByColor.white - accuracyByColor.black);
  if (
    accuracyByColor.white > 0 &&
    accuracyByColor.black > 0 &&
    Math.abs(colorGap) >= 3
  ) {
    insights.push({
      title: "Color imbalance",
      message:
        colorGap > 0
          ? `White games are ${colorGap.toFixed(1)} accuracy points stronger than black games.`
          : `Black games are ${Math.abs(colorGap).toFixed(1)} accuracy points stronger than white games.`,
      tone: "neutral",
      icon: "mdi:contrast-circle",
    });
  }

  if (opponentProfile.upsetWins > 0) {
    insights.push({
      title: "Upset wins",
      message: `${opponentProfile.upsetWins} win${opponentProfile.upsetWins === 1 ? "" : "s"} came against opponents rated at least 100 points higher.`,
      tone: "good",
      icon: "mdi:trophy-outline",
    });
  }

  return insights.slice(0, 5);
};
