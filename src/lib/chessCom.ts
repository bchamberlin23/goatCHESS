import { ChessComGame } from "@/types/chessCom";
import { getPaddedNumber } from "./helpers";
import { LoadedGame } from "@/types/game";
import { Chess } from "chess.js";

const TCN_ALPHABET =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?{~}(^)[_]@#$,./&-*++=";
const TCN_PROMOTION_PIECES = "qnrbkp";

interface ChessComDecodedMove {
  from?: string;
  to: string;
  promotion?: string;
}

const tcnIndexToSquare = (index: number): string => {
  const file = index % 8;
  const rank = Math.floor(index / 8) + 1;
  const fileChar = TCN_ALPHABET[file];

  if (!fileChar || rank < 1 || rank > 8) return "";

  return `${fileChar}${rank}`;
};

const decodeChessComTcn = (moveList: string): ChessComDecodedMove[] => {
  const moves: ChessComDecodedMove[] = [];

  if (moveList.length % 2 !== 0) {
    throw new Error("Move list has an odd number of encoded characters");
  }

  for (let i = 0; i < moveList.length; i += 2) {
    const code1 = TCN_ALPHABET.indexOf(moveList[i]);
    let code2 = TCN_ALPHABET.indexOf(moveList[i + 1]);
    const move: ChessComDecodedMove = { to: "" };

    if (code1 < 0 || code2 < 0) {
      throw new Error("Move list contains an unknown encoded character");
    }

    if (code2 > 63) {
      const promotionIndex = Math.floor((code2 - 64) / 3);
      move.promotion = TCN_PROMOTION_PIECES[promotionIndex];
      const promotionOffset = ((code2 - 1) % 3) - 1;
      code2 = code1 + (code1 < 16 ? -8 : 8) + promotionOffset;
    }

    if (code1 <= 75) {
      move.from = tcnIndexToSquare(code1);
    }

    move.to = tcnIndexToSquare(code2);

    if (!move.to || (code1 <= 75 && !move.from)) {
      throw new Error("Move list contains an invalid square");
    }

    moves.push(move);
  }

  return moves;
};

export const isPgnInProgress = (pgn: string): boolean =>
  pgn.match(/\[Result\s+"([^"]+)"\]/i)?.[1] === "*";

export const isAllowedChessComCallbackUrl = (url: string): boolean => {
  try {
    const parsed = new URL(url);
    return (
      parsed.protocol === "https:" &&
      parsed.hostname === "www.chess.com" &&
      /^\/callback\/(?:live|daily)\/game\/\d+$/.test(parsed.pathname)
    );
  } catch {
    return false;
  }
};

export class ChessComActiveGameError extends Error {
  players: {
    white?: string;
    black?: string;
  };

  constructor(message: string, players: { white?: string; black?: string }) {
    super(message);
    this.name = "ChessComActiveGameError";
    this.players = players;
  }
}

export const getChessComUserRecentGames = async (
  username: string,
  signal?: AbortSignal
): Promise<LoadedGame[]> => {
  const date = new Date();
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const paddedMonth = getPaddedNumber(month);

  const res = await fetch(
    `https://api.chess.com/pub/player/${username}/games/${year}/${paddedMonth}`,
    { method: "GET", signal }
  );

  const data = await res.json();

  if (
    res.status >= 400 &&
    data.message !== "Date cannot be set in the future"
  ) {
    throw new Error("Error fetching games from Chess.com");
  }

  const games: ChessComGame[] = data?.games ?? [];

  if (games.length < 50) {
    const previousMonth = month === 1 ? 12 : month - 1;
    const previousPaddedMonth = getPaddedNumber(previousMonth);
    const yearToFetch = previousMonth === 12 ? year - 1 : year;

    const resPreviousMonth = await fetch(
      `https://api.chess.com/pub/player/${username}/games/${yearToFetch}/${previousPaddedMonth}`
    );

    const dataPreviousMonth = await resPreviousMonth.json();

    games.push(...(dataPreviousMonth?.games ?? []));
  }

  const gamesToReturn = games
    .filter((game) => game.pgn && game.end_time)
    .sort((a, b) => b.end_time - a.end_time)
    .slice(0, 50)
    .map(formatChessComGame);

  return gamesToReturn;
};

