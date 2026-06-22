import { LearnTopic } from "../types";

export const pin: LearnTopic = {
  slug: "pin",
  title: "The Pin",
  category: "tactics",
  description:
    "Master the pin — one of the most powerful tactical weapons. Learn absolute pins, relative pins, and how to exploit pinned pieces.",
  difficulty: "beginner",
  estimatedMinutes: 10,
  icon: "mdi:pin",
  tags: ["pin", "absolute pin", "relative pin", "bishop", "rook"],
  sections: [
    {
      title: "What Is a Pin?",
      type: "text",
      content: `A pin is a tactic where an attacking piece (bishop, rook, or queen) attacks an enemy piece that cannot move without exposing a more valuable piece behind it. The pinned piece is essentially frozen, making it a target for further attack. Pins are one of the most common and powerful tactical ideas in chess.

There are two types of pins:
- Absolute pin: the piece behind is the king (pinned piece CANNOT move legally)
- Relative pin: the piece behind is more valuable but not the king (pinned piece CAN move but would lose material)`,
    },
    {
      title: "Example: Absolute Pin",
      type: "position",
      interactionMode: "freeplay",
      fen: "r1bq1rk1/ppp1nppp/3p4/4pB2/2BPP3/8/PPP2PPP/RN1QK2R b KQ - 0 1",
      content: `An absolute pin occurs when the piece behind the pinned piece is the king. The pinned piece cannot legally move because that would expose the king to check.

In this position, the Black knight on e7 is absolutely pinned by the White bishop on g5. The knight is defended by the queen on d8 and the rook on f8, but it cannot move because doing so would expose the king on g8 to check from the bishop.

Absolute pins are extremely powerful because:
1. The pinned piece is essentially a dead piece — it cannot move at all
2. The pinned piece is a target for further attack
3. The defender may need to weaken their position to break the pin

Common ways to exploit an absolute pin:
- Attack the pinned piece with pawns or lesser pieces
- Pile up attackers on the pinned piece
- Use the pinned piece as a positional weakness`,
    },
    {
      title: "Example: Relative Pin",
      type: "position",
      interactionMode: "freeplay",
      fen: "r1bqk2r/pppp1ppp/2n2n2/4p3/1bB1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 1",
      content: `A relative pin occurs when the piece behind the pinned piece is more valuable than the pinned piece but is not the king. The pinned piece CAN move legally, but doing so would lose material.

In this position, the White bishop on c4 is relatively pinned by the Black bishop on b4. The bishop is defended by the queen on d1, but it cannot move to a safe square without losing the queen (e.g., 1.Bb3 would lose the queen to ...Bxf3 or similar tactics).

Relative pins are powerful because:
1. The pinned piece is a long-term weakness
2. The pinned piece can be attacked with pawns (which is the standard technique)
3. The defender may need to give up material to break the pin

The classic technique: "Attack a pinned piece with a pawn — it costs you nothing and forces a concession." A pawn attacking a relatively pinned piece cannot be captured without losing the more valuable piece behind.`,
    },
    {
      title: "Exploiting Pins",
      type: "key-idea",
      content: `1. Attack the pinned piece: Once a piece is pinned, bring more attackers. Since the pinned piece can't move, it's often an easy target. A common mantra: "Attack a pinned piece with a pawn — it costs you nothing and forces a concession."

2. The "Noose" technique: When a knight is pinned to the queen by a bishop, retreating the bishop one square (maintaining the pin) can trap the knight entirely.

3. Cross-pins: A piece can be pinned in two directions simultaneously, making it completely helpless.

4. Breaking a pin: To escape a pin, you can:
- Move the piece behind the pinned piece
- Capture the pinning piece
- Interpose a piece between the pinner and the pinned piece
- Counter-attack with a more powerful threat

5. The "Zwischenzug" pin: Sometimes the threat of a pin can be used as an intermediate move (zwischenzug) to gain time or material.

The lesson: pins are everywhere in chess. Learning to spot them and exploit them is a fundamental tactical skill. The key: when you see three pieces aligned on a file, rank, or diagonal, check if a pin is possible.`,
    },
  ],
};
