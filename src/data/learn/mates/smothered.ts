import { LearnTopic } from "../types";

export const smotheredMate: LearnTopic = {
  slug: "smothered-mate",
  title: "Smothered Mate",
  category: "mates",
  description:
    "The most beautiful checkmate in chess. The king is completely surrounded by its own pieces and suffocated by a knight check.",
  difficulty: "intermediate",
  estimatedMinutes: 10,
  icon: "mdi:horseshoe",
  tags: ["smothered", "knight", "Philidor", "sacrifice", "queen"],
  sections: [
    {
      title: "What Is a Smothered Mate?",
      type: "text",
      content: `A smothered mate occurs when a king is completely boxed in by its own pieces (usually a rook in the corner) and checkmated by a knight. Because the knight can jump over pieces, it's the only piece that can deliver check while the king has no flight squares because its own pieces block every escape route. The smothered mate often involves a spectacular queen sacrifice to force the king into the corner.`,
    },
    {
      title: "The Classic Pattern (Philidor's Legacy)",
      type: "moves",
      fen: "r1bq1rk1/ppp2ppp/2np4/4N3/2B1n3/8/PPPP1PPP/RNBQK2R w KQ - 0 1",
      moves: ["Nf7+", "Kg8", "Nh6+", "Kh8", "Qg8+", "Rxg8", "Nf7#"],
      moveDescriptions: [
        "Knight check! Forking king and queen",
        "Forced to the corner",
        "Double check! Knight and bishop both give check",
        "King must return to h8",
        "QUEEN SACRIFICE!! The key idea of the smothered mate",
        "Black must capture — the rook is forced to block the king's own escape",
        "Smothered mate! The knight delivers checkmate, and the rook on g8 blocks the king's only escape",
      ],
      content: `This sequence (Nf7+ Kg8 Nh6+ Kh8 Qg8+! Rxg8 Nf7#) is called Philidor's Legacy, named after the 18th-century French chess master Francois-Andre Danican Philidor. It's one of the most famous mating patterns in chess.

The key elements needed for this pattern:
1. A knight that can reach f7 (or f2 for Black) with check
2. The opponent's king must be in the corner (h8 or a8 for Black, h1 or a1 for White)
3. A rook or queen on the 8th rank (1st rank for White) that blocks the king's escape after being forced to capture
4. A piece (usually bishop or queen) covering the h7 (h2) square to force the king back into the corner`,
    },
    {
      title: "Variations of the Smothered Mate",
      type: "key-idea",
      content: `The pattern can occur without a queen sacrifice too:

1. Defense-less Smothered: If the rook defending the back rank is already missing, the knight can deliver smothered mate without the queen sacrifice. Example: King on h8, Black rook on f8, White knight checks on f7 and it's mate because the rook blocks h8's escape.

2. The Corner Trap: The pattern works in any corner (a1, a8, h1, h8). The requirements are the same: a piece blocking the corner escape and a knight delivering check.

3. Two-Knight Smothered: Sometimes two knights coordinate: one gives the check while the other covers key escape squares.

4. The Lucena Position: In endgame theory, Lucena's position often involves a smothered mate threat that forces the defending rook to stay on the back rank.

The smothered mate is rare in master games because strong players see it coming, but it appears frequently in amateur games and is one of the most satisfying ways to win.`,
    },
    {
      title: "Famous Example: Torre vs Lasker, 1925",
      type: "position",
      fen: "r4rk1/ppp2ppp/2n5/3b4/2P5/1PN3P1/P2B1q1P/R3R1K1 w - - 0 1",
      content: `In this famous game, Carlos Torre delivered a smothered mate against Emanuel Lasker (the reigning world champion at the time) in just 17 moves! The final position featured the classic Philidor's Legacy pattern after a brilliant queen sacrifice. This game shocked the chess world and remains one of the most famous examples of the smothered mate.

The game: 1.d4 Nf6 2.Nf3 e6 3.Bg5 c5 4.e3 cxd4 5.exd4 Be7 6.Nbd2 d6 7.c3 Nbd7 8.Bd3 b6 9.Nc4 Bb7 10.Qe2 Qc7 11.O-O O-O 12.Rfe1 Rfe8 13.Rad1 Nd5 14.Bc1 Nf8 15.Nce5 Bb4 16.Rd3 Qc5 17.Ng5!! with mate to follow. This game teaches that even world champions can fall victim to well-executed tactical patterns.`,
    },
  ],
};