export const getChessComUserAvatar = async (
  username: string
): Promise<string | null> => {
  const usernameParam = encodeURIComponent(username.trim().toLowerCase());

  const res = await fetch(`https://api.chess.com/pub/player/${usernameParam}`);
  const data = await res.json();
  const avatarUrl = data?.avatar;

  return typeof avatarUrl === "string" ? avatarUrl : null;
};

const formatChessComGame = (data: ChessComGame): LoadedGame => {
  const result = data.pgn.match(/\[Result "(.*?)"]/)?.[1];
  const movesNb = data.pgn.match(/\d+?\. /g)?.length;

  return {
    id: data.uuid || data.url?.split("/").pop() || data.id,
    pgn: data.pgn || "",
    white: {
      name: data.white?.username || "White",
      rating: data.white?.rating || 0,
      title: data.white?.title,
    },
    black: {
      name: data.black?.username || "Black",
      rating: data.black?.rating || 0,
      title: data.black?.title,
    },
    result,
    timeControl: getGameTimeControl(data),
    date: data.end_time
      ? new Date(data.end_time * 1000).toLocaleDateString()
      : new Date().toLocaleDateString(),
    movesNb: movesNb ? movesNb * 2 : undefined,
    url: data.url,
  };
};

const getGameTimeControl = (game: ChessComGame): string | undefined => {
  const rawTimeControl = game.time_control;
  if (!rawTimeControl) return undefined;

  const [firstPart, secondPart] = rawTimeControl.split("+");
  if (!firstPart) return undefined;

  const timeControl = Number(firstPart);
  const increment = secondPart ? `+${secondPart}` : "";
  if (timeControl < 60) return `${timeControl}s${increment}`;

  if (timeControl < 3600) {
    const minutes = Math.floor(timeControl / 60);
    const seconds = timeControl % 60;

    return seconds
      ? `${minutes}m${getPaddedNumber(seconds)}s${increment}`
      : `${minutes}m${increment}`;
  }

  const hours = Math.floor(timeControl / 3600);
  const minutes = Math.floor((timeControl % 3600) / 60);
  return minutes
    ? `${hours}h${getPaddedNumber(minutes)}m${increment}`
    : `${hours}h${increment}`;
};

interface ChessComGameMetadata {
  game?: {
    endTime?: number;
    moveList?: string;
    pgnHeaders?: {
      White?: string;
      Black?: string;
      Date?: string;
      Event?: string;
      Result?: string;
      Round?: string;
      Site?: string;
      TimeControl?: string;
    };
  };
  players?: {
    bottom?: { username?: string; rating?: number };
    top?: { username?: string; rating?: number };
  };
}

interface ChessComArchiveGame {
  url?: string;
  pgn?: string;
}

async function fetchWithProxy(
  url: string,
  signal?: AbortSignal
): Promise<unknown> {
  if (
    typeof window !== "undefined" &&
    ["localhost", "127.0.0.1"].includes(window.location.hostname)
  ) {
    try {
      const localProxyUrl = `/api/chesscom-callback?url=${encodeURIComponent(url)}`;
      const res = await fetch(localProxyUrl, { signal });
      if (res.ok) {
        return await res.json();
      }
    } catch {
      // Fall through to public proxy fallbacks for non-Next/static contexts.
    }
  }

  try {
    const corsProxyUrl = `https://corsproxy.io/?${encodeURIComponent(url)}`;
    const res = await fetch(corsProxyUrl, { signal });
    if (res.ok) {
      return await res.json();
    }
  } catch {
    // Fall through to the next public proxy.
  }

  try {
    const allOriginsUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
    const res = await fetch(allOriginsUrl, { signal });
    if (!res.ok) {
      throw new Error(`Chess.com callback proxy failed with ${res.status}`);
    }
    const data = (await res.json()) as { contents?: string };
    if (!data.contents) {
      throw new Error("No content returned from Chess.com callback proxy");
    }
    return JSON.parse(data.contents);
  } catch {
    throw new Error("Unable to reach Chess.com game metadata.");
  }
}

