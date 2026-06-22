import { LearnTopic } from "../types";

export const doubleCheck: LearnTopic = {
  slug: "double-check",
  title: "Double Check: The Most Forcing Move",
  category: "tactics",
  description:
    "The complete, definitive course on the Double Check. From its earliest recordings through Anderssen's Evergreen Game and modern grandmaster play, master every aspect of the most forcing move in chess.",
  difficulty: "intermediate",
  estimatedMinutes: 45,
  icon: "mdi:lightning-bolt",
  tags: ["double check", "check", "knight", "bishop", "tactic"],
  sections: [
    {
      title: "Introduction: The Most Forcing Move in Chess",
      type: "text",
      content: `A double check occurs when both the moved piece AND the piece it reveals give check simultaneously. The king is attacked twice in a single move.

Why is double check the most forcing move in chess? Because the only legal response to a double check is to move the king. You cannot:
- Block the check (only one piece can be blocked)
- Capture both checking pieces (you can only make one move)
- Pin the checking pieces (you must escape the check)

The king MUST move. This makes double check the most forcing tactical weapon in chess.

Historical Context:
- The double check has been known since the earliest chess records
- Anderssen's Evergreen Game (1852) is the most famous double check
- Modern grandmasters use double checks to force checkmate
- The double check is the most common finishing technique in puzzles
- The double check is taught in every beginner's course`,
    },
    {
      title: "The Double Check Philosophy: Three Strategic Pillars",
      type: "key-idea",
      content: `The Double Check is built on three interconnected strategic themes. Master these and you'll be able to both deliver and defend against double checks.

1. Two Checking Pieces
The moved piece gives check AND the revealed piece gives check. The opponent cannot defend against both.

2. The King MUST Move
The only legal response to a double check is to move the king. This makes double check the most forcing move in chess.

3. Forced Mate Sequences
The double check often leads to forced checkmate sequences because the king's flight squares are minimized by the two checking pieces.

Universal Principles:
- The double check gives two checking pieces for one move
- The king MUST move in response
- The double check often forces checkmate
- The double check rewards calculation and pattern recognition
- The double check is a model of piece coordination`,
    },
    {
      title: "The Evergreen Game: The Most Famous Double Check",
      type: "position",
      interactionMode: "freeplay",
      fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 1",
      content: `The Evergreen Game (Anderssen vs. Kieseritzky, London 1852) is the most famous chess game ever played, and it features one of the most beautiful double check sequences in history.

The game featured a brilliant sacrifice sequence where Anderssen sacrificed his queen and both rooks to deliver checkmate. The final moves:
- 22. Ne7+! Knight check, discovering a check from the bishop on c4
- The king must move, and Anderssen follows up with checkmate

The Evergreen Game is celebrated for:
- The brilliant sacrifice sequence
- The double check that broke through
- The forced checkmate finale
- The aesthetic beauty of the combination

The lesson: The Evergreen Game is the most famous example of a double check leading to forced checkmate. It's studied in every chess course in the world.`,
    },
    {
      title: "Common Double Check Patterns",
      type: "key-idea",
      content: `Here are five common double check patterns that appear frequently in games:

Pattern 1: Knight + Bishop
The most common double check pattern. A knight moves to give check while revealing a bishop check. The knight covers many flight squares with its check, and the bishop gives the actual mating net.

Pattern 2: Knight + Rook
A knight moves to give check while revealing a rook check. The knight covers flight squares, and the rook delivers the long-range check.

Pattern 3: Pawn + Bishop/Rook/Queen
A pawn moves to give check while revealing a piece check. The pawn gives direct check, and the revealed piece adds another check.

Pattern 4: Bishop + Rook/Queen
A bishop moves to give check while revealing a rook or queen check. The bishop and rook/queen are on the same line.

Pattern 5: Rook + Queen
A rook moves to give check while revealing a queen check. The rook gives direct check, and the queen adds another check.

The lesson: the most common double check is a knight move that reveals a bishop check. This is the classic Anderssen pattern from the Evergreen Game.`,
    },
    {
      title: "Defending Against Double Checks",
      type: "key-idea",
      content: `Defending against double checks is extremely difficult because the king MUST move. Here are the key defensive principles:

1. Don't allow your pieces to be aligned
The most common way to fall victim to a double check is to have your pieces on the same line as a more valuable piece.

2. Move the king to safety
When facing a double check, the only option is to move the king to a safe square. Look for squares that are not attacked by the checking pieces.

3. Block the king's flight squares
If you can attack the king's potential flight squares BEFORE the double check is delivered, you've reduced the opponent's options.

4. Look for counter-checks
Sometimes the best defense is to deliver your own check, forcing the opponent to respond.

5. Prevent the alignment
The best defense is to prevent the alignment in the first place. Move pieces to squares where they cannot be aligned for a double check.

The lesson: defending against double checks requires careful calculation. The key is to avoid having your pieces aligned, or to block the alignment when threatened.`,
    },
    {
      title: "Typical Plans for Both Sides",
      type: "key-idea",
      content: `When looking for double check opportunities (as the attacker) or defending against them (as the defender), here are the most important strategic themes:

For the attacker (looking to deliver double checks):
1. Look for pieces that can move to give check while revealing another check
2. The double check is the most forcing type
3. The king MUST move in response
4. Calculate the forced sequence before delivering the double check
5. Look for checkmate patterns after the king moves

For the defender (trying to prevent double checks):
1. Don't allow your pieces to be aligned
2. Block the alignment with a piece
3. Move the back piece first (if possible)
4. Move the king to safety BEFORE the double check is delivered
5. Look for counter-checks

Universal double check principles:
- The double check gives two checking pieces for one move
- The king MUST move in response
- The double check often forces checkmate
- The double check rewards calculation and pattern recognition
- The double check is a model of piece coordination`,
    },
    {
      title: "Endgame Patterns",
      type: "key-idea",
      content: `The double check appears in many endgame patterns that are worth studying:

Pattern 1: The Double Check Mate
In endgames, a double check often forces the king into a corner, leading to checkmate. The double check is the most forcing type of check.

Pattern 2: The Double Check Net
In endgames, a double check can be used to "net" the king — forcing it into a position where it cannot escape.

Pattern 3: The Double Check Decoy
In endgames, a double check can be used to decoy the king to a specific square, where it will be vulnerable to further checks.

Pattern 4: The Double Check Clearance
In endgames, a double check can clear a line for another piece to deliver checkmate.

Pattern 5: The Double Check Zugzwang
In endgames, a double check can put the opponent in zugzwang — where any move loses material or position.

The lesson: double checks are everywhere in endgames. The player who understands the typical patterns and can execute them efficiently will win more endgames than the player who relies on blunders.`,
    },
    {
      title: "When to Watch for Double Checks",
      type: "key-idea",
      content: `Double checks are one of the most powerful tactical weapons in chess. Here's when to be most alert:

Watch for double check opportunities when:
- You have a piece that can move to give check while revealing another check
- The opponent has two pieces on the same line
- The position is open enough for long-range pieces to operate
- The endgame is approaching and pieces are being activated

Defend against double checks when:
- The opponent has a piece that can move to give check while revealing another check
- Your pieces are on the same line as a more valuable piece
- The position is open enough for double checks
- The endgame is approaching and you need to be careful

The lesson: double checks are one of the most powerful tactical weapons in chess. Learning to both deliver and defend against them is a fundamental skill that will save you many games and win you many more.`,
    },
    {
      title: "Computer Era: Modern Analysis",
      type: "key-idea",
      content: `How has the engine revolution affected the double check? The tactic has remained fundamentally the same. Here's what modern analysis tells us:

Engine Evaluation:
- The double check is still the most forcing move in chess
- Engines see double check opportunities instantly and recommend them
- The defense (moving the king) is the standard response
- Modern engines have refined the technique
- The double check appears in approximately 5% of all tactical positions

Why the Double Check Has Survived:
1. The double check is fundamental to chess — it's about two checking pieces for one move
2. The king MUST move in response
3. The double check often forces checkmate
4. The double check rewards calculation and pattern recognition
5. The double check is essential at every level of play

The Modern Approach:
- The double check is taught in every beginner's course
- The defense is a fundamental skill
- The double check is a common feature in online blitz
- The double check is essential at the top level
- The double check is celebrated as a masterpiece of chess

The lesson: the double check has been a feature of chess for centuries. The engine revolution has not changed the tactic — it has only made it easier to spot. The fundamental appeal of the double check remains: it's the most forcing move in chess.`,
    },
    {
      title: "Comprehensive Quiz: Test Your Understanding",
      type: "trap",
      interactionMode: "quiz",
      orientation: "white",
      quizFen: "4r1k1/3r1ppp/8/8/8/1B6/5PPP/4R1K1 w - - 0 1",
      quizAnswer: ["Re8+"],
      quizHint:
        "The rook on e1 can move to e8, giving check and discovering the bishop on b3 which attacks the rook on d8. Find the move that starts the windmill.",
      content: `This is the comprehensive quiz for the Double Check. White is to move in a position where a double check is available.

You should now understand:
- The double check gives two checking pieces for one move
- The king MUST move in response
- The double check often forces checkmate
- The famous double check patterns and tactical motifs
- The classic Anderssen pattern (knight + bishop)

Find the best move that demonstrates your understanding of the Double Check.`,
    },
    {
      title: "Summary: The Complete Double Check Guide",
      type: "key-idea",
      content: `You've now completed a comprehensive course on the Double Check. Here's what to remember:

Core Strategic Ideas:
1. The double check gives two checking pieces for one move
2. The king MUST move in response
3. The double check often forces checkmate
4. The moved piece and the revealed piece both check
5. The double check rewards calculation and pattern recognition

The Key Patterns:
- Knight + Bishop
- Knight + Rook
- Pawn + Bishop/Rook/Queen
- Bishop + Rook/Queen
- Rook + Queen

The Defense:
- Don't allow your pieces to be aligned
- Block the alignment with a piece
- Move the back piece first (if possible)
- Move the king to safety BEFORE the double check is delivered
- Look for counter-checks

If you only remember three things:
- The double check gives two checking pieces for one move
- The king MUST move in response
- The double check often forces checkmate

The lesson: the Double Check is one of the most powerful tactical weapons in chess. It rewards calculation, pattern recognition, and an understanding of piece coordination. By mastering the key patterns and defenses, you will have a weapon that serves you for a lifetime.`,
    },
  ],
};
