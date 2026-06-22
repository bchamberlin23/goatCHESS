import { EvaluateGameParams, LineEval, PositionEval } from "@/types/eval";
import { Game, Player } from "@/types/game";
import { Chess, PieceSymbol, Square } from "chess.js";
import { getPositionWinPercentage } from "./engine/helpers/winPercentage";
import { Color } from "@/types/enums";
import { Piece } from "react-chessboard/dist/chessboard/types";

export const getEvaluateGameParams = (game: Chess): EvaluateGameParams => {
  const history = game.history({ verbose: true });

  const fens = history.map((move) => move.before);
  fens.push(history[history.length - 1].after);

  const uciMoves = history.map(
    (move) => move.from + move.to + (move.promotion || "")
  );

  return { fens, uciMoves };
};

export const getGameFromPgn = (pgn: string): Chess => {
  const game = new Chess();
  game.loadPgn(pgn);

  return game;
};

export const formatGameToDatabase = (game: Chess): Omit<Game, "id"> => {
  const headers: Record<string, string | undefined> = game.getHeaders();

  return {
    pgn: game.pgn(),
    event: headers.Event,
    site: headers.Site,
    date: headers.Date,
    round: headers.Round ?? "?",
    white: {
      name: headers.White || "White",
      rating: headers.WhiteElo ? Number(headers.WhiteElo) : undefined,
    },
    black: {
      name: headers.Black || "Black",
      rating: headers.BlackElo ? Number(headers.BlackElo) : undefined,
    },
    result: headers.Result,
    termination: headers.Termination,
    timeControl: headers.TimeControl,
  };
};

export const getGameToSave = (game: Chess, board: Chess): Chess => {
  if (game.history().length) return game;
  return setGameHeaders(board);
};

export const setGameHeaders = (
  game: Chess,
  params: { white?: Player; black?: Player; resigned?: Color } = {}
): Chess => {
  game.setHeader("Event", "Chesskit Game");
  game.setHeader("Site", "Chesskit.org");
  game.setHeader(
    "Date",
    new Date().toISOString().split("T")[0].replace(/-/g, ".")
  );

  const { white, black, resigned } = params;

  const whiteHeader = game.getHeaders().White;
  const blackHeader = game.getHeaders().Black;
  const whiteName =
    white?.name || (whiteHeader !== "?" ? whiteHeader : "White");
  const blackName =
    black?.name || (blackHeader !== "?" ? blackHeader : "Black");

  game.setHeader("White", whiteName);
  game.setHeader("Black", blackName);

  if (white?.rating) game.setHeader("WhiteElo", `${white.rating}`);
  if (black?.rating) game.setHeader("BlackElo", `${black.rating}`);

  if (resigned) {
    game.setHeader("Result", resigned === "w" ? "0-1" : "1-0");
    game.setHeader(
      "Termination",
      `${resigned === "w" ? blackName : whiteName} won by resignation`
    );
  }

  if (!game.isGameOver()) return game;

  if (game.isCheckmate()) {
    game.setHeader("Result", game.turn() === "w" ? "0-1" : "1-0");
    game.setHeader(
      "Termination",
      `${game.turn() === "w" ? blackName : whiteName} won by checkmate`
    );
  }

  if (game.isInsufficientMaterial()) {
    game.setHeader("Result", "1/2-1/2");
    game.setHeader("Termination", "Draw by insufficient material");
  }

  if (game.isStalemate()) {
    game.setHeader("Result", "1/2-1/2");
    game.setHeader("Termination", "Draw by stalemate");
  }

  if (game.isThreefoldRepetition()) {
    game.setHeader("Result", "1/2-1/2");
    game.setHeader("Termination", "Draw by threefold repetition");
  }

  return game;
};

export const moveLineUciToSan = (
  fen: string
): ((moveUci: string) => string) => {
  const game = new Chess(fen);

  return (moveUci: string): string => {
    try {
      const move = game.move(uciMoveParams(moveUci));
      return move.san;
    } catch {
      return moveUci;
    }
  };
};

