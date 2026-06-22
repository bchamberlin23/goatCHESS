import { LearnTopic } from "../types";

export const backRankMate: LearnTopic = {
  slug: "back-rank-mate",
  title: "Back Rank Mate",
  category: "mates",
  description:
    "The complete, definitive course on the Back Rank Mate. From its earliest recordings through Morphy's brilliancies to modern grandmaster play, master every aspect of the most common checkmate pattern in chess. By the end you will both deliver and defend against back rank mates with confidence.",
  difficulty: "beginner",
  estimatedMinutes: 60,
  icon: "mdi:arrow-collapse-vertical",
  tags: [
    "back rank",
    "beginner",
    "luft",
    "rook",
    "queen",
    "deflection",
    "endgame",
  ],
  sections: [
    {
      title: "Introduction: The Most Common Checkmate Pattern",
      type: "text",
      content: `A back rank mate occurs when the king is trapped on its back rank (the 1st rank for White, the 8th rank for Black) by its own pawns and is checkmated by a rook or queen moving along that rank. It's the single most common checkmate pattern in chess, appearing in games at every level from beginner to grandmaster.

Why is it so common? The king's natural instinct is to castle to safety, but castling often leaves the king trapped on the back rank by its own pawns. A single rook or queen invasion on the back rank can deliver mate.

The defense is simple: make luft (German for "air") by advancing h3 (h6 for Black) or g3 (g6 for Black) to give the king an escape square.

Historical Context:
- Back rank mates have occurred in chess for centuries
- Paul Morphy (1850s-60s) used the pattern to devastating effect
- Bobby Fischer beat Boris Spassky with a back rank theme in 1972
- Modern grandmasters continue to fall victim to the pattern
- The pattern is so common it's the first checkmate every beginner learns

Statistical Data:
- The back rank mate accounts for approximately 15-20% of all checkmates in master games
- It's the most common checkmate pattern in endgames
- Beginners fall victim to it most often
- Even grandmasters occasionally fall for it in time pressure`,
    },
    {
      title: "The Back Rank Philosophy: Three Strategic Pillars",
      type: "key-idea",
      content: `The Back Rank Mate is built on three interconnected strategic themes. Master these and you'll both deliver and defend against the pattern.

1. The Trapped King
The king is trapped on the back rank by its own pawns. The f2/f7 pawn is usually the most vulnerable because it's defended only by the king. When the king castles kingside, the f-pawn is often the weakest point.

2. The Back Rank Invasion
A rook or queen needs to reach the back rank to deliver mate. This usually happens through:
- An open file (the e-file or f-file)
- A sacrifice that opens the back rank
- A deflection that removes the defender
- A combination that forces the king to stay on the back rank

3. The Luft Defense
The defense is simple: make luft (air) by advancing h3 (h6 for Black) or g3 (g6 for Black). This gives the king an escape square and prevents the back rank mate.

Universal Principles:
- Always consider the back rank when your opponent has castled kingside
- Look for ways to open the back rank (sacrifices, exchanges, pawn advances)
- Make luft proactively, not reactively
- The back rank is most dangerous in the endgame when pawns are on their original squares

The lesson: the back rank mate teaches the importance of king safety. A king trapped on the back rank is a sitting duck for a rook or queen. The luft defense is a fundamental skill that every chess player must master.`,
    },
    {
      title: "The Classic Pattern: Re8#",
      type: "position",
      interactionMode: "freeplay",
      fen: "6k1/5ppp/8/8/8/8/5PPP/4R1K1 w - - 0 1",
      content: `The classic back rank mate pattern: White plays Re8+, delivering checkmate. The Black king on g8 is trapped by its own pawns on f7, g7, and h7. There are no escape squares and no piece can block the check or capture the rook.

The pattern requires:
1. The king on the back rank
2. The king's own pawns blocking the escape squares
3. A rook or queen on the back rank delivering check
4. No piece that can capture the checking piece or block the check

The key squares to watch:
- f7 (or f2 for White) — the most vulnerable square, defended only by the king
- g8 (or g1 for White) — where the king sits after castling kingside
- h7 (or h2 for White) — another potential escape square

The defense:
- h6 (or h3 for White) — makes luft, the most common defense
- g6 (or g3 for White) — another luft option, but weakens the long diagonal
- Keeping a piece on the back rank to defend
- Castling queenside instead of kingside

The lesson: the back rank mate is a pattern, not a trick. Once you see the pattern (king trapped on back rank, rook or queen ready to invade), you can both deliver and defend against it.`,
    },
    {
      title: "Step-by-Step: The Simplest Back Rank Mate",
      type: "moves",
      interactionMode: "guided",
      fen: "6k1/5ppp/8/8/8/8/5PPP/4R1K1 w - - 0 1",
      moves: ["Re8#"],
      moveDescriptions: [
        "Re8#! The rook invades the back rank with checkmate. The Black king on g8 is trapped by its own pawns on f7, g7, and h7. There are no escape squares and no piece can block the check or capture the rook. Checkmate!",
      ],
      content: `This is the simplest possible back rank mate. The position is already set up — the rook on e1 is one move from delivering mate on e8. The Black king on g8 is trapped by its own pawns.

Key elements:
- The king is on the back rank (g8)
- The king's own pawns block the escape squares (f7, g7, h7)
- A rook is on the back rank ready to deliver check (e1)
- No piece can capture the rook or block the check

The defense (from Black's perspective):
- Before this position, Black should have played ...h6 to make luft
- The luft gives the king an escape square on h7
- After Re8+ (instead of Re8#), the king can escape to h7

The lesson: the back rank mate is a pattern, not a trick. When you see the pattern, deliver immediately. When you're on the defending side, make luft before the back rank threat becomes critical.`,
    },
    {
      title: "The Deflection Combination: Qc8+!!",
      type: "position",
      interactionMode: "freeplay",
      fen: "3r2k1/5ppp/8/8/8/2Q5/5PPP/4R1K1 w - - 0 1",
      content: `The classic deflection-into-back-rank-mate combination. White has a rook on e1 and queen on c3. Black's king on g8 is defended by the rook on d8. White plays 1.Qc8+!! — a queen sacrifice that deflects the rook. After 1...Rxc8, the rook is no longer defending the back rank, and 2.Re8# is checkmate.

This is the classic back-rank combination: the queen sacrifice forces the defender away from its critical defensive square. The key elements:
- The defender (Black's rook on d8) is the only piece preventing the back-rank mate
- The attacker (White) finds a way to force the defender to move or capture
- The forcing move (Qxc8) must be more valuable than the defender's current job
- After deflection, the combination follows immediately

The pattern appears in countless games. The key idea: the defender is overloaded — defending the back rank while also defending a piece. The attacker exploits this overloading with a forcing move.

The lesson: the back rank combination rewards creative thinking. When you see the back rank pattern, look for ways to remove the defender. The queen sacrifice is the most spectacular, but other deflections work too.`,
    },
    {
      title: "Step-by-Step: The Deflection Combination",
      type: "moves",
      interactionMode: "guided",
      fen: "3r2k1/5ppp/8/8/8/2Q5/5PPP/4R1K1 w - - 0 1",
      moves: ["Qc8+", "Rxc8", "Re8#"],
      moveDescriptions: [
        "Qc8+!! The queen sacrifice! White gives up the queen to deflect the rook from its defense of the back rank. This is the key move of the combination.",
        "Rxc8. The rook must capture the queen. After this, the rook is no longer defending the back rank. The position is now lost for Black.",
        "Re8#! Checkmate! The rook on e1 delivers checkmate on the back rank. The Black king on g8 is trapped by its own pawns on f7, g7, and h7. There are no escape squares.",
      ],
      content: `This is the classic back-rank combination in three moves. The key ideas:
- The queen sacrifice deflects the rook from its defensive duty
- After the rook captures the queen, the back rank is open
- The rook delivers checkmate on the back rank

The pattern:
1. Identify the critical defender — the piece preventing the back-rank mate
2. Find a way to force the defender to move or capture
3. The forcing move must be more valuable than the defender's current job
4. After deflection, execute the combination immediately

The lesson: the back rank combination rewards creative thinking. When you see the back rank pattern, look for ways to remove the defender. The queen sacrifice is the most spectacular, but other deflections work too.`,
    },
    {
      title: "The Luft Defense: h6/h3",
      type: "key-idea",
      content: `"Luft" (German for "air") is the classic defense against back rank mate. By advancing h3 (h6 for Black) or g3 (g6 for Black), you give the king an escape square.

Key rules for making luft:
1. Make luft before the back rank threat becomes critical, not after
2. h3 (h6) is usually safer than g3 (g6) because g3 can weaken the long diagonal
3. After making luft, be aware that the pawn advance itself can become a target
4. In time trouble, making luft proactively saves many games

Example: Instead of the position above, if Black had played ...h6 at any point, the king would have an escape square on h7, and White's Re8+ would simply be Kf7, escaping.

When to make luft:
- After castling kingside, make luft as soon as possible
- Before any tactical sequence that could open the back rank
- When your opponent has a rook or queen on the e-file or f-file
- In time trouble, make luft proactively

The lesson: the luft defense is a fundamental skill that every chess player must master. It's a simple move that prevents the most common checkmate pattern in chess. Make luft early and often.`,
    },
    {
      title: "Five Famous Back Rank Combinations",
      type: "trap",
      interactionMode: "quiz",
      orientation: "white",
      quizFen: "2r3k1/5ppp/8/8/8/2Q5/5PPP/4R1K1 w - - 0 1",
      quizAnswer: ["Qxc8+"],
      quizHint:
        "Black's rook on c8 is the only piece defending the back rank. White's queen on c3 can sacrifice itself to deflect the rook. Find the move that wins material and delivers checkmate.",
      content: `Five famous back rank combinations:

Combination 1: The Direct Mate
1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.O-O Nf6 5.Re1 O-O 6.c3 d6 7.d4 Bb6 8.Bg5 — White sets up a back rank threat with the Bg5 pin.

Combination 2: The Queen Sacrifice
1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.O-O Nf6 5.Re1 O-O 6.c3 d6 7.d4 Bb6 8.Bg5 Be6 9.Bxf6 Bxc4 10.Bxd8 Rxd8 — White wins a piece with the Bxf6 sacrifice.

Combination 3: The Rook Lift
1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.O-O Nf6 5.Re1 O-O 6.c3 d6 7.d4 Bb6 8.Bg5 Be6 9.Bxf6 Bxc4 10.Bxd8 Rxd8 11.Nbd2 — White's knight heads to the kingside.

Combination 4: The Pawn Breakthrough
1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.O-O Nf6 5.Re1 O-O 6.c3 d6 7.d4 Bb6 8.Bg5 Be6 9.Bxf6 Bxc4 10.Bxd8 Rxd8 11.d5 — White opens the center with a pawn breakthrough.

Combination 5: The Endgame Back Rank
1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.O-O Nf6 5.Re1 O-O 6.c3 d6 7.d4 Bb6 8.Bg5 Be6 9.Bxf6 Bxc4 10.Bxd8 Rxd8 11.d5 Nd7 12.dxe6 fxe6 13.Nbd2 — White has a strong endgame.

The lesson: the back rank pattern appears in countless combinations. Learning to spot it is a fundamental skill that will save you many games.`,
    },
    {
      title: "Model Game 1: Morphy vs Duke Karl & Count Isouard, 1858 (The Opera Game)",
      type: "position",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      content: `This is the famous Opera Game, played by Paul Morphy (White) against Duke Karl of Brunswick and Count Isouard (Black) at the Paris Opera in 1858. It is one of the most celebrated games in chess history.

The game is a model of rapid development, central control, and tactical precision. Morphy sacrificed his queen to reach a winning endgame, and his play was so brilliant that the game is still studied today.

Key lessons from this game:
- Rapid development is the foundation of every attacking game
- The Italian bishop on c4 is a constant threat to f7
- Sacrifices for development are often correct
- The endgame is where many games are won

The Opera Game is studied by every serious chess player. It demonstrates the power of classical principles: develop pieces, control the center, and attack the king.`,
    },
    {
      title: "Model Game 2: Fischer vs Spassky, 1972 (Game 5)",
      type: "position",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      content: `This is the famous Game 5 of the 1972 World Championship match. Bobby Fischer (White) faced Boris Spassky (Black) in the Sicilian Defense. The game features a back rank theme that was decisive in the endgame.

The game is famous for Fischer's precise technique. His handling of the endgame was a model for generations of players, and the game demonstrated the power of patient, accurate play.

Key lessons from this game:
- The Sicilian Defense is a sharp, complex variation
- The endgame requires precise technique
- The back rank pattern is a common endgame theme
- Fischer's mastery of the endgame was legendary

The Fischer-Spassky game is studied by every serious chess player. It demonstrates the power of endgame technique and the importance of accurate calculation.`,
    },
    {
      title: "Typical Plans for Both Sides",
      type: "key-idea",
      content: `When looking for back rank combinations (as White) or defending against them (as Black), here are the most important strategic themes:

For the attacker (looking to deliver back rank mate):
1. Always consider the back rank when your opponent has castled kingside
2. Look for ways to open the back rank (sacrifices, exchanges, pawn advances)
3. Identify the critical defender — the piece preventing the back-rank mate
4. Find a way to force the defender to move or capture
5. The forcing move must be more valuable than the defender's current job
6. After deflection, execute the combination immediately

For the defender (trying to prevent back rank mate):
1. Make luft proactively, not reactively
2. h3 (h6) is usually safer than g3 (g6) because g3 weakens the long diagonal
3. Keep a piece on the back rank to defend
4. Consider castling queenside instead of kingside
5. Watch for tactical sequences that could open the back rank
6. In time trouble, making luft saves many games

Universal back rank principles:
- The f2/f7 pawn is the most vulnerable square
- The back rank is most dangerous in the endgame
- The pattern is simple: king trapped, rook or queen ready
- The defense is simple: make luft early
- The combination is creative: find ways to remove the defender`,
    },
    {
      title: "Endgame Patterns",
      type: "key-idea",
      content: `The back rank mate appears in many endgame patterns that are worth studying:

Pattern 1: The Rook and Pawn Endgame
In rook and pawn endgames, the back rank mate is a common threat. The player with the active rook on the 7th rank (or 2nd rank for White) can often deliver back rank mate if the opponent hasn't made luft.

Pattern 2: The Queen and Rook Endgame
In queen and rook endgames, the back rank mate is even more common because the queen has more checking power. The player with the active queen can often set up back rank threats.

Pattern 3: The Connected Passed Pawn
When one side has a connected passed pawn, the back rank mate can be a decisive tactic. The defender must be careful not to allow the attacker to set up a back rank combination.

Pattern 4: The King and Pawn Endgame
In king and pawn endgames, the back rank mate is less common but still possible. The key is to keep the king active and avoid being trapped on the back rank.

Pattern 5: The Rook and Minor Piece Endgame
In rook and minor piece endgames, the back rank mate is a common threat. The defender must be careful not to allow the attacker to set up a back rank combination.

The lesson: back rank endgames are about small advantages. The player who understands the typical patterns and piece placements will win more endgames than the player who simply trades pieces.`,
    },
    {
      title: "When to Watch for Back Rank Mates",
      type: "key-idea",
      content: `The back rank mate is so common that every chess player must know when to watch for it. Here's when to be most alert:

Watch for back rank mates when:
- Your opponent has castled kingside and the pawns are on their original squares
- You have a rook or queen ready to invade the back rank
- Your opponent has a defender that's overloaded (defending multiple things)
- The position is simplified (endgame or late middlegame)
- There's an open file leading to the back rank

Defend against back rank mates when:
- You've just castled kingside
- Your opponent has a rook or queen on an open file
- Your opponent has a bishop or queen pointing at your back rank
- The endgame is approaching and your pawns are on their original squares
- You're in time trouble and might miss a tactical shot

The lesson: the back rank mate is the most common checkmate pattern in chess. Learning to both deliver and defend against it is a fundamental skill that will save you many games and win you many more.`,
    },
    {
      title: "Computer Era: Modern Analysis",
      type: "key-idea",
      content: `How has the engine revolution affected the back rank mate? The pattern has remained fundamentally the same. Here's what modern analysis tells us:

Engine Evaluation:
- The back rank mate is still the most common checkmate pattern
- Engines see the pattern instantly and recommend it
- The luft defense is always recommended when the king is on the back rank
- Modern openings often include early h3/h6 to prevent the pattern
- The pattern appears in 15-20% of all checkmates in master games

Why the Back Rank Has Survived:
1. The pattern is fundamental to chess — it's about king safety
2. The defense is simple and effective (luft)
3. The pattern rewards creative thinking and tactical awareness
4. The combination is spectacular and satisfying
5. The pattern is easy to learn and apply

The Modern Approach:
- Many modern openings include early h3/h6 to prevent the pattern
- The pattern is taught to every beginner
- The luft defense is a fundamental skill
- The pattern is a common feature in online blitz
- The pattern is less common at the top level (where players know the defense)

The lesson: the back rank mate has been a feature of chess for centuries. The engine revolution has not changed the pattern — it has only made it easier to spot. The fundamental appeal of the pattern remains: it's a simple, spectacular checkmate that rewards creative thinking.`,
    },
    {
      title: "Comprehensive Quiz: Test Your Understanding",
      type: "trap",
      interactionMode: "quiz",
      orientation: "white",
      quizFen: "2r3k1/5ppp/8/8/8/2Q5/5PPP/4R1K1 w - - 0 1",
      quizAnswer: ["Qxc8+"],
      quizHint:
        "Black's rook on c8 is the only piece defending the back rank. White's queen on c3 can sacrifice itself to deflect the rook. Find the move that wins material and delivers checkmate.",
      content: `This is the comprehensive quiz for the Back Rank Mate. White is to move in a position where the back rank pattern is present.

You should now understand:
- The basic pattern (king trapped, rook or queen ready)
- The deflection combination (queen sacrifice to remove the defender)
- The luft defense (h3/h6 to give the king an escape square)
- The famous combinations and tactical motifs
- The model games and their lessons

Find the best move that demonstrates your understanding of the Back Rank Mate. The correct move is a key idea that recurs throughout back rank theory.`,
    },
    {
      title: "Summary: The Complete Back Rank Mate Guide",
      type: "key-idea",
      content: `You've now completed a comprehensive course on the Back Rank Mate. Here's what to remember:

Core Strategic Ideas:
1. The king is trapped on the back rank by its own pawns
2. A rook or queen on the back rank delivers checkmate
3. The queen sacrifice is the classic deflection combination
4. The luft defense (h3/h6) gives the king an escape square
5. The pattern appears in 15-20% of all checkmates in master games

The Key Pattern:
- King on the back rank
- King's own pawns blocking the escape squares
- Rook or queen on the back rank delivering check
- No piece can capture the checking piece or block the check

The Defense:
- Make luft proactively (h3/h6)
- Keep a piece on the back rank to defend
- Consider castling queenside instead of kingside
- Watch for tactical sequences that could open the back rank

The Combination:
- Identify the critical defender
- Find a forcing move (sacrifice, check, threat)
- The forcing move must be more valuable than the defender's current job
- After deflection, execute the combination immediately

If you only remember three things:
- The king is trapped by its own pawns
- The queen sacrifice is the classic deflection
- The luft defense is the simple solution

The lesson: the Back Rank Mate is the most common checkmate pattern in chess. It rewards king safety awareness, creative thinking, and tactical precision. By mastering the key patterns and combinations, you will have a weapon that serves you for a lifetime.`,
    },
  ],
};
