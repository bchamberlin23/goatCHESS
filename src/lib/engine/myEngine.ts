import { LocalEngineConfig } from "./localEngineConfig";

/**
 * Default folder name the user keeps their personal engine in on the Desktop.
 * This is intentionally simple: when they compile their engine, they can drop
 * the UCI binary here and ChessAnalyze will pick it up with one click.
 */
export const MY_ENGINE_FOLDER_NAME = "my chess engine";

export const MY_ENGINE_DEFAULT_NAME = "My Engine";

/**
 * Common UCI binary names to look for inside the user's engine folder.
 */
export const MY_ENGINE_BINARY_CANDIDATES = [
  "engine",
  "my_chess_engine",
  "chess_engine",
  "my_engine",
  "main",
  "a.out",
  "chess",
];

/**
 * Best-effort path to the user's Desktop engine folder.
 * In a browser we return a `~`-prefixed path the user can edit; in a
 * desktop wrapper (Electron/Tauri) where `process.env` is exposed we try
 * to expand the home directory.
 */
export const getMyEngineFolderPath = (): string => {
  const home = getHomeDirectory();
  if (!home) {
    return `~/Desktop/${MY_ENGINE_FOLDER_NAME}`;
  }

  return `${home}/Desktop/${MY_ENGINE_FOLDER_NAME}`;
};

/**
 * Returns a preset config the caller can save as a local engine.
 * The path points to the first likely binary name inside the desktop folder.
 */
export const getMyEnginePreset = (): Omit<LocalEngineConfig, "id"> => {
  const folder = getMyEngineFolderPath();
  const ext = getPlatform() === "win32" ? ".exe" : "";
  const path = `${folder}/${MY_ENGINE_BINARY_CANDIDATES[0]}${ext}`;
  return {
    name: MY_ENGINE_DEFAULT_NAME,
    path,
  };
};

type Platform = "win32" | "darwin" | "linux" | "unknown";

const getPlatform = (): Platform => {
  if (typeof window === "undefined") return "unknown";
  if (window.navigator.userAgent.indexOf("Win") !== -1) return "win32";
  if (window.navigator.userAgent.indexOf("Mac") !== -1) return "darwin";
  if (window.navigator.userAgent.indexOf("Linux") !== -1) return "linux";
  return "unknown";
};

const getHomeDirectory = (): string | null => {
  if (typeof window === "undefined") return null;

  // Modern browsers do not expose the home directory. We try a few common
  // Electron/Tauri-style globals and fall back to a placeholder the user can
  // edit themselves.
  const proc = (globalThis as Record<string, unknown>).process as
    | { env: Record<string, string>; platform?: string }
    | undefined;

  if (!proc) return null;

  return proc.env.HOME ?? proc.env.USERPROFILE ?? proc.env.HOMEPATH ?? null;
};
