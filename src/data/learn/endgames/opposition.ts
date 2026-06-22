import { LearnTopic } from "../types";

export const opposition: LearnTopic = {
  slug: "opposition",
  title: "Opposition & Pawn Breakthroughs",
  category: "endgames",
  description:
    "The opposition is the fundamental king maneuvering technique. Master direct, distant, and diagonal opposition, plus pawn breakthroughs.",
  difficulty: "intermediate",
  estimatedMinutes: 12,
  icon: "mdi:arrow-collapse",
  tags: ["opposition", "outflanking", "pawn breakthrough", "reserve tempi"],
  sections: [
    {
      title: "What Is Opposition?",
      type: "text",
      content: `Opposition is when two kings face each other on the same file or rank with an odd number of squares between them. The side that does NOT have the move has the opposition — the opponent's king must step aside, allowing the king with the opposition to advance.

This is the most fundamental king maneuvering concept in chess. It determines whether pawn endgames are won or drawn. Mastering opposition is as essential to endgame play as knowing how the pieces move.`,
    },
    {
      title: "Direct Opposition",
      type: "position",
      interactionMode: "freeplay",
      fen: "8/8/8/3k4/8/3K4/8/8 w - - 0 1",
      content: `Direct opposition: Kings face each other on the same file with one square between them. In this position, White (to move) does NOT have the opposition — Black has it. After 1.Ke3, Black replies 1...Ke5 and maintains the opposition. White cannot advance.

If Black were to move: Black has to play ...Kd6 or ...Ke6 (or ...Kc5, ...Ke5). After, say, 1...Kd6, White plays 2.Ke4 and has gained ground.

The key insight: The player with the opposition can prevent the enemy king from advancing. The player without the opposition must eventually give way.

In a pawn endgame where both sides have a single pawn, the opposition often determines whether the position is a win, loss, or draw. If the stronger side's king is in front of the pawn and has the opposition, it's usually a win. If the weaker side has the opposition, it's usually a draw.`,
    },
    {
      title: "Distant & Diagonal Opposition",
      type: "key-idea",
      content: `Distant Opposition: Kings facing each other with 3 or 5 squares between them. The principles are the same as direct opposition, but the maneuvering happens at a distance.

Example with 3 squares: White King on e1, Black King on e5. If it's Black's move, White has the distant opposition. Black must move and White can advance. The sequence: 1...Kd5 2.Kd2! (maintaining opposition) Ke4 3.Ke2 Kd4 4.Kd2 — White maintains opposition throughout.

Diagonal Opposition: Kings on different files and ranks, facing each other diagonally with an odd number of squares. This often converts to direct opposition through careful maneuvering.

Key transformation: Distant opposition → direct opposition. The side with distant opposition can convert it to direct opposition by advancing while maintaining the odd distance. The side without opposition tries to disrupt this.

Reserve Tempi: In positions with multiple pawns, having extra pawn moves (reserve tempi) is a huge advantage. If both sides are in a mutual zugzwang, the side with a reserve tempo can burn a pawn move and force the opponent to make the committing king move. This is why you should preserve spare pawn moves in the early endgame.`,
    },
    {
      title: "Pawn Breakthroughs",
      type: "position",
      interactionMode: "freeplay",
      fen: "8/5ppp/5pk1/8/8/4PPP1/5PK1/8 w - - 0 1",
      content: `A pawn breakthrough is when a side creates a passed pawn through a sacrifice or exchange of pawns. The classic pawn breakthrough pattern:

In this position (White: pawns e3, f2, g3, h2, King on g2; Black: pawns f7, g6, h7, King on g7), White can create a passed pawn with:
1.e4 f5 2.exf5 gxf5 3.g4 fxg4 4.hxg4 — and now White has a passed h-pawn (after further advances and trades) or at minimum has opened lines for the king.

The key principles:
1. When you have a pawn majority (more pawns on one side), you can create a passed pawn
2. The creation of a passed pawn often requires a pawn sacrifice (giving one pawn to open lines)
3. The passed pawn draws the enemy king, allowing your king to feast on the other side
4. Timing is everything — a premature breakthrough can backfire

The minority attack: When you have FEWER pawns on one side but advance them anyway to create weaknesses. This is common in the middlegame but can also work in the endgame to disrupt the opponent's pawn structure.`,
    },
  ],
};
