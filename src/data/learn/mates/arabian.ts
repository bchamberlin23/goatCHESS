import { LearnTopic } from "../types";

export const arabianMate: LearnTopic = {
  slug: "arabian-mate",
  title: "Arabian Mate",
  category: "mates",
  description:
    "One of the oldest recorded checkmate patterns, featuring a knight and rook working together to trap the king in the corner. Walk through every move and learn the Arab setup.",
  difficulty: "beginner",
  estimatedMinutes: 8,
  icon: "mdi:islamic-star",
  tags: ["arabian", "rook", "knight", "corner", "coordination"],
  sections: [
    {
      title: "What Is the Arabian Mate?",
      type: "text",
      content: `The Arabian Mate is one of the oldest known checkmate patterns, dating back to medieval Arabic chess manuscripts. It features a rook delivering checkmate while a knight covers the remaining escape squares.

The pattern typically occurs when the defending king is trapped in the corner of the board (a8 or h8 for Black, a1 or h1 for White). The combination requires only a rook and a knight, making it achievable with minimum material.

The Arabian Mate appears in many endgame studies and is a fundamental piece-coordination pattern that every chess player should know.`,
    },
    {
      title: "Step-by-Step: The Classic Arabian Mate",
      type: "position",
      fen: "7k/5N2/8/8/8/8/8/5R1K w - - 0 1",
      content: `In this endgame example, the rook and knight coordinate to drive the king to the corner. The pattern is:
1. The rook gives check from the side (or back rank)
2. The knight covers the escape squares
3. The king is forced to the corner
4. The rook delivers the final check

In the simplest form: knight on f7 covers g8 and h8, while the rook on the h-file (or 8th rank) delivers checkmate. The key is that the knight protects the rook while simultaneously covering the king's only escape squares.

The lesson: piece coordination is the foundation of all chess tactics. The Arabian Mate is a perfect example of how a rook and knight can work together to achieve more than the sum of their parts.`,
    },
    {
      title: "Step-by-Step: The Reverse Arabian",
      type: "position",
      fen: "k7/2N5/8/8/8/8/8/R6K w - - 0 1",
      content: `The Reverse Arabian is the mirror image of the classic pattern: the rook attacks from the a-file, and the knight blocks the king's escape.

The key elements:
1. The rook delivers check on the a-file
2. The king is forced to step in front of its own piece
3. The rook captures to deliver mate

This pattern is less common than the classic Arabian but appears in many endgame positions. The key idea: a piece that "defends" the king can become a cage if the king is forced to step behind it.`,
    },
    {
      title: "Arabian Mate Variations",
      type: "key-idea",
      content: `The pattern has several important variations:

1. Classic Arabian: Knight on f7, rook on h-file or 8th rank, enemy king on h8. The knight covers g8 and h7, the rook delivers the final check.

2. Reverse Arabian: Knight on c6 or c7, rook on a-file or 8th rank, enemy king on a8. The knight covers b8, the rook delivers the final check.

3. The Smothered Arabian: When the king is hemmed in by its own pawns in the corner and the rook+knight deliver the standard Arabian mate pattern.

4. Defense-less Arabian: When the king is in the corner with no defenders, the Arabian mate can be delivered even if the opponent has material equality elsewhere on the board.

5. The Distant Arabian: When the rook is far from the action but supported by a knight, the same pattern works — the rook checks, the knight covers escapes, and the king is forced to the corner.

The Arabian mate is particularly important in endgame studies where a knight and rook coordinate to drive the king to the corner and deliver checkmate. It's a fundamental piece-coordination pattern that every chess player should know.

The lesson: the Arabian mate teaches the importance of piece coordination. The rook provides the checking power, but the knight is essential for covering escape squares. Together, they form a combination that neither piece could achieve alone.`,
    },
  ],
};
