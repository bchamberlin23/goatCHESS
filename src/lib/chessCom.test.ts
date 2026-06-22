import assert from "node:assert/strict";
import test from "node:test";
import {
  ChessComActiveGameError,
  formatChessComLiveGamePgn,
  isAllowedChessComCallbackUrl,
  isPgnInProgress,
} from "./chessCom";

test("formats Chess.com live callback moveList as an in-progress PGN", () => {
  const pgn = formatChessComLiveGamePgn({
    game: {
      moveList: "mC0Kgv7Tbq5Qlt9IqHT7cM1TMFWOHs2MFwZRfm6Eeg",
      pgnHeaders: {
        Event: "Live Chess",
        Site: "Chess.com",
        Date: "2026.05.22",
        White: "Alpha",
        Black: "Beta",
      },
    },
    players: {
      bottom: { username: "Alpha", rating: 1500 },
      top: { username: "Beta", rating: 1600 },
    },
  });

  assert.match(pgn, /\[Event "Live Chess"\]/);
  assert.match(pgn, /\[Site "Chess.com"\]/);
  assert.match(pgn, /\[Date "2026\.05\.22"\]/);
  assert.match(pgn, /\[White "Alpha"\]/);
  assert.match(pgn, /\[Black "Beta"\]/);
  assert.match(pgn, /\[WhiteElo "1500"\]/);
  assert.match(pgn, /\[BlackElo "1600"\]/);
  assert.match(pgn, /\[Result "\*"\]/);
  assert.match(pgn, /1\. e4 e5 2\. Nf3 Qf6 3\. Na3 Nc6 4\. d3 Bc5 5\. Nb5 Qd8/);
  assert.match(pgn, /11\. O-O \*$/);
});

test("reports active Chess.com games when live metadata has no decodable moves", () => {
  assert.throws(
    () =>
      formatChessComLiveGamePgn({
        game: {
          pgnHeaders: {
            White: "Alpha",
            Black: "Beta",
          },
        },
        players: {
          bottom: { username: "Alpha" },
          top: { username: "Beta" },
        },
      }),
    (error) =>
      error instanceof ChessComActiveGameError &&
      error.players.white === "Alpha" &&
      error.players.black === "Beta"
  );
});

test("detects whether a PGN is still in progress from its Result header", () => {
  assert.equal(isPgnInProgress('[Result "*"]\n\n1. e4 *'), true);
  assert.equal(isPgnInProgress('[Result "1-0"]\n\n1. e4 e5 1-0'), false);
  assert.equal(isPgnInProgress("1. e4 e5"), false);
});

test("only allows Chess.com live and daily callback URLs through the proxy", () => {
  assert.equal(
    isAllowedChessComCallbackUrl(
      "https://www.chess.com/callback/live/game/169058827036"
    ),
    true
  );
  assert.equal(
    isAllowedChessComCallbackUrl(
      "https://www.chess.com/callback/daily/game/169058827036"
    ),
    true
  );
  assert.equal(
    isAllowedChessComCallbackUrl("https://www.chess.com/game/169058827036"),
    false
  );
  assert.equal(
    isAllowedChessComCallbackUrl(
      "https://example.com/callback/live/game/169058827036"
    ),
    false
  );
});
