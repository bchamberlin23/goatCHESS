import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

/**
 * Configuration for a user-installed local chess engine binary.
 * Stored in localStorage so the user can switch between engines they
 * have on their machine (e.g. system stockfish, lc0 with a net, or
 * their own engine they're developing).
 */
export interface LocalEngineConfig {
  id: string;
  name: string;
  path: string;
  options?: Record<string, string>;
}

export interface DetectedLocalEngine {
  name: string;
  path: string;
}

const STORAGE_KEY = "chesskit-local-engines";

const loadFromStorage = (): LocalEngineConfig[] => {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (e): e is LocalEngineConfig =>
        typeof e === "object" &&
        e !== null &&
        typeof e.id === "string" &&
        typeof e.name === "string" &&
        typeof e.path === "string"
    );
  } catch {
    return [];
  }
};

export const localEnginesAtom = atomWithStorage<LocalEngineConfig[]>(
  STORAGE_KEY,
  []
);

export const detectedLocalEnginesAtom = atom<DetectedLocalEngine[]>([]);

export const localBridgeAvailableAtom = atom<boolean>(false);

export const newLocalEngineId = (): string => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `local-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
};

export const validateLocalEngineConfig = (
  config: Partial<LocalEngineConfig>
): string | null => {
  if (!config.name || config.name.trim().length === 0) {
    return "Name is required";
  }
  if (!config.path || config.path.trim().length === 0) {
    return "Path is required";
  }
  return null;
};

export { loadFromStorage };
