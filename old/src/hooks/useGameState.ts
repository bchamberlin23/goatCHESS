"use client";

import { useCallback, useMemo, useState } from "react";
import { Chess } from "chess.js";
import type { MoveAnalysis, ParsedGame } from "@/lib/types";
import { getFenAtPly } from "@/lib/chess-utils";
import { detectOpening } from "@/lib/openings";

export function useGameState(game: ParsedGame | null, analysisMoves: MoveAnalysis[] = []) {
  const [currentPly, setCurrentPly] = useState(0);
  const [boardOrientation, setBoardOrientation] = useState<"white" | "black">("white");
  const [explorationMoves, setExplorationMoves] = useState<string[]>([]);

  const moves = useMemo(() => game?.moves ?? [], [game?.moves]);

  const currentFen = useMemo(() => {
    if (!game) return new Chess().fen();

    if (explorationMoves.length > 0) {
      const chess = new Chess(getFenAtPly(moves, currentPly, game.startingFen));
      for (const san of explorationMoves) {
        try {
          chess.move(san);
        } catch {
          break;
        }
      }
      return chess.fen();
    }

    return getFenAtPly(moves, currentPly, game.startingFen);
  }, [game, moves, currentPly, explorationMoves]);

  const currentMoveAnalysis = useMemo(() => {
    if (currentPly === 0 || analysisMoves.length === 0) return null;
    return analysisMoves[currentPly - 1] ?? null;
  }, [currentPly, analysisMoves]);

  const moveSans = useMemo(() => {
    return moves.slice(0, currentPly).map((m) => m.san);
  }, [moves, currentPly]);

  const explorerMoveSans = useMemo(() => {
    return [...moveSans, ...explorationMoves];
  }, [moveSans, explorationMoves]);

  const opening = useMemo(() => detectOpening(moveSans), [moveSans]);

  const lastMove = useMemo(() => {
    if (explorationMoves.length > 0) return null;
    if (currentPly === 0) return null;
    return moves[currentPly - 1];
  }, [moves, currentPly, explorationMoves]);

  const goToPly = useCallback((ply: number) => {
    setExplorationMoves([]);
    setCurrentPly(Math.max(0, Math.min(ply, moves.length)));
  }, [moves.length]);

  const goToStart = useCallback(() => goToPly(0), [goToPly]);
  const goToEnd = useCallback(() => goToPly(moves.length), [goToPly, moves.length]);
  const goBack = useCallback(() => goToPly(currentPly - 1), [goToPly, currentPly]);
  const goForward = useCallback(() => goToPly(currentPly + 1), [goToPly, currentPly]);

  const flipBoard = useCallback(() => {
    setBoardOrientation((o) => (o === "white" ? "black" : "white"));
  }, []);

  const tryMove = useCallback((san: string) => {
    const chess = new Chess(currentFen);
    const move = chess.move(san);
    if (move) {
      setExplorationMoves((prev) => [...prev, san]);
    }
    return !!move;
  }, [currentFen]);

  const playVariation = useCallback((uciMoves: string[]) => {
    if (!game) return;
    const baseFen = getFenAtPly(moves, currentPly, game.startingFen);
    const chess = new Chess(baseFen);
    const sans: string[] = [];
    for (const uci of uciMoves) {
      try {
        const from = uci.slice(0, 2);
        const to = uci.slice(2, 4);
        const promotion = uci.length > 4 ? uci[4] : undefined;
        const move = chess.move({ from, to, promotion });
        if (move) sans.push(move.san);
        else break;
      } catch {
        break;
      }
    }
    if (sans.length > 0) setExplorationMoves(sans);
  }, [game, moves, currentPly]);

  const resetExploration = useCallback(() => {
    setExplorationMoves([]);
  }, []);

  const loadGame = useCallback(() => {
    setCurrentPly(0);
    setExplorationMoves([]);
    setBoardOrientation("white");
  }, []);

  return {
    currentPly,
    currentFen,
    currentMoveAnalysis,
    boardOrientation,
    opening,
    lastMove,
    moveSans,
    explorerMoveSans,
    explorationMoves,
    goToPly,
    goToStart,
    goToEnd,
    goBack,
    goForward,
    flipBoard,
    tryMove,
    playVariation,
    resetExploration,
    loadGame,
  };
}