export const getEvaluationBarValue = (
  position: PositionEval
): { whiteBarPercentage: number; label: string } => {
  const whiteBarPercentage = getPositionWinPercentage(position);
  const bestLine = position.lines[0];

  if (bestLine.mate) {
    return { label: `M${Math.abs(bestLine.mate)}`, whiteBarPercentage };
  }

  const cp = bestLine.cp;
  if (!cp) return { whiteBarPercentage, label: "0.0" };

  const pEval = Math.abs(cp) / 100;
  let label = pEval.toFixed(1);

  if (label.toString().length > 3) {
    label = pEval.toFixed(0);
  }

  return { whiteBarPercentage, label };
};

export const getIsStalemate = (fen: string): boolean => {
  const game = new Chess(fen);
  return game.isStalemate();
};

export const getWhoIsCheckmated = (fen: string): "w" | "b" | null => {
  const game = new Chess(fen);
  if (!game.isCheckmate()) return null;
  return game.turn();
};

export const uciMoveParams = (
  uciMove: string
): {
  from: Square;
  to: Square;
  promotion?: string | undefined;
} => ({
  from: uciMove.slice(0, 2) as Square,
  to: uciMove.slice(2, 4) as Square,
  promotion: uciMove.slice(4, 5) || undefined,
});

export const isSimplePieceRecapture = (
  fen: string,
  uciMoves: [string, string]
): boolean => {
  const game = new Chess(fen);
  const moves = uciMoves.map((uciMove) => uciMoveParams(uciMove));

  if (moves[0].to !== moves[1].to) return false;

  const piece = game.get(moves[0].to);
  if (piece) return true;

  return false;
};

