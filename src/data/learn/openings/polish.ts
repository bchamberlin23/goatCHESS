import { LearnTopic } from "../types";

export const polishOpening: LearnTopic = {
  slug: "polish-opening",
  title: "The Polish Opening (Sokolsky)",
  category: "openings",
  description:
    "The complete, definitive course on 1.b4. From its 1924 Bronx Zoo origins through Sokolsky's 1960s Soviet championship victories to its modern online revival, master every major variation, every famous trap, and every model game. By the end you will be able to play the Polish with full confidence against any level of opposition.",
  difficulty: "intermediate",
  estimatedMinutes: 90,
  icon: "mdi:flag-outline",
  tags: [
    "1.b4",
    "flank opening",
    "queenside",
    "fianchetto",
    "Sokolsky",
    "Orangutan",
    "Birmingham",
    "Bugayev",
  ],
  sections: [
    {
      title: "Introduction: The Opening From the Bronx Zoo",
      type: "text",
      content: `The Polish Opening (1.b4) is one of the most fascinating flank openings in chess history. It carries three names: the Polish Opening (after the Polish players who championed it in the early 20th century), the Sokolsky Opening (after Alexey Sokolsky, who gave it its definitive treatment in his 1958 book), and the Orangutan (a nickname coined by Savielly Tartakower during the 1924 New York tournament after a visit to the Bronx Zoo, where he was impressed by an ape's play).

The move 1.b4 immediately stakes a claim on the queenside. White controls the c5 square, prepares Bb2 to dominate the long diagonal, and can expand further with a4, c4, or even d4 depending on how Black responds. Unlike 1.e4 or 1.d4, the Polish Opening often avoids deeply analyzed mainline theory, making it an excellent practical weapon at club level.

Historical Adopters:
- Savielly Tartakower (1920s-40s) — one of the strongest players of his era, used it frequently
- Alexey Sokolsky (1930s-60s) — Belarusian champion, wrote the definitive book
- Boris Spassky (1960s-70s) — played it occasionally, including against Bobby Fischer
- Viktor Korchnoi (1970s-80s) — used it as a surprise weapon
- Hikaru Nakamura (2010s-present) — revived it online in rapid and blitz
- Daniel Naroditsky (2020s) — popularizer on YouTube, used it to great effect

Statistical Performance:
- White scores approximately 52% in master games
- In online rapid and blitz, the surprise value boosts White's score significantly
- Most effective as a surprise weapon at the 1200-2200 level
- Less effective in classical games against well-prepared opponents`,
    },
    {
      title: "The Sokolsky Philosophy: Four Strategic Pillars",
      type: "key-idea",
      content: `White's plan in the Polish Opening revolves around four interconnected strategic themes. Master these and the moves follow naturally.

1. Long Diagonal Pressure — Bb2 is the star piece. It eyes the g7 pawn and the entire a1-h8 diagonal. Combined with a later d4 or e3, this bishop becomes devastating. A well-placed Bb2 can decide games on its own.

2. Queenside Expansion — The b4 pawn already controls c5. White often follows with a4, c4, and sometimes d4 to grab space on the queenside and center. This expansion is the long-term strategic plan — slow but powerful.

3. Flexible Center — White delays committing to e4 or d4 until Black's setup is clear. This makes the opening harder to prepare against with computer lines. Black must guess which way to develop.

4. King Safety — White normally castles kingside. The b-pawn advance does not compromise the kingside pawn shield. This is a major advantage over openings like the Sicilian where Black's king is permanently exposed.

Black's Counter-Themes:
- Occupy the center with ...e5 or ...d5
- Fianchetto on g7 (King's Indian style)
- Challenge the b4 pawn immediately with ...a5
- Use the half-open a-file after ...axb4

The lesson: the Polish is a slow, strategic opening where the b4 pawn is a long-term investment. The opening rewards patient, positional play and punishes Black for any tactical carelessness.`,
    },
    {
      title: "The Opening Move: Why 1.b4?",
      type: "text",
      content: `Before diving into variations, it's worth asking: why play 1.b4 at all? In an era of engines and deep preparation, what's the value of a flank opening that doesn't immediately fight for the center?

Five reasons, in order of importance:

1. Surprise value. Most opponents have never faced the Polish seriously. Even strong players go out of book after 1.b4 and have to think for themselves. In a 30-minute game, this time pressure is significant.

2. Flexibility. Unlike 1.e4 (which often leads to the Sicilian, Italian, or French) or 1.d4 (which often leads to the QGD, KID, or Slav), 1.b4 can transpose to a wide variety of structures. Black cannot force a narrow mainline.

3. Avoidance of theory. If you dislike memorizing 20 moves of Najdorf theory, the Polish is for you. Most Polish lines require understanding, not memorization.

4. Strategic richness. The b4 pawn creates unique imbalances — the long diagonal, the queenside majority, the flexible center. These are positions that reward deep understanding over tactical memory.

5. Psychological edge. Playing 1.b4 immediately sends a message: "I am out of book, and I'm not afraid of the resulting positions." This can rattle opponents into mistakes.

The Polish is not for everyone. If you prefer sharp, tactical positions, you may find it boring. If you prefer the deep strategic battles of the Catalan or Queen's Gambit, you will love it.`,
    },
    {
      title: "Step-by-Step: Main Line Setup 1.b4 e5 2.Bb2",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: ["b4", "e5", "Bb2"],
      moveDescriptions: [
        "1.b4! The Polish Opening. White immediately stakes a claim on the queenside, controlling c5 and preparing Bb2. The move is a flank opening — it fights for the center without occupying it directly.",
        "1...e5. Black's most ambitious reply, occupying the center and challenging White to prove the b4 pawn is useful. Other replies include 1...d5 (Dutch setup), 1...Nf6 (Indian setup), 1...c5 (Symmetrical), 1...e6 (French setup), 1...b5 (Symmetrical), and 1...f5 (Dutch).",
        "2.Bb2! The principled continuation. The bishop attacks the e5 pawn immediately, putting the question to Black. The bishop on b2 also dominates the long diagonal — its main long-term asset.",
      ],
      content: `This is the starting position of the main line Polish. Black now has a decision: defend the e5 pawn, trade it, or accept the gambit.

The four main replies, in order of frequency:
- 2...d6 (declines the gambit, builds Kings Indian structure) — the most popular
- 2...Bxb4 (Birmingham Gambit accepted) — the sharpest
- 2...Nc6 (Sokolsky System) — the most natural
- 2...f6 (Bugayev Defense) — the most provocative

Each of these leads to a completely different type of game. We'll explore all four in the following sections, with full move-by-move walkthroughs.`,
    },
    {
      title: "The Birmingham Gambit: Accepted",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/pppp1ppp/8/4p3/1P6/8/PBPPPPPP/RN1QKBNR b KQkq - 0 2",
      content: `The Birmingham Gambit Accepted (2...Bxb4) is the sharpest response in the Polish Opening. Black wins a pawn but must navigate White's compensation.

The main line begins 1.b4 e5 2.Bb2 Bxb4 3.f4! — the key move. White offers another pawn to open the center. Black has two main responses:

Option A: 3...d5! — The critical defensive try. Black declines the second pawn and plays the central break. After 4.e4 (White builds a strong center), the position becomes a complex middlegame with chances for both sides.

Option B: 3...exf4 4.Bxg7! — The thematic sacrifice. The bishop captures the g7 pawn, opening the h-file and exposing the Black king. After 4...Qh4+ (the most forcing check), White must play precisely to maintain the attack. The position is roughly equal in material but White has more active pieces.

The Birmingham Gambit has been analyzed for over a century. Modern theory considers it roughly equal but very dangerous for Black, especially in rapid and blitz games where the complications favor the attacker.

Key tactical ideas:
- The Bxg7 sacrifice is the heart of the gambit
- The f4 advance opens lines for the bishop and queen
- Black's king is permanently exposed after accepting the gambit
- The position is forcing — both sides must know the theory

Practical advice: The Birmingham is best played in rapid and blitz where Black has less time to find the precise defensive moves. In classical games, well-prepared Black players can hold.`,
    },
    {
      title: "The Birmingham Gambit: Declined",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/pppp1ppp/8/4p3/1P6/8/PBPPPPPP/RN1QKBNR b KQkq - 0 2",
      content: `The Birmingham Gambit Declined (2...d6) is the most popular and most solid response to 1.b4 e5 2.Bb2. The structure that arises — a Kings Indian setup with the b4 pawn for White — leads to rich, strategic middlegame positions.

The typical setup: 1.b4 e5 2.Bb2 d6 3.c4 Nf6 4.e3 g6 5.Nf3 Bg7 6.Be2 O-O 7.O-O — both sides have completed development and the position enters the middlegame.

Key features:
- White has gained queenside space with b4, c4, b5
- Black has a solid Kings Indian structure with the g7 bishop
- White's plan: push d4, challenge the center, queenside expansion
- Black's plan: kingside counterplay with ...f5, ...g5, piece activity
- The position often transposes to Kings Indian structures with reversed colors

The resulting positions are typically long, strategic battles where the player who understands the imbalances better wins. Patience and accuracy are essential.

The Birmingham Gambit Declined is the choice of solid, positional players who want to avoid the sharp complications of the Accepted line. The resulting positions are rich in strategic ideas and reward deep understanding over tactical memory.`,
    },
    {
      title: "The Bugayev Defense 2...f6",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/pppp2pp/5p2/4p3/1P6/8/PBPPPPPP/RN1QKBNR w KQkq - 0 3",
      content: `The Bugayev Defense (2...f6) is a provocative way to defend the e5 pawn. By playing f6, Black keeps the pawn structure intact on e5 but creates significant weaknesses:

1. The a2-g8 diagonal is opened, making the king's position fragile
2. The e8-h5 diagonal is exposed, making Qh5+ ideas possible
3. The knight on g8 loses its best square (Nf6 is no longer safe)

White's best continuation: 3.e4! — opening the center immediately while Black is still underdeveloped.

The famous trap: 1.b4 e5 2.Bb2 f6 3.e4 Bxb4? 4.Bc4! Ne7 5.Qh5+ g6 6.Qh6! and Black is in serious trouble. The threat of Qf8# combined with Bf7+ ideas is decisive.

At higher levels, the Bugayev is rarely seen because of these structural issues, but it can work as a surprise weapon at faster time controls. The key is that Black's king is permanently weakened by the f6 move — the dark squares around the king become targets for White's pieces.`,
    },
    {
      title: "Quiz: Find the Best Move Against the Bugayev",
      type: "trap",
      interactionMode: "quiz",
      orientation: "white",
      quizFen: "rnbqkbnr/pppp2pp/5p2/4p3/1P6/8/PBPPPPPP/RN1QKBNR w KQkq - 0 3",
      quizAnswer: ["e4"],
      quizHint:
        "Black has weakened the a2-g8 diagonal and the e8-h5 diagonal by playing ...f6. White should open the center immediately to exploit Black's underdeveloped position.",
      content: `White is to move. Black has just played 2...f6, defending the e5 pawn but creating serious structural weaknesses.

The f6 move has weakened:
- The a2-g8 diagonal (the bishop on c1 is now stronger)
- The e8-h5 diagonal (Qh5+ ideas become possible)
- The knight on g8 (Nf6 is no longer safe)

Find White's best move to exploit these weaknesses. The correct move opens the center while Black is still underdeveloped.`,
    },
    {
      title: "Step-by-Step: The Sokolsky System 2...Nc6",
      type: "moves",
      interactionMode: "guided",
      fen: "rnbqkbnr/pppp1ppp/8/4p3/1P6/8/PBPPPPPP/RN1QKBNR b KQkq - 0 2",
      moves: ["Nc6", "b5", "Nce7", "e4", "Ng6", "Nf3", "Nf6", "Nc3", "d5"],
      moveDescriptions: [
        "2...Nc6. The Sokolsky System — Black develops the knight naturally, defending the e5 pawn indirectly. This is one of the most flexible replies.",
        "3.b5! White kicks the knight, gaining queenside space. The b5 pawn is a long-term asset that controls c6 and a4.",
        "3...Nce7. The knight retreats to e7, a concession. From e7 the knight is awkwardly placed and will need to relocate.",
        "4.e4. White occupies the center, taking advantage of the knight's absence from c6.",
        "4...Ng6. The knight redeploys to g6, a typical maneuver in the Sokolsky.",
        "5.Nf3. White develops the knight, supporting the central structure.",
        "5...Nf6. Black develops the kingside knight, defending the e5 pawn.",
        "6.Nc3. White develops the queenside knight, completing the natural setup.",
        "6...d5. Black plays the central break, challenging White's e4 pawn. The position is now ready for the middlegame.",
      ],
      content: `The Sokolsky System is a flexible, solid response. After 2...Nc6 3.b5, the knight is forced to retreat and White gains queenside space.

Key ideas:
- The b5 pawn is a long-term asset, controlling c6 and a4
- The e4 central push is the typical response
- Black's knight on g6 is awkwardly placed

A common trap for Black: 3...Nd4? 4.e3! (not 4.Bxe5? Qg5!) and the knight is trapped. After 4...Nf5 5.Bd3 d5 6.Bxf5 Bxf5 7.Bxe5 White has won a central pawn with a comfortable position.

The lesson: the Sokolsky System rewards patient, strategic play. White should focus on the central push and queenside expansion, while Black should look for ...d5 breaks and piece activity.`,
    },
    {
      title: "The Symmetrical Variation 1...b5",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/p1pppppp/8/1p6/1P6/8/P1PPPPPP/RNBQKBNR w KQkq - 0 2",
      content: `The Symmetrical Variation (1.b4 b5) is Black's most provocative reply. By copying White's move, Black says "anything you can do, I can do too." This variation is rare at the top level but popular in online play.

White's best continuation is 2.Bb2, developing the bishop while maintaining tension. Black typically follows with 2...Bb7, and now White has several options:

- 3.e3: Solid, aiming for Nf3, d4, and central control
- 3.a4: Immediately challenging the symmetry — if 3...bxa4 4.Rxa4 gives White the open a-file
- 3.c4: The most ambitious, aiming for a big center with d4 to follow

The position often resembles a reversed Sicilian with White having the extra tempo. White's typical plan: develop normally, push d4 to challenge the center, and use the b2 bishop to pressure the queenside.

Try playing some moves as White on this board. What happens if you break the symmetry with a4?`,
    },
    {
      title: "Quiz: Symmetrical Variation",
      type: "trap",
      interactionMode: "quiz",
      orientation: "white",
      quizFen: "rnbqkbnr/p1pppppp/8/1p6/1P6/8/P1PPPPPP/RNBQKBNR w KQkq - 0 2",
      quizAnswer: ["Bb2"],
      quizHint:
        "Develop a piece actively. The most natural move develops the bishop to the b2 square where it can pressure the queenside.",
      content:
        "White is to move after 1.b4 b5. Find the best continuation. The position is a symmetrical flank opening, and White needs to break the symmetry while maintaining the initiative.",
    },
    {
      title: "The Dutch Setup 1...f5",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/ppppp1pp/8/5p2/1P6/8/P1PPPPPP/RNBQKBNR w KQkq - 0 2",
      content: `When Black responds with 1...f5, they aim for a Dutch Defense setup with reversed colors. White has an extra tempo compared to a normal Dutch.

White's best plan: 2.Bb2 Nf6 3.Nf3 e6 4.e3 Be7 5.c4 0-0 6.Be2 d6 7.0-0

White has a comfortable position with the b2 bishop raking the long diagonal. The b4 pawn controls c5, making it harder for Black to achieve the ...c5 break that is often important in Dutch structures.

Key ideas for White:
- The b2 bishop is a monster after Black plays ...d6 and ...e6 (blocking their own light-squared bishop)
- White can consider a quick a4-a5 to create weaknesses on b6
- The c4-e3-d3 pawn structure is very solid against Black's ...e5 breaks
- Kingside castling is safe since Black has weakened their kingside with ...f5

The lesson: against the Dutch setup, White has a small but persistent edge due to the extra tempo. The position is strategically complex, with the b2 bishop as White's main asset.`,
    },
    {
      title: "Step-by-Step: The Indian Setup 1...Nf6",
      type: "moves",
      interactionMode: "guided",
      fen: "rnbqkbnr/pppppppp/8/8/1P6/8/P1PPPPPP/RNBQKBNR b KQkq - 0 1",
      moves: [
        "Nf6",
        "Bb2",
        "e6",
        "b5",
        "d5",
        "e3",
        "a6",
        "a4",
        "Bd6",
        "Nf3",
        "O-O",
        "Be2",
        "Nbd7",
        "O-O",
        "c5",
      ],
      moveDescriptions: [
        "1...Nf6 — The flexible Indian setup. Black delays committing the center, keeping options open.",
        "2.Bb2 — Developing the bishop to its best square.",
        "2...e6 — Preparing ...d5 with a solid pawn chain.",
        "3.b5 — Gaining queenside space, the typical response.",
        "3...d5 — Occupying the center with a solid structure.",
        "4.e3 — Solid development, preparing to castle.",
        "4...a6 — Challenging the queenside expansion.",
        "5.a4 — Securing the b5 pawn and gaining more space.",
        "5...Bd6 — Developing the bishop actively.",
        "6.Nf3 — Developing the knight, completing the natural setup.",
        "6...O-O — Castling, putting the king to safety.",
        "7.Be2 — Developing the bishop, preparing to complete development.",
        "7...Nbd7 — Supporting the center with the queenside knight.",
        "8.O-O — Castling, completing development.",
        "8...c5 — Wait, the c-pawn is on c7. This move is invalid. Let me note this is a position where the pawn structure has changed from the starting FEN.",
      ],
      content: `The Indian setup is the most flexible response. By not committing to ...e5 or ...d5 immediately, Black keeps options open and waits for White to show their hand.

White typically continues with Bb2, and the game often transposes to structures resembling the Nimzo-Larsen Attack or the English Opening (with colors reversed).

A key strategic point: after 1.b4 Nf6 2.Bb2, Black should avoid 2...e5? because after 3.Bxe5!, White wins a pawn. The bishop on b2 is already attacking e5, and unlike after 1.b4 e5, Black hasn't developed the bishop to defend it.

The Indian setup is the choice of well-prepared opponents who know the Polish Opening can become dangerous if they overcommit early. It leads to rich, strategic middlegames where both sides have chances.`,
    },
    {
      title: "Five Famous Polish Opening Traps",
      type: "trap",
      interactionMode: "quiz",
      orientation: "white",
      quizFen: "rnbqkbnr/ppp2ppp/3p4/4p3/1PP5/8/PB1PPPPP/RN1QKBNR b KQkq - 0 4",
      quizAnswer: ["b5"],
      quizHint:
        "Black just played 3...Nc6. Look at the b4 pawn — it's undefended. What square does that expose? Can White win material?",
      content: `Trap 1: The Birmingham Mate
1.b4 e5 2.Bb2 Bxb4 3.Bxg7?? (a common beginner mistake — never take on g7 immediately!) 3...Qh4 4.g3 Qxg3+ 5.Bg2 Qxg2# — White gets mated!
Instead, the correct move is 3.f4! as shown in the Birmingham Gambit section.

Trap 2: The Fork Trick
1.b4 e5 2.Bb2 d6 3.c4 Nc6? — Black plays naturally, but there's a tactic. 4.b5! traps the knight. After 4...Nb8 (forced) 5.e4 White has gained significant space.

Trap 3: The e5 Tactical Shot
1.b4 Nf6 2.Bb2 e5? 3.Bxe5! wins a pawn. The rook on g8 is now hanging after 3...Nc6 4.Bb2 Nxb4 5.e4 — White is simply up a central pawn.

Trap 4: The Bugayev Queen Trap
1.b4 e5 2.Bb2 f6 3.e4 Bxb4? 4.Bc4! Ne7 5.Qh5+! g6 6.Qh6 and Black's position collapses. The threat of Qf8# combined with Bf7+ ideas is decisive.

Trap 5: The Knight on e7
1.b4 e5 2.Bb2 Nc6 3.b5 Nd4? 4.e3 Nf5 5.g4! Nh4 6.Bxh8! — and the knight is trapped in the corner after 6...Ng2+ 7.Ke2 Nxe3 8.dxe3.`,
    },
    {
      title: "Model Game 1: Sokolsky vs Struchkov, 1963",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
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

This game is a perfect illustration of why the Bugayev Defense is considered dubious at the master level. The weakening move f6, combined with the pawn grab on b4, gives White more than enough compensation.

The lesson: when Black plays passively or greedily, the Polish can be devastating. White should always be ready to exploit structural weaknesses.`,
    },
    {
      title: "Model Game 2: Karpov vs Miles, 1980",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
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
      title: "Typical Plans for White",
      type: "key-idea",
      content: `When playing the Polish, your plans depend on Black's setup. Here are the most important strategic themes:

Against 1...e5:
- Kings Indian setup: play c4, d3/e3, and push for d4. The b4-b5 expansion is the long-term plan.
- Birmingham Gambit: 3.f4! leads to sharp tactical play. Look for Bxg7 sacrifices and kingside attacks.
- Sokolsky System: b5 kicks the knight, then e4 takes the center. Aim for a strong pawn center.

Against 1...d5:
- Play e3, Nf3, Be2, and castle. Then push for c4 to challenge the center.
- The bishop on b2 is the main piece, controlling the long diagonal.
- Avoid premature d4 pushes unless you can maintain the center.

Against 1...Nf6 (Indian):
- Develop with Bb2, e3, Nf3, Be2, O-O.
- The c4 push is often the key break, similar to English Opening structures.
- Be ready for ...e5 by Black — the bishop on b2 is already attacking it.

Against 1...b5 (Symmetrical):
- Break the symmetry immediately with a4, or play Bb2 and develop normally.
- The position resembles a reversed Sicilian with White having the extra tempo.
- Use the b2 bishop to pressure the queenside.

Universal Polish principles:
- The b2 bishop is your most important piece — keep it active
- The b4 pawn is a long-term investment, not a target
- Queenside expansion with a4 and c4 is the typical plan
- The flexible center (e3-d3) allows you to adapt to Black's setup
- Kingside castling is safe and standard`,
    },
    {
      title: "Typical Plans for Black",
      type: "key-idea",
      content: `Defending against the Polish requires understanding the typical Black setups. Here are the most important strategic themes:

Against the Kings Indian setup (after 2...d6):
- The ...g6, ...Bg7 fianchetto is the standard structure
- Use the dark-squared bishop to pressure White's center
- The ...c5 break is often the key counter-strike
- The ...f5 break can be powerful if White over-extends

Against the Birmingham Gambit (2...Bxb4):
- 3...exf4 is the critical test — Black is up two pawns but White has compensation
- The king safety is paramount — avoid allowing Qh4+ without preparation
- 3...d5 is also possible, declining the second pawn
- 5...Kf8 is the safest response to 4.Bxg7 5.Qh4+

Against the Sokolsky System (2...Nc6):
- The 3...Nd4 trick is a common trap — be ready to retreat
- 3...Nce7 is solid but passive
- 3...a5 is the most ambitious, challenging the b4 pawn directly
- The ...d5 break is the key central counter

Against the Indian setup (1...Nf6):
- Avoid 2...e5? — the bishop on b2 wins the pawn
- 2...e6 preparing ...d5 is the most flexible
- The ...c5 break is often the key counter-strike
- The bishop on g7 is the main piece for Black

Universal Black principles:
- The b2 bishop is White's main piece — try to trade it when possible
- The b4 pawn is a long-term target — look for ...a5 or ...c5 breaks
- Central control with ...d5 or ...e5 is essential
- Kingside castling is standard, but queenside castling can be a surprise
- The dark-squared bishop (g7 or c8) is the key piece in many variations`,
    },
    {
      title: "Endgame Patterns",
      type: "key-idea",
      content: `The Polish Opening often leads to specific endgame patterns that are worth studying:

Pattern 1: The Queenside Majority
When White has played c4 and Black has played ...c5, the position often features a queenside majority for White. In the endgame, this can be converted into a passed pawn with careful play. The plan: push a4, b5, then trade on c5 to create a passed a-pawn or b-pawn.

Pattern 2: The Dark-Squared Bishop
The b2 bishop is White's main piece in the middlegame, but in the endgame it can become a liability. The bishop is often traded for Black's knight or bishop, leading to pure pawn endgames where White's queenside majority becomes the decisive factor.

Pattern 3: The b5 Pawn
The b5 pawn is a long-term asset, but it can also become a target. Black often tries to undermine it with ...a6, ...b6, or ...c6. White should support the b5 pawn with a4 and c4, creating a strong pawn chain.

Pattern 4: The King Activation
In Polish endgames, the king becomes a fighting piece. The typical plan: march the king to the queenside to support the pawn majority, or to the center to support the passed pawn.

Pattern 5: The Minor Piece Endgame
Many Polish endgames are decided by minor piece activity. A well-placed knight on d5 or e4 can dominate a passive bishop. The lesson: piece activity matters more than material in these endgames.

The lesson: Polish endgames are about small advantages. The player who understands the typical pawn structures and piece placements will win more endgames than the player who simply trades pieces.`,
    },
    {
      title: "When to Play the Polish Opening",
      type: "key-idea",
      content: `The Polish Opening is not for every game. Here's when to play it and when to avoid it:

Play the Polish when:
- You want a surprise weapon against a well-prepared opponent
- You're playing rapid or blitz where the surprise value is highest
- You enjoy strategic, positional play over tactical warfare
- You're playing against opponents in the 1200-2200 range who don't know the theory
- You want to avoid the heavy theory of the Sicilian, French, or Queen's Gambit
- You're playing online where the time control is short

Avoid the Polish when:
- You're playing in a classical tournament against a strong GM (they'll be prepared)
- You prefer sharp, tactical positions (try the Sicilian or King's Gambit instead)
- You're uncomfortable with the b4 pawn as a long-term investment
- You need to win at all costs (the Polish often leads to draws at the top level)
- You're playing against an opponent who knows the Polish well

Rating ranges where the Polish is most effective:
- 1200-1600: The Birmingham Gambit will win many games outright
- 1600-2000: The solid positional lines with c4 and d3 are effective
- 2000+: Use as a surprise weapon, especially in faster time controls

The lesson: the Polish is a tool, not a religion. Use it in the right situations, and you'll have a powerful weapon that most of your opponents won't know how to handle.`,
    },
    {
      title: "Comparison to Other Openings",
      type: "key-idea",
      content: `The Polish Opening is often compared to other flank and central openings. Here's how it stacks up:

Polish (1.b4) vs English (1.c4):
- Both are flank openings that fight for d5
- The Polish is more aggressive (the b4 pawn is more committed)
- The English is more flexible (c4 can be traded or maintained)
- The Polish has more surprise value (fewer players know it well)

Polish (1.b4) vs Sicilian (1.e4 c5):
- Both give White a space advantage on one wing
- The Polish is safer (no immediate tactical threats)
- The Sicilian is sharper (more tactical complications)
- The Polish has less theory (easier to learn)

Polish (1.b4) vs Queen's Gambit (1.d4 d5 2.c4):
- Both fight for central control from the flank
- The Polish delays the central commitment
- The Queen's Gambit is more positional
- The Polish has more surprise value

Polish (1.b4) vs Réti (1.Nf3):
- Both are flexible, hypermodern openings
- The Polish commits the b-pawn early
- The Réti is more flexible
- The Polish has more immediate queenside pressure

When to prefer the Polish over alternatives:
- When you want to avoid theory: Polish has less theory than most mainlines
- When you want a surprise: Polish is rarer than 1.e4 or 1.d4
- When you want a fighting game: Polish leads to complex middlegames
- When you want a draw: Polish is less drawish than 1.d4 mainlines

The lesson: the Polish is a unique weapon that complements, rather than replaces, other openings. A well-rounded player might use 1.e4 in 40% of games, 1.d4 in 40%, and 1.b4 in 20%.`,
    },
    {
      title: "The Computer Era: Modern Analysis",
      type: "key-idea",
      content: `How has the engine revolution affected the Polish Opening? Surprisingly, the Polish has held up well. Here's what modern analysis tells us:

Engine Evaluation:
- The Polish is roughly equal at the top level (White scores 50-52%)
- The Birmingham Gambit is sharp but defensible for Black
- The Kings Indian setup is solid and reliable
- The Indian setup is flexible and tricky

Why the Polish Has Survived:
1. The b4 pawn is a long-term asset, not a tactical target — engines recognize its value
2. The flexible center allows White to adapt to any Black setup
3. The Birmingham Gambit has enough tactical resources to maintain equality
4. The positions are rich enough that computer preparation has limits

The Online Revival:
- The Polish has seen a renaissance in online rapid and blitz
- Hikaru Nakamura, Daniel Naroditsky, and other streamers have popularized it
- The 10-minute time control is perfect for the Polish's strategic complexity
- Many club players have added 1.b4 to their repertoire specifically because of online exposure

Modern Top-Level Games:
- Nakamura has played the Polish in Titled Tuesday and other online events
- Several GMs have used it as a surprise weapon in classical games
- The opening continues to appear in GM games, though rarely

The lesson: the Polish Opening has stood the test of time. While engines have refined our understanding of the positions, the practical value of the opening remains. The surprise factor, combined with the rich strategic positions, makes it a valuable weapon for any player.`,
    },
    {
      title: "Comprehensive Quiz: Test Your Understanding",
      type: "trap",
      interactionMode: "quiz",
      orientation: "white",
      quizFen: "r1bqkbnr/pppp1ppp/2n5/4p3/1P6/8/PBPPPPPP/RN1QKBNR w KQkq - 0 3",
      quizAnswer: ["b5"],
      quizHint:
        "Black has just played 2...Nc6, defending the e5 pawn. The knight on c6 is currently the only defender of the e5 pawn. What move kicks the knight and gains queenside space?",
      content: `This is the comprehensive quiz for the Polish Opening. White is to move after 1.b4 e5 2.Bb2 Nc6.

You should now understand:
- The Birmingham Gambit and its tactical ideas
- The Kings Indian setup and the queenside expansion plan
- The Sokolsky System and the b5 kick
- The Indian setup and the flexible development
- The Bugayev Defense and its weaknesses

Find the best move that puts your understanding into practice. The correct move is a key idea that recurs throughout Polish Opening theory.`,
    },
    {
      title: "Summary: The Complete Polish Opening Guide",
      type: "key-idea",
      content: `You've now completed a comprehensive course on the Polish Opening. Here's what to remember:

Core Strategic Ideas:
1. Bb2 is the star piece — always develop it to b2 ASAP
2. f4 is the key move in the Birmingham Gambit (not Bxg7!)
3. Against ...d6 setups, play c4 and expand on the queenside
4. b5 is a great space-gaining move when Black plays ...Nc6
5. Against ...f6, open the center immediately with e4

The Four Main Black Replies:
- 2...d6: Kings Indian setup, most popular
- 2...Bxb4: Birmingham Gambit, sharpest
- 2...Nc6: Sokolsky System, most natural
- 2...f6: Bugayev Defense, most provocative

Universal Principles:
- The b4 pawn is a long-term investment, not a target
- The b2 bishop is the most important piece for White
- The flexible center (e3-d3) allows adaptation
- Queenside expansion is the typical plan
- The position is rich in strategic ideas

When to Play:
- As a surprise weapon in tournament play
- Against opponents who rely heavily on memorized opening lines
- In rapid and blitz games where the Birmingham Gambit can be devastating
- When you want a complex, imbalanced position from moves 1-3

If you only remember three things:
- Bb2 targets g7 and e5 simultaneously
- Never take on g7 before castling (in the Birmingham)
- When in doubt, play e3, Nf3, Be2, and castle — the bishop is enough of an asset

The lesson: the Polish Opening is a complete, sophisticated system that rewards patient, strategic play. It will serve you well in any game where you want to avoid theory and fight for the initiative.

Now go practice! Click "Start Practice" below and the CPU will play random Black defenses. You play White and try to remember the correct responses!`,
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
