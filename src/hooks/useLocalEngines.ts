import { useAtom, useAtomValue } from "jotai";
import { useCallback } from "react";
import {
  DetectedLocalEngine,
  LocalEngineConfig,
  detectedLocalEnginesAtom,
  localEnginesAtom,
  newLocalEngineId,
  validateLocalEngineConfig,
} from "@/lib/engine/localEngineConfig";

export const useLocalEngines = () => {
  const [engines, setEngines] = useAtom(localEnginesAtom);
  const detected = useAtomValue(detectedLocalEnginesAtom);

  const addEngine = useCallback(
    (
      config: Omit<LocalEngineConfig, "id">
    ):
      | { ok: true; engine: LocalEngineConfig }
      | { ok: false; error: string } => {
      const error = validateLocalEngineConfig(config);
      if (error) return { ok: false, error };
      const newEngine: LocalEngineConfig = {
        ...config,
        id: newLocalEngineId(),
      };
      setEngines([...engines, newEngine]);
      return { ok: true, engine: newEngine };
    },
    [engines, setEngines]
  );

  const removeEngine = useCallback(
    (id: string) => {
      setEngines(engines.filter((e) => e.id !== id));
    },
    [engines, setEngines]
  );

  const updateEngine = useCallback(
    (id: string, updates: Partial<Omit<LocalEngineConfig, "id">>) => {
      setEngines(engines.map((e) => (e.id === id ? { ...e, ...updates } : e)));
    },
    [engines, setEngines]
  );

  const getEngine = useCallback(
    (id: string): LocalEngineConfig | undefined =>
      engines.find((e) => e.id === id),
    [engines]
  );

  const getEngineLabel = useCallback(
    (id: string): string => {
      const engine = engines.find((e) => e.id === id);
      return engine?.name ?? "Local engine";
    },
    [engines]
  );

  return {
    engines,
    detectedEngines: detected as DetectedLocalEngine[],
    addEngine,
    removeEngine,
    updateEngine,
    getEngine,
    getEngineLabel,
  };
};
