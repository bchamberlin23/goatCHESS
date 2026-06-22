import { LearnTopic } from "../types";

export const bodensMate: LearnTopic = {
  slug: "bodens-mate",
  title: "Boden's Mate",
  category: "mates",
  description:
    "A spectacular checkmate delivered by two bishops on crisscrossing diagonals after the opponent castles queenside.",
  difficulty: "intermediate",
  estimatedMinutes: 8,
  icon: "mdi:crosshairs",
  tags: ["boden", "bishops", "crisscross", "queenside castle", "diagonal"],
  sections: [
    {
      title: "What Is Boden's Mate?",
      type: "text",
      content: `Boden's Mate is a checkmate pattern where two bishops (or a bishop and queen) deliver mate on crisscrossing diagonals. It typically occurs when the opponent has castled queenside, and the a2 (or a7) pawn has moved, exposing the king on c1 (c8). The mate is named after Samuel Boden, an English chess master who executed it in an 1853 game.`,
    },
    {
      title: "The Classic Pattern",
      type: "position",
      fen: "2kr1b1r/pppb1ppp/2n1p3/4P3/3N2Q1/1q6/P1P2PPP/R3KBR1 w - - 0 1",
      content: `The classic Boden's Mate pattern: the king is on c1 (or c8), a bishop on a3 (a6) controls the diagonal going to c1, and another bishop or queen on f4 (f5) controls the other diagonal. If the king is on c1 and the bishops are on a3 and f4, the king is checkmated — both diagonals cut off all escape squares.

The mate requires:
1. The opponent's king to be on c1 (White) or c8 (Black), usually after queenside castling
2. The a-pawn or b-pawn to have moved, creating a weakness on the diagonal
3. Two bishops or a bishop and queen on crisscrossing diagonals`,
    },
    {
      title: "Boden's Mate Classic Game: Schulder vs Boden, 1853",
      type: "moves",
      fen: "r1bqk2r/pppp1ppp/2n2n2/4p3/1bB1P3/2NP1N2/PP3PPP/R1BQK2R b KQkq - 0 0",
      moves: [
        "O-O",
        "O-O",
        "d5",
        "exd5",
        "Nxd5",
        "Nxd5",
        "Qxd5",
        "Qc2",
        "Bg4",
        "Qe4",
        "Bxf3",
        "Qxd5",
        "Bxd5",
        "Rg1",
        "Rad8",
        "Bd2",
        "Bxc3",
        "Bxc3",
        "Bxa2#",
      ],
      moveDescriptions: [
        "Black castles",
        "White castles",
        "Striking in the center",
        "Accepting the challenge",
        "Knight recaptures",
        "Trading knights",
        "Queen recaptures — Black is active",
        "Developing with a tempo on b4",
        "Pinning the knight",
        "White tries to be aggressive",
        "Eliminating the defender",
        "Trading queens",
        "Black recaptures with the bishop pair",
        "Rook moves to the g-file",
        "Black occupies the open file",
        "Developing the bishop",
        "Capturing the knight, winning a pawn",
        "Recapturing — but White misses the threat",
        "Boden's Mate! The bishop delivers checkmate on a2, with the other bishop on c3 covering all escape squares.",
      ],
      content: `This is the original game that gave Boden's Mate its name. Samuel Boden (Black) delivered the crisscross bishop mate against Schulder (White) in 1853. The final position features the Black bishop on a2 giving check, supported by the bishop on c3 covering the b2, d2, and e1 squares.

Notice how White's queenside castled position was breached: the a2 pawn had advanced, and the b2 pawn was undefended after the bishop exchange on c3. These small weaknesses combined to create the conditions for Boden's Mate.`,
    },
  ],
};
