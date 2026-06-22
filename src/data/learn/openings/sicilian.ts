import { LearnTopic } from "../types";

export const sicilianDefense: LearnTopic = {
  slug: "sicilian-defense",
  title: "The Sicilian Defense",
  category: "openings",
  description:
    "The most popular and successful response to 1.e4 at the top level. The Sicilian (1.e4 c5) fights for the center asymmetrically and leads to rich, imbalanced positions. Walk through the main lines and understand why the Sicilian has been Black's #1 weapon for decades.",
  difficulty: "intermediate",
  estimatedMinutes: 25,
  icon: "mdi:island",
  tags: ["1.e4", "c5", "asymmetric", "open sicilian", "dragon", "najdorf"],
  sections: [
    {
      title: "Introduction",
      type: "text",
      content: `The Sicilian Defense (1.e4 c5) is Black's most popular reply to 1.e4 at the master level and the most successful in terms of scoring. By playing c5 instead of e5, Black creates an asymmetrical pawn structure that guarantees dynamic, fighting chess.

The key insight: 1...e5 is symmetric and leads to balanced play, while 1...c5 is asymmetric. Black essentially says: "I will give you the center for now, but I'll use my extra space on the queenside to generate counterplay." This imbalance is the secret of the Sicilian's success — both sides have winning chances, but Black is fighting for equality rather than equality itself.

The Open Sicilian (where White plays 2.Nf3 and 3.d4) is the main line, and it has been analyzed to depths of 25+ moves. We'll walk through the most important variations step by step.`,
    },
    {
      title: "Step-by-Step: The Open Sicilian",
      type: "moves",
      interactionMode: "guided",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: [
        "e4",
        "c5",
        "Nf3",
        "d6",
        "d4",
        "cxd4",
        "Nxd4",
        "Nf6",
        "Nc3",
        "a6",
      ],
      moveDescriptions: [
        "White takes the center with the king's pawn. The most ambitious first move.",
        "THE SICILIAN! Black plays c5, fighting for d4 without committing the e-pawn. The move is asymmetric — Black gives White the center for now, but plans to challenge it later.",
        "White develops the knight, supporting the e4 pawn and preparing d4. This is the main line — White wants to open the center immediately.",
        "Black plays d6, supporting the d4 push and preparing to develop the f8 bishop. This is the most common move — the d6-e5 (or d6-e6) structure gives Black a strong center.",
        "The key move! White opens the center, beginning the main battle of the Open Sicilian. Now the game becomes about piece activity and pawn structure.",
        "Black captures, opening the c-file and accepting the challenge. This is the starting point of all main Open Sicilian lines.",
        "White recaptures with the knight, which lands on a powerful central square. From d4, the knight controls b5, c6, e6, and f5 — a true dragon of the center.",
        "Black develops the knight, attacking the e4 pawn. This is the natural move — the knight on f6 also eyes the d5 square.",
        "White defends e4 with another piece, completing the natural development. The knight on c3 supports d5 and b5, central squares that may become key.",
        "The Najdorf setup! Black plays a6, the move that defines an entire variation. The pawn prevents Bb5+ ideas and prepares a flexible queenside expansion with ...b5 or ...e5.",
      ],
      content: `This position is the starting point of the Najdorf Variation, the most popular and heavily analyzed line in all of chess. From here, the game branches into dozens of sub-variations, each with its own theory and strategic ideas.

The key feature: Black has the a6 pawn, which prevents immediate Bb5+ ideas and gives Black a flexible setup. White's main options are:
- 6.Bg5 (the main line, leading to sharp positions)
- 6.Be3 (the English Attack)
- 6.Be2 (the solid classical approach)
- 6.Bc4 (the Fischer-Sozin Attack)

We'll explore the most popular of these next.`,
    },
    {
      title: "Step-by-Step: The Najdorf Main Line (6.Bg5)",
      type: "moves",
      interactionMode: "guided",
      fen: "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 0 2",
      moves: [
        "e4",
        "c5",
        "Nf3",
        "d6",
        "d4",
        "cxd4",
        "Nxd4",
        "Nf6",
        "Nc3",
        "a6",
        "Bg5",
        "e6",
        "f4",
        "Be7",
        "Qf3",
        "Qc7",
        "O-O-O",
        "Nbd7",
        "g4",
        "b5",
        "Bxf6",
        "Nxf6",
        "g5",
        "Nd7",
        "f5",
        "Nc5",
        "f6",
        "gxf6",
        "Nxd6+",
        "Bxd6",
        "Rxd6",
        "Qxd6",
        "Qxf6",
      ],
      moveDescriptions: [
        "White opens with e4.",
        "The Sicilian reply.",
        "Knight to f3, preparing d4.",
        "Black supports d4 with d6.",
        "White opens the center.",
        "Black captures, accepting the open game.",
        "White recaptures with the knight, centralizing.",
        "Black's knight to f6, attacking e4.",
        "White defends e4.",
        "The Najdorf setup with a6.",
        "White pins the knight. This is the main line — the pin prevents Black from playing ...e5 immediately.",
        "Black plays e6, supporting d5 and preparing to break the pin. This is the classical response.",
        "White plays f4, supporting the e5 advance. The English Attack-style plan: prepare an attack on the kingside.",
        "Black develops the bishop to e7, getting out of the pin while keeping the bishop active.",
        "White plays Qf3, adding another defender to e5 and preparing to castle queenside for the kingside attack.",
        "Black plays Qc7, defending the queenside pawns and keeping an eye on the kingside. From c7, the queen supports ...b5 and defends against any sacrifice on b5.",
        "White castles queenside, putting the king on the opposite side of the board. This sets up the kingside pawn storm.",
        "Black reroutes the knight via d7, where it can support both ...b5 and ...e5 breaks.",
        "White begins the pawn storm with g4, pushing toward the Black king. The plan is clear: race to mate.",
        "Black responds with the queenside counter-thrust ...b5, opening the queenside before White's kingside attack lands.",
        "White trades bishops to weaken the Black king's dark squares. This is the key idea — the dark squares around the Black king will be vulnerable.",
        "Black recaptures with the knight, but the f6 knight is less powerful than the f6 bishop for kingside defense.",
        "White pushes g5, kicking the knight and continuing the attack.",
        "The knight is forced to retreat to d7 — the natural square.",
        "White plays f5, the key breakthrough. The f-pawn attacks the e6 pawn and opens the way for f6 sacrifices.",
        "Black plays the critical move Nc5, defending e6 and adding counterplay. The knight reaches a strong square.",
        "White sacrifices with f6!, blowing open the kingside. This is the thematic sacrifice that gives White a winning attack.",
        "Black must recapture with the g-pawn. Now the h-file and g7 are vulnerable.",
        "White sacrifices the knight on d6+! A spectacular blow. The knight is untouchable, and the discovered attack on the queen wins material.",
        "Black is forced to capture with the bishop, opening the d-file.",
        "White's rook takes on d6, with discovered attack on the queen. Two pieces for the queen!",
        "Black captures the queen, but now White has two rooks and a bishop for the queen.",
        "White plays Qxf6, hitting the bishop and threatening mate on g7. The position is winning for White.",
      ],
      content: `This is the heart of the Najdorf main line — the Polugaevsky variation. The play is incredibly sharp: White sacrifices a knight for a kingside attack, and Black must find precise moves to survive.

Key takeaways:
1. The Najdorf is defined by the a6 pawn — it allows Black flexibility (both ...e5 and ...e6 are possible)
2. The English Attack (with f4, Qf3, O-O-O, g4) is one of the main attacking setups
3. The play is forcing — both sides must know theory or they'll be blown off the board
4. Even at the world championship level, this line is regularly debated

The Sicilian teaches a critical lesson: the best defenses don't play for equality — they play for counterplay. Black's choice of c5 over e5 is the foundation of this philosophy.`,
    },
    {
      title: "Step-by-Step: The Dragon Variation",
      type: "moves",
      interactionMode: "guided",
      fen: "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 0 2",
      moves: [
        "e4",
        "c5",
        "Nf3",
        "d6",
        "d4",
        "cxd4",
        "Nxd4",
        "Nf6",
        "Nc3",
        "g6",
        "Be3",
        "Bg7",
        "f3",
        "Nc6",
        "Qd2",
        "O-O",
        "O-O-O",
        "Nxd4",
        "Bxd4",
        "Bd7",
        "Bc4",
        "Rc8",
        "Bb3",
        "Ne5",
        "h4",
        "h5",
        "Bh6",
        "Bxh6",
        "Qxh6",
        "Rc5",
        "Kb1",
        "b5",
        "Bxe5",
        "dxe5",
        "Nd5",
        "Qxd5",
        "exd5",
      ],
      moveDescriptions: [
        "White opens with e4.",
        "The Sicilian.",
        "Knight to f3, supporting d4.",
        "Black plays d6, the most flexible setup.",
        "White opens the center with d4.",
        "Black trades, opening the c-file.",
        "White recaptures with the knight.",
        "Black's knight attacks e4.",
        "White defends e4.",
        "THE DRAGON! Black plays g6, preparing to fianchetto the dark-squared bishop to g7. This is the most aggressive and ambitious setup in the Sicilian.",
        "White develops the bishop to e3, supporting the kingside attack. The Yugoslav Attack setup begins.",
        "Black completes the fianchetto — the bishop on g7 is the Dragon's signature piece. It controls the long diagonal and supports the queenside attack.",
        "White plays f3, supporting e4 and preparing the g4 push. This is the Yugoslav Attack — a long-term kingside build-up.",
        "Black develops the queenside knight, adding a defender to the kingside. The knight is heading to d4 or e5.",
        "White develops the queen to d2, supporting the kingside attack and keeping the f-file open for the rook.",
        "Black castles, putting the king to safety. The Dragon bishop looks menacing, but the d4 push is still a threat.",
        "White castles queenside — opposite-side castling! Now it's a race: who mates first?",
        "Black trades knights, removing one attacker from White's kingside.",
        "White recaptures with the bishop, maintaining the pawn structure.",
        "Black plays Bd7, preparing to double rooks on the c-file. The queenside attack begins to materialize.",
        "White develops the bishop to c4, adding another piece to the kingside attack.",
        "Black doubles rooks on the c-file — the typical Dragon queenside pressure.",
        "White retreats the bishop to b3, supporting the kingside from a safe distance.",
        "Black plays Ne5, centralizing the knight and threatening to infiltrate.",
        "White plays the thematic h4, beginning the kingside pawn storm. The h-pawn is the battering ram against the Black king.",
        "Black plays h5, preventing h5 from White. Now the pawn storm slows down — Black has bought time on the kingside.",
        "White trades the dark-squared bishop for the Dragon bishop! This is a key idea in many Dragon lines — the g7 bishop is dangerous but can be removed.",
        "Black recaptures with the rook? No, the pawn recaptures. Actually Black recaptures with the pawn or piece — this simplifies the position.",
        "White's queen recaptures on h6, threatening Qg7# or Qxh5. The position is sharp.",
        "Black plays Rc5, defending the 5th rank and preparing to invade the queenside.",
        "White plays Kb1, moving the king away from the c1-h6 diagonal. Safety first.",
        "Black plays b5, expanding on the queenside. The counterplay is real — Black is threatening to open files against the White king.",
        "White trades bishops, removing a defender of the Black king.",
        "Black recaptures, opening the position further.",
        "White plays Nd5!, centralizing the knight and threatening to invade. The knight on d5 is a monster.",
        "Black plays the desperate Qxd5, eliminating the powerful knight.",
        "White recaptures with the pawn, fixing the structure. The position is now winning for White — the Black king is exposed.",
      ],
      content: `The Dragon Variation is the most aggressive response in the Sicilian. Black's signature move is ...g6 followed by ...Bg7, putting the dark-squared bishop on the long diagonal.

The Dragon was a favorite of Bobby Fischer and Garry Kasparov. Kasparov used it to defeat Karpov in multiple world championship games, and the line remains popular at all levels.

Key strategic themes:
1. The Black bishop on g7 is both a strength (controlling the long diagonal) and a target (can be attacked and traded)
2. White's typical plan is the Yugoslav Attack: Be3, f3, Qd2, O-O-O, g4, h4 — a slow kingside buildup
3. Black's counterplay is on the queenside, often with ...b5, ...Rb8, and ...Nc5
4. The position is a race: who mates first?`,
    },
    {
      title: "Step-by-Step: Anti-Sicilians",
      type: "moves",
      interactionMode: "guided",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: [
        "e4",
        "c5",
        "Nc3",
        "Nc6",
        "f4",
        "g6",
        "Nf3",
        "Bg7",
        "Bb5",
        "Nd4",
        "O-O",
        "d6",
        "d3",
        "Nf6",
        "Qe1",
        "O-O",
        "Qf2",
        "a6",
        "Bxc6",
        "bxc6",
        "Be3",
        "e5",
      ],
      moveDescriptions: [
        "White opens with e4.",
        "The Sicilian!",
        "The Closed Sicilian! White plays 2.Nc3 instead of 2.Nf3, avoiding the Open Sicilian theory. The plan is to play f4, g4, and a kingside attack — the Grand Prix Attack.",
        "Black develops the knight, attacking the e4 pawn. This is the main response — the knight supports e5 ideas.",
        "White plays the aggressive f4, beginning the kingside attack. This is the Grand Prix Attack — fast and dangerous.",
        "Black plays g6, ready to fianchetto the bishop to g7. This is the modern setup — the Dragon bishop will be a key piece.",
        "White develops the knight to f3, supporting the e4 pawn and preparing g4 ideas.",
        "Black completes the fianchetto. The dark-squared bishop is the centerpiece of Black's position.",
        "White develops the bishop to b5, pinning the knight and creating tactical opportunities.",
        "Black plays the tricky Nd4, attacking the f3 knight. This is a sharp reply — Black is willing to sacrifice for activity.",
        "White castles, prioritizing king safety. The Nd4 knight is annoying but not decisive.",
        "Black plays d6, supporting the knight and preparing to develop.",
        "White plays the modest d3, building a solid center. The plan is clear: prepare g4 at the right moment.",
        "Black develops the knight to f6, completing development. From f6, the knight supports e5 and g4 ideas.",
        "White plays Qe1, vacating the d1 square for the queen and the a2-g8 diagonal. This is the standard Closed Sicilian maneuver.",
        "Black castles, completing development. The position is now ready for the kingside attack.",
        "White plays Qf2, supporting the g4 push and keeping the d1-h5 diagonal clear.",
        "Black plays a6, gaining queenside space. This is a useful waiting move — Black prepares ...b5 expansion.",
        "White trades bishops, removing Black's most active piece.",
        "Black recaptures with the b-pawn, opening the file and creating counterplay.",
        "White develops the bishop to e3, supporting the kingside attack and connecting the rooks.",
        "Black plays e5, challenging the center and gaining space. The position is dynamic — both sides have chances.",
      ],
      content: `Anti-Sicilians are White's options to avoid the heavily analyzed Open Sicilian theory. The most popular are:

1. The Alapin (2.c3): White prepares d4 with a solid pawn center. Black's main replies are 2...d5, 2...e6, and 2...Nf6. Sound and playable at all levels.

2. The Closed Sicilian / Grand Prix Attack (2.Nc3 followed by f4 and g4): White goes for a kingside attack. The position is sharp and double-edged.

3. The Moscow Variation (2.Nf3 d6 3.Bb5+): White checks the bishop, gaining time. If 3...Bd7 4.Bxd7+ Qxd7, Black has the bishop pair but has lost time.

4. The Smith-Morra Gambit (2.d4 cxd4 3.c3): A pawn sacrifice for rapid development. Risky but devastating in blitz.

The lesson: if you don't want to memorize 20 moves of Dragon theory, Anti-Sicilians give you playable, fighting positions with much less homework.`,
    },
    {
      title: "Key Strategic Ideas",
      type: "key-idea",
      content: `The Sicilian is rich with strategic themes that recur across all variations:

1. The Asymmetric Pawn Structure
Black has d6 + e6 (or e5) — a strong center. White has e4 + potentially other central pawns. This imbalance drives the entire game: Black plays for counterplay on the queenside, White attacks on the kingside.

2. Opposite-Side Castling
Most Sicilian lines feature White castling queenside and Black castling kingside (or vice versa). This creates a race: who mates first? The side that calculates more accurately wins.

3. The Open c-File
After 2.Nf3 d6 3.d4 cxd4 4.Nxd4, the c-file is half-open. Black's rook will be a key piece on this file, often doubling with Rc8.

4. The d5 Square
The d5 square is the most contested central square in the Open Sicilian. Whoever controls d5 (or prevents the other from using it) gains a huge advantage.

5. The Endgame Transition
Sicilian endgames are notoriously complex. Black's extra queenside pawn is a long-term asset, but White's piece activity often forces simplifications. Knowing when to trade is a skill that takes years to develop.

The Sicilian is a great choice if you want a fighting game. It has been a top-level weapon for decades, and learning it teaches the most important strategic lessons in chess.`,
    },
  ],
};
