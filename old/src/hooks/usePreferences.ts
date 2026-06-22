"use client";

import { useCallback, useState } from "react";
import type { BoardThemeId, PieceThemeId } from "@/lib/board-themes";

export interface Preferences {
  defaultDepth: number;
  playSpeedMs: number;
  boardTheme: BoardThemeId;
  pieceTheme: PieceThemeId;
}

const STORAGE_KEY = "chess-analyze-preferences";

const DEFAULT_PREFERENCES: Preferences = {
  defaultDepth: 16,
  playSpeedMs: 800,
  boardTheme: "green",
  pieceTheme: "default",
};

function loadPreferences(): Preferences {
  if (typeof window === "undefined") return DEFAULT_PREFERENCES;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...DEFAULT_PREFERENCES, ...JSON.parse(raw) };
  } catch {
    // use defaults
  }
  return DEFAULT_PREFERENCES;
}

export function usePreferences() {
  const [preferences, setPreferences] = useState<Preferences>(loadPreferences);

  const updatePreferences = useCallback((patch: Partial<Preferences>) => {
    setPreferences((prev) => {
      const next = { ...prev, ...patch };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  return { preferences, updatePreferences };
}