const getAdjacentMonths = (
  year: number,
  month: number
): { year: number; month: number }[] => {
  const result = [];

  // Previous month
  const prevMonth = month === 1 ? 12 : month - 1;
  const prevYear = month === 1 ? year - 1 : year;
  result.push({ year: prevYear, month: prevMonth });

  // Next month
  const nextMonth = month === 12 ? 1 : month + 1;
  const nextYear = month === 12 ? year + 1 : year;
  result.push({ year: nextYear, month: nextMonth });

  return result;
};

export const getChessComUserAllRecentGames = async (
  username: string,
  maxGames: number | undefined = 50,
  signal?: AbortSignal
): Promise<LoadedGame[]> => {
  const usernameParam = encodeURIComponent(username.trim().toLowerCase());

  // Fetch list of all available monthly archives
  const archivesRes = await fetch(
    `https://api.chess.com/pub/player/${usernameParam}/games/archives`,
    { method: "GET", signal }
  );

  if (archivesRes.status >= 400) {
    throw new Error("Error fetching archives from Chess.com");
  }

  const archivesData = await archivesRes.json();
  const archives: string[] = archivesData?.archives ?? [];

  // Iterate backward through archives (most recent first)
  const allGames: LoadedGame[] = [];

  for (
    let i = archives.length - 1;
    i >= 0 && (maxGames === undefined || allGames.length < maxGames);
    i--
  ) {
    if (signal?.aborted) throw new DOMException("Cancelled", "AbortError");

    try {
      const res = await fetch(archives[i], { method: "GET", signal });
      if (!res.ok) continue;

      const data = await res.json();
      const games: ChessComGame[] = data?.games ?? [];

      const formatted = games
        .filter((game) => game.pgn && game.end_time)
        .sort((a, b) => b.end_time - a.end_time)
        .map(formatChessComGame);

      allGames.push(...formatted);
    } catch (e) {
      if (e instanceof DOMException && e.name === "AbortError") throw e;
      console.warn(`Failed to fetch archive ${archives[i]}`, e);
    }
  }

  return maxGames === undefined ? allGames : allGames.slice(0, maxGames);
};

const getChessComLivePlayers = (
  data: ChessComGameMetadata
): { white?: string; black?: string } => {
  const headers = data.game?.pgnHeaders;

  return {
    white: headers?.White || data.players?.bottom?.username,
    black: headers?.Black || data.players?.top?.username,
  };
};

const getPlayerRating = (
  data: ChessComGameMetadata,
  username: string | undefined,
  fallback: "bottom" | "top"
): number | undefined => {
  if (!username) return data.players?.[fallback]?.rating;

  const lowerUsername = username.toLowerCase();
  const player = [data.players?.bottom, data.players?.top].find(
    (p) => p?.username?.toLowerCase() === lowerUsername
  );

  return player?.rating ?? data.players?.[fallback]?.rating;
};

export const formatChessComLiveGamePgn = (
  data: ChessComGameMetadata
): string => {
  const moveList = data.game?.moveList;
  const players = getChessComLivePlayers(data);

  if (typeof moveList !== "string") {
    throw new ChessComActiveGameError(
      "Chess.com live game has no decodable move list yet",
      players
    );
  }

  const game = new Chess();
  const headers = data.game?.pgnHeaders ?? {};
  const white = players.white || "White";
  const black = players.black || "Black";
  const whiteRating = getPlayerRating(data, white, "bottom");
  const blackRating = getPlayerRating(data, black, "top");

  game.setHeader("Event", headers.Event || "Live Chess.com Game");
  game.setHeader("Site", headers.Site || "Chess.com");
  game.setHeader(
    "Date",
    headers.Date || new Date().toISOString().split("T")[0].replace(/-/g, ".")
  );
  game.setHeader("Round", headers.Round || "?");
  game.setHeader("White", white);
  game.setHeader("Black", black);
  if (whiteRating) game.setHeader("WhiteElo", String(whiteRating));
  if (blackRating) game.setHeader("BlackElo", String(blackRating));
  if (headers.TimeControl) game.setHeader("TimeControl", headers.TimeControl);
  game.setHeader("Result", headers.Result || "*");

  try {
    const moves = decodeChessComTcn(moveList);
    for (const move of moves) {
      if (!move.from) {
        throw new Error("Drop moves are not supported in standard chess");
      }

      game.move({
        from: move.from,
        to: move.to,
        promotion: move.promotion,
      });
    }
  } catch (error) {
    throw new ChessComActiveGameError(
      error instanceof Error
        ? `Unable to decode Chess.com live moves: ${error.message}`
        : "Unable to decode Chess.com live moves",
      players
    );
  }

  return game.pgn();
};

