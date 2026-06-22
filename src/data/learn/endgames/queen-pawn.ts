import { LearnTopic } from "../types";

export const queenVsPawn: LearnTopic = {
  slug: "queen-vs-pawn",
  title: "Queen vs. Pawn on the 7th",
  category: "endgames",
  description:
    "A crucial endgame test of precision. Learn the winning zig-zag method to defeat a pawn on the 7th rank, and master the stalemate defenses of bishop and rook pawns.",
  difficulty: "advanced",
  estimatedMinutes: 10,
  icon: "mdi:chess-queen",
  tags: ["endgame", "queen vs pawn", "stalemate", "zig-zag", "precision"],
  sections: [
    {
      title: "Introduction",
      type: "text",
      content: `In the endgame, a single pawn close to promotion can be incredibly dangerous, even against a queen. When the defending king is protecting a pawn on the 7th rank (1st rank for White/Black respectively), the stronger side's queen must act quickly.

The winning technique requires the queen to coordinate with her king. Because the queen alone cannot checkmate, she must use a series of checks to force the defending king to step in front of its own pawn. This blockades the pawn, giving the attacking king one free tempo to step closer. Repeating this process is the only way to win.`,
    },
    {
      title: "The Winning Zig-Zag Method",
      type: "moves",
      fen: "8/8/8/2Q5/8/8/3pk3/7K w - - 0 1",
      moves: [
        "Qe5",
        "Kf2",
        "Qd4",
        "Ke2",
        "Qe4",
        "Kf2",
        "Qd3",
        "Ke1",
        "Qe3",
        "Kd1",
        "Kg2",
      ],
      moveDescriptions: [
        "White starts with Qe5+, checking the black king.",
        "Black moves to f2, keeping the king active near the pawn.",
        "White checks on d4, driving the king closer to the pawn.",
        "Black moves to e2, defending the pawn on d2.",
        "White checks on e4, continuing to restrict the king's squares.",
        "Black moves back to f2.",
        "White plays Qd3, attacking the pawn and forcing the king to defend it.",
        "Black moves to e1, the only square to defend the d2 pawn.",
        "White plays Qe3+, forcing the king to block its own pawn.",
        "Black is forced to play ...Kd1, blocking the d2 pawn's promotion path.",
        "Crucial tempo! Because the pawn is blocked, White has one free turn to bring the king closer with Kg2.",
      ],
      content: `This sequence demonstrates the core winning method. By checking the king and gradually tightening the net, the queen forces the black king onto d1 (directly in front of the pawn). 

Once the pawn is blocked, White doesn't have to check. Instead, they use that tempo to move their king closer. White repeats this cycle until the king is close enough to deliver checkmate or win the pawn.`,
    },
    {
      title: "The Stalemate Exceptions: Bishop and Rook Pawns",
      type: "key-idea",
      content: `While center pawns (d-pawns and e-pawns) and knight pawns (b-pawns and g-pawns) are easily won, there are two crucial exceptions where a pawn on the 7th rank can draw against a queen:

1. Bishop Pawns (c-pawns and f-pawns):
When forced into the corner, the defending king does not block the pawn. Instead, it moves to the corner square (e.g., a1 or h1), leaving the pawn undefended. If the queen captures the pawn, it is stalemate! This resource allows the defender to hold a draw.

2. Rook Pawns (a-pawns and h-pawns):
Similar to bishop pawns, the defending king can hide in the corner. If the queen blockades the pawn, the defending king is stalemated unless White's king is already very close.

Understanding these exceptions is vital: if you are defending, try to exchange pawns to keep a bishop or rook pawn. If you are attacking, avoid simplifying into these drawn exceptions!`,
    },
    {
      title: "Quiz: Execute the Blockade",
      type: "trap",
      interactionMode: "quiz",
      orientation: "white",
      quizFen: "8/8/8/8/4Q3/6K1/3p4/3k4 w - - 0 1",
      quizAnswer: ["Qd3"],
      quizHint:
        "Find the queen move that blockades the d2 pawn while staying safe from the Black king.",
      content: `The Black pawn is on d2, ready to promote on d1. The White king is too far away to help.

Find the most precise move for White to immediately block the pawn's advance and prepare the winning march of the White king.`,
    },
  ],
};
