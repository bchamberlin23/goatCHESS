import { LearnTopic } from "../types";

export const scandinavianOpening: LearnTopic = {
  slug: "scandinavian-defense",
  title: "The Scandinavian Defense",
  category: "openings",
  description:
    "A direct and combative response to 1.e4. Black immediately challenges White's center with 1...d5, leading to open lines and asymmetric positions.",
  difficulty: "beginner",
  estimatedMinutes: 12,
  icon: "mdi:compass-outline",
  tags: ["1.e4", "d5", "center strike", "open game", "active pieces"],
  sections: [
    {
      title: "Introduction",
      type: "text",
      content: `The Scandinavian Defense (1.e4 d5) is one of the oldest recorded openings in chess. By playing 1...d5 immediately, Black forces White's hand: White must react to the threat to the e4 pawn. The most common continuation is 2.exd5, after which Black can recapture with the queen (2...Qxd5) or play the modern approach (2...Nf6) trying to recapture with a knight.

The Scandinavian is valued for its simplicity and the immediate open files it creates. It allows Black to bypass deep, closed theoretical mainlines of the Ruy Lopez or Sicilian, and fight for a clear, active game from move one.`,
    },
    {
      title: "The Main Line: 2...Qxd5 3.Nc3",
      type: "position",
      fen: "rnbqkbnr/ppp1pppp/8/q2p4/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 4 4",
      content: `After 1.e4 d5 2.exd5 Qxd5, White immediately plays 3.Nc3, developing a knight with a tempo on Black's queen. Black's queen must retreat, and there are three main squares she can go to:

1. 3...Qa5: The traditional main line. The queen is placed on the side, pinning the c3 knight (or at least making it hard for it to jump easily) and keeping an eye on the light squares.
2. 3...Qd6: A modern and very popular choice, championed by GMs like Tiviakov. The queen stays active in the center and helps control the e5 and d5 squares.
3. 3...Qd8: The safest retreat. Black admits that the queen came out too early but enjoys a solid, solid position with no targets for White.`,
    },
    {
      title: "The Modern Variation: 2...Nf6",
      type: "position",
      fen: "rnbqkb1r/ppp1pppp/5n2/3P4/8/8/PPPP1PPP/RNBQKBNR w KQkq - 1 3",
      content: `For players who dislike bringing their queen out on move two, the Modern Variation (2...Nf6) is the perfect alternative. Black delays the recapture, planning to take on d5 next move with the knight.

White's choices:
1. 3.d4: The main line. White accepts that Black will get the pawn back and focuses on rapid development and central control.
2. 3.Nf3: A solid developing move.
3. 3.c4: Trying to keep the extra pawn. This is risky because Black gets excellent development and initiative after 3...c6! (the Scandinavian Gambit). Strong players usually advise White to focus on development rather than greedily holding onto the d5 pawn.`,
    },
    {
      title: "Key Strategic Theme: Development vs. Queen Tempo",
      type: "key-idea",
      content: `The critical battle in the Scandinavian is between White's lead in development (gained by attacking the early queen) and Black's rock-solid pawn structure.

Important considerations for Black:
- Do not let your Queen get trapped. Be ready to retreat her to safety.
- The C-pawn: In the 3...Qa5 line, Black almost always plays ...c6. This creates a cozy retreat square for the queen on c7 or d8, and establishes a solid defensive wall.
- Bishop development: Black wants to develop the light-squared bishop to f5 or g4 before playing ...e6. This avoids the "bad bishop" problem found in the French or Caro-Kann.
- White's plan: White should open the center, use their lead in development to create threats, and avoid letting Black consolidate into a dry, equal endgame where Black's pawn structure might prove superior.`,
    },
  ],

  practice: {
    startingFen: "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
    userColor: "w",
    instructions:
      "Practice White's side of the Scandinavian Defense. The CPU will play different lines (Main line 3...Qa5, Qd8, or Modern 2...Nf6). Try to play the most active developing moves.",
    lines: [
      {
        name: "Main Line (3...Qa5)",
        description: "Black retreats the queen to a5",
        moves: [
          "d5",
          "exd5",
          "Qxd5",
          "Nc3",
          "Qa5",
          "d4",
          "Nf6",
          "Nf3",
          "c6",
          "Bc4",
          "Bf5",
          "Bd2",
          "e6",
          "Qe2",
        ],
      },
      {
        name: "Queen Retreat (3...Qd8)",
        description: "Black retreats the queen all the way back to d8",
        moves: [
          "d5",
          "exd5",
          "Qxd5",
          "Nc3",
          "Qd8",
          "d4",
          "Nf6",
          "Nf3",
          "Bg4",
          "h3",
          "Bxf3",
          "Qxf3",
          "c6",
          "Be3",
        ],
      },
      {
        name: "Modern Variation (2...Nf6)",
        description: "Black attacks the pawn with the knight",
        moves: [
          "d5",
          "exd5",
          "Nf6",
          "d4",
          "Nxd5",
          "Nf3",
          "Bg4",
          "Be2",
          "e6",
          "O-O",
          "Be7",
          "c4",
          "Nb6",
        ],
      },
    ],
  },
};
