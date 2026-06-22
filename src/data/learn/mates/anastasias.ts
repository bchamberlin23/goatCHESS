import { LearnTopic } from "../types";

export const anastasiasMate: LearnTopic = {
  slug: "anastasias-mate",
  title: "Anastasia's Mate",
  category: "mates",
  description:
    "A rook and knight mate where the knight controls escape squares while the rook delivers checkmate along the file or rank.",
  difficulty: "intermediate",
  estimatedMinutes: 8,
  icon: "mdi:sword-cross",
  tags: ["anastasia", "rook", "knight", "file", "coordination"],
  sections: [
    {
      title: "What Is Anastasia's Mate?",
      type: "text",
      content: `Anastasia's Mate is a checkmate pattern where a rook delivers checkmate along a file (or rank) while a knight covers the king's escape squares on the adjacent file. It's named after the novel "Anastasia und das Schachspiel" (Anastasia and the Game of Chess) by Wilhelm Heinse, published in 1803. The pattern typically involves the king trapped on the edge of the board.`,
    },
    {
      title: "The Classic Pattern",
      type: "position",
      fen: "1r5k/5Q2/5N2/8/8/8/8/7K w - - 0 1",
      content: `The classic Anastasia's Mate: The knight on f6 covers the h7 and g8 squares, while the rook (or queen) on the h-file delivers checkmate. The king on h8 has no escape because the knight controls h7 and g8.

Key element: The knight must cover the squares on the adjacent file that the king would otherwise use to escape. The knight typically sits on a square that controls the two squares next to the corner (like f6 covering g8 and h7 when the king is on h8).

Variation 1: Knight on e7, king on h8, rook on h-file. Knight covers g8 and (with help from the board edge) g6.

Variation 2: The pattern can be mirrored on the queenside: knight on c6 or c7, king on a8, rook on a-file.

The mate works because the knight's unique movement allows it to cover the squares diagonally adjacent to the corner while the rook attacks along the file.`,
    },
    {
      title: "Anastasia in Practice",
      type: "key-idea",
      content: `Anastasia's Mate most commonly occurs in the middlegame after one side has castled kingside and the h-file has been opened. A typical sequence:
1. Open the h-file (with a pawn sac or exchange)
2. Plant a knight on f6 (f3 for White) with support
3. Bring a rook or queen to the h-file
4. Deliver checkmate

The pattern is related to the Arabian Mate but uses the knight differently: in the Arabian, the knight is diagonally placed from the corner (f7 for h8); in Anastasia, the knight is on f6 (controlling g8 and h7).

A common practical example: after the standard kingside fianchetto (g6, Bg7) is disrupted, and the dark squares around the king are weakened, a knight on f6 combined with a rook on the h-file can be deadly. Grandmasters frequently sacrifice material to achieve this knight-on-f6 setup.`,
    },
  ],
};
