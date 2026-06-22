import { LearnTopic } from "../types";

export const caroKann: LearnTopic = {
  slug: "caro-kann",
  title: "The Caro-Kann Defense",
  category: "openings",
  description:
    "A solid, resilient defense to 1.e4 that avoids the cramped positions of the French. Made famous by Capablanca, Karpov, and more recently by Ding Liren. Walk through the main lines and learn why the Caro-Kann is one of the most reliable defenses.",
  difficulty: "beginner",
  estimatedMinutes: 20,
  icon: "mdi:shield-account",
  tags: ["1.e4", "c6", "solid", "Karpov", "beginner-friendly"],
  sections: [
    {
      title: "Introduction",
      type: "text",
      content: `The Caro-Kann Defense (1.e4 c6 2.d4 d5) is known as the "solid" reply to 1.e4. Unlike the French (1...e6), Black's pawn move to c6 does not block the light-squared bishop. This makes the Caro-Kann less cramped and more comfortable for Black — the light-squared bishop usually develops to f5 or g4.

The Caro-Kann has been a favorite of world champions from Capablanca to Karpov to Carlsen, prized for its reliability and its ability to absorb White's pressure.

The key strategic themes:
- The e6-e5 break (Black's main liberating move)
- The light-squared bishop's active development
- A solid, slightly worse position that becomes an asset in the endgame
- The Advance Variation (3.e5) — a sharp alternative`,
    },
    {
      title: "Step-by-Step: The Classical Caro-Kann",
      type: "moves",
      interactionMode: "guided",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: [
        "e4",
        "c6",
        "d4",
        "d5",
        "Nc3",
        "dxe4",
        "Nxe4",
        "Bf5",
        "Ng3",
        "Bg6",
        "h4",
        "h6",
        "Nf3",
        "Nd7",
        "h5",
        "Bh7",
        "Bd3",
        "Bxd3",
        "Qxd3",
        "e6",
        "Bd2",
        "Ngf6",
        "O-O-O",
        "Be7",
        "Qe2",
        "O-O",
        "Ne5",
        "c5",
        "dxc5",
        "Bxc5",
        "Bxa5",
        "Qxa5",
        "Qd2",
        "b6",
        "Nf3",
        "Bb7",
        "Rhe1",
        "Rfd8",
        "Qe3",
        "Qc7",
      ],
      moveDescriptions: [
        "White opens with e4.",
        "THE CARO-KANN! Black plays c6, preparing to support d5 without blocking the light-squared bishop. This is the key difference from the French Defense.",
        "White plays d4, the central push. This is the natural move — White challenges the center.",
        "Black plays d5, fighting for the center. The structure is now c6-d5 — solid and flexible.",
        "White develops the queenside knight, the main line. The knight is heading for a strong square.",
        "Black captures on e4, the standard response. This is the key idea — Black trades a pawn to open the position.",
        "White recaptures with the knight, which lands on a powerful central square. From e4, the knight controls c5, d6, and f6.",
        "Black develops the light-squared bishop to f5, the key Caro-Kann square. The bishop is active and well-placed — this is the main advantage over the French.",
        "White kicks the bishop with Ng3, the main line. The knight is heading for f3 or h4.",
        "Black retreats the bishop to g6, the only safe square. The bishop is now less active but still useful.",
        "White plays the aggressive h4, challenging the bishop. This is the Keres Attack — White immediately attacks the kingside.",
        "Black plays h6, a useful waiting move. The pawn prevents h5 ideas and gives the bishop another safe square.",
        "White develops the knight to f3, the natural square. The knight supports the central structure.",
        "Black plays Nd7, the standard Karpov Variation. The knight is heading for f6.",
        "White pushes h5, kicking the bishop again. The h-pawn is now a powerful attacking weapon.",
        "Black retreats the bishop to h7, the only safe square. The bishop is now passive but not bad.",
        "White plays Bd3, redeploying the bishop to the long diagonal. The bishop is well-placed.",
        "Black trades bishops, removing the active piece. After Bxd3 Qxd3, the position is roughly equal.",
        "White recaptures with the queen, centralizing. The position is now balanced.",
        "Black plays e6, supporting the central structure. The d5 square is now defended, and ...Nf6 is possible.",
        "White plays Bd2, developing the bishop. The position is roughly equal.",
        "Black plays Ngf6, developing the knights. The position is balanced.",
        "White castles queenside, putting the king on the queenside. The position is now ready for the middlegame.",
        "Black plays Be7, developing the bishop. The position is balanced.",
        "White plays Qe2, centralizing the queen. The position is now ready for the long middlegame.",
        "Black castles, putting the king to safety. The position is balanced.",
        "White plays Ne5, centralizing the knight. The knight on e5 is powerful.",
        "Black plays c5, challenging the d4 pawn. The c-pawn is the key counter-attacker.",
        "White trades on c5, opening the position. The c-file is now open for the rook.",
        "Black recaptures with the bishop, centralizing. The position is roughly equal.",
        "White trades on a5, the quiet choice. The position is now roughly equal in the endgame.",
        "Black recaptures with the queen, centralizing. The position is balanced.",
        "White plays Qd2, centralizing the queen. The position is now ready for the long endgame.",
        "Black plays b6, supporting the c5 square. The position is roughly equal.",
        "White plays Nf3, defending the d4 square. The position is balanced.",
        "Black plays Bb7, developing the bishop. The position is balanced.",
        "White plays Rhe1, putting the rook on the e-file. The position is now ready for the endgame.",
        "Black plays Rfd8, defending the d-file. The position is balanced.",
        "White plays Qe3, centralizing the queen. The position is now ready for the long endgame.",
        "Black plays Qc7, centralizing the queen. The position is balanced.",
      ],
      content: `The Classical Caro-Kann is the main line of the opening. After 1.e4 c6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Bf5, Black has developed the light-squared bishop to its best square.

The Keres Attack (5.Ng3 Bg6 6.h4) is one of the sharpest tests of the Classical. White immediately attacks the bishop and tries to open the h-file. Black must play precisely to survive.

Key themes:
1. The Light-Squared Bishop
The bishop on f5 (or g6, h7) is Black's main asset. It's active and well-placed, unlike in the French where it's stuck behind e6.

2. The e6-e5 Break
After completing development, Black's main plan is to play ...e6 followed by ...e5, challenging the central structure.

3. The Endgame
The Caro-Kann often leads to slightly better endgames for Black because of the better pawn structure. This is the opening's main appeal.`,
    },
    {
      title: "Step-by-Step: The Advance Variation",
      type: "moves",
      interactionMode: "guided",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: [
        "e4",
        "c6",
        "d4",
        "d5",
        "e5",
        "Bf5",
        "Nf3",
        "e6",
        "Be2",
        "Ne7",
        "O-O",
        "h6",
        "Nbd2",
        "Nd7",
        "Nb3",
        "Bh7",
        "Bd2",
        "c5",
        "c3",
        "Nc6",
        "dxc5",
        "Bxc5",
        "Nxc5",
        "Nxc5",
        "b4",
        "Ne4",
        "Qd4",
        "Nxd2",
        "Qxd2",
        "O-O",
        "Rfd1",
        "Qb6",
        "Bf3",
        "Rfd8",
        "Qe2",
        "a5",
        "a3",
        "axb4",
        "axb4",
        "Bd3",
        "Rxa8",
        "Qxa8",
      ],
      moveDescriptions: [
        "White opens with e4.",
        "The Caro-Kann!",
        "White plays d4, the central push.",
        "Black plays d5, the standard response.",
        "THE ADVANCE VARIATION! White closes the center with e5. The structure is now fixed and the game becomes about maneuvering.",
        "Black plays Bf5, the key Caro-Kann move. Unlike the French, the light-squared bishop can develop freely.",
        "White develops the knight, the natural move. The knight is heading for a strong square.",
        "Black plays e6, supporting the central structure. The position is now solid.",
        "White plays Be2, developing the bishop. The position is balanced.",
        "Black plays Ne7, supporting the g6 square. From e7, the knight is heading for f5 or g6.",
        "White castles, putting the king to safety.",
        "Black plays h6, a useful waiting move. The pawn prevents Ng5 ideas.",
        "White plays Nbd2, developing the queenside knight. The position is balanced.",
        "Black plays Nd7, defending the b6 square. The position is balanced.",
        "White plays Nb3, supporting the c5 square. The position is balanced.",
        "Black plays Bh7, the safe retreat. The bishop is now passive but not bad.",
        "White plays Bd2, developing the bishop. The position is roughly equal.",
        "Black plays c5, challenging the d4 pawn. The c-pawn is the key counter-attacker.",
        "White plays c3, supporting the d4 pawn. The position is balanced.",
        "Black develops the queenside knight, completing the natural development.",
        "White trades on c5, opening the position. The c-file is now open for the rook.",
        "Black recaptures with the bishop, centralizing. The position is balanced.",
        "White recaptures with the knight, centralizing. The position is now an endgame.",
        "Black recaptures with the knight, centralizing. The position is balanced.",
        "White plays b4, gaining queenside space. The position is now sharp.",
        "Black plays Ne4, centralizing the knight. The knight on e4 is powerful.",
        "White plays Qd4, attacking the knight. The position is now tactical.",
        "Black trades knights, removing the powerful piece. The position is roughly equal.",
        "White recaptures with the queen, centralizing. The position is now an endgame.",
        "Black castles, putting the king to safety. The position is balanced.",
        "White plays Rfd1, defending the d-file. The position is balanced.",
        "Black plays Qb6, attacking the b4 pawn. The position is now sharp.",
        "White plays Bf3, defending the b4 pawn. The position is balanced.",
        "Black plays Rfd8, doubling rooks on the d-file. The position is now sharp.",
        "White plays Qe2, centralizing the queen. The position is balanced.",
        "Black plays a5, challenging the b4 pawn. The position is sharp.",
        "White plays a3, supporting the b4 pawn. The position is balanced.",
        "Black captures on b4, winning a pawn. The position is now winning for Black.",
        "White recaptures with the a-pawn, opening the a-file. The position is sharp.",
        "Black plays Bd3, defending the b1 square. The position is now winning for Black.",
        "White plays Rxa8, the best try. The rook captures with check.",
        "Black recaptures with the queen, eliminating the rook. The endgame is now winning for Black.",
      ],
      content: `The Advance Variation (3.e5) is similar to the Advance French, but the key difference is Black's bishop — it can develop to f5 freely, unlike in the French where it would be stuck behind e6.

Key themes:
1. Closed Center
The e5-d4 pawn chain closes the center. Both sides must play for flank attacks — White on the kingside, Black on the queenside.

2. Black's ...c5 Break
The c-pawn is Black's main counter-attacker. By playing ...c5, Black challenges the d4 pawn and opens the position.

3. The Endgame
The Advance Caro-Kann often leads to complex endgames where Black's better pawn structure is a long-term asset.`,
    },
    {
      title: "Step-by-Step: The Karpov Variation",
      type: "moves",
      interactionMode: "guided",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: [
        "e4",
        "c6",
        "d4",
        "d5",
        "Nc3",
        "dxe4",
        "Nxe4",
        "Nd7",
        "Ng5",
        "Ngf6",
        "Bd3",
        "e6",
        "N1f3",
        "Bd6",
        "O-O",
        "h6",
        "Nh3",
        "O-O",
        "Re1",
        "b6",
        "c3",
        "Bb7",
        "Bg5",
        "hxg5",
        "Nxg5",
        "Re8",
        "Qd2",
        "Nxe4",
        "Bxe4",
        "Nf6",
        "Bxd6",
        "Qxd6",
        "Nxf7",
        "Kxf7",
        "Qxd6",
        "cxd6",
        "Rxe6",
        "Rxe6",
        "d5",
        "Rxe4",
        "Rxe4",
      ],
      moveDescriptions: [
        "White opens with e4.",
        "The Caro-Kann!",
        "White plays d4, the central push.",
        "Black plays d5, the standard response.",
        "White develops the queenside knight.",
        "Black captures on e4, the standard response.",
        "White recaptures with the knight, centralizing.",
        "THE KARPOV VARIATION! Black plays Nd7 instead of the more common Bf5. This is a flexible, solid approach championed by Anatoly Karpov.",
        "White plays Ng5, attacking the f7 square. This is the sharpest response to the Karpov.",
        "Black develops the kingside knight, the natural move. The position is balanced.",
        "White plays Bd3, developing the bishop. The bishop is well-placed.",
        "Black plays e6, supporting the central structure. The position is solid.",
        "White plays N1f3, defending the d4 pawn. The knight is well-placed.",
        "Black plays Bd6, developing the bishop. The position is balanced.",
        "White castles, putting the king to safety.",
        "Black plays h6, kicking the knight. The pawn is a useful move.",
        "White retreats the knight to h3, the only safe square. The position is balanced.",
        "Black castles, completing development. The position is roughly equal.",
        "White plays Re1, defending the e4 pawn. The position is balanced.",
        "Black plays b6, preparing to develop the bishop. The position is solid.",
        "White plays c3, supporting the d4 pawn. The position is balanced.",
        "Black plays Bb7, developing the bishop. The position is roughly equal.",
        "White plays Bg5, pinning the knight. The position is now sharp.",
        "Black trades bishops, breaking the pin. The position is roughly equal.",
        "White recaptures with the knight, centralizing. The position is balanced.",
        "Black plays Re8, defending the e-pawn. The position is balanced.",
        "White plays Qd2, centralizing the queen. The position is now ready for the tactical phase.",
        "Black plays Nxe4, winning a pawn. The knight is untouchable.",
        "White recaptures with the bishop, maintaining the position. The position is now roughly equal.",
        "Black plays Nf6, defending the d5 square. The position is balanced.",
        "White trades bishops, eliminating Black's dark-squared bishop. The position is now roughly equal.",
        "Black recaptures with the queen, centralizing. The position is balanced.",
        "White plays Nxf7!, a tactical resource. The knight captures the f7 pawn with check.",
        "Black is forced to capture with the king. The f7 square is now a hole in the king position.",
        "White plays Qxd6, attacking the bishop. The position is now winning for White.",
        "Black captures the queen, but now White has a rook and knight for the queen.",
        "White plays Rxe6, attacking the knight. The position is now winning for White.",
        "Black trades rooks, simplifying the position. The endgame is now winning for White.",
        "White plays d5, attacking the knight. The position is winning.",
        "Black plays the strong Rxe4, winning material. The position is roughly equal.",
        "White plays Rxe4, recapturing. The position is now an equal endgame.",
      ],
      content: `The Karpov Variation (4...Nd7) is a flexible alternative to the main line 4...Bf5. By delaying the bishop development, Black keeps options open.

The Karpov Variation is less forcing than the Classical and often leads to more maneuvering games. It's a great choice for players who want a solid position without memorizing 20 moves of theory.

Key themes:
1. Flexibility
By not committing to ...Bf5 immediately, Black keeps the option of ...Ngf6 or ...c5. This makes the position harder for White to prepare against.

2. The ...h6 Push
The h-pawn is a useful move in many Caro-Kann lines — it prevents Ng5 ideas and gives the bishop a safe square.

3. The Endgame
The Karpov Variation often leads to endgames where Black's solid structure is a long-term asset.`,
    },
    {
      title: "Key Strategic Ideas",
      type: "key-idea",
      content: `The Caro-Kann Defense is rich with strategic themes that recur across all variations:

1. The Light-Squared Bishop
Unlike the French, this bishop develops freely to f5 or g4. Exchanging it for White's knight or bishop is often a good trade for Black. The bishop is the opening's main asset.

2. The e6-e5 Break
Black's key liberating move is ...e5, challenging the center. Timing is critical — too early and White controls the opening; too late and Black is passive.

3. No Weak Square
The Caro-Kann creates no inherent weaknesses — unlike the French (cramped bishop) or the Sicilian (backward d-pawn), Black has a perfectly sound position. This is the opening's main appeal.

4. White's Space Advantage
White has more space and often a kingside initiative. Black's job is to neutralize White's activity and then take over once the attack fizzles.

5. Endgame Prospects
The Caro-Kann often leads to slightly better endgames for Black (better pawn structure, surviving bishop). A common saying: "In the Caro-Kann, Black is playing for an endgame from move one."

The Caro-Kann is a great choice for beginner and intermediate players because it's solid, easy to learn, and rewards patient play. The opening has been used by world champions for over a century and remains a top-level weapon.`,
    },
  ],
};
