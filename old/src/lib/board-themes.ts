export type BoardThemeId = "green" | "brown" | "blue" | "gray";
export type PieceThemeId = "default" | "neo";

export interface BoardTheme {
  id: BoardThemeId;
  label: string;
  darkSquare: string;
  lightSquare: string;
}

export const BOARD_THEMES: Record<BoardThemeId, BoardTheme> = {
  green: { id: "green", label: "Green", darkSquare: "#779952", lightSquare: "#ebecd0" },
  brown: { id: "brown", label: "Brown", darkSquare: "#b58863", lightSquare: "#f0d9b5" },
  blue: { id: "blue", label: "Blue", darkSquare: "#8ca2ad", lightSquare: "#dee3e6" },
  gray: { id: "gray", label: "Gray", darkSquare: "#888888", lightSquare: "#cccccc" },
};

export function getBoardTheme(id: BoardThemeId): BoardTheme {
  return BOARD_THEMES[id] ?? BOARD_THEMES.green;
}
