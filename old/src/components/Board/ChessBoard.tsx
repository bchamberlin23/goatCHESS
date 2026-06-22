"use client";

import { useMemo } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import type { Arrow } from "react-chessboard";
import type { MoveAnalysis, MoveRecord } from "@/lib/types";
import { CLASSIFICATION_COLORS } from "@/lib/types";
import { getBoardTheme, type BoardThemeId, type PieceThemeId } from "@/lib/board-themes";
import { getPieceTheme } from "@/lib/piece-themes";
import { EvalBar } from "./EvalBar";

interface ChessBoardProps {
  fen: string;
  orientation: "white" | "black";
  lastMove?: MoveRecord | null;
  moveAnalysis?: MoveAnalysis | null;
  bestMoveArrow?: boolean;
  onMove?: (san: string) => boolean;
  evalScore?: number;
  evalMate?: number | null;
  boardTheme?: BoardThemeId;
  pieceTheme?: PieceThemeId;
}

export function ChessBoardPanel({
  fen,
  orientation,
  lastMove,
  moveAnalysis,
  bestMoveArrow = true,
  onMove,
  evalScore = 0,
  evalMate = null,
  boardTheme = "green",
  pieceTheme = "default",
}: ChessBoardProps) {
  const theme = getBoardTheme(boardTheme);
  const pieces = getPieceTheme(pieceTheme);
  const arrows = useMemo(() => {
    const result: Arrow[] = [];

    if (bestMoveArrow && moveAnalysis?.bestMove && moveAnalysis.bestMove !== moveAnalysis.uci) {
      result.push({
        startSquare: moveAnalysis.bestMove.slice(0, 2),
        endSquare: moveAnalysis.bestMove.slice(2, 4),
        color: "rgba(129, 182, 76, 0.8)",
      });
      result.push({
        startSquare: moveAnalysis.from,
        endSquare: moveAnalysis.to,
        color: "rgba(202, 52, 49, 0.75)",
      });
    }

    if (lastMove) {
      result.push({
        startSquare: lastMove.from,
        endSquare: lastMove.to,
        color: "rgba(255, 255, 0, 0.5)",
      });
    }

    return result;
  }, [bestMoveArrow, moveAnalysis, lastMove]);

  const squareStyles = useMemo(() => {
    const styles: Record<string, React.CSSProperties> = {};

    if (lastMove) {
      styles[lastMove.from] = { backgroundColor: "rgba(255, 255, 100, 0.4)" };
      styles[lastMove.to] = { backgroundColor: "rgba(255, 255, 100, 0.4)" };
    }

    if (moveAnalysis) {
      const color = CLASSIFICATION_COLORS[moveAnalysis.classification];
      styles[moveAnalysis.to] = {
        boxShadow: `inset 0 0 0 3px ${color}`,
      };
    }

    return styles;
  }, [lastMove, moveAnalysis]);

  return (
    <div className="flex gap-2 items-stretch">
      <EvalBar score={evalScore} mate={evalMate} orientation={orientation} className="self-stretch min-h-[320px]" />
      <div className="w-full max-w-[480px] aspect-square">
        <Chessboard
          options={{
            position: fen,
            boardOrientation: orientation,
            pieces,
            allowDragging: !!onMove,
            allowDrawingArrows: true,
            arrows,
            squareStyles,
            darkSquareStyle: { backgroundColor: theme.darkSquare },
            lightSquareStyle: { backgroundColor: theme.lightSquare },
            animationDurationInMs: 200,
            onPieceDrop: ({ sourceSquare, targetSquare }) => {
              if (!onMove || !targetSquare) return false;
              const san = inferSan(fen, sourceSquare, targetSquare);
              return san ? onMove(san) : false;
            },
          }}
        />
      </div>
    </div>
  );
}

function inferSan(fen: string, from: string, to: string): string | null {
  try {
    const chess = new Chess(fen);
    const move = chess.move({ from, to, promotion: "q" });
    return move?.san ?? null;
  } catch {
    return null;
  }
}
