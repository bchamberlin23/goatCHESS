import { LearnTopic } from "../types";

export const italianGame: LearnTopic = {
  slug: "italian-game",
  title: "The Italian Game (Giuoco Piano)",
  category: "openings",
  description:
    "The complete, definitive course on the Italian Game. From its 16th-century Italian school origins through Morphy's Opera Game to Carlsen's modern mastery, master every major variation, every famous trap, and every model game. By the end you will understand the oldest living opening in chess.",
  difficulty: "beginner",
  estimatedMinutes: 120,
  icon: "mdi:pasta",
  tags: [
    "1.e4",
    "e5",
    "Bc4",
    "Giuoco Piano",
    "Two Knights",
    "Fried Liver",
    "Italian Gambit",
    "Greco",
  ],
  sections: [
    {
      title: "Introduction: The Oldest Living Opening",
      type: "text",
      content: `The Italian Game begins 1.e4 e5 2.Nf3 Nc6 3.Bc4. It's one of the oldest recorded chess openings (dating to the 16th century Italian school) and is perfect for beginners learning opening principles: develop pieces, control the center, and watch f7.

The bishop on c4 immediately targets f7, the weakest square in Black's camp. This opening teaches all the fundamental ideas of chess — and it remains popular at the top level because the position is rich and flexible.

The Italian Game is a family that includes several major lines:
- The Giuoco Piano (3...Bc5) — the "Quiet Game", classical and solid
- The Two Knights Defense (3...Nf6) — sharp and tactical
- The Hungarian Defense (3...Be7) — passive but solid
- The Greco Attack (4.O-O Nf6 5.Re1) — modern aggressive treatment
- The Anti-Italian setups (3...d6, 3...f5) — uncommon but tricky

Historical Adopters:
- Gioacchino Greco (1620s) — the Calabrian priest, one of the first to analyze the opening
- Gioacchino Ponziani (1760s) — Italian champion, wrote about the opening
- Paul Morphy (1850s-60s) — the greatest player of his era, used it to dominate
- Wilhelm Steinitz (1880s-90s) — first World Champion
- Harry Nelson Pillsbury (1890s-1900s) — American genius
- Magnus Carlsen (2010s-present) — the modern Italian specialist
- Fabiano Caruana (2010s-present) — used it to win the 2018 Candidates

Statistical Performance:
- White scores approximately 53-55% in master games
- One of the most popular openings at all levels
- The Giuoco Piano is the most played, the Two Knights the sharpest
- The Italian is a model of classical development principles`,
    },
    {
      title: "The Italian Philosophy: Three Strategic Pillars",
      type: "key-idea",
      content: `The Italian Game is built on three interconnected strategic themes. Master these and the moves follow naturally.

1. The f7 Square
Bc4 targets f7, the weakest square in Black's camp (defended only by the king). This creates tactical opportunities throughout the opening. Watch for the f7 weakness in every variation — it's the foundation of countless combinations.

2. The Center and d4
White's d4 break is the thematic central challenge. Black's counterplay revolves around ...d5. The timing of these central breaks is the heart of Italian strategy.

3. The c3-d3-e4 Pawn Chain (Modern) vs c3-d4 (Classical)
In the modern Italian, White builds this chain for maximum stability before striking with d4. The chain is solid and hard to crack. The classical Italian (with d4) is more direct and tactical.

Black's Counter-Themes:
- The d5 break is Black's main central challenge
- The Nc6-a5 maneuver puts pressure on the c4 bishop
- The f5 break can be powerful if White over-extends
- The light-squared bishop on c5 (Giuoco Piano) or e6 (after d3) is actively placed

Pillsbury's Rule:
"In open positions, attack. In closed positions, maneuver." The Italian starts as a relatively closed position, so patience and piece maneuvering are rewarded. The c3-d3 setup embodies this idea.

The lesson: the Italian teaches fundamental chess. The f7 target, the central breaks, and the pawn chain are concepts that recur throughout chess. Mastering the Italian prepares you for every other opening.`,
    },
    {
      title: "The Opening Move: Why 3.Bc4?",
      type: "text",
      content: `After 1.e4 e5 2.Nf3 Nc6, White has several main choices:

Option A: 3.Bb5 (Ruy Lopez / Spanish)
The deepest and most strategic of the three. The bishop targets the knight that defends e5. The Ruy Lopez is the choice of positional players who want a long, strategic battle.

Option B: 3.Bc4 (Italian Game)
The classical and direct choice. The bishop targets f7, the weakest square in Black's camp. The Italian is the choice of players who want to attack from move 3.

Option C: 3.d4 (Scotch Game)
The most direct and tactical. White immediately challenges the center. The Scotch is the choice of players who want open, tactical positions.

Why choose 3.Bc4 over 3.Bb5?

The Italian Game is:
- Faster to develop (one less tempo spent on the bishop)
- More direct (Bc4 attacks f7 immediately, Bb5 is one step away)
- More flexible (the bishop can retreat to b3 or a2, or trade on f7)
- Better for beginners (teaches fundamental development and central control)
- Richer in tactical opportunities (the f7 target creates more chances)

Why choose 3.Bb5 over 3.Bc4?

The Ruy Lopez is:
- Deeper strategically (the closed Spanish is one of the richest positions)
- More modern at the top level (most world championship games feature the Ruy Lopez)
- Better for positional players (the long-term pressure on the knight is significant)
- Harder to learn (the deep theory takes years to master)

For beginners, the Italian is the better choice. The positions are clearer, the tactics are more obvious, and the lessons about development and central control are easier to absorb. As you improve, you can add the Ruy Lopez to your repertoire.`,
    },
    {
      title: "Step-by-Step: Main Line Setup 1.e4 e5 2.Nf3 Nc6 3.Bc4",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: ["e4", "e5", "Nf3", "Nc6", "Bc4"],
      moveDescriptions: [
        "White takes the center with the king's pawn. The most aggressive first move.",
        "Black mirrors with e5. The double-king-pawn opening is the oldest and most classical structure.",
        "White develops the knight toward the center, attacking the e5 pawn.",
        "Black defends the e5 pawn with the queen's knight. The knight also eyes the d4 square.",
        "The Italian Game! The bishop develops to c4, attacking the f7 square. This is the key move — the bishop immediately targets the weakest square in Black's camp.",
      ],
      content: `This is the starting position of the Italian Game. Black now has a decision: develop the bishop to c5 (Giuoco Piano), play the knight to f6 (Two Knights), or choose a more passive setup.

The main choices:
- 3...Bc5 (Giuoco Piano / "Quiet Game") — the most classical
- 3...Nf6 (Two Knights Defense) — the sharpest
- 3...Be7 (Hungarian Defense) — the most solid/passive
- 3...d6 (Philidor Defense) — solid and unpretentious
- 3...f5 (ANTI-Italian / Latvian Gambit) — sharp and tricky

Each of these leads to a completely different type of game. We'll explore the most important in the following sections.`,
    },
    {
      title: "Step-by-Step: The Giuoco Piano 3...Bc5",
      type: "position",
      fen: "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 3",
      content: `The Giuoco Piano (3...Bc5) is the most classical and solid response. After 4.c3 Nf6 5.d3 d6 6.O-O O-O, both sides have completed their natural development.

Key features of this position:
- White has the c3-d3-e4 pawn chain, a solid structure
- Black has the d6-e5 pawn chain, mirroring White's structure
- White's bishop on c4 targets f7, Black's bishop on c5 targets f2
- The position is closed, favoring patient maneuvering
- The d4 break is White's main lever; ...d5 is Black's counter

The Giuoco Piano is the choice of solid, positional players. The resulting games are long, strategic battles where the player who understands the imbalances better wins.

Modern refinements include the Giuoco Pianissimo (with d3, Nbd2, Nb3) — an even more patient setup — and the Giuoco Piano with h3 and a4, which prepares queenside expansion.`,
    },
    {
      title: "Step-by-Step: The Italian Gambit 4.d4",
      type: "position",
      fen: "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 3",
      content: `The Italian Gambit (4.d4) is the sharpest response in the Giuoco Piano. White offers a pawn for rapid development and open lines, following the principle "open the position when ahead in development."

The gambit leads to complex, tactical positions. Modern theory considers the gambit roughly equal — Black has a pawn but White has the initiative and open lines.

Key tactical ideas:
- The e5 push gains space and attacks the f6 knight
- The Bb5+ pin disrupts Black's development
- The doubled c-pawns are a long-term weakness for Black
- The position is forcing — both sides must know the theory

The lesson: the Italian Gambit teaches the value of development over material. White gives up a pawn but gains piece activity and attacking chances. The gambit is a great choice for players who enjoy sharp, tactical positions.`,
    },
    {
      title: "Step-by-Step: The Two Knights Defense 3...Nf6",
      type: "position",
      fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 3",
      content: `The Two Knights Defense (3...Nf6) is the sharpest reply to the Italian Game. By attacking the e4 pawn immediately, Black forces White to decide how to handle the center.

White's main options:
- 4.Ng5 (the sharp Fried Liver Attack) — leads to complex tactics
- 4.d3 (the Four Knights) — solid and flexible
- 4.Nc3 (the Classical) — develops the knight
- 4.Bxf7+ (the ultra-sharp Fried Liver sacrifice) — leads to a dangerous attack

The Two Knights is one of the most analyzed openings in chess. The Polerio Defense (5...Na5) is considered best for Black, while the Fegatello (5...Nxd5) is the original Fried Liver but is considered inferior.

Key themes:
- The Ng5 attack creates tactical chances for White
- The Polerio Defense (Na5) is the solid response
- The position is sharp and requires precise play from both sides
- The d4 break is the key central lever for White

The lesson: the Two Knights Defense rewards tactical precision. The position is complex and forcing — both sides must calculate carefully. It's a great choice for players who enjoy sharp, tactical battles.`,
    },
    {
      title: "The Fried Liver Attack: A Position Study",
      type: "position",
      interactionMode: "freeplay",
      fen: "r1bqkb1r/pppp1ppp/2n5/3Pp3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5",
      content: `The Fried Liver Attack (4.Ng5 d5 5.exd5 Nxd5) is one of the most famous tactical sequences in chess. The position shown is after 4.Ng5 d5 5.exd5 — now Black must choose between the Polerio Defense (5...Na5) and the Fegatello (5...Nxd5).

The Fegatello (5...Nxd5) is the original Fried Liver, and it's still a great trap at the club level. After 6.Nxf7! Kxf7 7.Qf3+ Ke6 8.Qe4+ — the White queen and knight create a devastating attack. The knight cannot be captured (Kd6 would lose to Nf7+), and Black's position collapses.

The Polerio Defense (5...Na5) is the modern preference for strong players. After 6.Bb5+ c6 7.dxc6 bxc6 8.Be2, White has a small structural edge (isolated a5 pawn) but Black is solid.

Famous game: Greco vs NN, 1620 — one of the oldest recorded brilliancies. The game featured the Fried Liver sacrifice, and Greco won with a brilliant combination.

Key tactical patterns:
- The Nxf7 sacrifice is the heart of the Fried Liver
- The Qf3+ and Qe4+ checks force the king into the open
- The position is forcing — both sides must know the theory
- Modern theory prefers 5...Na5 over 5...Nxd5

The lesson: the Fried Liver teaches the value of tactical awareness. The Nxf7 sacrifice is one of the most famous tactics in chess, and learning to spot it (and avoid it as Black) is a fundamental skill.`,
    },
    {
      title: "Quiz: The Fried Liver",
      type: "trap",
      interactionMode: "quiz",
      orientation: "white",
      quizFen: "r1bqkb1r/pppp1ppp/2n5/3Np3/2B1P3/8/PPPP1PPP/RNBQK2R b KQkq - 0 5",
      quizAnswer: ["Na5"],
      quizHint:
        "Black has just captured the d5 pawn with the knight. The Polerio Defense is the modern preference — the knight retreats to a5, where it attacks the c4 bishop and prepares to defend the queenside.",
      content: `White has played 1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6 4.Ng5 d5 5.exd5 — the Fried Liver setup. Black is to move.

The two main options:
- 5...Nxd5 — the original Fried Liver. After 6.Nxf7! Kxf7 7.Qf3+ Ke6 8.Qe4+ the White attack is devastating.
- 5...Na5 — the Polerio Defense. The knight retreats, attacking the c4 bishop and preparing queenside defense.

Find Black's best move — the modern preference for strong players.`,
    },
    {
      title: "The Hungarian Defense 3...Be7",
      type: "position",
      interactionMode: "freeplay",
      fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 3",
      content: `The Hungarian Defense (3...Be7) is a passive but solid response. By playing Be7 instead of Bc5 or Nf6, Black avoids the sharpest lines and aims for a quiet, positional game.

White's typical plan: 4.d4 exd4 5.Nxd4 Nxd4 6.Qxd4 — White wins a tempo on the queen and gains a small structural edge. The position is then roughly equal, with White having a slight initiative.

The Hungarian is rare at the top level but popular at the club level. It's a great choice for players who want to avoid the heavy theory of the Giuoco Piano and the Two Knights.

Key features:
- The Be7 bishop is passive but not bad
- The position often transposes to other Italian lines
- White has a small initiative after the central break
- Black can play ...d6, ...Nf6, ...O-O and reach a solid position

The lesson: the Hungarian is a model of solid development. The bishop on e7 is less active than on c5, but the position is easier to play and the theory is less demanding. It's a great choice for beginners and intermediate players.`,
    },
    {
      title: "Five Famous Italian Opening Traps",
      type: "trap",
      interactionMode: "quiz",
      orientation: "white",
      quizFen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQ1RK1 b kq - 4 5",
      quizAnswer: ["Nxe5"],
      quizHint:
        "White has developed both knights and the bishop. Black just played ...Bc5. Look for a tactic — the e5 pawn is defended twice but attacked three times. Can White win material?",
      content: `Five famous traps in the Italian Game:

Trap 1: The Fried Liver
1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6 4.Ng5 d5 5.exd5 Nxd5 6.Nxf7! Kxf7 7.Qf3+ Ke6 8.Qe4+ — White wins material.

Trap 2: Légal's Mate
1.e4 e5 2.Nf3 Nc6 3.Bc4 d6 4.Nc3 Bg4 5.Nxe5! Bxd1 6.Bxf7+ Ke7 7.Nd5# — Checkmate in 7 moves.

Trap 3: The Blackburne Shilling Gambit
1.e4 e5 2.Nf3 Nc6 3.Bc4 Nd4 4.Nxe5?! Qg5! 5.Nxf7 Qxg2 6.Rf1 Qxe4+ — Black wins material.

Trap 4: The Mortimer's Trap
1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6 4.Ng5 Bb4 5.Nxf7! Bxf2+ 6.Kxf2 Qe7 — the position is roughly equal but sharp.

Trap 5: The Møller Attack Trap
1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.c3 Nf6 5.d4 Bb6 6.e5 d5 7.Bb5 Ne4 8.exd6 — White wins a pawn.

The lesson: the Italian is full of subtle tactical motifs. Always check for tactical shots before committing to a long strategic plan.`,
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
      title: "Model Game 2: Greco vs NN, 1620",
      type: "moves",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      content: `This is the famous Greco Game, played by Gioacchino Greco (White) against an unknown opponent around 1620. It is one of the oldest recorded chess brilliancies.

The game is a model of the Bxf7+ sacrifice, one of the most famous tactical motifs in chess. Greco's play was so brilliant that the game has been studied for over 400 years.

Key lessons from this game:
- The Bxf7+ sacrifice is one of the most powerful tactics in chess
- The Ng5-Qh5 combination is a model of attacking play
- The Italian Game leads to many such attacking chances
- Sacrifices for development and attack are often correct

The Greco Game is studied by every serious chess player. It demonstrates that the fundamental principles of chess — develop, attack, sacrifice — were understood even in the 17th century.`,
    },
    {
      title: "Model Game 3: Pillsbury vs Lasker, 1895",
      type: "position",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      content: `This game features Harry Nelson Pillsbury (White) against Emanuel Lasker (Black) at the 1895 Hastings tournament. Pillsbury's attacking play was a model of the Italian Game, and Lasker was the future World Champion.

The game demonstrates the attacking potential of the Italian Game. Pillsbury's central break (d5) and kingside attack (Bh6, Bxg7) were devastating, and his play was a model of the Italian philosophy.

Key lessons from this game:
- The Italian Game leads to many attacking chances
- The d5 central break is the key lever for White
- The Bh6-Bxg7 combination is a powerful attacking motif
- Pillsbury's Rule: "In open positions, attack. In closed positions, maneuver."

The Pillsbury-Lasker game is studied by every serious Italian Game player. It demonstrates the attacking potential of the opening and the importance of the central break.`,
    },
    {
      title: "Typical Plans for White",
      type: "key-idea",
      content: `When playing the Italian Game as White, your plans depend on which variation Black chooses. Here are the most important strategic themes:

In the Giuoco Piano (3...Bc5):
- The c3-d3-e4 pawn chain is solid and flexible
- The d4 break is the key central lever — time it carefully
- The Nb1-d2-f1-e3 (or c2) maneuver brings the knight to the kingside
- The a4 push gains queenside space and prevents ...Na5
- The h3 move prevents ...Bg4 ideas

In the Two Knights Defense (3...Nf6):
- The Ng5 attack creates tactical chances
- The d3 setup (Four Knights) is solid and flexible
- The Nc3 development is the classical approach
- The position is sharp and requires precise calculation

In the Hungarian Defense (3...Be7):
- The d4 break wins a tempo on the queen
- The position often transposes to other Italian lines
- White has a small but persistent edge

Universal Italian principles for White:
- The c4 bishop is the most important piece — keep it active
- The f7 square is a constant target
- The d4 break is the main central lever
- Kingside castling is standard and safe
- The position rewards both tactical and strategic play`,
    },
    {
      title: "Typical Plans for Black",
      type: "key-idea",
      content: `Defending against the Italian Game requires understanding the typical Black setups. Here are the most important strategic themes:

In the Giuoco Piano (3...Bc5):
- The d6-e5 pawn chain is solid and flexible
- The ...d5 break is the main central counter
- The ...Na5 maneuver puts pressure on the c4 bishop
- The ...f5 break can be powerful if White over-extends
- The light-squared bishop on c5 is actively placed

In the Two Knights Defense (3...Nf6):
- The Polerio Defense (5...Na5) is the solid choice
- The d4 break is the key central counter
- The position is sharp and requires precise calculation
- The ...Bc5 development is natural

In the Hungarian Defense (3...Be7):
- The position is solid but passive
- The ...d6 and ...Nf6 development is natural
- White has a small but persistent edge
- The ...O-O and ...Re8 complete the setup

Universal Italian principles for Black:
- The c4 bishop is White's main piece — try to trade it when possible
- The d4 break is White's main plan — prepare ...d5 as a counter
- The ...f5 break can be powerful in some positions
- Kingside castling is standard
- The light-squared bishop (c5 or e6) is the key piece in many variations`,
    },
    {
      title: "Endgame Patterns",
      type: "key-idea",
      content: `The Italian Game often leads to specific endgame patterns that are worth studying:

Pattern 1: The c3-d3-e4 Pawn Chain
In the Modern Italian, White has a solid pawn chain. The chain is hard to crack, and the endgame often features a slow positional squeeze. The plan: trade pieces, push the kingside pawns, and create a passed pawn.

Pattern 2: The d5 Break
After the central breaks, the position often opens up. The resulting endgames favor the player who understands the resulting pawn structures. The lesson: the timing of central breaks is critical in Italian endgames.

Pattern 3: The c4 Bishop Trade
In many Italian endgames, the c4 bishop is traded for Black's knight or bishop. The resulting positions often favor the player with the better pawn structure.

Pattern 4: The a4-a5 Expansion
In the Giuoco Piano with a4, White gains queenside space. The endgame often features a queenside majority that can be converted into a passed pawn.

Pattern 5: The King Activation
In Italian endgames, the king becomes a fighting piece. The typical plan: march the king to the center to support the pawn structure, or to the queenside to support the pawn majority.

The lesson: Italian endgames are about small advantages. The player who understands the typical pawn structures and piece placements will win more endgames than the player who simply trades pieces.`,
    },
    {
      title: "When to Play the Italian Game",
      type: "key-idea",
      content: `The Italian Game is one of the most versatile openings in chess. Here's when to play it and when to consider alternatives:

Play the Italian when:
- You want a sound, classical opening that teaches fundamental principles
- You're a beginner learning opening play (the lessons are clear and useful)
- You enjoy both tactical and strategic positions
- You want to attack the f7 square from move 3
- You prefer the Modern Italian (c3-d3) for solid, positional play
- You prefer the Two Knights for sharp, tactical play
- You're playing at any level (the Italian works from 1000 to 2800+)

Consider alternatives when:
- You prefer the deepest, most strategic opening (try the Ruy Lopez)
- You want a sharp, forcing line (try the Scotch or King's Gambit)
- You prefer the most popular opening at the top level (the Ruy Lopez is more common)
- You want to avoid the f7-target altogether (try the Vienna or Pirc)

Rating ranges where the Italian is most effective:
- 800-1400: The Giuoco Piano teaches fundamental development and central control
- 1400-1800: The Two Knights introduces tactical motifs and sharp play
- 1800-2200: The Modern Italian becomes a deep strategic battle
- 2200+: The Italian is a serious weapon, used by Carlsen and other top players

The lesson: the Italian is a complete, sophisticated opening that rewards both tactical and strategic play. It will serve you well at any level, and the lessons it teaches will help you in every other opening.`,
    },
    {
      title: "Comparison to Other 1.e4 Openings",
      type: "key-idea",
      content: `The Italian Game is often compared to other 1.e4 openings. Here's how it stacks up:

Italian (1.e4 e5 2.Nf3 Nc6 3.Bc4) vs Ruy Lopez (3.Bb5):
- Both are classical 1.e4 openings
- The Italian is faster to develop (one less tempo on the bishop)
- The Ruy Lopez is deeper strategically (the closed Spanish is one of the richest positions)
- The Italian has more immediate attacking chances
- The Ruy Lopez has more long-term pressure

Italian vs Scotch (1.e4 e5 2.Nf3 Nc6 3.d4):
- The Scotch is more direct and tactical
- The Italian is more flexible and strategic
- The Scotch leads to quicker piece activity
- The Italian leads to longer maneuvering
- Both are sound and respected

Italian vs Sicilian (1.e4 c5):
- The Sicilian is sharper and more tactical
- The Italian is more positional and strategic
- The Sicilian has more theory
- The Italian is easier to learn
- Both are top-level weapons

Italian vs King's Gambit (1.e4 f5):
- The King's Gambit is much sharper
- The Italian is much more solid
- The King's Gambit is a surprise weapon
- The Italian is a mainline weapon
- Different risk/reward profiles

When to prefer the Italian over alternatives:
- When you want a sound, classical opening: Italian
- When you want to learn fundamental principles: Italian
- When you want both tactical and strategic options: Italian
- When you want the deepest, most strategic opening: Ruy Lopez
- When you want the sharpest, most tactical opening: Sicilian or Scotch

The lesson: the Italian is one of the most balanced 1.e4 openings. It offers both tactical and strategic options, teaches fundamental principles, and rewards deep understanding. A well-rounded player might use the Italian in 40% of games, the Ruy Lopez in 30%, the Sicilian in 20%, and the Scotch in 10%.`,
    },
    {
      title: "The Computer Era: Modern Analysis",
      type: "key-idea",
      content: `How has the engine revolution affected the Italian Game? The opening has thrived, not suffered. Here's what modern analysis tells us:

Engine Evaluation:
- The Italian is roughly equal at the top level (White scores 52-55%)
- The Giuoco Piano is solid and reliable
- The Two Knights is sharp and complex
- The Fried Liver is considered dubious for Black
- The Modern Italian (c3-d3) is the modern preference

Why the Italian Has Thrived:
1. The opening is fundamentally sound — engines confirm the f7 pressure
2. The deep theory rewards understanding, not just memorization
3. The Modern Italian (c3-d3) has been refined by Carlsen and other top players
4. The Giuoco Piano remains a solid, reliable weapon
5. The Two Knights continues to be a sharp, complex battleground

The Carlsen Effect:
- Magnus Carlsen has played the Italian extensively at the top level
- His victories with the Italian have inspired a generation of players
- The Modern Italian (with h3, a4, d3) has become a model of strategic play
- The position rewards patient, accurate play — Carlsen's specialty

The Online Era:
- The Italian remains popular in online play
- The Giuoco Piano is the most common choice
- The Two Knights is especially popular in rapid and blitz
- The Modern Italian is increasingly common at all levels
- The Italian is a must for any serious online player

The lesson: the Italian has stood the test of time — over 400 years and counting. The engine revolution has refined our understanding, but the fundamental appeal of the opening remains. The f7 target, the central breaks, and the rich middlegame positions make it a timeless weapon.`,
    },
    {
      title: "Comprehensive Quiz: Test Your Understanding",
      type: "trap",
      interactionMode: "quiz",
      orientation: "white",
      quizFen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQ1RK1 b kq - 4 5",
      quizAnswer: ["Nxe5"],
      quizHint:
        "White has developed both knights and the bishop. Black just played ...Bc5. Look for a tactic — the e5 pawn is defended twice but attacked three times. Can White win material?",
      content: `This is the comprehensive quiz for the Italian Game. White is to move in a standard Two Knights position.

You should now understand:
- The Giuoco Piano and the Modern Italian setup
- The Two Knights Defense and the Fried Liver Attack
- The Hungarian Defense and the passive setups
- The famous traps and tactical motifs
- The model games and their lessons

Find the best move that demonstrates your understanding of the Italian Game. The correct move is a key tactical idea that recurs throughout Italian theory.`,
    },
    {
      title: "Summary: The Complete Italian Game Guide",
      type: "key-idea",
      content: `You've now completed a comprehensive course on the Italian Game. Here's what to remember:

Core Strategic Ideas:
1. Bc4 targets f7, the weakest square in Black's camp
2. The d4 break is the key central lever — time it carefully
3. The c3-d3-e4 pawn chain (Modern Italian) is solid and flexible
4. The f7 sacrifice (Bxf7+) is one of the most famous tactics in chess
5. The Ng5 attack (Two Knights) creates tactical chances

The Main Variations:
- Giuoco Piano (3...Bc5): the most classical and solid
- Two Knights Defense (3...Nf6): the sharpest and most tactical
- Hungarian Defense (3...Be7): the most passive but solid
- Italian Gambit (4.d4): the sharpest Giuoco Piano

Universal Principles:
- The c4 bishop is the most important piece for White
- The f7 square is a constant target
- The d4 break is the main central lever
- Kingside castling is standard and safe
- The position rewards both tactical and strategic play

If you only remember three things:
- Bc4 attacks f7, the weakest square in Black's camp
- The d4 break is the key central lever
- The Bxf7+ sacrifice is one of the most powerful tactics in chess

The lesson: the Italian Game is the oldest living opening in chess. It teaches fundamental principles, rewards both tactical and strategic play, and remains a top-level weapon after 400+ years. By mastering the key themes and variations, you will have a weapon that serves you for a lifetime.

Now go practice! Click "Start Practice" below and the CPU will play random Black setups. You play White and try to remember the correct responses!`,
    },
  ],

  // Practice mode — CPU plays random Black responses
  practice: {
    startingFen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
    userColor: "w",
    instructions:
      "Practice White's side of the Italian Game. The CPU will play different setups (Giuoco Piano, Two Knights, Hungarian). Try to play the most active developing moves.",
    lines: [
      {
        name: "Giuoco Piano (3...Bc5)",
        description: "The classical 'Quiet Game' — Black mirrors the bishop",
        moves: [
          "e5",
          "Nf3",
          "Nc6",
          "Bc4",
          "Bc5",
          "c3",
          "Nf6",
          "d3",
          "d6",
          "O-O",
          "O-O",
          "h3",
        ],
      },
      {
        name: "Two Knights Defense (3...Nf6)",
        description: "The sharpest reply — Black attacks the e4 pawn",
        moves: [
          "e5",
          "Nf3",
          "Nc6",
          "Bc4",
          "Nf6",
          "d3",
          "Bc5",
          "c3",
          "d6",
          "O-O",
          "O-O",
          "h3",
        ],
      },
      {
        name: "Hungarian Defense (3...Be7)",
        description: "The passive but solid choice",
        moves: [
          "e5",
          "Nf3",
          "Nc6",
          "Bc4",
          "Be7",
          "d4",
          "exd4",
          "Nxd4",
          "Nxd4",
          "Qxd4",
          "Nc3",
          "Qd6",
        ],
      },
      {
        name: "Philidor Defense (3...d6)",
        description: "The solid but unpretentious choice",
        moves: [
          "e5",
          "Nf3",
          "Nc6",
          "Bc4",
          "d6",
          "Nc3",
          "Bg4",
          "h3",
          "Bh5",
          "d4",
          "exd4",
          "Nxd4",
        ],
      },
    ],
  },
};
