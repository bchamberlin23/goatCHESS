import { LearnTopic } from "../types";

export const kingsIndian: LearnTopic = {
  slug: "kings-indian",
  title: "The King's Indian Defense",
  category: "openings",
  description:
    "The most aggressive defense against 1.d4. Black allows White a big center and then counterattacks with ...e5 or ...c5 in sharp, dynamic positions. Walk through the main lines and learn the King's Indian.",
  difficulty: "advanced",
  estimatedMinutes: 25,
  icon: "mdi:fort-akbar",
  tags: ["1.d4", "Nf6", "g6", "dynamic", "counter-attack", "Kasparov"],
  sections: [
    {
      title: "Introduction",
      type: "text",
      content: `The King's Indian Defense (1.d4 Nf6 2.c4 g6) is the most combative reply to 1.d4 and 2.c4. Black allows White to build a massive center (e4, d4, c4), then counterattacks with violent pawn breaks (...e5 or ...c5).

The KID has been a weapon of attacking champions: Bronstein, Fischer, Kasparov, and Nakamura have all used it to create masterpieces. The fundamental imbalance is White's space vs Black's dynamic counterplay.

The main variations are:
- The Classical (6.Be2 e5 7.d5) — the most common
- The Saemisch (5.f3) — White plays for a kingside pawn storm
- The Petrosian (5.Nf3 O-O 6.Be2 e5 7.d5) — closed center
- The Four Pawns Attack (5.f4) — extremely sharp
- The Averbakh (5.Be2 O-O 6.Bg5) — flexible setup`,
    },
    {
      title: "Step-by-Step: The Classical Main Line",
      type: "position",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      content: `The Classical King's Indian is the most popular line. After 6.Be2 e5 7.O-O Nc6 8.d5 Ne7, both sides have completed development and the game enters the middlegame.

The key feature: White's space advantage on the queenside vs Black's attack on the kingside. The player who calculates more accurately wins.

The Mar del Plata Variation (after 9.Ne1 Nd7 10.Be3 f5 11.f3 f4 12.Bf2 g5) is the sharpest line. Both sides play for mate — White on the queenside, Black on the kingside.

Key themes:
1. The Race
White pushes c5 and b4 on the queenside; Black pushes g4 and h5 on the kingside. Whoever mates first wins.

2. The Blockade
White's knight on d3 (or f1-g3) is a key blockader. Black's knight on f6 or g6 is the kingside attacker.

3. The Endgame
If the attack fails, Black's structure is often worse. The pawn structure with d6-e5 is solid but passive in endgames.`,
    },
    {
      title: "Step-by-Step: The Saemisch Variation",
      type: "position",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      content: `The Saemisch Variation (5.f3) is the most aggressive anti-KID setup. White plays for a kingside pawn storm with g4, h4, h5, etc.

The position is sharp and requires precise play from both sides. White's plan: castle queenside and attack on the kingside. Black's plan: ...f5, ...f4, and attack on the kingside too.

Key themes:
1. The Race
Both sides attack on opposite wings. The player who mates first wins.

2. The f3 Pawn
The f3 pawn is a long-term commitment. It prevents ...Ng4 but also weakens the e3 square and the kingside dark squares.

3. The Endgame
The Saemisch often leads to complex endgames where White's queenside pawn majority is a long-term asset.`,
    },
    {
      title: "Step-by-Step: The Petrosian Variation",
      type: "position",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      content: `The Petrosian Variation (5.Nf3 O-O 6.Be2 e5 7.d5 a5) is a less common but very solid setup. Instead of attacking on the kingside, Black plays on the queenside with ...a5, ...Na6, ...Nc5.

The Petrosian Variation is a great choice for players who prefer a more positional game. The positions are less sharp than the Classical or Saemisch, but they still require precise play.

Key themes:
1. The Queenside Attack
Black's plan is to play on the queenside with ...a5, ...Na6, ...Nc5. This is a slower but no less effective plan.

2. The Closed Center
The d5-e4 pawn chain closes the center. Both sides must play on the wings.

3. The Endgame
The Petrosian often leads to endgames where Black's queenside pawn majority is a long-term asset.`,
    },
    {
      title: "Step-by-Step: The Four Pawns Attack",
      type: "position",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      content: `The Four Pawns Attack (5.f4) is the most aggressive anti-KID setup. White pushes all four central pawns, creating a massive center.

The opening is considered slightly dubious at the top level because Black's ...c5 and ...e6 breaks give excellent counterplay. But in club games, the Four Pawns can be devastating.

Key themes:
1. The Massive Center
White's d4-c4-e4-f4 pawn chain is a wall of central power. The plan: open lines for the bishops and attack the Black king.

2. The Counter-Attack
Black's ...c5 and ...e6 breaks are the key counter-attackers. The position becomes highly tactical — both sides must calculate precisely.

3. The Endgame
The Four Pawns often leads to complex endgames where White's extra pawn is a long-term asset.`,
    },
    {
      title: "Key Strategic Ideas",
      type: "key-idea",
      content: `The King's Indian Defense is rich with strategic themes that recur across all variations:

1. The Space vs Counterplay
White's space advantage vs Black's dynamic counterplay is the fundamental imbalance. Both sides have winning chances, but Black is fighting for equality.

2. The Race on Opposite Wings
After castling on opposite sides, both sides attack on opposite wings. The player who calculates more accurately wins.

3. The Blockade
The d5 square is the most important blockading square. Whoever controls d5 (or prevents the other from using it) gains a huge advantage.

4. The Mar del Plata Pawn Structure
After 9.Ne1 Nd7 10.Be3 f5 11.f3 f4 12.Bf2 g5, the position is a classic race. White pushes c5 and b4; Black pushes g4 and h4. The player who mates first wins.

5. The Endgame
The KID often leads to endgames where Black's structure is worse but piece activity compensates. Knowing when to trade pieces is essential.

The KID is a great choice for players who want a fighting, dynamic game. It's been a top-level weapon for decades and remains one of the most popular defenses at all levels.`,
    },
  ],
};
