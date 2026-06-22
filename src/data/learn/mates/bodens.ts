import { LearnTopic } from "../types";

export const bodensMate: LearnTopic = {
  slug: "bodens-mate",
  title: "Boden's Mate",
  category: "mates",
  description:
    "A spectacular checkmate delivered by two bishops on crisscrossing diagonals after the opponent castles queenside. Walk through the original 1853 game and learn the crisscross pattern.",
  difficulty: "intermediate",
  estimatedMinutes: 10,
  icon: "mdi:crosshairs",
  tags: ["boden", "bishops", "crisscross", "queenside castle", "diagonal"],
  sections: [
    {
      title: "What Is Boden's Mate?",
      type: "text",
      content: `Boden's Mate is a checkmate pattern where two bishops (or a bishop and queen) deliver mate on crisscrossing diagonals. It typically occurs when the opponent has castled queenside, and the a2 (or a7) pawn has moved, exposing the king on c1 (c8).

The mate is named after Samuel Boden, an English chess master who executed it in an 1853 game. The pattern is one of the most beautiful in chess because of the way the two bishops work together to seal off the king's escape squares.

The pattern requires:
1. The opponent's king to be on c1 (White) or c8 (Black), usually after queenside castling
2. The a-pawn or b-pawn to have moved, creating a weakness on the diagonal
3. Two bishops or a bishop and queen on crisscrossing diagonals`,
    },
    {
      title: "The Classic Pattern",
      type: "position",
      interactionMode: "freeplay",
      fen: "2kr1b1r/pppb1ppp/2n1p3/4P3/3N2Q1/1q6/P1P2PPP/R3KBR1 w - - 0 1",
      content: `The classic Boden's Mate pattern: the king is on c1 (or c8), a bishop on a3 (a6) controls the diagonal going to c1, and another bishop or queen on f4 (f5) controls the other diagonal. If the king is on c1 and the bishops are on a3 and f4, the king is checkmated — both diagonals cut off all escape squares.

In this example position, the Black king is on c8 (after queenside castling), and the White pieces are set up for the Boden's Mate pattern. The a3 bishop controls the long diagonal, and the f4 queen (or bishop) controls the other diagonal. The king has no escape.`,
    },
    {
      title: "Step-by-Step: The Original Boden Game, 1853",
      type: "position",
      interactionMode: "freeplay",
      fen: "r1bqk2r/pppp1ppp/2n2n2/4p3/1bB1P3/2NP1N2/PP3PPP/R1BQK2R b KQkq - 0 1",
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
        "Black castles queenside, putting the king on c8. This is the key precondition for Boden's Mate — the king on c8 is vulnerable to crisscross bishop attacks.",
        "White castles kingside. Both sides have completed basic development.",
        "Black plays d5, striking in the center. This is the start of the tactical sequence.",
        "White accepts the challenge, capturing the pawn. The position is now open and tactical.",
        "Black recaptures with the knight, centralizing. The knight on d5 is well-placed.",
        "White trades knights, eliminating the central piece. The position is now simplified.",
        "Black plays Qxd5, winning a pawn and centralizing the queen. The position is now sharp.",
        "White plays Qc2, developing the queen with tempo on the b4 bishop. The position is now sharp.",
        "Black plays Bg4, pinning the knight. The position is now sharp.",
        "White plays Qe4, attacking the bishop and the e6 pawn. The position is now sharp.",
        "Black plays Bxf3, winning a piece. The bishop captures the knight.",
        "White plays Qxd5, attacking the bishop. The position is now sharp.",
        "Black trades bishops, recapturing. The position is now simplified.",
        "White plays Rg1, putting the rook on the g-file. The position is now ready for the attack.",
        "Black plays Rad8, defending the d-file. The position is balanced.",
        "White plays Bd2, developing the bishop. The position is balanced.",
        "Black plays Bxc3, winning a pawn. The bishop captures the knight.",
        "White recaptures with the bishop, the only move. The position is now sharp.",
        "Bxa2#! BODEN'S MATE! The bishop on a2 delivers checkmate. The other bishop on c3 covers the b2, d2, and e1 squares. The king on c1 has no escape — both diagonals are sealed by the crisscross bishops.",
      ],
      content: `This is the original game that gave Boden's Mate its name. Samuel Boden (Black) delivered the crisscross bishop mate against Schulder (White) in 1853. The final position features the Black bishop on a2 giving check, supported by the bishop on c3 covering the b2, d2, and e1 squares.

Notice how White's queenside castled position was breached: the a2 pawn had advanced, and the b2 pawn was undefended after the bishop exchange on c3. These small weaknesses combined to create the conditions for Boden's Mate.

The key tactical ideas:
1. Black trades pieces to reach a position with two bishops vs. bishop+knight
2. The a2 advance (or any weakening of the queenside dark squares) creates the target
3. The crisscross bishops on a2 and c3 (or a3 and f4) deliver the final blow

The lesson: Boden's Mate rewards patient piece play. The defender must be vigilant about pawn advances on the queenside when castled there.`,
    },
    {
      title: "The Key Conditions",
      type: "key-idea",
      content: `Boden's Mate requires several specific conditions:

1. Queenside Castling: The king must be on c1 (White) or c8 (Black). Kingside castling positions are immune to this pattern.

2. Weakened Queenside: The a-pawn or b-pawn must have moved, creating a gap on the diagonal. A pristine queenside pawn structure is immune.

3. Two Bishops: The attacker needs two bishops (or a bishop and queen) on crisscrossing diagonals. A single bishop cannot deliver Boden's Mate.

4. King Cannot Escape: The diagonals must be sealed so the king has no flight squares. Often this requires the attacker to control key squares with additional pieces.

Common patterns:
- Bishop on a3 (a6) + Bishop/Queen on f4 (f5): The classic crisscross
- Bishop on b2 (b7) + Bishop/Queen on e3 (e6): The alternative crisscross
- Bishop on a2 (a7) + Bishop/Queen on c3 (c6): The compressed crisscross

The defense:
- Don't weaken the queenside pawns when castled there
- Keep the b1 (b8) knight ready to defend the c3 (c6) square
- Trade off one of the opponent's bishops before the pattern can be set up
- Watch for tactical shots that lead to the crisscross setup

The lesson: Boden's Mate is rare in modern chess because strong players avoid the preconditions. But when it occurs, it's one of the most beautiful patterns in the game.`,
    },
  ],
};
