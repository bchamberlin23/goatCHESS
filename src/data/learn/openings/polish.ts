import { LearnTopic } from "../types";

export const polishOpening: LearnTopic = {
  slug: "polish-opening",
  title: "The Polish Opening (Sokolsky)",
  category: "openings",
  description:
    "A deep dive into 1.b4 — the Polish Opening, also known as the Sokolsky Opening or the Orangutan. Learn its rich history, key strategic ideas, all major variations, typical pawn structures, model games, and common traps for both sides.",
  difficulty: "intermediate",
  estimatedMinutes: 25,
  icon: "mdi:flag-outline",
  tags: [
    "1.b4",
    "flank opening",
    "queenside",
    "fianchetto",
    "Sokolsky",
    "Orangutan",
  ],
  sections: [
    {
      title: "Introduction & History",
      type: "text",
      content: `The Polish Opening (1.b4) is one of the most fascinating flank openings in chess. Named after Polish players who championed it in the early 20th century, it was popularized internationally by Alexey Sokolsky in the 1950s and 60s. The opening is also known as the Orangutan, a nickname coined by Savielly Tartakower during the 1924 New York tournament after a visit to the Bronx Zoo.

The move 1.b4 immediately stakes a claim on the queenside. White controls the c5 square, prepares Bb2 to dominate the long diagonal, and can expand further with a4, c4, or even d4 depending on how Black responds. Unlike 1.e4 or 1.d4, the Polish Opening often avoids deeply analyzed mainline theory, making it an excellent practical weapon at club level.

Key Statistics:
- White scores approximately 52% in master games
- Adopted by GMs like Savielly Tartakower, Boris Spassky (occasionally), and more recently by Hikaru Nakamura in online rapid games
- Most effective as a surprise weapon at the 1200-2200 level`,
    },
    {
      title: "Core Strategic Ideas",
      type: "key-idea",
      content: `White's plan revolves around four interconnected themes:

1. Long Diagonal Pressure – Bb2 is the star piece. It eyes the g7 pawn and the entire a1-h8 diagonal. Combined with a later d4 or e3, this bishop becomes devastating.

2. Queenside Expansion – The b4 pawn already controls c5. White often follows with a4, c4, and sometimes d4 to grab space on the queenside and center.

3. Flexible Center – White delays committing to e4 or d4 until Black's setup is clear. This makes the opening harder to prepare against with computer lines.

4. King Safety – White normally castles kingside. The b-pawn advance does not compromise the kingside pawn shield.

Black typically responds by either occupying the center with ...e5/...d5, fianchettoing on g7, or challenging the b4 pawn immediately with ...a5.`,
    },
    {
      title: "Main Line: 1.b4 e5 2.Bb2",
      type: "position",
      fen: "rnbqkbnr/pppp1ppp/8/4p3/1P6/8/PBPPPPPP/RN1QKBNR b KQkq - 0 2",
      interactionMode: "freeplay",
      content: `After 1.b4 e5, 2.Bb2 is the principled continuation. White immediately puts the question to Black's e5 pawn. Black has several replies that define the character of the game.

2...Bxb4 – The most critical and aggressive response. Black wins a pawn but must navigate tricky compensation. This is the Birmingham Gambit accepted.

2...d6 – Solid, defending e5 and preparing ...Nf6, ...g6, ...Bg7. Black builds a King's Indian style setup.

2...f6 – The Bugayev Defense. Black defends e5 directly but weakens the kingside dark squares and the e8-h5 diagonal.

2...Nc6 – Develops naturally and forces White to decide how to handle the e5 pawn.

Try playing as Black on this board — experiment with the 4 main replies and see how the position changes.`,
    },
    {
      title: "Birmingham Gambit: 2...Bxb4 3.f4!",
      type: "moves",
      interactionMode: "guided",
      fen: "rnbqkbnr/pppp1ppp/8/4p3/1P6/8/PBPPPPPP/RN1QKBNR b KQkq - 0 2",
      moves: ["e5", "Bb2", "Bxb4", "f4", "exf4", "Bxg7", "Qh4"],
      moveDescriptions: [
        "White opens with the Polish",
        "Developing the dark-squared bishop to its best diagonal",
        "Black accepts the gambit pawn",
        "The key move! White undermines e5 and opens lines",
        "Black captures, the critical test",
        "White takes the rook — the thematic sacrifice",
        "Threatening mate on h4. This is the point of White's play",
      ],
      content: `The Birmingham Gambit is White's most aggressive response after Black accepts the b4 pawn. The idea 3.f4! is brilliant: White sacrifices the rook on h8 to open the h-file and create a devastating attack. This gambit has been analyzed deeply and White gets strong practical chances.

Key line after 7.Qh4+:
- 7...Kf8 8.Nf3 Nf6 9.Qxf4 d5 10.e3 with compensation and attacking chances
- 7...g6 8.Qxh8 with a complex endgame where White has the rook but Black has the bishop pair

The Birmingham Gambit is especially dangerous in rapid and blitz games where Black has less time to navigate the complications.`,
    },
    {
      title: "Birmingham Gambit Declined: 2...d6",
      type: "moves",
      interactionMode: "guided",
      fen: "rnbqkbnr/pppp1ppp/8/4p3/1P6/8/PBPPPPPP/RN1QKBNR b KQkq - 0 2",
      moves: [
        "e5",
        "Bb2",
        "d6",
        "c4",
        "Nf6",
        "e3",
        "g6",
        "Nf3",
        "Bg7",
        "Be2",
        "O-O",
        "O-O",
        "Nbd7",
        "Nc3",
        "Re8",
        "Qc2",
      ],
      moveDescriptions: [
        "Polish Opening",
        "Bishop to b2, attacking e5",
        "Solid defense, protecting e5 and preparing a King's Indian setup",
        "White expands on the queenside",
        "Developing naturally",
        "Building a solid center",
        "Fianchettoing the bishop — King's Indian structure",
        "Standard development",
        "Completing the fianchetto",
        "Solid development, preparing to castle",
        "Both kings safe",
        "Knight maneuvers for both sides",
        "Positioning for central play",
        "Preparing ...e4 ideas",
        "White connects rooks and eyes the c-file",
      ],
      content: `When Black declines the gambit with 2...d6, the game takes on a positional character. Black often adopts a King's Indian Defense setup with ...g6, ...Bg7, ...Nf6, and ...O-O.

White's Plan: Expand on the queenside with c4, d3/d4, and a4. Use the b2 bishop to pressure the long diagonal. If Black castles kingside, White can consider a kingside pawn storm with f4.

Black's Plan: Control e5 and prepare ...d5 or ...f5 breaks. The d6-e5 pawn chain is solid but restricts the dark-squared bishop temporarily. A well-timed ...e4 or ...d5 can seize space.

This is the most popular way to meet the Polish Opening at the club level — it's safe, sound, and avoids the sharp complications of the gambit lines.`,
    },
    {
      title: "Bugayev Defense: 2...f6",
      type: "position",
      interactionMode: "quiz",
      fen: "rnbqkbnr/pppp2pp/5p2/4p3/1P6/8/PBPPPPPP/RN1QKBNR w KQkq - 0 3",
      quizFen: "rnbqkbnr/pppp2pp/5p2/4p3/1P6/8/PBPPPPPP/RN1QKBNR w KQkq - 0 3",
      quizAnswer: ["e4"],
      quizHint:
        "Black has weakened the a2-g8 diagonal and the e8-h5 diagonal by playing ...f6. White should open the center immediately.",
      content: `The Bugayev Defense (2...f6) is a provocative way to defend the e5 pawn. By playing f6, Black keeps the pawn structure intact on e5 but creates significant weaknesses:

1. The a2-g8 diagonal is opened making the king's position fragile
2. The e8-h5 diagonal is exposed, making Qh5+ ideas possible
3. The knight on g8 loses its best square (Nf6 is no longer safe)

Your turn — find White's best move. (Hint: open the center while Black is underdeveloped.)

A famous trap in this line:
3.e4 Bxb4? 4.Bc4! Ne7 5.Qh5+ g6 6.Qh6! and Black is in serious trouble.

At higher levels, the Bugayev is rarely seen because of these structural issues, but it can work as a surprise weapon at faster time controls.`,
    },
    {
      title: "The Sokolsky System: 2...Nc6",
      type: "moves",
      interactionMode: "guided",
      fen: "rnbqkbnr/pppp1ppp/8/4p3/1P6/8/PBPPPPPP/RN1QKBNR b KQkq - 0 2",
      moves: [
        "e5",
        "Bb2",
        "Nc6",
        "b5",
        "Nce7",
        "e4",
        "Ng6",
        "Nf3",
        "Nf6",
        "Nc3",
        "d5",
        "Bb5+",
        "Bd7",
        "Bxd7+",
        "Qxd7",
      ],
      moveDescriptions: [
        "Standard Polish",
        "Bishop to b2",
        "Developing the knight, defending e5 indirectly",
        "White kicks the knight, gaining queenside space",
        "The knight must retreat, a concession",
        "White occupies the center",
        "Knight redeploys to g6",
        "Natural development",
        "Both sides developing",
        "Fighting for the center",
        "Pinning, creating a slight edge",
        "Blocking the pin",
        "Trading bishops, Black's king is slightly exposed",
        "Recapturing",
      ],
      content: `The Sokolsky System (named after the opening's greatest promoter) features 2...Nc6 followed by White's thematic 3.b5. This move, kicking the knight, is a key idea in many Polish Opening lines.

After 3.b5 Nce7 (3...Nd4 is also possible and trickier), White gains space and time to build a solid center with e4, Nf3, Nc3, and eventually d4. The knight on e7 is awkwardly placed and will need to relocate to g6.

A common trap for Black in this line:
3.b5 Nd4? 4.e3! (not 4.Bxe5? Qg5!) and the knight is trapped. After 4...Nf5 5.Bd3 d5 6.Bxf5 Bxf5 7.Bxe5 White has won a central pawn with a comfortable position.`,
    },
    {
      title: "Symmetrical Variation: 1...b5",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/p1pppppp/8/1p6/1P6/8/P1PPPPPP/RNBQKBNR w KQkq - 0 2",
      content: `The Symmetrical Variation (1.b4 b5) is Black's most provocative reply. By copying White's move, Black says "anything you can do, I can do too." This variation is rare at the top level but popular in online play.

White's best continuation is 2.Bb2, developing the bishop while maintaining tension. Black typically follows with 2...Bb7, and now White has several options:

- 3.e3: Solid, aiming for Nf3, d4, and central control
- 3.a4: Immediately challenging the symmetry — if 3...bxa4 4.Rxa4 gives White the open a-file
- 3.c4: The most ambitious, aiming for a big center with d4 to follow

Try playing some moves as White on this board. What happens if you break the symmetry with a4?`,
    },
    {
      title: "Dutch Defense Setup: 1...f5",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/ppppp1pp/8/5p2/1P6/8/P1PPPPPP/RNBQKBNR w KQkq - 0 2",
      content: `When Black responds with 1...f5, they aim for a Dutch Defense setup with reversed colors. White has an extra tempo compared to a normal Dutch.

White's best plan:
2.Bb2 Nf6 3.Nf3 e6 4.e3 Be7 5.c4 0-0 6.Be2 d6 7.0-0

White has a comfortable position with the b2 bishop raking the long diagonal. The b4 pawn controls c5, making it harder for Black to achieve the ...c5 break that is often important in Dutch structures.

Key ideas for White:
- The b2 bishop is a monster after Black plays ...d6 and ...e6 (blocking their own light-squared bishop)
- White can consider a quick a4-a5 to create weaknesses on b6
- The c4-e3-d3 pawn structure is very solid against Black's ...e5 breaks
- Kingside castling is safe since Black has weakened their kingside with ...f5`,
    },
    {
      title: "Indian Setup: 1...Nf6",
      type: "moves",
      interactionMode: "guided",
      fen: "rnbqkbnr/pppppppp/8/8/1P6/8/P1PPPPPP/RNBQKBNR b KQkq - 0 1",
      moves: ["Nf6", "Bb2", "e6", "b5", "d5", "e3", "a6", "a4", "Bd6", "Nf3"],
      moveDescriptions: [
        "Flexible — Black delays committing the center",
        "Developing the bishop to its best square",
        "Preparing ...d5 with a solid pawn chain",
        "Gaining queenside space",
        "Occupying the center",
        "Solid development, preparing to castle",
        "Challenging White's queenside expansion",
        "Securing the b5 pawn and gaining more space",
        "Developing the bishop actively",
        "Both sides completing development",
      ],
      content: `The flexible 1...Nf6 is perhaps Black's most solid response. By not committing to ...e5 or ...d5 immediately, Black keeps options open and waits for White to show their hand.

White typically continues with Bb2, and the game often transposes to structures resembling the Nimzo-Larsen Attack or the English Opening (with colors reversed).

A key strategic point: after 1.b4 Nf6 2.Bb2, Black should avoid 2...e5? because after 3.Bxe5!, White wins a pawn. The bishop on b2 is already attacking e5, and unlike after 1.b4 e5, Black hasn't developed the bishop to defend it.

The Indian setup is the choice of well-prepared opponents who know the Polish Opening can become dangerous if they overcommit early. It leads to rich, strategic middlegames where both sides have chances.`,
    },
    {
      title: "Common Traps in the Polish Opening",
      type: "trap",
      interactionMode: "quiz",
      quizFen: "rnbqkbnr/ppp2ppp/3p4/4p3/1PP5/8/PB1PPPPP/RN1QKBNR b KQkq - 0 4",
      quizAnswer: ["Nb4"],
      quizHint:
        "Black just played 3...Nc6 blocking their c-pawn. Look at the b4 pawn — it's undefended and White just pushed c4. What square does that expose?",
      content: `Trap 1: The Birmingham Mate
1.b4 e5 2.Bb2 Bxb4 3.Bxg7?? (a common beginner mistake — never take on g7 immediately!) 3...Qh4 4.g3 Qxg3+ 5.Bg2 Qxg2# — White gets mated!

Instead, the correct move is 3.f4! as shown in the Birmingham Gambit section.

Trap 2: The Fork Trick (Try this on the board!)
1.b4 e5 2.Bb2 d6 3.c4 Nc6? — Black plays naturally, but there's a tactic. Can you find it? (Hint: b5 traps the knight.)

Trap 3: The e5 Tactical Shot
1.b4 Nf6 2.Bb2 e5? 3.Bxe5! wins a pawn. The rook on g8 is now hanging after 3...Nc6 4.Bb2 Nxb4 5.e4 — White is simply up a central pawn.

Trap 4: The Bugayev Queen Trap
1.b4 e5 2.Bb2 f6 3.e4 Bxb4? 4.Bc4! Ne7 5.Qh5+! g6 6.Qh6 and Black's position collapses. The threat of Qf8# combined with Bf7+ ideas is decisive.

Trap 5: The Knight on e7
1.b4 e5 2.Bb2 Nc6 3.b5 Nd4? 4.e3 Nf5 5.g4! Nh4 6.Bxh8! — and the knight is trapped in the corner after 6...Ng2+ 7.Ke2 Nxe3 8.dxe3.`,
    },
    {
      title: "Model Game: Sokolsky vs Struchkov, 1963",
      type: "moves",
      interactionMode: "guided",
      fen: "rnbqkbnr/pppppppp/8/8/1P6/8/P1PPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: [
        "b4",
        "e5",
        "Bb2",
        "f6",
        "e4",
        "Bxb4",
        "Bc4",
        "Ne7",
        "Qh5+",
        "Ng6",
        "f4",
        "exf4",
        "Nc3",
        "d5",
        "Nxd5",
        "c6",
        "Ne3",
        "Qa5",
        "O-O-O",
        "Be7",
        "Nf3",
        "Na6",
        "Nh4",
        "Nb4",
        "Nxg6",
        "hxg6",
        "Qxh8+",
        "Bf8",
        "Nf5",
      ],
      moveDescriptions: [
        "Polish Opening",
        "Central response",
        "Developing the bishop with tempo on e5",
        "Bugayev Defense — weakening the king",
        "Exploiting the weakness immediately!",
        "Accepting the gambit pawn",
        "The hammer blow — attacking f7 and opening lines",
        "Forced defense",
        "The point — Black's king is in grave danger",
        "Only move to protect f7",
        "Opening more lines for the attack",
        "Black captures, but the center collapses",
        "Developing with tempo — Nxd5 is threatened",
        "Desperately defending",
        "Winning material — the knight cannot be captured",
        "Trying to create counterplay",
        "Simplifying into a winning endgame",
        "Black's position is hopeless",
        "Developing the knight",
        "Futile counterplay",
        "Winning the exchange — the h8 rook falls",
        "Desperation",
        "White resigns. The threat is Nxg7+ followed by Qxf6+",
      ],
      content: `This classic game from Sokolsky's 1963 book "The Polish Opening" demonstrates the devastating potential of White's attack after Black plays the weakening 2...f6.

The key moment comes on move 4: Bc4! targets the f7 square, and combined with Qh5+ on move 5, Black's position is already critical. Notice how Black's knight on e7 blocks the bishop and queen, preventing the king from escaping.

This game is a perfect illustration of why the Bugayev Defense is considered dubious at the master level. The weakening move f6, combined with the pawn grab on b4, gives White more than enough compensation.`,
    },
    {
      title: "Model Game: Karpov vs Miles, 1980",
      type: "moves",
      interactionMode: "guided",
      fen: "rnbqkbnr/pppppppp/8/8/1P6/8/P1PPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: [
        "b4",
        "Nf6",
        "Bb2",
        "e6",
        "b5",
        "d5",
        "e3",
        "a6",
        "a4",
        "axb5",
        "axb5",
        "Rxa1",
        "Bxa1",
        "c5",
        "bxc6",
        "Nxc6",
        "Bb2",
        "Bd6",
        "Nf3",
        "O-O",
        "c4",
        "dxc4",
        "Bxc4",
        "Qe7",
      ],
      moveDescriptions: [
        "Polish Opening",
        "Flexible Indian setup",
        "Thematic development",
        "Solid — preparing ...d5",
        "Gaining queenside space",
        "Occupying the center",
        "Building a solid pawn structure",
        "Immediately challenging White's queenside expansion",
        "Securing b5",
        "Trading on a1",
        "Recapturing, maintaining the bishop on the long diagonal",
        "Undermining White's queenside",
        "En passant capture",
        "Developing with tempo",
        "Redeploying the bishop",
        "Developing naturally",
        "White has a comfortable position",
        "Opening the center",
        "Developing with tempo",
        "Both sides have completed development with a balanced position",
      ],
      content: `This famous game from the 1980 European Team Championship features then-World Champion Anatoly Karpov (as Black) facing Tony Miles' Polish Opening. Miles was known for his creative opening choices.

The game shows how a top-level player handles the Polish with the flexible 1...Nf6 approach. Karpov avoids tactical complications, trades the a-file rooks, and achieves a balanced position. The game was eventually drawn after a long strategic struggle.

Key lessons:
- Against a well-prepared opponent, the Polish often leads to equality — but it's a fighting equality where both sides have winning chances
- The Indian setup (1...Nf6) is Black's safest approach
- The b4-b5 expansion is a double-edged sword — it gains space but the b5 pawn can become a target
- Trading rooks on the a-file is a common defensive idea for Black`,
    },
    {
      title: "Summary & Practical Recommendations",
      type: "key-idea",
      content: `When to play the Polish Opening:
✓ As a surprise weapon in tournament play
✓ Against opponents who rely heavily on memorized opening lines
✓ In rapid and blitz games where the Birmingham Gambit can be devastating
✓ When you want a complex, imbalanced position from moves 1-3

Key ideas to remember:
1. Bb2 is the star — always develop this bishop to b2 ASAP
2. f4 is the key move in the Birmingham Gambit (not Bxg7!)
3. Against ...d6 setups, play c4 and expand on the queenside
4. b5 is a great space-gaining move when Black plays ...Nc6
5. Against ...f6, open the center immediately with e4

If you only remember three things:
- Bb2 targets g7 and e5 simultaneously
- Never take on g7 before castling
- When in doubt, play e3, Nf3, Be2, and castle — the bishop is enough of an asset

Common rating ranges where the Polish is particularly effective:
- 1200-1600: The Birmingham Gambit will win many games outright
- 1600-2000: The solid positional lines with c4 and d3 are effective
- 2000+: Use as a surprise weapon, especially in faster time controls

→ Ready to practice? Click "Start Practice" below and the CPU will play random Black defenses. You play White and try to remember the correct responses!`,
    },
  ],

  // Practice mode — CPU plays random Black responses
  practice: {
    startingFen: "rnbqkbnr/pppppppp/8/8/1P6/8/P1PPPPPP/RNBQKBNR b KQkq - 0 1",
    userColor: "w",
    instructions:
      "Practice the Polish Opening: the CPU will randomly play different Black defenses. Play the correct White response for each. Your goal is to reach a good position after 6-8 moves against every defense.",
    lines: [
      {
        name: "Birmingham Gambit",
        description: "Black accepts the pawn with 2...Bxb4",
        moves: ["e5", "Bb2", "Bxb4", "f4", "exf4", "Bxg7", "Qh4"],
      },
      {
        name: "Solid d6 Defense",
        description: "Black defends e5 with d6 (King's Indian style)",
        moves: [
          "e5",
          "Bb2",
          "d6",
          "c4",
          "Nf6",
          "e3",
          "g6",
          "Nf3",
          "Bg7",
          "Be2",
          "O-O",
          "O-O",
        ],
      },
      {
        name: "Bugayev Defense (f6)",
        description: "Black plays the weakening f6",
        moves: [
          "e5",
          "Bb2",
          "f6",
          "e4",
          "Bxb4",
          "Bc4",
          "Ne7",
          "Qh5+",
          "Ng6",
          "f4",
        ],
      },
      {
        name: "Sokolsky System (Nc6)",
        description: "Black develops the knight — White kicks with b5",
        moves: [
          "e5",
          "Bb2",
          "Nc6",
          "b5",
          "Nce7",
          "e4",
          "Ng6",
          "Nf3",
          "Nf6",
          "Nc3",
        ],
      },
      {
        name: "Indian Setup (Nf6)",
        description: "Black plays flexible Nf6",
        moves: ["Nf6", "Bb2", "e6", "b5", "d5", "e3", "a6", "a4", "Bd6", "Nf3"],
      },
      {
        name: "Symmetrical (b5)",
        description: "Black copies with 1...b5",
        moves: [
          "b5",
          "Bb2",
          "Bb7",
          "e3",
          "a6",
          "Nf3",
          "e6",
          "Be2",
          "Nf6",
          "O-O",
        ],
      },
      {
        name: "Dutch Setup (f5)",
        description: "Black plays the Dutch with ...f5",
        moves: [
          "f5",
          "Bb2",
          "Nf6",
          "e3",
          "e6",
          "Nf3",
          "Be7",
          "Be2",
          "O-O",
          "O-O",
        ],
      },
    ],
  },
};
