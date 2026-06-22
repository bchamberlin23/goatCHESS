import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { BRIDGE_HELLO_TIMEOUT_MS, BRIDGE_URL } from "@/lib/engine/bridge";
import {
  detectedLocalEnginesAtom,
  localBridgeAvailableAtom,
  localEnginesAtom,
  newLocalEngineId,
} from "@/lib/engine/localEngineConfig";

interface BridgeHello {
  type: "hello";
  version: number;
  detectedEngines: { name: string; path: string }[];
}

/**
 * Pings the local engine bridge on mount and keeps the
 * `localBridgeAvailableAtom` and `detectedLocalEnginesAtom` in sync.
 *
 * Re-pings every 10s so the UI recovers automatically if the bridge
 * is started after the page.
 *
 * Also auto-registers any detected engines that aren't already in
 * the user's local engines list, so first-time setup is zero-click
 * for engines found on `PATH` (stockfish, lc0, etc).
 */
export const useLocalBridgeStatus = () => {
  const setAvailable = useSetAtom(localBridgeAvailableAtom);
  const setDetected = useSetAtom(detectedLocalEnginesAtom);
  const setEngines = useSetAtom(localEnginesAtom);

  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | null = null;

    const ping = () => {
      if (cancelled) return;
      const ws = new WebSocket(BRIDGE_URL);
      let settled = false;

      const finish = (
        available: boolean,
        detected: { name: string; path: string }[] = []
      ) => {
        if (settled || cancelled) return;
        settled = true;
        setAvailable(available);
        if (available) {
          setDetected(detected);
          setEngines((prev) => {
            const knownPaths = new Set(prev.map((e) => e.path));
            const toAdd = detected
              .filter((d) => !knownPaths.has(d.path))
              .map((d) => ({
                id: newLocalEngineId(),
                name: d.name,
                path: d.path,
              }));
            return toAdd.length > 0 ? [...prev, ...toAdd] : prev;
          });
        }
        try {
          ws.close();
        } catch {
          // ignore
        }
        timer = setTimeout(ping, available ? 10_000 : 5_000);
      };

      const timeout = setTimeout(() => finish(false), BRIDGE_HELLO_TIMEOUT_MS);

      ws.onopen = () => {
        ws.send(JSON.stringify({ type: "hello" }));
      };

      ws.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data) as BridgeHello;
          if (msg.type === "hello") {
            clearTimeout(timeout);
            finish(true, msg.detectedEngines ?? []);
          }
        } catch {
          // ignore
        }
      };

      ws.onerror = () => {
        clearTimeout(timeout);
        finish(false);
      };

      ws.onclose = () => {
        if (!settled) {
          clearTimeout(timeout);
          finish(false);
        }
      };
    };

    ping();

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, [setAvailable, setDetected, setEngines]);
};
