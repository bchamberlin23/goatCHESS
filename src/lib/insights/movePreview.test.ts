import assert from "node:assert/strict";
import test from "node:test";
import { getMovePreviewPosition } from "./movePreview";

test("builds before and after positions for SAN move animation", () => {
  const preview = getMovePreviewPosition({
    fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
    moveSan: "e4",
  });

  assert.equal(preview.beforeFen, "start");
  assert.equal(
    preview.afterFen,
    "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1"
  );
  assert.deepEqual(preview.arrow, ["e2", "e4"]);
});

test("falls back to the original position when the move cannot be replayed", () => {
  const preview = getMovePreviewPosition({
    fen: "8/8/8/8/8/8/8/8 w - - 0 1",
    moveSan: "Qh5",
  });

  assert.equal(preview.beforeFen, "8/8/8/8/8/8/8/8 w - - 0 1");
  assert.equal(preview.afterFen, "8/8/8/8/8/8/8/8 w - - 0 1");
  assert.equal(preview.arrow, undefined);
});