export const getChessComGameById = async (
  gameId: string,
  signal?: AbortSignal
): Promise<string> => {
  let data: ChessComGameMetadata | null = null;

  // Try live game metadata first
  try {
    const rawData = await fetchWithProxy(
      `https://www.chess.com/callback/live/game/${gameId}`,
      signal
    );
    const parsed = rawData as ChessComGameMetadata;
    if (parsed && parsed.game && parsed.players) {
      data = parsed;
    } else {
      throw new Error("Invalid live game data");
    }
  } catch {
    // Try daily game metadata
    try {
      const rawData = await fetchWithProxy(
        `https://www.chess.com/callback/daily/game/${gameId}`,
        signal
      );
      const parsed = rawData as ChessComGameMetadata;
      if (parsed && parsed.game && parsed.players) {
        data = parsed;
      } else {
        throw new Error("Invalid daily game data");
      }
    } catch {
      throw new Error(
        `Chess.com could not find game ID ${gameId}. Check that the URL is a public live or daily game URL.`
      );
    }
  }

  if (!data || !data.game || !data.players) {
    throw new Error(
      `Could not retrieve game metadata for ID ${gameId} from Chess.com`
    );
  }

  if (!data.game.endTime) {
    return formatChessComLiveGamePgn(data);
  }

  const players = data.players;
  const game = data.game;

  // Get username to query archive (prefer white or black)
  const whiteUsername = players?.bottom?.username || game?.pgnHeaders?.White;
  const blackUsername = players?.top?.username || game?.pgnHeaders?.Black;
  const username = whiteUsername || blackUsername;

  if (!username) {
    throw new Error("Could not find player username in game metadata");
  }

  let year: number;
  let monthStr: string;

  if (game.endTime) {
    const dateObj = new Date(game.endTime * 1000);
    year = dateObj.getUTCFullYear();
    monthStr = String(getPaddedNumber(dateObj.getUTCMonth() + 1));
  } else if (game.pgnHeaders?.Date) {
    const parts = game.pgnHeaders.Date.split(".");
    if (parts.length >= 2) {
      year = parseInt(parts[0], 10);
      monthStr = parts[1];
    } else {
      const now = new Date();
      year = now.getUTCFullYear();
      monthStr = String(getPaddedNumber(now.getUTCMonth() + 1));
    }
  } else {
    const now = new Date();
    year = now.getUTCFullYear();
    monthStr = String(getPaddedNumber(now.getUTCMonth() + 1));
  }

  // Fetch from player monthly archive
  const archiveRes = await fetch(
    `https://api.chess.com/pub/player/${username}/games/${year}/${monthStr}`,
    { signal }
  );

  if (archiveRes.ok) {
    const archiveData = await archiveRes.json();
    const games = (archiveData.games || []) as ChessComArchiveGame[];
    const matchingGame = games.find(
      (g) =>
        g.url && (g.url.endsWith(`/${gameId}`) || g.url.includes(`/${gameId}?`))
    );
    if (matchingGame && matchingGame.pgn) {
      return matchingGame.pgn;
    }
  }

  // Search adjacent months if not found
  const adjacentMonths = getAdjacentMonths(year, parseInt(monthStr, 10));
  for (const adj of adjacentMonths) {
    try {
      const adjRes = await fetch(
        `https://api.chess.com/pub/player/${username}/games/${adj.year}/${String(getPaddedNumber(adj.month))}`,
        { signal }
      );
      if (adjRes.ok) {
        const adjData = await adjRes.json();
        const adjGames = (adjData.games || []) as ChessComArchiveGame[];
        const found = adjGames.find(
          (g) =>
            g.url &&
            (g.url.endsWith(`/${gameId}`) || g.url.includes(`/${gameId}?`))
        );
        if (found && found.pgn) {
          return found.pgn;
        }
      }
    } catch (e) {
      console.warn(`Failed to fetch adjacent month archive for ${username}`, e);
    }
  }

  throw new ChessComActiveGameError(
    `Game with ID ${gameId} not found in player ${username}'s monthly archive`,
    { white: whiteUsername, black: blackUsername }
  );
};
