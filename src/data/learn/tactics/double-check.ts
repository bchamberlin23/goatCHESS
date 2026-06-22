import { LearnTopic } from "../types";

export const doubleCheck: LearnTopic = {
  slug: "double-check",
  title: "Double Check & Deflection",
  category: "tactics",
  description:
    "Two powerful tactical concepts: the double check forces the king to move, and deflection removes key defenders. Both are essential for advanced combinations.",
  difficulty: "intermediate",
  estimatedMinutes: 10,
  icon: "mdi:flash-alert",
  tags: ["double check", "deflection", "decoy", "removal of defender"],
  sections: [
    {
      title: "Deflection & Decoy",
      type: "text",
      content: `Deflection and decoy are two closely related tactical ideas:

Deflection: Forcing a defending piece away from its defensive duty. A common example: a rook defends the back rank, but a queen sacrifice forces the rook to capture (deflecting it from the back rank), allowing a back rank mate.

Decoy: Luring a piece to a square where it becomes vulnerable. A common example: sacrificing a pawn to lure the king onto a square where it can be forked.

Both are about manipulating enemy pieces — deflection moves them away from where they're needed; decoy moves them to where they're wanted.`,
    },
    {
      title: "Example: The Classic Deflection Pattern",
      type: "position",
      interactionMode: "freeplay",
      fen: "3r2k1/5ppp/8/8/8/2Q5/5PPP/4R1K1 w - - 0 1",
      content: `In this position, White has a rook on e1 and queen on c3. Black's king is on g8, defended by the rook on d8. White plays 1.Qc8+!! — a queen sacrifice that deflects the rook. After 1...Rxc8, the rook is no longer defending the back rank, and 2.Re8# is checkmate.

This is the classic deflection-into-back-rank-mate combination. The queen sacrifice forces the defender away from its critical defensive square.

Key rules for deflection:
1. Identify the critical defender — the piece preventing your combination
2. Find a way to force that defender to move or capture
3. The forcing move must be more valuable (in the moment) than the defender's current job
4. After deflection, execute the combination immediately — the opponent gets no second chance`,
    },
    {
      title: "Key Deflection & Decoy Ideas",
      type: "key-idea",
      content: `1. Removal of the Defender: A close cousin of deflection. Instead of moving the defender away, you capture it. Example: capturing a knight that's defending against mate on h7.

2. The Decoy Sacrifice: Sacrificing material to lure the king onto a square where it can be forked. Classic example: a bishop sacrifice on h7 forces the king to h7, where Nf6+ forks king and queen.

3. Overloading: The defender has too many defensive responsibilities. A piece that must defend two things cannot defend either properly. Create a second threat and the overloaded piece crumbles.

4. Defensive Deflection: Just as you can deflect enemy pieces, you must also anticipate when your own pieces can be deflected. Keep defensive pieces flexible — a piece with only one job is vulnerable to deflection.

5. The Zwischenzug Connection: Deflection often works as a zwischenzug (intermediate move). Before recapturing or responding to a threat, first deflect a key defender, then proceed.

The lesson: deflection and decoy are about manipulating enemy pieces. The key skill: identifying the critical defender and finding a way to remove it from its defensive duty. The forcing move (sacrifice or check) is usually the tool, and the combination follows immediately.`,
    },
  ],
};
