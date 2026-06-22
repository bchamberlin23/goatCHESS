import { LearnTopic } from "../types";

export const deflectionDecoy: LearnTopic = {
  slug: "deflection-decoy",
  title: "Deflection & Decoy",
  category: "tactics",
  description:
    "Learn to manipulate your opponent's pieces. Deflection drives a defender away from a key square, while Decoy lures a piece onto a bad square to set up a tactical strike.",
  difficulty: "intermediate",
  estimatedMinutes: 12,
  icon: "mdi:transit-connection-variant",
  tags: ["tactics", "deflection", "decoy", "sacrifice", "overloaded"],
  sections: [
    {
      title: "Introduction",
      type: "text",
      content: `In chess, your opponent will naturally try to defend their weak points. To break their defense, you often need to manipulate the placement of their pieces. Two powerful tactical themes for doing this are Deflection and Decoy:

- Deflection: You force or entice an opponent's defending piece to leave its post, leaving a key square or another piece undefended.
- Decoy: You lure an opponent's piece (usually the king or queen) onto a specific, vulnerable square, setting up a fork, pin, or checkmate.

Both of these tactics frequently involve sacrifices, where you give up material to achieve a much larger strategic or mating goal.`,
    },
    {
      title: "Deflection: Removing the Guard",
      type: "position",
      fen: "3r2k1/p1Q2ppp/1p2p3/1q6/8/8/5PPP/3R2K1 w - - 0 1",
      content: `In this classic deflection puzzle, White's rook on d1 wants to deliver a back-rank mate on d8, but the square is defended by Black's rook on d8.

By playing 1.Qb8!!, White deflects Black's rook or queen. 
- If Black plays 1...Rxb8, the rook is deflected, allowing 2.Rxd8#
- If Black plays 1...Qe8, the queen is deflected from protecting the back rank, allowing 2.Qxe8+ Rxe8 3.Rxe8#
- If Black does nothing, White simply wins the rook on d8.`,
    },
    {
      title: "Decoy: Luring the Victim",
      type: "moves",
      fen: "3r2k1/5pp1/3q4/4N3/8/7R/5PPP/6K1 w - - 0 1",
      moves: ["Rh8", "Kxh8", "Nxf7", "Kg8", "Nxd6"],
      moveDescriptions: [
        "White sacrifices the rook with Rh8+!, checking the king and forcing it to move.",
        "Forced. The king has no other legal moves and must capture the rook on h8.",
        "Fork! The knight jumps to f7, checking the king and attacking the queen on d6.",
        "The king escapes check, moving back to safety.",
        "The knight captures the queen. White has successfully won a queen for a rook.",
      ],
      content: `A decoy tactic lures a piece to a bad square. In this position, White wants to fork the Black king and queen with Nxf7+, but the f7 square is defended by the king, and the king is currently safe on g8.

White plays 1.Rh8+!!, decoying the king onto the vulnerable h8 square. After 1...Kxh8, the king is now in the perfect position for the knight fork: 2.Nxf7+ wins the queen next move.`,
    },
    {
      title: "Quiz: Spot the Deflection",
      type: "trap",
      interactionMode: "quiz",
      orientation: "white",
      quizFen: "6k1/1R4p1/5p1p/3r4/1B1N4/4P1P1/r4PKP/8 w - - 0 1",
      quizAnswer: ["Ne6"],
      quizHint:
        "Look for a knight move that attacks a crucial defending pawn on g7, exploiting Black's overloaded rook.",
      content: `Black's pieces are currently holding their position, but the pawn on g7 is a key defender of the black king.

Find the move that deflects Black's defenses and allows White to build an unstoppable attack.`,
    },
  ],
};
