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
      type: "position",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
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
      type: "position",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
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
      type: "position",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
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
