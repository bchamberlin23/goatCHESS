import { Chess } from "chess.js";
import { allTopics } from "../src/data/learn/topics.ts";

let totalSequences = 0;
let brokenSequences = 0;
const broken = [];

for (const topic of allTopics) {
  for (const section of topic.sections) {
    if (section.type === "moves" && section.moves && section.moves.length > 0) {
      totalSequences++;
      const fen = section.fen || "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
      try {
        const chess = new Chess(fen);
        let lastValid = 0;
        for (let i = 0; i < section.moves.length; i++) {
          try {
            const result = chess.move(section.moves[i]);
            if (!result) {
              brokenSequences++;
              broken.push({
                topic: topic.slug,
                title: section.title,
                fen,
                moveIndex: i,
                move: section.moves[i],
                lastValid,
                error: "move returned null",
              });
              break;
            }
            lastValid = i + 1;
          } catch (e) {
            brokenSequences++;
            broken.push({
              topic: topic.slug,
              title: section.title,
              fen,
              moveIndex: i,
              move: section.moves[i],
              lastValid,
              error: e.message,
            });
            break;
          }
        }
      } catch (e) {
        brokenSequences++;
        broken.push({
          topic: topic.slug,
          title: section.title,
          fen,
          error: "invalid FEN: " + e.message,
        });
      }
    }
  }
}

console.log(`\n=== Move Validation Results ===`);
console.log(`Total move sequences: ${totalSequences}`);
console.log(`Broken sequences: ${brokenSequences}`);
console.log(`Valid sequences: ${totalSequences - brokenSequences}`);

if (broken.length > 0) {
  console.log(`\n=== Broken Sequences (${broken.length}) ===`);
  for (const b of broken) {
    console.log(`\n  [${b.topic}] ${b.title}`);
    console.log(`    FEN: ${b.fen}`);
    if (b.moveIndex !== undefined) {
      console.log(`    Failed at move ${b.moveIndex + 1}: "${b.move}"`);
      console.log(`    Last valid move index: ${b.lastValid}`);
    }
    console.log(`    Error: ${b.error}`);
  }
}

process.exit(brokenSequences > 0 ? 1 : 0);
