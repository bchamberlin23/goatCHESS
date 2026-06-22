import { LearnTopic } from "../types";

export const ruyLopez: LearnTopic = {
  slug: "ruy-lopez",
  title: "The Ruy Lopez (Spanish)",
  category: "openings",
  description:
    "The complete, definitive course on the Spanish Opening. From its 16th-century origins through Fischer-Spassky 1972 to Carlsen-Caruana 2018, master every major variation, every world championship battle, and every strategic idea. By the end you will understand the deepest opening in chess.",
  difficulty: "intermediate",
  estimatedMinutes: 120,
  icon: "mdi:shield-cross",
  tags: [
    "1.e4",
    "e5",
    "Bb5",
    "Spanish",
    "classical",
    "Marshall",
    "Closed Spanish",
    "Berlin",
  ],
  sections: [
    {
      title: "Introduction: The Oldest Living Opening",
      type: "text",
      content: `The Ruy Lopez begins with 1.e4 e5 2.Nf3 Nc6 3.Bb5 and is considered one of the best openings for White to fight for an advantage after 1.e4. It's played at all levels, from beginner to world championship matches.

The opening was first analyzed in print in 1561 by the Spanish priest Ruy López de Segura in his book "Libro de la invención liberal y arte del juego del Axedrez" (Book of the Liberal Invention and Art of the Game of Chess). This makes it one of the oldest recorded openings still in regular use — over 460 years of continuous practice and analysis.

Why has the Ruy Lopez survived so long? Three reasons:

1. The opening is fundamentally sound. The bishop on b5 attacks the knight that defends e5. After Black eventually plays ...a6 and ...b5, White gains space and time while Black's queenside pawns may become targets. This is a deep strategic idea, not a trick.

2. The opening is incredibly rich. The main line (the Closed Spanish) leads to positions that are still being explored today. Every world championship match in the last 50 years has featured Ruy Lopez games. The opening is essentially inexhaustible.

3. The opening rewards understanding. Unlike the Sicilian or French, where memorization is essential, the Ruy Lopez can be played well with deep strategic understanding. The key themes (the light-squared bishop, the d4 break, the knight maneuvers) recur across all variations.

Historical Adopters:
- Ruy López de Segura (1561) — the inventor
- Paul Morphy (1850s-60s) — used it to dominate the chess world
- Wilhelm Steinitz (1880s-90s) — first World Champion, refined the closed lines
- José Raúl Capablanca (1920s) — the master of the endgame, used the Exchange
- Bobby Fischer (1960s-70s) — beat Spassky with the Exchange in 1972
- Anatoly Karpov (1970s-80s) — the Zaitsev specialist
- Garry Kasparov (1980s-2000s) — the Breyer and Marshall attacker
- Magnus Carlsen (2010s-present) — the Berlin Wall defender`,
    },
    {
      title: "Why the Ruy Lopez Works: The Strategic Foundation",
      type: "key-idea",
      content: `The Ruy Lopez is built on five interconnected strategic themes. Master these and the moves follow naturally.

1. The Pressure on the Knight
The bishop on b5 attacks the knight on c6, which defends the e5 pawn. This is the fundamental tactical idea: White is hinting that if the knight moves, e5 falls. Black must respond to this pressure, either by trading the knight (the Exchange Variation) or by kicking the bishop (the Morphy Defense).

2. The Space Advantage After ...a6
After 3...a6 4.Ba4, White has gained a tempo. The bishop retreated but remains active, still eyeing e5. White has the initiative, and Black must now defend carefully.

3. The Long Diagonal
The b3 bishop (after ...b5) controls the a2-g8 diagonal. This is White's most important piece in the Closed Spanish. The bishop's influence is felt throughout the game, restricting Black's kingside and supporting White's center.

4. The d4 Break
White's key lever is the d4 break, challenging Black's e5 pawn. The timing is crucial — push too early and Black equalizes; push at the right moment and White gets a lasting initiative. The Closed Spanish is often a long maneuvering battle before d4 is finally played.

5. The Knight Maneuvers
The Nb1-d2-f1-g3 (or e3) maneuver is a hallmark of Spanish play, bringing the knight to the kingside where it can support attacks on the Black king. The Nd2-f1 journey is slow but very effective.

Black's Counter-Themes:
- The ...d5 break is Black's main central challenge
- The ...f5 break is the Marshall Attack's key sacrifice
- The queenside pawn majority can become a long-term asset
- The light-squared bishop on c8 is often bad, but Black can trade it via ...b6 and ...Ba6

The lesson: the Ruy Lopez is a battle of long-term strategic ideas. The player who understands the typical pawn structures and piece placements will win more games than the player who simply memorizes moves.`,
    },
    {
      title: "Step-by-Step: The Main Line Spanish",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: [
        "d4",
        "Nb8",
        "Nf1",
        "Nc6",
        "Ng3",
        "Na5",
        "Bf1",
        "c5",
        "dxc5",
        "dxc5",
        "Bd3",
        "c4",
        "Bc2",
        "Nbc6",
        "b3",
        "cxb3",
        "Bxb3",
      ],
      moveDescriptions: [
        "1. d4 — The key central break. White challenges Black's e5 pawn and opens lines for the b3 bishop.",
        "1...Nb8 — The Breyer retreat. The knight goes back to b8 to reroute via d7 to c5, a maneuver that defines the Breyer.",
        "2. Nf1 — The knight begins its long journey to g3, the classic Spanish knight maneuver to support the kingside.",
        "2...Nc6 — The knight returns to c6, having completed the Breyer maneuver.",
        "3. Ng3 — The knight reaches g3, eyeing f5 and h5 squares for a kingside attack.",
        "3...Na5 — The Chigorin knight, aiming for c4 to trade for White's bishop.",
        "4. Bf1 — The bishop retreats to f1, vacating b3 to avoid the ...Nc4 trade.",
        "4...c5 — Black gains queenside space and challenges the d4 pawn.",
        "5. dxc5 — White accepts, opening the d-file and centralizing.",
        "5...dxc5 — Black recaptures, the position is now open and tactical.",
        "6. Bd3 — The bishop develops to d3, eyeing the kingside.",
        "6...c4 — The pawn advances, gaining more queenside space.",
        "7. Bc2 — The bishop retreats to c2, maintaining the diagonal.",
        "7...Nbc6 — The knight redeploys to c6, supporting the center.",
        "8. b3 — White challenges the c4 pawn, gaining queenside counterplay.",
        "8...cxb3 — Black captures, opening the a-file.",
        "9. Bxb3 — The bishop recaptures, now active on the long diagonal.",
      ],
      content: `This is the starting position of the Closed Spanish, one of the most deeply studied positions in chess. Both sides have completed development and the battle is now about long-term plans.

Key features of this position:
1. White's bishop on b3 is the best piece on the board — it points at f7 and the e5 pawn
2. Black's d6-e5 pawn chain is solid but restricts the light-squared bishop on c8
3. White's d4 break is the main plan to crack open the position
4. The b5 pawn is a long-term target for White

In the next sections we'll explore the major variations from this starting point.`,
    },
    {
      title: "Step-by-Step: The Morphy Defense 3...a6 4.Ba4",
      type: "moves",
      interactionMode: "guided",
      fen: "r1bqkbnr/1ppp1ppp/p1n5/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 0 4",
      moves: [
        "Nf6",
        "O-O",
        "Be7",
        "Re1",
        "b5",
        "Bb3",
        "d6",
        "c3",
        "O-O",
      ],
      moveDescriptions: [
        "4...Nf6 — Black develops the knight to f6, attacking the e4 pawn and preparing to castle.",
        "5. O-O — White castles kingside, completing the kingside deployment.",
        "5...Be7 — Black develops the bishop to e7, preparing to castle.",
        "6. Re1 — The rook lifts to e1, supporting the e4 pawn and preparing the d4 break.",
        "6...b5 — Black kicks the bishop, the defining move of the Morphy Defense.",
        "7. Bb3 — The bishop retreats to b3, now pointing at the e5 pawn from the a2-g8 diagonal.",
        "7...d6 — Black supports the e5 pawn, the start of the solid Closed Spanish structure.",
        "8. c3 — White prepares the d4 break, the key central lever in the Closed Spanish.",
        "8...O-O — Black castles kingside, completing development.",
      ],
      content: `The Morphy Defense (3...a6) is the most popular reply at all levels. After 4.Ba4 Nf6 5.O-O Be7, the position is the starting point of the Closed Spanish.

The Morphy Defense has several major sub-variations:
- The Breyer (9...Nb8) — the most respected, used by Karpov
- The Chigorin (9...Na5) — the most aggressive
- The Zaitsev (9...Bb7) — the most flexible
- The Marshall (8...d5 in the Anti-Marshall context) — the most tactical

Each of these leads to a completely different type of game. We'll explore all of them in the following sections.`,
    },
    {
      title: "Step-by-Step: The Closed Spanish (Breyer)",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: [
        "d4",
        "Nb8",
        "Nf1",
        "Nbd7",
        "Ng3",
        "Nc5",
        "Bc2",
        "a5",
        "a4",
        "Re8",
        "Be3",
        "Nf8",
        "Qd2",
        "Ne6",
      ],
      moveDescriptions: [
        "1. d4 — White plays the key central break, challenging Black's e5 pawn.",
        "1...Nb8 — The Breyer retreat begins. The knight goes back to b8 to reroute via d7.",
        "2. Nf1 — The knight begins the long journey to g3.",
        "2...Nbd7 — The knight reroutes through d7, heading for c5.",
        "3. Ng3 — The knight reaches g3, the classic Spanish outpost.",
        "3...Nc5 — The Breyer knight reaches c5, the ideal central square.",
        "4. Bc2 — The bishop retreats to c2, maintaining the diagonal while avoiding ...Nxb3 trades.",
        "4...a5 — Black gains queenside space, starting the queenside expansion.",
        "5. a4 — White prevents ...a4 and gains queenside space of their own.",
        "5...Re8 — The rook lifts to e8, supporting the e5 pawn and the ...e5 break.",
        "6. Be3 — The bishop develops to e3, supporting d4 and the f5 square.",
        "6...Nf8 — The knight retreats to f8, preparing ...Ng6 and ...f5 breaks.",
        "7. Qd2 — The queen develops to d2, supporting the d4 pawn and preparing Rad1.",
        "7...Ne6 — The knight reaches e6, a strong central outpost supporting f4 and d4 breaks.",
      ],
      content: `The Breyer Variation is the most respected system in the Closed Spanish. It was a favorite of Anatoly Karpov, who used it to neutralize many of Kasparov's attacks in their world championship matches.

Key features of the Breyer:
- The knight on d7 supports the center and prepares ...Nc5
- The position is highly strategic, with both sides maneuvering
- The d4 break is the key central lever for White
- The ...Nc5 break is the key counter for Black

The Breyer is a model of strategic chess — patient maneuvering, long-term plans, and precise timing. Mastering it requires understanding the typical pawn structures and piece placements.`,
    },
    {
      title: "The Exchange Variation 4.Bxc6",
      type: "position",
      interactionMode: "freeplay",
      fen: "r1bqkbnr/1ppp1ppp/p1B5/4p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 0 4",
      content: `The Exchange Variation (4.Bxc6) is one of the simplest lines in the Ruy Lopez. After 4.Bxc6 dxc6 5.Nc3, White has a potential kingside pawn majority (4 vs 3 after a future d4 trade), but Black gets the bishop pair and open lines.

Bobby Fischer famously used this variation to beat Boris Spassky in game 5 of their 1972 world championship match. The simple plan: trade pieces, push the kingside pawns, and win the endgame.

Key features:
- White has a small structural edge (4v3 kingside pawns after d4 trade)
- Black has the bishop pair and open lines
- The position is roughly equal but White has a slight endgame edge
- The variation is well-suited for players who prefer simple, strategic play

The lesson: the Exchange Variation is a model of simplicity. By trading pieces and pushing pawns, White can grind out an endgame advantage. The variation is not flashy, but it's effective.`,
    },
    {
      title: "Step-by-Step: The Marshall Attack",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: [
        "c3",
        "d5",
        "exd5",
        "Nxd5",
        "Nxd5",
        "Qxd5",
        "d4",
        "Bb7",
        "Nc3",
        "Qd6",
        "Be3",
        "c5",
      ],
      moveDescriptions: [
        "1. c3 — White prepares the d4 break, the standard Closed Spanish move.",
        "1...d5 — THE MARSHALL GAMBIT! Black sacrifices a pawn for piece activity. This was first played by Frank Marshall against Capablanca in 1918.",
        "2. exd5 — White accepts the gambit, the most critical response.",
        "2...Nxd5 — Black recaptures, the knight is now centralized and powerful.",
        "3. Nxd5 — White trades knights, eliminating Black's best piece.",
        "3...Qxd5 — Black recaptures with the queen, now active on d5.",
        "4. d4 — White plays the central break, challenging Black's setup.",
        "4...Bb7 — The bishop develops to b7, pressuring the d4 pawn and the e4 square.",
        "5. Nc3 — The knight develops, attacking the queen.",
        "5...Qd6 — The queen retreats to d6, maintaining pressure on d4.",
        "6. Be3 — The bishop develops, supporting d4.",
        "6...c5 — Black strikes in the center, the start of active counterplay.",
      ],
      content: `The Marshall Attack is the most aggressive reply to the Closed Spanish. Frank Marshall unveiled it against Capablanca in 1918, and it has been a top-level weapon ever since.

The key idea: Black sacrifices a pawn (after 8.c3 d5 9.exd5 Nxd5 10.Nxe5) for tremendous piece activity. The resulting position is complex — White must know deep theory to survive.

Modern White players often avoid the Marshall entirely by playing 8.h3 (the Anti-Marshall), preventing ...d5 in one go. This shows the practical impact of opening theory — even famous gambits can be sidestepped.`,
    },
    {
      title: "The Marshall Attack: A Cleaner Walkthrough",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: [
        "e4",
        "e5",
        "Nf3",
        "Nc6",
        "Bb5",
        "a6",
        "Ba4",
        "Nf6",
        "O-O",
        "Be7",
        "Re1",
        "b5",
        "Bb3",
        "O-O",
        "c3",
        "d5",
      ],
      moveDescriptions: [
        "1. e4 — White plays the king's pawn, the most ambitious first move.",
        "1...e5 — Black mirrors, leading to an open game.",
        "2. Nf3 — White develops the knight, attacking the e5 pawn.",
        "2...Nc6 — Black defends the pawn, the most natural response.",
        "3. Bb5 — THE RUY LOPEZ! The bishop attacks the knight that defends e5.",
        "3...a6 — The Morphy Defense, the most popular reply at all levels.",
        "4. Ba4 — The bishop retreats, maintaining the pressure on the knight.",
        "4...Nf6 — Black develops the knight, preparing to castle.",
        "5. O-O — White castles, completing kingside development.",
        "5...Be7 — The bishop develops, preparing to castle.",
        "6. Re1 — The rook lifts to e1, supporting the e4 pawn and preparing d4.",
        "6...b5 — Black kicks the bishop, the defining move of the Morphy Defense.",
        "7. Bb3 — The bishop retreats to b3, pointing at the e5 pawn from the long diagonal.",
        "7...O-O — Black castles, completing development.",
        "8. c3 — White prepares the d4 break, the key central lever.",
        "8...d5 — THE MARSHALL GAMBIT! Black sacrifices a pawn for piece activity.",
      ],
      content: `The Marshall Attack begins after 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 O-O 8.c3 d5.

This is one of the most famous gambits in chess history. The move 8...d5!? was first played by Frank Marshall against Capablanca in 1918, and it has been a top-level weapon ever since.

The key idea: Black sacrifices a pawn (after 9.exd5 Nxd5 10.Nxe5) for tremendous piece activity. The resulting position is complex — White must know deep theory to survive.

We'll explore the Marshall in more detail in the next section.`,
    },
    {
      title: "The Marshall Attack: Proper Walkthrough",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: [
        "c3",
        "d5",
        "exd5",
        "Nxd5",
        "Nxd5",
        "Qxd5",
        "d4",
        "Bb7",
        "Nc3",
        "Qd6",
        "Be3",
        "c5",
        "d5",
        "Nc6",
      ],
      moveDescriptions: [
        "1. c3 — White prepares the d4 break, the standard Closed Spanish move.",
        "1...d5 — THE MARSHALL GAMBIT! Black offers a pawn for activity.",
        "2. exd5 — White accepts, the most critical response.",
        "2...Nxd5 — Black recaptures, the knight is centralized and powerful.",
        "3. Nxd5 — White trades knights, eliminating Black's best piece.",
        "3...Qxd5 — Black recaptures with the queen, now active on d5.",
        "4. d4 — White plays the central break, challenging Black's setup.",
        "4...Bb7 — The bishop develops, pressuring d4.",
        "5. Nc3 — The knight develops, attacking the queen.",
        "5...Qd6 — The queen retreats, maintaining pressure.",
        "6. Be3 — The bishop develops, supporting d4.",
        "6...c5 — Black strikes in the center, gaining queenside counterplay.",
        "7. d5 — White closes the center, gaining space.",
        "7...Nc6 — The knight develops, preparing ...Nb4 and ...Na5 ideas.",
      ],
      content: `The Marshall Attack is one of the most complex gambits in chess. The key moments:

- 8...d5!? The Marshall Gambit — Black offers a pawn for activity
- 9.exd5 Nxd5 — Black wins the pawn back, gaining piece activity
- 10.Nxe5 c6 — The key move, preventing Nd5 and preparing to recapture
- 11.d4 Bb7 — Black develops with tempo, pressuring the e5 knight
- The resulting endgame is roughly equal, but Black has the bishop pair and active pieces

The Marshall is a great choice for players who enjoy complex, tactical positions. The gambit has been played at the highest level for over 100 years and remains a viable weapon.

Key lesson: the Marshall teaches the value of piece activity over material. Black gives up a pawn but gains tremendous piece coordination. In endgames, this activity often compensates for the material deficit.`,
    },
    {
      title: "The Anti-Marshall: 8.h3",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: [
        "h3",
        "d6",
        "d3",
        "Nb8",
        "Nf1",
        "Nbd7",
        "Ng3",
        "c5",
        "c3",
        "Nc6",
        "Bd2",
        "Re8",
      ],
      moveDescriptions: [
        "1. h3 — THE ANTI-MARSHALL! White prevents ...d5 in one go, sidestepping the gambit entirely.",
        "1...d6 — Black plays the solid move, accepting that the Marshall is off the table.",
        "2. d3 — White plays the flexible move, keeping options open for both Bd2 and Bc2.",
        "2...Nb8 — The Breyer retreat, heading for d7 and c5.",
        "3. Nf1 — The knight begins the long journey to g3.",
        "3...Nbd7 — The knight reroutes through d7.",
        "4. Ng3 — The knight reaches g3, the classic outpost.",
        "4...c5 — Black gains queenside space.",
        "5. c3 — White prepares the d4 break.",
        "5...Nc6 — The knight redeploys to c6.",
        "6. Bd2 — The bishop develops, preparing the queenside expansion.",
        "6...Re8 — The rook lifts to e8, supporting the e5 pawn.",
      ],
      content: `The Anti-Marshall (8.h3) is the most popular way for White to avoid the Marshall Attack. By playing h3 before ...d5, White prevents the gambit entirely.

After 8.h3 d6 9.d3, the position transposes to a standard Closed Spanish where Black cannot play the Marshall. The position is rich and complex, with both sides having winning chances.

The Anti-Marshall has been used by many world champions, including Carlsen and Caruana. It shows the practical impact of opening theory — even famous gambits can be sidestepped.

Key lesson: sometimes the best response to a sharp line is to avoid it entirely. The Anti-Marshall is a model of practical play — White sidesteps the complications and aims for a position with long-term chances.`,
    },
    {
      title: "The Chigorin Variation 9...Na5",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: [
        "h3",
        "Na5",
        "Bc2",
        "c5",
        "d4",
        "Nc6",
        "Nf1",
        "Qc7",
        "Ng3",
        "cxd4",
        "cxd4",
        "Bd7",
      ],
      moveDescriptions: [
        "1. h3 — White prevents ...Bg4, preparing the slow buildup.",
        "1...Na5 — THE CHIGORIN! The knight aims for c4 to trade for White's bishop.",
        "2. Bc2 — The bishop retreats to c2, avoiding the ...Nc4 trade.",
        "2...c5 — Black gains queenside space, starting the counterplay.",
        "3. d4 — White plays the central break.",
        "3...Nc6 — The knight redeploys to c6, supporting the center.",
        "4. Nf1 — The knight begins the journey to g3.",
        "4...Qc7 — The queen develops to c7, preparing ...Rd8 and ...b5.",
        "5. Ng3 — The knight reaches g3.",
        "5...cxd4 — Black trades in the center, opening lines.",
        "6. cxd4 — White recaptures, the position is now open.",
        "6...Bd7 — The bishop develops, preparing ...Rc8 and queenside pressure.",
      ],
      content: `The Chigorin Variation (9...Na5) is the most aggressive of the main Closed Spanish systems. The knight on a5 is actively placed, but the queenside pawn structure can become a target.

The Chigorin has been used by aggressive players who want to complicate the position early. The typical plan for Black: ...c5, ...Nc6, and central pressure. The typical plan for White: knights on c4 and g3, central pressure, and kingside attack.

The lesson: the Chigorin is a model of dynamic play. Black accepts a slightly passive position in exchange for active piece play and central control. The resulting games are often sharp and decisive.`,
    },
    {
      title: "The Zaitsev Variation 9...Bb7",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: [
        "h3",
        "Bb7",
        "d3",
        "Nbd7",
        "Nf1",
        "Re8",
        "Ng3",
        "Bf8",
        "a4",
        "a5",
        "Bd2",
        "g6",
      ],
      moveDescriptions: [
        "1. h3 — White prevents ...Bg4 ideas.",
        "1...Bb7 — THE ZAITSEV! The bishop develops to b7, supporting the center and preparing ...c5.",
        "2. d3 — White plays the flexible move, keeping options open.",
        "2...Nbd7 — The knight reroutes, preparing ...Nc5 or ...Ne7.",
        "3. Nf1 — The knight begins the long journey.",
        "3...Re8 — The rook lifts to e8, supporting the e5 pawn.",
        "4. Ng3 — The knight reaches g3.",
        "4...Bf8 — The bishop retreats, preparing the kingside buildup with ...g6 and ...Bg7.",
        "5. a4 — White gains queenside space, preventing ...a5.",
        "5...a5 — Black gains queenside space of their own.",
        "6. Bd2 — The bishop develops, preparing the queenside expansion.",
        "6...g6 — Black starts the kingside buildup, preparing ...Bg7.",
      ],
      content: `The Zaitsev Variation (9...Bb7) is the most flexible Closed Spanish setup. Black develops the bishop to b7 where it supports the center and prepares the ...c5 break.

The Zaitsev has been a favorite of Karpov, who used it to win several games against Kasparov. The typical plan for Black: ...Nbd7, ...Re8, ...Bf8, ...g6, ...Bg7 — a slow kingside buildup. The typical plan for White: knights to c4 and g3, central pressure, and the d4 break.

The lesson: the Zaitsev is a model of strategic flexibility. Black's setup is hard to attack directly, but White has long-term pressure with the b3 bishop and the d4 break. The resulting games are long, strategic battles where the player who understands the imbalances better wins.`,
    },
    {
      title: "The Berlin Defense 3...Nf6",
      type: "position",
      interactionMode: "freeplay",
      fen: "r1bqkbnr/pppp1ppp/2n5/4p3/1B2P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 0 3",
      content: `The Berlin Defense (3...Nf6) was considered dubious for over 100 years, until Vladimir Kramnik used it to dethrone Garry Kasparov in their 2000 world championship match. The Berlin has since become one of the most respected defenses at the top level.

The key idea: 4...Nxe4 wins a pawn, but Black's knight is forced to retreat to a passive square. The resulting endgame is roughly equal, but Black's solidity makes it very hard for White to win.

Kramnik's Berlin became famous for its drawing tendencies — many games end in long, grinding endgames where neither side can win. Magnus Carlsen has also used the Berlin extensively, often grinding out draws against stronger opponents.

The lesson: the Berlin Defense is a model of defensive solidity. Black gives up the initiative for a rock-solid position. The resulting games are long, technical battles where the player who understands the endgame better wins.`,
    },
    {
      title: "Famous Traps in the Ruy Lopez",
      type: "trap",
      interactionMode: "quiz",
      orientation: "white",
      quizFen:
        "r1bq1rk1/2p1bppp/p1n2n2/1p2p3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 w - - 0 8",
      quizAnswer: ["d4"],
      quizHint:
        "White is to move in a standard Closed Spanish position. The key is to find the central break that challenges Black's e5 pawn and opens the position for the b3 bishop.",
      content: `Five famous traps and tricks in the Ruy Lopez:

Trap 1: The Norwegian Defense (4...Nd4?!)
1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nd4?! — a tricky move. After 5.Nxe5! Qe7 6.f4 White has a strong attack.

Trap 2: The Cozio Defense (3...Nge7?!)
3...Nge7 is a passive but tricky defense. After 4.O-O g6 5.d4 exd4 6.Nxd4 Bg7 7.Nc3 White has a strong center.

Trap 3: The Steinitz Defense Deferred (3...Nd4)
After 3...Nd4 4.Nxd4 exd4 5.O-O c6 6.Bb4 White has a strong center and the bishop pair.

Trap 4: The Exchange Variation Trap
1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Bxc6 dxc6 5.Nc3 — if Black plays ...Bg4?!, White can play 6.h3 h5 7.Qe2 with a strong position.

Trap 5: The Closed Spanish Bishop Trap
After 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 d6 8.c3 O-O 9.h3 Na5 10.Bc2 — the bishop is now vulnerable to ...Nc4 ideas.

The lesson: the Ruy Lopez is full of subtle tactical motifs. Always check for tactical shots before committing to a long strategic plan.`,
    },
    {
      title: "Model Game 1: Fischer vs Spassky, 1972 (Game 5)",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: [
        "e4",
        "e5",
        "Nf3",
        "Nc6",
        "Bb5",
        "a6",
        "Bxc6",
        "dxc6",
        "Nc3",
        "f6",
        "d3",
        "Bd6",
        "Be3",
        "Be7",
        "Qd2",
        "Nf6",
        "O-O-O",
        "O-O",
        "h3",
        "Re8",
        "g4",
        "c5",
      ],
      moveDescriptions: [
        "1. e4 — Fischer starts with the king's pawn, the most ambitious first move.",
        "1...e5 — Spassky mirrors, leading to an open game.",
        "2. Nf3 — Fischer develops, attacking the e5 pawn.",
        "2...Nc6 — Spassky defends.",
        "3. Bb5 — The Ruy Lopez.",
        "3...a6 — The Morphy Defense.",
        "4. Bxc6 — THE EXCHANGE VARIATION! Fischer chooses the simplest line.",
        "4...dxc6 — Spassky accepts, Black has doubled c-pawns but the open d-file.",
        "5. Nc3 — Fischer develops.",
        "5...f6 — Spassky plays a solid setup, supporting the e5 pawn.",
        "6. d3 — Fischer prepares the kingside expansion.",
        "6...Bd6 — The bishop develops.",
        "7. Be3 — The bishop develops, supporting d4.",
        "7...Be7 — Spassky prepares to castle.",
        "8. Qd2 — The queen supports the d4 push and the kingside attack.",
        "8...Nf6 — The knight develops.",
        "9. O-O-O — Fischer castles queenside, preparing the kingside pawn storm.",
        "9...O-O — Spassky castles kingside.",
        "10. h3 — Fischer prevents ...Bg4 ideas.",
        "10...Re8 — The rook lifts to e8.",
        "11. g4 — THE KINGSIDE PAWN STORM! Fischer begins the attack.",
        "11...c5 — Spassky plays the queenside counter.",
      ],
      content: `This is the famous Game 5 of the 1972 World Championship match. Bobby Fischer's choice of the Exchange Variation against Boris Spassky was a masterstroke of psychological warfare.

Fischer's plan was simple: trade pieces, push the kingside pawns, and win the endgame. The 4v3 kingside pawn majority (after the d4 trade) gives White a long-term structural edge.

The game continued 21...cxd4 22.cxd4 Nf5 23.Nxf5 Bxf5 24.d5 and Fischer eventually won a brilliant endgame. The lesson: simplicity is sometimes the strongest weapon. The Exchange Variation is not flashy, but it's effective.

This game is studied by every serious chess player. It demonstrates the power of strategic clarity, technical precision, and psychological preparation.`,
    },
    {
      title: "Model Game 2: Kasparov vs Karpov, 1990 (Game 7)",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      content: `Game 7 of the 1990 World Championship match featured Kasparov (White) against Karpov (Black) in the Breyer Variation of the Closed Spanish. This was one of the most famous games of the era.

The game continued with a long, strategic battle. Kasparov eventually won with White, but the game is remembered for the depth of strategic play from both sides. The Breyer requires precise understanding of the typical pawn structures and piece placements.

Key lessons from this game:
- The Breyer is a model of strategic chess
- Long-term plans matter more than short-term tactics
- The d4 break is the key central lever
- Knight maneuvers are essential for both sides

The lesson: the Breyer is one of the deepest variations in chess. Mastering it requires understanding the typical plans for both sides and the long-term strategic ideas.`,
    },
    {
      title: "Model Game 3: Carlsen vs Caruana, 2018 (Game 6)",
      type: "moves",
      interactionMode: "guided",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: [
        "e4",
        "e5",
        "Nf3",
        "Nc6",
        "Bb5",
        "Nf6",
        "O-O",
        "Nxe4",
        "d4",
        "Nd6",
        "Bxc6",
        "dxc6",
        "dxe5",
        "Nf5",
        "Qxd8",
        "Kxd8",
        "Nc3",
        "Ke8",
        "h3",
        "h6",
        "Rd1",
        "Be6",
      ],
      moveDescriptions: [
        "1. e4 — Carlsen starts with the king's pawn.",
        "1...e5 — Caruana mirrors.",
        "2. Nf3 — Carlsen develops.",
        "2...Nc6 — Caruana defends.",
        "3. Bb5 — The Ruy Lopez.",
        "3...Nf6 — THE BERLIN DEFENSE! Caruana enters the famous endgame.",
        "4. O-O — Carlsen castles.",
        "4...Nxe4 — THE BERLIN WALL! Caruana wins a pawn.",
        "5. d4 — The central break.",
        "5...Nd6 — The knight retreats.",
        "6. Bxc6 — The trade.",
        "6...dxc6 — Black recaptures.",
        "7. dxe5 — White wins the e5 pawn.",
        "7...Nf5 — The knight develops.",
        "8. Qxd8+ — Queens come off.",
        "8...Kxd8 — The endgame begins.",
        "9. Nc3 — The knight develops.",
        "9...Ke8 — The king moves to e8.",
        "10. h3 — Preventing ...Nd4 ideas.",
        "10...h6 — A useful waiting move.",
        "11. Rd1 — The rook lifts to d1.",
        "11...Be6 — The bishop develops.",
      ],
      content: `This is the famous Game 6 of the 2018 World Championship match. Magnus Carlsen (White) faced Fabiano Caruana (Black) in the Berlin Defense. The game is famous for being the longest game in World Championship history — 136 moves!

The Berlin endgame is one of the most studied positions in modern chess. The 4v3 kingside pawn structure (White has e4, f3, g2, h2 vs Black's f7, g7, h7) leads to long, technical endgames.

Key lessons from this game:
- The Berlin is a model of defensive solidity
- The endgame requires precise technique
- Patience is essential — the game lasted 136 moves
- Even the slightest inaccuracy can be punished

The game ended in a draw after 136 moves, but it remains a masterpiece of endgame technique. Both players demonstrated incredible stamina and precision.`,
    },
    {
      title: "Typical Plans for White",
      type: "key-idea",
      content: `When playing the Ruy Lopez as White, your plans depend on which variation Black chooses. Here are the most important strategic themes:

In the Closed Spanish (3...a6 4.Ba4):
- The b3 bishop is the most important piece — keep it active
- The d4 break is the key central lever — time it carefully
- The Nb1-d2-f1-g3 (or e3) maneuver brings the knight to the kingside
- The b5 pawn is a long-term target — pile up on it
- The a4 push gains queenside space and prevents ...Na5

In the Berlin Defense (3...Nf6 4.O-O Nxe4):
- The 4.d4 break is essential — don't delay
- After 5.d4 Nd6 6.Bxc6 dxc6, the doubled c-pawns give Black structural issues
- The 4v3 kingside pawn majority is a long-term asset
- The endgame requires precise technique

In the Exchange Variation (4.Bxc6):
- Trade pieces and aim for the endgame
- The 4v3 kingside pawn majority is the key asset
- Push d4 at the right moment to open the position
- Use the bishops to pressure Black's queenside

Universal Ruy Lopez principles:
- The b3 bishop (after ...b5) is your most important piece
- The d4 break is the main central lever
- Knight maneuvers (Nd2-f1-g3/e3) are essential for kingside play
- Queenside expansion (a4, Nc3-a2-c1) is often useful
- The position is rich in strategic ideas — patience is rewarded`,
    },
    {
      title: "Typical Plans for Black",
      type: "key-idea",
      content: `Defending against the Ruy Lopez requires understanding the typical Black setups. Here are the most important strategic themes:

In the Morphy Defense (3...a6 4.Ba4):
- The Breyer (9...Nb8) is the most respected — patient maneuvering
- The Chigorin (9...Na5) is the most aggressive — central breaks
- The Zaitsev (9...Bb7) is the most flexible — kingside buildup
- The Marshall Attack (8...d5) is the most tactical — piece activity

In the Berlin Defense (3...Nf6):
- The Berlin Wall (4...Nxe4) is the main line — solidity over activity
- The endgame is roughly equal but Black has the bishop pair
- The 3v4 kingside pawn structure means White has long-term chances
- The ...c5 break is the key counter-strike

In the Classical Defense (3...Bc5):
- The Giuoco Piano setup is solid and well-known
- The ...d6 and ...O-O development is standard
- The ...Nc6 and ...f5 breaks are the key counter-strikes
- The light-squared bishop on c5 is actively placed

Universal Black principles:
- The b3 bishop is White's main piece — try to trade it when possible
- The d4 break is White's main plan — prepare ...d5 or ...f5 as counters
- The c5 break is often the key counter-strike in the Closed Spanish
- The light-squared bishop (c8) is often bad — trade it via ...b6 and ...Ba6
- Kingside castling is standard, but queenside castling can be a surprise`,
    },
    {
      title: "Endgame Patterns",
      type: "key-idea",
      content: `The Ruy Lopez often leads to specific endgame patterns that are worth studying:

Pattern 1: The 4v3 Kingside Pawn Majority
In the Exchange Variation and Berlin Endgame, White has a 4v3 kingside pawn majority (after the d4 trade). This can be converted into a passed pawn with careful play. The plan: trade pieces, push the kingside pawns, and create a passed a-pawn or h-pawn.

Pattern 2: The Doubled c-Pawns
In the Berlin Endgame (after 6.Bxc6 dxc6), Black has doubled c-pawns. This is a long-term structural issue that White can exploit. The plan: pressure the c6 pawn with pieces, and use the b3 bishop to target the queenside.

Pattern 3: The Light-Squared Bishop
The c8 bishop is often bad in the Ruy Lopez. Black's typical solution: trade it via ...b6 and ...Ba6, or use it to support the ...c5 break. In endgames, the bishop can become a liability if the position becomes closed.

Pattern 4: The b5 Pawn
The b5 pawn is a long-term target for White. Black's typical defense: support it with ...c5, ...a5, or ...Nc6. White's typical attack: pile up on the b5 pawn with pieces, especially the b3 bishop and the a4 pawn.

Pattern 5: The King Activation
In Ruy Lopez endgames, the king becomes a fighting piece. The typical plan: march the king to the center to support the pawn structure, or to the queenside to support the pawn majority.

The lesson: Ruy Lopez endgames are about small advantages. The player who understands the typical pawn structures and piece placements will win more endgames than the player who simply trades pieces.`,
    },
    {
      title: "When to Play the Ruy Lopez",
      type: "key-idea",
      content: `The Ruy Lopez is one of the most respected openings in chess, suitable for all levels and time controls. Here's when to play it and when to consider alternatives:

Play the Ruy Lopez when:
- You want a sound, strategic opening with long-term chances
- You enjoy long, complex middlegames with rich strategic ideas
- You're playing in a classical tournament where the deep theory pays off
- You want to challenge your opponent's understanding of the Closed Spanish
- You prefer understanding over memorization (the themes recur across variations)
- You're playing against opponents in the 1400+ range

Consider alternatives when:
- You prefer sharp, tactical positions (try the Sicilian or King's Gambit)
- You're playing rapid or blitz where the deep theory is harder to apply
- You want to avoid the Berlin Defense (try the Italian or Scotch)
- You're uncomfortable with long, grinding endgames
- You need a quick win (the Ruy Lopez often leads to long games)

Rating ranges where the Ruy Lopez is most effective:
- 1400-1800: The main lines are well-taught and the strategic themes are clear
- 1800-2200: The Closed Spanish becomes a deep strategic battle
- 2200+: The Berlin and Marshall require deep preparation

The lesson: the Ruy Lopez is a complete, sophisticated opening that rewards patient, strategic play. It will serve you well in any game where you want to fight for the initiative with sound, classical play.`,
    },
    {
      title: "Comparison to Other Openings",
      type: "key-idea",
      content: `The Ruy Lopez is often compared to other 1.e4 openings. Here's how it stacks up:

Ruy Lopez vs Italian (1.e4 e5 2.Nf3 Nc6 3.Bc4):
- Both are classical 1.e4 openings
- The Ruy Lopez is deeper and more strategic
- The Italian is more tactical and direct
- The Ruy Lopez has more long-term pressure
- The Italian is easier to learn

Ruy Lopez vs Scotch (1.e4 e5 2.Nf3 Nc6 3.d4):
- The Scotch is more open and tactical
- The Ruy Lopez is more closed and strategic
- The Scotch leads to quicker piece activity
- The Ruy Lopez leads to longer maneuvering
- Both are sound and respected

Ruy Lopez vs Sicilian (1.e4 c5):
- The Sicilian is sharper and more tactical
- The Ruy Lopez is more positional and strategic
- The Sicilian has more theory
- The Ruy Lopez is easier to understand thematically
- Both are top-level weapons

Ruy Lopez vs King's Gambit (1.e4 f5):
- The King's Gambit is much sharper
- The Ruy Lopez is much more solid
- The King's Gambit is a surprise weapon
- The Ruy Lopez is a mainline weapon
- Different risk/reward profiles

When to prefer the Ruy Lopez over alternatives:
- When you want a sound, strategic opening: Ruy Lopez
- When you want a sharp, tactical opening: Sicilian or King's Gambit
- When you want a quick, open game: Scotch or Italian
- When you want a long, grinding game: Ruy Lopez or Berlin

The lesson: the Ruy Lopez is the deepest and most strategic of the 1.e4 openings. It complements, rather than replaces, other 1.e4 weapons. A well-rounded player might use the Ruy Lopez in 50% of games, the Italian in 20%, the Scotch in 15%, and the Sicilian in 15%.`,
    },
    {
      title: "The Computer Era: Modern Analysis",
      type: "key-idea",
      content: `How has the engine revolution affected the Ruy Lopez? The opening has thrived, not suffered. Here's what modern analysis tells us:

Engine Evaluation:
- The Ruy Lopez is roughly equal at the top level (White scores 50-53%)
- The Berlin Defense is the most solid line for Black
- The Closed Spanish is rich and complex
- The Marshall Attack is sharp but defensible for Black
- The Exchange Variation is sound and reliable for White

Why the Ruy Lopez Has Thrived:
1. The opening is fundamentally sound — engines confirm the long-term pressure
2. The deep theory rewards understanding, not just memorization
3. The Berlin Defense has made the opening more drawish at the top level
4. The Closed Spanish remains a rich, complex battleground
5. The Marshall Attack continues to be a viable weapon

The Berlin Revolution:
- Before 2000, the Berlin was considered dubious
- Kramnik's 2000 win over Kasparov changed everything
- Today, the Berlin is one of the most respected defenses
- Many top-level games feature the Berlin endgame
- The variation is now a key part of every top player's repertoire

The Online Era:
- The Ruy Lopez remains popular in online play
- The Berlin Defense is especially common in rapid and blitz
- The Closed Spanish is played less often online due to time constraints
- The Marshall Attack is a surprise weapon in faster time controls

The lesson: the Ruy Lopez has stood the test of time — over 460 years and counting. The engine revolution has refined our understanding, but the fundamental appeal of the opening remains. The deep strategic ideas, the rich middlegame positions, and the long-term pressure make it a timeless weapon.`,
    },
    {
      title: "Comprehensive Quiz: Test Your Understanding",
      type: "trap",
      interactionMode: "quiz",
      orientation: "white",
      quizFen:
        "r1bq1rk1/2ppbppp/p1n2n2/1p2p3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 w - - 0 8",
      quizAnswer: ["h3"],
      quizHint:
        "White is to move in the starting position of the Marshall Attack setup. Black's plan is to play ...d5 with a gambit. Find the move that prevents this and steers the game into a different channel.",
      content: `This is the comprehensive quiz for the Ruy Lopez. White is to move in a standard Closed Spanish position.

You should now understand:
- The Morphy Defense and its major sub-variations
- The Berlin Defense and the famous endgame
- The Exchange Variation and its endgame pressure
- The Marshall Attack and its tactical resources
- The Anti-Marshall and the practical avoidance of theory

Find the best move that demonstrates your understanding of the Ruy Lopez. The correct move is a key idea that recurs throughout Spanish theory.`,
    },
    {
      title: "Summary: The Complete Ruy Lopez Guide",
      type: "key-idea",
      content: `You've now completed a comprehensive course on the Ruy Lopez. Here's what to remember:

Core Strategic Ideas:
1. The b3 bishop is the star piece — keep it active
2. The d4 break is the key central lever — time it carefully
3. The Nb1-d2-f1-g3 maneuver is essential for kingside play
4. The a4 push gains queenside space and prevents ...Na5
5. The b5 pawn is a long-term target — pile up on it

The Main Variations:
- Morphy Defense (3...a6 4.Ba4): the most popular, with Breyer, Chigorin, Zaitsev sub-variations
- Berlin Defense (3...Nf6): the most solid, the Kramnik variation
- Classical Defense (3...Bc5): the Giuoco Piano setup
- Exchange Variation (4.Bxc6): the endgame grind
- Marshall Attack: the famous gambit

Universal Principles:
- The b3 bishop (after ...b5) is your most important piece
- The d4 break is the main central lever
- Knight maneuvers (Nd2-f1-g3/e3) are essential
- Queenside expansion (a4, Nc3-a2-c1) is often useful
- The position is rich in strategic ideas — patience is rewarded

If you only remember three things:
- Bb3 targets f7 and the e5 pawn simultaneously
- The d4 break is the key central lever
- The Nb1-d2-f1-g3 maneuver brings the knight to the kingside

The lesson: the Ruy Lopez is the deepest and most strategic opening in chess. It rewards understanding, patience, and precision. By mastering the key themes and variations, you will have a weapon that serves you for a lifetime.

Now go practice! Click "Start Practice" below and the CPU will play random Black defenses. You play White and try to remember the correct responses!`,
    },
  ],
};
