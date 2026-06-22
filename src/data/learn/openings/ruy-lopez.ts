import { LearnTopic } from "../types";

export const ruyLopez: LearnTopic = {
  slug: "ruy-lopez",
  title: "The Ruy Lopez (Spanish)",
  category: "openings",
  description:
    "One of the oldest and most respected openings in chess, named after the 16th-century Spanish priest Ruy Lopez de Segura. Master its key ideas, the main variations, and the strategic plans for both sides.",
  difficulty: "intermediate",
  estimatedMinutes: 20,
  icon: "mdi:shield-cross",
  tags: ["1.e4", "e5", "Bb5", "Spanish", "classical"],
  sections: [
    {
      title: "Introduction",
      type: "text",
      content: `The Ruy Lopez begins with 1.e4 e5 2.Nf3 Nc6 3.Bb5 and is considered one of the best openings for White to fight for an advantage after 1.e4. It's played at all levels, from beginner to world championship matches. The key idea is the bishop on b5 puts pressure on the knight that defends e5 — after Black eventually plays ...a6 and ...b5, White gains space and time while Black's queenside pawns may become targets.`,
    },
    {
      title: "Main Line: 3...a6 4.Ba4",
      type: "position",
      fen: "r1bqkbnr/1ppp1ppp/p1n5/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 0 4",
      content: `The Morphy Defense (3...a6) is the most popular reply. After 4.Ba4, Black usually continues 4...Nf6 5.O-O Be7, reaching the Closed Spanish. White's main ideas include the d4 break, maneuvering the knight from b1 to g3 via d2-f1, and building pressure on Black's e5 pawn. Black has several major systems: the Breyer (9...Nb8), the Chigorin (9...Na5), the Zaitsev (9...Bb7), and the Marshall Attack (7...O-O 8.c3 d5).`,
    },
    {
      title: "The Exchange Variation: 4.Bxc6",
      type: "position",
      fen: "r1bqkbnr/1ppp1ppp/p1B5/4p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 0 4",
      content: `4.Bxc6 dxc6 gives White a potential kingside pawn majority (4 vs 3 after a future d4 trade), but Black gets the bishop pair and open lines. Bobby Fischer famously used this variation to beat Boris Spassky in game 5 of their 1972 world championship match. The key plan for White is d4 followed by trading on e5 to create the 4v3 kingside pawn advantage, then pushing for an endgame where the pawn structure matters.`,
    },
    {
      title: "The Marshall Attack",
      type: "position",
      fen: "r1bq1rk1/2ppbppp/p1n2n2/1p2p3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 b - - 0 8",
      content: `The Marshall Attack (7...O-O 8.c3 d5!?) is Black's most aggressive reply to the Spanish. Black sacrifices a pawn for massive piece activity and attacking chances. White must know precise theory to survive: after 9.exd5 Nxd5 10.Nxe5 Nxe5 11.Rxe5 c6, Black has compensation. World champions from Capablanca to Carlsen have debated this line. Modern White players often avoid the Marshall entirely by playing 8.h3 or 8.a4.`,
    },
    {
      title: "Key Strategic Ideas",
      type: "key-idea",
      content: `1. White's Light-Squared Bishop: It dominates by either staying on the a4-e8 diagonal (pinning/attacking) or retreating to c2 to support the center.

2. Black's Queenside Pawns: After ...a6 and ...b5, Black's queenside pawns are on light squares and can become targets for White's bishop.

3. The d4 Break: White's key lever is d4, challenging Black's e5 pawn. Timing is crucial — push too early and Black equalizes; push at the right moment and White gets a lasting initiative.

4. Knight Maneuvers: The Nb1-d2-f1-g3 maneuver is a hallmark of Spanish play, bringing the knight to the kingside.

5. The Center: Black typically maintains ...e5 until White plays d4, when ...exd4 and ...d5 is a common liberating idea.`,
    },
  ],
};
