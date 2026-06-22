import { LearnTopic } from "../types";

export const italianGame: LearnTopic = {
  slug: "italian-game",
  title: "The Italian Game (Giuoco Piano)",
  category: "openings",
  description:
    "One of the oldest recorded openings, the Italian Game (1.e4 e5 2.Nf3 Nc6 3.Bc4) is a perfect starting point for beginners and remains popular at the top level.",
  difficulty: "beginner",
  estimatedMinutes: 15,
  icon: "mdi:pasta",
  tags: ["1.e4", "e5", "Bc4", "Giuoco Piano", "classical", "beginner"],
  sections: [
    {
      title: "Introduction",
      type: "text",
      content: `The Italian Game begins 1.e4 e5 2.Nf3 Nc6 3.Bc4. It's one of the oldest recorded chess openings (dating to the 16th century Italian school) and is perfect for beginners learning opening principles: develop pieces, control the center, and watch f7. The bishop on c4 immediately targets f7, the weakest square in Black's camp. This opening teaches all the fundamental ideas of chess.`,
    },
    {
      title: "The Giuoco Piano (3...Bc5)",
      type: "position",
      fen: "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
      content: `The Giuoco Piano ("Quiet Game") with 3...Bc5 is the classical symmetrical reply. White has two main approaches: 

The Italian Gambit (4.d4): White immediately challenges the center. After 4...exd4 5.Ng5 (or 5.O-O), the game becomes sharp and tactical.

The Modern Italian (4.c3): White prepares d4 more slowly, building a solid center with c3 and d3. This has been revitalized by modern GMs who prefer slow maneuvering to immediate clashes. The main line goes 4.c3 Nf6 5.d3 d6 6.O-O O-O with a rich strategic battle ahead.`,
    },
    {
      title: "The Two Knights Defense (3...Nf6)",
      type: "position",
      fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
      content: `3...Nf6 is Black's most aggressive reply, attacking the e4 pawn. White must decide whether to defend the pawn (4.d3 or 4.Nc3 into the Four Knights) or attack f7 (4.Ng5). The Ng5 line leads to one of the most heavily analyzed positions in chess: after 4.Ng5 d5 5.exd5, Black has the choice between the solid 5...Na5 (the main line) and the trappy 5...Nxd5 (the Fegatello/Fried Liver Attack). Many beginners fall for 5...Nxd5?! 6.Nxf7! Kxf7 7.Qf3+ Ke6 8.Qe4+ winning the knight back with interest.`,
    },
    {
      title: "Key Strategic Ideas",
      type: "key-idea",
      content: `1. The f7 Square: Bc4 targets the f7 pawn, protected only by the king. This creates tactical opportunities throughout the opening.

2. The Center: White's d4 break is the thematic central challenge. Black's counterplay revolves around ...d5.

3. The c3-d3-e4 Pawn Chain: In the modern Italian, White builds this chain for maximum stability before striking with d4.

4. Piece Placement: White's knight on b1 often develops to c3 or d2. Black's light-squared bishop often goes to e6 or g4 to exchange White's active bishop.

5. Pillsbury's Rule: "In open positions, attack. In closed positions, maneuver." The Italian starts as a relatively closed position, so patience and piece maneuvering are rewarded.`,
    },
  ],
};
