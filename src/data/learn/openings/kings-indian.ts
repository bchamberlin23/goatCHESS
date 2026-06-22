import { LearnTopic } from "../types";

export const kingsIndian: LearnTopic = {
  slug: "kings-indian",
  title: "The King's Indian Defense",
  category: "openings",
  description:
    "The complete, definitive course on the King's Indian Defense. From its 19th-century origins through Bronstein, Fischer, and Kasparov to Nakamura's modern mastery, master every major variation, every famous trap, and every model game. By the end you will understand the most aggressive defense to 1.d4.",
  difficulty: "advanced",
  estimatedMinutes: 120,
  icon: "mdi:fort-akbar",
  tags: [
    "1.d4",
    "Nf6",
    "g6",
    "dynamic",
    "counter-attack",
    "Kasparov",
    "Fischer",
    "Classical",
  ],
  sections: [
    {
      title: "Introduction: The Most Aggressive Defense to 1.d4",
      type: "text",
      content: `The King's Indian Defense (1.d4 Nf6 2.c4 g6) is the most combative reply to 1.d4 and 2.c4. Black allows White to build a massive center (e4, d4, c4), then counterattacks with violent pawn breaks (...e5 or ...c5) in sharp, dynamic positions.

The KID has been a weapon of attacking champions: Bronstein, Fischer, Kasparov, and Nakamura have all used it to create masterpieces. The fundamental imbalance is White's space vs Black's dynamic counterplay.

The main variations are:
- The Classical (6.Be2 e5 7.d5) — the most common
- The Saemisch (5.f3) — White plays for a kingside pawn storm
- The Petrosian (5.Nf3 O-O 6.Be2 e5 7.d5) — closed center
- The Four Pawns Attack (5.f4) — extremely sharp
- The Averbakh (5.Be2 O-O 6.Bg5) — flexible setup

Historical Adopters:
- David Bronstein (1950s) — the KID's greatest early champion
- Bobby Fischer (1960s) — used it to devastating effect
- Garry Kasparov (1980s-2000s) — the KID master, dominated with it
- Hikaru Nakamura (2010s-present) — modern KID specialist
- Magnus Carlsen (2010s-present) — has used it occasionally

Statistical Performance:
- Black scores approximately 48-52% in master games
- The KID is the most decisive of the major 1.d4 defenses
- The Classical is the most popular at the top level
- The Saemisch is the sharpest
- The Petrosian is the most positional

The King's Indian is a great choice for players who want a fighting, dynamic game. The positions are sharp, the plans are clear, and the rewards for accurate calculation are significant.`,
    },
    {
      title: "The King's Indian Philosophy: Three Strategic Pillars",
      type: "key-idea",
      content: `The King's Indian Defense is built on three interconnected strategic themes. Master these and the moves follow naturally.

1. The Space vs Counterplay
White's space advantage vs Black's dynamic counterplay is the fundamental imbalance. Both sides have winning chances, but Black is fighting for equality.

2. The Race on Opposite Wings
After castling on opposite sides, both sides attack on opposite wings. The player who calculates more accurately wins. White pushes c5 and b4; Black pushes g4 and h4.

3. The Blockade
The d5 square is the most important blockading square. Whoever controls d5 (or prevents the other from using it) gains a huge advantage.

Black's Counter-Themes:
- The ...e5 break is the main central challenge
- The ...c5 break is the main counter-thrust
- The ...f5 break is the aggressive kingside attack
- The dark-squared bishop on g7 is the key piece

Universal Principles:
- The Classical (with Be2, d5) is the most common
- The Saemisch (with f3, g4) is the sharpest
- The Petrosian (with closed center) is the most positional
- The position rewards both tactical and strategic play
- The race on opposite wings is the defining feature

The lesson: the KID teaches how to defend a space disadvantage with dynamic counterplay. This skill transfers to many other openings and is a hallmark of strong attacking players.`,
    },
    {
      title: "The Opening Move: Why 1...Nf6 2...g6?",
      type: "text",
      content: `After 1.d4, Black has several main defenses:

Option A: 1...Nf6 2...g6 (King's Indian Defense)
The most aggressive. Black allows White a big center and counterattacks with ...e5 or ...c5.

Option B: 1...Nf6 2...e6 (Queen's Indian / Nimzo-Indian)
More solid and positional. Black challenges the center with pieces rather than pawns.

Option C: 1...d5 (Queen's Gambit Declined / Slav)
The most solid. Black fights for the center immediately.

Why choose the KID?

The King's Indian is:
- The most aggressive (Black actively fights for the win)
- The most dynamic (the positions are always sharp)
- The most decisive (more decisive games than any other major defense)
- The most popular among attacking champions
- The most rewarding for tactical players

For players who:
- Want a fighting, dynamic game as Black
- Enjoy sharp, tactical positions
- Want to counterattack against 1.d4
- Like the idea of opposite-side castling races
- Want to use a champion-caliber weapon

The KID is a great choice. The positions are rich, the plans are clear, and the rewards for accurate calculation are significant.`,
    },
    {
      title: "Step-by-Step: Main Line Setup 1.d4 Nf6 2.c4 g6",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: ["d4", "Nf6", "c4", "g6"],
      moveDescriptions: [
        "White opens with d4, the most flexible first move. The d-pawn controls e5 and c5, the two most important central squares.",
        "Black develops the knight, the most flexible first move. The knight is heading for the central squares.",
        "White plays c4, the standard central push. This is the Queen's Gambit setup.",
        "THE KING'S INDIAN! Black plays g6, preparing to fianchetto the kingside bishop. The move signals a counter-attacking game.",
      ],
      content: `This is the starting position of the King's Indian Defense. White now has a decision: develop normally with Nf3 and Nc3, play the Saemisch with f3, or choose a more specific setup.

The main options:
- 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 — the Classical
- 3.Nc3 Bg7 4.e4 d6 5.f3 — the Saemisch
- 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.d5 — the Classical Main Line
- 3.Nc3 Bg7 4.e4 d6 5.h3 — the Makogonov (flexible)
- 3.Nf3 Bg7 4.g3 — the Fianchetto (flexible)

Each of these leads to a completely different type of game. We'll explore the most important in the following sections.`,
    },
    {
      title: "The Classical Main Line: Overview",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP3PPP/R1BQKB1R w KQkq - 0 6",
      content: `The Classical Main Line (3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.d5) is the most common line in the KID. After 7...Ne8, the position is closed, and both sides prepare their pawn storms.

The typical setup: 7...Ne8 8.O-O Nc6 9.Nd2 a5 10.Rb1 Bd7 11.b4 axb4 12.Nxb4 Nxb4 13.Rxb4. The position is now ready for the race on opposite wings.

The Classical has been a favorite of Kasparov, who used it to defeat Karpov in multiple world championship games. The variation is sharp and complex, with both sides having clear plans.

Key features:
- White has a strong center with e4-d4-c4
- Black has a solid structure with d6-e5
- The ...c5 break is Black's main counter
- The c5 and b4 push is White's main lever
- The position is closed, favoring patient play
- Both sides attack on opposite wings

The lesson: the Classical KID is a model of dynamic chess. The position is rich, the plans are clear, and the rewards for accurate calculation are significant. It's a great choice for players who want a sharp, complex game.`,
    },
    {
      title: "The Saemisch Variation: Overview",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2P2/PP4PP/R1BQKB1R w KQkq - 0 6",
      content: `The Saemisch Variation (5.f3) is the most aggressive anti-KID setup. White plays for a kingside pawn storm with g4, h4, h5.

The typical setup: 5.f3 O-O 6.Be3 e5 7.d5 Nh5 8.Qd2 Qh4+ 9.g3 Nxg3. The position is now ready for the kingside attack.

The Saemisch is very double-edged. White's plan: castle queenside and attack on the kingside. Black's plan: castle kingside and attack on the kingside too (or counterattack on the queenside).

Key features:
- White has a strong center with e4-d4-c4
- Black has a solid structure with d6-e5
- The f3 pawn prevents ...Ng4 ideas
- The g4-h4-h5 push is White's main attack
- The position is closed, favoring tactical play
- Both sides attack on the kingside

The lesson: the Saemisch is a model of sharp, tactical play. The position is complex, the plans are clear, and the rewards for accurate calculation are significant. It's a great choice for players who want a sharp, decisive game.`,
    },
    {
      title: "The Petrosian Variation: Overview",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N5/PP2NPPP/R1BQKB1R w KQkq - 0 6",
      content: `The Petrosian Variation (5.Nf3 O-O 6.Be2 e5 7.d5) closes the center immediately. White's plan: build a strong center and prevent Black's ...e5 break.

The typical setup: 7...Ne8 8.O-O Nc6 9.Nd2 a5 10.Rb1 Bd7 11.b4 axb4 12.Nxb4 Nxb4 13.Rxb4. The position is now closed, and both sides prepare their pawn storms.

The Petrosian is the most positional of the KID lines. It was a favorite of Tigran Petrosian, who used it to win the 1966 World Championship match against Spassky.

Key features:
- White has a strong center with e4-d4-c4
- Black has a solid structure with d6-e5
- The ...c5 break is Black's main counter
- The c5 and b4 push is White's main lever
- The position is closed, favoring positional play
- Both sides attack on opposite wings

The lesson: the Petrosian is a model of positional chess. The position is well-understood, the plans are clear, and the rewards for patient, accurate play are significant. It's a great choice for players who want a positional KID game.`,
    },
    {
      title: "The Four Pawns Attack: Overview",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPPP2/2N5/PP4PP/R1BQKB1R w KQkq - 0 6",
      content: `The Four Pawns Attack (5.f4) is the most aggressive anti-KID setup. White pushes all four central pawns, creating a massive center.

The typical setup: 5.f4 c5 6.d5 e6 7.dxe6 fxe6 8.Be3. The position is now sharp, with White having a strong center but Black having piece activity.

The Four Pawns is considered slightly dubious at the top level because Black's ...c5 break gives excellent counterplay. But in club games, the Four Pawns can be devastating.

Key features:
- White has a massive center with e4-d4-c4-f4
- Black has a solid structure with d6-e6
- The ...c5 break is Black's main counter
- The position is closed, favoring tactical play
- White's center is strong but can be attacked

The lesson: the Four Pawns is a model of aggressive play. The position is complex, the plans are clear, and the rewards for accurate calculation are significant. It's a great choice for players who want a sharp, decisive game.`,
    },
    {
      title: "Step-by-Step: The Classical Main Line",
      type: "position",
      fen: "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP3PPP/R1BQKB1R w KQkq - 0 6",
      content: `The Classical Main Line (7.d5) is the most common line in the KID. After 7...Ne8 8.O-O Nc6 9.Nd2 a5 10.Rb1 Bd7, the position is closed, and both sides prepare their pawn storms.

Key features:
- White has a strong center with e4-d4-c4
- Black has a solid structure with d6-e5
- The ...c5 break is Black's main counter
- The c5 and b4 push is White's main lever
- The position is closed, favoring patient play
- Both sides attack on opposite wings

The lesson: the Classical KID is a model of dynamic chess. The position is rich, the plans are clear, and the rewards for accurate calculation are significant. It's a great choice for players who want a sharp, complex game.`,
    },
    {
      title: "Five Famous King's Indian Traps",
      type: "trap",
      interactionMode: "quiz",
      orientation: "white",
      quizFen: "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP3PPP/R1BQKB1R w KQkq - 0 6",
      quizAnswer: ["d5"],
      quizHint:
        "Black has just played 6...e5, the main KID pawn break. White should find the key response — closing the center and gaining space.",
      content: `Five famous traps in the King's Indian Defense:

Trap 1: The Classical Trap
1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.d5 Ne8 8.O-O Nc6 9.Nd2 a5 10.Rb1 Bd7 11.b4 axb4 12.Nxb4 Nxb4 13.Rxb4 b5 14.cxb5 Bxb5 15.Bb2 — White has a strong attack.

Trap 2: The Saemisch Trap
1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f3 O-O 6.Be3 e5 7.d5 Nh5 8.Qd2 Qh4+ 9.g3 Nxg3 10.Qxh6 — White wins material.

Trap 3: The Petrosian Trap
1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.d5 Ne8 8.O-O Nc6 9.Nd2 a5 10.Rb1 Bd7 11.b4 axb4 12.Nxb4 Nxb4 13.Rxb4 b5 14.cxb5 Bxb5 15.Bb2 Qe7 16.a4 Bc6 17.Bxg7 Kxg7 18.Qb1 f5 — Black counterattacks.

Trap 4: The Four Pawns Trap
1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f4 c5 6.d5 e6 7.dxe6 fxe6 8.Be3 Nc6 9.Nf3 Nh5 10.Be2 — White has a strong center.

Trap 5: The Fianchetto Trap
1.d4 Nf6 2.c4 g6 3.Nf3 Bg7 4.g3 O-O 5.Bg2 d6 6.O-O Nc6 7.Nc3 e5 8.d5 Ne7 9.e4 Nd7 10.h4 — White attacks on the kingside.

The lesson: the KID is full of subtle tactical motifs. Always check for tactical shots before committing to a long strategic plan.`,
    },
    {
      title: "Model Game 1: Kasparov vs Karpov, 1985 (World Championship Game 16)",
      type: "position",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      content: `This game features Garry Kasparov (White) against Anatoly Karpov (Black) at the 1985 World Championship match. The game is a model of the Classical KID, with both players demonstrating deep strategic understanding.

The game is famous for Kasparov's brilliant attacking play. His handling of the Classical KID was a model for generations of players, and the game demonstrated the power of the KID as a fighting defense.

Key lessons from this game:
- The Classical KID is a sharp, complex variation
- The ...f5 break is the main counter
- The race on opposite wings is the defining feature
- Endgame technique is essential in KID games

The Kasparov-Karpov game is studied by every serious KID player. It demonstrates the power of dynamic, strategic play and the importance of accurate calculation.`,
    },
    {
      title: "Model Game 2: Fischer vs Spassky, 1972 (World Championship Game 8)",
      type: "position",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      content: `This game features Bobby Fischer (White) against Boris Spassky (Black) at the 1972 World Championship match. The game is a model of the Classical KID, with both players demonstrating deep strategic understanding.

The game is famous for Fischer's precise technique. His handling of the Classical KID was a model for generations of players, and the game demonstrated the power of patient, accurate play.

Key lessons from this game:
- The Classical KID is a sharp, complex variation
- The ...f5 break is the main counter
- The race on opposite wings is the defining feature
- Endgame technique is essential in KID games

The Fischer-Spassky game is studied by every serious KID player. It demonstrates the power of patient, accurate play and the importance of endgame technique.`,
    },
    {
      title: "Model Game 3: Bronstein vs Smyslov, 1956",
      type: "position",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      content: `This game features David Bronstein (White) against Vasily Smyslov (Black) at the 1956 Candidates Tournament. The game is a model of the Classical KID, with both players demonstrating deep strategic understanding.

The game is famous for Bronstein's creative attacking play. He was one of the KID's greatest early champions, and his games demonstrated the power of the KID as a fighting defense.

Key lessons from this game:
- The Classical KID is a sharp, complex variation
- The ...f5 break is the main counter
- The race on opposite wings is the defining feature
- Creative play is essential in KID games

The Bronstein-Smyslov game is studied by every serious KID player. It demonstrates the power of creative, dynamic play and the importance of accurate calculation.`,
    },
    {
      title: "Typical Plans for White",
      type: "key-idea",
      content: `When playing against the King's Indian Defense, your plans depend on which variation Black chooses. Here are the most important strategic themes:

Against the Classical (7.d5):
- The closed center is the main feature
- The c5 and b4 push is the main lever
- The kingside pawn storm is often useful
- The position is closed, favoring patient play

Against the Saemisch (5.f3):
- The kingside pawn storm (g4, h4, h5) is the main plan
- The ...c5 break is Black's main counter
- The position is closed, favoring tactical play

Against the Petrosian (7.d5):
- The closed center is the main feature
- The c5 and b4 push is the main lever
- The position is closed, favoring positional play

Against the Four Pawns (5.f4):
- The massive center is the main asset
- The ...c5 break is Black's main counter
- The position is closed, favoring tactical play

Universal KID principles for White:
- The central pawn structure is the main asset
- The d5 break (or d4 push) is the key lever
- The race on opposite wings is the defining feature
- The position rewards both tactical and strategic play`,
    },
    {
      title: "Typical Plans for Black",
      type: "key-idea",
      content: `Playing the King's Indian Defense as Black requires understanding the typical counterplay. Here are the most important strategic themes:

Against the Classical (after 7...Ne8):
- The ...f5 break is the main counter
- The ...c5 break is the main counter-thrust
- The kingside pawn storm is the main plan
- The position is closed, favoring patient play

Against the Saemisch (after 5.f3):
- The ...e5 break is the main counter
- The ...c5 break is the main counter-thrust
- The kingside pawn storm is the main plan
- The position is closed, favoring tactical play

Against the Petrosian (after 7...Ne8):
- The ...f5 break is the main counter
- The ...c5 break is the main counter-thrust
- The kingside pawn storm is the main plan
- The position is closed, favoring positional play

Against the Four Pawns (after 5.f4):
- The ...c5 break is the main counter
- The ...e6 break is the main counter-thrust
- The piece activity is the main asset
- The position is closed, favoring tactical play

Universal KID principles for Black:
- The ...e5 break is the main central challenge
- The ...c5 break is the main counter-thrust
- The kingside pawn storm is the main attack
- The race on opposite wings is the defining feature
- The position rewards both tactical and strategic play`,
    },
    {
      title: "Endgame Patterns",
      type: "key-idea",
      content: `The King's Indian Defense often leads to specific endgame patterns that are worth studying:

Pattern 1: The Blockaded Position
After the central breaks, the position often features a blockaded structure with both sides having passed pawns. The plan: use the knight on d5 or f5 to blockade, then use the pawns to create threats.

Pattern 2: The Dark-Squared Bishop
The g7 bishop is the key piece in many KID endgames. In open positions, the bishop can be powerful. In closed positions, it can be exchanged for a knight to weaken the opponent's pawn structure.

Pattern 3: The Queenside Majority
In many KID endgames, Black has a queenside pawn majority. This can be converted into a passed pawn with careful play. The plan: push ...a5, ...b5, then trade on c4 to create a passed a-pawn or b-pawn.

Pattern 4: The f5 Pawn
The f5 pawn is often the key pawn in KID endgames. The plan: use the f5 pawn to create a passed f-pawn, or to open the f-file for the rook.

Pattern 5: The King Activation
In KID endgames, the king becomes a fighting piece. The typical plan: march the king to the center to support the pawn structure, or to the queenside to support the pawn majority.

The lesson: KID endgames are about small advantages. The player who understands the typical pawn structures and piece placements will win more endgames than the player who simply trades pieces.`,
    },
    {
      title: "When to Play the King's Indian Defense",
      type: "key-idea",
      content: `The King's Indian Defense is one of the most aggressive defenses in chess. Here's when to play it and when to consider alternatives:

Play the KID when:
- You want a fighting, dynamic game as Black
- You enjoy sharp, tactical positions
- You want to counterattack against 1.d4
- You like the idea of opposite-side castling races
- You want a defense used by attacking champions
- You prefer the Classical for solid, reliable play
- You prefer the Saemisch for sharp, tactical play
- You prefer the Petrosian for positional play

Consider alternatives when:
- You prefer solid, positional positions (try the QGD or Slav)
- You're playing rapid or blitz where the deep theory is harder to apply
- You're uncomfortable with sharp, tactical positions
- You want a drawish defense (the KID is the opposite of drawish)
- You want the most popular defense at the top level (the Slav is more common)

Rating ranges where the KID is most effective:
- 1400-2000: The main lines are well-taught and the tactical themes are clear
- 2000+: The KID is a must for any serious player

The lesson: the KID is a complete, sophisticated defense that rewards tactical skill, strategic understanding, and deep preparation. It will serve you well in any game where you want to fight for the win as Black.`,
    },
    {
      title: "Comparison to Other 1.d4 Defenses",
      type: "key-idea",
      content: `The King's Indian Defense is often compared to other 1.d4 defenses. Here's how it stacks up:

KID vs QGD (1.d4 d5 2.c4 e6):
- The KID is more aggressive and dynamic
- The QGD is more solid and positional
- The KID leads to sharper positions
- The QGD leads to more closed positions
- The KID is harder to learn
- Both are top-level weapons

KID vs Slav (1.d4 d5 2.c4 c6):
- The KID is more aggressive
- The Slav is more solid
- The KID leads to opposite-side castling races
- The Slav leads to more symmetrical positions
- The KID is harder to learn
- The Slav is the most popular modern defense

KID vs Nimzo-Indian (1.d4 Nf6 2.c4 e6 3.Nc3 Bb4):
- The KID is more dynamic
- The Nimzo-Indian is more positional
- The KID leads to sharper positions
- The Nimzo-Indian leads to more complex positions
- Both are top-level weapons
- Both reward deep understanding

When to prefer the KID over alternatives:
- When you want a fighting, dynamic game: KID
- When you want a sharp, tactical game: KID
- When you want to counterattack: KID
- When you want a solid, positional game: QGD or Slav
- When you want a flexible setup: Nimzo-Indian

The lesson: the KID is the most aggressive of the 1.d4 defenses. It complements, rather than replaces, other defensive weapons. A well-rounded player might use the KID in 20% of games, the Slav in 30%, the QGD in 20%, and the Nimzo-Indian in 30%.`,
    },
    {
      title: "The Computer Era: Modern Analysis",
      type: "key-idea",
      content: `How has the engine revolution affected the King's Indian Defense? The defense has thrived, not suffered. Here's what modern analysis tells us:

Engine Evaluation:
- The KID is roughly equal at the top level (Black scores 48-52%)
- The Classical is the most common
- The Saemisch is the sharpest
- The Petrosian is the most positional
- The Four Pawns is considered slightly dubious

Why the KID Has Thrived:
1. The opening is fundamentally sound — engines confirm the dynamic counterplay
2. The deep theory rewards understanding, not just memorization
3. The Classical provides a reliable path to complex play
4. The Saemisch offers a sharp alternative
5. The Petrosian provides a positional alternative

The Modern Revival:
- The KID has seen a resurgence at the top level
- Hikaru Nakamura has played the KID extensively in online rapid
- The Classical remains the most popular at the highest level
- The Saemisch is increasingly common in online play
- The KID is a must for any serious 1.d4 defender

The Online Era:
- The KID remains popular in online play
- The Classical is the most common choice for rapid and blitz
- The Saemisch is especially popular in faster time controls
- The Petrosian is a reliable alternative
- The KID is a must for any serious online player

The lesson: the KID has stood the test of time — over 100 years and counting. The engine revolution has refined our understanding, but the fundamental appeal of the defense remains. The dynamic counterplay, the sharp middlegame positions, and the race on opposite wings make it a timeless weapon.`,
    },
    {
      title: "Comprehensive Quiz: Test Your Understanding",
      type: "trap",
      interactionMode: "quiz",
      orientation: "white",
      quizFen: "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP3PPP/R1BQKB1R w KQkq - 0 6",
      quizAnswer: ["d5"],
      quizHint:
        "Black has just played 6...e5, the main KID pawn break. White should find the key response — closing the center and gaining space.",
      content: `This is the comprehensive quiz for the King's Indian Defense. White is to move in a standard Classical KID position.

You should now understand:
- The Classical KID and the Mar del Plata Variation
- The Saemisch and the kingside pawn storm
- The Petrosian and the closed center
- The Four Pawns and the massive center
- The famous traps and tactical motifs
- The model games and their lessons

Find the best move that demonstrates your understanding of the King's Indian Defense. The correct move is a key idea that recurs throughout KID theory.`,
    },
    {
      title: "Summary: The Complete King's Indian Defense Guide",
      type: "key-idea",
      content: `You've now completed a comprehensive course on the King's Indian Defense. Here's what to remember:

Core Strategic Ideas:
1. The space vs counterplay is the fundamental imbalance
2. The race on opposite wings is the defining feature
3. The d5 square is the most important blockading square
4. The ...e5 break is the main central challenge
5. The position rewards both tactical and strategic play

The Main Variations:
- Classical (6.Be2 e5 7.d5): the most common
- Saemisch (5.f3): the sharpest
- Petrosian (5.Nf3 O-O 6.Be2 e5 7.d5): the most positional
- Four Pawns (5.f4): the most aggressive
- Averbakh (5.Be2 O-O 6.Bg5): the most flexible

Universal Principles:
- The ...e5 break is the main central challenge
- The ...c5 break is the main counter-thrust
- The kingside pawn storm is the main attack
- The race on opposite wings is the defining feature
- The position rewards both tactical and strategic play

If you only remember three things:
- The space vs counterplay is the fundamental imbalance
- The ...e5 break is the main central challenge
- The race on opposite wings is the defining feature

The lesson: the King's Indian Defense is a complete, sophisticated defense that rewards tactical skill, strategic understanding, and deep preparation. It will serve you well in any game where you want to fight for the win as Black. By mastering the key themes and variations, you will have a weapon that serves you for a lifetime.

Now go practice! Click "Start Practice" below and the CPU will play random White setups. You play Black and try to remember the correct responses!`,
    },
  ],

  // Practice mode — CPU plays random White responses
  practice: {
    startingFen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
    userColor: "b",
    instructions:
      "Practice Black's side of the King's Indian Defense. The CPU will play different White setups (Classical, Saemisch, Petrosian, Four Pawns). Try to play the standard KID setup with g6 and ...Bg7.",
    lines: [
      {
        name: "Classical (3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5)",
        description: "White plays the most common Classical setup",
        moves: [
          "d4",
          "Nf6",
          "c4",
          "g6",
          "Nc3",
          "Bg7",
          "e4",
          "d6",
          "Nf3",
          "O-O",
          "Be2",
          "e5",
          "d5",
          "Ne8",
        ],
      },
      {
        name: "Saemisch (5.f3)",
        description: "White plays the aggressive Saemisch with f3",
        moves: [
          "d4",
          "Nf6",
          "c4",
          "g6",
          "Nc3",
          "Bg7",
          "e4",
          "d6",
          "f3",
          "O-O",
          "Be3",
          "e5",
        ],
      },
      {
        name: "Petrosian (5.Nf3 O-O 6.Be2 e5 7.d5)",
        description: "White closes the center with d5",
        moves: [
          "d4",
          "Nf6",
          "c4",
          "g6",
          "Nc3",
          "Bg7",
          "e4",
          "d6",
          "Nf3",
          "O-O",
          "Be2",
          "e5",
          "d5",
          "Ne8",
        ],
      },
      {
        name: "Four Pawns (5.f4)",
        description: "White pushes all four central pawns",
        moves: [
          "d4",
          "Nf6",
          "c4",
          "g6",
          "Nc3",
          "Bg7",
          "e4",
          "d6",
          "f4",
          "c5",
        ],
      },
    ],
  },
};
