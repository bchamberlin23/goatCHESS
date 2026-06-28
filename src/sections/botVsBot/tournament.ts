import { EngineSelection } from "@/lib/engine/selection";
import { Chess } from "chess.js";

export type TournamentResult = "1-0" | "0-1" | "1/2-1/2";
export type TournamentStatus = "idle" | "running" | "complete";
export type TournamentMatchStatus = "waiting" | "playing" | "complete";

export interface TournamentParticipant {
  id: string;
  seed: number;
  name: string;
  elo: number;
  selection: EngineSelection;
}

export interface TournamentGameRecord {
  id: string;
  matchId: string;
  gameNumber: number;
  whiteId: string;
  blackId: string;
  result: TournamentResult;
  pgn: string;
  moves: number;
  winnerId?: string;
}

export interface TournamentMatch {
  id: string;
  round: number;
  index: number;
  playerA?: TournamentParticipant;
  playerB?: TournamentParticipant;
  scoreA: number;
  scoreB: number;
  status: TournamentMatchStatus;
  needsTiebreak: boolean;
  winner?: TournamentParticipant;
  games: TournamentGameRecord[];
}

export interface TournamentRound {
  round: number;
  label: string;
  matches: TournamentMatch[];
}

export interface TournamentStanding {
  participant: TournamentParticipant;
  points: number;
  wins: number;
  draws: number;
  losses: number;
  games: number;
  eliminatedRound?: number;
}

export interface TournamentState {
  id: string;
  name: string;
  gamesPerMatch: number;
  participants: TournamentParticipant[];
  rounds: TournamentRound[];
  standings: TournamentStanding[];
  status: TournamentStatus;
  champion?: TournamentParticipant;
}

export interface TournamentConfig {
  name: string;
  gamesPerMatch: number;
  participants: TournamentParticipant[];
}

export interface TournamentGameInput {
  matchId: string;
  result: TournamentResult;
  pgn: string;
  moves: number;
}

export interface TournamentGamePairing {
  match: TournamentMatch;
  gameNumber: number;
  white: TournamentParticipant;
  black: TournamentParticipant;
}

export const createTournament = (
  config: TournamentConfig
): TournamentState => ({
  id: newTournamentId(),
  name: config.name,
  gamesPerMatch: Math.max(1, Math.floor(config.gamesPerMatch)),
  participants: sortParticipants(config.participants),
  rounds: createRounds(config.participants),
  standings: createStandings(config.participants),
  status: "running",
});

export const getActiveMatch = (
  tournament: TournamentState
): TournamentMatch | undefined =>
  tournament.rounds
    .flatMap((round) => round.matches)
    .find((match) => match.status === "playing");

export const getNextGamePairing = (
  tournament: TournamentState
): TournamentGamePairing | undefined => {
  const match = getActiveMatch(tournament);
  if (!match?.playerA || !match.playerB) return undefined;
  const { white, black } = getMatchPairing(match);

  return {
    match,
    gameNumber: match.games.length + 1,
    white,
    black,
  };
};

export const getTournamentResultFromGame = (
  game: Chess
): TournamentResult | null => {
  if (!game.isGameOver()) return null;
  if (game.isCheckmate()) return game.turn() === "w" ? "0-1" : "1-0";
  if (game.isDraw()) return "1/2-1/2";
  return null;
};

export const recordTournamentGame = (
  tournament: TournamentState,
  input: TournamentGameInput
): TournamentState => {
  const rounds = tournament.rounds.map((round) => ({
    ...round,
    matches: round.matches.map((match) => ({
      ...match,
      games: [...match.games],
    })),
  }));
  const match = rounds
    .flatMap((round) => round.matches)
    .find((candidate) => candidate.id === input.matchId);

  if (!match?.playerA || !match.playerB || match.status === "complete") {
    return tournament;
  }

  const gameNumber = match.games.length + 1;
  const { white, black } = getMatchPairing(match);
  const winnerId =
    input.result === "1-0"
      ? white.id
      : input.result === "0-1"
        ? black.id
        : undefined;
  const record: TournamentGameRecord = {
    id: `${match.id}-g${gameNumber}`,
    matchId: match.id,
    gameNumber,
    whiteId: white.id,
    blackId: black.id,
    result: input.result,
    pgn: input.pgn,
    moves: input.moves,
    winnerId,
  };

  match.games.push(record);
  const { scoreA, scoreB } = scoreMatch(match);
  match.scoreA = scoreA;
  match.scoreB = scoreB;
  match.needsTiebreak =
    match.games.length >= tournament.gamesPerMatch && scoreA === scoreB;

  let champion = tournament.champion;
  if (match.games.length >= tournament.gamesPerMatch && scoreA !== scoreB) {
    match.status = "complete";
    match.winner = scoreA > scoreB ? match.playerA : match.playerB;
    champion = advanceWinner(rounds, match) ?? champion;
  }

  const standings = createStandings(tournament.participants, rounds);
  return {
    ...tournament,
    champion,
    rounds,
    standings,
    status: champion ? "complete" : "running",
  };
};

