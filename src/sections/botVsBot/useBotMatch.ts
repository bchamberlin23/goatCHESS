import { useAtomValue, useSetAtom } from "jotai";
import { useEffect, useRef } from "react";
import { useEngine } from "@/hooks/useEngine";
import { useChessActions } from "@/hooks/useChessActions";
import { setGameHeaders, uciMoveParams } from "@/lib/chess";
import { sleep } from "@/lib/helpers";
import {
  botGameAtom,
  botGameDataAtom,
  botEvalAtom,
  botIsRunningAtom,
  botIsPausedAtom,
  botMoveDelayAtom,
  botViewMoveIndexAtom,
  whiteEngineSelectionAtom,
  blackEngineSelectionAtom,
  whiteEngineEloAtom,
  blackEngineEloAtom,
  botTournamentAtom,
  botTournamentMoveLimitAtom,
} from "./states";
import {
  getNextGamePairing,
  getTournamentResultFromGame,
  recordTournamentGame,
} from "./tournament";
import { Chess } from "chess.js";

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
  const tournament = useAtomValue(botTournamentAtom);
  const moveLimit = useAtomValue(botTournamentMoveLimitAtom);
  const setTournament = useSetAtom(botTournamentAtom);
  const setIsRunning = useSetAtom(botIsRunningAtom);
  const setIsPaused = useSetAtom(botIsPausedAtom);
  const setViewMoveIdx = useSetAtom(botViewMoveIndexAtom);

  const tournamentPairing = tournament
    ? getNextGamePairing(tournament)
    : undefined;
  const activeWhiteSelection =
    tournamentPairing?.white.selection ?? whiteSelection;
  const activeBlackSelection =
    tournamentPairing?.black.selection ?? blackSelection;
  const activeWhiteElo = tournamentPairing?.white.elo ?? whiteElo;
  const activeBlackElo = tournamentPairing?.black.elo ?? blackElo;

  const whiteEngine = useEngine(activeWhiteSelection);
  const blackEngine = useEngine(activeBlackSelection);

  const { playMove, reset } = useChessActions(botGameAtom);
  const setGameData = useSetAtom(botGameDataAtom);
  const setEval = useSetAtom(botEvalAtom);

  const gameFen = game.fen();
  const movesPlayed = game.history().length;
  const delayRef = useRef(moveDelay);
  const recordedTournamentGameRef = useRef<string | null>(null);
  delayRef.current = moveDelay;

  useEffect(() => {
    if (!tournament || !tournamentPairing || !isRunning) return;

    const result =
      getTournamentResultFromGame(game) ??
      (movesPlayed >= moveLimit ? "1/2-1/2" : null);
    if (!result) return;

    const recordKey = `${tournament.id}:${tournamentPairing.match.id}:${tournamentPairing.gameNumber}:${movesPlayed}:${result}`;
    if (recordedTournamentGameRef.current === recordKey) return;
    recordedTournamentGameRef.current = recordKey;

    const gameForPgn = cloneGameWithResult(game, result);
    const updatedTournament = recordTournamentGame(tournament, {
      matchId: tournamentPairing.match.id,
      result,
      pgn: gameForPgn.pgn(),
      moves: movesPlayed,
    });
    const nextPairing = getNextGamePairing(updatedTournament);
    const tournamentComplete = updatedTournament.status === "complete";

    setTournament(updatedTournament);

    if (tournamentComplete || !nextPairing) {
      setIsRunning(false);
      setIsPaused(false);
      return;
    }

    setViewMoveIdx(null);
    setEval(null);
    reset({
      white: { name: nextPairing.white.name, rating: nextPairing.white.elo },
      black: { name: nextPairing.black.name, rating: nextPairing.black.elo },
    });
    setIsPaused(false);
    setIsRunning(true);
  }, [
    game,
    isRunning,
    moveLimit,
    movesPlayed,
    reset,
    setEval,
    setIsPaused,
    setIsRunning,
    setTournament,
    setViewMoveIdx,
    tournament,
    tournamentPairing,
  ]);

  useEffect(() => {
    if (
      !isRunning ||
      isPaused ||
      viewMoveIdx !== null ||
      game.isGameOver() ||
      (tournamentPairing && movesPlayed >= moveLimit) ||
      !whiteEngine?.getIsReady() ||
      !blackEngine?.getIsReady()
    ) {
      return;
    }

    const isWhiteTurn = game.turn() === "w";
    const engine = isWhiteTurn ? whiteEngine : blackEngine;
    const elo = isWhiteTurn ? activeWhiteElo : activeBlackElo;

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
          // Evaluate the new position for live eval display
          try {
            const evalResult = await engine.evaluatePositionWithUpdate({
              fen: game.fen(),
              depth: 12,
              multiPv: 1,
            });
            setEval(evalResult);
          } catch {
            // Eval failed, ignore
          }
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
    activeWhiteElo,
    activeBlackElo,
    moveLimit,
    movesPlayed,
    tournamentPairing,
    game,
    playMove,
    setEval,
    setGameData,
  ]);

  return {
    whiteEngineReady: whiteEngine?.getIsReady() ?? false,
    blackEngineReady: blackEngine?.getIsReady() ?? false,
  };
};

const cloneGameWithResult = (game: Chess, result: string): Chess => {
  const history = game.history({ verbose: true });
  const initialFen = history.length > 0 ? history[0].before : game.fen();
  const clone = new Chess(initialFen);

  for (const [key, value] of Object.entries(game.getHeaders())) {
    if (value !== undefined) clone.setHeader(key, value);
  }

  for (const move of history) {
    clone.move({
      from: move.from,
      to: move.to,
      promotion: move.promotion,
    });
  }

  setGameHeaders(clone);
  clone.setHeader("Result", result);
  if (result === "1/2-1/2" && !clone.getHeaders().Termination) {
    clone.setHeader("Termination", "Draw by tournament adjudication");
  }

  return clone;
};
