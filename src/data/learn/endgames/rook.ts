import { LearnTopic } from "../types";

export const rookEndgames: LearnTopic = {
  slug: "rook-endgames",
  title: "Rook Endgames: The Most Common Endgame",
  category: "endgames",
  description:
    "The complete, definitive course on Rook Endgames. From the Lucena and Philidor positions to the Vancura and theoretical draws, learn the techniques that turn close positions into wins.",
  difficulty: "advanced",
  estimatedMinutes: 90,
  icon: "mdi:chess-rook",
  tags: [
    "rook endgame",
    "lucena",
    "philidor",
    "vancura",
    "endgame",
    "7th rank",
  ],
  sections: [
    {
      title: "Introduction: The Most Common Endgame",
      type: "text",
      content: `Rook endgames are the most common endgame in chess. They appear in approximately 50% of all games, more than any other type of endgame. The player who understands rook endgames will win more close games than the player who doesn't.

Rook endgames are unique because the rook is a long-range piece that can operate from a distance. The rook can invade the 7th rank, control open files, and deliver checkmate with the support of the king.

The Three Pillars of Rook Endgames:
1. The Active Rook: A rook on the 7th rank or an open file is worth more than a passive rook
2. The Lucena Position: The winning technique when the rook is on the 7th rank with a passed pawn
3. The Philidor Position: The drawing technique when the rook is on the 6th rank with a passed pawn

Statistical Data:
- Rook endgames appear in approximately 50% of all games
- The player with the more active rook wins approximately 60% of these endgames
- The Lucena position is the most important winning technique
- The Philidor position is the most important drawing technique
- Rook endgames are the most studied endgame in chess literature

The lesson: rook endgames are the most common endgames. The player who understands the typical techniques will win more close games.`,
    },
    {
      title: "The Active Rook: The Key to Rook Endgames",
      type: "key-idea",
      content: `The active rook is the key to rook endgames. A rook on the 7th rank, on an open file, or behind a passed pawn is worth more than a passive rook.

Properties of the active rook:
1. It can invade the 7th rank
2. It can control open files
3. It can support passed pawns
4. It can deliver checkmate

The Famous Active Rook Position:
After 1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. O-O Nf6 5. d3 d6 6. c3 O-O 7. Re1 a6 8. b4 Ba7 9. Nbd2 Be6 10. Bxe6 fxe6 11. Nc4 Rf6 12. Nd5, White's rook on e1 is active. The position is open, and White has the better position.

The lesson: the active rook is the key to rook endgames. The player who understands how to activate the rook will win more endgames.`,
    },
    {
      title: "The Lucena Position: The Winning Technique",
      type: "key-idea",
      content: `The Lucena position is the most important winning technique in rook endgames. It occurs when the stronger side has a rook on the 7th rank with a passed pawn on the 6th rank, and the king is blocking the pawn.

The Winning Technique:
1. The rook shields the king from the opposing rook (Rook lift)
2. The king walks around the rook to support the pawn
3. The pawn promotes

The Famous Lucena Position:
White: King on g2, Rook on c3, Pawn on c2 (about to become a passed pawn)
Black: King on e7, Rook on c8
The winning technique: 1. Rc3-b3! (shielding the king) 2. Kf3-Ke4-Kd5, and the pawn promotes.

The lesson: the Lucena position is the most important winning technique. The player who understands it can win the most common winning endgame.`,
    },
    {
      title: "Classic Lucena Position",
      type: "position",
      interactionMode: "freeplay",
      fen: "2K5/4k3/3P4/8/8/2R5/8/4r3 w - - 0 1",
      content: `In this position, White has a rook on c3, a king on c8, and a pawn on d6. Black has a king on e7 and a rook on e1.

The key observation: this is a Lucena-like position. White's rook is on the 3rd rank, and the king is on c8, ready to support the pawn.

The winning technique:
- 1. Rc3-e3! (shielding the king) 2. Kd7 Kd6 (or wherever) 3. Re6+ Kd5 4. Kc7, and the king walks to support the pawn

The lesson: the Lucena position is the most important winning technique in rook endgames. The player who understands it can win the most common winning endgame.`,
    },
    {
      title: "The Philidor Position: The Drawing Technique",
      type: "key-idea",
      content: `The Philidor position is the most important drawing technique in rook endgames. It occurs when the defending side has a rook on the 6th rank (or 3rd rank for White) with a passed pawn, and the king is on the 6th rank (or 3rd rank for White).

The Drawing Technique:
1. The defending rook stays on the 6th rank (or 3rd rank for White)
2. The rook checks from behind when the king tries to escape
3. The rook stays on the file, preventing the king from getting behind the pawn

The Famous Philidor Position:
White: King on b6, Rook on c6, Pawn on c7
Black: King on d8, Rook on c1
The drawing technique: 1...Rc1-c6+! (checking from behind) 2. Kb7 Rc7+ 3. Kb8 Rc6, and the rook maintains the check from behind.

The lesson: the Philidor position is the most important drawing technique. The player who understands it can save the most common drawing endgame.`,
    },
    {
      title: "Classic Philidor Position",
      type: "position",
      interactionMode: "freeplay",
      fen: "8/1R6/4k3/8/8/8/4K3/4r3 w - - 0 1",
      content: `In this position, White has a rook on b7 and a king on e2. Black has a king on e6 and a rook on e1.

The key observation: this is a Philidor-like position. Black's rook is on the 1st rank, ready to check from behind when the king tries to escape.

The drawing technique:
- 1...Re1-e2+! (checking from behind) 2. Kf3 Re3+ 3. Kf4 Re4+ 4. Kf5 Re5+, and the rook maintains the check from behind

The lesson: the Philidor position is the most important drawing technique in rook endgames. The player who understands it can save the most common drawing endgame.`,
    },
    {
      title: "The Vancura Position: A Special Case",
      type: "key-idea",
      content: `The Vancura position is a special case in rook endgames. It occurs when the defending side has a rook on the 6th rank (or 3rd rank for White) with a passed pawn, and the king is on the 5th rank (or 4th rank for White).

The Vancura Drawing Technique:
1. The defending rook stays on the 6th rank (or 3rd rank for White)
2. The king advances to attack the pawn from behind
3. The rook checks the attacking king

The Famous Vancura Position:
White: King on d4, Rook on c4, Pawn on c5
Black: King on d6, Rook on c8
The drawing technique: 1...Kc7! (advancing the king) 2. Rxc5 Kb7, and the king is in time to stop the pawn.

The lesson: the Vancura position is a special case. The player who understands it can save endgames that look lost.`,
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
After 1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. O-O Nf6 5. d3 d6 6. c3 O-O 7. Re1 a6 8. b4 Ba7 9. Nbd2 Be6 10. Bxe6 fxe6 11. Nc4 Rf6 12. Nd5, White's rook on e1 is attacking the 7th rank. The position is open, and White has the better position.

The lesson: the 7th rank is a rook's paradise. The player who understands how to invade the 7th rank will win more endgames.`,
    },
    {
      title: "The Active King: A Rook's Best Friend",
      type: "key-idea",
      content: `In rook endgames, the active king is the rook's best friend. A passive king is tied down to defending, while an active king supports the rook and attacks the opponent's pawns.

Properties of the active king in rook endgames:
1. It can defend its own pawns
2. It can attack the opponent's pawns
3. It can support passed pawns
4. It can deliver checkmate

The Famous Active King Position:
After 1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. O-O Nf6 5. d3 d6 6. c3 O-O 7. Re1 a6 8. b4 Ba7 9. Nbd2 Be6 10. Bxe6 fxe6 11. Nc4 Rf6 12. Nd5, the position is sharp. The player who activates their king first will win the endgame.

The lesson: the active king is a rook's best friend in endgames. The player who activates their king will win more rook endgames.`,
    },
    {
      title: "Typical Plans for Both Sides",
      type: "key-idea",
      content: `When playing a rook endgame (as the attacker or defender), here are the most important strategic themes:

For the attacker (with the better position):
1. Activate the rook (7th rank, open file, behind passed pawn)
2. Activate the king
3. Create passed pawns
4. Use the Lucena technique when applicable
5. Cut off the opposing king

For the defender (with the worse position):
1. Activate the rook
2. Activate the king
3. Create counterplay
4. Use the Philidor technique when applicable
5. Look for stalemate or fortress

Universal rook endgame principles:
- The active rook is the key to rook endgames
- The Lucena position is the most important winning technique
- The Philidor position is the most important drawing technique
- The 7th rank is a rook's paradise
- The active king is the rook's best friend
- Passed pawns are powerful assets`,
    },
    {
      title: "Endgame Patterns",
      type: "key-idea",
      content: `Rook endgames follow typical patterns. The player who understands the patterns will win more endgames.

Pattern 1: The Lucena Win
In the Lucena pattern, the stronger side uses the rook lift technique to win. The king walks around the rook to support the pawn.

Pattern 2: The Philidor Draw
In the Philidor pattern, the defending side uses the check-from-behind technique to draw. The rook checks the king when it tries to escape.

Pattern 3: The Vancura Draw
In the Vancura pattern, the defending side uses the king-advance technique to draw. The king advances to stop the pawn from behind.

Pattern 4: The 7th Rank Domination
In the 7th rank domination, the rook on the 7th rank attacks the opponent's pawns and restricts the pieces.

Pattern 5: The Passed Pawn Race
In the passed pawn race, both sides have passed pawns. The side with the more active rook wins the race.

The lesson: rook endgames follow typical patterns. The player who understands the patterns and can execute them efficiently will win more endgames.`,
    },
    {
      title: "When to Watch for Rook Endgame Opportunities",
      type: "key-idea",
      content: `Rook endgames are the most common endgames. Here's when to be most alert:

Watch for rook endgame opportunities when:
- The position is open (rooks can operate)
- The endgame is approaching
- You can activate your rook
- You can invade the 7th rank
- You can create a passed pawn

Defend against rook endgames when:
- The opponent has a more active rook
- The opponent can invade the 7th rank
- The endgame is approaching
- The opponent has a passed pawn

The lesson: rook endgames are the most common endgames. Learning the typical techniques is a fundamental skill that will save you many games and win you many more.`,
    },
    {
      title: "Computer Era: Modern Analysis",
      type: "key-idea",
      content: `How has the engine revolution affected rook endgames? The principles have remained fundamentally the same.

Engine Evaluation:
- Engines evaluate rook endgames precisely
- Engines identify the best rook placement instantly
- The principles (Lucena, Philidor, 7th rank) are confirmed
- Modern engines have refined the technique
- Many "theoretical draws" have been overturned

Why Rook Endgames Have Survived:
1. Rook endgames are fundamental to chess — they're the most common endgames
2. Rook endgames decide close games more often than any other endgame
3. Rook endgames are essential at every level of play
4. Rook endgames are celebrated as the foundation of chess mastery
5. The great players (Capablanca, Smyslov, Karpov) all emphasized rook endgames

The Modern Approach:
- Rook endgames are taught in every beginner's course
- The principles are studied in every endgame manual
- The greatest players have all emphasized rook endgames
- Rook endgames are the foundation of chess mastery

The lesson: rook endgames have been a feature of chess for centuries. The engine revolution has not changed the principles — it has only refined the analysis. The fundamental appeal of rook endgames remains: they're the most common endgames.`,
    },
    {
      title: "Comprehensive Quiz: Test Your Understanding",
      type: "trap",
      interactionMode: "quiz",
      orientation: "white",
      quizFen: "2K5/4k3/3P4/8/8/2R5/8/4r3 w - - 0 1",
      quizAnswer: ["Rxe3"],
      quizHint:
        "This is a Lucena-like position. White's rook on c3 can capture the black rook on e3, then support the pawn. Find the move that wins the endgame.",
      content: `This is the comprehensive quiz for Rook Endgames. White is to move in a Lucena-like position.

You should now understand:
- The active rook is the key to rook endgames
- The Lucena position is the most important winning technique
- The Philidor position is the most important drawing technique
- The 7th rank is a rook's paradise
- The active king is the rook's best friend

Find the best move that demonstrates your understanding of Rook Endgames.`,
    },
    {
      title: "Summary: The Complete Rook Endgame Guide",
      type: "key-idea",
      content: `You've now completed a comprehensive course on Rook Endgames. Here's what to remember:

Core Strategic Ideas:
1. The active rook is the key to rook endgames
2. The Lucena position is the most important winning technique
3. The Philidor position is the most important drawing technique
4. The 7th rank is a rook's paradise
5. The active king is the rook's best friend

The Key Patterns:
- The Lucena Win
- The Philidor Draw
- The Vancura Draw
- The 7th Rank Domination
- The Passed Pawn Race

The Defense:
- Activate the rook
- Activate the king
- Create counterplay
- Use the Philidor technique when applicable
- Look for stalemate or fortress

If you only remember three things:
- The active rook is the key to rook endgames
- The Lucena position is the most important winning technique
- The Philidor position is the most important drawing technique

The lesson: Rook Endgames are the most common endgames. They determine the character of close games and reward the player who understands the typical techniques.`,
    },
  ],
};
