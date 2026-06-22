import { Chess } from "chess.js";
import type { FetchedGame, GameHeaders, MoveRecord, ParsedGame } from "./types";

const PIECE_VALUES: Record<string, number> = {
  p: 1,
  n: 3,
  b: 3,
  r: 5,
  q: 9,
  k: 0,
};

export function countMaterial(fen: string, color: "w" | "b"): number {
  const board = fen.split(" ")[0];
  let total = 0;
  for (const char of board) {
    if (char === "/" || /\d/.test(char)) continue;
    const isWhite = char === char.toUpperCase();
    if ((color === "w" && isWhite) || (color === "b" && !isWhite)) {
      total += PIECE_VALUES[char.toLowerCase()] ?? 0;
    }
  }
  return total;
}

export function parsePgn(pgn: string, id?: string): ParsedGame {
  const chess = new Chess();
  chess.loadPgn(pgn.trim());

  const headers = chess.header();
  const gameHeaders: GameHeaders = {
    white: headers.White ?? "White",
    black: headers.Black ?? "Black",
    whiteElo: headers.WhiteElo ?? undefined,
    blackElo: headers.BlackElo ?? undefined,
    result: headers.Result ?? "*",
    date: headers.Date ?? undefined,
    event: headers.Event ?? undefined,
    site: headers.Site ?? undefined,
  };

  const defaultFen = new Chess().fen();
  let startingFen = defaultFen;
  if (headers.FEN) {
    try {
      startingFen = new Chess(headers.FEN).fen();
    } catch {
      startingFen = defaultFen;
    }
  }

  const history = chess.history({ verbose: true });
  const replay = new Chess(startingFen);
  const moves: MoveRecord[] = history.map((move, index) => {
    replay.move(move.san);
    return {
      san: move.san,
      from: move.from,
      to: move.to,
      fen: replay.fen(),
      color: move.color,
      ply: index + 1,
      uci: `${move.from}${move.to}${move.promotion ?? ""}`,
    };
  });

  return {
    id: id ?? crypto.randomUUID(),
    headers: gameHeaders,
    moves,
    pgn: pgn.trim(),
    startingFen,
  };
}

export function parseFenPosition(fen: string): ParsedGame {
  const chess = new Chess(fen);
  return {
    id: crypto.randomUUID(),
    headers: {
      white: "White",
      black: "Black",
      result: "*",
    },
    moves: [],
    pgn: `[FEN "${fen}"]\n\n *`,
    startingFen: chess.fen(),
  };
}

export function getFenAtPly(moves: MoveRecord[], ply: number, startingFen?: string): string {
  if (ply <= 0) {
    return startingFen ?? new Chess().fen();
  }
  const chess = new Chess(startingFen);
  for (let i = 0; i < Math.min(ply, moves.length); i++) {
    chess.move(moves[i].san);
  }
  return chess.fen();
}

export function uciToSan(fen: string, uci: string): string {
  const chess = new Chess(fen);
  const from = uci.slice(0, 2);
  const to = uci.slice(2, 4);
  const promotion = uci.length > 4 ? uci[4] : undefined;
  const move = chess.move({ from, to, promotion });
  return move?.san ?? uci;
}

export function sanToUci(fen: string, san: string): string | null {
  const chess = new Chess(fen);
  try {
    const move = chess.move(san);
    if (!move) return null;
    const promotion = move.promotion ? move.promotion : "";
    return `${move.from}${move.to}${promotion}`;
  } catch {
    return null;
  }
}

export function uciLineToSan(fen: string, uciMoves: string[]): string[] {
  const chess = new Chess(fen);
  const sans: string[] = [];
  for (const uci of uciMoves) {
    try {
      const from = uci.slice(0, 2);
      const to = uci.slice(2, 4);
      const promotion = uci.length > 4 ? uci[4] : undefined;
      const move = chess.move({ from, to, promotion });
      if (move) sans.push(move.san);
      else break;
    } catch {
      break;
    }
  }
  return sans;
}

export function getMovePhase(ply: number): "opening" | "middlegame" | "endgame" {
  const moveNumber = Math.ceil(ply / 2);
  if (moveNumber <= 15) return "opening";
  if (moveNumber <= 30) return "middlegame";
  return "endgame";
}

export async function fetchChessComGames(username: string): Promise<FetchedGame[]> {
  const now = new Date();
  const games: FetchedGame[] = [];

  for (let i = 0; i < 3; i++) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const url = `https://api.chess.com/pub/player/${username.toLowerCase()}/games/${year}/${month}`;

    const response = await fetch(url);
    if (!response.ok) continue;

    const data = (await response.json()) as {
      games: Array<{
        url: string;
        pgn: string;
        white: { username: string; rating?: number };
        black: { username: string; rating?: number };
        time_class: string;
      }>;
    };

    for (const game of data.games ?? []) {
      games.push({
        id: game.url,
        pgn: game.pgn,
        white: game.white.username,
        black: game.black.username,
        whiteElo: game.white.rating?.toString(),
        blackElo: game.black.rating?.toString(),
        result: extractResult(game.pgn),
        date: `${year}-${month}`,
        url: game.url,
      });
    }
  }

  return games.reverse().slice(0, 30);
}

export async function fetchLichessGames(username: string): Promise<FetchedGame[]> {
  const url = `https://lichess.org/api/games/user/${encodeURIComponent(username)}?max=20&pgnInBody=true&clocks=false&evals=false`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch Lichess games for ${username}`);
  }

  const text = await response.text();
  const pgns = text.split(/\n\n(?=\[Event)/).filter(Boolean);
  const games: FetchedGame[] = [];

  for (const pgn of pgns) {
    const headers = parsePgnHeaders(pgn);
    games.push({
      id: headers.Site ?? crypto.randomUUID(),
      pgn,
      white: headers.White ?? "White",
      black: headers.Black ?? "Black",
      whiteElo: headers.WhiteElo,
      blackElo: headers.BlackElo,
      result: headers.Result ?? "*",
      date: headers.Date ?? "",
      url: headers.Site,
    });
  }

  return games;
}

function parsePgnHeaders(pgn: string): Record<string, string> {
  const headers: Record<string, string> = {};
  const regex = /\[(\w+)\s+"([^"]*)"\]/g;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(pgn)) !== null) {
    headers[match[1]] = match[2];
  }
  return headers;
}

function extractResult(pgn: string): string {
  const match = pgn.match(/\[Result\s+"([^"]+)"\]/);
  return match?.[1] ?? "*";
}

export function readFileAsText(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result ?? ""));
    reader.onerror = () => reject(reader.error);
    reader.readAsText(file);
  });
}
