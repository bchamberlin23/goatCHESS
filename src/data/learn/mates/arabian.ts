import { LearnTopic } from "../types";

export const arabianMate: LearnTopic = {
  slug: "arabian-mate",
  title: "Arabian Mate",
  category: "mates",
  description:
    "One of the oldest recorded checkmate patterns, featuring a knight and rook working together to trap the king in the corner.",
  difficulty: "beginner",
  estimatedMinutes: 6,
  icon: "mdi:islamic-star",
  tags: ["arabian", "rook", "knight", "corner", "coordination"],
  sections: [
    {
      title: "What Is the Arabian Mate?",
      type: "text",
      content: `The Arabian Mate is one of the oldest known checkmate patterns, dating back to medieval Arabic chess manuscripts. It features a rook delivering checkmate while a knight covers the remaining escape squares. The pattern typically occurs when the defending king is trapped in the corner of the board (a8 or h8 for Black, a1 or h1 for White).`,
    },
    {
      title: "The Classic Pattern",
      type: "position",
      fen: "7k/5N2/8/8/8/8/8/5R1K w - - 0 1",
      content: `In its simplest form: the knight on f7 covers the g8 and h8 squares, while the rook on the h-file (or 8th rank) delivers the checkmate. The key is that the knight protects the rook while simultaneously covering the king's only escape squares. This pattern requires only a rook and a knight, making it achievable with minimum material.

Key requirements:
1. The enemy king must be in the corner
2. The knight must be positioned 2 squares diagonally from the corner (f7 for h8 corner, c7 for a8 corner, f2 for h1 corner, c2 for a1 corner)
3. The rook delivers the final check on the back rank or on the h/a file`,
    },
    {
      title: "Arabian Mate Variations",
      type: "key-idea",
      content: `The pattern has several important variations:

1. Classic Arabian: Knight on f7, rook on h-file or 8th rank, enemy king on h8.

2. Reverse Arabian: Knight on c6, rook on a-file or 8th rank, enemy king on a8. The knight can be on c7 instead of c6 if the rook is on the 8th rank.

3. The Smothered Arabian: When the king is hemmed in by its own pawns in the corner and the rook+night deliver the standard Arabian mate pattern.

4. Defense-less Arabian: When the king is in the corner with no defenders, the Arabian mate can be delivered even if the opponent has material equality elsewhere on the board.

The Arabian mate is particularly important in endgame studies where a knight and rook coordinate to drive the king to the corner and deliver checkmate. It's a fundamental piece-coordination pattern that every chess player should know.`,
    },
  ],
};
