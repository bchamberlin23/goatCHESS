import { LearnTopic } from "../types";

export const queensGambit: LearnTopic = {
  slug: "queens-gambit",
  title: "The Queen's Gambit",
  category: "openings",
  description:
    "The most classical of all d4 openings. Learn the QGD, the Slav, the Semi-Slav, and the many ways both sides fight for the center.",
  difficulty: "intermediate",
  estimatedMinutes: 20,
  icon: "mdi:chess-queen",
  tags: ["1.d4", "d5", "c4", "classical", "slav", "QGD"],
  sections: [
    {
      title: "Introduction",
      type: "text",
      content: `The Queen's Gambit begins 1.d4 d5 2.c4 and is one of the cornerstones of classical chess. Despite the name, it's not a true gambit — if Black captures on c4, White can usually recover the pawn. The opening was brought to mainstream attention by the Netflix series of the same name, but it has been a top-level staple for over a century. The key battle is for control of the center: White challenges d5 with c4, and Black must choose how to respond.`,
    },
    {
      title: "Queen's Gambit Declined (2...e6)",
      type: "position",
      fen: "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
      content: `The QGD (2...e6) is the most solid and classical reply. Black defends the d5 pawn and develops naturally. White typically continues 3.Nc3 Nf6. The main variations include:

- Exchange Variation (4.cxd5 exd5 5.Bg5): White creates a symmetrical pawn structure with a slight space advantage.
- Orthodox Defense (4.Bg5 Be7 5.e3 O-O 6.Nf3): The classical main line used by Capablanca and Alekhine.
- Tartakower Defense (4.Bg5 Be7 5.e3 O-O 6.Nf3 h6 7.Bh4 b6): Black fianchettoes the light-squared bishop.
- Lasker Defense (4.Bg5 Be7 5.e3 O-O 6.Nf3 h6 7.Bh4 Ne4): Black exchanges pieces for equality.
- Tarrasch Defense (3...c5): An aggressive approach giving Black an isolated d-pawn but active piece play.`,
    },
    {
      title: "The Slav Defense (2...c6)",
      type: "position",
      fen: "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
      content: `The Slav (2...c6) is the most popular reply at the top level today. By playing ...c6 instead of ...e6, Black defends d5 without blocking the light-squared bishop.

Main Variations:
- Main Line Slav: 3.Nf3 Nf6 4.Nc3 dxc4 5.a4 Bf5 6.e3 e6 7.Bxc4 — both sides have solid positions.
- Exchange Slav: 3.cxd5 cxd5 — symmetrical but White has a slight edge due to the move.
- Semi-Slav: 3.Nf3 Nf6 4.Nc3 e6 5.Bg5 h6 6.Bh4 — one of the most complex openings in chess, leading to the Botvinnik, Meran, and Anti-Meran systems.`,
    },
    {
      title: "Queen's Gambit Accepted (2...dxc4)",
      type: "position",
      fen: "rnbqkbnr/ppp1pppp/8/8/2pP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
      content: `2...dxc4 accepts the gambit pawn. White typically recovers the pawn with 3.e3 or 3.e4 (the latter is more aggressive but riskier). After 3.e3, the main line continues 3...e5 4.Bxc4 exd4 5.exd4 with a small White advantage. Black should not play 2...dxc4 3.e3 b5? to hold the pawn because after 4.a4, White gets a very strong attack — the pawn is not worth the ruined queenside structure.`,
    },
    {
      title: "Key Strategic Ideas",
      type: "key-idea",
      content: `1. The c4-cxd5 Decision: White must decide the right moment to capture on d5 — too early and Black equalizes; too late and Black gets a strong center.

2. Black's Light-Squared Bishop: In the QGD, this is the "problem piece" stuck behind e6. Black must solve this (with ...b6, ...dxc4, or ...c5) or be strategically cramped.

3. The Minority Attack: White's typical plan involves a minority attack on the queenside (b4-b5) supported by the heavy pieces.

4. Central Breaks: ...c5 (for Black) and e4 (for White) are the thematic central pawn breaks that determine the character of the middlegame.

5. Carlsbad Structure: After the Exchange Variation, the Carlsbad pawn structure (White: a2, b2, d4, e3, f2, g2, h2 vs Black: a7, b7, d5, e6, f7, g7, h7) is one of the most studied structures in chess.`,
    },
  ],
};
