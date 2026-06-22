import { LearnTopic } from "../types";

export const caroKann: LearnTopic = {
  slug: "caro-kann",
  title: "The Caro-Kann Defense",
  category: "openings",
  description:
    "A solid, resilient defense to 1.e4 that avoids the cramped positions of the French. Made famous by Capablanca, Karpov, and more recently by Ding Liren.",
  difficulty: "beginner",
  estimatedMinutes: 15,
  icon: "mdi:shield-account",
  tags: ["1.e4", "c6", "solid", "Karpov", "beginner-friendly"],
  sections: [
    {
      title: "Introduction",
      type: "text",
      content: `The Caro-Kann Defense (1.e4 c6 2.d4 d5) is known as the "solid" reply to 1.e4. Unlike the French (1...e6), Black's pawn move to c6 does not block the light-squared bishop. This makes the Caro-Kann less cramped and more comfortable for Black — the light-squared bishop usually develops to f5 or g4. The Caro-Kann has been a favorite of world champions from Capablanca to Karpov to Carlsen, prized for its reliability and its ability to absorb White's pressure.`,
    },
    {
      title: "Main Line: 2.d4 d5 3.Nc3",
      type: "position",
      fen: "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq - 0 3",
      content: `After 3.Nc3, Black usually plays 3...dxe4 4.Nxe4. The main variations branch from here:

4...Bf5 (the Classical): The most traditional approach. Black develops the light-squared bishop before playing ...e6. White often plays 5.Ng3 Bg6 6.h4 as the sharp Keres Attack.

4...Nd7 (the Karpov): Championed by the 12th world champion. Black prepares ...Ngf6 and delays committing the light-squared bishop. This is flexible and solid.

4...Nf6 5.Nxf6+ (the Smyslov): Trading knights leads to a symmetrical structure where White has a small space advantage.

3.e5 (the Advance): Similar to the Advance French, White closes the center. Black replies 3...Bf5! (unlike the French, where the bishop would be stuck), developing easily.`,
    },
    {
      title: "The Classical (4...Bf5)",
      type: "position",
      fen: "r2qkbnr/pp2pppp/2p5/3p1b2/3PN3/8/PPP2PPP/R1BQKBNR w KQkq - 0 5",
      content: `After 3...dxe4 4.Nxe4 Bf5, Black develops the light-squared bishop to its best square before closing the center with ...e6. White has two main approaches:

The Quiet System: 5.Ng3 Bg6 6.Nf3 e6 7.Be2 Nf6 8.O-O — slow positional play.

The Keres Attack: 5.Ng3 Bg6 6.h4! — White immediately challenges the bishop with the h-pawn. This is the sharpest test of the Classical. After 6...h6 7.Nf3, White threatens Nxg6 and Nh2-Ng4. Black must play precisely.

The Capablanca Variation: 5.Ng3 Bg6 6.h4 h5 — a combative reply where Black accepts a weakened kingside for active counterplay.`,
    },
    {
      title: "Key Strategic Ideas",
      type: "key-idea",
      content: `1. The Light-Squared Bishop: Unlike the French, this bishop develops freely to f5 or g4. Exchanging it for White's knight or bishop is often a good trade for Black.

2. The e6-e5 Break: Black's key liberating move is ...e5, challenging the center. Timing is critical — too early and White controls the opening; too late and Black is passive.

3. No Weak Square: The Caro-Kann creates no inherent weaknesses — unlike the French (cramped bishop) or the Sicilian (backward d-pawn), Black has a perfectly sound position.

4. White's Space Advantage: White has more space and often a kingside initiative. Black's job is to neutralize White's activity and then take over once the attack fizzles.

5. Endgame Prospects: The Caro-Kann often leads to slightly better endgames for Black (better pawn structure, surviving bishop). A common saying: "In the Caro-Kann, Black is playing for an endgame from move one."`,
    },
  ],
};
