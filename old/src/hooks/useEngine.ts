"use client";

import { useCallback, useRef, useState } from "react";
import { getEngine } from "@/engine/StockfishEngine";
import { resolveEngineVariant } from "@/engine/engine-config";
import type { EngineEval } from "@/lib/types";

export function useEngine() {
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [liveEvals, setLiveEvals] = useState<EngineEval[]>([]);
  const [liveDepth, setLiveDepth] = useState(0);
  const [engineLabel, setEngineLabel] = useState(() => resolveEngineVariant().label);
  const initPromiseRef = useRef<Promise<void> | null>(null);

  const init = useCallback(async () => {
    if (initPromiseRef.current) {
      return initPromiseRef.current;
    }

    initPromiseRef.current = (async () => {
      setIsLoading(true);
      setError(null);
      try {
        await getEngine().init();
        setEngineLabel(getEngine().getVariant().label);
        setIsReady(true);
      } catch (err) {
        initPromiseRef.current = null;
        setError(err instanceof Error ? err.message : "Failed to load engine");
        throw err;
      } finally {
        setIsLoading(false);
      }
    })();

    return initPromiseRef.current;
  }, []);

  const evaluate = useCallback(async (fen: string, depth: number) => {
    await init();
    return getEngine().evaluate(fen, depth);
  }, [init]);

  const evaluateLive = useCallback(async (fen: string, depth: number) => {
    await init();

    setLiveEvals([]);
    setLiveDepth(0);

    try {
      const evals = await getEngine().evaluate(fen, depth, (partial) => {
        setLiveEvals([...partial]);
        setLiveDepth(Math.max(...partial.map((e) => e.depth)));
      });
      setLiveEvals(evals);
      setLiveDepth(Math.max(...evals.map((e) => e.depth), 0));
      return evals;
    } catch {
      return [];
    }
  }, [init]);

  const stop = useCallback(() => {
    getEngine().stop();
  }, []);

  const retry = useCallback(async () => {
    initPromiseRef.current = null;
    setIsReady(false);
    setError(null);
    await init();
  }, [init]);

  return {
    isReady,
    isLoading,
    error,
    liveEvals,
    liveDepth,
    engineLabel,
    init,
    evaluate,
    evaluateLive,
    stop,
    retry,
  };
}
