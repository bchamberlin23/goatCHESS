export interface PlatformInfo {
  platform: string;
  id: string;
  type: "chesscom" | "lichess";
}

export const getPlatformInfo = (val: string): PlatformInfo | null => {
  const trimmed = val.trim();
  if (!trimmed) return null;

  // Check for Chess.com URL
  if (/chess\.com/i.test(trimmed)) {
    const match =
      trimmed.match(/(?:game\/live\/|game\/daily\/|live#g=|daily#g=)(\d+)/i) ||
      trimmed.match(/\/game\/(\d+)(?:[/?#]|$)/i);
    return {
      platform: "Chess.com",
      id: match ? match[1] : trimmed,
      type: "chesscom",
    };
  }

  // Check for Lichess URL
  if (/lichess\.org/i.test(trimmed)) {
    const match = trimmed.match(/lichess\.org\/([a-zA-Z0-9]{8,12})/i);
    return {
      platform: "Lichess",
      id: match ? match[1] : trimmed,
      type: "lichess",
    };
  }

  // If string of only digits, assume Chess.com game ID
  if (/^\d+$/.test(trimmed)) {
    return {
      platform: "Chess.com ID",
      id: trimmed,
      type: "chesscom",
    };
  }

  // If 8-character alphanumeric, assume Lichess game ID
  if (/^[a-zA-Z0-9]{8}$/.test(trimmed)) {
    return {
      platform: "Lichess ID",
      id: trimmed,
      type: "lichess",
    };
  }

  return null;
};
