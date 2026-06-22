import { isWasmSupported } from "@/lib/engine/shared";
import { Stockfish11 } from "@/lib/engine/stockfish11";
import { Stockfish16 } from "@/lib/engine/stockfish16";
import { Stockfish16_1 } from "@/lib/engine/stockfish16_1";
import { Stockfish17 } from "@/lib/engine/stockfish17";
import { Stockfish17_1 } from "@/lib/engine/stockfish17_1";
import { Stockfish18 } from "@/lib/engine/stockfish18";
import { LocalEngine } from "@/lib/engine/localEngine";
import { localEnginesAtom } from "@/lib/engine/localEngineConfig";
import { Engine } from "@/lib/engine/engine";
import { EngineSelection } from "@/lib/engine/selection";
import { EngineName } from "@/types/enums";
import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";

export const useEngine = (
  selection: EngineSelection | undefined
): Engine | null => {
  const [engine, setEngine] = useState<Engine | null>(null);
  const localEngines = useAtomValue(localEnginesAtom);

  useEffect(() => {
    let isMounted = true;
    if (!selection) return;

    const key =
      selection.kind === "browser" ? selection.name : `local:${selection.id}`;

    pickEngine(selection, localEngines)
      .then((newEngine) => {
        if (!isMounted) {
          newEngine.shutdown();
          return;
        }
        setEngine((prev) => {
          prev?.shutdown();
          return newEngine;
        });
      })
      .catch((err) => {
        if (!isMounted) return;
        console.error(`Failed to load engine ${key}:`, err);
        setEngine((prev) => {
          prev?.shutdown();
          return null;
        });
      });

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selection, localEngines]);

  return engine;
};

const pickEngine = (
  selection: EngineSelection,
  localEngines: import("@/lib/engine/localEngineConfig").LocalEngineConfig[]
): Promise<Engine> => {
  if (selection.kind === "local") {
    const config = localEngines.find((e) => e.id === selection.id);
    if (!config) {
      return Promise.reject(
        new Error(`Local engine ${selection.id} not found`)
      );
    }
    return LocalEngine.create(config);
  }

  if (selection.name !== EngineName.Stockfish11 && !isWasmSupported()) {
    return Promise.reject(new Error("WASM not supported on this device"));
  }

  switch (selection.name) {
    case EngineName.Stockfish18:
      return Stockfish18.create(false);
    case EngineName.Stockfish18Lite:
      return Stockfish18.create(true);
    case EngineName.Stockfish17_1:
      return Stockfish17_1.create(false);
    case EngineName.Stockfish17_1Lite:
      return Stockfish17_1.create(true);
    case EngineName.Stockfish17:
      return Stockfish17.create(false);
    case EngineName.Stockfish17Lite:
      return Stockfish17.create(true);
    case EngineName.Stockfish16_1:
      return Stockfish16_1.create(false);
    case EngineName.Stockfish16_1Lite:
      return Stockfish16_1.create(true);
    case EngineName.Stockfish16:
      return Stockfish16.create(true);
    case EngineName.Stockfish16NNUE:
      return Stockfish16.create(false);
    case EngineName.Stockfish11:
      return Stockfish11.create();
  }
};
