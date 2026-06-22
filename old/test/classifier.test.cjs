/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const Module = require("node:module");
const path = require("node:path");
const test = require("node:test");
const ts = require("typescript");

const root = path.resolve(__dirname, "..");
const originalResolveFilename = Module._resolveFilename;

Module._resolveFilename = function resolveAlias(request, parent, isMain, options) {
  if (request.startsWith("@/")) {
    return originalResolveFilename.call(
      this,
      path.join(root, "src", request.slice(2)),
      parent,
      isMain,
      options,
    );
  }

  return originalResolveFilename.call(this, request, parent, isMain, options);
};

require.extensions[".ts"] = function loadTypescript(module, filename) {
  const source = fs.readFileSync(filename, "utf8");
  const output = ts.transpileModule(source, {
    compilerOptions: {
      esModuleInterop: true,
      module: ts.ModuleKind.CommonJS,
      resolveJsonModule: true,
      target: ts.ScriptTarget.ES2022,
    },
    fileName: filename,
  }).outputText;

  module._compile(output, filename);
};

const { classifyMove } = require("../src/engine/classifier.ts");

function makeInput(overrides = {}) {
  return {
    move: {
      san: "Qh5",
      from: "g1",
      to: "f3",
      fen: "",
      color: "w",
      ply: 1,
      uci: "g1f3",
    },
    fenBefore: "startpos",
    evalBefore: 20,
    mateBefore: null,
    evalAfter: 25,
    mateAfter: null,
    bestMoveUci: "e2e4",
    bestEvalAfter: 30,
    bestMateAfter: null,
    moveSansBefore: [],
    ...overrides,
  };
}

test("near-equal non-top engine move is not brilliant without a major swing", () => {
  assert.notEqual(classifyMove(makeInput()), "brilliant");
});

test("non-top move can still be brilliant when it creates a major improvement", () => {
  assert.equal(
    classifyMove(
      makeInput({
        evalBefore: -150,
        evalAfter: 120,
        bestEvalAfter: 125,
      }),
    ),
    "brilliant",
  );
});
