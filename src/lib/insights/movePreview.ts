import { Chess } from "chess.js";
import { Arrow } from "react-chessboard/dist/chessboard/types";

interface MovePreviewPositionParams {
  fen: string;
  moveSan: string;
}

export interface MovePreviewPosition {
  beforeFen: string;
  afterFen: string;
  arrow?: Arrow;
}

export const getMovePreviewPosition = ({
  fen,
  moveSan,
}: MovePreviewPositionParams): MovePreviewPosition => {
  try {
    const chess = new Chess(fen);
    const move = chess.move(moveSan);
    if (!move) {
      return { beforeFen: fen, afterFen: fen };
    }

    return {
      beforeFen: fen === new Chess().fen() ? "start" : fen,
      afterFen: chess.fen(),
      arrow: [move.from, move.to],
    };
  } catch {
    return { beforeFen: fen, afterFen: fen };
  }
};
