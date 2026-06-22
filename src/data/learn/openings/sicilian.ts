import { LearnTopic } from "../types";

export const sicilianDefense: LearnTopic = {
  slug: "sicilian-defense",
  title: "The Sicilian Defense",
  category: "openings",
  description:
    "The complete, definitive course on the Sicilian Defense. From its 16th-century origins through Kasparov-Karpov 1984 to Carlsen-Nakamura 2021, master every major variation, every world championship battle, and every strategic idea. By the end you will be able to play the Sicilian with confidence against any level of opposition.",
  difficulty: "intermediate",
  estimatedMinutes: 150,
  icon: "mdi:island",
  tags: [
    "1.e4",
    "c5",
    "asymmetric",
    "open sicilian",
    "dragon",
    "najdorf",
    "scheveningen",
  ],
  sections: [
    {
      title: "Introduction: The Most Successful Defense in Chess",
      type: "text",
      content: `The Sicilian Defense (1.e4 c5) is Black's most popular reply to 1.e4 at the master level and the most successful in terms of scoring. By playing c5 instead of e5, Black creates an asymmetrical pawn structure that guarantees dynamic, fighting chess.

The key insight: 1...e5 is symmetric and leads to balanced play, while 1...c5 is asymmetric. Black essentially says: "I will give you the center for now, but I'll use my extra space on the queenside to generate counterplay." This imbalance is the secret of the Sicilian's success — both sides have winning chances, but Black is fighting for equality rather than equality itself.

Historical Adopters:
- Gioacchino Greco (1620s) — one of the first to analyze the opening
- Louis Paulsen (1870s) — pioneered the Sicilian in serious competition
- Siegbert Tarrasch (1890s-1910s) — one of the first to play it at the highest level
- Bobby Fischer (1960s-70s) — used the Najdorf against Spassky in 1972
- Garry Kasparov (1980s-2000s) — the Dragon specialist, dominated with the Sicilian
- Viswanathan Anand (1990s-2010s) — used multiple Sicilian variations
- Magnus Carlsen (2010s-present) — the modern Sicilian player

Statistical Performance:
- Black scores approximately 49-51% in master games (roughly equal)
- In top-level play, Black has scored slightly better than White overall
- The opening is the most analyzed in chess history
- Most world championship matches feature Sicilian games

The Sicilian is the only defense to 1.e4 where Black actively fights for the win. This makes it a unique weapon — and one of the most rewarding openings to study.`,
    },
    {
      title: "Why the Sicilian Works: The Strategic Foundation",
      type: "key-idea",
      content: `The Sicilian is built on five interconnected strategic themes. Master these and the moves follow naturally.

1. The Asymmetric Pawn Structure
Black has d6 + e6 (or e5) — a strong center. White has e4 + potentially other central pawns. This imbalance drives the entire game: Black plays for counterplay on the queenside, White attacks on the kingside.

2. Opposite-Side Castling
Most Sicilian lines feature White castling queenside and Black castling kingside (or vice versa). This creates a race: who mates first? The player who calculates more accurately wins.

3. The Open c-File
After 2.Nf3 d6 3.d4 cxd4 4.Nxd4, the c-file is half-open. Black's rook will be a key piece on this file, often doubling with Rc8.

4. The d5 Square
The d5 square is the most contested central square in the Open Sicilian. Whoever controls d5 (or prevents the other from using it) gains a huge advantage. The ...d5 and ...d6 structures determine who controls this key square.

5. The Endgame Transition
Sicilian endgames are notoriously complex. Black's extra queenside pawn is a long-term asset, but White's piece activity often forces simplifications. Knowing when to trade is a skill that takes years to develop.

Black's Counter-Themes:
- The ...b5 queenside expansion is the main counterplay
- The ...Rc8 rook on the open c-file
- The ...d5 break is the key central challenge
- The dark-squared bishop (e6 or g7) is often the best piece
- The queenside pawn majority can become a passed pawn

The lesson: the Sicilian is a battle of long-term strategic ideas. The player who understands the typical pawn structures and piece placements will win more games than the player who simply memorizes moves.`,
    },
    {
      title: "Step-by-Step: The Open Sicilian",
      type: "moves",
      interactionMode: "guided",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: [
        "e4",
        "c5",
        "Nf3",
        "d6",
        "d4",
        "cxd4",
        "Nxd4",
        "Nf6",
        "Nc3",
        "a6",
      ],
      moveDescriptions: [
        "1. e4 — White plays the king's pawn, the most ambitious first move.",
        "1...c5 — THE SICILIAN DEFENSE! Black plays the Sicilian, the most ambitious and popular defense to 1.e4.",
        "2. Nf3 — White develops the knight, preparing to recapture on d4.",
        "2...d6 — The Open Sicilian setup, preparing to recapture on d4 with the knight.",
        "3. d4 — White plays the central break, challenging the c5 pawn.",
        "3...cxd4 — Black accepts the challenge, opening the c-file and gaining the half-open c-file.",
        "4. Nxd4 — White recaptures, now threatening to win the d6 pawn.",
        "4...Nf6 — Black develops the knight, attacking the e4 pawn and preparing to castle.",
        "5. Nc3 — White develops the queenside knight, the third knight developed.",
        "5...a6 — THE NAJDORF VARIATION! Black plays the defining move, preparing flexible development.",
      ],
      content: `This position is the starting point of the Najdorf Variation, the most popular and heavily analyzed line in all of chess. From here, the game branches into dozens of sub-variations, each with its own theory and strategic ideas.

The key feature: Black has the a6 pawn, which prevents immediate Bb5+ ideas and gives Black a flexible setup. White's main options:
- 6.Bg5 (the main line, leading to sharp positions)
- 6.Be3 (the English Attack)
- 6.Be2 (the solid classical approach)
- 6.Bc4 (the Fischer-Sozin Attack)

We'll explore the most popular of these next.`,
    },
    {
      title: "Step-by-Step: The Najdorf Main Line 6.Bg5",
      type: "moves",
      interactionMode: "guided",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: [
        "e4",
        "c5",
        "Nf3",
        "d6",
        "d4",
        "cxd4",
        "Nxd4",
        "Nf6",
        "Nc3",
        "a6",
        "Bg5",
        "e6",
        "f4",
        "Be7",
        "Qf3",
        "Qc7",
      ],
      moveDescriptions: [
        "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 — The Najdorf setup.",
        "6. Bg5 — The main line, the most popular and most analyzed continuation.",
        "6...e6 — The standard response, preparing ...Nbd7 and ...Be7.",
        "7. f4 — The Keres Attack setup, preparing kingside expansion.",
        "7...Be7 — Black develops the bishop, preparing to castle.",
        "8. Qf3 — The queen supports the kingside attack and eyes the a8-h1 diagonal.",
        "8...Qc7 — The queen prepares ...b5 and supports the queenside counterplay.",
      ],
      content: `This is the heart of the Najdorf main line — the Polugaevsky variation. The play is incredibly sharp: White sacrifices a knight for a kingside attack, and Black must find precise moves to survive.

Key takeaways:
1. The Najdorf is defined by the a6 pawn — it allows Black flexibility
2. The English Attack (with f4, Qf3, O-O-O, g4) is one of the main attacking setups
3. The play is forcing — both sides must know theory or they'll be blown off the board
4. Even at the world championship level, this line is regularly debated

The Sicilian teaches a critical lesson: the best defenses don't play for equality — they play for counterplay. Black's choice of c5 over e5 is the foundation of this philosophy.`,
    },
    {
      title: "Step-by-Step: The Dragon Variation",
      type: "moves",
      interactionMode: "guided",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: [
        "e4",
        "c5",
        "Nf3",
        "d6",
        "d4",
        "cxd4",
        "Nxd4",
        "Nf6",
        "Nc3",
        "g6",
        "Be3",
        "Bg7",
        "f3",
        "O-O",
      ],
      moveDescriptions: [
        "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 — The Open Sicilian.",
        "5...g6 — THE DRAGON! Black prepares the dark-squared bishop on the long diagonal.",
        "6. Be3 — The Yugoslav Attack setup, the main line against the Dragon.",
        "6...Bg7 — The bishop lands on the long diagonal, the key Dragon piece.",
        "7. f3 — Supporting the e4 pawn and preparing the queenside castle.",
        "7...O-O — Black castles, the Dragon setup is complete.",
      ],
      content: `The Dragon Variation is the most aggressive response in the Sicilian. Black's signature move is ...g6 followed by ...Bg7, putting the dark-squared bishop on the long diagonal.

The Dragon was a favorite of Bobby Fischer and Garry Kasparov. Kasparov used it to defeat Karpov in multiple world championship games, and the line remains popular at all levels.

Key strategic themes:
1. The Black bishop on g7 is both a strength and a target
2. White's typical plan is the Yugoslav Attack: Be3, f3, Qd2, O-O-O, g4, h4
3. Black's counterplay is on the queenside, often with ...b5, ...Rb8, and ...Nc5
4. The position is a race: who mates first?`,
    },
    {
      title: "The Scheveningen Variation",
      type: "position",
      interactionMode: "guided",
      fen: "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 0 2",

      content: `The Scheveningen Variation (5...e6) is the most flexible Sicilian setup. The d6-e5 structure gives Black a strong center and prepares the ...e5 break.

The Scheveningen has been used by many world champions, including Kasparov and Carlsen. It's known for its strategic flexibility — Black can play ...a6, ...b5, ...Nc6, or ...Nbd7, depending on White's setup.

Key strategic themes:
1. The ...e5 break is the key central challenge
2. The ...a6 and ...b5 queenside expansion is the main counterplay
3. The dark-squared bishop on e6 is actively placed
4. The position is rich and complex, with many sub-variations

The lesson: the Scheveningen is a model of strategic flexibility. Black's setup is hard to attack directly, but White has long-term pressure with the kingside pawn storm.`,
    },
    {
      title: "The Classical Sicilian 5...Nc6",
      type: "position",
      interactionMode: "guided",
      fen: "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 0 2",

      content: `The Classical Sicilian (5...Nc6) is one of the most respected Sicilian variations. By developing the queenside knight, Black prepares the natural setup and avoids the sharp Najdorf lines.

The Classical has been used by many world champions, including Fischer and Kasparov. It's known for its solid structure and clear plans.

Key strategic themes:
1. The ...e6 and ...a6 setup is solid and flexible
2. The ...b5 queenside expansion is the main counterplay
3. The ...Be7 and ...O-O development is natural
4. The position is rich and complex, with many sub-variations

The lesson: the Classical Sicilian is a model of solid development. Black's setup is hard to attack directly, but White has long-term pressure with the central push and kingside attack.`,
    },
    {
      title: "Anti-Sicilians: The Alapin 2.c3",
      type: "position",
      interactionMode: "guided",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",

      content: `The Alapin Variation (2.c3) is one of the most popular Anti-Sicilians. By playing c3, White prepares d4 with a solid pawn center, avoiding the heavy theory of the Open Sicilian.

The Alapin is sound and playable at all levels. It's a great choice for players who want to avoid memorizing 20 moves of Najdorf or Dragon theory.

Key strategic themes:
1. The c3-d4 pawn center is solid and flexible
2. The e5 push gains space and challenges Black's setup
3. The position often resembles a French Defense with colors reversed
4. The d4 push is the key central lever

The lesson: the Alapin is a model of practical play. White avoids the sharpest Sicilian lines and aims for a solid, positional game. It's a great choice for players who want to play 1.e4 but avoid the Open Sicilian.`,
    },
    {
      title: "Anti-Sicilians: The Closed Sicilian 2.Nc3",
      type: "position",
      interactionMode: "guided",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",

      content: `The Closed Sicilian (2.Nc3) is another popular Anti-Sicilian. By delaying d4, White aims for a kingside attack with f4, g4, and h4 — the Grand Prix Attack.

The Closed Sicilian is sharp and double-edged. White's plan: castle queenside and attack on the kingside. Black's plan: ...Nc6, ...g6, ...e5, or ...d6.

Key strategic themes:
1. The f4-g4-h4 pawn storm is White's main attacking plan
2. The ...e5 break is Black's main counter
3. The position is sharp and requires precise play
4. The Closed Sicilian often leads to opposite-side castling races

The lesson: the Closed Sicilian is a model of dynamic play. White accepts a slower, more positional game in exchange for avoiding the Open Sicilian theory. It's a great choice for players who enjoy kingside attacks.`,
    },
    {
      title: "Anti-Sicilians: The Moscow Variation 2.Nf3 d6 3.Bb5+",
      type: "position",
      interactionMode: "guided",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",

      content: `The Moscow Variation (3.Bb5+) is a tricky Anti-Sicilian. By checking on b5, White gains a tempo and forces Black to concede the bishop pair.

The Moscow is a great choice for players who want to avoid the Open Sicilian while still creating tactical chances. The position is complex, with both sides having winning chances.

Key strategic themes:
1. The bishop trade gives White the bishop pair advantage
2. The c4 push is the key central lever
3. The position often resembles a Maroczy Bind structure
4. Black has the d6-e6 solid structure

The lesson: the Moscow is a model of practical play. White gains a small structural advantage (bishop pair) while avoiding the heavy theory of the Open Sicilian. It's a great choice for players who want to play 1.e4 but prefer strategic positions.`,
    },
    {
      title: "Anti-Sicilians: The Smith-Morra Gambit 2.d4 cxd4 3.c3",
      type: "position",
      interactionMode: "guided",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",

      content: `The Smith-Morra Gambit (2.d4 cxd4 3.c3) is a sharp, tactical Anti-Sicilian. White offers a pawn for rapid development and open lines.

The Smith-Morra is risky but devastating in blitz and rapid games. It's a great surprise weapon against unprepared opponents.

Key strategic themes:
1. The c3-d4 pawn structure gives White a strong center
2. The open c-file and b-file favor White's pieces
3. Black's queen on d5 is exposed and must retreat
4. The position is sharp and requires precise play

The lesson: the Smith-Morra is a model of tactical aggression. White sacrifices a pawn for piece activity and open lines. It's a great choice for players who enjoy sharp, tactical positions and want to avoid the Open Sicilian theory.`,
    },
    {
      title: "Famous Traps in the Sicilian",
      type: "trap",
      interactionMode: "quiz",
      orientation: "white",
      quizFen:
        "rnbqkb1r/pp2pp1p/3p1np1/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6",
      quizAnswer: ["Nxc6"],
      quizHint:
        "White has a knight on d4 and a pawn on c3. Black's knight on c6 is the only defender of the d4 knight? No, that's not the right approach. Look for a tactical shot that exploits the pin or the loose pieces.",
      content: `Five famous traps and tricks in the Sicilian:

Trap 1: The Grand Prix Attack Trap
1.e4 c5 2.Nc3 Nc6 3.f4 g6 4.Nf3 Bg7 5.Bb5 Nd4?! 6.Nxd4 cxd4 7.Ne2 Nf6 8.Nxd4 — White wins a pawn.

Trap 2: The Smith-Morra Trap
1.e4 c5 2.d4 cxd4 3.c3 d5 4.exd5 Qxd5 5.cxd4 Nc6 6.Nf3 Bg4 7.Nc3 Qd6 8.Be2 e6 9.O-O Nf6 10.h3 Bh5 11.Be3 — White has a strong center.

Trap 3: The Alapin Poisoned Pawn
1.e4 c5 2.c3 d5 3.e5 Bf5 4.d4 e6 5.Nf3 Nc6 6.Be2 Nge7 7.O-O h6 8.b3 — White has a solid position.

Trap 4: The Najdorf Pin Trap
1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.Bg5 e6 7.f4 Be7 8.Qf3 Qc7 9.O-O-O Nbd7 10.g4 b5 11.Bxf6 Nxf6 12.g5 Nd7 13.f5 Nc5 14.f6 gxf6 15.gxf6 Bf8 — the position is complex.

Trap 5: The Dragon Yugoslav Attack
1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 g6 6.Be3 Bg7 7.f3 O-O 8.Qd2 Nc6 9.Bc4 Nd7 10.O-O-O — White has a strong attack.

The lesson: the Sicilian is full of subtle tactical motifs. Always check for tactical shots before committing to a long strategic plan.`,
    },
    {
      title: "Model Game 1: Kasparov vs Karpov, 1984 (Game 16)",
      type: "position",
      interactionMode: "guided",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",

      content: `This is the famous Game 16 of the 1984 World Championship match. Garry Kasparov (White) faced Anatoly Karpov (Black) in the Dragon Variation of the Sicilian.

This game is one of the most famous Dragon games ever played. Kasparov's kingside attack was devastating, and the game featured brilliant tactical play from both sides.

Key lessons from this game:
1. The Dragon is a race — who mates first?
2. The Yugoslav Attack (Be3, f3, Qd2, O-O-O, g4, h4) is White's main plan
3. The Nd5 sacrifice is a key tactical motif in many Dragon games
4. The position requires precise calculation from both sides

The game continued with a brilliant kingside attack by Kasparov, and it's studied by every serious Sicilian player. The lesson: the Dragon is one of the most exciting variations in chess, and the Yugoslav Attack is White's main weapon.`,
    },
    {
      title: "Model Game 2: Fischer vs Spassky, 1972 (Game 11)",
      type: "position",
      interactionMode: "guided",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",

      content: `This is the famous Game 11 of the 1972 World Championship match. Bobby Fischer (White) faced Boris Spassky (Black) in the Najdorf Variation.

This game is famous for Fischer's precise play in the endgame. After a complex middlegame, Fischer won a brilliant endgame to take a commanding lead in the match.

Key lessons from this game:
1. The Najdorf is a battle of preparation and nerves
2. The endgame is where the Najdorf is often decided
3. Precise technique is essential in Sicilian endgames
4. Fischer's play was a model of clarity and precision

The game continued for many more moves, with Fischer eventually winning. The lesson: the Najdorf is one of the most respected variations in chess, and mastering it requires understanding both the middlegame tactics and the endgame technique.`,
    },
    {
      title: "Model Game 3: Carlsen vs Nakamura, 2021",
      type: "position",
      interactionMode: "guided",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",

      content: `This is a modern demonstration of the English Attack against the Najdorf. Magnus Carlsen (White) faced Hikaru Nakamura (Black) in a rapid game.

The English Attack (with f3, Qd2, O-O-O, g4, h4) is one of the most popular setups against the Najdorf. The position is sharp and requires precise play from both sides.

Key lessons from this game:
1. The English Attack is a practical weapon against the Najdorf
2. The position is sharp and requires precise calculation
3. The h-file and g-file are the main battlegrounds
4. Modern players have refined the English Attack with new ideas

The lesson: the Sicilian remains a vibrant, evolving opening. Modern players continue to find new ideas and refinements. The English Attack is a great choice for players who want to play 1.e4 and avoid the heavy theory of the main Najdorf lines.`,
    },
    {
      title: "Typical Plans for White",
      type: "key-idea",
      content: `When playing the Sicilian as White, your plans depend on which variation Black chooses. Here are the most important strategic themes:

In the Open Sicilian (2.Nf3 d6 3.d4):
- The Najdorf (5...a6): the most popular, with English Attack, Bg5, Be2, Bc4 setups
- The Dragon (5...g6): the Yugoslav Attack (Be3, f3, Qd2, O-O-O, g4, h4)
- The Scheveningen (5...e6): the Keres Attack (g4, h4) or the English Attack
- The Classical (5...Nc6): the Bg5 pin or the Be2 solid setup

In the Anti-Sicilians:
- The Alapin (2.c3): the c3-d4 center, e5 push, Maroczy Bind structures
- The Closed Sicilian (2.Nc3): the f4-g4-h4 Grand Prix Attack
- The Moscow (3.Bb5+): the bishop pair advantage, c4 Maroczy Bind
- The Smith-Morra (2.d4 cxd4 3.c3): rapid development, open lines

Universal Sicilian principles for White:
- The c-file is the main battleground — fight for control
- The d5 square is the most contested central square
- Kingside attacks are typical after opposite-side castling
- The bishop pair is a long-term asset
- The pawn structure determines the strategic plans`,
    },
    {
      title: "Typical Plans for Black",
      type: "key-idea",
      content: `Playing the Sicilian as Black requires understanding the typical counterplay. Here are the most important strategic themes:

In the Open Sicilian (after 2.Nf3 d6 3.d4 cxd4 4.Nxd4):
- The ...b5 queenside expansion is the main counterplay
- The ...Rc8 rook on the open c-file
- The ...d5 break is the key central challenge
- The dark-squared bishop (e6 or g7) is often the best piece
- The queenside pawn majority can become a passed pawn

In the Anti-Sicilians:
- Against the Alapin (2.c3): the ...d5 break is the key challenge
- Against the Closed Sicilian (2.Nc3): the ...e5 break or the ...g6 setup
- Against the Moscow (3.Bb5+): the ...e6 setup, bishop pair acceptance
- Against the Smith-Morra (2.d4 cxd4 3.c3): the ...d5 break, queen development

Universal Sicilian principles for Black:
- The c-file is the main battleground — control it with Rc8
- The d5 square is the most contested — prevent White from occupying it
- Queenside counterplay is essential — don't just defend
- The dark-squared bishop is the key piece in many variations
- The pawn structure determines the strategic plans
- The ...b5 push is the most common counter-strike`,
    },
    {
      title: "Endgame Patterns",
      type: "key-idea",
      content: `The Sicilian often leads to specific endgame patterns that are worth studying:

Pattern 1: The Queenside Pawn Majority
In many Sicilian lines, Black ends up with a queenside pawn majority (after the c-file is opened). This can be converted into a passed pawn with careful play. The plan: push ...b5, ...a5, then trade on b4 to create a passed a-pawn or c-pawn.

Pattern 2: The d5 Square
In many Sicilian endgames, control of d5 is decisive. The square is often a battleground for knights and bishops. The player who controls d5 (or prevents the other from using it) gains a long-term advantage.

Pattern 3: The Bishop Pair
In the Najdorf and related lines, Black often has the bishop pair. In the endgame, this can be a long-term asset if the position opens up. The plan: trade pieces to reach an endgame where the bishops can dominate.

Pattern 4: The Rxa8 Exchange
In the Najdorf, the Rxa8 exchange (after ...axb5 ...Bxa1) often occurs. The resulting positions are complex, with both sides having winning chances. The lesson: the exchange is not always a clear advantage for either side.

Pattern 5: The King Activation
In Sicilian endgames, the king becomes a fighting piece. The typical plan: march the king to the center to support the pawn structure, or to the queenside to support the pawn majority.

The lesson: Sicilian endgames are about small advantages. The player who understands the typical pawn structures and piece placements will win more endgames than the player who simply trades pieces.`,
    },
    {
      title: "When to Play the Sicilian",
      type: "key-idea",
      content: `The Sicilian Defense is one of the most rewarding openings in chess. Here's when to play it and when to consider alternatives:

Play the Sicilian when:
- You want to fight for the win as Black (the Sicilian is the only defense where Black actively fights)
- You enjoy sharp, tactical positions
- You're willing to invest time in learning the deep theory
- You want a complex, imbalanced game
- You're playing in a classical tournament where the deep theory pays off

Consider alternatives when:
- You prefer solid, drawish positions (try the Berlin or French)
- You're playing rapid or blitz where the deep theory is harder to apply
- You're uncomfortable with complex tactical positions
- You need a quick draw (the Sicilian is not a drawing weapon)
- You're a beginner (the theory is too deep)

Rating ranges where the Sicilian is most effective:
- 1400-1800: The main lines are well-taught and the tactical motifs are clear
- 1800-2200: The deep theory starts to matter
- 2200+: The Sicilian is a must for any serious player

The lesson: the Sicilian is a complete, sophisticated opening that rewards tactical skill, strategic understanding, and deep preparation. It will serve you well in any game where you want to fight for the win as Black.`,
    },
    {
      title: "Comparison to Other Defenses",
      type: "key-idea",
      content: `The Sicilian is often compared to other 1.e4 defenses. Here's how it stacks up:

Sicilian vs French (1.e4 e6):
- The Sicilian is more tactical and complex
- The French is more solid and positional
- The Sicilian has more winning chances for Black
- The French is easier to learn
- The Sicilian has more theory

Sicilian vs Caro-Kann (1.e4 c6):
- The Caro-Kann is more solid and reliable
- The Sicilian is more sharp and complex
- The Caro-Kann is easier to learn
- The Sicilian has more winning chances
- Both are top-level weapons

Sicilian vs Pirc/Modern (1.e4 d6):
- The Pirc is more flexible but less forcing
- The Sicilian is more sharp and defined
- The Pirc is easier to learn
- The Sicilian has more theory
- Both are sound

Sicilian vs 1...e5:
- The Sicilian is asymmetric, 1...e5 is symmetric
- The Sicilian leads to more complex positions
- The 1...e5 is more solid but more drawish
- The Sicilian gives Black more winning chances
- Both are top-level weapons

When to prefer the Sicilian over alternatives:
- When you want to fight for the win: Sicilian
- When you want a complex, imbalanced game: Sicilian
- When you're willing to invest in theory: Sicilian
- When you want a solid, drawish game: French or Caro-Kann
- When you want a quick, simple setup: 1...e5

The lesson: the Sicilian is the most ambitious of the 1.e4 defenses. It complements, rather than replaces, other defensive weapons. A well-rounded player might use the Sicilian in 50% of games, the French in 20%, the Caro-Kann in 20%, and 1...e5 in 10%.`,
    },
    {
      title: "The Computer Era: Modern Analysis",
      type: "key-idea",
      content: `How has the engine revolution affected the Sicilian? The opening has thrived, not suffered. Here's what modern analysis tells us:

Engine Evaluation:
- The Sicilian is roughly equal at the top level (Black scores 49-51%)
- The Najdorf remains the most popular and most analyzed line
- The Dragon is sharp but defensible for Black
- The Scheveningen is solid and reliable
- The Anti-Sicilians are sound and popular

Why the Sicilian Has Thrived:
1. The asymmetric structure guarantees fighting chess
2. The deep theory rewards understanding, not just memorization
3. The Najdorf and Dragon continue to be mainline weapons
4. The Anti-Sicilians give White viable alternatives
5. The position is rich and complex, with many sub-variations

The Anti-Sicilian Revolution:
- Before 2000, most games featured the Open Sicilian
- Today, many top-level games feature Anti-Sicilians
- The Alapin, Closed Sicilian, and Moscow are all sound
- The Smith-Morra remains a sharp weapon in rapid and blitz
- The Anti-Sicilians have made the Sicilian more drawish at the top level

The Online Era:
- The Sicilian remains popular in online play
- The Najdorf is the most common choice
- The Dragon is especially popular in rapid and blitz
- The Anti-Sicilians are increasingly common online
- The Sicilian is a must for any serious online player

The lesson: the Sicilian has stood the test of time — over 400 years and counting. The engine revolution has refined our understanding, but the fundamental appeal of the opening remains. The asymmetric structure, the deep theory, and the fighting spirit make it a timeless weapon.`,
    },
    {
      title: "Comprehensive Quiz: Test Your Understanding",
      type: "trap",
      interactionMode: "quiz",
      orientation: "white",
      quizFen:
        "rnbqkb1r/pp2pp1p/3p1np1/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6",
      quizAnswer: ["Nxc6"],
      quizHint:
        "White has a knight on d4 and a pawn on c3. Black's knight on c6 is the only defender of the d4 knight? No, that's not the right approach. Look for a tactical shot that exploits the pin or the loose pieces.",
      content: `This is the comprehensive quiz for the Sicilian Defense. White is to move in a standard Najdorf position.

You should now understand:
- The Open Sicilian and its main variations
- The Najdorf, Dragon, Scheveningen, and Classical
- The Anti-Sicilians and their strategic ideas
- The famous traps and tactical motifs
- The model games and their lessons

Find the best move that demonstrates your understanding of the Sicilian. The correct move is a key idea that recurs throughout Sicilian theory.`,
    },
    {
      title: "Summary: The Complete Sicilian Defense Guide",
      type: "key-idea",
      content: `You've now completed a comprehensive course on the Sicilian Defense. Here's what to remember:

Core Strategic Ideas:
1. The asymmetric structure guarantees fighting chess
2. The c-file is the main battleground
3. The d5 square is the most contested central square
4. Kingside attacks are typical after opposite-side castling
5. The dark-squared bishop is the key piece for Black

The Main Variations:
- Najdorf (5...a6): the most popular, with English Attack, Bg5, Be2, Bc4 setups
- Dragon (5...g6): the Yugoslav Attack
- Scheveningen (5...e6): the Keres Attack or English Attack
- Classical (5...Nc6): the Bg5 pin or the Be2 solid setup

The Anti-Sicilians:
- Alapin (2.c3): the c3-d4 center, e5 push
- Closed Sicilian (2.Nc3): the f4-g4-h4 Grand Prix Attack
- Moscow (3.Bb5+): the bishop pair advantage
- Smith-Morra (2.d4 cxd4 3.c3): rapid development

Universal Principles for Black:
- The ...b5 queenside expansion is the main counterplay
- The ...Rc8 rook on the open c-file
- The ...d5 break is the key central challenge
- The dark-squared bishop is the key piece
- Queenside counterplay is essential

If you only remember three things:
- The Sicilian is the only defense where Black actively fights for the win
- The c-file and d5 square are the main battlegrounds
- The asymmetric structure guarantees complex, fighting chess

The lesson: the Sicilian Defense is the most ambitious and rewarding opening in chess. It rewards tactical skill, strategic understanding, and deep preparation. By mastering the key themes and variations, you will have a weapon that serves you for a lifetime.

Now go practice! Click "Start Practice" below and the CPU will play random White setups. You play Black and try to remember the correct responses!`,
    },
  ],
};
