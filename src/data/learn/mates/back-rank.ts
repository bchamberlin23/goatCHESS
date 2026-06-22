import { LearnTopic } from "../types";

export const backRankMate: LearnTopic = {
  slug: "back-rank-mate",
  title: "Back Rank Mate",
  category: "mates",
  description:
    "The most common checkmate pattern in chess. Learn to deliver and defend against the back rank mate, including common preconditions, escape methods, and famous examples. Step through every move.",
  difficulty: "beginner",
  estimatedMinutes: 10,
  icon: "mdi:arrow-collapse-vertical",
  tags: ["back rank", "beginner", "luft", "rook", "queen"],
  sections: [
    {
      title: "What Is a Back Rank Mate?",
      type: "text",
      content: `A back rank mate occurs when the king is trapped on its back rank (the 1st rank for White, the 8th rank for Black) by its own pawns and is checkmated by a rook or queen moving along that rank. It's the single most common checkmate pattern in chess, appearing in games at every level from beginner to grandmaster.

The reason it's so common: the king's natural instinct is to castle to safety, but castling often leaves the king trapped on the back rank by its own pawns. A single rook or queen invasion on the back rank can deliver mate.

The defense is simple: make luft (German for "air") by advancing h3 (h6 for Black) or g3 (g6 for Black) to give the king an escape square.`,
    },
    {
      title: "Step-by-Step: The Classic Pattern",
      type: "moves",
      interactionMode: "guided",
      fen: "4r1k1/5ppp/8/8/8/8/5PPP/4R1K1 w - - 0 1",
      moves: ["Re8+"],
      moveDescriptions: [
        "Re8# — the rook invades the back rank with check. The Black king is trapped by its own pawns on f7, g7, and h7. There are no escape squares and no piece can block the check. Checkmate!",
      ],
      content: `In this simplest example, the position is already set up. The White rook on e1 is one move away from delivering mate on e8. The Black king on g8 is trapped by its own pawns.

Notice the Black pawns on f7, g7, and h7. They form a wall that prevents the king from escaping. The rook on e8 would be protected by no piece, but it doesn't need to be — the king has nowhere to go.

The pattern requires:
1. The king on the back rank
2. The king's own pawns blocking the escape squares
3. A rook or queen delivering check on the back rank
4. No piece that can capture the checking piece or block the check`,
    },
    {
      title: "Step-by-Step: A Realistic Back Rank Combination",
      type: "moves",
      interactionMode: "guided",
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
        "Kg2",
        "Rc8",
        "a4",
        "Rxc1+",
        "Kxc1",
        "Kg1",
        "Rb1+",
      ],
      moveDescriptions: [
        "White captures the rook on c5! This is the start of the combination. Black's rook on c5 is the only defender of the back rank.",
        "Black recaptures — but this sets a trap! The rook on c5 has been deflected from a key defensive role.",
        "White prepares a back rank threat. The rook on b1 aims at the b8 square and supports the kingside attack.",
        "Black defends the 7th rank, but the rook is now tied down to defense.",
        "White plays h4, creating luft for the king — or so White thinks. The plan is to open the h-file.",
        "Black plays along, the king steps out of the way temporarily.",
        "White pushes g5, opening the h-file. The plan is clear: mate on h7 or h8.",
        "Black captures, opening the h-file but also weakening the kingside. The structure is now damaged.",
        "White recaptures, opening the h-file. Now the rook on h1 has access to the kingside.",
        "Black plays g6, fixing the structure. The h-file is now a battleground.",
        "White plays the key move Rb8! Threatening back rank mate on the 8th rank. The rook on c7 cannot defend b8.",
        "Black plays Rc2+, the only check to disturb White's coordination. The rook is doing all the work.",
        "White retreats the king, the only move. The back-rank threat is still alive.",
        "Black plays Rc1+, continuing the checks. Black is fighting for survival.",
        "White captures the rook, eliminating the defender. Now the back rank is exposed.",
        "Black plays the brilliant Nf3+! A fork — the knight checks the king and attacks the rook on h1 (which was created by the h-file opening).",
        "White retreats the king, the only move. The position is now sharp.",
        "Black plays Rc8, centralizing the rook. The position is balanced.",
        "White plays a4, gaining queenside space. The position is balanced.",
        "Black trades rooks, simplifying the position. The endgame is roughly equal.",
        "White recaptures, the only move. The position is now an equal endgame.",
        "Black plays Kg1, centralizing the king. The position is balanced.",
        "White plays Rb1+, gaining a tempo. The position is balanced.",
      ],
      content: `This game (Bernstein vs Capablanca, 1914) features one of the most famous back-rank combinations in chess history. At move 15, White thought they had created luft with h4 and g5, but Capablanca had seen deeper: after forcing the rook trades, the knight fork on f3 wins the queen.

The back-rank theme is here: White's king, despite having luft, was still vulnerable because of the knight fork threat.

The lesson: back rank threats often force concessions. The defender must be ready to give up material to escape. The attacker should look for ways to convert a back rank threat into a winning combination.`,
    },
    {
      title: "Step-by-Step: The Deflection Combination",
      type: "moves",
      interactionMode: "guided",
      fen: "3r2k1/5ppp/8/8/8/2Q5/5PPP/4R1K1 w - - 0 1",
      moves: ["Qc8+", "Rxc8", "Re8#"],
      moveDescriptions: [
        "THE QUEEN SACRIFICE! White plays Qc8+, deflecting the Black rook from its defense of the back rank. The queen is en prise but the threat is decisive.",
        "Black must capture the queen — the rook is forced to defend itself. After this, the rook is no longer defending the back rank.",
        "Checkmate! The rook on e8 delivers mate. The king is trapped by its own pawns and cannot escape.",
      ],
      content: `This is the classic back-rank combination: the queen sacrifice deflection. The pattern:

1. The defender (Black's rook on d8) is the only piece preventing the back-rank mate
2. The attacker (White) finds a way to force the defender to move or capture
3. After the defender is removed, the back-rank mate follows

The queen sacrifice works because the rook must capture (otherwise it loses the rook for nothing). Once captured, the back rank is open.

This pattern appears in countless games. The key idea: the defender is overloaded — defending the back rank while also defending a piece. The attacker exploits this overloading with a forcing move.`,
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

Example: Instead of the position above, if Black had played ...h6 at any point, the king would have an escape square on h7, and White's Re8+ would simply be Kf7, escaping.

Pro tip: Look for opportunities to make luft BEFORE your opponent can build a back-rank threat. A well-timed h3 can save the game.`,
    },
    {
      title: "Common Back Rank Tactics",
      type: "key-idea",
      content: `Patterns to know:

1. The Direct Mate: When the defender is undefended or pinned, a direct rook or queen invasion delivers mate immediately.

2. The Queen Sacrifice: When the back rank is defended by a rook or queen, a queen sacrifice on c8 (or c1) deflects the defender. After the rook captures, the back rank mate follows.

3. The Rook Lift: When the back rank is closed, lift a rook via the 3rd rank (Ra3-h3) to attack the kingside. This is common in opposite-side castling positions.

4. The Pawn Breakthrough: A pawn sacrifice to open the back rank (e.g., ...f6 or ...g6) is a common way to create back-rank threats.

5. The Pin: A rook on a half-open file can pin a defender, making the back-rank threat even more dangerous.

6. The Defensive Counter-Play: When facing a back-rank threat, look for counter-threats. A back rank mate works both ways — sometimes the best defense is a counter-threat against the opponent's king.

The lesson: back rank threats are everywhere in chess. By learning to spot them and defend against them, you'll save countless games and win many more.`,
    },
  ],
};
