import { useAtom, useAtomValue, useSetAtom, atom } from "jotai";
import {
  engineEloAtom,
  gameAtom,
  playerColorAtom,
  isGameInProgressAtom,
  gameDataAtom,
  enginePlaySelectionAtom,
  playViewMoveIndexAtom,
  playBoardFlippedAtom,
  preMoveAtom,
} from "./states";
import { useChessActions } from "@/hooks/useChessActions";
import { useEffect, useMemo, useRef } from "react";
import { useScreenSize } from "@/hooks/useScreenSize";
import { useEngine } from "@/hooks/useEngine";
import { uciMoveParams } from "@/lib/chess";
import Board from "@/components/board";
import BoardSkeleton from "@/components/BoardSkeleton";
import { useGameData } from "@/hooks/useGameData";
import { usePlayersData } from "@/hooks/usePlayersData";
import { sleep } from "@/lib/helpers";
import { Chess } from "chess.js";
import { Color } from "@/types/enums";
import {
  playMoveSound,
  playCaptureSound,
  playCheckSound,
} from "@/sections/puzzles/puzzleSounds";

export default function BoardContainer() {
  const screenSize = useScreenSize();
  const enginePlaySelection = useAtomValue(enginePlaySelectionAtom);
  const engine = useEngine(enginePlaySelection);
  const game = useAtomValue(gameAtom);
  const { white, black } = usePlayersData(gameAtom);
  const playerColor = useAtomValue(playerColorAtom);
  const { playMove } = useChessActions(gameAtom);
  const engineElo = useAtomValue(engineEloAtom);
  const isGameInProgress = useAtomValue(isGameInProgressAtom);
  const viewMoveIdx = useAtomValue(playViewMoveIndexAtom);
  const setGameData = useSetAtom(gameDataAtom);
  const [boardFlipped, setBoardFlipped] = useAtom(playBoardFlippedAtom);
  const setPreMove = useSetAtom(preMoveAtom);

  const isGameFinished = game.isGameOver();
  const isViewingHistory = viewMoveIdx !== null;
  const isPlayerTurn = game.turn() === playerColor;

  // Compute effective board orientation
  const effectiveOrientation = useMemo(() => {
    if (boardFlipped) {
      return playerColor === Color.White ? Color.Black : Color.White;
    }
    return playerColor;
  }, [playerColor, boardFlipped]);

  // Keyboard shortcut: F to flip board
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      if (e.key === "f" || e.key === "F") {
        setBoardFlipped((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setBoardFlipped]);

  // Writable derived atom that displays the historical board state if viewing history,
  // or the current board state otherwise.
  const playBoardAtom = useMemo(() => {
    return atom(
      (get) => {
        const gameVal = get(gameAtom);
        const viewIdxVal = get(playViewMoveIndexAtom);
        if (viewIdxVal === null) return gameVal;

        const history = gameVal.history({ verbose: true });
        const initialFen =
          history.length > 0 ? history[0].before : gameVal.fen();
        const tempGame = new Chess(initialFen);

        // Copy headers
        const headers = gameVal.getHeaders();
        for (const [key, val] of Object.entries(headers)) {
          if (val !== undefined) tempGame.setHeader(key, val);
        }

        // Apply moves up to viewIdxVal
        for (let i = 0; i < viewIdxVal; i++) {
          if (history[i]) {
            tempGame.move({
              from: history[i].from,
              to: history[i].to,
              promotion: history[i].promotion,
            });
          }
        }
        return tempGame;
      },
      (_, set, update: Chess | ((prev: Chess) => Chess)) => {
        set(gameAtom, update);
      }
    );
  }, []);

  const gameFen = game.fen();

  // Play sounds when a move is made
  const prevHistoryLenRef = useRef(game.history().length);
  useEffect(() => {
    const history = game.history({ verbose: true });
    const prevLen = prevHistoryLenRef.current;
    if (history.length > prevLen && history.length > 0) {
      const lastMove = history[history.length - 1];
      // Check for captures
      if (lastMove.captured) {
        playCaptureSound();
      } else if (game.isCheck()) {
        playCheckSound();
      } else {
        playMoveSound();
      }
    }
    prevHistoryLenRef.current = history.length;
  }, [gameFen]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const playEngineMove = async () => {
      if (
        !engine?.getIsReady() ||
        game.turn() === playerColor ||
        isGameFinished ||
        !isGameInProgress
      ) {
        return;
      }

      const timePromise = sleep(1000);
      const move = await engine.getEngineNextMove(gameFen, engineElo);
      await timePromise;

      if (move) {
        const result = playMove(uciMoveParams(move));
        if (result) {
          setGameData({ lastMove: result });

          // Auto-play pre-move if one was queued
          setPreMove((currentPreMove) => {
            if (!currentPreMove) return null;
            // Check if the pre-move is still legal
            try {
              const preResult = playMove(currentPreMove);
              if (preResult) {
                setGameData({ lastMove: preResult });
              }
            } catch {
              // Pre-move became illegal, just clear it
            }
            return null;
          });
        }
      }
    };
    playEngineMove();

    return () => {
      engine?.stopAllCurrentJobs();
    };
  }, [gameFen, isGameInProgress]); // eslint-disable-line react-hooks/exhaustive-deps

  const boardSize = useMemo(() => {
    const width = screenSize.width;
    const height = screenSize.height;

    // 900 is the md layout breakpoint
    if (window?.innerWidth < 900) {
      return Math.min(width, height - 150);
    }

    return Math.min(width - 300, height * 0.83);
  }, [screenSize]);

  // Read board position from playBoardAtom so history navigation works
  useGameData(playBoardAtom, gameDataAtom);

  if (!engine) {
    return <BoardSkeleton height={boardSize} />;
  }

  return (
    <Board
      id="PlayBoard"
      canPlay={isViewingHistory ? false : isGameInProgress ? true : false}
      gameAtom={playBoardAtom}
      boardSize={boardSize}
      whitePlayer={white}
      blackPlayer={black}
      boardOrientation={effectiveOrientation}
      currentPositionAtom={gameDataAtom}
      onPreMove={(from, to) => {
        if (!isPlayerTurn) {
          setPreMove({ from, to, promotion: "q" });
        }
      }}
    />
  );
}
