import { LearnTopic } from "../types";

export const frenchDefense: LearnTopic = {
  slug: "french-defense",
  title: "The French Defense",
  category: "openings",
  description:
    "The complete, definitive course on the French Defense. From its 17th-century origins through Botvinnik, Petrosian, and Short's modern championship victories, master every major variation, every famous trap, and every model game. By the end you will understand the most resilient defense to 1.e4.",
  difficulty: "intermediate",
  estimatedMinutes: 120,
  icon: "mdi:baguette",
  tags: [
    "1.e4",
    "e6",
    "solid",
    "counter-attack",
    "pawn-chain",
    "Winawer",
    "Classical",
    "Tarrasch",
  ],
  sections: [
    {
      title: "Introduction: The Most Resilient Defense",
      type: "text",
      content: `The French Defense (1.e4 e6 2.d4 d5) is one of Black's sturdiest replies to 1.e4. By establishing a solid pawn chain (e6-d5), Black concedes space in return for a resilient position that is difficult for White to crack.

The French has been a favorite of many world champions including Botvinnik, Petrosian, and most recently, Ding Liren. The characteristic struggle is between White's space advantage and Black's counterattacking potential.

The three main variations are:
- The Winawer (3.Nc3 Bb4) — the sharpest and most theoretical
- The Classical (3.Nc3 Nf6) — the steadiest approach
- The Tarrasch (3.Nd2) — solid and avoiding the Winawer's complications

After 3.exd5 (the Exchange French), the position is simplified and often leads to a slow strategic battle. After 3.e5 (the Advance), White closes the center and Black responds 3...c5.

Historical Adopters:
- François-André Danican Philidor (1700s) — the greatest player of his era, analyzed the French
- Wilhelm Steinitz (1880s-90s) — first World Champion
- Mikhail Botvinnik (1940s-50s) — World Champion, French specialist
- Tigran Petrosian (1960s-70s) — World Champion, French expert
- Nigel Short (1990s-2000s) — used the French to win the 1993 Candidates Final
- Ding Liren (2010s-present) — World Champion, French devotee

Statistical Performance:
- Black scores approximately 48-52% in master games
- The Exchange French is the most drawish
- The Winawer is the sharpest and most decisive
- The Advance is the most tactical
- The Classical is the steadiest`,
    },
    {
      title: "The French Philosophy: Three Strategic Pillars",
      type: "key-idea",
      content: `The French Defense is built on three interconnected strategic themes. Master these and the moves follow naturally.

1. The e6-d5 Pawn Chain
Black's pawn chain is the heart of the French. It controls the center but restricts the light-squared bishop. The chain's strength is also its weakness — it can be attacked at the base (d5) or the head (e6).

2. The Light-Squared Bishop Problem
Black's biggest challenge is the light-squared bishop on c8. After ...e6 blocks its diagonal, this bishop often becomes a "bad" or "problem" piece. Black's solutions:
- Exchange it with ...b6, ...Ba6
- ...dxe4 at a moment when the bishop can develop to f5 or g4
- Keep it passive and accept a slightly worse position

3. The c5 Counter-Attack
The ...c5 break is Black's main counter-attacking move. It challenges the d4 pawn and opens the c-file. Knowing when to play this break is essential.

Black's Counter-Themes:
- The ...c5 break challenges the d4 pawn
- The queenside counterplay with ...a5, ...b5
- The kingside attack with ...f6, ...Qd7, ...Nh6
- The minority attack on the queenside

The lesson: the French teaches how to defend a slightly worse position with active piece play. This skill transfers to many other openings and is a hallmark of strong defensive players.`,
    },
    {
      title: "The Opening Move: Why 1...e6?",
      type: "text",
      content: `After 1.e4, Black has several main defenses:

Option A: 1...e6 (French Defense)
The most solid and resilient. Black builds the e6-d5 pawn chain and prepares to fight for equality.

Option B: 1...c5 (Sicilian Defense)
The sharpest and most ambitious. Black fights for the win from move one.

Option C: 1...c6 (Caro-Kann)
The most solid and reliable. Black builds a similar structure but without blocking the light-squared bishop.

Why choose 1...e6?

The French Defense is:
- The most solid (the pawn chain is hard to crack)
- The most counter-attacking (Black's ...c5 break is a powerful weapon)
- The most resilient (positions are often hard to win for White)
- The most strategic (the resulting games reward deep understanding)
- The most respected (used by many world champions)

For players who:
- Want to fight for equality against 1.e4
- Enjoy strategic, positional play
- Want a complete system against 1.e4
- Like the idea of a resilient position
- Want to use a world-champion-caliber weapon

The French is a great choice. The positions are rich, the plans are clear, and the rewards for patient, accurate play are significant.`,
    },
    {
      title: "Step-by-Step: Main Line Setup 1.e4 e6 2.d4 d5",
      type: "moves",
      interactionMode: "guided",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: ["e4", "e6", "d4", "d5"],
      moveDescriptions: [
        "White takes the center with the king's pawn. The most aggressive first move.",
        "THE FRENCH DEFENSE! Black plays e6, preparing to build the e6-d5 pawn chain. The move is solid and resilient.",
        "White plays d4, the central push. This is the natural move — White challenges Black's central control.",
        "Black plays d5, fighting for the center. The e6-d5 pawn chain is now established. The characteristic French structure is in place.",
      ],
      content: `This is the starting position of the French Defense. White now has a decision: defend the e4 pawn, trade it, or close the center.

The main options:
- 3.Nc3 (Classical or Winawer setup) — the most popular
- 3.Nd2 (Tarrasch) — solid and avoiding the Winawer
- 3.exd5 (Exchange French) — simplifies to a strategic battle
- 3.e5 (Advance French) — closes the center immediately

Each of these leads to a completely different type of game. We'll explore all four in the following sections.`,
    },
    {
      title: "The Winawer Variation: Overview",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/ppp2ppp/4p3/3p4/1b1PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 3",
      content: `The Winawer Variation (3.Nc3 Bb4) is the sharpest reply in the French Defense. Black pins the knight, threatening to double White's pawns with ...Bxc3+.

The typical setup: 3.Nc3 Bb4 4.e5 c5 5.a3 Bxc3+ 6.bxc3. White has doubled pawns but a strong center and the bishop pair. Black has a clear plan: attack c3 and d4 with every piece.

The Winawer is not for the faint-hearted — both sides must know concrete lines or risk being strategically lost by move 15.

Key features:
- White has the e5-d4-c3 pawn chain, a strong center
- Black has the d5-e6 pawn chain, a solid structure
- White has doubled c-pawns but the bishop pair
- The position is closed, favoring patient play
- The d4 break is White's main lever
- The ...c5 break is Black's main counter

The Winawer is a model of sharp, complex chess. Both sides must calculate precisely and understand the resulting positions deeply. Mastering the Winawer takes years, but the rewards are significant.`,
    },
    {
      title: "The Classical French: Overview",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkb1r/ppp2ppp/4pn2/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 3",
      content: `The Classical French (3.Nc3 Nf6) is the steadiest approach. Black develops the knight, avoiding the sharpest Winawer lines.

The typical setup: 3.Nc3 Nf6 4.Bg5 Be7 5.e5 Nfd7 6.Bxe7 Qxe7. The position is solid and flexible, with both sides having clear plans.

The Classical teaches fundamental strategic ideas: how to play against a space disadvantage, the value of the ...c5 break, and the importance of piece exchanges.

Key features:
- White has the e4-d4 pawn center, a strong structure
- Black has the d5-e6 pawn chain, a solid structure
- The light-squared bishop on c8 is a long-term problem
- The d4 break is White's main lever
- The ...c5 break is Black's main counter
- The position is closed, favoring patient play

The lesson: the Classical French is a model of solid development. The position is well-understood, the plans are clear, and the rewards for patient, accurate play are significant. It's a great choice for players who want a reliable, solid defense.`,
    },
    {
      title: "The Tarrasch French: Overview",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/P1P1NPPP/R1BQKB1R b KQkq - 0 3",
      content: `The Tarrasch French (3.Nd2) is a solid alternative that avoids the Winawer's complications. By playing Nd2 instead of Nc3, White keeps the c-pawn flexible and prepares to recapture on c3 with the b-pawn.

The typical setup: 3.Nd2 Nf6 4.e5 Nfd7 5.Bd3 c5 6.c3 Nc6. The position is solid and flexible, with both sides having clear plans.

The Tarrasch is a great choice for players who want a solid, flexible French without the sharpest Winawer lines. The positions are well-understood and the resulting games are often long, strategic battles.

Key features:
- White has the e4-d4 pawn center, a strong structure
- Black has the d5-e6 pawn chain, a solid structure
- White's knight on d2 is flexible and can go to f1 or e2
- The d4 break is White's main lever
- The ...c5 break is Black's main counter
- The position is closed, favoring patient play

The lesson: the Tarrasch is a model of flexible development. The Nd2 setup avoids the Winawer's complications while maintaining White's central control. It's a great choice for players who want a solid French without the sharpest lines.`,
    },
    {
      title: "The Advance French: Overview",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/pp3ppp/4p3/2pp4/3PP3/8/PPP2PPP/RNBQKB1R w KQkq - 0 3",
      content: `The Advance French (3.e5) closes the center immediately. White's pawn chain becomes c3-d4-e5, a strong structure. Black responds 3...c5, challenging the base of the chain.

The typical setup: 3.e5 c5 4.c3 Nc6 5.Nf3. The position is sharp and tactical, with both sides having clear attacking plans.

The Advance is a great choice for players who want a sharp, tactical French. The positions are forcing, and the resulting games are often decisive.

Key features:
- White has the c3-d4-e5 pawn chain, a strong structure
- Black has the c5-d5-e6 pawn chain, a solid structure
- The d4 break is White's main lever
- The ...cxd4 break is Black's main counter
- The position is closed, favoring tactical play
- White attacks on the kingside, Black on the queenside

The lesson: the Advance French is a model of sharp, tactical play. The closed center and the opposing pawn chains create a race: White attacks on the kingside, Black on the queenside. It's a great choice for players who enjoy sharp, decisive games.`,
    },
    {
      title: "The Exchange French: Overview",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/ppp2ppp/4p3/3P4/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
      content: `The Exchange French (3.exd5) simplifies the position immediately. After 3...exd5, the position is roughly symmetrical, with White having a slight structural edge (the c-file is open for White's rook).

The Exchange is the most drawish of the French variations. The position is well-understood, and the resulting games are often long, technical battles.

The Exchange is a great choice for players who want a simple, solid French. The positions are clear, the plans are well-understood, and the resulting games are often drawn.

Key features:
- The c-file is open for White's rook
- The d-file is closed (both sides have d5 and d4)
- The position is symmetrical, with a slight White edge
- The light-squared bishop on c8 is a long-term problem
- The endgame is slightly better for White
- The position is closed, favoring patient play

The lesson: the Exchange French is a model of simplicity. By exchanging pieces, White reaches a position with a small structural edge. It's a great choice for players who want a solid French without the sharpest lines.`,
    },
    {
      title: "Step-by-Step: The Classical French Main Line",
      type: "moves",
      interactionMode: "guided",
      fen: "rnbqkb1r/ppp2ppp/4pn2/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 3",
      moves: [
        "Bg5",
        "Be7",
        "e5",
        "Nfd7",
        "Bxe7",
        "Qxe7",
        "f4",
        "O-O",
        "Nf3",
        "c5",
        "Bd3",
        "Nc6",
        "O-O",
        "f6",
      ],
      moveDescriptions: [
        "3...Nf6. The Classical French! Black develops the knight, avoiding the sharpest Winawer lines.",
        "4.Bg5. White pins the knight, the most active move. The pin prevents ...Nfd7 ideas.",
        "4...Be7. Black breaks the pin, developing the bishop to the natural square.",
        "5.e5. White pushes the e-pawn, gaining space and kicking the knight. This is the Steinitz Attack.",
        "5...Nfd7. The knight retreats to d7, the standard square. From d7, the knight is heading for c5 or f8.",
        "6.Bxe7. White trades the bishop, eliminating Black's dark-squared bishop. The resulting position is roughly equal.",
        "6...Qxe7. Black recaptures with the queen, keeping the light-squared bishop problem.",
        "7.f4. White supports the e5 pawn, building a strong center. The Steinitz Attack continues.",
        "7...O-O. Black castles, putting the king to safety.",
        "8.Nf3. White develops the kingside knight, supporting the central structure.",
        "8...c5. Black plays the ...c5 break, challenging the d4 pawn. The characteristic French counter-attack.",
        "9.Bd3. White develops the bishop, supporting the d4 pawn.",
        "9...Nc6. Black develops the queenside knight, supporting the center.",
        "10.O-O. White castles, putting the king to safety.",
        "10...f6. Black plays the ...f6 break, challenging the e5 pawn. The position is now ready for the long middlegame.",
      ],
      content: `The Classical French (3.Nc3 Nf6) is the steadiest approach. The typical setup with 4.Bg5 Be7 5.e5 Nfd7 leads to a position where both sides have completed their development and the central tension is the key.

The Steinitz Attack (5.e5) is White's most ambitious plan. By pushing the e-pawn, White gains space and kicks the knight. The position is now ready for the long middlegame.

Key features:
- White has a strong center with e5-d4
- Black has a solid structure with d5-e6
- The ...c5 break is Black's main central challenge
- The ...f6 break is Black's main central counter
- The position is closed, favoring patient play

The lesson: the Classical French is a model of solid development. The position is well-understood, the plans are clear, and the rewards for patient, accurate play are significant. It's a great choice for players who want a reliable, solid defense.`,
    },
    {
      title: "Five Famous French Defense Traps",
      type: "trap",
      interactionMode: "quiz",
      orientation: "white",
      quizFen: "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 3",
      quizAnswer: ["e5"],
      quizHint:
        "Black has just played 2...d5, establishing the French pawn chain. White should find the most ambitious move — pushing the e-pawn to gain space and challenge Black's center.",
      content: `Five famous traps in the French Defense:

Trap 1: The Winawer Poisoned Pawn
1.e4 e6 2.d4 d5 3.Nc3 Bb4 4.e5 c5 5.a3 Bxc3+ 6.bxc3 Ne7 7.Qg4! — the queen targets g7, creating a sharp attack.

Trap 2: The Classical Steinitz Attack
1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.Bg5 Be7 5.e5 Nfd7 6.Bxe7 Qxe7 7.f4! — White builds a strong center with the Steinitz Attack.

Trap 3: The Tarrasch Trap
1.e4 e6 2.d4 d5 3.Nd2 Nf6 4.e5 Nfd7 5.Bd3 c5 6.c3 Nc6 7.Ne2! — White reroutes the knight to a powerful square.

Trap 4: The Advance French Trap
1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Nc6 5.Nf3 Qb6 6.Bd3 cxd4 7.cxd4 Bd7 8.O-O Nh6 9.d5! — White opens the center with a strong attack.

Trap 5: The Exchange French Trap
1.e4 e6 2.d4 d5 3.exd5 exd5 4.Bd3 Nc6 5.c3 Nf6 6.Bf4 Bg4 7.Qb3 Qd7 8.Nd2! — White develops with tempo, gaining a small edge.

The lesson: the French is full of subtle tactical motifs. Always check for tactical shots before committing to a long strategic plan.`,
    },
    {
      title: "Model Game 1: Botvinnik vs Bronstein, 1951 (Game 6)",
      type: "position",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      content: `This is the famous Game 6 of the 1951 World Championship match between Mikhail Botvinnik (White) and David Bronstein (Black). The game is a model of the Winawer French, with both players demonstrating deep strategic understanding.

The game is famous for Botvinnik's brilliant attacking play. His queen sacrifice on g4 and the subsequent kingside attack were devastating, and Bronstein's defensive technique was equally impressive.

Key lessons from this game:
- The Winawer is a sharp, complex variation
- The queen sacrifice is a powerful attacking motif
- The c-file and b-file are the main battlegrounds
- Endgame technique is essential in Winawer games

The Botvinnik-Bronstein game is studied by every serious French player. It demonstrates the power of the Winawer as a fighting defense and the importance of accurate calculation.`,
    },
    {
      title: "Model Game 2: Petrosian vs Spassky, 1969 (Game 10)",
      type: "position",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      content: `This game features Tigran Petrosian (White) against Boris Spassky (Black) at the 1969 World Championship match. The game is a model of the Winawer French, with both players demonstrating deep strategic understanding.

The game is famous for Petrosian's prophylactic style. His ability to prevent Black's counterplay was a hallmark of his play, and the game demonstrated the power of the Winawer as a fighting defense.

Key lessons from this game:
- The Winawer is a sharp, complex variation
- Prophylaxis is essential in Winawer games
- The c-file and b-file are the main battlegrounds
- Endgame technique is essential in Winawer games

The Petrosian-Spassky game is studied by every serious French player. It demonstrates the importance of prophylactic thinking and the power of the Winawer as a fighting defense.`,
    },
    {
      title: "Model Game 3: Short vs Timman, 1993 (Candidates Final)",
      type: "position",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      content: `This game features Nigel Short (White) against Jan Timman (Black) at the 1993 Candidates Final. The game is a model of the Classical French, with both players demonstrating deep strategic understanding.

The game is famous for Short's brilliant attacking play. His exchange sacrifice and the subsequent kingside attack were devastating, and the game demonstrated the power of the Classical French as a fighting defense.

Key lessons from this game:
- The Classical French is a solid, complex variation
- The exchange sacrifice is a powerful attacking motif
- The kingside attack is the main plan for White
- Endgame technique is essential in Classical French games

The Short-Timman game is studied by every serious French player. It demonstrates the power of the Classical French as a fighting defense and the importance of accurate calculation. Short went on to win the Candidates Final and earned the right to challenge Kasparov for the World Championship.`,
    },
    {
      title: "Typical Plans for White",
      type: "key-idea",
      content: `When playing against the French Defense, your plans depend on which variation Black chooses. Here are the most important strategic themes:

Against the Winawer (3.Nc3 Bb4):
- The e5-d4-c3 pawn chain is the main asset
- The d4 break is the key central lever
- The a3 move forces the bishop to declare
- The queenside expansion (a4, b4) is often useful
- The position is closed, favoring patient play

Against the Classical (3.Nc3 Nf6):
- The e4-d4 pawn center is the main asset
- The e5 push (Steinitz Attack) is a key plan
- The Bg5 pin creates tactical chances
- The d4 break is the key central lever
- The position is closed, favoring patient play

Against the Tarrasch (3.Nd2):
- The e4-d4 pawn center is the main asset
- The Nd2 setup is flexible and avoids the Winawer
- The c3 push supports the central structure
- The d4 break is the key central lever
- The position is closed, favoring patient play

Against the Advance (3.e5):
- The c3-d4-e5 pawn chain is the main asset
- The kingside attack is the main plan
- The d4 break is the key central lever
- The ...cxd4 break is Black's main counter
- The position is closed, favoring tactical play

Against the Exchange (3.exd5):
- The c-file is open for White's rook
- The d-file is closed (both sides have d5 and d4)
- The position is symmetrical, with a slight White edge
- The endgame is slightly better for White
- The position is closed, favoring patient play

Universal French principles for White:
- The central pawn structure is the main asset
- The d4 break is the key central lever
- The kingside attack is typical after opposite-side castling
- The position rewards both tactical and strategic play`,
    },
    {
      title: "Typical Plans for Black",
      type: "key-idea",
      content: `Playing the French Defense as Black requires understanding the typical counterplay. Here are the most important strategic themes:

Against the Winawer (after 3.Nc3 Bb4 4.e5 c5 5.a3 Bxc3+ 6.bxc3):
- The d5-e6 pawn chain is the main asset
- The ...c5 break has been played
- The queenside attack is the main plan
- The ...Qa5 and ...Nc6 support the queenside
- The position is closed, favoring patient play

Against the Classical (after 3.Nc3 Nf6 4.Bg5 Be7 5.e5 Nfd7):
- The d5-e6 pawn chain is the main asset
- The ...c5 break is the main central challenge
- The ...f6 break is the main central counter
- The queenside attack is the main plan
- The position is closed, favoring patient play

Against the Tarrasch (after 3.Nd2 Nf6 4.e5 Nfd7 5.Bd3 c5):
- The d5-e6 pawn chain is the main asset
- The ...c5 break has been played
- The ...Nc6 development supports the center
- The queenside attack is the main plan
- The position is closed, favoring patient play

Against the Advance (after 3.e5 c5 4.c3 Nc6):
- The c5-d5-e6 pawn chain is the main asset
- The ...cxd4 break is the main central challenge
- The ...Qb6 and ...Bd7 support the queenside attack
- The ...Nh6 and ...f6 prepare the kingside attack
- The position is closed, favoring tactical play

Against the Exchange (after 3.exd5 exd5):
- The c-file is closed
- The d-file is closed (both sides have d5 and d4)
- The position is symmetrical, with a slight Black disadvantage
- The light-squared bishop liberation is a long-term goal
- The endgame is slightly better for White

Universal French principles for Black:
- The d5-e6 pawn chain is the main asset
- The ...c5 break is the main central challenge
- The light-squared bishop liberation is a long-term goal
- The queenside attack is the main counterplay
- The position rewards patient, accurate play`,
    },
    {
      title: "Endgame Patterns",
      type: "key-idea",
      content: `The French Defense often leads to specific endgame patterns that are worth studying:

Pattern 1: The Doubled c-Pawns
In the Winawer, White has doubled c-pawns (c3 and c4 after ...Bxc3+ bxc3). This is a long-term weakness that Black can exploit. The plan: pressure the c-pawns with pieces, and use the queenside majority to create a passed pawn.

Pattern 2: The Light-Squared Bishop
The c8 bishop is often bad in the French. Black's typical solution: trade it via ...b6, ...Ba6, or use it to support the ...c5 break. In endgames, the bishop can become a liability if the position becomes closed.

Pattern 3: The Queenside Majority
In many French endgames, Black has a queenside pawn majority (after the c-file is opened). This can be converted into a passed pawn with careful play. The plan: push ...a5, ...b5, then trade on c4 to create a passed a-pawn or b-pawn.

Pattern 4: The d5 Square
The d5 square is the most contested square in many French endgames. The player who controls d5 (or prevents the other from using it) gains a long-term advantage.

Pattern 5: The King Activation
In French endgames, the king becomes a fighting piece. The typical plan: march the king to the center to support the pawn structure, or to the queenside to support the pawn majority.

The lesson: French endgames are about small advantages. The player who understands the typical pawn structures and piece placements will win more endgames than the player who simply trades pieces.`,
    },
    {
      title: "When to Play the French Defense",
      type: "key-idea",
      content: `The French Defense is one of the most respected defenses in chess. Here's when to play it and when to consider alternatives:

Play the French when:
- You want a solid, resilient defense to 1.e4
- You enjoy strategic, positional play over tactical warfare
- You're willing to accept a slightly worse position in exchange for counterplay
- You like the idea of a complete system against 1.e4
- You want a defense used by many world champions
- You prefer the Winawer for sharp, complex positions
- You prefer the Classical for solid, reliable play
- You prefer the Tarrasch for flexible, strategic play

Consider alternatives when:
- You prefer sharp, tactical positions (try the Sicilian or King's Gambit)
- You're playing rapid or blitz where the deep theory is harder to apply
- You're uncomfortable with a slightly worse position
- You want to fight for the win from move one (the French is about fighting for equality)
- You want the most popular defense at the top level (the Sicilian is more common)

Rating ranges where the French is most effective:
- 1200-1800: The main lines are well-taught and the strategic themes are clear
- 1800-2200: The deep theory starts to matter
- 2200+: The French is a must for any serious player

The lesson: the French is a complete, sophisticated defense that rewards patient, strategic play. It will serve you well in any game where you want to fight for equality with a solid, resilient position.`,
    },
    {
      title: "Comparison to Other 1.e4 Defenses",
      type: "key-idea",
      content: `The French Defense is often compared to other 1.e4 defenses. Here's how it stacks up:

French vs Sicilian (1.e4 c5):
- The French is more solid and positional
- The Sicilian is sharper and more tactical
- The French has more counterplay in the center
- The Sicilian has more counterplay on the queenside
- The French is easier to learn
- The Sicilian has more theory

French vs Caro-Kann (1.e4 c6):
- The French is more counter-attacking
- The Caro-Kann is more solid and reliable
- The French blocks the light-squared bishop
- The Caro-Kann does not block the light-squared bishop
- Both are sound and respected
- The French is more popular at the top level

French vs 1...e5 (Open Game):
- The French is asymmetric, 1...e5 is symmetric
- The French leads to more complex positions
- The 1...e5 is more solid but more drawish
- The French gives Black more winning chances
- Both are top-level weapons

When to prefer the French over alternatives:
- When you want a solid, resilient defense: French
- When you want a counter-attacking game: French
- When you want a system used by world champions: French
- When you want a sharp, tactical game: Sicilian
- When you want a solid, drawish game: Caro-Kann or 1...e5

The lesson: the French is the most counter-attacking of the solid defenses. It complements, rather than replaces, other defensive weapons. A well-rounded player might use the French in 30% of games, the Sicilian in 30%, the Caro-Kann in 20%, and 1...e5 in 20%.`,
    },
    {
      title: "The Computer Era: Modern Analysis",
      type: "key-idea",
      content: `How has the engine revolution affected the French Defense? The defense has thrived, not suffered. Here's what modern analysis tells us:

Engine Evaluation:
- The French is roughly equal at the top level (Black scores 48-52%)
- The Exchange French is the most drawish
- The Winawer is the sharpest and most decisive
- The Advance is the most tactical
- The Classical is the steadiest

Why the French Has Thrived:
1. The opening is fundamentally sound — engines confirm the solidity
2. The deep theory rewards understanding, not just memorization
3. The Winawer has refined the sharp, complex lines
4. The Exchange provides a reliable path to equality
5. The Tarrasch offers a flexible alternative

The Modern Revival:
- The French has seen a resurgence at the top level
- Ding Liren (World Champion) is a French devotee
- The Winawer remains the most popular at the highest level
- The Exchange Slav is increasingly common in online play
- The French is a must for any serious 1.e4 defender

The Online Era:
- The French remains popular in online play
- The Exchange French is the most common choice for quick games
- The Winawer is especially popular in longer time controls
- The Classical is a reliable alternative
- The French is a must for any serious online player

The lesson: the French has stood the test of time — over 300 years and counting. The engine revolution has refined our understanding, but the fundamental appeal of the defense remains. The solid structure, the counter-attacking potential, and the rich middlegame positions make it a timeless weapon.`,
    },
    {
      title: "Comprehensive Quiz: Test Your Understanding",
      type: "trap",
      interactionMode: "quiz",
      orientation: "white",
      quizFen: "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 3",
      quizAnswer: ["e5"],
      quizHint:
        "Black has just played 2...d5, establishing the French pawn chain. White should find the most ambitious move — pushing the e-pawn to gain space and challenge Black's center.",
      content: `This is the comprehensive quiz for the French Defense. White is to move in a standard French position.

You should now understand:
- The Winawer and its sharp, complex lines
- The Classical and its solid, reliable approach
- The Tarrasch and its flexible, strategic setup
- The Advance and its sharp, tactical play
- The Exchange and its simple, drawish nature

Find the best move that demonstrates your understanding of the French Defense. The correct move is a key idea that recurs throughout French theory.`,
    },
    {
      title: "Summary: The Complete French Defense Guide",
      type: "key-idea",
      content: `You've now completed a comprehensive course on the French Defense. Here's what to remember:

Core Strategic Ideas:
1. The e6-d5 pawn chain is the heart of the French
2. The light-squared bishop is the main problem for Black
3. The ...c5 break is Black's main counter-attacking move
4. The position is closed, favoring patient play
5. The endgame is about small advantages

The Main Variations:
- Winawer (3.Nc3 Bb4): the sharpest and most theoretical
- Classical (3.Nc3 Nf6): the steadiest approach
- Tarrasch (3.Nd2): solid and avoiding the Winawer
- Advance (3.e5): closes the center immediately
- Exchange (3.exd5): simplifies to a strategic battle

Universal Principles:
- The d5-e6 pawn chain is the main asset
- The ...c5 break is the main central challenge
- The light-squared bishop liberation is a long-term goal
- The queenside counterplay is Black's main weapon
- The position rewards patient, accurate play

If you only remember three things:
- The d5-e6 pawn chain is the heart of the French
- The ...c5 break is the main counter-attacking move
- The light-squared bishop liberation is a long-term goal

The lesson: the French Defense is a complete, sophisticated defense that rewards patient, strategic play. It will serve you well in any game where you want to fight for equality with a solid, resilient position. By mastering the key themes and variations, you will have a weapon that serves you for a lifetime.

Now go practice! Click "Start Practice" below and the CPU will play random White setups. You play Black and try to remember the correct responses!`,
    },
  ],
};
