import { LearnTopic } from "../types";

export const skewer: LearnTopic = {
  slug: "skewer",
  title: "The Skewer (X-Ray Attack)",
  category: "tactics",
  description:
    "The reverse of a pin. Attack a valuable piece, forcing it to move, then capture the piece behind it. The skewer is one of the deadliest tactical weapons.",
  difficulty: "beginner",
  estimatedMinutes: 7,
  icon: "mdi:arrow-right-bold",
  tags: ["skewer", "x-ray", "rook", "bishop", "queen"],
  sections: [
    {
      title: "What Is a Skewer?",
      type: "text",
      content: `A skewer (also called an X-ray attack) is the reverse of a pin. The attacking piece attacks a valuable enemy piece along a line; when that piece moves out of the way, it exposes a less valuable piece behind it, which is then captured. A skewer is like a pin in reverse — the more valuable piece is in front.

The classic skewer: A rook or queen attacks the enemy king, which must move out of check, exposing the queen behind it. The attacker then captures the queen.`,
    },
    {
      title: "The Classic Skewer Pattern",
      type: "position",
      fen: "4k3/4r3/8/8/8/8/8/3R2K1 w - - 0 1",
      content: `In this position, White plays Re1+, skewering the king and rook. The Black king must move (let's say Kd8), and then White captures the rook on e7. The value order matters: king > queen > rook > bishop/knight > pawn. The skewer works because the front piece is more valuable than the back piece.

Common skewer patterns:
1. King-Queen skewer: A rook or queen attacks the king, forcing it to move, and captures the queen
2. King-Rook skewer: The rook endgame classic — a rook checks the king, and captures the rook on the same file/rank
3. Queen-Rook skewer: A bishop attacks the queen; when the queen moves, the rook behind is captured
4. Rook-Bishop skewer: A bishop attacks the rook; when it moves, the bishop behind is captured`,
    },
    {
      title: "Practical Skewer Patterns",
      type: "key-idea",
      content: `1. The Endgame Skewer: In rook endgames, the skewer is the most important tactical resource. A rook checking the opponent's king on the same file as their rook is a classic winning technique. Learn to check from the side, not from behind — a side-check skewer is harder to defend against.

2. The Bishop Skewer: Bishops can skewer pieces on diagonals. A common pattern: a bishop on c4 attacks the queen on f7, and when the queen moves, the rook on a8 is captured.

3. The Queen Skewer: The queen combines rook and bishop capabilities, making it the ultimate skewering piece. A queen can skewer along files, ranks, or diagonals.

4. Defending against skewers: 
- Keep pieces on different lines (files/ranks/diagonals) from more valuable pieces
- In the endgame, keep your king and rook on different ranks/files
- Interpose a piece to break the line of attack
- Counter-skewer: If both sides have skewer possibilities, the threat can be mutual`,
    },
  ],
};
