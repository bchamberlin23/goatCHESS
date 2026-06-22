import { Chess } from "chess.js";
import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join } from "path";

const dirs = [
  "src/data/learn/openings",
  "src/data/learn/mates",
  "src/data/learn/tactics",
  "src/data/learn/strategy",
  "src/data/learn/endgames",
];

const results = [];

for (const dir of dirs) {
  const files = readdirSync(dir).filter((f) => f.endsWith(".ts"));
  for (const file of files) {
    const filePath = join(dir, file);
    const content = readFileSync(filePath, "utf-8");
    let modified = content;
    let fileChanged = false;

    const lines = modified.split("\n");
    let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      const movesMatch = line.match(/^\s*type:\s*"moves"/);
      if (movesMatch) {
        const blockStart = i;
        let braceDepth = 0;
        let blockEnd = i;
        for (let j = i; j < lines.length; j++) {
          if (lines[j].includes("{")) braceDepth++;
          if (lines[j].includes("}")) {
            braceDepth--;
            if (braceDepth === 0) {
              blockEnd = j;
              break;
            }
          }
        }
        const block = lines.slice(blockStart, blockEnd + 1).join("\n");
        const fenMatch = block.match(/fen:\s*"([^"]+)"/);
        const movesMatch2 = block.match(/moves:\s*\[([\s\S]*?)\]/);
        if (fenMatch && movesMatch2) {
          const fen = fenMatch[1];
          const movesStr = movesMatch2[1];
          const moves = [];
          const moveRegex = /"([^"]+)"/g;
          let m;
          while ((m = moveRegex.exec(movesStr)) !== null) {
            moves.push(m[1]);
          }
          try {
            const chess = new Chess(fen);
            let valid = true;
            for (const move of moves) {
              try {
                const result = chess.move(move);
                if (!result) {
                  valid = false;
                  break;
                }
              } catch (e) {
                valid = false;
                break;
              }
            }
            if (!valid) {
              results.push({
                file: filePath,
                lineStart: blockStart + 1,
                lineEnd: blockEnd + 1,
                fen,
                movesCount: moves.length,
              });
            }
          } catch (e) {
            results.push({
              file: filePath,
              lineStart: blockStart + 1,
              lineEnd: blockEnd + 1,
              fen,
              error: "invalid FEN: " + e.message,
            });
          }
        }
        i = blockEnd + 1;
      } else {
        i++;
      }
    }
  }
}

console.log(`Found ${results.length} broken move sections:\n`);
for (const r of results) {
  console.log(`  ${r.file}:${r.lineStart}-${r.lineEnd}`);
  console.log(`    FEN: ${r.fen}`);
  if (r.error) console.log(`    Error: ${r.error}`);
  else console.log(`    Moves: ${r.movesCount}`);
}
