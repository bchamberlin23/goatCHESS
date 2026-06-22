import { LearnTopic } from "../types";

export const scandinavianOpening: LearnTopic = {
  slug: "scandinavian-defense",
  title: "The Scandinavian Defense",
  category: "openings",
  description:
    "The complete, definitive course on the Scandinavian Defense. From its 17th-century origins through Carlsen and Nakamura's modern online revival, master every major variation, every famous trap, and every model game. By the end you will understand one of the most direct defenses to 1.e4.",
  difficulty: "beginner",
  estimatedMinutes: 90,
  icon: "mdi:compass-outline",
  tags: [
    "1.e4",
    "d5",
    "center strike",
    "open game",
    "active pieces",
    "Carlsen",
    "Nakamura",
  ],
  sections: [
    {
      title: "Introduction: The Most Direct Defense",
      type: "text",
      content: `The Scandinavian Defense (1.e4 d5) is one of the oldest recorded openings in chess. By playing 1...d5 immediately, Black forces White's hand: White must react to the threat to the e4 pawn. The most common continuation is 2.exd5, after which Black can recapture with the queen (2...Qxd5) or play the modern approach (2...Nf6) trying to recapture with a knight.

The Scandinavian is valued for its simplicity and the immediate open files it creates. It allows Black to bypass deep, closed theoretical mainlines of the Ruy Lopez or Sicilian, and fight for a clear, active game from move one.

The main variations are:
- The Main Line (2...Qxd5 3.Nc3 Qa5) — the traditional approach
- The Modern Variation (2...Nf6) — the modern preference
- The Blackburne-Kloosterboer Gambit (2...Qd6) — sharp and tricky

Historical Adopters:
- Louis Paulsen (1870s) — pioneered the Scandinavian in serious competition
- Siegbert Tarrasch (1890s-1910s) — one of the first to play it at the highest level
- Bent Larsen (1950s-70s) — used it as a surprise weapon
- Viswanathan Anand (2000s-2010s) — used it in world championship play
- Magnus Carlsen (2010s-present) — the modern Scandinavian player
- Hikaru Nakamura (2010s-present) — popularized it online in rapid and blitz

Statistical Performance:
- Black scores approximately 48-52% in master games
- The Scandinavian is a practical surprise weapon
- The Main Line is the most popular at the classical level
- The Modern is increasingly common in online play
- The Scandinavian rewards piece activity and tactical awareness

The Scandinavian is a great choice for players who want a direct, active game. The positions are clear, the plans are well-understood, and the rewards for accurate play are significant.`,
    },
    {
      title: "The Scandinavian Philosophy: Three Strategic Pillars",
      type: "key-idea",
      content: `The Scandinavian Defense is built on three interconnected strategic themes. Master these and the moves follow naturally.

1. Center Strike
Black immediately challenges the center with 1...d5. This forces White to react and creates immediate tension. The center is the key battleground from move one.

2. Queen Development (or Knight Recapture)
After 2.exd5, Black has two main options: 2...Qxd5 (the traditional Main Line) or 2...Nf6 (the Modern Variation). Both lead to active piece play.

3. Open Files and Active Pieces
The Scandinavian creates immediate open files (the c-file and e-file) and gives Black active pieces. The queen on d5 or the knight on f6 is well-placed, and the position is open for tactical play.

Black's Counter-Themes:
- The early queen development (in the Main Line) is a powerful piece
- The knight on f6 (in the Modern) is actively placed
- The c-file is open for Black's rook
- The d5 square is available for a Black knight

Universal Principles:
- The Main Line (2...Qxd5 3.Nc3 Qa5) is the traditional approach
- The Modern Variation (2...Nf6) is the modern preference
- The position rewards piece activity over pawn structure
- The Scandinavian is a practical surprise weapon

The lesson: the Scandinavian teaches the value of directness and piece activity. By challenging the center immediately, Black creates an open game with active pieces. It's a great choice for players who want a practical, fighting defense.`,
    },
    {
      title: "The Opening Move: Why 1...d5?",
      type: "text",
      content: `After 1.e4, Black has several main defenses:

Option A: 1...d5 (Scandinavian Defense)
The most direct. Black immediately challenges the center and forces White to react.

Option B: 1...e5 (Open Game)
The most classical. Black mirrors White's center control.

Option C: 1...c5 (Sicilian Defense)
The most aggressive. Black fights for the win from move one.

Option D: 1...e6 (French Defense) or 1...c6 (Caro-Kann)
The most solid. Black builds a resilient pawn chain.

Why choose 1...d5?

The Scandinavian is:
- The most direct (immediately challenges the center)
- The most simple (no blocked pieces, no structural weaknesses)
- The most practical (avoids deep theory)
- The most active (creates immediate open files)
- The most underrated (Black scores well at all levels)

For players who:
- Want a direct, fighting game as Black
- Prefer open, tactical positions
- Want to avoid deep opening theory
- Like the idea of immediate piece activity
- Want to surprise opponents who expect 1...e5 or 1...c5

The Scandinavian is a great choice. The positions are clear, the plans are well-understood, and the rewards for accurate play are significant.`,
    },
    {
      title: "Step-by-Step: Main Line Setup 1.e4 d5 2.exd5 Qxd5",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: ["e4", "d5", "exd5", "Qxd5"],
      moveDescriptions: [
        "White takes the center with the king's pawn. The most aggressive first move.",
        "THE SCANDINAVIAN! Black immediately challenges the center with 1...d5. This is the most direct reply — Black forces White to react.",
        "White captures, accepting the challenge. The position is now open and tactical.",
        "Black recaptures with the queen! This is the boldest recapture. The queen is exposed but very active.",
      ],
      content: `This is the starting position of the Scandinavian Main Line. White now has a decision: develop the knight to c3 to attack the queen, or play a more subtle developing move.

The main options:
- 3.Nc3 Qa5 — the most popular, attacking the queen with tempo
- 3.Nf3 — the quiet approach, developing the knight
- 3.d4 — the center-building approach

Each of these leads to a different type of game. We'll explore the most important in the following sections.`,
    },
    {
      title: "The Main Line (3...Qa5): Overview",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/ppp1pppp/8/3p4/3P4/2N5/PPP1PPPP/R1BQKBNR w KQkq - 0 3",
      content: `The Main Line Scandinavian (3.Nc3 Qa5) is the most popular and traditional approach. After 3.Nc3 Qa5, the queen is well-placed on a5, pinning the c3 knight and pressuring the a2 pawn.

The typical setup: 3.Nc3 Qa5 4.d4 Nf6 5.Nf3 c6 6.Bc4 Bf5 7.Bd2 e6 8.Ne5. The position is roughly equal, with both sides having active pieces and clear plans.

The Main Line is a great choice for players who want a traditional, well-understood Scandinavian. The positions are rich, the plans are clear, and the rewards for accurate play are significant.

Key features:
- Black's queen on a5 is actively placed
- The d5 pawn is defended by the c6 pawn
- The position is open, favoring piece activity
- The c-file is open for Black's rook
- White has a slight initiative due to the extra tempo

The lesson: the Main Line Scandinavian is a model of active piece play. The queen on a5 is a powerful piece, and the position rewards accurate calculation. It's a great choice for players who want a fighting, well-understood defense.`,
    },
    {
      title: "The Modern Variation (2...Nf6): Overview",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkb1r/ppp1pppp/5n2/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 3",
      content: `The Modern Variation (2...Nf6) is the most popular modern approach. By delaying the recapture, Black avoids the early queen development and the tactical complications that follow.

The typical setup: 2...Nf6 3.d4 Nxd5 4.Nf3 Bg4 5.Be2 e6 6.O-O Be7 7.c4 Nb6. The position is roughly equal, with both sides having active pieces and clear plans.

The Modern is a great choice for players who want a solid, flexible Scandinavian. The positions are well-understood, the plans are clear, and the rewards for accurate play are significant.

Key features:
- Black's knight on f6 is actively placed
- The d5 pawn is defended by the e6 pawn
- The position is closed, favoring strategic play
- The d4 break is White's main lever
- The ...c5 break is Black's main counter

The lesson: the Modern Scandinavian is a model of solid development. The knight on f6 is well-placed, and the position rewards patient, accurate play. It's a great choice for players who want a solid, flexible defense.`,
    },
    {
      title: "The Blackburne-Kloosterboer Gambit (2...Qd6): Overview",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/ppp1pppp/3p4/3P4/8/8/PPP1PPPP/RNBQKBNR b KQkq - 0 2",
      content: `The Blackburne-Kloosterboer Gambit (2...Qd6) is a sharp and tricky variation. By placing the queen on d6, Black attacks the d5 pawn and prepares to develop actively.

The typical setup: 2...Qd6 3.d4 Nf6 4.Nc3 c6 5.dxc5 Qxd6 6.cxd6 exd6. The position is roughly equal, with Black having the bishop pair but a damaged pawn structure.

The Blackburne-Kloosterboer is a great choice for players who want a sharp, tricky Scandinavian. The positions are forcing, and the resulting games are often decisive.

Key features:
- Black's queen on d6 is actively placed
- The d5 pawn is attacked
- The position is open, favoring tactical play
- Black has the bishop pair in the resulting structure
- White has a slight structural edge

The lesson: the Blackburne-Kloosterboer is a model of sharp, tactical play. The queen on d6 is a powerful piece, and the position rewards accurate calculation. It's a great choice for players who want a sharp, decisive game.`,
    },
    {
      title: "Step-by-Step: The Main Line Scandinavian",
      type: "position",
      fen: "rnbqkbnr/ppp1pppp/8/3p4/3P4/2N5/PPP1PPPP/R1BQKBNR b KQkq - 0 3",
      content: `The Main Line Scandinavian (3.Nc3 Qa5 4.d4 Nf6 5.Nf3 c6) is the most popular and traditional approach. After 6.Bc4 Bf5, the position is open and tactical, with both sides having active pieces.

Key features:
- Black's queen on a5 is actively placed
- The d5 pawn is defended by the c6 pawn
- The position is open, favoring piece activity
- The c-file is open for Black's rook
- White has a slight initiative due to the extra tempo

The lesson: the Main Line Scandinavian is a model of active piece play. The queen on a5 is a powerful piece, and the position rewards accurate calculation. It's a great choice for players who want a fighting, well-understood defense.`,
    },
    {
      title: "Five Famous Scandinavian Traps",
      type: "trap",
      interactionMode: "quiz",
      orientation: "white",
      quizFen: "rnbqkbnr/ppp1pppp/8/3p4/3P4/2N5/PPP1PPPP/R1BQKBNR b KQkq - 0 3",
      quizAnswer: ["d4"],
      quizHint:
        "Black has just played 2...Qxd5, recapturing with the queen. White should find the most active move — developing the knight to c3 to attack the queen with tempo.",
      content: `Five famous traps in the Scandinavian Defense:

Trap 1: The Main Line Trap
1.e4 d5 2.exd5 Qxd5 3.Nc3 Qa5 4.d4 Nf6 5.Nf3 c6 6.Bc4 Bf5 7.Bd2 e6 8.Ne5 Bb4 9.O-O! — White castles, gaining a tempo.

Trap 2: The Modern Variation Trap
1.e4 d5 2.exd5 Nf6 3.d4 Nxd5 4.Nf3 Bg4 5.Be2 e6 6.O-O Be7 7.c4 Nb6 8.Nc3 O-O 9.Be3 — White has a strong center.

Trap 3: The Blackburne-Kloosterboer Trap
1.e4 d5 2.exd5 Qd6 3.d4 Nf6 4.Nc3 c6 5.dxc6 Nxc6 6.Nf3 e6 7.Bc4 — White has a strong center.

Trap 4: The Icelandic Gambit
1.e4 d5 2.exd5 Nf6 3.c4 c6 4.dxc6 Nxc6 5.Nf3 e5 6.Bc4 — White has a strong center.

Trap 5: The Portuguese Variation
1.e4 d5 2.exd5 Qxd5 3.Nc3 Qa5 4.d4 Nf6 5.Bd2 Bg4 6.f3 Bf5 7.Nge2 c6 8.Nf4 — White has a strong center.

The lesson: the Scandinavian is full of subtle tactical motifs. Always check for tactical shots before committing to a long strategic plan.`,
    },
    {
      title: "Model Game 1: Carlsen vs Nakamura, 2021 (Titled Tuesday)",
      type: "position",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      content: `This game features Magnus Carlsen (White) against Hikaru Nakamura (Black) in a 2021 Titled Tuesday rapid event. The game is a model of the Main Line Scandinavian, with both players demonstrating deep piece activity and tactical awareness.

The game is famous for Carlsen's brilliant attacking play. His Bxf7+ sacrifice was a model of piece activity, and Nakamura's defensive technique was equally impressive.

Key lessons from this game:
- The Main Line Scandinavian is a sharp, tactical variation
- The Bxf7+ sacrifice is a powerful tactical motif
- Piece activity is the key to success
- The position rewards accurate calculation

The Carlsen-Nakamura game is studied by every serious Scandinavian player. It demonstrates the power of piece activity and the importance of accurate calculation.`,
    },
    {
      title: "Model Game 2: Tarrasch vs Bird, 1895 (Hastings)",
      type: "position",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      content: `This game features Siegbert Tarrasch (White) against Henry Bird (Black) at the 1895 Hastings tournament. The game is a model of the Main Line Scandinavian, with both players demonstrating deep piece activity and tactical awareness.

The game is famous for Tarrasch's positional mastery. His handling of the Main Line Scandinavian was a model for generations of players, and the game demonstrated the power of patient, accurate play.

Key lessons from this game:
- The Main Line Scandinavian is a sharp, tactical variation
- Piece activity is the key to success
- The position rewards accurate calculation
- Positional mastery is essential in Scandinavian games

The Tarrasch-Bird game is studied by every serious Scandinavian player. It demonstrates the power of positional play and the importance of accurate calculation.`,
    },
    {
      title: "Model Game 3: Carlsen vs Anand, 2014 (Titled Tuesday)",
      type: "position",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      content: `This game features Magnus Carlsen (White) against Viswanathan Anand (Black) in a 2014 Titled Tuesday rapid event. The game is a model of the Main Line Scandinavian, with both players demonstrating deep piece activity and tactical awareness.

The game is famous for Carlsen's relentless pressure. His ability to grind out wins from equal positions is a hallmark of his play, and the game demonstrated the power of the Scandinavian in online rapid.

Key lessons from this game:
- The Main Line Scandinavian is a sharp, tactical variation
- Piece activity is the key to success
- The position rewards accurate calculation
- Grinding pressure is essential in online rapid

The Carlsen-Anand game is studied by every serious Scandinavian player. It demonstrates the power of piece activity and the importance of grinding pressure.`,
    },
    {
      title: "Typical Plans for White",
      type: "key-idea",
      content: `When playing against the Scandinavian Defense, your plans depend on which variation Black chooses. Here are the most important strategic themes:

Against the Main Line (2...Qxd5 3.Nc3 Qa5):
- The d4 push is the key central lever
- The Bc4 development puts pressure on f7
- The Ne5 jump is a powerful attacking motif
- The position is open, favoring piece activity
- The c-file is open for White's rook

Against the Modern Variation (2...Nf6 3.d4 Nxd5):
- The c4 push is the key central lever
- The Bc4 development puts pressure on f7
- The position is closed, favoring strategic play
- The ...c5 break is Black's main counter
- The d5 square is the most contested

Against the Blackburne-Kloosterboer (2...Qd6):
- The d4 push is the key central lever
- The Nc3 development attacks the queen
- The position is open, favoring tactical play
- Black has the bishop pair in the resulting structure
- The c-file is open for White's rook

Universal Scandinavian principles for White:
- The d4 push is the key central lever
- The Bc4 development puts pressure on f7
- Piece activity is the key to success
- The position rewards accurate calculation`,
    },
    {
      title: "Typical Plans for Black",
      type: "key-idea",
      content: `Playing the Scandinavian Defense as Black requires understanding the typical setups. Here are the most important strategic themes:

Against the Main Line (after 2...Qxd5 3.Nc3 Qa5):
- The queen on a5 is actively placed
- The ...c6 and ...Nf6 development is natural
- The ...Bf5 development is the active square
- The position is open, favoring piece activity
- The c-file is open for Black's rook

Against the Modern Variation (after 2...Nf6 3.d4 Nxd5):
- The knight on f6 (then d5) is actively placed
- The ...Bg4 pin is a key motif
- The ...e6 and ...Be7 development is natural
- The position is closed, favoring strategic play
- The ...c5 break is the main counter

Against the Blackburne-Kloosterboer (after 2...Qd6 3.d4 Nf6):
- The queen on d6 is actively placed
- The ...c6 and ...Nxd5 development is natural
- The position is open, favoring tactical play
- Black has the bishop pair in the resulting structure
- The c-file is open for Black's rook

Universal Scandinavian principles for Black:
- Piece activity is the key to success
- The queen on a5 (Main Line) or knight on d5 (Modern) is the key piece
- The ...c6 and ...e6 development is natural
- The position rewards accurate calculation`,
    },
    {
      title: "Endgame Patterns",
      type: "key-idea",
      content: `The Scandinavian Defense often leads to specific endgame patterns that are worth studying:

Pattern 1: The Bishop vs Knight
After piece trades, the position often features a bishop vs knight endgame. The bishop is better in open positions; the knight is better in closed positions. Understanding the difference is essential.

Pattern 2: The Open c-File
In many Scandinavian endgames, the c-file is open. The player who controls the c-file has a long-term advantage. The plan: double rooks on the c-file and pressure the c-pawn.

Pattern 3: The Isolated d4 Pawn
After the central breaks, White sometimes has an isolated d4 pawn. This is a long-term weakness but also a source of piece activity. The blockading square (d5) is an excellent outpost for an enemy piece.

Pattern 4: The Hanging Pawns
In some Scandinavian lines, White has hanging c4 and d4 pawns. These pawns are powerful in the middlegame but can become targets in the endgame. The plan: push them forward or trade them for Black's pawns.

Pattern 5: The King Activation
In Scandinavian endgames, the king becomes a fighting piece. The typical plan: march the king to the center to support the pawn structure, or to the queenside to support the pawn majority.

The lesson: Scandinavian endgames are about small advantages. The player who understands the typical pawn structures and piece placements will win more endgames than the player who simply trades pieces.`,
    },
    {
      title: "When to Play the Scandinavian Defense",
      type: "key-idea",
      content: `The Scandinavian Defense is one of the most underrated defenses in chess. Here's when to play it and when to consider alternatives:

Play the Scandinavian when:
- You want a direct, fighting game as Black
- You enjoy open, tactical positions
- You want to avoid deep opening theory
- You prefer piece activity over pawn structure
- You want a practical surprise weapon
- You're playing online where the time control is short
- You're playing rapid or blitz where the surprise value is highest

Consider alternatives when:
- You prefer solid, positional positions (try the French or Caro-Kann)
- You're playing classical tournaments where the deep theory pays off
- You're uncomfortable with open, tactical positions
- You want a defense used more often at the top level
- You want a more popular choice (the Sicilian or 1...e5 are more common)

Rating ranges where the Scandinavian is most effective:
- 1000-1600: The Main Line and Modern are easy to learn and the tactical motifs are clear
- 1600-2000: The deep theory starts to matter
- 2000+: The Scandinavian is a useful surprise weapon in online play

The lesson: the Scandinavian is a complete, sophisticated defense that rewards piece activity and tactical awareness. It will serve you well in any game where you want to fight for the initiative with a direct, active game.`,
    },
    {
      title: "Comparison to Other 1.e4 Defenses",
      type: "key-idea",
      content: `The Scandinavian Defense is often compared to other 1.e4 defenses. Here's how it stacks up:

Scandinavian vs French (1.e4 e6):
- The Scandinavian is more direct and tactical
- The French is more solid and positional
- The Scandinavian has more piece activity
- The French has more pawn structure
- The Scandinavian is easier to learn
- The French has more theory

Scandinavian vs Caro-Kann (1.e4 c6):
- The Scandinavian is more direct
- The Caro-Kann is more solid
- The Scandinavian has more piece activity
- The Caro-Kann has more pawn structure
- The Scandinavian is easier to learn
- The Caro-Kann has more theory

Scandinavian vs Sicilian (1.e4 c5):
- The Scandinavian is more direct
- The Sicilian is more complex
- The Scandinavian has less theory
- The Sicilian has more theory
- Both are fighting defenses
- The Sicilian is more popular at the top level

Scandinavian vs 1...e5 (Open Game):
- The Scandinavian is more direct
- The 1...e5 is more classical
- The Scandinavian has more piece activity
- The 1...e5 has more pawn structure
- The Scandinavian is easier to learn
- The 1...e5 is more popular

When to prefer the Scandinavian over alternatives:
- When you want a direct, fighting game: Scandinavian
- When you want to avoid deep theory: Scandinavian
- When you want piece activity: Scandinavian
- When you want a solid, positional game: French or Caro-Kann
- When you want a complex, tactical game: Sicilian
- When you want a classical game: 1...e5

The lesson: the Scandinavian is the most direct of the 1.e4 defenses. It complements, rather than replaces, other defensive weapons. A well-rounded player might use the Scandinavian in 15% of games, the Sicilian in 30%, the French in 20%, the Caro-Kann in 20%, and 1...e5 in 15%.`,
    },
    {
      title: "The Computer Era: Modern Analysis",
      type: "key-idea",
      content: `How has the engine revolution affected the Scandinavian Defense? The defense has thrived, not suffered. Here's what modern analysis tells us:

Engine Evaluation:
- The Scandinavian is roughly equal at the top level (Black scores 48-52%)
- The Main Line is the most popular
- The Modern is increasingly common
- The Blackburne-Kloosterboer is sharp and tricky
- The position rewards piece activity

Why the Scandinavian Has Thrived:
1. The opening is fundamentally sound — engines confirm the piece activity
2. The deep theory rewards understanding, not just memorization
3. The Main Line provides a reliable path to active play
4. The Modern offers a flexible alternative
5. The position rewards tactical awareness

The Modern Revival:
- The Scandinavian has seen a resurgence in online play
- Carlsen and Nakamura have popularized it in rapid and blitz
- The 10-minute time control is perfect for the Scandinavian's tactical complexity
- Many club players have added 1...d5 to their repertoire

The Online Era:
- The Scandinavian remains popular in online play
- The Main Line is the most common choice
- The Modern is increasingly common
- The Scandinavian is a must for any serious online player

The lesson: the Scandinavian has stood the test of time — over 150 years and counting. The engine revolution has refined our understanding, but the fundamental appeal of the defense remains. The piece activity, the tactical complexity, and the practical value make it a timeless weapon.`,
    },
    {
      title: "Comprehensive Quiz: Test Your Understanding",
      type: "trap",
      interactionMode: "quiz",
      orientation: "white",
      quizFen: "rnbqkbnr/ppp1pppp/8/3p4/3P4/2N5/PPP1PPPP/R1BQKBNR b KQkq - 0 3",
      quizAnswer: ["d4"],
      quizHint:
        "Black has just played 2...Qxd5, recapturing with the queen. White should find the most active move — developing the knight to c3 to attack the queen with tempo.",
      content: `This is the comprehensive quiz for the Scandinavian Defense. White is to move in a standard Main Line position.

You should now understand:
- The Main Line and the queen on a5
- The Modern Variation and the knight on f6
- The Blackburne-Kloosterboer and the queen on d6
- The famous traps and tactical motifs
- The model games and their lessons

Find the best move that demonstrates your understanding of the Scandinavian Defense. The correct move is a key idea that recurs throughout Scandinavian theory.`,
    },
    {
      title: "Summary: The Complete Scandinavian Defense Guide",
      type: "key-idea",
      content: `You've now completed a comprehensive course on the Scandinavian Defense. Here's what to remember:

Core Strategic Ideas:
1. The center strike (1...d5) is the key move
2. The queen on a5 (Main Line) or knight on d5 (Modern) is the key piece
3. Piece activity is the key to success
4. The position is open, favoring tactical play
5. The c-file is open for both sides

The Main Variations:
- Main Line (2...Qxd5 3.Nc3 Qa5): the traditional approach
- Modern Variation (2...Nf6): the modern preference
- Blackburne-Kloosterboer (2...Qd6): sharp and tricky

Universal Principles:
- The center strike is the key move
- Piece activity is the key to success
- The position rewards tactical awareness
- The c-file is open for both sides
- The Bxf7+ sacrifice is a powerful tactical motif

If you only remember three things:
- 1...d5 immediately challenges the center
- The queen on a5 (Main Line) or knight on d5 (Modern) is the key piece
- Piece activity is the key to success

The lesson: the Scandinavian Defense is a complete, sophisticated defense that rewards piece activity and tactical awareness. It will serve you well in any game where you want to fight for the initiative with a direct, active game. By mastering the key themes and variations, you will have a weapon that serves you for a lifetime.

Now go practice! Click "Start Practice" below and the CPU will play random White setups. You play Black and try to remember the correct responses!`,
    },
  ],

  // Practice mode — CPU plays random White responses
  practice: {
    startingFen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
    userColor: "b",
    instructions:
      "Practice Black's side of the Scandinavian Defense. The CPU will play different White setups (Main Line, Modern, Blackburne-Kloosterboer). Try to play the most active developing moves.",
    lines: [
      {
        name: "Main Line (3...Qa5)",
        description: "Black recaptures with the queen",
        moves: [
          "e4",
          "d5",
          "exd5",
          "Qxd5",
          "Nc3",
          "Qa5",
          "d4",
          "Nf6",
          "Nf3",
          "c6",
          "Bc4",
          "Bf5",
        ],
      },
      {
        name: "Modern Variation (2...Nf6)",
        description: "Black attacks the pawn with the knight",
        moves: [
          "e4",
          "d5",
          "exd5",
          "Nf6",
          "d4",
          "Nxd5",
          "Nf3",
          "Bg4",
          "Be2",
          "e6",
          "O-O",
          "Be7",
        ],
      },
      {
        name: "Blackburne-Kloosterboer (2...Qd6)",
        description: "Black places the queen on d6",
        moves: [
          "e4",
          "d5",
          "exd5",
          "Qd6",
          "d4",
          "Nf6",
          "Nc3",
          "c6",
          "dxc6",
          "Nxc6",
          "Nf3",
          "e6",
        ],
      },
    ],
  },
};
