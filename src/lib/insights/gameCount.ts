export type GameCountSelection =
  | { mode: "preset"; value: 25 | 50 | 100 }
  | { mode: "custom"; value: number }
  | { mode: "unlimited" };

export const parseCustomGameCount = (value: string): number | null => {
  const parsed = Number(value.trim());
  if (!Number.isInteger(parsed) || parsed <= 0) return null;
  return parsed;
};

export const resolveGameFetchLimit = (
  selection: GameCountSelection
): number | undefined => {
  if (selection.mode === "unlimited") return undefined;
  return selection.value;
};

export const getGameCountLabel = (selection: GameCountSelection): string => {
  if (selection.mode === "unlimited") return "all available games";
  return `${selection.value} games`;
};
