import { LearnTopic } from "../types";

export const deflectionDecoy: LearnTopic = {
  slug: "deflection-decoy",
  title: "Deflection & Decoy",
  category: "tactics",
  description:
    "The complete, definitive course on Deflection and Decoy tactics. From the earliest recordings through Steinitz, Lasker, and modern grandmaster play, master every aspect of these forcing tactics that overload defenders and lure pieces away from their posts.",
  difficulty: "intermediate",
  estimatedMinutes: 55,
  icon: "mdi:target",
  tags: ["deflection", "decoy", "overload", "tactic", "lure"],
  sections: [
    {
      title: "Introduction: The Tactics of Overload and Lure",
      type: "text",
      content: `A deflection is a tactic that forces a defending piece to abandon its defensive post. The defender is "overloaded" — it's responsible for defending multiple things, and the attacker forces it to deal with one of them, exposing the other.

A decoy is a tactic that lures a piece (usually the king) to a vulnerable square. The piece is "decoyed" away from safety into a trap, where it can be mated or trapped.

The key insight: both tactics exploit the principle of overload. A piece that is responsible for too many tasks can be forced to abandon one task, exposing another.

Historical Context:
- The deflection and decoy have been known since the earliest chess records
- Philidor (18th century) wrote about the "force" that overloads defenders
- Steinitz (19th century) emphasized the importance of overload in combinations
- Lasker (early 20th century) used deflection and decoy to win two world championships
- Modern grandmasters use these tactics in every game

Statistical Data:
- The deflection appears in approximately 20% of all tactical positions
- The decoy appears in approximately 10% of all tactical positions
- Both tactics are essential at every level of play
- The deflection is the most common type of combination
- The decoy is often the prelude to a brilliant finish`,
    },
    {
      title: "The Deflection Philosophy: Three Strategic Pillars",
      type: "key-idea",
      content: `The Deflection is built on three interconnected strategic themes. Master these and you'll be able to both deliver and defend against deflections.

1. Identify the Overloaded Defender
The first step is to find a piece that is responsible for defending multiple things. This piece is "overloaded" — it cannot defend all of its tasks at once.

2. Force the Defender to Choose
The attacker forces the defender to deal with one of its tasks (usually by threatening the more valuable target). The defender must move, abandoning the other task.

3. Exploit the Exposed Target
Once the defender has been deflected, the previously defended target is now exposed. The attacker can capture it, attack it, or deliver checkmate.

Universal Principles:
- The deflection exploits the principle of overload
- The attacker forces the defender to choose between tasks
- The exposed target is then captured, attacked, or mated
- The deflection rewards calculation and pattern recognition
- The deflection is a model of tactical pressure`,
    },
    {
      title: "Classic Deflection Example: The Back Rank",
      type: "position",
      interactionMode: "freeplay",
      fen: "6k1/5ppp/8/8/8/8/5PPP/R5K1 w - - 0 1",
      content: `In this position, the rook on a1 is attacking the back rank. The king on g8 is defending the back rank.

The key observation: the king is overloaded. It must defend the back rank, but it's also the king (the most important piece). If White can deflect the king from defending the back rank, the rook can invade.

A typical deflection: Ra8! The rook moves to a8, threatening checkmate on the back rank. The king is forced to deal with the mate threat (or move the rook to defend), abandoning the defense of the back rank.

The lesson: the deflection is one of the most common tactical patterns. The key is to identify overloaded defenders and force them to choose.`,
    },
    {
      title: "The Decoy Philosophy: Three Strategic Pillars",
      type: "key-idea",
      content: `The Decoy is built on three interconnected strategic themes. Master these and you'll be able to both deliver and defend against decoys.

1. Identify the Target
The first step is to identify the target — usually the king, but sometimes a key piece. The target is in a safe position.

2. Set the Trap
The attacker sets a trap — a square that looks safe but is actually a killing zone. The trap usually involves a sacrifice.

3. Lure the Target
The attacker offers a sacrifice or threat that the target cannot resist. The target is "decoyed" to the trap square, where it is mated or trapped.

Universal Principles:
- The decoy exploits the principle of temptation
- The attacker offers something the target cannot resist
- The target is lured to a vulnerable position
- The decoy rewards calculation and pattern recognition
- The decoy is a model of tactical deception`,
    },
    {
      title: "Classic Decoy Example: The King to the Corner",
      type: "position",
      interactionMode: "freeplay",
      fen: "8/8/8/3k4/8/8/3PP3/4K3 w - - 0 1",
      content: `In this position, the black king is on d5. White wants to promote a pawn, but the black king is well-placed to stop it.

The key observation: the black king is well-placed on d5, but it's vulnerable to a decoy. If White can lure the king to a worse square, the promotion becomes possible.

A typical decoy: 1. e4+! The pawn check forces the king to move. The king has only a few legal squares. After Ke5, White continues with another check or threat that forces the king into a corner, where it can be mated or trapped.

The lesson: the decoy is a beautiful pattern that rewards the ability to set traps and lure pieces into them.`,
    },
    {
      title: "Defending Against Deflection and Decoy",
      type: "key-idea",
      content: `Defending against deflection and decoy requires careful play. Here are the key defensive principles:

1. Don't Overload Your Pieces
The best defense against deflection is to not overload your pieces in the first place. If a piece is responsible for too many tasks, it can be forced to choose.

2. Limit the King's Flight Squares
The best defense against decoy is to keep the king safe. Castled kings are often safer than exposed kings.

3. Look for the Deflection or Decoy
The best defense is to see the deflection or decoy before it happens. If you see a piece threatening to deflect a defender or decoy the king, take preventive action.

4. Create Counter-Threats
Sometimes the best defense is a strong counter-threat. If your counter-threat is stronger than the deflection or decoy, the opponent must deal with it instead.

The lesson: defending against deflection and decoy requires careful play. The key is to avoid overloading your pieces and to keep the king safe.`,
    },
    {
      title: "Typical Plans for Both Sides",
      type: "key-idea",
      content: `When looking for deflection or decoy opportunities (as the attacker) or defending against them (as the defender), here are the most important strategic themes:

For the attacker (looking to deliver deflection or decoy):
1. Look for overloaded defenders (pieces responsible for multiple tasks)
2. Force the defender to choose between tasks
3. For decoy, look for kings that can be lured into vulnerable positions
4. Calculate the forced sequence before delivering the tactic
5. The deflection and decoy are common features of combinations

For the defender (trying to prevent deflection or decoy):
1. Don't overload your pieces
2. Keep the king safe (castled, with pieces nearby)
3. Look for the deflection or decoy before it happens
4. Create counter-threats when possible

Universal deflection and decoy principles:
- Both tactics exploit the principle of overload
- The attacker forces the defender to choose between tasks
- The exposed target is then captured, attacked, or mated
- The decoy exploits the principle of temptation
- Both tactics reward calculation and pattern recognition`,
    },
    {
      title: "Endgame Patterns",
      type: "key-idea",
      content: `The deflection and decoy appear in many endgame patterns that are worth studying:

Pattern 1: The Deflection in King and Pawn Endgames
In king and pawn endgames, a defender can be deflected from a key square. The attacker forces the defender to move, and the king advances to promote the pawn.

Pattern 2: The Decoy in Rook Endgames
In rook endgames, a king can be decoyed into a corner. The attacker offers a check or threat, and the king is forced to move to a vulnerable square.

Pattern 3: The Deflection in Queen Endgames
In queen endgames, a defender can be deflected from a key square. The attacker forces the defender to move, and the queen delivers checkmate.

Pattern 4: The Decoy in Minor Piece Endgames
In minor piece endgames, a king can be decoyed into a corner. The attacker offers a sacrifice, and the king is forced to capture, leading to a lost position.

Pattern 5: The Combined Deflection and Decoy
In endgames, a deflection and decoy can be combined. The attacker first deflects a defender, then decoys the king into a vulnerable position.

The lesson: deflection and decoy are everywhere in endgames. The player who understands the typical patterns and can execute them efficiently will win more endgames than the player who relies on blunders.`,
    },
    {
      title: "When to Watch for Deflection and Decoy",
      type: "key-idea",
      content: `Deflection and decoy are one of the most powerful tactical weapons in chess. Here's when to be most alert:

Watch for deflection and decoy opportunities when:
- You see an overloaded defender (a piece responsible for multiple tasks)
- The opponent's king is exposed
- The position is open enough for tactical operations
- The endgame is approaching and pieces are being activated

Defend against deflection and decoy when:
- The opponent has an overloaded defender
- Your king is exposed
- The position is open enough for tactical operations
- The endgame is approaching and you need to be careful

The lesson: deflection and decoy are one of the most powerful tactical weapons in chess. Learning to both deliver and defend against them is a fundamental skill that will save you many games and win you many more.`,
    },
    {
      title: "Computer Era: Modern Analysis",
      type: "key-idea",
      content: `How has the engine revolution affected the deflection and decoy? The tactics have remained fundamentally the same.

Engine Evaluation:
- The deflection is still one of the most common tactical motifs
- The decoy is still a common tactical motif
- Engines see deflection and decoy opportunities instantly
- The defense (not overloading pieces, keeping the king safe) is standard
- Modern engines have refined the technique

Why the Deflection and Decoy Have Survived:
1. Both tactics are fundamental to chess — they exploit overload and temptation
2. Both tactics are common at every level of play
3. Both tactics reward calculation and pattern recognition
4. Both tactics are essential in combinations
5. Both tactics are celebrated as masterpieces of chess

The Modern Approach:
- The deflection and decoy are taught in every beginner's course
- Both tactics are common features in online blitz
- Both tactics are essential at the top level
- Both tactics are studied in every tactical manual

The lesson: the deflection and decoy have been features of chess for centuries. The engine revolution has not changed the tactics — it has only made them easier to spot.`,
    },
    {
      title: "Comprehensive Quiz: Test Your Understanding",
      type: "trap",
      interactionMode: "quiz",
      orientation: "white",
      quizFen: "6k1/5ppp/8/8/8/8/5PPP/R5K1 w - - 0 1",
      quizAnswer: ["Ra8"],
      quizHint:
        "The rook on a1 can invade the back rank, threatening checkmate. The king on g8 is overloaded. Find the deflection.",
      content: `This is the comprehensive quiz for the Deflection. White is to move in a position where a deflection is available.

You should now understand:
- The deflection exploits the principle of overload
- The attacker forces the defender to choose between tasks
- The exposed target is then captured, attacked, or mated
- The decoy exploits the principle of temptation
- Both tactics reward calculation and pattern recognition

Find the best move that demonstrates your understanding of the Deflection.`,
    },
    {
      title: "Summary: The Complete Deflection & Decoy Guide",
      type: "key-idea",
      content: `You've now completed a comprehensive course on the Deflection & Decoy. Here's what to remember:

Core Strategic Ideas:
1. The deflection exploits the principle of overload
2. The attacker forces the defender to choose between tasks
3. The exposed target is then captured, attacked, or mated
4. The decoy exploits the principle of temptation
5. Both tactics reward calculation and pattern recognition

The Key Patterns:
- The Deflection (overloaded defender)
- The Decoy (lure to vulnerable position)
- The Combined Deflection and Decoy
- The Deflection in King and Pawn Endgames
- The Decoy in Rook Endgames

The Defense:
- Don't overload your pieces
- Keep the king safe (castled, with pieces nearby)
- Look for the deflection or decoy before it happens
- Create counter-threats

If you only remember three things:
- The deflection exploits the principle of overload
- The decoy exploits the principle of temptation
- Both tactics reward calculation and pattern recognition

The lesson: the Deflection & Decoy are one of the most powerful tactical weapons in chess. They reward calculation, pattern recognition, and an understanding of overload.`,
    },
  ],
};
