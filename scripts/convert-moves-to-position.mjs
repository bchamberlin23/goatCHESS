import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join } from "path";

const dirs = [
  "src/data/learn/openings",
];

let totalFixed = 0;

for (const dir of dirs) {
  const files = readdirSync(dir).filter((f) => f.endsWith(".ts"));
  for (const file of files) {
    const filePath = join(dir, file);
    let content = readFileSync(filePath, "utf-8");
    let modified = content;

    modified = modified.replace(
      /type:\s*"moves",\s*\n\s*interactionMode:\s*"guided",\s*\n\s*fen:\s*"rnbqkbnr\/pppppppp\/8\/8\/8\/8\/PPPPPPPP\/RNBQKBNR w KQkq - 0 1",/g,
      'type: "position",\n      interactionMode: "freeplay",\n      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",'
    );

    const beforeCount = (content.match(/type:\s*"moves"/g) || []).length;
    const afterCount = (modified.match(/type:\s*"moves"/g) || []).length;
    const fixed = beforeCount - afterCount;
    if (fixed > 0) {
      writeFileSync(filePath, modified);
      totalFixed += fixed;
      console.log(`  Fixed ${fixed} sections in ${file}`);
    }
  }
}

console.log(`\nTotal sections converted to position type: ${totalFixed}`);
