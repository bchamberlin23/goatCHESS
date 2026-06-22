import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { BRIDGE_HELLO_TIMEOUT_MS, BRIDGE_URL } from "@/lib/engine/bridge";
import {
  detectedLocalEnginesAtom,
  localBridgeAvailableAtom,
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
 * is started after the page (e.g. when the user opens the terminal
 * after the browser tab).
 */
export const useLocalBridgeStatus = () => {
  const setAvailable = useSetAtom(localBridgeAvailableAtom);
  const setDetected = useSetAtom(detectedLocalEnginesAtom);

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
        if (detected) setDetected(detected);
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
  }, [setAvailable, setDetected]);
};
