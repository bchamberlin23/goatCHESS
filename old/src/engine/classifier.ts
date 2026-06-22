import type { MoveClassification, MoveRecord } from "@/lib/types";
import { isBookMove } from "@/lib/openings";
import { evalToWinProbability, scoreForColor } from "@/lib/win-probability";

export interface ClassificationInput {
  move: MoveRecord;
  fenBefore: string;
  evalBefore: number;
  mateBefore: number | null;
  evalAfter: number;
  mateAfter: number | null;
  bestMoveUci: string;
  bestEvalAfter: number;
  bestMateAfter: number | null;
  moveSansBefore: string[];
  previousClassification?: MoveClassification;
}

export function classifyMove(input: ClassificationInput): MoveClassification {
  const {
    move,
    fenBefore,
    evalBefore,
    mateBefore,
    evalAfter,
    mateAfter,
    bestMoveUci,
    bestEvalAfter,
    moveSansBefore,
    previousClassification,
  } = input;

  const color = move.color;
  const playedUci = move.uci;

  const sideEvalBefore = scoreForColor(evalBefore, color);
  const sideEvalAfter = scoreForColor(evalAfter, color);
  const sideBestAfter = scoreForColor(bestEvalAfter, color);

  const cpLoss = Math.max(0, sideBestAfter - sideEvalAfter);
  const isBestMove = playedUci === bestMoveUci || cpLoss <= 5;

  const wpBefore = evalToWinProbability(evalBefore, mateBefore, color);
  const wpAfter = evalToWinProbability(evalAfter, mateAfter, color);
  const epLoss = Math.max(0, wpBefore - wpAfter);

  const allMoves = [...moveSansBefore, move.san];
  if (isBookMove(allMoves) && epLoss <= 0.05) {
    return "book";
  }

  if (
    previousClassification &&
    ["inaccuracy", "mistake", "blunder"].includes(previousClassification) &&
    epLoss > 0.05 &&
    !isBestMove
  ) {
    return "miss";
  }

  if (
    isBrilliant({
      fenBefore,
      move,
      sideEvalBefore,
      sideEvalAfter,
      sideBestAfter,
      bestMoveUci,
      playedUci,
      epLoss,
    })
  ) {
    return "brilliant";
  }

  if (isGreat(sideEvalBefore, sideEvalAfter, isBestMove, epLoss, cpLoss)) {
    return "great";
  }

  if (isBestMove || epLoss === 0) return "best";
  if (epLoss <= 0.02) return "excellent";
  if (epLoss <= 0.05) return "good";
  if (epLoss <= 0.10) return "inaccuracy";
  if (epLoss <= 0.20) return "mistake";
  return "blunder";
}

/**
 * A brilliant move is one the engine did NOT suggest from the pre-move position,
 * but after being forced to recalculate from the new position, the engine discovers
 * the played move is at least as strong as its originally preferred line.
 * Brilliant moves can only be found by humans — the engine cannot label its own
 * top suggestion as brilliant.
 */
function isBrilliant({
  sideEvalBefore,
  sideEvalAfter,
  sideBestAfter,
  bestMoveUci,
  playedUci,
  epLoss,
}: {
  fenBefore: string;
  move: MoveRecord;
  sideEvalBefore: number;
  sideEvalAfter: number;
  sideBestAfter: number;
  bestMoveUci: string;
  playedUci: string;
  epLoss: number;
}): boolean {
  // Must NOT be the engine's top suggestion before the move was played.
  if (!bestMoveUci || playedUci === bestMoveUci) return false;

  // Already completely winning — no brilliance needed.
  if (sideEvalBefore > 300) return false;

  // Move must still be objectively strong after full recalculation.
  if (epLoss > 0.02) return false;

  // After recalculating from the new position, the played move must prove
  // at least as good as the line the engine originally preferred.
  const RECALC_MARGIN = 10;
  if (sideEvalAfter < sideBestAfter - RECALC_MARGIN) return false;

  // Near-equal alternatives to the engine's first line are often excellent or
  // best, but they are not brilliant unless they transform the position.
  const MIN_BRILLIANT_SWING = 150;
  return sideEvalAfter - sideEvalBefore >= MIN_BRILLIANT_SWING;
}

function isGreat(
  sideEvalBefore: number,
  sideEvalAfter: number,
  isBestMove: boolean,
  epLoss: number,
  cpLoss: number,
): boolean {
  if (!isBestMove || epLoss > 0.02) return false;
  const swing = sideEvalAfter - sideEvalBefore;
  return swing >= 150 || (sideEvalBefore < -100 && sideEvalAfter > 50) || cpLoss <= 10;
}

export function computeCpLoss(
  evalBefore: number,
  evalAfter: number,
  bestEvalAfter: number,
  color: "w" | "b",
): number {
  const sideBest = scoreForColor(bestEvalAfter, color);
  const sideAfter = scoreForColor(evalAfter, color);
  return Math.max(0, sideBest - sideAfter);
}
