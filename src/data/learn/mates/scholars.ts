import { LearnTopic } from "../types";

export const scholarsMate: LearnTopic = {
  slug: "scholars-mate",
  title: "Scholar's & Fool's Mates",
  category: "mates",
  description:
    "Learn the two most famous short checkmates in chess. Master the mating patterns, understand their vulnerabilities, and learn how to defend against early queen attacks.",
  difficulty: "beginner",
  estimatedMinutes: 10,
  icon: "mdi:crown",
  tags: ["checkmate", "fool's mate", "scholar's mate", "defense", "early queen"],
  sections: [
    {
      title: "Introduction",
      type: "text",
      content: `In chess, the ultimate goal is to checkmate the enemy king. While most checkmates require long, strategic preparation, some can happen incredibly quickly if one side makes critical blunders in the opening. 

The two most famous quick checkmates are Fool's Mate (the fastest possible checkmate in 2 moves) and Scholar's Mate (a common 4-move checkmate that catches many beginners off guard). Understanding these mates is essential not only to win quick games but, more importantly, to avoid losing them!`,
    },
    {
      title: "Fool's Mate: The Fastest Checkmate",
      type: "moves",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: ["g4", "e5", "f3", "Qh4"],
      moveDescriptions: [
        "White weakens the king's diagonal by advancing the g-pawn two squares.",
        "Black takes control of the center and opens diagonals for the queen and bishop.",
        "White makes a fatal error, pushing the f-pawn and opening a direct path to the king.",
        "Checkmate! The queen strikes along the weakened e1-h4 diagonal. The white king has no escape and no piece can block the check."
      ],
      content: `Fool's Mate is the fastest possible checkmate in chess, occurring in just two moves. It requires White to weaken their own king's defenses by advancing the f-pawn and g-pawn. 

Key lesson: Moving the f-pawn in the opening is extremely dangerous, as it opens up the diagonal to your king. Avoid moving your f-pawn unless you have a very clear, concrete reason and know the position is safe.`,
    },
    {
      title: "Scholar's Mate: The 4-Move Strike",
      type: "moves",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: ["e4", "e5", "Qh5", "Nc6", "Bc4", "Nf6", "Qxf7"],
      moveDescriptions: [
        "White stakes a claim in the center.",
        "Black mirrors the central control.",
        "White brings the queen out early, targeting the weak f7 pawn and the e5 pawn.",
        "Black defends the e5 pawn with the knight.",
        "White develops the light-squared bishop, adding a second attacker to the f7 pawn.",
        "Black makes a blunder, developing the knight to f6 without defending the f7 pawn.",
        "Checkmate! The queen captures on f7, protected by the bishop. The king has no escape."
      ],
      content: `Scholar's Mate is the most common checkmate pattern among beginners. White targets the f7 square (or f2 for Black), which is the weakest point in the starting position because it is only defended by the king.

By coordinating the queen and the light-squared bishop, White delivers checkmate on move four. Although it works against unprepared opponents, bringing the queen out early violates opening principles and can be easily refuted.`,
    },
    {
      title: "How to Defend Against Scholar's Mate",
      type: "moves",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: ["e4", "e5", "Qh5", "Nc6", "Bc4", "g6", "Qf3", "Nf6"],
      moveDescriptions: [
        "White plays e4.",
        "Black plays e5.",
        "White brings out the queen.",
        "Black defends the e5 pawn. This is the first key step.",
        "White sets the trap, aiming at f7.",
        "Black blocks the queen's path by playing ...g6, gaining a tempo (attacking the queen).",
        "White retreats the queen to f3, renewing the checkmate threat on f7.",
        "Black blocks the queen again by developing the knight to f6, naturally defending the king."
      ],
      content: `Defending against Scholar's Mate is simple once you know the pattern. The key is to protect the e5 pawn first, and then block the queen's path to f7.

After Black plays 6...g6 and 7...Nf6, Black has a great position:
1. Black has two pieces developed (Nc6 and Nf6), while White's queen has moved twice.
2. Black will soon place the bishop on g7 (fianchetto) and castle safely.
3. White's queen on f3 blocks the natural development square for White's knight.`,
    },
    {
      title: "Quiz: Refuting Early Queen Attacks",
      type: "trap",
      interactionMode: "quiz",
      orientation: "black",
      quizFen: "r1bqkb1r/pppp1p1p/2n2np1/4p3/2B1P3/1Q6/PPPP1PPP/RNB1K1NR b KQkq - 3 5",
      quizAnswer: ["Nd4"],
      quizHint: "Look for an active move that attacks White's queen and creates a double attack on c2.",
      content: `White has played aggressively, moving the queen to b3 to attack the f7 pawn. However, White has neglected their development and left the c2 square undefended. 

Find the best move for Black to exploit the placement of White's queen and seize the initiative.`,
    },
  ],
};
