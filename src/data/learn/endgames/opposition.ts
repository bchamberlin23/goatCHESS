import { LearnTopic } from "../types";

export const opposition: LearnTopic = {
  slug: "opposition",
  title: "Opposition: The Key to King Endgames",
  category: "endgames",
  description:
    "The complete, definitive course on Opposition. From direct and distant opposition to breakthroughs and the square, learn the techniques that turn close positions into wins.",
  difficulty: "intermediate",
  estimatedMinutes: 60,
  icon: "mdi:human-handsup",
  tags: ["opposition", "king endgame", "passed pawn", "endgame", "breakthrough"],
  sections: [
    {
      title: "Introduction: The Most Important Concept in King Endgames",
      type: "text",
      content: `Opposition is the most important concept in king endgames. It decides more close endgames than any other concept. The player who understands opposition will win more close games than the player who doesn't.

When two kings face each other on the same file, rank, or diagonal, the player who does NOT have to move has the opposition. The side with the opposition can force the opponent to move, gaining a tempo and often a key square.

The Three Types of Opposition:
1. Direct Opposition: The kings are on the same file with one square between
2. Distant Opposition: The kings are on the same rank/diagonal with one square between
3. Side Opposition: The kings are on the same rank with one square between

Statistical Data:
- Opposition decides approximately 40% of close king endgames
- The player with the opposition wins approximately 70% of these endgames
- Direct opposition is the most common type
- Distant opposition is the most subtle

The lesson: opposition is the most important concept in king endgames. The player who understands it will win more close games.`,
    },
    {
      title: "The Opposition Philosophy: Three Strategic Pillars",
      type: "key-idea",
      content: `The Opposition is built on three interconnected strategic themes.

1. Force the Opponent to Move
The first step is to force the opponent to move. This is done by having the opposition — the player who does NOT have to move gains a tempo.

2. Gain a Key Square
Once the opponent has moved, the player with the opposition can gain a key square. The key square is a square in the "square" of the pawn.

3. Promote the Pawn
Once the key square is gained, the pawn can promote. The king supports the pawn, and the opponent cannot stop it.

Universal Principles:
- The opposition forces the opponent to move
- The key square is the pawn's ticket to promotion
- The opposition is most important in close endgames
- The breakthrough is the alternative to gaining a key square
- The side with the opposition has a significant advantage

The lesson: opposition is the most important concept in king endgames. The player who understands it can force the opponent to move and gain a key square.`,
    },
    {
      title: "Direct Opposition: The Classic Case",
      type: "key-idea",
      content: `Direct opposition occurs when the kings are on the same file with one square between them. The player who does NOT have to move has the direct opposition.

The Rule: When the kings are on the same file with one square between, the player who does NOT have to move has the direct opposition. The opponent must move, and the player with the opposition can gain a tempo.

The Famous Direct Opposition Position:
White: King on d3, Pawn on e4
Black: King on d5
It's Black's turn. Black has the direct opposition. Black can play 1...Ke6, forcing White to move.

The lesson: direct opposition is the classic case. The player who understands it can force the opponent to move in the most common king endgame scenario.`,
    },
    {
      title: "Classic Direct Opposition Example",
      type: "position",
      interactionMode: "freeplay",
      fen: "8/8/8/3k4/4P3/3K4/8/8 b - - 0 1",
      content: `In this position, the kings are on d5 (Black) and d3 (White). The pawn is on e4. It's Black's turn to move.

The key observation: Black has the direct opposition. The kings are on the same file with one square between. Black can force White to move.

The plan:
- 1...Ke6! The king moves to e6, maintaining the opposition
- 2. Kd4 Kd6 3. e5+ Ke6 4. Kc5 Kxe5, and the position is drawn (or Black wins with precise play)

The lesson: direct opposition is the classic case. The player who has it can force the opponent to move.`,
    },
    {
      title: "Distant Opposition: The Subtle Case",
      type: "key-idea",
      content: `Distant opposition occurs when the kings are on the same rank or diagonal with one square between them. The player who does NOT have to move has the distant opposition.

The Rule: When the kings are on the same rank or diagonal with one square between, the player who does NOT have to move has the distant opposition. The opponent must move, and the player with the opposition can gain a tempo.

The Famous Distant Opposition Position:
White: King on d3, Pawn on e4
Black: King on d5
It's White's turn. White can play 1. Kd4 to gain the distant opposition.

The lesson: distant opposition is the subtle case. The player who understands it can force the opponent to move even when the kings are not on the same file.`,
    },
    {
      title: "Side Opposition: The Edge Case",
      type: "key-idea",
      content: `Side opposition occurs when the kings are on the same rank with one square between them. The player who does NOT have to move has the side opposition.

The Rule: When the kings are on the same rank with one square between, the player who does NOT have to move has the side opposition. The opponent must move, and the player with the opposition can gain a tempo.

The Famous Side Opposition Position:
White: King on e2, Pawn on e4
Black: King on e4
It's Black's turn. Black can play 1...Ke3 to maintain the side opposition.

The lesson: side opposition is the edge case. The player who understands it can force the opponent to move on the edge of the board.`,
    },
    {
      title: "The Breakthrough: The Alternative to Opposition",
      type: "key-idea",
      content: `A breakthrough is a pawn move that creates a passed pawn despite the opponent's attempts to stop it. The breakthrough is the alternative to gaining a key square through opposition.

The Rule: A breakthrough is possible when the opponent's king cannot stop the passed pawn. The pawn is sacrificed to create a new passed pawn.

The Famous Breakthrough Position:
After 1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 Bb7 9. O-O Be7 10. e4 b4 11. Ne2 c5 12. e5 Nd5 13. Nxd5 exd5 14. dxc5 Bxc5 15. b3, White has a passed pawn on c5. The breakthrough has worked.

The lesson: the breakthrough is the alternative to gaining a key square. The player who understands it can create a passed pawn even when the opposition is not available.`,
    },
    {
      title: "The Square: The Pawn's Safe Passage",
      type: "key-idea",
      content: `The square is a simple but powerful concept: a passed pawn can outrun a king if the king is outside the "square" of the pawn.

How to calculate the square:
1. Identify the pawn and the promotion square
2. Draw a diagonal from the pawn to the promotion square
3. Extend the diagonal to the king's file
4. If the king is outside the square, it cannot catch the pawn

Example: A pawn on d4 (White) wants to promote. The promotion square is d8. The square is d4-d5-d6-d7-d8. If the black king is on e7 (outside the square), the pawn can outrun the king.

The lesson: the square is a powerful tool. The player who understands it can calculate whether a passed pawn can promote.`,
    },
    {
      title: "Defending Against Opposition",
      type: "key-idea",
      content: `Defending against opposition is difficult. Here are the key defensive principles:

1. Don't Allow the Opposition
The best defense is to not allow the opposition in the first place. Move the king to a square where it cannot be forced to move.

2. Gain the Opposition Yourself
If the opponent has the opposition, try to gain it yourself. This is done by moving the king to a square where the opponent must move.

3. Use a Pawn Break
If you cannot gain the opposition, use a pawn break to create a passed pawn. The pawn break can force the opponent to respond.

4. Look for Stalemate
If the position is lost, look for stalemate. The stalemate is the drawing mechanism when the opponent cannot avoid stalemate.

The lesson: defending against opposition requires careful play. The key is to avoid giving the opposition, or to gain it yourself.`,
    },
    {
      title: "Typical Plans for Both Sides",
      type: "key-idea",
      content: `When playing a king endgame with opposition (as the attacker or defender), here are the most important strategic themes:

For the attacker (with the opposition):
1. Force the opponent to move
2. Gain a key square
3. Promote the pawn
4. Use a breakthrough if necessary
5. Cut off the opposing king

For the defender (without the opposition):
1. Try to gain the opposition
2. Use a pawn break
3. Create counterplay
4. Look for stalemate or fortress
5. The best defense is to keep the position closed

Universal opposition principles:
- The opposition forces the opponent to move
- The key square is the pawn's ticket to promotion
- The breakthrough is the alternative to gaining a key square
- The square is the pawn's safe passage
- The side with the opposition has a significant advantage`,
    },
    {
      title: "Endgame Patterns",
      type: "key-idea",
      content: `Opposition follows typical patterns. The player who understands the patterns will win more endgames.

Pattern 1: The Opposition Duel
In the opposition duel, both sides try to win the opposition. The side that wins the opposition can force the pawn to promote.

Pattern 2: The Distant Opposition
In the distant opposition, the kings are on the same rank or diagonal. The side with the opposition can force the opponent to move.

Pattern 3: The Side Opposition
In the side opposition, the kings are on the same rank. The side with the opposition can force the opponent to move on the edge.

Pattern 4: The Breakthrough
In the breakthrough, a pawn is sacrificed to create a new passed pawn. The breakthrough is the alternative to gaining a key square.

Pattern 5: The Stalemate Trap
In the stalemate trap, the side with the worse position sets a stalemate trap to save the game.

The lesson: opposition follows typical patterns. The player who understands the patterns and can execute them efficiently will win more endgames.`,
    },
    {
      title: "When to Watch for Opposition Opportunities",
      type: "key-idea",
      content: `Opposition is the most important concept in king endgames. Here's when to be most alert:

Watch for opposition opportunities when:
- The endgame is approaching
- The kings are on the same file, rank, or diagonal
- You can force the opponent to move
- You can gain a key square
- The opponent has a passed pawn

Defend against opposition when:
- The opponent has the opposition
- The endgame is approaching
- The opponent can force you to move
- The opponent can gain a key square
- You have a passed pawn

The lesson: opposition is the most important concept in king endgames. Learning to identify and exploit it is a fundamental skill that will save you many games and win you many more.`,
    },
    {
      title: "Computer Era: Modern Analysis",
      type: "key-idea",
      content: `How has the engine revolution affected opposition? The principles have remained fundamentally the same.

Engine Evaluation:
- Engines evaluate opposition precisely
- Engines identify the best king placement instantly
- The principles (direct, distant, side opposition) are confirmed
- Modern engines have refined the technique
- The concept of "opposition" has been quantified

Why Opposition Has Survived:
1. Opposition is fundamental to chess — it's the key to king endgames
2. Opposition decides close endgames more often than any other concept
3. Opposition is essential at every level of play
4. Opposition is celebrated as the foundation of chess mastery
5. The great players (Capablanca, Smyslov, Karpov) all emphasized opposition

The Modern Approach:
- Opposition is taught in every beginner's course
- The principles are studied in every endgame manual
- The greatest players have all emphasized opposition
- Opposition is the foundation of chess mastery

The lesson: opposition has been a feature of chess for centuries. The engine revolution has not changed the principles — it has only refined the analysis. The fundamental appeal of opposition remains: it's the most important concept in king endgames.`,
    },
    {
      title: "Comprehensive Quiz: Test Your Understanding",
      type: "trap",
      interactionMode: "quiz",
      orientation: "black",
      quizFen: "8/8/8/3k4/4P3/3K4/8/8 b - - 0 1",
      quizAnswer: ["Ke6"],
      quizHint:
        "The kings are on d5 and d3. Black has the direct opposition. Find the move that maintains the opposition and forces White to move.",
      content: `This is the comprehensive quiz for Opposition. Black is to move in a position with the direct opposition.

You should now understand:
- The opposition forces the opponent to move
- The key square is the pawn's ticket to promotion
- The breakthrough is the alternative to gaining a key square
- The square is the pawn's safe passage
- The side with the opposition has a significant advantage

Find the best move that demonstrates your understanding of Opposition.`,
    },
    {
      title: "Summary: The Complete Opposition Guide",
      type: "key-idea",
      content: `You've now completed a comprehensive course on Opposition. Here's what to remember:

Core Strategic Ideas:
1. The opposition forces the opponent to move
2. The key square is the pawn's ticket to promotion
3. The breakthrough is the alternative to gaining a key square
4. The square is the pawn's safe passage
5. The side with the opposition has a significant advantage

The Key Patterns:
- Direct Opposition
- Distant Opposition
- Side Opposition
- The Breakthrough
- The Stalemate Trap

The Defense:
- Try to gain the opposition yourself
- Use a pawn break
- Create counterplay
- Look for stalemate or fortress
- The best defense is to keep the position closed

If you only remember three things:
- The opposition forces the opponent to move
- The key square is the pawn's ticket to promotion
- The breakthrough is the alternative to gaining a key square

The lesson: Opposition is the most important concept in king endgames. It determines the character of close endgames and rewards the player who understands the typical techniques.`,
    },
  ],
};
