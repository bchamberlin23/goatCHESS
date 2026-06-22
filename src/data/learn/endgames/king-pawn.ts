import { LearnTopic } from "../types";

export const kingPawnEndgame: LearnTopic = {
  slug: "king-pawn-endgame",
  title: "King and Pawn Endgames",
  category: "endgames",
  description:
    "Master the most fundamental endgame of all. Learn the rule of the square, opposition, key squares, and how to convert a single extra pawn.",
  difficulty: "beginner",
  estimatedMinutes: 15,
  icon: "mdi:chess-king",
  tags: ["king", "pawn", "opposition", "key squares", "rule of the square"],
  sections: [
    {
      title: "The Importance of King+Pawn Endgames",
      type: "text",
      content: `The king and pawn endgame is the most fundamental endgame in chess. Every player must know when a position is winning, drawn, or lost. The key concepts (opposition, key squares, triangulation, the rule of the square) form the foundation of all endgame knowledge. If you understand these patterns, every more complex endgame builds on them.

The king in the endgame is not just a piece to be protected — it's a fighting piece. A centralized king can support pawn advances, attack enemy pawns, and assist in creating passed pawns. Learning to activate your king in the endgame is one of the most important skills in chess.`,
    },
    {
      title: "The Rule of the Square",
      type: "position",
      interactionMode: "freeplay",
      fen: "8/8/8/8/8/8/P1k5/1K6 w - - 0 1",
      content: `The rule of the square: Draw an imaginary square from the pawn to its promotion square. If the enemy king is inside this square (or can step into it on its move), it can catch the pawn. If the king is outside the square, the pawn queens.

In the position above: White king on b1, pawn on a2, Black king on c2. The square from a2 extends to a2-a8-h8-h2. The Black king is on c2 — inside the square. Black can catch the pawn.

Key nuance: The pawn can move two squares on its first move, effectively halving the square! After 1.a4 (instead of a3), the new square is a4-a8-e8-e4. The Black king on c2 is now on the edge of this smaller square.

Example: King on a1, pawn on a2, Black king on f7. The square from a2 is a2-a8-g8-g2. The Black king on f7 is outside the square. White queens regardless of who moves first.

The lesson: the rule of the square is a quick way to determine if a passed pawn queens. Memorize it — it'll save you countless blunders in time trouble.`,
    },
    {
      title: "Opposition & Key Squares",
      type: "key-idea",
      content: `Opposition is when two kings face each other with one square between them. The side that does NOT have the move has the opposition — meaning the other king must move away, allowing the side with the opposition to advance.

Key squares for a pawn on the 5th rank (counting from White's side):
- Pawn on e5: key squares are d6, e6, f6 (for White) or d4, e4, f4 (for Black)
- If the stronger side's king reaches any key square, the pawn queens (with correct play)

Key squares for a pawn on the 6th rank:
- Pawn on e6: key squares are d7, e7, f7
- These are closer to promotion and easier to reach

The general principle: If your king can reach a key square (a square two ranks ahead of the pawn on an adjacent or same file), you win. If the defender can prevent this, it's a draw.

Distant opposition: When kings face each other with 3 or 5 squares between them. The principles are the same — you want to make the opponent give way. Distant opposition often converts to direct opposition through a series of king moves.`,
    },
    {
      title: "Triangulation",
      type: "position",
      interactionMode: "freeplay",
      fen: "8/5p2/8/4k3/8/3K4/4P3/8 w - - 0 1",
      content: `Triangulation is a king maneuvering technique used to win positions that would otherwise be drawn. The idea: your king takes a longer route (a triangle shape) to reach a key square, losing a tempo deliberately so that you gain the opposition.

Example: White: Ke4, Pe2. Black: Ke6.
If White plays 1.Kd4?? Kd6 and Black has the opposition — draw.
But White can triangulate: 1.Kf4! Kf6 2.Ke4 Ke6 3.Kd4! — and now White has the opposition because Black must move. The Kf4-Ke4-Kd4 path is a "triangle" that loses a tempo and gains the opposition.

Triangulation is the advanced version of opposition play. When direct opposition doesn't work (because the opponent has it), triangulation often does. This technique is essential for converting extra pawns in king and pawn endgames.

The lesson: the king is a fighting piece in the endgame. Master the concepts of opposition, key squares, and triangulation to convert small advantages into wins.`,
    },
  ],
};
