import assert from "node:assert/strict";
import test from "node:test";
import { getPlatformInfo } from "./gameUrl";

test("detects canonical Chess.com game URLs", () => {
  assert.deepEqual(getPlatformInfo("https://www.chess.com/game/169058827036"), {
    platform: "Chess.com",
    id: "169058827036",
    type: "chesscom",
  });

  assert.deepEqual(
    getPlatformInfo("https://www.chess.com/game/169058827036/"),
    {
      platform: "Chess.com",
      id: "169058827036",
      type: "chesscom",
    }
  );

  assert.deepEqual(
    getPlatformInfo("https://www.chess.com/game/169058827036?move=12"),
    {
      platform: "Chess.com",
      id: "169058827036",
      type: "chesscom",
    }
  );
});