const newTournamentId = (): string => `tournament-${Date.now()}`;

const sortParticipants = (
  participants: TournamentParticipant[]
): TournamentParticipant[] =>
  [...participants].sort(
    (a, b) => a.seed - b.seed || a.name.localeCompare(b.name)
  );

const createRounds = (
  participants: TournamentParticipant[]
): TournamentRound[] => {
  const seededParticipants = sortParticipants(participants);
  const size = seededParticipants.length;
  const roundCount = Math.ceil(Math.log2(size));
  const seedMap = new Map(
    seededParticipants.map((participant) => [participant.seed, participant])
  );
  const orderedSeeds = buildSeedOrder(size);
  const rounds: TournamentRound[] = [];

  for (let round = 1; round <= roundCount; round++) {
    const matchCount = size / 2 ** round;
    rounds.push({
      round,
      label: getRoundLabel(round, roundCount),
      matches: Array.from({ length: matchCount }, (_, idx) => {
        const matchIndex = idx + 1;
        const firstSeed = orderedSeeds[idx * 2];
        const secondSeed = orderedSeeds[idx * 2 + 1];
        const playerA = round === 1 ? seedMap.get(firstSeed) : undefined;
        const playerB = round === 1 ? seedMap.get(secondSeed) : undefined;

        return {
          id: `r${round}-m${matchIndex}`,
          round,
          index: matchIndex,
          playerA,
          playerB,
          scoreA: 0,
          scoreB: 0,
          status: playerA && playerB ? "playing" : "waiting",
          needsTiebreak: false,
          games: [],
        };
      }),
    });
  }

  return rounds;
};

const buildSeedOrder = (size: number): number[] => {
  if (size <= 1) return [1];
  return buildSeedOrder(size / 2).flatMap((seed) => [seed, size + 1 - seed]);
};

const getRoundLabel = (round: number, roundCount: number): string => {
  if (round === roundCount) return "Final";
  if (round === roundCount - 1) return "Semifinal";
  return `Round ${round}`;
};

const getMatchPairing = (
  match: TournamentMatch
): { white: TournamentParticipant; black: TournamentParticipant } => {
  if (!match.playerA || !match.playerB) {
    throw new Error(`Match ${match.id} is missing players`);
  }

  return match.games.length % 2 === 0
    ? { white: match.playerA, black: match.playerB }
    : { white: match.playerB, black: match.playerA };
};

const scoreMatch = (
  match: TournamentMatch
): { scoreA: number; scoreB: number } => {
  let scoreA = 0;
  let scoreB = 0;

  for (const game of match.games) {
    if (game.result === "1/2-1/2") {
      scoreA += 0.5;
      scoreB += 0.5;
      continue;
    }

    if (game.winnerId === match.playerA?.id) {
      scoreA += 1;
    } else {
      scoreB += 1;
    }
  }

  return { scoreA, scoreB };
};

const advanceWinner = (
  rounds: TournamentRound[],
  match: TournamentMatch
): TournamentParticipant | undefined => {
  if (!match.winner) return undefined;

  const nextRound = rounds.find((round) => round.round === match.round + 1);
  if (!nextRound) return match.winner;

  const targetMatch = nextRound.matches[Math.ceil(match.index / 2) - 1];
  if (!targetMatch) return undefined;

  if (match.index % 2 === 1) {
    targetMatch.playerA = match.winner;
  } else {
    targetMatch.playerB = match.winner;
  }

  if (targetMatch.playerA && targetMatch.playerB) {
    targetMatch.status = "playing";
  }

  return undefined;
};

const createStandings = (
  participants: TournamentParticipant[],
  rounds: TournamentRound[] = []
): TournamentStanding[] => {
  const standings = new Map<string, TournamentStanding>();

  for (const participant of sortParticipants(participants)) {
    standings.set(participant.id, {
      participant,
      points: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      games: 0,
    });
  }

  for (const match of rounds.flatMap((round) => round.matches)) {
    if (
      match.status === "complete" &&
      match.playerA &&
      match.playerB &&
      match.winner
    ) {
      const loser =
        match.winner.id === match.playerA.id ? match.playerB : match.playerA;
      const loserStanding = standings.get(loser.id);
      if (loserStanding) loserStanding.eliminatedRound = match.round;
    }

    for (const game of match.games) {
      const white = standings.get(game.whiteId);
      const black = standings.get(game.blackId);
      if (!white || !black) continue;

      white.games += 1;
      black.games += 1;

      if (game.result === "1/2-1/2") {
        white.draws += 1;
        black.draws += 1;
        white.points += 0.5;
        black.points += 0.5;
      } else if (game.result === "1-0") {
        white.wins += 1;
        black.losses += 1;
        white.points += 1;
      } else {
        black.wins += 1;
        white.losses += 1;
        black.points += 1;
      }
    }
  }

  return [...standings.values()].sort(
    (a, b) =>
      b.points - a.points ||
      b.wins - a.wins ||
      a.losses - b.losses ||
      a.participant.seed - b.participant.seed
  );
};
