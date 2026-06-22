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
      type: "moves",
      interactionMode: "guided",
      fen: "r1bq1rk1/ppp2ppp/2np4/4N3/2B1n3/8/PPPP1PPP/RNBQK2R w KQ - 0 1",
      moves: ["Nf7+", "Kg8", "Nh6+", "Kh8", "Qg8+", "Rxg8", "Nf7#"],
      moveDescriptions: [
        "Knight check! The White knight jumps to f7, forking the king on g8 and the queen on d8. The king must move, and the queen is under attack.",
        "The king is forced to step to g8 — the only legal move. Now the king is heading toward the corner.",
        "Double check! The knight moves to h6, and the bishop on c4 also gives check. The king MUST move (you can't block or capture a double check).",
        "The king is forced back to h8 — the corner! Now the king is trapped by its own rook on g8 (which just moved) and the bishop on c4 covers h7.",
        "QUEEN SACRIFICE! The queen moves to g8, sacrificing itself but forcing the rook to capture. This is the key idea of the smothered mate — the queen is given up to trap the king.",
        "The rook on g8 must capture the queen. But wait — this is exactly the trap! The rook is now blocking the king's only escape square on g8.",
        "Smothered mate! The knight returns to f7, delivering checkmate. The king is completely trapped by its own rook on g8 and cannot escape. Beautiful!",
      ],
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
      type: "moves",
      interactionMode: "guided",
      fen: "r3k2r/ppp1nppp/8/3p4/3P4/3N4/PPP2PPP/R3K2R w KQkq - 0 1",
      moves: [
        "Nf4",
        "O-O",
        "Nxd5",
        "Nxd5",
        "exd5",
        "Re8",
        "Bd2",
        "Nf6",
        "O-O-O",
        "Bg4",
        "h3",
        "Bh5",
        "g4",
        "Bg6",
        "Nxg6",
        "hxg6",
        "Qf3",
        "Qd6",
        "Rh2",
        "Re2",
        "Qxf6",
        "Qxf6",
        "Rxe2",
        "Rxe2",
        "Rxe2",
        "Kf8",
        "Re6",
        "Rd2",
        "Rxd2",
        "Rd8",
        "Rxd8+",
        "Kxd8",
        "Bxh6",
      ],
      moveDescriptions: [
        "White develops the knight to f4, the standard square. The knight is heading for a strong central position.",
        "Black castles, putting the king to safety.",
        "White plays the strong Nxd5, winning a pawn. The knight is centralized and powerful.",
        "Black recaptures with the knight, attacking the d4 pawn. The position is balanced.",
        "White captures, opening the e-file. The position is now sharp.",
        "Black plays Re8, defending the e-pawn and adding pressure. The position is balanced.",
        "White plays Bd2, developing the bishop. The position is balanced.",
        "Black plays Nf6, defending the d5 square. The position is balanced.",
        "White castles queenside, putting the king on the queenside. The position is now ready for the middlegame.",
        "Black plays Bg4, pinning the knight. The position is now sharp.",
        "White plays h3, kicking the bishop. The position is balanced.",
        "Black retreats the bishop to h5, the natural square. The position is balanced.",
        "White plays g4, kicking the bishop again. The position is now sharp.",
        "Black trades bishops, removing the active piece. The position is now roughly equal.",
        "White recaptures with the knight, centralizing. The position is balanced.",
        "Black recaptures with the h-pawn, weakening the kingside. The position is now sharp.",
        "White plays Qf3, attacking the f7 square. The position is now sharp.",
        "Black plays Qd6, defending the f7 square. The position is balanced.",
        "White plays Rh2, the start of a kingside attack. The rook is heading for the h-file.",
        "Black plays the strong Re2!, sacrificing the exchange. The rook is doing tremendous work — pinning the rook on h2 and threatening mate on h2.",
        "White plays Qxf6, a tactical resource. The queen captures the f6 knight with check.",
        "Black recaptures with the queen, centralizing. The position is now sharp.",
        "White plays Rxe2, winning the rook. The position is now winning for White.",
        "Black recaptures with the rook, centralizing. The position is balanced.",
        "White trades rooks, simplifying the position. The position is now winning for White in the endgame.",
        "Black recaptures with the king, the only move. The position is now an equal endgame.",
        "White plays Re6, defending the e-file. The position is now winning for White.",
        "Black plays Rd2, attacking the d2 bishop. The position is sharp.",
        "White trades rooks, simplifying the position. The position is now winning for White in the endgame.",
        "Black plays Rd8, defending the 8th rank. The position is balanced.",
        "White trades rooks, simplifying the position. After Rxd8+ Kxd8, the position is now winning for White in the endgame.",
        "Black recaptures with the king, the only move. The position is now an equal endgame.",
        "White plays Bxh6, winning a pawn. The position is now winning for White.",
      ],
      content: `The smothered mate has many variations. The most common patterns:

1. The Defense-less Smothered: If the rook defending the back rank is already missing, the knight can deliver smothered mate without the queen sacrifice.

2. The Corner Trap: The pattern works in any corner (a1, a8, h1, h8). The requirements are the same: a piece blocking the corner escape and a knight delivering check.

3. The Two-Knight Smothered: Sometimes two knights coordinate: one gives the check while the other covers key escape squares.

4. The Lucena Position: In endgame theory, Lucena's position often involves a smothered mate threat that forces the defending rook to stay on the back rank.

The smothered mate is rare in master games because strong players see it coming, but it appears frequently in amateur games and is one of the most satisfying ways to win.`,
    },
    {
      title: "Famous Example: Torre vs Lasker, 1925",
      type: "moves",
      interactionMode: "guided",
      fen: "r4rk1/ppp2ppp/2n5/3b4/2P5/1PN3P1/P2B1q1P/R3R1K1 w - - 0 1",
      moves: [
        "Ng5",
        "Qxg3",
        "hxg3",
        "Bxg3",
        "Re3",
        "Bxe3",
        "fxe3",
        "Rxf1+",
        "Kxf1",
        "Nd4",
        "Nxh7",
        "Nxc2+",
        "Kg2",
        "Nd4",
        "Nf6+",
        "gxf6",
        "Rh1",
        "Rg8",
        "Rxh7",
        "Kxh7",
        "Bf4+",
        "Kg8",
        "Bxd5",
        "c6",
        "Bxc6",
        "bxc6",
        "Nxd5",
        "exd5",
        "e4",
        "dxe4",
        "dxe4",
        "Re8",
        "Kf3",
        "Rb8",
        "b3",
        "Rxb3+",
        "Kf4",
        "Rxa3",
        "Kf5",
        "Rc3",
        "Kxf6",
        "Rxc4",
        "Kxf7",
      ],
      moveDescriptions: [
        "THE KNIGHT SACRIFICE! White plays Ng5, the start of the famous combination. The knight is heading for h7 to deliver a smothered mate.",
        "Black plays Qxg3, capturing a pawn. But this allows the knight to reach h7.",
        "White plays hxg3, recapturing. The h-file is now open for the rook.",
        "Black plays Bxg3, attacking the rook on h1. The position is now sharp.",
        "White plays Re3, defending the h3 pawn. The position is now sharp.",
        "Black plays Bxe3, eliminating the defender. The position is now sharp.",
        "White recaptures with the f-pawn, opening the f-file. The position is now sharp.",
        "Black plays Rxf1+, a tactical resource. The rook captures with check.",
        "White recaptures with the king, the only move. The position is now sharp.",
        "Black plays Nd4, centralizing the knight. The position is now sharp.",
        "White plays Nxh7!, a tactical resource. The knight captures the h7 pawn.",
        "Black plays Nxc2+, checking the king. The position is now sharp.",
        "White plays Kg2, the only safe square. The position is now sharp.",
        "Black plays Nd4, centralizing the knight. The position is now sharp.",
        "White plays Nxf6+, a tactical resource. The knight captures with check.",
        "Black recaptures with the g-pawn, weakening the kingside. The position is now sharp.",
        "White plays Rh1, attacking the knight. The position is now sharp.",
        "Black plays Rg8, defending the g-pawn. The position is now sharp.",
        "White plays Rxh7, winning a pawn. The position is now winning for White.",
        "Black recaptures with the king, the only move. The position is now an equal endgame.",
        "White plays Bf4+, checking the king. The position is now winning for White.",
        "Black plays Kg8, the only safe square. The position is now an equal endgame.",
        "White plays Bxd5, winning a pawn. The position is now winning for White.",
        "Black plays c6, defending the d5 bishop. The position is balanced.",
        "White trades bishops, eliminating Black's dark-squared bishop. The position is now winning for White.",
        "Black recaptures with the b-pawn, opening the b-file. The position is balanced.",
        "White plays Nxd5, winning a pawn. The position is now winning for White.",
        "Black recaptures with the e-pawn, opening the e-file. The position is balanced.",
        "White plays e4, gaining central space. The position is balanced.",
        "Black plays dxe4, opening the position. The position is balanced.",
        "White recaptures with the d-pawn, opening the d-file. The position is balanced.",
        "Black plays Re8, defending the e-file. The position is balanced.",
        "White plays Kf3, centralizing the king. The position is balanced.",
        "Black plays Rb8, defending the b-file. The position is balanced.",
        "White plays b3, defending the b-file. The position is balanced.",
        "Black plays Rxb3+, checking the king. The position is balanced.",
        "White plays Kf4, the only safe square. The position is balanced.",
        "Black plays Rxa3, winning a pawn. The position is now sharp.",
        "White plays Kf5, centralizing the king. The position is balanced.",
        "Black plays Rc3, attacking the c4 pawn. The position is balanced.",
        "White plays Kxf6, winning a pawn. The position is now winning for White.",
        "Black plays Rxc4, winning a pawn. The position is now balanced.",
        "White plays Kxf7, centralizing the king. The position is now winning for White.",
      ],
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
