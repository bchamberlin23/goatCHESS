import { LearnTopic } from "../types";

export const smotheredMate: LearnTopic = {
  slug: "smothered-mate",
  title: "Smothered Mate",
  category: "mates",
  description:
    "The most beautiful checkmate in chess. The king is completely surrounded by its own pieces and suffocated by a knight check. Walk through Philidor's Legacy and learn this spectacular pattern.",
  difficulty: "intermediate",
  estimatedMinutes: 12,
  icon: "mdi:horseshoe",
  tags: ["smothered", "knight", "Philidor", "sacrifice", "queen"],
  sections: [
    {
      title: "What Is a Smothered Mate?",
      type: "text",
      content: `A smothered mate occurs when a king is completely boxed in by its own pieces (usually a rook in the corner) and checkmated by a knight. Because the knight can jump over pieces, it's the only piece that can deliver check while the king has no flight squares because its own pieces block every escape route.

The smothered mate often involves a spectacular queen sacrifice to force the king into the corner. The most famous version is called "Philidor's Legacy" — a 7-move forced sequence that has been admired for over 250 years.

The pattern requires:
1. A knight that can reach f7 (or f2 for Black) with check
2. The opponent's king in the corner (h8 or a8 for Black, h1 or a1 for White)
3. A rook on the 8th rank (1st rank for White) that blocks the king's escape
4. A piece (usually bishop or queen) covering h7 (h2) to force the king back`,
    },
    {
      title: "Step-by-Step: Philidor's Legacy",
      type: "position",
      fen: "r1bq1rk1/ppp2ppp/2np4/4N3/2B1n3/8/PPPP1PPP/RNBQK2R w KQ - 0 1",
      content: `This sequence (Nf7+ Kg8 Nh6+ Kh8 Qg8+! Rxg8 Nf7#) is called Philidor's Legacy, named after the 18th-century French chess master Francois-Andre Danican Philidor. It's one of the most famous mating patterns in chess.

The key tactical ideas:
1. The first knight check (Nf7+) forces the king toward the corner
2. The second knight check (Nh6+) is a double check with the bishop, which is the most forcing move in chess — the king MUST move
3. The queen sacrifice (Qg8+) is the spectacular climax — the queen is given up to force the rook to block the king's escape
4. The final knight check (Nf7#) delivers mate because the king is completely trapped

The pattern works because the rook is FORCED to capture the queen (otherwise it would be lost for nothing), and capturing puts it on g8, where it blocks the king's only escape.

The lesson: even when you have a winning attack, sometimes you have to sacrifice your most valuable piece to deliver mate. The queen is a small price to pay for checkmate.`,
    },
    {
      title: "Step-by-Step: Variations of the Smothered Mate",
      type: "position",
      fen: "r3k2r/ppp1nppp/8/3p4/3P4/3N4/PPP2PPP/R3K2R w KQkq - 0 1",
      content: `The smothered mate has many variations. The most common patterns:

1. The Defense-less Smothered: If the rook defending the back rank is already missing, the knight can deliver smothered mate without the queen sacrifice.

2. The Corner Trap: The pattern works in any corner (a1, a8, h1, h8). The requirements are the same: a piece blocking the corner escape and a knight delivering check.

3. The Two-Knight Smothered: Sometimes two knights coordinate: one gives the check while the other covers key escape squares.

4. The Lucena Position: In endgame theory, Lucena's position often involves a smothered mate threat that forces the defending rook to stay on the back rank.

The smothered mate is rare in master games because strong players see it coming, but it appears frequently in amateur games and is one of the most satisfying ways to win.`,
    },
    {
      title: "Famous Example: Torre vs Lasker, 1925",
      type: "position",
      fen: "r4rk1/ppp2ppp/2n5/3b4/2P5/1PN3P1/P2B1q1P/R3R1K1 w - - 0 1",
      content: `In this famous game, Carlos Torre delivered a smothered mate against Emanuel Lasker (the reigning world champion at the time) in just 17 moves! The final position featured the classic Philidor's Legacy pattern after a brilliant queen sacrifice.

This game shocked the chess world and remains one of the most famous examples of the smothered mate. The combination 17.Ng5!! with the idea of Nxh7 followed by a queen sacrifice on g8 is one of the most beautiful in chess history.

The game teaches that even world champions can fall victim to well-executed tactical patterns. The key moment: 17.Ng5!! threatening 18.Nxh7 (since 18...Nxh7 19.Qxh7 would be mate), forcing Black to give up the queen to survive.

The lesson: the smothered mate is rare in master play because strong players see it coming, but it's devastating when it works. Learning to spot the preconditions (knight near f7, rook on g8, king in the corner) is the first step to delivering — or defending against — this pattern.`,
    },
    {
      title: "Key Variations",
      type: "key-idea",
      content: `The pattern can occur without a queen sacrifice too:

1. Defense-less Smothered: If the rook defending the back rank is already missing, the knight can deliver smothered mate without the queen sacrifice. Example: King on h8, Black rook on f8, White knight checks on f7 and it's mate because the rook blocks h8's escape.

2. The Corner Trap: The pattern works in any corner (a1, a8, h1, h8). The requirements are the same: a piece blocking the corner escape and a knight delivering check.

3. Two-Knight Smothered: Sometimes two knights coordinate: one gives the check while the other covers key escape squares.

4. The Lucena Position: In endgame theory, Lucena's position often involves a smothered mate threat that forces the defending rook to stay on the back rank.

5. The Diagonal Smothered: When the king is trapped by its own pieces on a diagonal (rather than the back rank), the same idea applies — a knight check that the king cannot escape.

The smothered mate is rare in master games because strong players see it coming, but it appears frequently in amateur games and is one of the most satisfying ways to win. The key skill: learning to spot the preconditions before launching the attack.`,
    },
  ],
};
