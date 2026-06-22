import { LearnTopic } from "../types";

export const scandinavianOpening: LearnTopic = {
  slug: "scandinavian-defense",
  title: "The Scandinavian Defense",
  category: "openings",
  description:
    "A direct and combative response to 1.e4. Black immediately challenges White's center with 1...d5, leading to open lines and asymmetric positions. Walk through the main lines and learn why Carlsen has used the Scandinavian.",
  difficulty: "beginner",
  estimatedMinutes: 15,
  icon: "mdi:compass-outline",
  tags: ["1.e4", "d5", "center strike", "open game", "active pieces"],
  sections: [
    {
      title: "Introduction",
      type: "text",
      content: `The Scandinavian Defense (1.e4 d5) is one of the oldest recorded openings in chess. By playing 1...d5 immediately, Black forces White's hand: White must react to the threat to the e4 pawn. The most common continuation is 2.exd5, after which Black can recapture with the queen (2...Qxd5) or play the modern approach (2...Nf6) trying to recapture with a knight.

The Scandinavian is valued for its simplicity and the immediate open files it creates. It allows Black to bypass deep, closed theoretical mainlines of the Ruy Lopez or Sicilian, and fight for a clear, active game from move one.

The main variations are:
- The Main Line (2...Qxd5 3.Nc3 Qa5) — the traditional approach
- The Modern Variation (2...Nf6) — the modern preference
- The Blackburne-Kloosterboer Gambit (2...Qd6) — sharp and tricky`,
    },
    {
      title: "Step-by-Step: The Main Line (3...Qa5)",
      type: "position",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      content: `The Main Line Scandinavian (2...Qxd5 3.Nc3 Qa5) is the most popular approach. The queen comes out early but is defended by the threat of check or active play.

The position is balanced and the game becomes a long, strategic battle. White's lead in development (from attacking the early queen) is a small but persistent edge.

Key themes:
1. The Early Queen
The queen on a5 is exposed but very active. Black must play ...c6 quickly to give the queen a safe square.

2. The Development Race
White's lead in development is a small advantage. Black must catch up by ...c6, ...Nf6, ...Bf5.

3. The Endgame
The Scandinavian often leads to complex endgames. Black's pawn structure is solid, and White's pieces are slightly more active.`,
    },
    {
      title: "Step-by-Step: The Modern Variation (2...Nf6)",
      type: "position",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      content: `The Modern Variation (2...Nf6) is the most popular modern approach. By delaying the recapture, Black avoids the early queen development and the tactical complications that follow.

The position is balanced and the game becomes a long, strategic battle. The Scandinavian's simplicity makes it a great choice for club players who want to avoid deep theory.

Key themes:
1. The Delayed Recapture
By playing 2...Nf6, Black delays the recapture. The knight recaptures next move, avoiding the early queen development.

2. The Central Tension
The position is balanced and the game becomes a long, strategic battle. White's lead in development is a small but persistent edge.

3. The Endgame
The Scandinavian often leads to complex endgames. Black's pawn structure is solid, and White's pieces are slightly more active.`,
    },
    {
      title: "Key Strategic Theme: Development vs. Queen Tempo",
      type: "key-idea",
      content: `The critical battle in the Scandinavian is between White's lead in development (gained by attacking the early queen) and Black's rock-solid pawn structure.

Important considerations for Black:
1. Do not let your Queen get trapped. Be ready to retreat her to safety.
2. The C-pawn: In the 3...Qa5 line, Black almost always plays ...c6. This creates a cozy retreat square for the queen on c7 or d8, and establishes a solid defensive wall.
3. Bishop development: Black wants to develop the light-squared bishop to f5 or g4 before playing ...e6. This avoids the "bad bishop" problem found in the French or Caro-Kann.
4. White's plan: White should open the center, use their lead in development to create threats, and avoid letting Black consolidate into a dry, equal endgame where Black's pawn structure might prove superior.

The Scandinavian is a great choice for players who want a simple, direct defense that doesn't require memorizing 20 moves of theory. The opening rewards patient play and solid technique.`,
    },
    {
      title: "Step-by-Step: Practice Position — Main Line",
      type: "moves",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      content: `This is the main line of the Scandinavian Defense. From here, both sides have completed their basic development and the game enters the middlegame.

Key features:
1. The position is roughly equal
2. White has a slight lead in development
3. Black has a solid pawn structure
4. The c-file is half-open for Black's queen's rook

Practice this line against the CPU — the random practice mode will pick different Black defenses for you to respond to.`,
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
