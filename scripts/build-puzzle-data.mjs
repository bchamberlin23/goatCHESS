#!/usr/bin/env node
import { spawn } from "node:child_process";
import { createWriteStream } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import readline from "node:readline";
import { Chess } from "chess.js";

const root = process.cwd();
const sourcePath = path.join(root, "lichess_db_puzzle.csv.zst");
const themePath = path.join(root, "puzzleTheme.xml");
const srcOutputPath = path.join(root, "src/data/lichessPuzzlePack.json");
const publicOutputPath = path.join(root, "public/data/lichessPuzzlePack.json");
const targetCount = Number(process.env.PUZZLE_LIMIT ?? 3500);
const maxRows = Number(process.env.PUZZLE_SCAN_ROWS ?? 500000);
const lengthThemes = new Set(["oneMove", "short", "long", "veryLong"]);

const themes = await readThemes(themePath);
const candidates = [];
let rowsSeen = 0;

const zstd = spawn("zstdcat", [sourcePath], {
  stdio: ["ignore", "pipe", "inherit"],
});

const rl = readline.createInterface({
  input: zstd.stdout,
  crlfDelay: Infinity,
});

for await (const line of rl) {
  if (!line || line.startsWith("PuzzleId,")) continue;
  rowsSeen++;

  const puzzle = parsePuzzleLine(line, themes);
  if (puzzle) candidates.push(puzzle);

  if (rowsSeen >= maxRows || candidates.length >= targetCount * 3) {
    zstd.kill("SIGTERM");
    break;
  }
}

const selected = selectBalancedPuzzles(candidates, targetCount);
const pack = {
  generatedAt: new Date().toISOString(),
  source: "lichess_db_puzzle.csv.zst",
  rowsScanned: rowsSeen,
  totalCandidates: candidates.length,
  puzzles: selected,
  themes,
};

await mkdir(path.dirname(srcOutputPath), { recursive: true });
await mkdir(path.dirname(publicOutputPath), { recursive: true });
const json = `${JSON.stringify(pack, null, 2)}\n`;
await writeFile(srcOutputPath, json);
await writeFile(publicOutputPath, json);

console.log(
  `Built ${selected.length} puzzles from ${rowsSeen} scanned rows (${candidates.length} candidates).`
);
console.log(srcOutputPath);

async function readThemes(filePath) {
  const xml = await readFile(filePath, "utf8");
  const strings = new Map();
  const re = /<string name="([^"]+)">([\s\S]*?)<\/string>/g;
  let match;

  while ((match = re.exec(xml))) {
    strings.set(match[1], decodeXml(match[2]));
  }

  const result = {};
  for (const [key, name] of strings) {
    if (key.endsWith("Description")) continue;
    result[key] = {
      key,
      name,
      description: strings.get(`${key}Description`) ?? "",
    };
  }

  return result;
}

function parsePuzzleLine(line, themes) {
  const fields = line.split(",");
  if (fields.length < 10) return null;

  const [
    id,
    fen,
    rawMoves,
    ratingRaw,
    deviationRaw,
    popularityRaw,
    playsRaw,
    rawThemes,
    gameUrl,
    openingRaw,
  ] = fields;

  const rating = Number(ratingRaw);
  const ratingDeviation = Number(deviationRaw);
  const popularity = Number(popularityRaw);
  const plays = Number(playsRaw);
  const allMoves = rawMoves.split(" ").filter(Boolean);

  if (allMoves.length < 2) return null;
  if (!Number.isFinite(rating) || !Number.isFinite(popularity)) return null;
  if (ratingDeviation > 115 || popularity < 70 || plays < 50) return null;

  try {
    const setup = new Chess(fen);
    const firstMove = allMoves[0];
    const opponentMove = setup.move(uciToMove(firstMove));
    const startFen = setup.fen();
    const solution = allMoves.slice(1);
    const solutionSans = [];

    for (const uci of solution) {
      const move = setup.move(uciToMove(uci));
      solutionSans.push(move.san);
    }

    const themeKeys = rawThemes.split(" ").filter(Boolean);
    const primaryTheme =
      themeKeys.find((theme) => !lengthThemes.has(theme) && themes[theme]) ??
      themeKeys[0] ??
      "mix";
    const openingTags = openingRaw ? openingRaw.split(" ").filter(Boolean) : [];

    return {
      id,
      fen,
      startFen,
      opponentMove: firstMove,
      opponentMoveSan: opponentMove.san,
      solution,
      solutionSans,
      rating,
      ratingDeviation,
      popularity,
      plays,
      themes: themeKeys,
      primaryTheme,
      gameUrl,
      openingTags,
      level: ratingToLevel(rating),
      userColor: startFen.split(" ")[1],
      solutionLength: solution.length,
    };
  } catch (error) {
    if (process.env.DEBUG_PUZZLES) {
      console.error("Failed puzzle", id, error);
    }
    return null;
  }
}

function selectBalancedPuzzles(puzzles, limit) {
  const buckets = new Map();
  for (const puzzle of puzzles) {
    const bucket = `${puzzle.level}:${puzzle.primaryTheme}`;
    const list = buckets.get(bucket) ?? [];
    list.push(puzzle);
    buckets.set(bucket, list);
  }

  for (const list of buckets.values()) {
    list.sort((a, b) => b.popularity - a.popularity || b.plays - a.plays);
  }

  const selected = [];
  const bucketLists = [...buckets.values()].sort((a, b) => b.length - a.length);
  let changed = true;

  while (selected.length < limit && changed) {
    changed = false;
    for (const list of bucketLists) {
      const next = list.shift();
      if (!next) continue;
      selected.push(next);
      changed = true;
      if (selected.length >= limit) break;
    }
  }

  return selected.sort((a, b) => a.rating - b.rating);
}

function ratingToLevel(rating) {
  if (rating < 1000) return "Beginner";
  if (rating < 1400) return "Improver";
  if (rating < 1800) return "Club";
  if (rating < 2200) return "Advanced";
  return "Expert";
}

function uciToMove(uci) {
  return {
    from: uci.slice(0, 2),
    to: uci.slice(2, 4),
    promotion: uci[4] || undefined,
  };
}

function decodeXml(text) {
  return text
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&amp;", "&");
}
