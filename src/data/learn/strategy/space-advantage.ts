import { LearnTopic } from "../types";

export const spaceAdvantage: LearnTopic = {
  slug: "space-advantage",
  title: "Space Advantage & Development",
  category: "strategy",
  description:
    "Controlling more space gives your pieces better squares and restricts the opponent. Learn how to gain, use, and fight against a space advantage.",
  difficulty: "intermediate",
  estimatedMinutes: 12,
  icon: "mdi:arrow-expand-all",
  tags: ["space", "development", "tempo", "center", "cramp"],
  sections: [
    {
      title: "Why Space Matters",
      type: "text",
      content: `Space advantage means your pieces have more good squares available than the opponent's. A side with more space can:
1. Maneuver pieces to optimal squares without congestion
2. Switch the attack from one wing to another faster
3. Defend multiple weaknesses more easily
4. Avoid tactical accidents caused by cramped piece placement

The opposite — being cramped — means your pieces get in each other's way, you have fewer good squares, and tactical weaknesses multiply. The side with less space must often trade pieces to relieve the cramp.`,
    },
    {
      title: "Gaining Space in the Opening",
      type: "position",
      interactionMode: "freeplay",
      fen: "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1",
      content: `How to gain space in the opening:
1. Occupy the center with pawns (e4, d4 for White; d5, e5 for Black)
2. Develop pieces to active squares that control the center
3. Prevent the opponent from achieving their optimal setup
4. Make pawn moves that gain space without creating permanent weaknesses

The central squares (e4, d4, e5, d5) are the most important because pieces placed there radiate influence in all directions. A knight on e5 controls 8 squares; a knight on a1 controls only 2.

Common mistakes that give away space:
- Moving the same piece multiple times in the opening
- Exchanging a developed piece for an undeveloped one
- Passive piece placement (knights on the rim, bishops blocked by own pawns)
- Premature flank pawn moves that don't fight for the center

The lesson: in the opening, prioritize central pawns and piece development. Each pawn move in the center gains space; each flank pawn move usually gives the opponent counterplay. The goal: a developed, centralized army with room to maneuver.`,
    },
    {
      title: "The Principle of Two Weaknesses",
      type: "key-idea",
      content: `When you have a space advantage, the opponent can usually defend one weakness. The principle of two weaknesses states: create a second weakness, and the opponent's position collapses because they can't defend both simultaneously.

How to apply it:
1. Use your space advantage to maneuver pieces flexibly
2. Create a threat on one wing, forcing the opponent to commit defenders
3. Switch to the other wing — the opponent's pieces can't get there fast enough because they're cramped
4. The opponent either makes a concession on the first wing or collapses on the second

This principle underlies almost every positional grind in chess. Capablanca was the master of this: he would maneuver endlessly, probing for weaknesses, until the opponent's defense stretched too thin.

The corollary for the defender: When facing a space disadvantage, trade pieces. Every trade reduces the attacker's maneuvering advantage. The cramped side wants simplification; the side with more space wants to keep pieces on the board.`,
    },
    {
      title: "Development & Tempo",
      type: "key-idea",
      content: `Development means bringing pieces from their starting squares to active positions. Tempo means time — each move that develops a piece or creates a threat is a tempo gained.

Key development principles:
1. Knights before bishops (knights have fewer good squares early)
2. Don't move the queen out too early (it becomes a target)
3. Castle early to safety
4. Connect the rooks (develop everything between them)
5. Don't make too many pawn moves (each pawn move is a tempo NOT spent developing)

A tempo advantage is a lead in development. If you've developed 3 pieces and your opponent has only developed 1, you have a 2-tempo advantage. This advantage is temporary (it disappears if you waste time), but in the short term, it can be converted into a material or positional edge through a well-timed attack.

The Gambit mentality: In gambit openings, the gambiteer sacrifices a pawn in exchange for a development advantage. The idea is that the tempo lead is worth more than the pawn. When you're ahead in development, open the center — your pieces will reach the critical squares first.`,
    },
  ],
};
