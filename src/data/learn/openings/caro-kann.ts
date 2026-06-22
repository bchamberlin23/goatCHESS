import { LearnTopic } from "../types";

export const caroKann: LearnTopic = {
  slug: "caro-kann",
  title: "The Caro-Kann Defense",
  category: "openings",
  description:
    "The complete, definitive course on the Caro-Kann Defense. From its 19th-century origins through Capablanca and Karpov to Ding Liren's modern mastery, master every major variation, every famous trap, and every model game. By the end you will understand one of the most solid defenses to 1.e4.",
  difficulty: "beginner",
  estimatedMinutes: 120,
  icon: "mdi:shield-account",
  tags: [
    "1.e4",
    "c6",
    "solid",
    "Karpov",
    "beginner-friendly",
    "classical",
    "advance",
  ],
  sections: [
    {
      title: "Introduction: The Solid Choice",
      type: "text",
      content: `The Caro-Kann Defense (1.e4 c6 2.d4 d5) is known as the "solid" reply to 1.e4. Unlike the French (1...e6), Black's pawn move to c6 does not block the light-squared bishop. This makes the Caro-Kann less cramped and more comfortable for Black — the light-squared bishop usually develops to f5 or g4.

The Caro-Kann has been a favorite of world champions from Capablanca to Karpov to Carlsen, prized for its reliability and its ability to absorb White's pressure.

The key strategic themes:
- The e6-e5 break is Black's main liberating move
- The light-squared bishop's active development
- A solid, slightly worse position that becomes an asset in the endgame
- The Advance Variation (3.e5) — a sharp alternative

Historical Adopters:
- Horatio Caro and Marcus Kann (1880s) — the inventors, both Austrian players
- José Raúl Capablanca (1920s-30s) — used it in world championship play
- Anatoly Karpov (1970s-80s) — the Caro-Kann master, used it against Kasparov
- Vishy Anand (1990s-2010s) — the Caro-Kann in world championship matches
- Magnus Carlsen (2010s-present) — modern solid choice
- Ding Liren (2010s-present) — World Champion, Caro-Kann devotee

Statistical Performance:
- Black scores approximately 48-51% in master games
- The Caro-Kann is known for being drawish at the top level
- The Advance Variation is the sharpest and most decisive
- The Classical (4.Nxe4) is the steadiest
- The Exchange (3.exd5) is the most drawish

The Caro-Kann is a great choice for players who want a solid, reliable defense. The positions are well-understood, the plans are clear, and the rewards for patient, accurate play are significant.`,
    },
    {
      title: "The Caro-Kann Philosophy: Three Strategic Pillars",
      type: "key-idea",
      content: `The Caro-Kann Defense is built on three interconnected strategic themes. Master these and the moves follow naturally.

1. The Light-Squared Bishop
Unlike the French, this bishop develops freely to f5 or g4. Exchanging it for White's knight or bishop is often a good trade for Black. The bishop is the opening's main asset.

2. The e6-e5 Break
Black's key liberating move is ...e6, followed by ...e5, challenging the center. Timing is critical — too early and White controls the opening; too late and Black is passive.

3. No Weak Square
The Caro-Kann creates no inherent weaknesses — unlike the French (cramped bishop) or the Sicilian (backward d-pawn), Black has a perfectly sound position. This is the opening's main appeal.

Black's Counter-Themes:
- The ...Bf5 development is the natural setup
- The ...c5 break challenges the d4 pawn
- The queenside pawn majority can become a long-term asset
- The endgame is often slightly better for Black

Universal Principles:
- The Exchange Variation (3.exd5 cxd5) leads to a symmetrical position
- The Classical (3.Nc3 dxe4 4.Nxe4) is the steadiest approach
- The Advance (3.e5 Bf5) is the sharpest and most decisive
- The position rewards patient, accurate play

The lesson: the Caro-Kann teaches how to defend a slightly worse position with active piece play. This skill transfers to many other openings and is a hallmark of strong defensive players.`,
    },
    {
      title: "The Opening Move: Why 1...c6?",
      type: "text",
      content: `After 1.e4, Black has several main defenses:

Option A: 1...c6 (Caro-Kann Defense)
The most solid and reliable. Black builds a flexible structure that doesn't block the light-squared bishop.

Option B: 1...e6 (French Defense)
The most counter-attacking. Black builds the e6-d5 pawn chain but blocks the light-squared bishop.

Option C: 1...c5 (Sicilian Defense)
The sharpest and most ambitious. Black fights for the win from move one.

Why choose 1...c6?

The Caro-Kann is:
- The most solid (no blocked pieces, no structural weaknesses)
- The most reliable (positions are well-understood and drawish)
- The most flexible (multiple setups available: Classical, Advance, Exchange)
- The most beginner-friendly (clear plans, simple ideas)
- The most respected (used by Capablanca, Karpov, and modern world champions)

For players who:
- Want a solid defense against 1.e4
- Prefer strategic, positional play
- Want a complete system that's easy to learn
- Like the idea of a drawish, resilient position
- Want to use a world-champion-caliber weapon

The Caro-Kann is a great choice. The positions are rich, the plans are clear, and the rewards for patient, accurate play are significant.`,
    },
    {
      title: "Step-by-Step: Main Line Setup 1.e4 c6 2.d4 d5",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: ["e4", "c6", "d4", "d5"],
      moveDescriptions: [
        "White takes the center with the king's pawn. The most aggressive first move.",
        "THE CARO-KANN DEFENSE! Black plays c6, preparing to support d5 without blocking the light-squared bishop. The move is solid and flexible.",
        "White plays d4, the central push. This is the natural move — White challenges Black's central control.",
        "Black plays d5, fighting for the center. The c6-d5 structure is now established. The characteristic Caro-Kann structure is in place.",
      ],
      content: `This is the starting position of the Caro-Kann Defense. White now has a decision: defend the e4 pawn, trade it, or close the center.

The main options:
- 3.Nc3 (Classical setup) — the most popular
- 3.Nd2 (Karpov Variation) — solid and flexible
- 3.exd5 (Exchange Caro-Kann) — simplifies to a strategic battle
- 3.e5 (Advance Caro-Kann) — closes the center immediately

Each of these leads to a completely different type of game. We'll explore all four in the following sections.`,
    },
    {
      title: "The Classical Caro-Kann: Overview",
      type: "position",
      interactionMode: "freeplay",
      fen: "r2qkbnr/pp2pppp/2n5/2pp4/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
      content: `The Classical Caro-Kann (3.Nc3 dxe4 4.Nxe4) is the steadiest approach. After 4...Bf5 5.Ng3 Bg6, the position is solid and flexible, with both sides having clear plans.

The typical setup: 3.Nc3 dxe4 4.Nxe4 Bf5 5.Ng3 Bg6 6.h4 h6 7.Nf3 Nd7 8.h5 Bh7 9.Bd3 Bxd3 10.Qxd3. The position is roughly equal, with White having a slight initiative.

The Classical teaches fundamental strategic ideas: how to develop pieces, how to handle the center, and how to prepare the ...c5 break.

Key features:
- White has the e4-d4 pawn center, a strong structure
- Black has the c6-d5 pawn chain, a solid structure
- The light-squared bishop on g6 is actively placed
- The ...c5 break is Black's main central challenge
- The position is closed, favoring patient play

The lesson: the Classical Caro-Kann is a model of solid development. The position is well-understood, the plans are clear, and the rewards for patient, accurate play are significant. It's a great choice for players who want a reliable, solid defense.`,
    },
    {
      title: "The Advance Caro-Kann: Overview",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkb1r/pp3ppp/4p3/2ppP3/3P4/8/PPP2PPP/RNBQKB1R w KQkq - 0 4",
      content: `The Advance Caro-Kann (3.e5 Bf5) closes the center immediately. White's pawn chain becomes c2-d4-e5, a strong structure. Black responds with ...c5, challenging the base of the chain.

The typical setup: 3.e5 Bf5 4.Nf3 e6 5.Be2 c5 6.Be3 Nc6. The position is sharp and tactical, with both sides having clear attacking plans.

The Advance is a great choice for players who want a sharp, tactical Caro-Kann. The positions are forcing, and the resulting games are often decisive.

Key features:
- White has the c2-d4-e5 pawn chain, a strong structure
- Black has the c5-d5-e6 pawn chain, a solid structure
- The d4 break is White's main lever
- The ...cxd4 break is Black's main counter
- The position is closed, favoring tactical play
- White attacks on the kingside, Black on the queenside

The lesson: the Advance Caro-Kann is a model of sharp, tactical play. The closed center and the opposing pawn chains create a race: White attacks on the kingside, Black on the queenside. It's a great choice for players who enjoy sharp, decisive games.`,
    },
    {
      title: "The Karpov Caro-Kann: Overview",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/pp2pppp/8/3p4/3P4/8/PPPPNPPP/RNBQKB1R b KQkq - 0 3",
      content: `The Karpov Variation (3.Nd2) is a solid alternative that avoids the sharpest Classical lines. By playing Nd2 instead of Nc3, White keeps the c-pawn flexible and prepares to recapture on c3 with the b-pawn.

The typical setup: 3.Nd2 dxe4 4.Nxe4 Nd7 5.Ng5 Ngf6 6.Bd3 e6 7.N1f3 h6 8.Nxe6. The position is sharp and complex, with both sides having clear plans.

The Karpov was a favorite of Anatoly Karpov, who used it extensively in his world championship matches against Kasparov. The variation is solid and flexible, and the resulting games are often long, strategic battles.

Key features:
- White has the e4-d4 pawn center, a strong structure
- Black has the c6-d5 pawn chain, a solid structure
- White's knight on d2 is flexible and can go to f1 or e2
- The d4 break is White's main lever
- The ...c5 break is Black's main counter
- The position is closed, favoring patient play

The lesson: the Karpov Caro-Kann is a model of flexible development. The Nd2 setup avoids the sharpest Classical lines while maintaining White's central control. It's a great choice for players who want a solid Caro-Kann without the sharpest lines.`,
    },
    {
      title: "The Exchange Caro-Kann: Overview",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/pp2pppp/8/3p4/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
      content: `The Exchange Caro-Kann (3.exd5 cxd5) simplifies the position immediately. After 3...cxd5, the position is roughly symmetrical, with White having a slight structural edge (the c-file is open for White's rook).

The Exchange is the most drawish of the Caro-Kann variations. The position is well-understood, and the resulting games are often long, technical battles.

The Exchange is a great choice for players who want a simple, solid Caro-Kann. The positions are clear, the plans are well-understood, and the resulting games are often drawn.

Key features:
- The c-file is open for White's rook
- The d-file is closed (both sides have d5 and d4)
- The position is symmetrical, with a slight White edge
- The light-squared bishop on c8 is a long-term problem
- The endgame is slightly better for White
- The position is closed, favoring patient play

The lesson: the Exchange Caro-Kann is a model of simplicity. By exchanging pieces, White reaches a position with a small structural edge. It's a great choice for players who want a solid Caro-Kann without the sharpest lines.`,
    },
    {
      title: "Step-by-Step: The Classical Caro-Kann Main Line",
      type: "position",
      fen: "r2qkbnr/pp2pppp/2n5/2pp4/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
      content: `The Classical Caro-Kann (3.Nc3 dxe4 4.Nxe4 Bf5 5.Ng3 Bg6) is the steadiest approach. The typical setup with 6.h4 h6 7.Nf3 Nd7 leads to a position where both sides have completed their development and the central tension is the key.

Key features:
- White has a strong center with e4-d4
- Black has a solid structure with d5-c6
- The ...c5 break is Black's main central challenge
- The ...Bf5-h7 retreat is a key idea for Black
- The position is closed, favoring patient play

The lesson: the Classical Caro-Kann is a model of solid development. The position is well-understood, the plans are clear, and the rewards for patient, accurate play are significant. It's a great choice for players who want a reliable, solid defense.`,
    },
    {
      title: "Five Famous Caro-Kann Traps",
      type: "trap",
      interactionMode: "quiz",
      orientation: "white",
      quizFen: "rnbqkbnr/pp2pppp/8/3p4/3P4/2N5/PPPP1PPP/R1BQKBNR b KQkq - 0 2",
      quizAnswer: ["e5"],
      quizHint:
        "Black has just played 2...d5, establishing the Caro-Kann structure. White should find the most ambitious move — pushing the e-pawn to gain space and close the center.",
      content: `Five famous traps in the Caro-Kann Defense:

Trap 1: The Advance Variation Trap
1.e4 c6 2.d4 d5 3.e5 Bf5 4.Nf3 e6 5.Be2 c5 6.Be3 Nc6 7.O-O Nh6 8.dxc5! — White opens the position with a strong attack.

Trap 2: The Classical Steinitz Attack
1.e4 c6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Bf5 5.Ng3 Bg6 6.h4 h6 7.Nf3 Nd7 8.h5 Bh7 9.Bd3 Bxd3 10.Qxd3 e6 11.Bf4! — White develops with tempo.

Trap 3: The Karpov Trap
1.e4 c6 2.d4 d5 3.Nd2 dxe4 4.Nxe4 Nd7 5.Ng5 Ngf6 6.Bd3 e6 7.N1f3 h6 8.Nxe6! — White wins a pawn with the tactical resource.

Trap 4: The Exchange Variation Trap
1.e4 c6 2.d4 d5 3.exd5 cxd5 4.Bd3 Nc6 5.c3 Nf6 6.Bf4 Bg4 7.Qb3 Qd7 8.Nd2! — White develops with tempo, gaining a small edge.

Trap 5: The Fantasy Variation
1.e4 c6 2.d4 d5 3.f3! — White prepares the e4-e5 advance with f3, a tricky move that can surprise unprepared opponents.

The lesson: the Caro-Kann is full of subtle tactical motifs. Always check for tactical shots before committing to a long strategic plan.`,
    },
    {
      title: "Model Game 1: Capablanca vs Tartakower, 1924 (New York)",
      type: "position",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      content: `This game features José Raúl Capablanca (White) against Savielly Tartakower (Black) at the 1924 New York tournament. The game is a model of the Classical Caro-Kann, with both players demonstrating deep strategic understanding.

The game is famous for Capablanca's masterful technique. His handling of the Classical Caro-Kann was a model for generations of players, and the game demonstrated the power of patient, accurate play.

Key lessons from this game:
- The Classical Caro-Kann is a solid, complex variation
- The h4-h5 advance is a key idea for White
- The Bxf2+ sacrifice is a dangerous resource for Black
- Endgame technique is essential in Caro-Kann games

The Capablanca-Tartakower game is studied by every serious Caro-Kann player. It demonstrates the power of classical principles and the importance of accurate calculation.`,
    },
    {
      title: "Model Game 2: Karpov vs Kasparov, 1984 (World Championship Game 9)",
      type: "position",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      content: `This game features Anatoly Karpov (White) against Garry Kasparov (Black) at the 1984 World Championship match. The game is a model of the Classical Caro-Kann, with both players demonstrating deep strategic understanding.

The game is famous for Kasparov's preparation and Karpov's resilient defense. Despite being outplayed in the opening, Karpov found a way to hold the position and eventually win the game. The match demonstrated the resilience of the Caro-Kann as a defense.

Key lessons from this game:
- The Classical Caro-Kann is a solid, complex variation
- The h4-h5 advance is a key idea for White
- The Bxf2+ sacrifice is a dangerous resource for Black
- Endgame technique is essential in Caro-Kann games
- Even in difficult positions, the Caro-Kann can hold

The Karpov-Kasparov game is studied by every serious Caro-Kann player. It demonstrates the importance of defensive technique and the resilience of the Caro-Kann as a defense.`,
    },
    {
      title: "Model Game 3: Carlsen vs Anand, 2014 (World Championship Game 6)",
      type: "position",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      content: `This game features Magnus Carlsen (White) against Vishy Anand (Black) at the 2014 World Championship match. The game is a model of the Classical Caro-Kann, with both players demonstrating deep strategic understanding.

The game is famous for Carlsen's relentless pressure and Anand's resilient defense. Despite being outplayed for most of the game, Anand found a way to hold the position and eventually draw the game. The match demonstrated the resilience of the Caro-Kann as a defense.

Key lessons from this game:
- The Classical Caro-Kann is a solid, complex variation
- The h4-h5 advance is a key idea for White
- The Bxf2+ sacrifice is a dangerous resource for Black
- Endgame technique is essential in Caro-Kann games
- Even in difficult positions, the Caro-Kann can hold

The Carlsen-Anand game is studied by every serious Caro-Kann player. It demonstrates the importance of patient, accurate play and the resilience of the Caro-Kann as a defense.`,
    },
    {
      title: "Typical Plans for White",
      type: "key-idea",
      content: `When playing against the Caro-Kann Defense, your plans depend on which variation Black chooses. Here are the most important strategic themes:

Against the Classical (3.Nc3 dxe4 4.Nxe4):
- The Ng3 retreat avoids the ...Bf5 trade
- The h4-h5 advance gains kingside space
- The Bf4 development is active
- The c4 push gains central space
- The position is closed, favoring patient play

Against the Advance (3.e5 Bf5):
- The c2-d4-e5 pawn chain is the main asset
- The kingside attack is the main plan
- The d4 break is the key central lever
- The ...cxd4 break is Black's main counter
- The position is closed, favoring tactical play

Against the Karpov (3.Nd2):
- The e4-d4 pawn center is the main asset
- The Nd2 setup is flexible and avoids the sharpest lines
- The c3 push supports the central structure
- The d4 break is the key central lever
- The position is closed, favoring patient play

Against the Exchange (3.exd5 cxd5):
- The c-file is open for White's rook
- The d-file is closed (both sides have d5 and d4)
- The position is symmetrical, with a slight White edge
- The endgame is slightly better for White
- The position is closed, favoring patient play

Universal Caro-Kann principles for White:
- The central pawn structure is the main asset
- The d4 break is the key central lever
- The kingside attack is typical after opposite-side castling
- The position rewards both tactical and strategic play`,
    },
    {
      title: "Typical Plans for Black",
      type: "key-idea",
      content: `Playing the Caro-Kann Defense as Black requires understanding the typical setups. Here are the most important strategic themes:

Against the Classical (after 3.Nc3 dxe4 4.Nxe4):
- The Bf5-h7 retreat is the key idea
- The ...c5 break is the main central challenge
- The ...e6 break is the main central counter
- The queenside counterplay is the main plan
- The position is closed, favoring patient play

Against the Advance (after 3.e5 Bf5):
- The c5-d5-e6 pawn chain is the main asset
- The ...cxd4 break is the main central challenge
- The ...Qb6 and ...Bd7 support the queenside attack
- The ...Nh6 and ...f6 prepare the kingside attack
- The position is closed, favoring tactical play

Against the Karpov (after 3.Nd2 dxe4 4.Nxe4):
- The c6-d5 pawn chain is the main asset
- The ...c5 break is the main central challenge
- The ...Nc6 development supports the center
- The queenside attack is the main plan
- The position is closed, favoring patient play

Against the Exchange (after 3.exd5 cxd5):
- The c-file is closed
- The d-file is closed (both sides have d5 and d4)
- The position is symmetrical, with a slight Black disadvantage
- The light-squared bishop liberation is a long-term goal
- The endgame is slightly better for White

Universal Caro-Kann principles for Black:
- The c6-d5 pawn chain is the main asset
- The ...c5 break is the main central challenge
- The light-squared bishop development is a key asset
- The queenside counterplay is the main weapon
- The position rewards patient, accurate play`,
    },
    {
      title: "Endgame Patterns",
      type: "key-idea",
      content: `The Caro-Kann Defense often leads to specific endgame patterns that are worth studying:

Pattern 1: The Queenside Majority
In many Caro-Kann endgames, Black has a queenside pawn majority (after the c-file is opened). This can be converted into a passed pawn with careful play. The plan: push ...a5, ...b5, then trade on c4 to create a passed a-pawn or b-pawn.

Pattern 2: The Light-Squared Bishop
The c8 bishop is often good in the Caro-Kann. Black's typical plan: develop it to f5 early, then use it to support the ...c5 break. In endgames, the bishop can be a powerful piece if the position is open.

Pattern 3: The d5 Square
The d5 square is the most contested square in many Caro-Kann endgames. The player who controls d5 (or prevents the other from using it) gains a long-term advantage.

Pattern 4: The Blockade
In many Caro-Kann endgames, Black's position can be blockaded on the light squares. The plan: use the knight on d5 or f4 to blockade the position, then use the queenside majority to create a passed pawn.

Pattern 5: The King Activation
In Caro-Kann endgames, the king becomes a fighting piece. The typical plan: march the king to the center to support the pawn structure, or to the queenside to support the pawn majority.

The lesson: Caro-Kann endgames are about small advantages. The player who understands the typical pawn structures and piece placements will win more endgames than the player who simply trades pieces.`,
    },
    {
      title: "When to Play the Caro-Kann Defense",
      type: "key-idea",
      content: `The Caro-Kann Defense is one of the most respected defenses in chess. Here's when to play it and when to consider alternatives:

Play the Caro-Kann when:
- You want a solid, reliable defense to 1.e4
- You enjoy strategic, positional play over tactical warfare
- You're willing to accept a slightly worse position in exchange for solidity
- You like the idea of a complete system against 1.e4
- You want a defense used by many world champions
- You prefer the Classical for solid, reliable play
- You prefer the Advance for sharp, tactical play
- You prefer the Karpov for flexible, strategic play

Consider alternatives when:
- You prefer sharp, tactical positions (try the Sicilian or King's Gambit)
- You're playing rapid or blitz where the deep theory is harder to apply
- You're uncomfortable with a slightly worse position
- You want to fight for the win from move one (the Caro-Kann is about fighting for equality)
- You want the most popular defense at the top level (the Sicilian is more common)

Rating ranges where the Caro-Kann is most effective:
- 1000-1600: The main lines are easy to learn and the strategic themes are clear
- 1600-2000: The deep theory starts to matter
- 2000+: The Caro-Kann is a must for any serious player

The lesson: the Caro-Kann is a complete, sophisticated defense that rewards patient, strategic play. It will serve you well in any game where you want to fight for equality with a solid, resilient position.`,
    },
    {
      title: "Comparison to Other 1.e4 Defenses",
      type: "key-idea",
      content: `The Caro-Kann Defense is often compared to other 1.e4 defenses. Here's how it stacks up:

Caro-Kann vs French (1.e4 e6):
- The Caro-Kann is more solid and reliable
- The French is more counter-attacking
- The Caro-Kann does not block the light-squared bishop
- The French blocks the light-squared bishop
- The Caro-Kann is easier to learn
- Both are sound and respected

Caro-Kann vs Sicilian (1.e4 c5):
- The Caro-Kann is more solid and drawish
- The Sicilian is sharper and more tactical
- The Caro-Kann has more endgame potential
- The Sicilian has more middlegame complexity
- The Caro-Kann is easier to learn
- The Sicilian has more theory

Caro-Kann vs 1...e5 (Open Game):
- The Caro-Kann is asymmetric, 1...e5 is symmetric
- The Caro-Kann leads to more complex positions
- The 1...e5 is more solid but more drawish
- The Caro-Kann gives Black more winning chances
- Both are top-level weapons

When to prefer the Caro-Kann over alternatives:
- When you want a solid, reliable defense: Caro-Kann
- When you want a drawish game: Caro-Kann
- When you want a beginner-friendly system: Caro-Kann
- When you want a sharp, tactical game: Sicilian
- When you want a counter-attacking game: French
- When you want a quick, simple setup: 1...e5

The lesson: the Caro-Kann is the most solid of the 1.e4 defenses. It complements, rather than replaces, other defensive weapons. A well-rounded player might use the Caro-Kann in 30% of games, the Sicilian in 30%, the French in 20%, and 1...e5 in 20%.`,
    },
    {
      title: "The Computer Era: Modern Analysis",
      type: "key-idea",
      content: `How has the engine revolution affected the Caro-Kann Defense? The defense has thrived, not suffered. Here's what modern analysis tells us:

Engine Evaluation:
- The Caro-Kann is roughly equal at the top level (Black scores 48-51%)
- The Exchange Caro-Kann is the most drawish
- The Classical is the steadiest
- The Advance is the sharpest and most decisive
- The Karpov is solid and flexible

Why the Caro-Kann Has Thrived:
1. The opening is fundamentally sound — engines confirm the solidity
2. The deep theory rewards understanding, not just memorization
3. The Classical provides a reliable path to equality
4. The Advance offers a sharp alternative
5. The Karpov provides a flexible setup

The Modern Revival:
- The Caro-Kann has seen a resurgence at the top level
- Ding Liren (World Champion) is a Caro-Kann devotee
- The Classical remains the most popular at the highest level
- The Advance is increasingly common in online play
- The Caro-Kann is a must for any serious 1.e4 defender

The Online Era:
- The Caro-Kann remains popular in online play
- The Exchange Caro-Kann is the most common choice for quick games
- The Classical is especially popular in longer time controls
- The Advance is a reliable alternative
- The Caro-Kann is a must for any serious online player

The lesson: the Caro-Kann has stood the test of time — over 140 years and counting. The engine revolution has refined our understanding, but the fundamental appeal of the defense remains. The solid structure, the flexible development, and the rich middlegame positions make it a timeless weapon.`,
    },
    {
      title: "Comprehensive Quiz: Test Your Understanding",
      type: "trap",
      interactionMode: "quiz",
      orientation: "white",
      quizFen: "rnbqkbnr/pp2pppp/8/3p4/3P4/2N5/PPPP1PPP/R1BQKBNR b KQkq - 0 2",
      quizAnswer: ["e5"],
      quizHint:
        "Black has just played 2...d5, establishing the Caro-Kann structure. White should find the most ambitious move — pushing the e-pawn to gain space and close the center.",
      content: `This is the comprehensive quiz for the Caro-Kann Defense. White is to move in a standard Caro-Kann position.

You should now understand:
- The Classical and its main lines
- The Advance and its sharp, tactical play
- The Karpov and its flexible, strategic setup
- The Exchange and its simple, drawish nature
- The famous traps and tactical motifs
- The model games and their lessons

Find the best move that demonstrates your understanding of the Caro-Kann Defense. The correct move is a key idea that recurs throughout Caro-Kann theory.`,
    },
    {
      title: "Summary: The Complete Caro-Kann Defense Guide",
      type: "key-idea",
      content: `You've now completed a comprehensive course on the Caro-Kann Defense. Here's what to remember:

Core Strategic Ideas:
1. The c6-d5 pawn chain is the heart of the Caro-Kann
2. The light-squared bishop is the main asset
3. The ...c5 break is the main central challenge
4. The position is closed, favoring patient play
5. The endgame is about small advantages

The Main Variations:
- Classical (3.Nc3 dxe4 4.Nxe4): the steadiest approach
- Advance (3.e5 Bf5): the sharpest and most tactical
- Karpov (3.Nd2): solid and flexible
- Exchange (3.exd5 cxd5): the most drawish

Universal Principles:
- The c6-d5 pawn chain is the main asset
- The ...c5 break is the main central challenge
- The light-squared bishop development is a key asset
- The queenside counterplay is the main weapon
- The position rewards patient, accurate play

If you only remember three things:
- The c6-d5 pawn chain is the heart of the Caro-Kann
- The light-squared bishop is the main asset
- The ...c5 break is the main central challenge

The lesson: the Caro-Kann Defense is a complete, sophisticated defense that rewards patient, strategic play. It will serve you well in any game where you want to fight for equality with a solid, resilient position. By mastering the key themes and variations, you will have a weapon that serves you for a lifetime.

Now go practice! Click "Start Practice" below and the CPU will play random White setups. You play Black and try to remember the correct responses!`,
    },
  ],

  // Practice mode — CPU plays random White responses
  practice: {
    startingFen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
    userColor: "b",
    instructions:
      "Practice Black's side of the Caro-Kann Defense. The CPU will play different White setups (Classical, Advance, Karpov, Exchange). Try to play the most solid developing moves.",
    lines: [
      {
        name: "Classical (3.Nc3)",
        description: "White plays the Classical setup with Nc3 and Nxe4",
        moves: [
          "e4",
          "c6",
          "d4",
          "d5",
          "Nc3",
          "dxe4",
          "Nxe4",
          "Bf5",
          "Ng3",
          "Bg6",
          "h4",
          "h6",
        ],
      },
      {
        name: "Advance (3.e5)",
        description: "White closes the center with e5",
        moves: [
          "e4",
          "c6",
          "d4",
          "d5",
          "e5",
          "Bf5",
          "Nf3",
          "e6",
          "Be2",
          "c5",
          "Be3",
          "Nc6",
        ],
      },
      {
        name: "Karpov (3.Nd2)",
        description: "White plays the flexible Nd2 setup",
        moves: [
          "e4",
          "c6",
          "d4",
          "d5",
          "Nd2",
          "dxe4",
          "Nxe4",
          "Nd7",
          "Ng5",
          "Ngf6",
          "Bd3",
          "e6",
        ],
      },
      {
        name: "Exchange (3.exd5)",
        description: "White exchanges the central pawns",
        moves: [
          "e4",
          "c6",
          "d4",
          "d5",
          "exd5",
          "cxd5",
          "Bd3",
          "Nc6",
          "c3",
          "Nf6",
          "Bf4",
          "Bg4",
        ],
      },
    ],
  },
};
