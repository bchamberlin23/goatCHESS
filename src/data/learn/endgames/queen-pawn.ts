import { LearnTopic } from "../types";

export const queenPawn: LearnTopic = {
  slug: "queen-pawn",
  title: "Queen vs. Pawn Endgames: The Most Subtle Endgame",
  category: "endgames",
  description:
    "The complete, definitive course on Queen vs. Pawn Endgames. From the stalemate exceptions to the zig-zag method, learn the techniques that turn close positions into wins or draws.",
  difficulty: "advanced",
  estimatedMinutes: 70,
  icon: "mdi:crown-outline",
  tags: [
    "queen vs pawn",
    "stalemate",
    "zig-zag",
    "endgame",
    "promotion",
    "stalemate exception",
  ],
  sections: [
    {
      title: "Introduction: The Most Subtle Endgame",
      type: "text",
      content: `The queen vs. pawn endgame is the most subtle endgame in chess. The queen is a powerful piece, but it can be tricked into stalemate when the pawn is about to promote. The player who understands the stalemate exceptions and the zig-zag method will win more close endgames.

The queen is worth approximately 9 pawns, but a pawn on the 7th rank is worth almost as much. A pawn on the 7th rank can be supported by the king and is one step from promotion.

The Three Pillars of Queen vs. Pawn Endgames:
1. The Stalemate Exception: The queen can be forced into stalemate when the pawn is about to promote
2. The Zig-Zag Method: A technique for the queen to approach the pawn while avoiding stalemate
3. The Stalemate Trick: A technique for the defender to set a stalemate trap

Statistical Data:
- Queen vs. pawn endgames appear in approximately 5% of all games
- The stalemate exception decides approximately 30% of these endgames
- The zig-zag method is the most important winning technique
- The stalemate trick is the most important drawing technique
- Queen vs. pawn endgames are the most studied endgame in chess literature

The lesson: queen vs. pawn endgames are the most subtle endgames. The player who understands the typical techniques will win more close endgames.`,
    },
    {
      title: "The Stalemate Exception: The Most Important Concept",
      type: "key-idea",
      content: `The stalemate exception is the most important concept in queen vs. pawn endgames. When the pawn is about to promote, the queen can be forced into stalemate.

The Rule: If the queen is on a square where any move would allow the pawn to promote, the queen is stalemated. The defender can trick the attacker into stalemate by sacrificing the pawn.

The Famous Stalemate Position:
White: Queen on a1, Pawn on a2 (about to promote)
Black: King on a4
It's Black's turn. Black's king is on a4, and the white queen is on a1. The queen has no legal moves (any move would allow the pawn to promote or give check). The position is stalemate.

The lesson: the stalemate exception is the most important concept. The player who understands it can save endgames that look lost.`,
    },
    {
      title: "The Zig-Zag Method: The Winning Technique",
      type: "key-idea",
      content: `The zig-zag method is the most important winning technique in queen vs. pawn endgames. It is used by the queen to approach the pawn while avoiding stalemate.

The Rule: The queen approaches the pawn from a safe distance, moving in a zig-zag pattern to avoid the stalemate exception. The queen stops the pawn by checking the king or attacking the pawn from a safe square.

The Famous Zig-Zag Position:
White: King on h1, Pawn on a2 (about to promote)
Black: Queen on a3
It's Black's turn. Black plays 1...Qa1+! (zig-zag move) 2. Kh2 Qb2+ 3. Kh3 Qc3+ 4. Kh4 Qd4+ 5. Kh5 Qe5+ 6. Kh6 Qf6+ 7. Kh7 Qg7+ 8. Kh8 Qg8+!, and the queen forces the king to the corner.

The lesson: the zig-zag method is the most important winning technique. The player who understands it can win the most common winning queen vs. pawn endgame.`,
    },
    {
      title: "The Stalemate Trick: The Drawing Technique",
      type: "key-idea",
      content: `The stalemate trick is the most important drawing technique in queen vs. pawn endgames. It is used by the defender to trick the queen into stalemate.

The Rule: The defender sets a stalemate trap by placing the queen on a square where any move would allow the pawn to promote. The queen is then forced to give perpetual check or move to a square where the pawn can promote.

The Famous Stalemate Trick Position:
White: King on a1, Pawn on a2 (about to promote)
Black: Queen on a3
It's White's turn. White plays 1. Ka2?? (a blunder) 1...Qxc2+, and the queen wins. But if White plays 1. Kh2 correctly, the queen cannot make progress.

The lesson: the stalemate trick is the most important drawing technique. The player who understands it can save queen vs. pawn endgames.`,
    },
    {
      title: "The Stalemate Exception: A Closer Look",
      type: "key-idea",
      content: `The stalemate exception occurs when the queen is on a square where any move would allow the pawn to promote. The exception is most common when:
- The pawn is on the 7th rank (or 2nd rank for Black)
- The king is far from the pawn
- The queen is close to the pawn

The Famous Stalemate Exception:
White: King on h1, Pawn on a2 (about to promote)
Black: Queen on a3
It's Black's turn. Black plays 1...Qa1+! 2. Kh2 Qb2+ 3. Kh3 Qc3+ 4. Kh4 Qd4+ 5. Kh5 Qe5+ 6. Kh6 Qf6+ 7. Kh7 Qg7+ 8. Kh8, and the queen must give perpetual check or move to a square where the pawn can promote. The position is drawn by stalemate or perpetual check.

The lesson: the stalemate exception is a powerful tool. The player who understands it can save endgames that look lost.`,
    },
    {
      title: "The Zig-Zag Method in Action",
      type: "key-idea",
      content: `The zig-zag method is used by the queen to approach the pawn while avoiding stalemate. The queen moves in a zig-zag pattern, checking the king from a safe distance.

The Famous Zig-Zag Sequence:
White: King on h1, Pawn on a2
Black: Queen on h6
1...Qg7! 2. Kh2 Qf6 3. Kh3 Qe5 4. Kh4 Qd4 5. Kh5 Qc3 6. Kh6 Qb2 7. Kh7 Qa1, and the queen is behind the pawn, ready to capture it.

The lesson: the zig-zag method is the most important winning technique. The player who understands it can win the most common winning queen vs. pawn endgame.`,
    },
    {
      title: "The Stalemate Trick in Action",
      type: "key-idea",
      content: `The stalemate trick is used by the defender to trick the queen into stalemate. The defender places the queen on a square where any move would allow the pawn to promote.

The Famous Stalemate Trick Sequence:
White: King on h1, Pawn on a2
Black: Queen on h6
1. a4 Qg7 2. a5 Qf8 3. a6 Qe7 4. a7 Qd6 5. a8=Q Qc5, and the queen must be careful not to allow the new queen to escape.

The lesson: the stalemate trick is the most important drawing technique. The player who understands it can save queen vs. pawn endgames.`,
    },
    {
      title: "Typical Plans for Both Sides",
      type: "key-idea",
      content: `When playing a queen vs. pawn endgame (as the attacker or defender), here are the most important strategic themes:

For the attacker (with the queen):
1. Use the zig-zag method to approach the pawn
2. Check the king from a safe distance
3. Cut off the king from the pawn
4. Force the king to the corner or edge
5. Capture the pawn

For the defender (with the pawn):
1. Set stalemate traps
2. Use the stalemate exception
3. Push the pawn to the 7th rank
4. Promote the pawn with check
5. Look for perpetual check

Universal queen vs. pawn endgame principles:
- The stalemate exception is the most important concept
- The zig-zag method is the most important winning technique
- The stalemate trick is the most important drawing technique
- The pawn on the 7th rank is worth almost as much as the queen
- The defender should push the pawn to the 7th rank
- The attacker should use the zig-zag method to avoid stalemate`,
    },
    {
      title: "Endgame Patterns",
      type: "key-idea",
      content: `Queen vs. pawn endgames follow typical patterns. The player who understands the patterns will win more endgames.

Pattern 1: The Zig-Zag Win
In the zig-zag pattern, the attacker uses the queen to approach the pawn while avoiding stalemate. The queen checks the king from a safe distance.

Pattern 2: The Stalemate Draw
In the stalemate draw, the defender tricks the queen into stalemate. The queen cannot move without allowing the pawn to promote.

Pattern 3: The Perpetual Check
In the perpetual check pattern, the queen is forced to give perpetual check. The game is drawn by the 50-move rule or by repetition.

Pattern 4: The Promotion Race
In the promotion race, both sides try to promote their pawns. The side with the more active queen wins the race.

Pattern 5: The King Approach
In the king approach pattern, the king approaches the pawn to support it. The queen tries to stop the king from reaching the pawn.

The lesson: queen vs. pawn endgames follow typical patterns. The player who understands the patterns and can execute them efficiently will win more endgames.`,
    },
    {
      title: "When to Watch for Queen vs. Pawn Endgame Opportunities",
      type: "key-idea",
      content: `Queen vs. pawn endgames are the most subtle endgames. Here's when to be most alert:

Watch for queen vs. pawn endgame opportunities when:
- The endgame is approaching
- You have a queen and the opponent has a pawn
- The pawn is on the 7th rank
- You can use the zig-zag method
- The opponent's king is far from the pawn

Defend against queen vs. pawn endgames when:
- The opponent has a queen and you have a pawn
- The endgame is approaching
- The pawn is on the 7th rank
- You can set stalemate traps
- The opponent's king is far from the pawn

The lesson: queen vs. pawn endgames are the most subtle endgames. Learning the typical techniques is a fundamental skill that will save you many games and win you many more.`,
    },
    {
      title: "Computer Era: Modern Analysis",
      type: "key-idea",
      content: `How has the engine revolution affected queen vs. pawn endgames? The principles have remained fundamentally the same.

Engine Evaluation:
- Engines evaluate queen vs. pawn endgames precisely
- Engines identify the best queen placement instantly
- The principles (stalemate exception, zig-zag method) are confirmed
- Modern engines have refined the technique
- Many "theoretical wins" have been overturned

Why Queen vs. Pawn Endgames Have Survived:
1. Queen vs. pawn endgames are fundamental to chess — they're the most subtle endgames
2. Queen vs. pawn endgames decide close games more often than any other endgame
3. Queen vs. pawn endgames are essential at every level of play
4. Queen vs. pawn endgames are celebrated as the foundation of chess mastery
5. The great players (Capablanca, Smyslov, Karpov) all emphasized queen vs. pawn endgames

The Modern Approach:
- Queen vs. pawn endgames are taught in every advanced course
- The principles are studied in every endgame manual
- The greatest players have all emphasized queen vs. pawn endgames
- Queen vs. pawn endgames are the foundation of chess mastery

The lesson: queen vs. pawn endgames have been a feature of chess for centuries. The engine revolution has not changed the principles — it has only refined the analysis. The fundamental appeal of queen vs. pawn endgames remains: they're the most subtle endgames.`,
    },
    {
      title: "Comprehensive Quiz: Test Your Understanding",
      type: "trap",
      interactionMode: "quiz",
      orientation: "white",
      quizFen: "8/8/8/8/3k4/8/3PP3/4K3 w - - 0 1",
      quizAnswer: ["e4+"],
      quizHint:
        "White has a passed pawn on e2. The pawn can advance with check, beginning the king march. Find the move that starts the promotion.",
      content: `This is the comprehensive quiz for Queen vs. Pawn Endgames. White is to move in a position with a passed pawn.

You should now understand:
- The stalemate exception is the most important concept
- The zig-zag method is the most important winning technique
- The stalemate trick is the most important drawing technique
- The pawn on the 7th rank is worth almost as much as the queen
- The defender should push the pawn to the 7th rank
- The attacker should use the zig-zag method to avoid stalemate

Find the best move that demonstrates your understanding of Queen vs. Pawn Endgames.`,
    },
    {
      title: "Summary: The Complete Queen vs. Pawn Endgame Guide",
      type: "key-idea",
      content: `You've now completed a comprehensive course on Queen vs. Pawn Endgames. Here's what to remember:

Core Strategic Ideas:
1. The stalemate exception is the most important concept
2. The zig-zag method is the most important winning technique
3. The stalemate trick is the most important drawing technique
4. The pawn on the 7th rank is worth almost as much as the queen
5. The defender should push the pawn to the 7th rank
6. The attacker should use the zig-zag method to avoid stalemate

The Key Patterns:
- The Zig-Zag Win
- The Stalemate Draw
- The Perpetual Check
- The Promotion Race
- The King Approach

The Defense:
- Set stalemate traps
- Use the stalemate exception
- Push the pawn to the 7th rank
- Promote the pawn with check
- Look for perpetual check

If you only remember three things:
- The stalemate exception is the most important concept
- The zig-zag method is the most important winning technique
- The stalemate trick is the most important drawing technique

The lesson: Queen vs. Pawn Endgames are the most subtle endgames. They determine the character of close games and reward the player who understands the typical techniques.`,
    },
  ],
};
