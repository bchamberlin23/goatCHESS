import { LearnTopic } from "../types";

export const sicilianDefense: LearnTopic = {
  slug: "sicilian-defense",
  title: "The Sicilian Defense",
  category: "openings",
  description:
    "The most popular and successful response to 1.e4 at the top level. The Sicilian (1.e4 c5) fights for the center asymmetrically and leads to rich, imbalanced positions.",
  difficulty: "intermediate",
  estimatedMinutes: 20,
  icon: "mdi:island",
  tags: ["1.e4", "c5", "asymmetric", "open sicilian", "dragon"],
  sections: [
    {
      title: "Introduction",
      type: "text",
      content: `The Sicilian Defense (1.e4 c5) is Black's most popular reply to 1.e4 at the master level and the most successful in terms of scoring. By playing c5 instead of e5, Black creates an asymmetrical pawn structure that guarantees dynamic, fighting chess. White typically opens the center with d4 (the Open Sicilian), and both sides race to develop attacks on opposite wings.`,
    },
    {
      title: "The Open Sicilian: 2.Nf3 d6 3.d4",
      type: "position",
      fen: "rnbqkbnr/pp1ppppp/8/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq d3 0 3",
      content: `The Open Sicilian (2.Nf3 followed by 3.d4) is White's most ambitious reply. After 3...cxd4 4.Nxd4, White has a spatial advantage and a development lead, while Black has two central pawns (d6 and e6 or e5) and the open c-file. This is the starting point of the main Sicilian variations: the Najdorf (4...Nf6 5.Nc3 a6), the Dragon (4...Nf6 5.Nc3 g6), the Scheveningen (4...Nf6 5.Nc3 e6), and the Classical (4...Nf6 5.Nc3 Nc6).`,
    },
    {
      title: "The Najdorf Variation",
      type: "position",
      fen: "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6",
      content: `The Najdorf (5...a6) is the most popular Sicilian, championed by Fischer, Kasparov, and countless others. Black prepares ...e5 or ...e6 while preventing Bb5+. White's main replies: 6.Bg5 (the sharpest, leading to the Poisoned Pawn variation), 6.Be3 (the English Attack), 6.Be2 (the classical/positional approach), and 6.Bc4 (the Sozin/Fischer attack). The Najdorf is defined by its flexibility — Black can choose between ...e5 (controlling d4 but weakening d5) and ...e6 (solid but passive).`,
    },
    {
      title: "The Dragon Variation",
      type: "position",
      fen: "rnbqkb1r/pp2pp1p/3p1np1/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6",
      content: `The Sicilian Dragon (5...g6) is a hypermodern approach where Black fianchettoes the dark-squared bishop to g7. The Dragon was a specialty of Garry Kasparov, who used it to defeat Anatoly Karpov in multiple world championship games. The key battle is between White's Maroczy Bind (c4) and Black's ...d5 break. Other White setups include the Yugoslav Attack (Bc4, f3, Be3) and the Classical (Be2, O-O).`,
    },
    {
      title: "Anti-Sicilians",
      type: "key-idea",
      content: `If White wants to avoid the heavy theory of the Open Sicilian, these are the main alternatives:

1. The Alapin (2.c3): White prepares d4 with a solid pawn center. Black's main replies are 2...Nf6, 2...d5, and 2...e6. The Alapin is sound, playable at all levels, and avoids memorizing 20-move Dragon theory.

2. The Closed Sicilian (2.Nc3): White delays d4, often aiming for a kingside attack with f4 and g4 (the Grand Prix Attack). Black can play ...Nc6, ...g6, ...e5, or ...d6.

3. The Moscow Variation (2.Nf3 d6 3.Bb5+): White checks on b5, forcing a concession. After 3...Bd7 4.Bxd7+ Qxd7, Black has the bishop pair but has lost time. After 3...Nc6, White can play the Rossolimo (4.Bxc6+).

4. The Smith-Morra Gambit (2.d4 cxd4 3.c3): A gambit offering a pawn for quick development and open lines.`,
    },
  ],
};
