import { LearnTopic } from "../types";

export const englishOpening: LearnTopic = {
  slug: "english-opening",
  title: "The English Opening",
  category: "openings",
  description:
    "A flexible flank opening starting with 1.c4. The English can transpose to d4 openings or remain independent, offering White a wide range of strategic plans. Walk through the main lines and discover why Carlsen, Botvinnik, and Karpov all played the English.",
  difficulty: "intermediate",
  estimatedMinutes: 20,
  icon: "mdi:castle",
  tags: ["1.c4", "flank", "flexible", "symmetrical", "transpositional"],
  sections: [
    {
      title: "Introduction",
      type: "text",
      content: `The English Opening (1.c4) is White's most popular alternative to 1.e4 and 1.d4. It controls the d5 square and fights for the center from the flank. The English is extremely flexible — it can transpose to Queen's Gambit positions, lead to a Reversed Sicilian (where White plays the Sicilian with an extra tempo), or remain in independent English territory.

The English has been a favorite of many world champions including Botvinnik, Karpov, and Carlsen. The extra tempo (compared to 1...c5 for Black) gives White a slight but persistent edge.

The main variations are:
- The Symmetrical English (1...c5) — Black mirrors, leading to rich strategic play
- The Reversed Sicilian (1...e5) — White plays a Sicilian with an extra tempo
- The Anglo-Indian (1...Nf6) — flexible setup that can transpose to many openings
- The Botvinnik System (with 2.Nc3 and g3) — a classical setup for White`,
    },
    {
      title: "Step-by-Step: The Symmetrical English",
      type: "moves",
      interactionMode: "guided",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: [
        "c4",
        "c5",
        "Nc3",
        "Nc6",
        "g3",
        "g6",
        "Bg2",
        "Bg7",
        "Nf3",
        "Nf6",
        "O-O",
        "O-O",
        "d3",
        "d6",
        "a3",
        "Bd7",
        "Rb1",
        "Rc8",
        "b4",
        "cxb4",
        "axb4",
        "Nxb4",
        "Bb2",
        "a6",
        "Nd5",
        "Bxb2",
        "Rxb2",
        "Nfxd5",
        "Nxd5",
        "Nxd5",
        "Bxb7",
        "Qxd5",
        "Qxd5",
        "exd5",
        "Rxb7",
        "Rxc2",
      ],
      moveDescriptions: [
        "White plays c4, the English Opening. The move controls d5 and prepares to build a flexible pawn center.",
        "THE SYMMETRICAL ENGLISH! Black mirrors with c5. By copying White's move, Black signals that the game will be a strategic maneuvering battle.",
        "White develops the queenside knight, supporting d5 ideas. The knight is heading for a strong square.",
        "Black develops the queenside knight, the natural response. The position is balanced.",
        "White plays g3, preparing to fianchetto the kingside bishop. This is the standard Botvinnik setup — a flexible, solid approach.",
        "Black plays g6, preparing to fianchetto the kingside bishop. The position is now mirrored.",
        "White plays Bg2, the standard English bishop. The bishop on the long diagonal is a powerful piece.",
        "Black plays Bg7, the standard Dragon-style bishop. The position is now balanced.",
        "White develops the knight to f3, supporting the central structure. The position is balanced.",
        "Black develops the knight to f6, the natural move. The position is balanced.",
        "White castles, putting the king to safety. The position is now ready for the middlegame.",
        "Black castles. Both kings are now safe and the position enters the middlegame.",
        "White plays d3, supporting the c4 pawn. The position is balanced.",
        "Black plays d6, supporting the c5 pawn. The position is balanced.",
        "White plays a3, preventing ...Nb4 ideas. The position is balanced.",
        "Black plays Bd7, developing the bishop. The position is balanced.",
        "White plays Rb1, preparing the b4 push. The rook is well-placed.",
        "Black plays Rc8, defending the c-file. The position is balanced.",
        "White plays b4, challenging Black's queenside. The position is now sharp.",
        "Black captures on b4, opening the queenside. The position is now tactical.",
        "White recaptures with the a-pawn, opening the a-file. The position is now sharp.",
        "Black recaptures with the knight, centralizing. The position is balanced.",
        "White plays Bb2, developing the bishop. The position is balanced.",
        "Black plays a6, gaining queenside space. The position is sharp.",
        "White plays Nd5, centralizing the knight. The position is now sharp.",
        "Black trades bishops, removing the active piece. The position is roughly equal.",
        "White recaptures with the rook, centralizing. The position is now sharp.",
        "Black recaptures with the knight, attacking the knight. The position is tactical.",
        "White trades knights, simplifying the position. The position is now roughly equal.",
        "Black recaptures with the queen, centralizing. The position is balanced.",
        "White plays Bxb7, winning a pawn. The position is now winning for White.",
        "Black recaptures with the queen, centralizing. The position is roughly equal in material.",
        "White trades queens, simplifying the position. The position is now winning for White in the endgame.",
        "Black recaptures with the e-pawn, opening the e-file. The endgame is now sharp.",
        "White plays Rxb7, winning another pawn. The position is now winning for White.",
        "Black plays Rxc2, winning a pawn. The endgame is now sharp.",
      ],
      content: `The Symmetrical English is the most popular reply to 1.c4. After 1.c4 c5 2.Nc3 Nc6 3.g3 g6 4.Bg2 Bg7, both sides have fianchettoed their kingside bishops.

The position is balanced and the game becomes a long, strategic battle. White's extra tempo gives a slight but persistent edge.

Key themes:
1. The Long Diagonal
White's bishop on g2 is the most active piece on the board. It eyes the queenside and supports the b1-h7 diagonal.

2. The d5 Square
The d5 square is the most contested central square. Whoever controls d5 (or prevents the other from using it) gains a huge advantage.

3. The b4 Push
The b4 advance is White's main queenside break. It challenges Black's queenside pawns and opens lines for the rook.`,
    },
    {
      title: "Step-by-Step: The Reversed Sicilian",
      type: "moves",
      interactionMode: "guided",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: [
        "c4",
        "e5",
        "Nc3",
        "Nf6",
        "g3",
        "d5",
        "cxd5",
        "Nxd5",
        "Bg2",
        "Bc5",
        "Nf3",
        "Nc6",
        "O-O",
        "O-O",
        "d3",
        "Re8",
        "Bd2",
        "Nxc3",
        "bxc3",
        "e4",
        "dxe4",
        "Nxe4",
        "Bxc6",
        "bxc6",
        "Qxd8",
        "Rxd8",
        "Rfd1",
        "Bd4",
        "Rxd4",
        "Rxd4",
        "cxd4",
        "f6",
        "e3",
        "Rd8",
        "Rxd8+",
        "Kxd8",
        "exd4",
        "c5",
        "d5",
        "Kc7",
        "f4",
        "Kb6",
        "Kf2",
        "Kc7",
        "Ke3",
      ],
      moveDescriptions: [
        "White plays c4, the English Opening.",
        "THE REVERSED SICILIAN! Black plays e5, the most direct reply. White is now playing a Sicilian Defense with an extra tempo.",
        "White develops the queenside knight, the natural move. The knight is heading for a strong square.",
        "Black develops the kingside knight, the natural response. The position is balanced.",
        "White plays g3, preparing the kingside fianchetto. The Botvinnik setup continues.",
        "Black plays d5, the central challenge. The c4 pawn is now attacked.",
        "White captures, opening the position. The d-file is now open for the rook.",
        "Black recaptures with the knight, centralizing. The knight on d5 is powerful.",
        "White plays Bg2, the standard English bishop. The position is balanced.",
        "Black plays Bc5, developing the bishop. The position is balanced.",
        "White develops the knight to f3, the natural move. The position is balanced.",
        "Black develops the queenside knight, the natural response. The position is balanced.",
        "White castles, putting the king to safety.",
        "Black castles. The position is now ready for the middlegame.",
        "White plays d3, supporting the central structure. The position is balanced.",
        "Black plays Re8, defending the e-pawn. The position is balanced.",
        "White plays Bd2, developing the bishop. The position is balanced.",
        "Black plays the strong Nxc3, doubling the c-pawns. The position is now sharp.",
        "White recaptures with the b-pawn, opening the b-file. The position is now sharp.",
        "Black plays e4, attacking the knight. The position is now tactical.",
        "White captures, opening the position. The d-file is now open.",
        "Black recaptures with the knight, centralizing. The position is roughly equal.",
        "White trades bishops, eliminating Black's active piece. The position is now roughly equal.",
        "Black recaptures with the b-pawn, opening the b-file. The position is balanced.",
        "White plays Qxd8, the wise choice. After Qxd8 Rxd8, the position is roughly equal in the endgame.",
        "Black recaptures with the rook, centralizing. The position is now an endgame.",
        "White plays Rfd1, defending the d-file. The position is balanced.",
        "Black plays Bd4, attacking the rook. The position is now sharp.",
        "White trades rooks, simplifying the position. After Rxd4 Rxd4, the position is now an equal endgame.",
        "Black recaptures with the rook, centralizing. The position is balanced.",
        "White plays cxd4, opening the c-file. The position is now an equal endgame.",
        "Black plays f6, supporting the e5 pawn. The position is balanced.",
        "White plays e3, supporting the d4 pawn. The position is balanced.",
        "Black plays Rd8, defending the d-file. The position is balanced.",
        "White trades rooks, simplifying the position. After Rxd8+ Kxd8, the position is now an equal endgame.",
        "Black recaptures with the king, centralizing. The position is now an equal endgame.",
        "White plays exd4, opening the d-file. The position is balanced.",
        "Black plays c5, gaining queenside space. The position is now sharp.",
        "White plays d5, gaining central space. The position is now sharp.",
        "Black plays Kc7, centralizing the king. The position is balanced.",
        "White plays f4, supporting the e5 pawn. The position is balanced.",
        "Black plays Kb6, centralizing the king. The position is balanced.",
        "White plays Kf2, centralizing the king. The position is balanced.",
        "Black plays Kc7, centralizing the king. The position is balanced.",
        "White plays Ke3, centralizing the king. The position is now ready for the long endgame.",
      ],
      content: `The Reversed Sicilian (1.c4 e5) is Black's most direct reply to the English. By playing e5, Black essentially says: "I'll play the Sicilian with the white pieces."

The extra tempo gives White a slight but persistent edge. The Botvinnik System (with g3, Bg2, Nc3, Nf3) is the most ambitious setup for White.

Key themes:
1. The Reversed Roles
White is now the Sicilian player with the extra tempo. The strategic ideas are mirrored: Black has the central pawn, White has the flank attack.

2. The d5 Square
The d5 square is the most contested square. Whoever controls it gains a huge advantage.

3. The Botvinnik Setup
The g3, Bg2, Nc3, Nf3 setup is solid and flexible. It allows White to play on either wing depending on Black's setup.`,
    },
    {
      title: "Step-by-Step: The Anglo-Indian",
      type: "moves",
      interactionMode: "guided",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: [
        "c4",
        "Nf6",
        "Nc3",
        "e6",
        "Nf3",
        "d5",
        "d4",
        "Be7",
        "Bg5",
        "O-O",
        "e3",
        "Nbd7",
        "Rc1",
        "c6",
        "Bd3",
        "dxc4",
        "Bxc4",
        "b5",
        "Bd3",
        "Bb7",
        "O-O",
        "a6",
        "Qe2",
        "Qc7",
        "Bg5",
        "b4",
        "Na4",
        "Nxa4",
        "Qxa4",
        "c5",
        "dxc5",
        "Bxc5",
        "Qxc5",
        "Qxc5",
        "Bxc5",
        "Rfd1",
        "Rfd8",
        "Rxd8+",
        "Rxd8",
        "Bxa8",
        "Rxa8",
      ],
      moveDescriptions: [
        "White plays c4, the English Opening.",
        "THE ANGLO-INDIAN! Black plays Nf6, the most flexible reply. The knight is well-placed and supports the central structure.",
        "White develops the queenside knight, the natural move. The position is balanced.",
        "Black plays e6, supporting the d5 square. The position is balanced.",
        "White develops the knight, the natural move. The position is balanced.",
        "Black plays d5, challenging the center. The position is now sharp.",
        "White plays d4, the standard central push. The position is now ready for the main lines.",
        "Black plays Be7, developing the bishop. The position is balanced.",
        "White plays Bg5, pinning the knight. The position is now sharp.",
        "Black castles, putting the king to safety. The position is balanced.",
        "White plays e3, supporting the d4 pawn. The position is balanced.",
        "Black plays Nbd7, defending the b6 square. The position is balanced.",
        "White plays Rc1, supporting the c4 pawn. The position is balanced.",
        "Black plays c6, supporting the d5 pawn. The position is balanced.",
        "White plays Bd3, redeploying the bishop. The position is balanced.",
        "Black captures on c4, accepting the gambit pawn. The position is now sharp.",
        "White recaptures with the bishop, centralizing. The position is balanced.",
        "Black plays b5, kicking the bishop. The position is now sharp.",
        "White retreats the bishop to d3, the natural square. The position is balanced.",
        "Black plays Bb7, developing the bishop. The position is balanced.",
        "White castles, putting the king to safety.",
        "Black plays a6, preventing Bb5 ideas. The position is balanced.",
        "White plays Qe2, centralizing the queen. The position is balanced.",
        "Black plays Qc7, centralizing the queen. The position is balanced.",
        "White plays Bg5, pinning the knight. The position is now sharp.",
        "Black plays b4, attacking the knight. The position is now tactical.",
        "White plays Na4, the only safe square. The position is sharp.",
        "Black trades knights, removing the active piece. The position is now roughly equal.",
        "White recaptures with the queen, centralizing. The position is balanced.",
        "Black plays c5, challenging the d4 pawn. The position is now sharp.",
        "White trades on c5, opening the position. The position is now roughly equal.",
        "Black recaptures with the bishop, centralizing. The position is balanced.",
        "White trades queens, simplifying the position. The position is now roughly equal in the endgame.",
        "Black recaptures with the bishop, centralizing. The position is balanced.",
        "White plays Rfd1, defending the d-file. The position is balanced.",
        "Black plays Rfd8, defending the d-file. The position is balanced.",
        "White trades rooks, simplifying the position. The position is now roughly equal in the endgame.",
        "Black recaptures with the rook, centralizing. The position is balanced.",
        "White plays Bxa8, winning the exchange. The position is now winning for White.",
        "Black recaptures with the rook, centralizing. The position is balanced.",
      ],
      content: `The Anglo-Indian (1...Nf6) is the most flexible reply to the English. Black delays committing the center, keeping options open.

The key feature: after 1.c4 Nf6 2.Nc3 e6 3.Nf3 d5, the position can transpose to:
- A Queen's Gambit Declined (if White plays d4)
- A King's Indian Defense (if White plays g3)
- An independent English (if White plays g3, Bg2, d3)

The Anglo-Indian is a great choice for Black because it's flexible and hard for White to prepare against. Carlsen has used it many times at the top level.

Key themes:
1. Flexibility
By not committing to ...e5 or ...c5, Black keeps options open. The game can go in many directions depending on White's choices.

2. The d5 Challenge
Black's main plan is to challenge the center with ...d5. After the challenge, the game often transposes to familiar QGD structures.

3. The English Rewards Flexibility
The English rewards players who understand both flank and central pawn structures. It's a great choice for players who like to play both sides of the same position.`,
    },
    {
      title: "Key Strategic Ideas",
      type: "key-idea",
      content: `The English Opening is rich with strategic themes that recur across all variations:

1. The c4 Pawn Controls d5
The c4 pawn's main job is to control d5. This gives White a flexible center without committing the e-pawn or d-pawn. The pawn structure can be molded based on Black's response.

2. The Reversed Sicilian
After 1.c4 e5, White is playing a Sicilian with the extra tempo. The strategic ideas are mirrored: White has the central pawn, Black has the flank attack.

3. Transpositions
The English often transposes to d4 openings. Players of 1.c4 must be ready to play QGD, KID, or Slav structures with either color.

4. The Long Diagonal
The g2 bishop (or c1 bishop) often becomes the most powerful piece on the board. It's a long-range piece that controls key squares and supports pawn advances.

5. Flexible Center
Unlike 1.e4 or 1.d4, the English allows White to delay committing the central pawns. This makes the position harder to prepare against and gives White more options.

The English is a great choice for players who want a flexible, fighting position. It rewards strategic understanding over memorized theory, and it's been a top-level weapon for decades.`,
    },
  ],
};
