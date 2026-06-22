import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join } from "path";

const dirs = ["src/data/learn/openings"];
let totalFixed = 0;

for (const dir of dirs) {
  const files = readdirSync(dir).filter((f) => f.endsWith(".ts"));
  for (const file of files) {
    const filePath = join(dir, file);
    let content = readFileSync(filePath, "utf-8");
    const before = content;

    content = content.replace(
      /type:\s*"position",\s*\n(\s*)interactionMode:\s*"freeplay",\s*\n(\s*)fen:\s*"([^"]+)",\s*\n(\s*)moves:\s*\[/g,
      'type: "moves",\n$1interactionMode: "guided",\n$2fen: "$3",\n$4moves: ['
    );

    const count = (before.match(/type:\s*"position",\s*\n\s*interactionMode:\s*"freeplay",\s*\n\s*fen:\s*"[^"]+",\s*\n\s*moves:/g) || []).length;
    if (count > 0) {
      writeFileSync(filePath, content);
      totalFixed += count;
      console.log(`  Fixed ${count} sections in ${file}`);
    }
  }
}
console.log(`\nTotal: ${totalFixed}`);