export const getIsPieceSacrifice = (
  fen: string,
  playedMove: string,
  bestLinePvToPlay: string[]
): boolean => {
  if (!bestLinePvToPlay.length) return false;

  const game = new Chess(fen);
  const whiteToPlay = game.turn() === "w";
  const startingMaterialDifference = getMaterialDifference(fen);

  let moves = [playedMove, ...bestLinePvToPlay];
  if (moves.length % 2 === 1) {
    moves = moves.slice(0, -1);
  }
  let nonCapturingMovesTemp = 1;

  const capturedPieces: { w: PieceSymbol[]; b: PieceSymbol[] } = {
    w: [],
    b: [],
  };
  for (const move of moves) {
    try {
      const fullMove = game.move(uciMoveParams(move));
      if (fullMove.captured) {
        capturedPieces[fullMove.color].push(fullMove.captured);
        nonCapturingMovesTemp = 1;
      } else {
        nonCapturingMovesTemp--;
        if (nonCapturingMovesTemp < 0) break;
      }
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  for (const p of capturedPieces["w"].slice(0)) {
    if (capturedPieces["b"].includes(p)) {
      capturedPieces["b"].splice(capturedPieces["b"].indexOf(p), 1);
      capturedPieces["w"].splice(capturedPieces["w"].indexOf(p), 1);
    }
  }

  if (
    Math.abs(capturedPieces["w"].length - capturedPieces["b"].length) <= 1 &&
    capturedPieces["w"].concat(capturedPieces["b"]).every((p) => p === "p")
  ) {
    return false;
  }

  const endingMaterialDifference = getMaterialDifference(game.fen());

  const materialDiff = endingMaterialDifference - startingMaterialDifference;
  const materialDiffPlayerRelative = whiteToPlay ? materialDiff : -materialDiff;

  return materialDiffPlayerRelative < 0;
};

export const getMaterialDifference = (fen: string): number => {
  const game = new Chess(fen);
  const board = game.board().flat();

  return board.reduce((acc, square) => {
    if (!square) return acc;
    const piece = square.type;

    if (square.color === "w") {
      return acc + getPieceValue(piece);
    }

    return acc - getPieceValue(piece);
  }, 0);
};

const getPieceValue = (piece: PieceSymbol): number => {
  switch (piece) {
    case "p":
      return 1;
    case "n":
      return 3;
    case "b":
      return 3;
    case "r":
      return 5;
    case "q":
      return 9;
    default:
      return 0;
  }
};

export const isCheck = (fen: string): boolean => {
  const game = new Chess(fen);
  return game.inCheck();
};

export const getCapturedPieces = (
  fen: string,
  color: Color
): {
  piece: string;
  count: number;
}[] => {
  const capturedPieces =
    color === Color.White
      ? [
          { piece: "p", count: 8 },
          { piece: "b", count: 2 },
          { piece: "n", count: 2 },
          { piece: "r", count: 2 },
          { piece: "q", count: 1 },
        ]
      : [
          { piece: "P", count: 8 },
          { piece: "B", count: 2 },
          { piece: "N", count: 2 },
          { piece: "R", count: 2 },
          { piece: "Q", count: 1 },
        ];

  const fenPiecePlacement = fen.split(" ")[0];

  return capturedPieces.map(({ piece, count }) => {
    const piecesLeftCount = fenPiecePlacement.match(
      new RegExp(piece, "g")
    )?.length;
    const newPiece = pieceFenToSymbol[piece] ?? piece;

    return {
      piece: newPiece,
      count: Math.max(0, count - (piecesLeftCount ?? 0)),
    };
  });
};

const pieceFenToSymbol: Record<string, Piece | undefined> = {
  p: "bP",
  b: "bB",
  n: "bN",
  r: "bR",
  q: "bQ",
  k: "bK",
  P: "wP",
  B: "wB",
  N: "wN",
  R: "wR",
  Q: "wQ",
  K: "wK",
};

export const getLineEvalLabel = (
  line: Pick<LineEval, "cp" | "mate">
): string => {
  if (line.cp !== undefined) {
    return `${line.cp > 0 ? "+" : ""}${(line.cp / 100).toFixed(2)}`;
  }

  if (line.mate) {
    return `${line.mate > 0 ? "+" : "-"}M${Math.abs(line.mate)}`;
  }

  return "?";
};

/**
 * Detects the opening name from a chess game based on FEN position.
 * Uses a compact lookup of common openings keyed by piece configuration.
 */
export const getOpeningName = (game: Chess): string | null => {
  const history = game.history();
  if (history.length === 0) return null;

  const moves = history.join(" ");

  // Open Game: 1.e4 e5
  if (/^e4 e5/.test(moves)) {
    // Ruy Lopez: 1.e4 e5 2.Nf3 Nc6 3.Bb5
    if (/1\. e4 e5 2\. Nf3 Nc6 3\. Bb5/.test(moves)) return "Ruy Lopez";
    // Italian Game: 1.e4 e5 2.Nf3 Nc6 3.Bc4
    if (/1\. e4 e5 2\. Nf3 Nc6 3\. Bc4/.test(moves)) {
      if (/3\. Bc4 Bc5/.test(moves)) return "Italian Game: Giuoco Piano";
      if (/3\. Bc4 Nf6/.test(moves)) return "Italian Game: Two Knights";
      return "Italian Game";
    }
    // Scotch Game: 1.e4 e5 2.Nf3 Nc6 3.d4
    if (/1\. e4 e5 2\. Nf3 Nc6 3\. d4/.test(moves)) return "Scotch Game";
    // Petrov: 1.e4 e5 2.Nf3 Nf6
    if (/1\. e4 e5 2\. Nf3 Nf6/.test(moves)) return "Petrov's Defense";
    // Philidor: 1.e4 e5 2.Nf3 d6
    if (/1\. e4 e5 2\. Nf3 d6/.test(moves)) return "Philidor Defense";
    // King's Gambit: 1.e4 e5 2.f4
    if (/1\. e4 e5 2\. f4/.test(moves)) return "King's Gambit";
    // Vienna: 1.e4 e5 2.Nc3
    if (/1\. e4 e5 2\. Nc3/.test(moves)) return "Vienna Game";
    return "King's Pawn Opening";
  }

  // Sicilian: 1.e4 c5
  if (/^e4 c5/.test(moves)) {
    // Najdorf: 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6
    if (/a6/.test(moves.split(" ").slice(8).join(" ")))
      return "Sicilian: Najdorf";
    // Dragon: 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 g6
    if (/5\. Nc3 g6/.test(moves)) return "Sicilian: Dragon";
    // Classical: 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 Nc6
    if (/5\. Nc3 Nc6/.test(moves)) return "Sicilian: Classical";
    // Alapin: 1.e4 c5 2.c3
    if (/2\. c3/.test(moves)) return "Sicilian: Alapin";
    // Closed: 1.e4 c5 2.Nc3
    if (/2\. Nc3/.test(moves)) return "Sicilian: Closed";
    // Rossolimo: 1.e4 c5 2.Nf3 Nc6 3.Bb5
    if (/2\. Nf3 Nc6 3\. Bb5/.test(moves)) return "Sicilian: Rossolimo";
    return "Sicilian Defense";
  }

  // French: 1.e4 e6
  if (/^e4 e6/.test(moves)) {
    if (/2\. d4 d5 3\. Nc3/.test(moves)) return "French Defense: Classical";
    if (/2\. d4 d5 3\. Nd2/.test(moves)) return "French: Tarrasch";
    if (/2\. d4 d5 3\. e5/.test(moves)) return "French: Advance";
    return "French Defense";
  }

  // Caro-Kann: 1.e4 c6
  if (/^e4 c6/.test(moves)) return "Caro-Kann Defense";

  // Pirc: 1.e4 d6
  if (/^e4 d6/.test(moves)) return "Pirc Defense";

  // Modern: 1.e4 g6
  if (/^e4 g6/.test(moves)) return "Modern Defense";

  // Alekhine: 1.e4 Nf6
  if (/^e4 Nf6/.test(moves)) return "Alekhine's Defense";

  // Scandinavian: 1.e4 d5
  if (/^e4 d5/.test(moves)) return "Scandinavian Defense";

  // Queen's Pawn: 1.d4 d5
  if (/^d4 d5/.test(moves)) {
    // Queen's Gambit: 1.d4 d5 2.c4
    if (/2\. c4/.test(moves)) {
      if (/2\. c4 e6/.test(moves)) return "Queen's Gambit Declined";
      if (/2\. c4 c6/.test(moves)) return "Slav Defense";
      if (/2\. c4 dxc4/.test(moves)) return "Queen's Gambit Accepted";
      return "Queen's Gambit";
    }
    // London System: 1.d4 d5 2.Bf4
    if (/2\. Bf4/.test(moves)) return "London System";
    return "Queen's Pawn Opening";
  }

  // Indian Defenses: 1.d4 Nf6
  if (/^d4 Nf6/.test(moves)) {
    if (/2\. c4 e6 3\. Nc3 Bb4/.test(moves)) return "Nimzo-Indian";
    if (/2\. c4 e6 3\. Nf3 b6/.test(moves)) return "Queen's Indian";
    if (/2\. c4 g6 3\. Nc3 Bg7/.test(moves)) return "King's Indian Defense";
    if (/2\. c4 g6 3\. Nc3 d5/.test(moves)) return "Grünfeld Defense";
    return "Indian Game";
  }

  // Dutch: 1.d4 f5
  if (/^d4 f5/.test(moves)) return "Dutch Defense";

  // English: 1.c4
  if (/^c4/.test(moves)) return "English Opening";

  // Reti: 1.Nf3
  if (/^Nf3/.test(moves)) return "Réti Opening";

  return null;
};

export const formatUciPv = (fen: string, uciMoves: string[]): string[] => {
  const castlingRights = fen.split(" ")[2];

  let canWhiteCastleKingSide = castlingRights.includes("K");
  let canWhiteCastleQueenSide = castlingRights.includes("Q");
  let canBlackCastleKingSide = castlingRights.includes("k");
  let canBlackCastleQueenSide = castlingRights.includes("q");

  return uciMoves.map((uci) => {
    if (uci === "e1h1" && canWhiteCastleKingSide) {
      canWhiteCastleKingSide = false;
      return "e1g1";
    }
    if (uci === "e1a1" && canWhiteCastleQueenSide) {
      canWhiteCastleQueenSide = false;
      return "e1c1";
    }

    if (uci === "e8h8" && canBlackCastleKingSide) {
      canBlackCastleKingSide = false;
      return "e8g8";
    }
    if (uci === "e8a8" && canBlackCastleQueenSide) {
      canBlackCastleQueenSide = false;
      return "e8c8";
    }

    return uci;
  });
};
