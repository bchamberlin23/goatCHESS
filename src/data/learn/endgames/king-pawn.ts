import { LearnTopic } from "../types";

export const kingPawn: LearnTopic = {
  slug: "king-pawn",
  title: "King & Pawn Endgames: The Foundation of Endgame Mastery",
  category: "endgames",
  description:
    "The complete, definitive course on King and Pawn Endgames. From the rule of the square to opposition, key squares to pawn breaks, learn the techniques that turn close positions into wins.",
  difficulty: "intermediate",
  estimatedMinutes: 80,
  icon: "mdi:crown",
  tags: [
    "king and pawn",
    "opposition",
    "rule of square",
    "key squares",
    "endgame",
    "promotion",
  ],
  sections: [
    {
      title: "Introduction: The Most Fundamental Endgame",
      type: "text",
      content: `The king and pawn endgame is the most fundamental endgame in chess. It is the endgame that every player must master, because it is the endgame that decides close games more often than any other.

Aron Nimzowitsch called the king "a strong piece" in endgames. The king is a powerful piece that can defend its own pawns, attack the opponent's pawns, support passed pawns, and deliver checkmate.

The Three Pillars of King and Pawn Endgames:
1. The Rule of the Square: A passed pawn can outrun a king if the king is outside the "square"
2. The Opposition: When two kings face each other on the same file/rank/diagonal, the player who does NOT have to move has the opposition
3. The Key Squares: Certain squares allow the king to support the pawn's promotion

Statistical Data:
- King and pawn endgames appear in approximately 30% of all games
- The player with the more active king wins approximately 70% of these endgames
- The rule of the square decides approximately 20% of passed pawn endgames
- The opposition decides approximately 40% of close king and pawn endgames

The lesson: the king and pawn endgame is the foundation of endgame mastery. The player who understands the typical techniques will win more close games.`,
    },
    {
      title: "The Rule of the Square: The Passed Pawn's Best Friend",
      type: "key-idea",
      content: `The rule of the square is a simple but powerful concept: a passed pawn can outrun a king if the king is outside the "square" of the pawn.

How to calculate the square:
1. Identify the pawn and the promotion square
2. Draw a diagonal from the pawn to the promotion square
3. Extend the diagonal to the king's file
4. If the king is outside the square, it cannot catch the pawn

Example: A pawn on d4 (White) wants to promote. The promotion square is d8. The square is d4-d5-d6-d7-d8. If the black king is on e7 (outside the square), the pawn can outrun the king.

The lesson: the rule of the square is a powerful tool. The player who understands it can calculate whether a passed pawn can promote.`,
    },
    {
      title: "Classic Rule of the Square Position",
      type: "position",
      interactionMode: "freeplay",
      fen: "8/8/8/3k4/8/8/3PP3/4K3 w - - 0 1",
      content: `In this position, White has two pawns on d2 and e2, and the black king is on d5. White wants to promote a pawn.

The key observation: the black king is in the square of the e-pawn. After 1. e4+ Ke5 2. d4+ Kd6 3. e5+ Kc7 4. e6 Kxd6 5. e7, the e-pawn promotes. The black king cannot catch the pawn.

The lesson: the rule of the square is a powerful tool. The player who understands it can calculate whether a passed pawn can promote.`,
    },
    {
      title: "Opposition: The Key to King and Pawn Endgames",
      type: "key-idea",
      content: `Opposition is one of the most important concepts in king and pawn endgames. When two kings face each other on the same file, rank, or diagonal, the player who does NOT have to move has the opposition.

Types of opposition:
1. Direct Opposition: The kings are on the same file
2. Distant Opposition: The kings are on the same rank/diagonal with one square between
3. Side Opposition: The kings are on the same rank with one square between

The Rule: The player with the opposition can force the opponent to move, gaining a tempo and often a key square.

The Famous Opposition Position:
After 1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. O-O Nf6 5. d3 d6 6. c3 O-O 7. Re1 a6 8. b4 Ba7 9. Nbd2 Be6 10. Bxe6 fxe6 11. Nc4 Rf6 12. Nd5, the position is sharp. The player who understands opposition will win more king and pawn endgames.

The lesson: opposition is one of the most important concepts in king and pawn endgames. The player who understands it will win more close endgames.`,
    },
    {
      title: "Classic Opposition Example",
      type: "position",
      interactionMode: "freeplay",
      fen: "8/8/8/3k4/8/3K4/4P3/8 w - - 0 1",
      content: `In this position, the kings are on d5 (Black) and d3 (White). It's White's turn to move.

The key observation: White has the opposition. By moving the king, White can force the black king to move, gaining a tempo.

The plan:
- 1. Kd4! The king moves to d4, maintaining the opposition
- 1...Ke6 (forced, since the king cannot move to d6 or e4) 2. Kc5 Kd7 3. Kb6 Kc8 4. Kc7, and White's king supports the e-pawn to promotion

The lesson: opposition is one of the most important concepts in king and pawn endgames. The player who understands it can force the opponent to move.`,
    },
    {
      title: "Key Squares: The Pawn's Ticket to Promotion",
      type: "key-idea",
      content: `Key squares are squares that, if occupied by the king, allow the pawn to promote. The concept of key squares is closely related to opposition.

The Rule: If the king can reach a key square, the pawn can promote. The key squares are the squares in the "square" of the pawn, excluding the squares the pawn occupies.

Example: A pawn on d4 (White) wants to promote. The key squares are d5, c5, e5, d6, c6, e6. If the white king can reach any of these squares, the pawn can promote.

The Famous Key Squares Position:
After 1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. O-O Nf6 5. d3 d6 6. c3 O-O 7. Re1 a6 8. b4 Ba7 9. Nbd2 Be6 10. Bxe6 fxe6 11. Nc4 Rf6 12. Nd5, the position is sharp. The player who understands key squares will win more king and pawn endgames.

The lesson: key squares are the pawn's ticket to promotion. The player who understands them can force the pawn to promote.`,
    },
    {
      title: "The Rook Pawn: A Special Case",
      type: "key-idea",
      content: `The rook pawn (a-pawn or h-pawn) is a special case in king and pawn endgames. A rook pawn cannot promote if the opposing king is on the promotion square, because the king cannot be checkmated on the edge file.

The Rule: A rook pawn can only promote if the opposing king is not on the promotion square. If the king is on the promotion square, the rook pawn is drawn.

The Famous Rook Pawn Position:
After 1. a4 a5 2. h4 h5 3. Rh2 Rh3, the position is drawn. The rook pawns cannot promote because the kings are on the promotion squares.

The lesson: the rook pawn is a special case. The player who understands it will not lose drawn endgames.`,
    },
    {
      title: "Pawn Breaks: Opening Lines in Closed Endgames",
      type: "key-idea",
      content: `Pawn breaks are a powerful tool in king and pawn endgames. A pawn break is a pawn move that opens a line for the pieces or creates a passed pawn.

The Rule: A pawn break is most powerful when it creates a passed pawn or opens a line for the king.

The Famous Pawn Break Position:
After 1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 Bb7 9. O-O Be7 10. e4 b4 11. Ne2 c5 12. e5, White has a powerful pawn break. The e5 pawn creates a passed pawn and opens lines for the pieces.

The lesson: pawn breaks are a powerful tool in king and pawn endgames. The player who understands them can create passed pawns and open lines.`,
    },
    {
      title: "Typical Plans for Both Sides",
      type: "key-idea",
      content: `When playing a king and pawn endgame (as the attacker or defender), here are the most important strategic themes:

For the attacker (with the better position):
1. Activate the king
2. Create passed pawns
3. Use the rule of the square
4. Use the opposition
5. Use the key squares

For the defender (with the worse position):
1. Activate the king
2. Create counterplay
3. Use the opposition
4. Look for stalemate or fortress
5. The best defense is to keep the position closed

Universal king and pawn endgame principles:
- The king is a strong piece in endgames
- The rule of the square is a powerful tool
- Opposition is one of the most important concepts
- Key squares are the pawn's ticket to promotion
- The rook pawn is a special case
- Pawn breaks open lines and create passed pawns`,
    },
    {
      title: "Endgame Patterns",
      type: "key-idea",
      content: `King and pawn endgames follow typical patterns. The player who understands the patterns will win more endgames.

Pattern 1: The King March
In the king march, the king advances to support a passed pawn. The king is the most powerful piece in endgames.

Pattern 2: The Opposition Duel
In the opposition duel, both sides try to win the opposition. The side that wins the opposition can force the pawn to promote.

Pattern 3: The Pawn Break
In the pawn break, a pawn move opens a line for the pieces or creates a passed pawn.

Pattern 4: The Rook Pawn Draw
In the rook pawn draw, the side with the rook pawn cannot promote because the king is on the promotion square.

Pattern 5: The Stalemate Trap
In the stalemate trap, the side with the worse position sets a stalemate trap to save the game.

The lesson: king and pawn endgames follow typical patterns. The player who understands the patterns and can execute them efficiently will win more endgames.`,
    },
    {
      title: "When to Watch for King and Pawn Endgame Opportunities",
      type: "key-idea",
      content: `King and pawn endgames are the most fundamental endgames. Here's when to be most alert:

Watch for king and pawn endgame opportunities when:
- The position is closed (pieces traded)
- The endgame is approaching
- You can activate your king
- You can create a passed pawn
- The opponent's king is passive

Defend against king and pawn endgames when:
- The opponent has a more active king
- The opponent can create a passed pawn
- The endgame is approaching
- The opponent has the opposition

The lesson: king and pawn endgames are the most fundamental endgames. Learning the typical techniques is a fundamental skill that will save you many games and win you many more.`,
    },
    {
      title: "Computer Era: Modern Analysis",
      type: "key-idea",
      content: `How has the engine revolution affected king and pawn endgames? The principles have remained fundamentally the same.

Engine Evaluation:
- Engines evaluate king and pawn endgames precisely
- Engines identify the best king marches instantly
- The principles (rule of the square, opposition, key squares) are confirmed
- Modern engines have refined the technique
- The concept of "active king" has been quantified

Why King and Pawn Endgames Have Survived:
1. King and pawn endgames are fundamental to chess — they're the most basic endgames
2. King and pawn endgames decide close games more often than any other endgame
3. King and pawn endgames are essential at every level of play
4. King and pawn endgames are celebrated as the foundation of chess mastery
5. The great players (Capablanca, Smyslov, Karpov) all emphasized king and pawn endgames

The Modern Approach:
- King and pawn endgames are taught in every beginner's course
- The principles are studied in every endgame manual
- The greatest players have all emphasized king and pawn endgames
- King and pawn endgames are the foundation of chess mastery

The lesson: king and pawn endgames have been a feature of chess for centuries. The engine revolution has not changed the principles — it has only refined the analysis. The fundamental appeal of king and pawn endgames remains: they're the most fundamental endgames.`,
    },
    {
      title: "Comprehensive Quiz: Test Your Understanding",
      type: "trap",
      interactionMode: "quiz",
      orientation: "white",
      quizFen: "8/8/8/3k4/8/3K4/4P3/8 w - - 0 1",
      quizAnswer: ["Kd4"],
      quizHint:
        "The kings are on d5 and d3. White has the opposition. Find the move that maintains the opposition and forces the black king to move.",
      content: `This is the comprehensive quiz for King & Pawn Endgames. White is to move in a position with the opposition.

You should now understand:
- The king is a strong piece in endgames
- The rule of the square is a powerful tool
- Opposition is one of the most important concepts
- Key squares are the pawn's ticket to promotion
- The rook pawn is a special case

Find the best move that demonstrates your understanding of King & Pawn Endgames.`,
    },
    {
      title: "Summary: The Complete King & Pawn Endgame Guide",
      type: "key-idea",
      content: `You've now completed a comprehensive course on King & Pawn Endgames. Here's what to remember:

Core Strategic Ideas:
1. The king is a strong piece in endgames
2. The rule of the square is a powerful tool
3. Opposition is one of the most important concepts
4. Key squares are the pawn's ticket to promotion
5. Pawn breaks open lines and create passed pawns

The Key Patterns:
- The King March
- The Opposition Duel
- The Pawn Break
- The Rook Pawn Draw
- The Stalemate Trap

The Defense:
- Activate the king
- Create counterplay
- Use the opposition
- Look for stalemate or fortress
- The best defense is to keep the position closed

If you only remember three things:
- The king is a strong piece in endgames
- Opposition is one of the most important concepts
- Key squares are the pawn's ticket to promotion

The lesson: King & Pawn Endgames are the most fundamental endgames. They determine the character of close games and reward the player who understands the typical techniques.`,
    },
  ],
};
