"use client";

import { useCallback, useRef, useState } from "react";
import { getEngine } from "@/engine/StockfishEngine";
import { buildGameReport, loadAnalysisFromCache, saveAnalysisToCache } from "@/engine/accuracy";
import type { AnalysisState, EngineEval, MoveAnalysis, ParsedGame } from "@/lib/types";

const initialState: AnalysisState = {
  moves: [],
  report: null,
  progress: 0,
  isAnalyzing: false,
  isComplete: false,
  currentDepth: 18,
  estimatedSecondsRemaining: null,
  liveEngineLines: [],
  liveDepth: 0,
};

function formatEta(seconds: number): string {
  if (seconds < 60) return `~${Math.round(seconds)}s remaining`;
  const mins = Math.floor(seconds / 60);
  const secs = Math.round(seconds % 60);
  return `~${mins}m ${secs}s remaining`;
}

export function useAnalysis() {
  const [state, setState] = useState<AnalysisState>(initialState);
  const abortRef = useRef<AbortController | null>(null);

  const loadCached = useCallback(async (game: ParsedGame) => {
    const cached = await loadAnalysisFromCache(game.pgn);
    if (cached) {
      setState({
        moves: cached.moves,
        report: cached.report,
        progress: 1,
        isAnalyzing: false,
        isComplete: true,
        currentDepth: 18,
        estimatedSecondsRemaining: null,
        liveEngineLines: [],
        liveDepth: 0,
      });
      return true;
    }
    return false;
  }, []);

  const analyze = useCallback(async (game: ParsedGame, depth = 18) => {
    if (await loadCached(game)) return;

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setState({
      moves: [],
      report: null,
      progress: 0,
      isAnalyzing: true,
      isComplete: false,
      currentDepth: depth,
      estimatedSecondsRemaining: null,
      liveEngineLines: [],
      liveDepth: 0,
    });

    const engine = getEngine();
    engine.stop();
    await engine.init();

    const analyzedMoves: MoveAnalysis[] = [];
    const totalMoves = game.moves.length;
    const startedAt = Date.now();

    try {
      for await (const result of engine.analyzeFullGame(
        game.moves,
        depth,
        game.startingFen,
        controller.signal,
        (evals: EngineEval[]) => {
          setState((prev) => ({
            ...prev,
            liveEngineLines: evals,
            liveDepth: Math.max(...evals.map((e) => e.depth)),
          }));
        },
      )) {
        if (controller.signal.aborted) break;

        analyzedMoves.push(result.move);

        let eta: number | null = null;
        if (analyzedMoves.length >= 2) {
          const elapsed = (Date.now() - startedAt) / 1000;
          const avgPerMove = elapsed / analyzedMoves.length;
          eta = avgPerMove * (totalMoves - analyzedMoves.length);
        }

        setState((prev) => ({
          ...prev,
          moves: [...analyzedMoves],
          progress: result.progress,
          estimatedSecondsRemaining: eta,
          liveEngineLines: result.move.engineLines,
          liveDepth: depth,
        }));
      }

      if (!controller.signal.aborted && analyzedMoves.length > 0) {
        const report = buildGameReport(
          analyzedMoves,
          game.headers.white,
          game.headers.black,
          game.headers.whiteElo,
          game.headers.blackElo,
          game.headers.result,
        );

        await saveAnalysisToCache(game.pgn, analyzedMoves, report);

        setState({
          moves: analyzedMoves,
          report,
          progress: 1,
          isAnalyzing: false,
          isComplete: true,
          currentDepth: depth,
          estimatedSecondsRemaining: null,
          liveEngineLines: [],
          liveDepth: 0,
        });
      }
    } catch (err) {
      if (!controller.signal.aborted) {
        console.error(err);
        setState((prev) => ({
          ...prev,
          isAnalyzing: false,
          estimatedSecondsRemaining: null,
          progress: analyzedMoves.length > 0 ? analyzedMoves.length / totalMoves : prev.progress,
        }));
      }
    }
  }, [loadCached]);

  const stop = useCallback(() => {
    abortRef.current?.abort();
    getEngine().stop();
    setState((prev) => ({ ...prev, isAnalyzing: false, estimatedSecondsRemaining: null }));
  }, []);

  const reset = useCallback(() => {
    abortRef.current?.abort();
    setState(initialState);
  }, []);

  return { ...state, analyze, stop, reset, loadCached, formatEta };
}
