import { LearnTopic } from "../types";

export const fork: LearnTopic = {
  slug: "fork",
  title: "The Fork (Double Attack)",
  category: "tactics",
  description:
    "The most fundamental tactical motif in chess. Learn how knights, pawns, and other pieces create devastating forks that win material. Walk through real examples move by move.",
  difficulty: "beginner",
  estimatedMinutes: 10,
  icon: "mdi:source-fork",
  tags: ["fork", "double attack", "knight", "pawn", "royal fork"],
  sections: [
    {
      title: "What Is a Fork?",
      type: "text",
      content: `A fork is a tactic where a single piece attacks two (or more) enemy pieces simultaneously. Because the opponent can only move one piece per turn, the forking piece typically captures one of the targets on the next move. The fork is the most fundamental and frequently occurring tactical motif in chess.

Forks can be delivered by any piece, but knights and pawns are the most dangerous forkers because:
- Knights can jump over other pieces, making forks harder to spot
- Pawns are cheap to lose, so even trading a pawn for a piece is a huge win

The "royal fork" — forking the king and queen with a knight — is the most devastating version, because the king is in check and must move, leaving the queen to be captured.`,
    },
    {
      title: "Example: The Royal Fork",
      type: "position",
      interactionMode: "freeplay",
      fen: "r1bq1rk1/ppp2ppp/2np4/4N3/2B5/8/PPPP1PPP/RNBQK2R b KQ - 0 1",
      content: `In this position, the White knight on e5 is one move from delivering a devastating royal fork. The Black king sits on g8, defended by the f7 pawn, and the Black queen sits on d8, undefended.

The killer move: 1.Nf7+! The knight jumps to f7 with check. Now the Black king is in check AND the Black queen is under attack. The king must move (1...Kg8 is forced, since blocking the check with the rook on f8 would lose the rook, and capturing the knight with the king is illegal because the queen is still under attack from the bishop on c4... wait, the bishop on c4 is pinned to the king by the f6 knight).

Actually, in this exact position 1.Nf7+ wins the queen because:
- The knight checks the king
- The knight attacks the queen on d8
- The king cannot capture the knight because the queen is still hanging
- After 1...Kg8, White plays 2.Bxf7+ and wins material

This is the most famous fork pattern in chess. Always be alert to a knight that can reach a square where it attacks the king and another valuable piece.`,
    },
    {
      title: "Example: The Pawn Fork",
      type: "position",
      interactionMode: "freeplay",
      fen: "4k3/8/8/3n4/8/8/4P4/4K3 w - - 0 1",
      content: `A pawn fork is one of the most common tactics in chess. The basic pattern: a pawn advances to a square where it attacks two pieces at once.

In this example, the White pawn on e2 can play 1.e4!, forking the Black knight on d5 and the Black king on e8. After 1.e4, the knight must move (1...Nf6 or 1...Nb6 or 1...Nc7 or 1...Ne7) and the king must step aside. White wins a clean tempo and often a pawn or more.

The key insight: pawns are worth very little material, so even trading a pawn for a piece via a fork is a huge win. Always check pawn moves for fork potential.

Common pawn fork patterns:
- e4 forking a piece on d5 and another on f5
- d4 forking a piece on c5 and another on e5
- a3 (or h3) forking a piece on b4 (or g4) and another on b2 (or g2)`,
    },
    {
      title: "Example: The Knight Fork Setup",
      type: "position",
      interactionMode: "freeplay",
      fen: "r3k2r/ppp2ppp/2nq1n2/4p3/2B1P3/2N2N2/PP3PPP/R1BQ1RK1 b kq - 0 1",
      content: `A common knight fork setup in the Italian Game. The White knight on f3 is one move from a powerful fork: 1.Ng5, attacking the f7 square (defended only by the king) and threatening Nd5 (attacking c7 and e7).

The key principle: a knight on the 5th rank (or 4th rank for Black) is often a fork waiting to happen. The squares d5, e5, f5, g5 are the most dangerous fork squares because they attack multiple pieces.

In this position, the simple 1.Ng5 forks the f7 pawn (defended only by the king) and creates the threat of Nd5+, forking the king and queen. The combination of these threats is often decisive.

The lesson: when you have a knight on the 5th rank (or 4th rank for Black), always check if it can jump to another fork square. The knight is the most dangerous forking piece in chess.`,
    },
    {
      title: "Common Fork Patterns",
      type: "key-idea",
      content: `Here are the most important fork patterns to know:

1. Knight Forks: The knight can fork up to 8 squares. Common patterns:
- e5 knight forking d7 and f7 (attacking queen and rook/king)
- c7 knight forking king and rook (after a queen sacrifice)
- d5 knight forking c7 and e7 (common in the Sicilian)
- f3 knight forking d4 and h4 (attacking two pieces)

2. Pawn Forks: Pawns are excellent forkers because they attack two squares. A pawn advancing to fork two pieces (like a knight and bishop) is a common way to win material. Pawn forks are especially effective because the pawn is worth so little that even trading it for a piece is a huge win.

3. Queen Forks: The queen can attack in 8 directions, making it a powerful forking piece. However, queen forks are usually easier to spot and defend against because the queen is so valuable.

4. Bishop Forks: Less common but still important. A bishop can fork two pieces along the same diagonal, or fork a piece while threatening mate.

5. Rook Forks: Rook forks usually occur on the 7th rank or along a file where two pieces are aligned.

The lesson: always look for forks. They are the most common tactical motif in chess, and learning to spot them is the single most important skill for any chess player.`,
    },
  ],
};
