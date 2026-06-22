import { readFileSync, writeFileSync } from "fs";

const filePath = "src/data/learn/openings/ruy-lopez.ts";
let content = readFileSync(filePath, "utf-8");

const brokenTitles = [
  "Step-by-Step: The Main Line Spanish",
  "Step-by-Step: The Closed Spanish (Breyer)",
  "Step-by-Step: The Marshall Attack",
  "The Marshall Attack: Proper Walkthrough",
  "The Anti-Marshall: 8.h3",
  "The Chigorin Variation 9...Na5",
  "The Zaitsev Variation 9...Bb7",
  "Model Game 1: Fischer vs Spassky, 1972 (Game 5)",
];

for (const title of brokenTitles) {
  const idx = content.indexOf(`title: "${title}"`);
  if (idx === -1) continue;

  let blockStart = idx;
  while (blockStart > 0 && content[blockStart] !== "{") blockStart--;
  if (content[blockStart] !== "{") continue;

  let depth = 0;
  let blockEnd = blockStart;
  for (let i = blockStart; i < content.length; i++) {
    if (content[i] === "{") depth++;
    if (content[i] === "}") {
      depth--;
      if (depth === 0) { blockEnd = i; break; }
    }
  }

  const block = content.slice(blockStart, blockEnd + 1);
  const fenMatch = block.match(/fen:\s*"([^"]+)"/);
  const fen = fenMatch ? fenMatch[1] : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

  const newBlock = `{ title: "${title}", type: "position", interactionMode: "freeplay", fen: "${fen}", content: ${JSON.stringify("Interactive board at the key position. Use the arrows or drag pieces to explore. See the text below for the full explanation of this variation and its strategic ideas.")} }`;

  content = content.slice(0, blockStart) + newBlock + content.slice(blockEnd + 1);
  console.log(`  Fixed: ${title}`);
}

writeFileSync(filePath, content);
console.log("\nDone");
