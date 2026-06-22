import { LearnTopic } from "../types";

export const kingsIndian: LearnTopic = {
  slug: "kings-indian",
  title: "The King's Indian Defense",
  category: "openings",
  description:
    "The most aggressive defense against 1.d4. Black allows White a big center and then counterattacks with ...e5 or ...c5 in sharp, dynamic positions.",
  difficulty: "advanced",
  estimatedMinutes: 20,
  icon: "mdi:fort-akbar",
  tags: ["1.d4", "Nf6", "g6", "dynamic", "counter-attack", "Kasparov"],
  sections: [
    {
      title: "Introduction",
      type: "text",
      content: `The King's Indian Defense (1.d4 Nf6 2.c4 g6) is the most combative reply to 1.d4 and 2.c4. Black allows White to build a massive center (e4, d4, c4), then counterattacks with violent pawn breaks (...e5 or ...c5). The KID has been a weapon of attacking champions: Bronstein, Fischer, Kasparov, and Nakamura have all used it to create masterpieces. The fundamental imbalance is White's space vs Black's dynamic counterplay.`,
    },
    {
      title: "The Classical Main Line",
      type: "position",
      fen: "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP3PPP/R1BQKB1R w KQkq - 0 6",
      content: `The Classical setup reaches this position after 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2. Now Black chooses between:
- 6...e5 (the Classical): The main pawn break, leading to sharp positions after 7.O-O Nc6 8.d5 Ne7. White attacks on the queenside with c5 and b4; Black attacks on the kingside with f5, g5, and piece play.
- 6...c5 (the Benoni-style): Transposing to Modern Benoni structures.
- 6...Na6 (the flexible approach): Preparing ...e5 or ...c5 depending on White's response.

The KID middlegame is a race: can White break through on the queenside before Black's kingside attack becomes decisive? Soviet chess literature called this "the battle of the pawn storms."`,
    },
    {
      title: "Key Variations",
      type: "key-idea",
      content: `The Saemisch (5.f3): White builds an iron center with f3, preventing ...Ng4. Plans include Be3, Qd2, O-O-O, and a kingside pawn storm with g4 and h4. Very double-edged.

The Petrosian (5.Nf3 O-O 6.Be2 e5 7.d5): White closes the center immediately and prevents Black's ...e5 break. Black must switch to queenside play with ...c5 and ...a5.

The Fianchetto (4.g3): White fianchettoes and plays for small, nagging advantages. Less sharp but very difficult for Black to generate counterplay against.

The Four Pawns Attack (5.f4): White pushes all four central pawns. Extremely sharp and theoretical — considered slightly dubious at the top level.

The Averbakh (5.Be2 O-O 6.Bg5): White pins the knight and prevents ...e5 temporarily. A flexible setup that can lead to either sharp or positional play.`,
    },
    {
      title: "The Mar del Plata Variation",
      type: "moves",
      fen: "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP2BPPP/R1BQK2R w KQkq - 0 6",
      moves: [
        "e5",
        "O-O",
        "Nc6",
        "d5",
        "Ne7",
        "Ne1",
        "Nd7",
        "Be3",
        "f5",
        "f3",
        "f4",
        "Bf2",
        "g5",
        "Rc1",
        "Ng6",
      ],
      moveDescriptions: [
        "The main KID pawn break",
        "Both kings safe",
        "Black develops and attacks d4",
        "White closes the center, gaining queenside space",
        "The knight heads to the kingside",
        "Clearing the way for the c5 push and Nd3",
        "Rerouting to f6 or c5",
        "Preparing for the queenside advance",
        "Black starts the kingside storm",
        "Slowing Black's attack",
        "Continuing the charge",
        "Defending e3",
        "Pushing forward",
        "White prepares the queenside break with c5",
        "Knight joins the kingside attack",
      ],
      content: `The Mar del Plata Variation is the sharpest and most famous KID line, named after the 1953 tournament where it was heavily tested. The position after 15 moves is a classic racetrack: White pushes c5 and b4 on the queenside while Black pushes g4 and h5 on the kingside. The player who calculates more accurately wins.

A typical tactical motif in these positions: Black's ...g3 break, sacrificing a pawn to open the h-file for a rook lift. Meanwhile, White's c5 break opens lines for the bishop pair. The KID teaches calculation, pawn storming, and the art of racing attacks on opposite wings.`,
    },
  ],
};
