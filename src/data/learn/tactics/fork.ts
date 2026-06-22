import { LearnTopic } from "../types";

export const fork: LearnTopic = {
  slug: "fork",
  title: "The Fork (Double Attack)",
  category: "tactics",
  description:
    "The most fundamental tactical motif in chess. Learn how knights, pawns, and other pieces create devastating forks that win material.",
  difficulty: "beginner",
  estimatedMinutes: 8,
  icon: "mdi:source-fork",
  tags: ["fork", "double attack", "knight", "pawn", "royal fork"],
  sections: [
    {
      title: "What Is a Fork?",
      type: "text",
      content: `A fork is a tactic where a single piece attacks two (or more) enemy pieces simultaneously. Because the opponent can only move one piece per turn, the forking piece typically captures one of the targets on the next move. The fork is the most fundamental and frequently occurring tactical motif in chess.`,
    },
    {
      title: "The Royal Fork",
      type: "position",
      fen: "r1bq1rk1/ppp2ppp/2np4/4N3/2B5/8/PPPP1PPP/RNBQK2R b KQ - 0 1",
      content: `The most devastating fork is the "royal fork" (or "family fork") where a knight simultaneously attacks the king and queen. In this position, White's knight on e5 forks Black's king (on g8) and queen (on d8). After Nf7+, the king must move, and White captures the queen.

Knights are the most dangerous forking pieces because:
1. They can jump over other pieces, making forks harder to spot
2. Their unusual movement pattern creates unexpected fork squares
3. Knight forks often come with check, giving the opponent no time to respond`,
    },
    {
      title: "Common Fork Patterns",
      type: "key-idea",
      content: `1. Knight Forks: The knight can fork up to 8 squares. Common patterns:
- e5 knight forking d7 and f7 (attacking queen and rook/king)
- c7 knight forking king and rook (after a queen sacrifice)
- d5 knight forking c7 and e7 (common in the Sicilian)
- f3 knight forking d4 and h4 (attacking two pieces)

2. Pawn Forks: Pawns are excellent forkers because they attack two squares. A pawn advancing to fork two pieces (like a knight and bishop) is a common way to win material. Pawn forks are especially effective because the pawn is worth so little that even trading it for a piece is a huge win.

3. Queen Forks: The queen can attack in 8 directions, making it a powerful forking piece. However, queen forks are usually easier to spot and defend against because the queen is so valuable.

4. Bishop Forks: Less common but still important. A bishop can fork two pieces along the same diagonal, or fork a piece while threatening mate.

5. Rook Forks: Rook forks usually occur on the 7th rank or along a file where two pieces are aligned.`,
    },
  ],
};
