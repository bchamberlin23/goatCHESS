import { LearnTopic } from "../types";

export const backRankMate: LearnTopic = {
  slug: "back-rank-mate",
  title: "Back Rank Mate",
  category: "mates",
  description:
    "The most common checkmate pattern in chess. Learn to deliver and defend against the back rank mate, including common preconditions and escape methods.",
  difficulty: "beginner",
  estimatedMinutes: 8,
  icon: "mdi:arrow-collapse-vertical",
  tags: ["back rank", "beginner", "luft", "rook", "queen"],
  sections: [
    {
      title: "What Is a Back Rank Mate?",
      type: "text",
      content: `A back rank mate occurs when the king is trapped on its back rank (the 1st rank for White, the 8th rank for Black) by its own pawns and is checkmated by a rook or queen moving along that rank. It's the single most common checkmate pattern in chess, appearing in games at every level from beginner to grandmaster.`,
    },
    {
      title: "The Classic Pattern",
      type: "position",
      fen: "6k1/5ppp/8/8/8/8/5PPP/4R1K1 w - - 0 1",
      content: `In this simple example, White plays Re8#, delivering checkmate. The Black king is trapped on the back rank by its own pawns on f7, g7, and h7. There are no escape squares. Notice that the Black pawns, which normally protect the king, become its cage when a rook or queen reaches the back rank.`,
    },
    {
      title: "The Luft Move",
      type: "key-idea",
      content: `"Luft" (German for "air") is the classic defense against back rank mate. By advancing h3 (h6 for Black) or g3 (g6 for Black), you create an escape square for your king. 

Key rules for making luft:
1. Make luft before the back rank threat becomes critical, not after
2. h3 (h6) is usually safer than g3 (g6) because g3 can weaken the long diagonal
3. After making luft, be aware that the pawn advance itself can become a target
4. In time trouble, making luft proactively saves many games

Example: Instead of the position above, if Black had played ...h6 at any point, the king would have an escape square on h7, and White's Re8+ would simply be Kf7, escaping.`,
    },
    {
      title: "Common Back Rank Tactics",
      type: "position",
      fen: "3r2k1/5ppp/8/8/8/2Q5/5PPP/6K1 w - - 0 1",
      content: `A common back rank tactic involves a queen sacrifice or deflection. In this position, White plays 1.Qc8+! Rxc8 2.Rxc8# — the queen sacrifice removes the defender (the rook) and delivers back rank mate. This theme (sacrificing to remove the defender of the back rank) appears in countless combinations.

Another common pattern: when both rooks are connected on the back rank but with limited luft, sacrificing one rook to force the king out, then mating with the other.`,
    },
    {
      title: "Famous Example: Bernstein vs Capablanca, 1914",
      type: "moves",
      fen: "2r3k1/5pp1/4p2p/1pr5/3n2P1/1P1P2KP/P1R5/5R2 w - - 0 1",
      moves: [
        "Rxc5",
        "Rxc5",
        "Rb1",
        "Rc7",
        "h4",
        "Kh7",
        "g5",
        "hxg5",
        "hxg5",
        "g6",
        "Rb8",
        "Rc2+",
        "Kg1",
        "Rc1+",
        "Rxc1",
        "Nf3+",
      ],
      moveDescriptions: [
        "White captures the rook on c5",
        "Black recaptures — but this sets a trap",
        "White prepares a back rank threat",
        "Defending the 7th rank",
        "Creating luft — or so White thinks",
        "Black plays along",
        "Continuing the plan",
        "White captures, opening the h-file",
        "Recapturing",
        "Fixing the pawn structure",
        "White threatens back rank mate",
        "The check that sets up the combination",
        "Forced",
        "The rook check",
        "White captures, thinking they're safe",
        "Fork! The knight checks and wins the queen. A classic Capablanca combination",
      ],
      content: `This game features one of the most famous back rank combinations in chess history. At move 15, White thought they had created luft with h4 and g5, but Capablanca had seen deeper: after forcing the rook trades, the knight fork on f3 wins the queen. The back rank theme is here: White's king, despite having luft, was still vulnerable because of the knight fork threat.`,
    },
  ],
};
