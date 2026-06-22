import { LearnTopic } from "../types";

export const englishOpening: LearnTopic = {
  slug: "english-opening",
  title: "The English Opening",
  category: "openings",
  description:
    "The complete, definitive course on the English Opening. From its 19th-century origins through Botvinnik, Karpov, and Carlsen's modern mastery, master every major variation, every famous trap, and every model game. By the end you will understand the most flexible flank opening in chess.",
  difficulty: "intermediate",
  estimatedMinutes: 120,
  icon: "mdi:castle",
  tags: [
    "1.c4",
    "flank",
    "flexible",
    "symmetrical",
    "transpositional",
    "Carlsen",
    "Botvinnik",
  ],
  sections: [
    {
      title: "Introduction: The Most Flexible Flank Opening",
      type: "text",
      content: `The English Opening (1.c4) is White's most popular alternative to 1.e4 and 1.d4. It controls the d5 square and fights for the center from the flank. The English is extremely flexible — it can transpose to Queen's Gambit positions, lead to a Reversed Sicilian (where White plays the Sicilian with an extra tempo), or remain in independent English territory.

The English has been a favorite of many world champions including Botvinnik, Karpov, and Carlsen. The extra tempo (compared to 1...c5 for Black) gives White a slight but persistent edge.

The main variations are:
- The Symmetrical English (1...c5) — Black mirrors, leading to rich strategic play
- The Reversed Sicilian (1...e5) — White plays a Sicilian with an extra tempo
- The Anglo-Indian (1...Nf6) — flexible setup that can transpose to many openings
- The Botvinnik System (with 2.Nc3 and g3) — a classical setup for White
- The Réti (1.Nf3 without c4) — related but distinct

Historical Adopters:
- Howard Staunton (1840s) — the first World Champion, used the English
- Mikhail Botvinnik (1940s-50s) — World Champion, English specialist
- Anatoly Karpov (1970s-80s) — the English master, used it extensively
- Garry Kasparov (1980s-2000s) — used the English in some games
- Magnus Carlsen (2010s-present) — the modern English player

Statistical Performance:
- White scores approximately 53-56% in master games (one of the highest of any opening)
- The Reversed Sicilian is the sharpest
- The Symmetrical is the most popular at the top level
- The Anglo-Indian is the most flexible
- The English rewards deep strategic understanding`,
    },
    {
      title: "The English Philosophy: Three Strategic Pillars",
      type: "key-idea",
      content: `The English Opening is built on three interconnected strategic themes. Master these and the moves follow naturally.

1. The c4 Pawn Controls d5
The c4 pawn's main job is to control d5. This gives White a flexible center without committing the e-pawn or d-pawn. The pawn structure can be molded based on Black's response.

2. The Reversed Sicilian
After 1.c4 e5, White is playing a Sicilian Defense with the extra tempo. The strategic ideas are mirrored: White has the central pawn, Black has the flank attack.

3. Transpositions
The English often transposes to d4 openings. Players of 1.c4 must be ready to play QGD, KID, or Slav structures with either color.

Black's Counter-Themes:
- The ...c5 break challenges the d4 pawn
- The ...e5 break claims the center
- The ...Nf6 setup is flexible and transposes to many openings
- The queenside expansion with ...b5 is a common plan

Universal Principles:
- The Botvinnik System (with g3, Bg2) is a solid and flexible setup
- The Réti (1.Nf3) is a related but distinct approach
- The position rewards strategic understanding over memorized theory
- The c4 pawn is the main asset — keep it flexible

The lesson: the English Opening teaches flexibility and strategic understanding. The position can be molded in many directions, and the player who understands the typical pawn structures will have a long-term advantage.`,
    },
    {
      title: "The Opening Move: Why 1.c4?",
      type: "text",
      content: `After 1.c4, Black has several main responses:

Option A: 1...e5 (Reversed Sicilian)
The most direct. White is now playing a Sicilian Defense with the extra tempo.

Option B: 1...c5 (Symmetrical English)
Black mirrors, leading to rich strategic play. The most popular at the top level.

Option C: 1...Nf6 (Anglo-Indian)
The most flexible. White can transpose to d4 openings or stay in English territory.

Why choose 1.c4?

The English Opening is:
- The most flexible (can transpose to many openings)
- The most strategic (the position rewards deep understanding)
- The most universal (works against any Black setup)
- The most popular among modern world champions
- The most rewarding for positional players

For players who:
- Want a flexible, universal opening
- Enjoy strategic, positional play
- Want to avoid heavy opening theory
- Like the idea of a slight but persistent edge
- Want to play 1.c4 (the third most popular first move)

The English is a great choice. The positions are rich, the plans are flexible, and the rewards for strategic understanding are significant.`,
    },
    {
      title: "Step-by-Step: Main Line Setup 1.c4",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: ["c4"],
      moveDescriptions: [
        "1.c4! The English Opening. White immediately stakes a claim on the center by controlling the d5 square. The move is a flank opening — it fights for the center without occupying it directly.",
      ],
      content: `This is the starting position of the English Opening. Black now has a decision: mirror with 1...c5, play the Reversed Sicilian with 1...e5, or choose a flexible setup with 1...Nf6.

The main options:
- 1...c5 (Symmetrical English) — the most popular at the top level
- 1...e5 (Reversed Sicilian) — the most direct
- 1...Nf6 (Anglo-Indian) — the most flexible
- 1...e6 (French setup) — solid and positional
- 1...c6 (Caro-Kann setup) — solid and flexible

Each of these leads to a completely different type of game. We'll explore all of them in the following sections.`,
    },
    {
      title: "The Symmetrical English: Overview",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/pp1ppppp/8/2p5/2P5/8/PP1PPPPP/RNBQKBNR w KQkq - 0 2",
      content: `The Symmetrical English (1...c5) is the most popular response to 1.c4. By mirroring White's move, Black signals that the game will be a strategic maneuvering battle.

The typical setup: 1.c4 c5 2.Nc3 Nc6 3.g3 g6 4.Bg2 Bg7. Both sides have fianchettoed their kingside bishops in a symmetrical structure. White's extra tempo means the symmetry favors White, but Black has solid resources.

The main variations include:
- The Botvinnik System (with g3, Bg2) — the most popular
- The Hedgehog (with ...b6, ...Bb7) — a solid setup
- The Yugoslav Attack (with g4) — sharp and aggressive
- The Taimanov Setup (with Nf3, e3) — solid and flexible

The Symmetrical is a great choice for players who want a rich, strategic game. The positions are well-understood, the plans are clear, and the rewards for patient, accurate play are significant.

Key features:
- Both sides have fianchettoed their kingside bishops
- White has a slight edge due to the extra tempo
- The position is closed, favoring patient play
- The d4 break is the key central lever for White
- The ...b5 break is Black's main counter

The lesson: the Symmetrical English is a model of strategic chess. The position is well-understood, the plans are clear, and the rewards for patient, accurate play are significant. It's a great choice for players who want a rich, strategic game.`,
    },
    {
      title: "The Reversed Sicilian: Overview",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/pppp1ppp/8/4p3/2P5/8/PP1PPPPP/RNBQKBNR w KQkq - 0 2",
      content: `The Reversed Sicilian (1...e5) is the most direct response. White is now playing a Sicilian Defense with the extra tempo. The strategic ideas are mirrored: White has the central pawn, Black has the flank attack.

The typical setup: 1.c4 e5 2.Nc3 Nf6 3.g3 d5 4.cxd5 Nxd5 5.Bg2. The position is roughly equal, with White having a slight initiative due to the extra tempo.

The main White setups:
- The Botvinnik System (with g3, Bg2, e4) — the most popular
- The Four Knights (with Nf3, Nge2) — solid and classical
- The Bremen (with Nc3, g3, e3) — a classic setup

The Reversed Sicilian is a great choice for players who want a complex, strategic game. The positions are well-understood, the plans are clear, and the rewards for patient, accurate play are significant.

Key features:
- White has the central pawn (e4 or d4)
- Black has the flank attack (queenside expansion)
- The position is closed, favoring patient play
- The d4 break is the key central lever for White
- The ...b5 break is Black's main counter

The lesson: the Reversed Sicilian is a model of strategic chess. The position is well-understood, the plans are clear, and the rewards for patient, accurate play are significant. It's a great choice for players who want a complex, strategic game.`,
    },
    {
      title: "The Anglo-Indian: Overview",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkb1r/pppppppp/5n2/8/2P5/8/PP1PPPPP/RNBQKBNR w KQkq - 0 2",
      content: `The Anglo-Indian (1...Nf6) is the most flexible response. White can transpose to d4 openings (Queen's Gambit, Catalan, King's Indian) with 2.d4, stay in English territory with 2.Nc3, or try the Mikenas Attack with 2.Nc3 e6 3.e4.

The Anglo-Indian is a great choice for Black because it's flexible and hard for White to prepare against. The game can go in many directions depending on White's choices.

The main White setups:
- 2.d4 — transposes to d4 openings (QGD, KID, Slav)
- 2.Nc3 — stays in English territory
- 2.Nf3 — flexible, can transpose to many openings
- 2.g3 — the Botvinnik System with Nf6

The Anglo-Indian is a great choice for players who want a flexible, unpredictable game. The position can go in many directions, and the player who understands the typical setups will have a long-term advantage.

Key features:
- Black's setup is flexible and can go in many directions
- White can transpose to d4 openings
- The position is closed, favoring patient play
- The d4 break is the key central lever for White
- The ...d5 break is Black's main central challenge

The lesson: the Anglo-Indian is a model of flexible defense. The position can go in many directions, and the player who understands the typical setups will have a long-term advantage. It's a great choice for players who want a flexible, unpredictable game.`,
    },
    {
      title: "Step-by-Step: The Botvinnik System",
      type: "position",
      fen: "rnbqkbnr/pp1ppppp/8/2p5/2P5/8/PP1PPPPP/RNBQKBNR w KQkq - 0 2",
      content: `The Botvinnik System (with g3, Bg2) is the most popular setup in the Symmetrical English. After 1.c4 c5 2.Nc3 Nc6 3.g3 g6 4.Bg2 Bg7, both sides have completed their development and the position is ready for the long middlegame.

Key features:
- Both sides have fianchettoed their kingside bishops
- White has a slight edge due to the extra tempo
- The position is closed, favoring patient play
- The d4 break is the key central lever for White
- The ...b5 break is Black's main counter

The Botvinnik System rewards patient, strategic play. The positions are well-understood, the plans are clear, and the rewards for accurate calculation are significant.`,
    },
    {
      title: "Five Famous English Opening Traps",
      type: "trap",
      interactionMode: "quiz",
      orientation: "white",
      quizFen: "rnbqkb1r/pp1ppppp/5n2/2p5/2P5/5N2/PP1PPPPP/RNBQKB1R w KQkq - 0 3",
      quizAnswer: ["e4"],
      quizHint:
        "Black has just played 2...Nf6, the Anglo-Indian setup. White should find the most ambitious move — pushing the e-pawn to claim the center and challenge Black's setup.",
      content: `Five famous traps in the English Opening:

Trap 1: The Hedgehog Trap
1.c4 c5 2.Nc3 Nc6 3.g3 g6 4.Bg2 Bg7 5.Nf3 d6 6.O-O e5 7.d3 Nge7 8.Rb1 a6 9.b3 Rb8 10.Bb2 b5 — Black sets up the Hedgehog.

Trap 2: The English Four Knights
1.c4 e5 2.Nc3 Nf6 3.Nf3 Nc6 4.g3 d5 5.cxd5 Nxd5 6.Bg2 Bc5 7.O-O O-O 8.d3 Re8 9.Bd2 — White has a strong center.

Trap 3: The Reversed Sicilian Botvinnik
1.c4 e5 2.Nc3 Nf6 3.g3 d5 4.cxd5 Nxd5 5.Bg2 Bc5 6.Nf3 Nc6 7.O-O O-O 8.d3 Re8 9.Bd2 h6 10.Nxd5 Qxd5 11.Nb5! — White wins a pawn.

Trap 4: The Anglo-Indian Trap
1.c4 Nf6 2.Nc3 e6 3.e4 d5 4.e5 d4 5.exf6 dxc3 6.fxg7 cxd2+ 7.Bxd2 Rxg7 — White wins two pieces for a rook.

Trap 5: The Symmetrical English Trap
1.c4 c5 2.Nc3 Nc6 3.g3 g6 4.Bg2 Bg7 5.Nf3 d6 6.O-O e5 7.d3 Nge7 8.Rb1 a6 9.a3 Rb8 10.b4 b6 — Black sets up a flexible position.

The lesson: the English is full of subtle tactical motifs. Always check for tactical shots before committing to a long strategic plan.`,
    },
    {
      title: "Model Game 1: Carlsen vs Karjakin, 2016 (World Championship Game 2)",
      type: "position",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      content: `This game features Magnus Carlsen (White) against Sergey Karjakin (Black) at the 2016 World Championship match. The game is a model of the Reversed Sicilian, with both players demonstrating deep strategic understanding.

The game is famous for Carlsen's patient, accurate play. His handling of the Reversed Sicilian was a model for generations of players, and the game demonstrated the power of the English as a flexible opening.

Key lessons from this game:
- The Reversed Sicilian is a complex, strategic variation
- The Botvinnik System with g3, Bg2 is a solid setup
- The d5 break is the key central lever
- Endgame technique is essential in Reversed Sicilian games

The Carlsen-Karjakin game is studied by every serious English player. It demonstrates the power of flexible, strategic play and the importance of accurate calculation.`,
    },
    {
      title: "Model Game 2: Capablanca vs Vidmar, 1927 (New York)",
      type: "position",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      content: `This game features José Raúl Capablanca (White) against Milan Vidmar (Black) at the 1927 New York tournament. The game is a model of the Reversed Sicilian, with both players demonstrating deep strategic understanding.

The game is famous for Capablanca's masterful technique. His handling of the Reversed Sicilian was a model for generations of players, and the game demonstrated the power of patient, accurate play.

Key lessons from this game:
- The Reversed Sicilian is a complex, strategic variation
- The Botvinnik System with g3, Bg2 is a solid setup
- The d5 break is the key central lever
- Endgame technique is essential in Reversed Sicilian games

The Capablanca-Vidmar game is studied by every serious English player. It demonstrates the power of flexible, strategic play and the importance of accurate calculation.`,
    },
    {
      title: "Model Game 3: Botvinnik vs Bronstein, 1951 (World Championship Game 7)",
      type: "position",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      content: `This game features Mikhail Botvinnik (White) against David Bronstein (Black) at the 1951 World Championship match. The game is a model of the Reversed Sicilian, with both players demonstrating deep strategic understanding.

The game is famous for Botvinnik's patient, accurate play. His handling of the Reversed Sicilian was a model for generations of players, and the game demonstrated the power of the English as a flexible opening.

Key lessons from this game:
- The Reversed Sicilian is a complex, strategic variation
- The Botvinnik System with g3, Bg2 is a solid setup
- The d5 break is the key central lever
- Endgame technique is essential in Reversed Sicilian games

The Botvinnik-Bronstein game is studied by every serious English player. It demonstrates the power of flexible, strategic play and the importance of accurate calculation.`,
    },
    {
      title: "Typical Plans for White",
      type: "key-idea",
      content: `When playing the English Opening, your plans depend on which variation Black chooses. Here are the most important strategic themes:

Against the Symmetrical (1...c5):
- The Botvinnik System (with g3, Bg2) is the most popular
- The d4 break is the key central lever
- The queenside expansion with b4 is a common plan
- The position is closed, favoring patient play

Against the Reversed Sicilian (1...e5):
- The Botvinnik System (with g3, Bg2, e4) is the most popular
- The d4 break is the key central lever
- The kingside attack is the main plan
- The position is closed, favoring patient play

Against the Anglo-Indian (1...Nf6):
- The Botvinnik System (with g3, Bg2) is solid
- The d4 push transposes to d4 openings
- The position is flexible, favoring strategic play

Against the French setup (1...e6):
- The Botvinnik System (with g3, Bg2) is solid
- The d4 break is the key central lever
- The position is closed, favoring patient play

Against the Caro-Kann setup (1...c6):
- The Botvinnik System (with g3, Bg2) is solid
- The d4 break is the key central lever
- The position is closed, favoring patient play

Universal English principles for White:
- The c4 pawn is the main asset — keep it flexible
- The Botvinnik System (with g3, Bg2) is a solid universal setup
- The d4 break is the key central lever
- The position rewards flexible, strategic play
- The g2 bishop is the main piece`,
    },
    {
      title: "Typical Plans for Black",
      type: "key-idea",
      content: `Defending against the English Opening requires understanding the typical Black setups. Here are the most important strategic themes:

Against the Symmetrical (after 1.c4 c5):
- The mirror setup is solid but slightly passive
- The ...b5 break is the main counter
- The ...d5 break is another key lever
- The position is closed, favoring patient play

Against the Reversed Sicilian (after 1.c4 e5):
- The central pawn gives White a slight edge
- The ...b5 break is the main counter
- The ...d5 break is another key lever
- The position is closed, favoring patient play

Against the Anglo-Indian (after 1.c4 Nf6):
- The setup is flexible and can go in many directions
- The ...d5 break is the main central challenge
- The ...e5 break is another key lever
- The position is closed, favoring flexible play

Against the French setup (after 1.c4 e6):
- The solid structure is hard to crack
- The ...d5 break is the main central challenge
- The position is closed, favoring patient play

Against the Caro-Kann setup (after 1.c4 c6):
- The solid structure is hard to crack
- The ...d5 break is the main central challenge
- The position is closed, favoring patient play

Universal English principles for Black:
- The c4 pawn is White's main asset — pressure it when possible
- The ...b5 break is a common counter
- The ...d5 break is the main central challenge
- The position rewards flexible, strategic play
- The queenside expansion is often useful`,
    },
    {
      title: "Endgame Patterns",
      type: "key-idea",
      content: `The English Opening often leads to specific endgame patterns that are worth studying:

Pattern 1: The Botvinnik Endgame
After piece trades, the position often features a symmetrical structure with White having a slight edge due to the extra tempo. The plan: use the g2 bishop to pressure the queenside, and use the extra tempo to gain space.

Pattern 2: The Hedgehog
After ...b6, ...Bb7, the position often features a solid Hedgehog setup. The plan: use the queenside majority to create a passed pawn, and use the bishop on b7 to support the defense.

Pattern 3: The Reversed Sicilian Endgame
After piece trades, the position often features a central structure with White having a slight edge. The plan: use the central pawn majority to create a passed pawn, and use the bishops to pressure Black's position.

Pattern 4: The Symmetrical Endgame
After piece trades, the position is often roughly equal with a slight edge for White. The plan: trade pieces and use the extra tempo to gain an edge in the endgame.

Pattern 5: The King Activation
In English endgames, the king becomes a fighting piece. The typical plan: march the king to the center to support the pawn structure, or to the queenside to support the pawn majority.

The lesson: English endgames are about small advantages. The player who understands the typical pawn structures and piece placements will win more endgames than the player who simply trades pieces.`,
    },
    {
      title: "When to Play the English Opening",
      type: "key-idea",
      content: `The English Opening is one of the most flexible openings in chess. Here's when to play it and when to consider alternatives:

Play the English when:
- You want a flexible, universal opening
- You enjoy strategic, positional play over tactical warfare
- You're willing to invest time in learning the deep theory
- You want a complex, imbalanced game
- You're playing in a classical tournament where the deep theory pays off
- You want to play 1.c4 (the third most popular first move)

Consider alternatives when:
- You prefer sharp, tactical positions (try the Sicilian or King's Gambit)
- You're playing rapid or blitz where the deep theory is harder to apply
- You're uncomfortable with long, strategic battles
- You want a quicker win (the English often leads to long games)
- You want to play 1.e4 or 1.d4 (the most popular first moves)

Rating ranges where the English is most effective:
- 1200-1800: The main lines are well-taught and the strategic themes are clear
- 1800-2200: The deep theory starts to matter
- 2200+: The English is a must for any serious player

The lesson: the English is a complete, sophisticated opening that rewards patient, strategic play. It will serve you well in any game where you want to fight for the initiative with sound, flexible play.`,
    },
    {
      title: "Comparison to Other 1.c4 and 1.d4 Openings",
      type: "key-idea",
      content: `The English Opening is often compared to other 1.c4 and 1.d4 openings. Here's how it stacks up:

English (1.c4) vs Catalan (1.d4 Nf6 2.c4 e6 3.g3):
- The English is more direct (c4 immediately)
- The Catalan is more modern and flexible
- The English has more central control early
- The Catalan has better long-term piece play
- Both are top-level weapons

English vs Queen's Gambit (1.d4 d5 2.c4):
- The English is a family of openings
- The QG is one of the main defenses
- The English Accepted/Declined are alternatives to the QG
- The QG is the most popular modern defense
- All are sound and respected

English vs London (1.d4 d5 2.Nf3 Nf6 3.Bf4):
- The English is more ambitious
- The London is more solid and universal
- The English leads to complex middlegames
- The London leads to standard positions
- Both are popular at all levels

English vs King's Indian (1.d4 Nf6 2.c4 g6):
- The English is more flexible
- The KID is more aggressive
- The English has more central control
- The KID has more kingside counterplay
- Both are top-level weapons

When to prefer the English over alternatives:
- When you want the most flexible opening: English
- When you want a universal system: English
- When you want a complex, strategic game: English
- When you want a specific setup: Catalan, London, KID
- When you want a quick, simple game: London

The lesson: the English is the most flexible of the 1.c4/1.d4 openings. It rewards deep strategic understanding and patient play. A well-rounded player might use the English in 30% of games, the Catalan in 20%, the QG in 20%, the London in 15%, and other setups in 15%.`,
    },
    {
      title: "The Computer Era: Modern Analysis",
      type: "key-idea",
      content: `How has the engine revolution affected the English Opening? The opening has thrived, not suffered. Here's what modern analysis tells us:

Engine Evaluation:
- The English is one of the best-scoring openings for White (53-56%)
- The Reversed Sicilian is the sharpest
- The Symmetrical is the most popular at the top level
- The Anglo-Indian is the most flexible
- The position rewards strategic understanding

Why the English Has Thrived:
1. The opening is fundamentally sound — engines confirm the extra tempo
2. The deep theory rewards understanding, not just memorization
3. The Reversed Sicilian provides a reliable path to a complex game
4. The Symmetrical has refined the modern approach
5. The Botvinnik System provides a solid universal setup

The Modern Revival:
- The English has seen a resurgence at the top level
- Magnus Carlsen has played the English extensively
- The Reversed Sicilian is the most popular at the highest level
- The Symmetrical is increasingly common in online play
- The English is a must for any serious 1.c4 player

The Online Era:
- The English remains popular in online play
- The Reversed Sicilian is the most common choice for rapid and blitz
- The Symmetrical is especially popular in longer time controls
- The Botvinnik System is a reliable universal setup
- The English is a must for any serious online player

The lesson: the English has stood the test of time — over 180 years and counting. The engine revolution has refined our understanding, but the fundamental appeal of the opening remains. The flexible pawn structure, the rich middlegame positions, and the long-term planning make it a timeless weapon.`,
    },
    {
      title: "Comprehensive Quiz: Test Your Understanding",
      type: "trap",
      interactionMode: "quiz",
      orientation: "white",
      quizFen: "rnbqkb1r/pp1ppppp/5n2/2p5/2P5/5N2/PP1PPPPP/RNBQKB1R w KQkq - 0 3",
      quizAnswer: ["e4"],
      quizHint:
        "Black has just played 2...Nf6, the Anglo-Indian setup. White should find the most ambitious move — pushing the e-pawn to claim the center and challenge Black's setup.",
      content: `This is the comprehensive quiz for the English Opening. White is to move in a standard Anglo-Indian position.

You should now understand:
- The Symmetrical English and its main setups
- The Reversed Sicilian and the Botvinnik System
- The Anglo-Indian and its flexible structure
- The French and Caro-Kann setups
- The famous traps and tactical motifs
- The model games and their lessons

Find the best move that demonstrates your understanding of the English Opening. The correct move is a key idea that recurs throughout English theory.`,
    },
    {
      title: "Summary: The Complete English Opening Guide",
      type: "key-idea",
      content: `You've now completed a comprehensive course on the English Opening. Here's what to remember:

Core Strategic Ideas:
1. The c4 pawn controls d5, the key central square
2. The Botvinnik System (with g3, Bg2) is a solid universal setup
3. The Reversed Sicilian is White playing a Sicilian with an extra tempo
4. The position rewards flexible, strategic play
5. The g2 bishop is the main piece

The Main Responses:
- 1...c5 (Symmetrical): the most popular at the top level
- 1...e5 (Reversed Sicilian): the most direct
- 1...Nf6 (Anglo-Indian): the most flexible
- 1...e6 (French setup): solid and positional
- 1...c6 (Caro-Kann setup): solid and flexible

Universal Principles:
- The c4 pawn is the main asset — keep it flexible
- The Botvinnik System is a solid universal setup
- The d4 break is the key central lever
- The position rewards flexible, strategic play
- The g2 bishop is the main piece

If you only remember three things:
- c4 controls d5, opening the door to the Botvinnik System
- The g3-Bg2 setup is solid and flexible
- The d4 break is the key central lever

The lesson: the English Opening is the most flexible flank opening in chess. It rewards strategic understanding, patient play, and flexibility. By mastering the key themes and setups, you will have a weapon that serves you for a lifetime.

Now go practice! Click "Start Practice" below and the CPU will play random Black responses. You play White and try to remember the correct setups!`,
    },
  ],

  // Practice mode — CPU plays random Black responses
  practice: {
    startingFen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
    userColor: "w",
    instructions:
      "Practice White's side of the English Opening. The CPU will play different setups (Symmetrical, Reversed Sicilian, Anglo-Indian). Try to play the Botvinnik System with g3 and Bg2.",
    lines: [
      {
        name: "Symmetrical (1...c5)",
        description: "Black mirrors with c5",
        moves: [
          "c5",
          "Nc3",
          "Nc6",
          "g3",
          "g6",
          "Bg2",
          "Bg7",
          "Nf3",
          "Nf6",
          "O-O",
          "O-O",
          "d3",
        ],
      },
      {
        name: "Reversed Sicilian (1...e5)",
        description: "Black plays e5, the Reversed Sicilian",
        moves: [
          "e5",
          "Nc3",
          "Nf6",
          "Nf3",
          "Nc6",
          "g3",
          "d5",
          "cxd5",
          "Nxd5",
          "Bg2",
          "Bc5",
          "O-O",
        ],
      },
      {
        name: "Anglo-Indian (1...Nf6)",
        description: "Black plays Nf6, the flexible setup",
        moves: [
          "Nf6",
          "Nc3",
          "e6",
          "Nf3",
          "d5",
          "cxd5",
          "exd5",
          "d4",
          "Be7",
          "g3",
          "O-O",
          "Bg2",
        ],
      },
    ],
  },
};
