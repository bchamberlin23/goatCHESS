import { useAtomValue, useSetAtom } from "jotai";
import { useEffect, useRef } from "react";
import { useEngine } from "@/hooks/useEngine";
import { useChessActions } from "@/hooks/useChessActions";
import { uciMoveParams } from "@/lib/chess";
import { sleep } from "@/lib/helpers";
import {
  botGameAtom,
  botGameDataAtom,
  botIsRunningAtom,
  botIsPausedAtom,
  botMoveDelayAtom,
  botViewMoveIndexAtom,
  whiteEngineSelectionAtom,
  blackEngineSelectionAtom,
  whiteEngineEloAtom,
  blackEngineEloAtom,
} from "./states";

export const useBotMatch = () => {
  const game = useAtomValue(botGameAtom);
  const isRunning = useAtomValue(botIsRunningAtom);
  const isPaused = useAtomValue(botIsPausedAtom);
  const moveDelay = useAtomValue(botMoveDelayAtom);
  const viewMoveIdx = useAtomValue(botViewMoveIndexAtom);
  const whiteSelection = useAtomValue(whiteEngineSelectionAtom);
  const blackSelection = useAtomValue(blackEngineSelectionAtom);
  const whiteElo = useAtomValue(whiteEngineEloAtom);
  const blackElo = useAtomValue(blackEngineEloAtom);

  const whiteEngine = useEngine(whiteSelection);
  const blackEngine = useEngine(blackSelection);

  const { playMove } = useChessActions(botGameAtom);
  const setGameData = useSetAtom(botGameDataAtom);

  const gameFen = game.fen();
  const delayRef = useRef(moveDelay);
  delayRef.current = moveDelay;

  useEffect(() => {
    if (
      !isRunning ||
      isPaused ||
      viewMoveIdx !== null ||
      game.isGameOver() ||
      !whiteEngine?.getIsReady() ||
      !blackEngine?.getIsReady()
    ) {
      return;
    }

    const isWhiteTurn = game.turn() === "w";
    const engine = isWhiteTurn ? whiteEngine : blackEngine;
    const elo = isWhiteTurn ? whiteElo : blackElo;

    let cancelled = false;

    const tick = async () => {
      await sleep(delayRef.current);
      if (cancelled) return;

      const move = await engine.getEngineNextMove(gameFen, elo);
      if (cancelled) return;

      if (move) {
        const result = playMove(uciMoveParams(move));
        if (result) {
          setGameData({ lastMove: result });
        }
      }
    };

    tick();

    return () => {
      cancelled = true;
      engine.stopAllCurrentJobs();
    };
  }, [
    gameFen,
    isRunning,
    isPaused,
    viewMoveIdx,
    whiteEngine,
    blackEngine,
    whiteElo,
    blackElo,
    game,
    playMove,
    setGameData,
  ]);

  return {
    whiteEngineReady: whiteEngine?.getIsReady() ?? false,
    blackEngineReady: blackEngine?.getIsReady() ?? false,
  };
};
