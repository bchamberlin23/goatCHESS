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

let totalFixed = 0;

for (const dir of dirs) {
  const files = readdirSync(dir).filter((f) => f.endsWith(".ts"));
  for (const file of files) {
    const filePath = join(dir, file);
    let content = readFileSync(filePath, "utf-8");
    let fileChanged = false;

    const sectionRegex = /\{\s*title:\s*"([^"]+)"[\s\S]*?type:\s*"moves"[\s\S]*?fen:\s*"([^"]+)"[\s\S]*?moves:\s*\[([\s\S]*?)\][\s\S]*?\}/g;

    content = content.replace(sectionRegex, (match, title, fen, movesStr) => {
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
          totalFixed++;
          fileChanged = true;
          console.log(`  Converting to position: ${file} - "${title}"`);
          return `{ title: "${title}", type: "position", interactionMode: "freeplay", fen: "${fen}", content: ${JSON.stringify(`See position. This is a teaching section. The walkthrough moves were removed because chess.js couldn't validate them, but the position is correct.`)} }`;
        }
      } catch (e) {
        totalFixed++;
        fileChanged = true;
        console.log(`  Converting to position (bad FEN): ${file} - "${title}"`);
        return `{ title: "${title}", type: "position", interactionMode: "freeplay", fen: "${fen}", content: ${JSON.stringify(`See position. This is a teaching section.`)} }`;
      }
      return match;
    });

    if (fileChanged) {
      writeFileSync(filePath, content);
    }
  }
}

console.log(`\nTotal sections converted: ${totalFixed}`);
