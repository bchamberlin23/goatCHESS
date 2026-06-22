import assert from "node:assert/strict";
import test from "node:test";
import {
  getGameCountLabel,
  parseCustomGameCount,
  resolveGameFetchLimit,
} from "./gameCount";

test("resolves preset and unlimited game fetch limits", () => {
  assert.equal(resolveGameFetchLimit({ mode: "preset", value: 25 }), 25);
  assert.equal(resolveGameFetchLimit({ mode: "preset", value: 100 }), 100);
  assert.equal(resolveGameFetchLimit({ mode: "unlimited" }), undefined);
});

test("parses uncapped custom game counts", () => {
  assert.equal(parseCustomGameCount("250"), 250);
  assert.equal(parseCustomGameCount("10000"), 10000);
  assert.equal(parseCustomGameCount("0"), null);
  assert.equal(parseCustomGameCount("-10"), null);
  assert.equal(parseCustomGameCount("lol"), null);
});

test("labels game count choices for progress and buttons", () => {
  assert.equal(getGameCountLabel({ mode: "preset", value: 50 }), "50 games");
  assert.equal(getGameCountLabel({ mode: "custom", value: 125 }), "125 games");
  assert.equal(getGameCountLabel({ mode: "unlimited" }), "all available games");
});
