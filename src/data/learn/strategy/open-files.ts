import { LearnTopic } from "../types";

export const openFiles: LearnTopic = {
  slug: "open-files",
  title: "Open Files: The Highway for Rooks",
  category: "strategy",
  description:
    "The complete, definitive course on Open Files and the 7th rank. From classic rook endgames to modern grandmaster play, learn how to use open files to invade the opponent's position and deliver checkmate.",
  difficulty: "intermediate",
  estimatedMinutes: 65,
  icon: "mdi:format-letter-case-upper",
  tags: [
    "open files",
    "rook",
    "seventh rank",
    "strategy",
    "invasion",
    "file control",
  ],
  sections: [
    {
      title: "Introduction: The Power of Open Files",
      type: "text",
      content: `An open file is a file with no pawns of either color. Open files are the highways for rooks and queens. The side that controls an open file has a significant strategic advantage.

The Famous Principle: A rook on an open file is worth more than a rook on a closed file. The rook can move freely on the open file, invading the opponent's position.

The Three Pillars of Open Files:
1. The Open File: A file with no pawns
2. The 7th Rank: A rook on the 7th rank is extremely powerful
3. The Doubled Rooks: Two rooks on an open file are devastating

Statistical Data:
- A rook on an open file is worth approximately 1-2 pawns more than a rook on a closed file
- A rook on the 7th rank is worth approximately 2-3 pawns more than a rook on the 1st rank
- Doubled rooks on an open file are worth approximately 4-5 pawns more than a single rook
- The side controlling an open file wins approximately 60% of games where material is equal

The lesson: open files are one of the most powerful strategic weapons. The player who understands how to control open files will win more games.`,
    },
    {
      title: "The Open File Philosophy: Three Strategic Pillars",
      type: "key-idea",
      content: `The Open File is built on three interconnected strategic themes.

1. Control the Open File
The first step is to control an open file. This is done by placing a rook (or queen) on the open file and preventing the opponent from doing the same.

2. Invade the 7th Rank
Once you control an open file, the next step is to invade the 7th rank. A rook on the 7th rank attacks the opponent's pawns and can deliver checkmate.

3. Doubled Rooks
When possible, double your rooks on an open file. Doubled rooks are extremely powerful and can dominate the position.

Universal Principles:
- Open files are highways for rooks and queens
- A rook on an open file is worth more than a rook on a closed file
- A rook on the 7th rank is extremely powerful
- Doubled rooks on an open file are devastating
- The side controlling an open file has a significant advantage

The lesson: open files are one of the most powerful strategic weapons. The player who understands how to control and exploit open files will win more games.`,
    },
    {
      title: "The 7th Rank: A Rook's Paradise",
      type: "key-idea",
      content: `The 7th rank is a rook's paradise. A rook on the 7th rank attacks the opponent's pawns, restricts the opponent's pieces, and can deliver checkmate.

Properties of a rook on the 7th rank:
1. It attacks the opponent's pawns on the 7th rank
2. It restricts the opponent's pieces
3. It can deliver checkmate (especially with the queen or a bishop)
4. It ties down the opponent's pieces to defending

The Famous 7th Rank Position:
After 1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. O-O Nf6 5. d3 d6 6. c3 O-O 7. Re1 a6 8. b4 Ba7 9. Nbd2 Be6 10. Bxe6 fxe6, White's rook on e1 is attacking the 7th rank. The position is open, and White has the better position.

The lesson: the 7th rank is a rook's paradise. The player who understands how to invade the 7th rank will win more games.`,
    },
    {
      title: "Classic Open File Example",
      type: "position",
      interactionMode: "freeplay",
      fen: "r3r1k1/pp3ppp/2p5/8/3P4/2P5/PP3PPP/R3R1K1 w - - 0 1",
      content: `In this position, the d-file is open. Both sides have rooks, but only one can control the d-file.

The key observation: the d-file is open, and the side that controls it will have a significant advantage. White's rook on a1 can move to d1, controlling the d-file.

The plan:
- 1. Rad1! The rook moves to d1, controlling the open d-file
- The rook is now centralized and active
- White has a significant advantage
- The rook can invade the 7th rank on the next move

The lesson: controlling an open file is one of the most powerful strategic weapons. The rook on the open file is active and can invade the opponent's position.`,
    },
    {
      title: "The 7th Rank Invasion: The Ultimate Rook Goal",
      type: "key-idea",
      content: `The 7th rank invasion is the ultimate goal of open file play. A rook on the 7th rank attacks the opponent's pawns, restricts the opponent's pieces, and can deliver checkmate.

The Famous 7th Rank Invasion Position:
After 1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. O-O Nf6 5. d3 d6 6. c3 O-O 7. Re1 a6 8. b4 Ba7 9. Nbd2 Be6 10. Bxe6 fxe6 11. Nc4, White's rook on e1 is ready to invade the 7th rank. The position is open, and White has the better position.

The lesson: the 7th rank invasion is the ultimate goal of open file play. The player who understands how to invade the 7th rank will win more games.`,
    },
    {
      title: "Doubled Rooks on an Open File: Overwhelming Force",
      type: "key-idea",
      content: `Doubled rooks on an open file are an overwhelming force. The two rooks can invade the 7th rank, attack the opponent's pawns, and deliver checkmate.

Properties of doubled rooks on an open file:
1. They can invade the 7th rank
2. They attack the opponent's pawns
3. They can deliver checkmate
4. They tie down the opponent's pieces to defending

The Famous Doubled Rooks Position:
After 1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. O-O Nf6 5. d3 d6 6. c3 O-O 7. Re1 a6 8. b4 Ba7 9. Nbd2 Be6 10. Bxe6 fxe6 11. Nc4 Rf6 12. Nd5, White's rooks are ready to double on the f-file. The position is open, and White has the better position.

The lesson: doubled rooks on an open file are an overwhelming force. The player who understands how to double rooks will win more games.`,
    },
    {
      title: "The Back Rank: A Special Case of the 7th Rank",
      type: "key-idea",
      content: `The back rank (1st rank for White, 8th rank for Black) is a special case of the 7th rank. A rook on the back rank can deliver checkmate when the king is trapped on the back rank.

The Famous Back Rank Mate Position:
After 1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. O-O Nf6 5. d3 d6 6. c3 O-O 7. Re1 a6 8. b4 Ba7 9. Nbd2 Be6 10. Bxe6 fxe6 11. Nc4 Rf6 12. Nd5, White's rook on e1 is ready to invade the 7th rank. The position is open, and White has the better position.

The lesson: the back rank is a special case of the 7th rank. The player who understands the back rank will win more games.`,
    },
    {
      title: "Defending Against Open File Play",
      type: "key-idea",
      content: `Defending against open file play is difficult. Here are the key defensive principles:

1. Don't Allow Open Files
The best defense is to not allow open files in the first place. Keep the pawn structure closed.

2. Trade Rooks
If the opponent has doubled rooks on an open file, the best defense is to trade rooks. This reduces the opponent's activity.

3. Block the Open File
If you cannot trade rooks, you can block the open file with a piece. This prevents the opponent from invading.

4. Counter-Attack on the Other Wing
Sometimes the best defense is a strong counter-attack on the other wing. If your counter-attack is stronger than the open file play, the opponent must deal with it.

The lesson: defending against open file play requires careful play. The key is to avoid open files, or to trade rooks when the opponent has doubled rooks.`,
    },
    {
      title: "Typical Plans for Both Sides",
      type: "key-idea",
      content: `When playing with open files (as the attacker) or without open files (as the defender), here are the most important strategic themes:

For the attacker (with open files):
1. Control the open file with a rook
2. Double rooks on the open file
3. Invade the 7th rank
4. Attack the opponent's pawns on the 7th rank
5. Use the open file to deliver checkmate

For the defender (without open files):
1. Trade rooks to reduce the opponent's activity
2. Block the open file with a piece
3. Counter-attack on the other wing
4. Look for tactical opportunities
5. The best defense is to not allow open files

Universal open file principles:
- Open files are highways for rooks and queens
- A rook on an open file is worth more than a rook on a closed file
- A rook on the 7th rank is extremely powerful
- Doubled rooks on an open file are devastating
- The side controlling an open file has a significant advantage`,
    },
    {
      title: "Endgame Patterns",
      type: "key-idea",
      content: `Open files are the foundation of endgame play. The player who understands the typical patterns will win more endgames.

Pattern 1: The Open File Endgame
In open file endgames, the side controlling the open file has a significant advantage. The rook can invade the 7th rank and attack the opponent's pawns.

Pattern 2: The 7th Rank Endgame
In 7th rank endgames, the rook on the 7th rank attacks the opponent's pawns and can deliver checkmate. The opponent's pieces are tied down.

Pattern 3: The Doubled Rooks Endgame
In doubled rooks endgames, the two rooks on the open file are overwhelming. The opponent cannot defend against the invasion.

Pattern 4: The Back Rank Endgame
In back rank endgames, the rook on the back rank can deliver checkmate. The opponent's king is trapped on the back rank.

Pattern 5: The Rook vs. Rook Endgame
In rook vs. rook endgames, the side with the active rook (on an open file or 7th rank) has a significant advantage. The passive rook is tied down.

The lesson: open files are the foundation of endgame play. The player who understands the typical patterns and can execute them efficiently will win more endgames.`,
    },
    {
      title: "When to Watch for Open File Opportunities",
      type: "key-idea",
      content: `Open files are one of the most powerful strategic weapons. Here's when to be most alert:

Watch for open file opportunities when:
- A pawn structure has been opened (trades in the center)
- The opponent has weakened pawns on the 7th rank
- The endgame is approaching
- The position is open enough for rook operations
- The opponent's king is on the back rank

Defend against open file play when:
- The opponent has control of an open file
- Your king is on the back rank (look for king safety)
- The endgame is approaching
- The opponent has doubled rooks on an open file

The lesson: open files are one of the most powerful strategic weapons. Learning to identify and exploit open files is a fundamental skill that will save you many games and win you many more.`,
    },
    {
      title: "Computer Era: Modern Analysis",
      type: "key-idea",
      content: `How has the engine revolution affected open file play? The principles have remained fundamentally the same.

Engine Evaluation:
- Engines evaluate open file control precisely
- Engines identify the best rook placement instantly
- The principles (control the file, double rooks, invade 7th rank) are confirmed
- Modern engines have refined the technique
- The concept of "file control" has been quantified

Why Open File Play Has Survived:
1. Open file play is fundamental to chess — it's about controlling highways for rooks
2. Open file play determines the character of the game
3. Open file play is essential at every level of play
4. Open file play is celebrated as the foundation of chess mastery
5. The great players (Capablanca, Petrosian, Carlsen) all emphasized open file play

The Modern Approach:
- Open file play is taught in every beginner's course
- The principles are studied in every strategic manual
- The greatest players have all emphasized open file play
- Open file play is the foundation of chess mastery

The lesson: open file play has been a feature of chess strategy for centuries. The engine revolution has not changed the principles — it has only refined the analysis. The fundamental appeal of open file play remains: it's one of the most powerful strategic weapons.`,
    },
    {
      title: "Comprehensive Quiz: Test Your Understanding",
      type: "trap",
      interactionMode: "quiz",
      orientation: "white",
      quizFen: "r3r1k1/pp3ppp/2p5/8/3P4/2P5/PP3PPP/R3R1K1 w - - 0 1",
      quizAnswer: ["Rad1"],
      quizHint:
        "The d-file is open. The rook on a1 can move to d1, controlling the open file. Find the move that controls the open file.",
      content: `This is the comprehensive quiz for Open Files. White is to move in a position with an open d-file.

You should now understand:
- Open files are highways for rooks and queens
- A rook on an open file is worth more than a rook on a closed file
- A rook on the 7th rank is extremely powerful
- Doubled rooks on an open file are devastating
- The side controlling an open file has a significant advantage

Find the best move that demonstrates your understanding of Open Files.`,
    },
    {
      title: "Summary: The Complete Open Files Guide",
      type: "key-idea",
      content: `You've now completed a comprehensive course on Open Files. Here's what to remember:

Core Strategic Ideas:
1. Open files are highways for rooks and queens
2. A rook on an open file is worth more than a rook on a closed file
3. A rook on the 7th rank is extremely powerful
4. Doubled rooks on an open file are devastating
5. The side controlling an open file has a significant advantage

The Key Patterns:
- Open File Control
- 7th Rank Invasion
- Doubled Rooks on an Open File
- Back Rank Mate
- Rook vs. Rook Endgames

The Defense:
- Trade rooks to reduce the opponent's activity
- Block the open file with a piece
- Counter-attack on the other wing
- Look for tactical opportunities
- The best defense is to not allow open files

If you only remember three things:
- Open files are highways for rooks and queens
- A rook on the 7th rank is extremely powerful
- Doubled rooks on an open file are devastating

The lesson: Open Files are one of the most powerful strategic weapons. They determine the character of the game and reward the player who understands the typical patterns.`,
    },
  ],
};
