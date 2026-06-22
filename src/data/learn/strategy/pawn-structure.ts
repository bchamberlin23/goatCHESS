import { LearnTopic } from "../types";

export const pawnStructure: LearnTopic = {
  slug: "pawn-structure",
  title: "Pawn Structure Fundamentals",
  category: "strategy",
  description:
    "Pawns are the soul of chess. Learn about pawn chains, islands, passed pawns, doubled pawns, and how pawn structure determines your strategic plans. Walk through real examples.",
  difficulty: "beginner",
  estimatedMinutes: 15,
  icon: "mdi:chess-pawn",
  tags: ["pawns", "structure", "islands", "passed pawn", "doubled", "chains"],
  sections: [
    {
      title: "Why Pawn Structure Matters",
      type: "text",
      content: `Philidor said "pawns are the soul of chess" — and he was right. While pieces can move freely, pawns only move forward and cannot go back. Every pawn move creates a permanent weakness. Understanding pawn structure is the foundation of strategic chess.

The pawn structure determines:
- Which pieces are good or bad
- Where the open files are
- What the plans should be for both sides
- Who has the long-term advantage

The lesson: strong players think about pawn structure before they think about pieces. The pawns are the skeleton of the position, and pieces are the muscle.`,
    },
    {
      title: "Pawn Islands",
      type: "key-idea",
      content: `A pawn island is a group of connected pawns (pawns that can protect each other). The fewer islands you have, the better your pawn structure.

Typical counts:
- Perfect: 1 island (all pawns connected: a2-f2-g2-h2 type structures)
- Good: 2 islands (typical after castling: a2-b2-c2 and f2-g2-h2)
- Concerning: 3 islands (typical after advancing one central pawn and trading)
- Poor: 4+ islands (isolated pawns everywhere — a structural weakness)

Why islands matter:
1. Each island needs at least one piece to defend it
2. More islands = more defensive obligations = less active pieces
3. Connected pawns control more squares and support each other
4. The side with fewer pawn islands has a long-term strategic advantage

The lesson: count your pawn islands after every capture sequence. If you have more islands than your opponent, look for trades to reduce the difference. The side with fewer islands usually has better piece activity.`,
    },
    {
      title: "Passed Pawns",
      type: "position",
      interactionMode: "freeplay",
      fen: "8/2p5/1pP5/8/8/8/8/8 w - - 0 1",
      content: `A passed pawn is a pawn that has no enemy pawns blocking its path to promotion. In this position, White's c6 pawn is a passed pawn — no Black pawns (b6 and c7) can block its path forward.

Passed pawns are the most dangerous type of pawn because:
1. They must be blockaded by a piece (tying down enemy resources)
2. The closer they get to promotion, the more valuable they become
3. In the endgame, a passed pawn can be worth more than a piece
4. The side with a passed pawn wants to trade pieces (simplify to an endgame)

Nimzowitsch's rule: "A passed pawn is a criminal which should be kept under lock and key. Mild measures, such as police surveillance, are not sufficient."

Creating passed pawns:
- Pawn majorities: 3v2 or 2v1 on one side of the board
- Undermining: attacking the base of a pawn chain
- Pawn breaks: advancing to force trades that leave a passed pawn

The lesson: passed pawns are the ultimate strategic weapon. In the endgame, a passed pawn on the 7th rank is often worth a rook. Learn to create them and to blockade them.`,
    },
    {
      title: "Weaknesses: Doubled, Isolated, and Backward Pawns",
      type: "key-idea",
      content: `1. Doubled Pawns: Two pawns on the same file.
- Cannot protect each other
- Control fewer squares than connected pawns
- Are vulnerable to frontal attack
- However, doubled pawns can open a file for a rook (partial compensation)

2. Isolated Pawns: A pawn with no friendly pawns on adjacent files.
- Cannot be defended by another pawn
- Must be defended by pieces, tying them down
- Is a permanent weakness in the position
- The blockading square in front of an isolated pawn is an excellent outpost for an enemy piece

3. Backward Pawns: A pawn that has fallen behind its neighbors and cannot advance without being captured.
- Weakens the squares in front of it
- Often becomes a target for enemy pieces
- The square directly in front of a backward pawn is a classic outpost

The common theme: structural pawn weaknesses are permanent. Pieces can be redeployed, but a weak pawn structure stays weak for the rest of the game. This is why strong players are so careful about pawn moves in the opening.

The lesson: identify your opponent's pawn weaknesses and target them. A doubled, isolated, or backward pawn is a permanent target. Pieces placed on the weak squares in front of these pawns can become permanent outposts.`,
    },
  ],
};
