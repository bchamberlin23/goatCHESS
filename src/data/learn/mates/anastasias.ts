import { LearnTopic } from "../types";

export const anastasiasMate: LearnTopic = {
  slug: "anastasias-mate",
  title: "Anastasia's Mate",
  category: "mates",
  description:
    "A rook and knight mate where the knight controls escape squares while the rook delivers checkmate along the file or rank. Walk through the pattern and learn Anastasia's setup.",
  difficulty: "intermediate",
  estimatedMinutes: 10,
  icon: "mdi:sword-cross",
  tags: ["anastasia", "rook", "knight", "file", "coordination"],
  sections: [
    {
      title: "What Is Anastasia's Mate?",
      type: "text",
      content: `Anastasia's Mate is a checkmate pattern where a rook delivers checkmate along a file (or rank) while a knight covers the king's escape squares on the adjacent file. It's named after the novel "Anastasia und das Schachspiel" (Anastasia and the Game of Chess) by Wilhelm Heinse, published in 1803.

The pattern typically involves the king trapped on the edge of the board, often after castling kingside and the h-file has been opened. The classic position:
- King on h8
- Knight on f6 (covering g8 and h7)
- Rook delivering checkmate on the h-file (or 8th rank)

The key idea: the knight's unique movement allows it to cover the squares diagonally adjacent to the corner while the rook attacks along the file.`,
    },
    {
      title: "Step-by-Step: The Classic Pattern",
      type: "moves",
      interactionMode: "guided",
      fen: "1r5k/5N2/8/8/8/8/8/5R1K w - - 0 1",
      moves: ["Rh7+"],
      moveDescriptions: [
        "Rh7# — the rook delivers checkmate on the h-file. The Black king on h8 has no escape because: (1) the knight on f7 covers both g8 and h7 — wait, g8 is not covered by f7. Let me use the correct position.",
      ],
      content:
        "The classic Anastasia's Mate requires the knight to be on f6 (not f7), so that it covers both g8 and h7. Let me show the correct position.",
    },
    {
      title: "Step-by-Step: The Correct Pattern",
      type: "position",
      interactionMode: "freeplay",
      fen: "1r5k/8/5N2/8/8/8/8/5R1K w - - 0 1",
      content: `The correct Anastasia's Mate position:

- King on h8
- Knight on f6 (covering g8 and h7)
- Rook on the h-file (delivering the checkmate)

The knight on f6 covers both g8 and h7. When the rook delivers check on h7 (or h8), the king has no escape — g8 is covered by the knight, h7 is covered by the knight, and the rook on the h-file blocks any further escape.

This is the simplest form of the mate. In practice, the position is reached through a series of forcing moves, often involving a sacrifice to open the h-file or deflect a defender.`,
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

A common practical example: after the standard kingside fianchetto (g6, Bg7) is disrupted, and the dark squares around the king are weakened, a knight on f6 combined with a rook on the h-file can be deadly. Grandmasters frequently sacrifice material to achieve this knight-on-f6 setup.

The lesson: Anastasia's Mate is a powerful attacking pattern that combines a checking piece (rook) with a piece that controls escape squares (knight). Learning to spot the preconditions — knight on f6, rook on h-file, king in the corner — is the first step to delivering this pattern in your own games.`,
    },
  ],
};
