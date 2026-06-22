import { getGameFromPgn, setGameHeaders } from "@/lib/chess";
import { playIllegalMoveSound, playSoundFromMove } from "@/lib/sounds";
import { Player } from "@/types/game";
import { Chess, Move, DEFAULT_POSITION } from "chess.js";
import { PrimitiveAtom, useAtom } from "jotai";
import { useCallback } from "react";

export interface resetGameParams {
  fen?: string;
  white?: Player;
  black?: Player;
  noHeaders?: boolean;
}

export const useChessActions = (chessAtom: PrimitiveAtom<Chess>) => {
  const [game, setGame] = useAtom(chessAtom);

  const setPgn = useCallback(
    (pgn: string) => {
      const newGame = new Chess();
      newGame.loadPgn(pgn);
      setGame(newGame);
    },
    [setGame]
  );

  const reset = useCallback(
    (params?: resetGameParams) => {
      const newGame = new Chess(params?.fen);
      if (!params?.noHeaders) setGameHeaders(newGame, params);
      setGame(newGame);
    },
    [setGame]
  );

  const copyGame = useCallback(() => {
    const history = game.history({ verbose: true });
    const initialFen = history.length > 0 ? history[0].before : game.fen();
    const newGame = new Chess(initialFen);

    const headers = game.getHeaders();
    for (const [key, val] of Object.entries(headers)) {
      if (val !== undefined) newGame.setHeader(key, val);
    }

    for (const move of history) {
      newGame.move({
        from: move.from,
        to: move.to,
        promotion: move.promotion,
      });
    }

    return newGame;
  }, [game]);

  const resetToStartingPosition = useCallback(
    (pgn?: string) => {
      const newGame = pgn ? getGameFromPgn(pgn) : copyGame();
      newGame.load(newGame.getHeaders().FEN || DEFAULT_POSITION, {
        preserveHeaders: true,
      });
      setGame(newGame);
    },
    [copyGame, setGame]
  );

  const playMove = useCallback(
    (params: {
      from: string;
      to: string;
      promotion?: string;
      comment?: string;
    }): Move | null => {
      const newGame = copyGame();

      try {
        const { comment, ...move } = params;
        const result = newGame.move(move);
        if (comment) newGame.setComment(comment);

        setGame(newGame);
        playSoundFromMove(result);
        return result;
      } catch {
        playIllegalMoveSound();
        return null;
      }
    },
    [copyGame, setGame]
  );

  const addMoves = useCallback(
    (moves: string[]) => {
      const newGame = copyGame();

      let lastMove: Move | null = null;
      for (const move of moves) {
        lastMove = newGame.move(move);
      }
      setGame(newGame);
      if (lastMove) playSoundFromMove(lastMove);
    },
    [copyGame, setGame]
  );

  const undoMove = useCallback(() => {
    const newGame = copyGame();
    const move = newGame.undo();
    if (move) playSoundFromMove(move);
    setGame(newGame);
  }, [copyGame, setGame]);

  const goToMove = useCallback(
    (moveIdx: number, fullGame: Chess) => {
      if (moveIdx < 0) return;

      const history = fullGame.history({ verbose: true });
      const initialFen =
        history.length > 0 ? history[0].before : fullGame.fen();
      const newGame = new Chess(initialFen);

      const headers = fullGame.getHeaders();
      for (const [key, val] of Object.entries(headers)) {
        if (val !== undefined) newGame.setHeader(key, val);
      }

      const movesNb = history.length;
      if (moveIdx > movesNb) return;

      let lastMove: Move | null = null;
      for (let i = 0; i < moveIdx; i++) {
        lastMove = newGame.move({
          from: history[i].from,
          to: history[i].to,
          promotion: history[i].promotion,
        });
      }

      setGame(newGame);
      if (lastMove) playSoundFromMove(lastMove);
    },
    [setGame]
  );

  return {
    setPgn,
    reset,
    playMove,
    undoMove,
    goToMove,
    resetToStartingPosition,
    addMoves,
  };
};
