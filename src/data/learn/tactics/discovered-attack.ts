import { LearnTopic } from "../types";

export const discoveredAttack: LearnTopic = {
  slug: "discovered-attack",
  title: "Discovered Attack & Double Check",
  category: "tactics",
  description:
    "The complete, definitive course on the Discovered Attack. From its earliest recordings through Philidor, Morphy, and modern grandmaster play, master every aspect of the tactic that gives you TWO threats for the price of one move. By the end you will be able to deliver and defend against discovered attacks with confidence.",
  difficulty: "intermediate",
  estimatedMinutes: 60,
  icon: "mdi:arrow-decision",
  tags: [
    "discovered",
    "double check",
    "revealed attack",
    "windmill",
    "tactic",
    "knight",
  ],
  sections: [
    {
      title: "Introduction: Two Threats for the Price of One Move",
      type: "text",
      content: `A discovered attack occurs when moving one piece reveals that a piece behind it is now attacking an enemy piece. The moved piece can also create its own threat (a discovered attack with tempo) or give check (discovered check). When both the moved piece and the revealed piece give check simultaneously, it's called a double check.

The key advantage of a discovered attack: you get TWO threats for the price of one move. The opponent can only respond to one threat.

Historical Context:
- The discovered attack has been known since the earliest chess records
- Philidor (18th century) wrote extensively about discovered attacks
- Morphy (19th century) used discovered attacks to devastating effect
- Modern grandmasters use discovered attacks in every game
- The discovered attack is taught in every beginner's course

Statistical Data:
- The discovered attack appears in approximately 15% of all tactical positions
- The double check is the most forcing type
- The windmill is the most dramatic example
- The discovered attack is essential at every level of play`,
    },
    {
      title: "The Discovered Attack Philosophy: Three Strategic Pillars",
      type: "key-idea",
      content: `The Discovered Attack is built on three interconnected strategic themes. Master these and you'll be able to both deliver and defend against discovered attacks.

1. Two Threats for One Move
The discovered attack gives you two threats: the moved piece's own threat and the revealed piece's attack. The opponent can only respond to one.

2. The Revealed Attack
The piece that was hidden behind the moved piece is now attacking. This revealed attack is often more powerful than the moved piece's own threat.

3. The Double Check
The most forcing type of discovered attack: both the moved piece and the revealed piece give check simultaneously. The king MUST move (you can't block or capture to escape a double check).

Universal Principles:
- The discovered attack gives two threats for one move
- The double check is the most forcing type
- The windmill is the most dramatic example
- The discovered attack rewards calculation and pattern recognition
- The discovered attack is a model of piece coordination

The lesson: the discovered attack is one of the most powerful tactical weapons in chess. Learning to both deliver and defend against discovered attacks is a fundamental skill that will save you many games and win you many more.`,
    },
    {
      title: "The Windmill: The Most Dramatic Example",
      type: "position",
      interactionMode: "freeplay",
      fen: "4r1k1/3r1ppp/8/8/8/1B6/5PPP/4R1K1 w - - 0 1",
      content: `The windmill is the ultimate form of discovered attack. It's a repeating pattern where a piece gives discovered check, captures material, returns to give another discovered check, and captures more material — like a windmill turning.

The classic windmill setup: A bishop or rook is positioned behind a knight or rook that can give check. The front piece gives check, and while the opponent responds to the check, the back piece captures material. Then the front piece returns to give check again, the opponent responds, and the back piece captures more.

In this position: The rook on e1 and bishop on b3 form a windmill battery. Re8+! forces Kf7, and then White can capture on d7, return to e8 with check, capture on e8, and continue the cycle — winning massive material.

The lesson: the windmill is the most dramatic example of the discovered attack. It's a beautiful pattern that rewards precise calculation.`,
    },
    {
      title: "Step-by-Step: The Windmill",
      type: "position",
      interactionMode: "freeplay",
      fen: "4r1k1/3r1ppp/8/8/8/1B6/5PPP/4R1K1 w - - 0 1",
      content: `The windmill in action: the rook gives check, the bishop captures material, the rook returns to give check, and the cycle continues. The key elements:
- The rook and bishop are on the same diagonal (e8-h3)
- The rook gives check, the bishop attacks the rook
- The king must move, the bishop captures
- The rook returns to give check, the cycle continues

The lesson: the windmill is a beautiful pattern that rewards precise calculation. The cycle can continue for several moves, winning massive material.`,
    },
    {
      title: "Double Check: The Most Forcing Move",
      type: "key-idea",
      content: `Double check is the most forcing move in chess. Both the moved piece and the revealed piece check the king simultaneously. The only legal response to a double check is to move the king — blocking or capturing is impossible because you can only do one move.

Key properties of double check:
1. The opponent MUST move the king (cannot block or capture)
2. Even if the checking pieces are both hanging, the opponent cannot capture them
3. Double check often leads to forced mate sequences
4. The king's flight squares are reduced by the checking pieces

Common double check patterns:
- Moving a knight to give check while discovering a bishop check
- Moving a bishop to give check while discovering a rook check
- The queen as both revealed and revealing piece (rare but deadly)

The most famous double check in history: In Anderssen's "Evergreen Game" (1852), a double check from the knight and bishop forced mate. Double checks are rare but devastating — when they happen, they're usually the prelude to mate.

The lesson: double check is the most forcing move in chess. When you see a piece that can move to give check while revealing another check, you've found a double check. The opponent has no way to block or capture — they must move the king.`,
    },
    {
      title: "Five Famous Discovered Attack Patterns",
      type: "trap",
      interactionMode: "quiz",
      orientation: "white",
      quizFen: "4r1k1/3r1ppp/8/8/8/1B6/5PPP/4R1K1 w - - 0 1",
      quizAnswer: ["Re8+"],
      quizHint:
        "The rook on e1 can move to e8, giving check and discovering the bishop on b3 which attacks the rook on d8. Find the move that starts the windmill.",
      content: `Five famous discovered attack patterns:

Pattern 1: The Windmill
A piece gives discovered check, captures material, returns to give another check, and captures more. The most dramatic example.

Pattern 2: The Double Check
Both the moved piece and the revealed piece give check. The opponent MUST move the king.

Pattern 3: The Discovered Check
Moving one piece reveals a check from a piece behind it. The king must respond to the check.

Pattern 4: The Discovered Attack with Tempo
Moving one piece reveals an attack from a piece behind it. The moved piece also creates its own threat.

Pattern 5: The Discovered Deflection
Moving one piece reveals an attack on a key defender. The defender is forced to move, and the target is exposed.

The lesson: discovered attacks come in many forms. The key is to look for any move that reveals an attack from a piece behind it.`,
    },
    {
      title: "Defending Against Discovered Attacks",
      type: "key-idea",
      content: `Defending against discovered attacks requires careful play. Here are the key defensive principles:

1. Don't allow your pieces to be aligned
The most common way to fall victim to a discovered attack is to have two of your pieces on the same line. Always be aware of the alignment.

2. Block the alignment
If you see a discovered attack threat, you can often block the alignment by interposing a piece. This prevents the discovered attack from working.

3. Move the back piece (if possible)
If the back piece can move to safety without losing material, do so. This prevents the discovered attack from working.

4. Capture the moving piece (if possible)
If the moving piece is undefended or insufficiently defended, capturing it removes the threat entirely. This is the best defense when the moving piece is overextended.

5. Create a counter-threat
Sometimes the best defense is a strong counter-threat. If your counter-threat is stronger than the discovered attack, the opponent must deal with it instead.

The lesson: defending against discovered attacks requires careful calculation. The key is to avoid having your pieces aligned, or to block the alignment when threatened.`,
    },
    {
      title: "Typical Plans for Both Sides",
      type: "key-idea",
      content: `When looking for discovered attack opportunities (as the attacker) or defending against them (as the defender), here are the most important strategic themes:

For the attacker (looking to deliver discovered attacks):
1. Look for alignments where your piece can move to reveal an attack
2. The double check is the most forcing type
3. The windmill is the most dramatic example
4. Look for pieces that can move to give check while revealing another check
5. Calculate the forced sequence before delivering the discovered attack

For the defender (trying to prevent discovered attacks):
1. Don't allow your pieces to be aligned
2. Block the alignment with a piece
3. Move the back piece first (if possible)
4. Capture the moving piece (if possible)
5. Create a counter-threat

Universal discovered attack principles:
- The discovered attack gives two threats for one move
- The double check is the most forcing type
- The windmill is the most dramatic example
- The discovered attack rewards calculation and pattern recognition
- The discovered attack is a model of piece coordination`,
    },
    {
      title: "Endgame Patterns",
      type: "key-idea",
      content: `The discovered attack appears in many endgame patterns that are worth studying:

Pattern 1: The Windmill Endgame
In rook and bishop endgames, the windmill can be devastating. A well-placed rook and bishop on the same diagonal can deliver repeated checks and capture massive material.

Pattern 2: The Double Check Endgame
In endgames, a double check often forces the king into a corner, leading to checkmate. The double check is the most forcing type of discovered attack.

Pattern 3: The Discovered Check Endgame
In endgames, a discovered check can win material or deliver checkmate. The king must respond to the check, allowing the attacker to execute the combination.

Pattern 4: The Discovered Attack Endgame
In endgames, a discovered attack can pin a piece, fork two pieces, or create other tactical opportunities.

Pattern 5: The Discovered Deflection Endgame
In endgames, a discovered deflection can remove a key defender, exposing a target to attack.

The lesson: discovered attacks are everywhere in endgames. The player who understands the typical patterns and can execute them efficiently will win more endgames than the player who relies on blunders.`,
    },
    {
      title: "When to Watch for Discovered Attacks",
      type: "key-idea",
      content: `Discovered attacks are one of the most powerful tactical weapons in chess. Here's when to be most alert:

Watch for discovered attack opportunities when:
- You have a piece that can move to reveal an attack from a piece behind it
- The opponent has two pieces on the same line
- The position is open enough for long-range pieces to operate
- The endgame is approaching and pieces are being activated

Defend against discovered attacks when:
- The opponent has a piece that can move to reveal an attack
- Your pieces are on the same line as a more valuable piece
- The position is open enough for discovered attacks
- The endgame is approaching and you need to be careful

The lesson: discovered attacks are one of the most powerful tactical weapons in chess. Learning to both deliver and defend against them is a fundamental skill that will save you many games and win you many more.`,
    },
    {
      title: "Computer Era: Modern Analysis",
      type: "key-idea",
      content: `How has the engine revolution affected the discovered attack? The tactic has remained fundamentally the same. Here's what modern analysis tells us:

Engine Evaluation:
- The discovered attack is still one of the most common tactical motifs
- Engines see discovered attack opportunities instantly and recommend them
- The defense (blocking, moving the back piece, or capturing) is the standard defense
- Modern engines have refined the technique
- The discovered attack appears in approximately 15% of all tactical positions

Why the Discovered Attack Has Survived:
1. The discovered attack is fundamental to chess — it's about two threats for one move
2. The double check is the most forcing type
3. The windmill is the most dramatic example
4. The discovered attack rewards calculation and pattern recognition
5. The discovered attack is essential at every level of play

The Modern Approach:
- The discovered attack is taught in every beginner's course
- The defense is a fundamental skill
- The discovered attack is a common feature in online blitz
- The discovered attack is essential at the top level
- The discovered attack is celebrated as a masterpiece of chess

The lesson: the discovered attack has been a feature of chess for centuries. The engine revolution has not changed the tactic — it has only made it easier to spot. The fundamental appeal of the discovered attack remains: it's one of the most powerful tactical weapons in chess.`,
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
      content: `This is the comprehensive quiz for the Discovered Attack. White is to move in a position where a windmill is available.

You should now understand:
- The discovered attack gives two threats for one move
- The double check is the most forcing type
- The windmill is the most dramatic example
- The defense (blocking, moving the back piece, or capturing)
- The famous discovered attack patterns and tactical motifs

Find the best move that demonstrates your understanding of the Discovered Attack. The correct move is a key idea that recurs throughout discovered attack theory.`,
    },
    {
      title: "Summary: The Complete Discovered Attack Guide",
      type: "key-idea",
      content: `You've now completed a comprehensive course on the Discovered Attack. Here's what to remember:

Core Strategic Ideas:
1. The discovered attack gives two threats for one move
2. The double check is the most forcing type
3. The windmill is the most dramatic example
4. The moved piece can also create its own threat
5. The discovered attack rewards calculation and pattern recognition

The Key Patterns:
- The Windmill
- The Double Check
- The Discovered Check
- The Discovered Attack with Tempo
- The Discovered Deflection

The Defense:
- Don't allow your pieces to be aligned
- Block the alignment with a piece
- Move the back piece first (if possible)
- Capture the moving piece (if possible)
- Create a counter-threat

If you only remember three things:
- The discovered attack gives two threats for one move
- The double check is the most forcing type
- The windmill is the most dramatic example

The lesson: the Discovered Attack is one of the most powerful tactical weapons in chess. It rewards calculation, pattern recognition, and an understanding of piece coordination. By mastering the key patterns and defenses, you will have a weapon that serves you for a lifetime.`,
    },
  ],
};
