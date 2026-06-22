import { LearnTopic } from "../types";

export const pin: LearnTopic = {
  slug: "pin",
  title: "The Pin",
  category: "tactics",
  description:
    "Master the pin — one of the most powerful tactical weapons. Learn absolute pins, relative pins, and how to exploit pinned pieces.",
  difficulty: "beginner",
  estimatedMinutes: 8,
  icon: "mdi:pin",
  tags: ["pin", "absolute pin", "relative pin", "bishop", "rook"],
  sections: [
    {
      title: "What Is a Pin?",
      type: "text",
      content: `A pin is a tactic where an attacking piece (bishop, rook, or queen) attacks an enemy piece that cannot move without exposing a more valuable piece behind it. The pinned piece is essentially frozen, making it a target for further attack. Pins are one of the most common and powerful tactical ideas in chess.`,
    },
    {
      title: "Absolute vs Relative Pin",
      type: "position",
      fen: "r1bq1rk1/ppp1nppp/3p4/4pB2/2BPP3/8/PPP2PPP/RN1QK2R b KQ - 0 1",
      content: `An absolute pin occurs when the piece behind the pinned piece is the king. The pinned piece cannot legally move because that would expose the king to check. Example: a knight on f6 pinned by Bg5 when the queen is on d8 and the king on e8. The knight is absolutely pinned.

A relative pin occurs when the piece behind is more valuable than the pinned piece but not the king. Example: a knight on c6 pinned by Bb5 when the rook is on a8 and queen on d8. Black could legally move the knight but would lose material.

Key differences:
- Absolute pins: The pinned piece cannot move at all (it's illegal)
- Relative pins: The pinned piece CAN move, but doing so loses material
- Both types make the pinned piece vulnerable to being captured by pawns or lesser pieces`,
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

5. The "Zwischenzug" pin: Sometimes the threat of a pin can be used as an intermediate move (zwischenzug) to gain time or material.`,
    },
  ],
};
