import assert from "node:assert/strict";
import test from "node:test";
import { EngineName } from "@/types/enums";
import {
  createTournament,
  getActiveMatch,
  getNextGamePairing,
  getTournamentResultFromGame,
  recordTournamentGame,
  type TournamentParticipant,
} from "./tournament";
import { Chess } from "chess.js";

const participant = (
  seed: number,
  name: string,
  elo = 1500
): TournamentParticipant => ({
  id: `engine-${seed}`,
  seed,
  name,
  elo,
  selection: { kind: "browser", name: EngineName.Stockfish18Lite },
});

test("seeds a bracket and alternates colors for a scheduled match", () => {
  const tournament = createTournament({
    name: "Test Cup",
    gamesPerMatch: 2,
    participants: [
      participant(1, "Alpha"),
      participant(2, "Bravo"),
      participant(3, "Charlie"),
      participant(4, "Delta"),
    ],
  });

  assert.deepEqual(
    tournament.rounds[0].matches.map((match) => [
      match.playerA?.name,
      match.playerB?.name,
    ]),
    [
      ["Alpha", "Delta"],
      ["Bravo", "Charlie"],
    ]
  );

  assert.equal(getNextGamePairing(tournament)?.white.name, "Alpha");
  assert.equal(getNextGamePairing(tournament)?.black.name, "Delta");

  const afterGameOne = recordTournamentGame(tournament, {
    matchId: "r1-m1",
    result: "1-0",
    pgn: '[Result "1-0"]\n\n1. e4 1-0',
    moves: 1,
  });

  assert.equal(getNextGamePairing(afterGameOne)?.white.name, "Delta");
  assert.equal(getNextGamePairing(afterGameOne)?.black.name, "Alpha");
});

test("keeps tied matches alive until an engine leads", () => {
  const tournament = createTournament({
    name: "Draw Lab",
    gamesPerMatch: 1,
    participants: [participant(1, "Alpha"), participant(2, "Bravo")],
  });

  const afterDraw = recordTournamentGame(tournament, {
    matchId: "r1-m1",
    result: "1/2-1/2",
    pgn: '[Result "1/2-1/2"]\n\n1. Nf3 Nf6 1/2-1/2',
    moves: 2,
  });

  const matchAfterDraw = getActiveMatch(afterDraw);

  assert.equal(matchAfterDraw?.status, "playing");
  assert.equal(matchAfterDraw?.needsTiebreak, true);
  assert.equal(getNextGamePairing(afterDraw)?.gameNumber, 2);

  const afterDecisiveGame = recordTournamentGame(afterDraw, {
    matchId: "r1-m1",
    result: "0-1",
    pgn: '[Result "0-1"]\n\n1. e4 c5 0-1',
    moves: 2,
  });

  assert.equal(afterDecisiveGame.status, "complete");
  assert.equal(afterDecisiveGame.champion?.name, "Alpha");
});

test("advances winners through rounds and marks the champion", () => {
  const tournament = createTournament({
    name: "Knockout",
    gamesPerMatch: 1,
    participants: [
      participant(1, "Alpha"),
      participant(2, "Bravo"),
      participant(3, "Charlie"),
      participant(4, "Delta"),
    ],
  });

  const afterFirstSemi = recordTournamentGame(tournament, {
    matchId: "r1-m1",
    result: "1-0",
    pgn: '[Result "1-0"]\n\n1. e4 1-0',
    moves: 1,
  });

  const afterSecondSemi = recordTournamentGame(afterFirstSemi, {
    matchId: "r1-m2",
    result: "0-1",
    pgn: '[Result "0-1"]\n\n1. d4 Nf6 0-1',
    moves: 2,
  });

  const finalMatch = getActiveMatch(afterSecondSemi);

  assert.equal(finalMatch?.round, 2);
  assert.equal(finalMatch?.playerA?.name, "Alpha");
  assert.equal(finalMatch?.playerB?.name, "Charlie");

  const completed = recordTournamentGame(afterSecondSemi, {
    matchId: "r2-m1",
    result: "0-1",
    pgn: '[Result "0-1"]\n\n1. c4 e5 0-1',
    moves: 2,
  });

  assert.equal(completed.status, "complete");
  assert.equal(completed.champion?.name, "Charlie");
  assert.deepEqual(
    completed.standings
      .slice(0, 3)
      .map((standing) => standing.participant.name),
    ["Charlie", "Alpha", "Bravo"]
  );
});

test("reads checkmate and drawn chess games as tournament results", () => {
  const mate = new Chess();
  mate.move("f3");
  mate.move("e5");
  mate.move("g4");
  mate.move("Qh4#");

  assert.equal(getTournamentResultFromGame(mate), "0-1");

  const draw = new Chess("8/8/8/8/8/8/5k2/7K w - - 0 1");
  assert.equal(getTournamentResultFromGame(draw), "1/2-1/2");
});
