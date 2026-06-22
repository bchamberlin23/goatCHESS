import { LearnTopic } from "../types";

export const englishOpening: LearnTopic = {
  slug: "english-opening",
  title: "The English Opening",
  category: "openings",
  description:
    "A flexible flank opening starting with 1.c4. The English can transpose to d4 openings or remain independent, offering White a wide range of strategic plans.",
  difficulty: "intermediate",
  estimatedMinutes: 18,
  icon: "mdi:castle",
  tags: ["1.c4", "flank", "flexible", "symmetrical", "transpositional"],
  sections: [
    {
      title: "Introduction",
      type: "text",
      content: `The English Opening (1.c4) is White's most popular alternative to 1.e4 and 1.d4. It controls the d5 square and fights for the center from the flank. The English is extremely flexible — it can transpose to Queen's Gambit positions, lead to a Reversed Sicilian (where White plays the Sicilian with an extra tempo), or remain in independent English territory. It's been a favorite of many world champions including Botvinnik, Karpov, and Carlsen.`,
    },
    {
      title: "Symmetrical Variation: 1...c5",
      type: "position",
      fen: "rnbqkbnr/pp1ppppp/8/2p5/2P5/8/PP1PPPPP/RNBQKBNR w KQkq - 0 2",
      content: `The Symmetrical English (1...c5) is the most popular reply. White can continue with:
- 2.Nc3 (heading for a Maroczy Bind with d4 or a Hedgehog with Nf3, g3, Bg2)
- 2.Nf3 (the most testing, aiming for d4 quickly)
- 2.g3 (fianchetto setup, independent English)

After 2.Nc3 Nc6 3.g3 g6 4.Bg2 Bg7, both sides have fianchettoed their kingside bishops in a symmetrical structure. White's extra tempo means the symmetry favors White, but Black has solid resources.`,
    },
    {
      title: "Reversed Sicilian: 1...e5",
      type: "position",
      fen: "rnbqkbnr/pppp1ppp/8/4p3/2P5/8/PP1PPPPP/RNBQKBNR w KQkq - 0 2",
      content: `1...e5 is Black's most direct reply. White is now playing a Sicilian Defense with an extra tempo. Main White setups:
- The Botvinnik System: Nc3, g3, Bg2, e4 — White builds a strong center and plays for a kingside attack
- The Four Knights: 2.Nc3 Nc6 3.Nf3 Nf6 (heading for the English Four Knights)
- The Bremen: 2.Nc3 Nf6 3.g3 — a classic setup championed by German players

The Reversed Sicilian is often a strategic battle where White has a space advantage and Black seeks counterplay. The extra tempo means White should aim for a clear advantage, but Black's position is fundamentally sound.`,
    },
    {
      title: "Anglo-Indian: 1...Nf6",
      type: "key-idea",
      content: `1...Nf6 is the flexible Indian setup. White can transpose to d4 openings (Queen's Gambit, Catalan, King's Indian) with 2.d4, stay in English territory with 2.Nc3, or try the Mikenas Attack with 2.Nc3 e6 3.e4.

Key transpositional ideas:
- After 1.c4 Nf6 2.Nc3 e6 3.d4 — Queen's Gambit Declined
- After 1.c4 Nf6 2.Nc3 g6 3.d4 — King's Indian Defense
- After 1.c4 Nf6 2.Nc3 e6 3.Nf3 d5 4.d4 — QGD again

The English rewards players who understand both flank and central pawn structures. One of the most important strategic lessons from this opening: the c4 pawn controls d5 without committing the e-pawn or d-pawn, giving White maximum flexibility.`,
    },
  ],
};
