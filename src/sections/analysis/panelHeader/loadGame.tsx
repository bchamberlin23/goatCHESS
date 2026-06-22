import LoadGameButton from "../../loadGame/loadGameButton";
import { useCallback, useEffect, useMemo } from "react";
import { useChessActions } from "@/hooks/useChessActions";
import {
  activeLiveGameAtom,
  boardAtom,
  boardOrientationAtom,
  evaluationProgressAtom,
  gameAtom,
  gameEvalAtom,
} from "../states";
import { useGameDatabase } from "@/hooks/useGameDatabase";
import { useAtomValue, useSetAtom } from "jotai";
import { Chess } from "chess.js";
import { useRouter } from "next/router";
import { GameEval } from "@/types/eval";
import { fetchLichessGame } from "@/lib/lichess";
import {
  getChessComGameById,
  ChessComActiveGameError,
  isPgnInProgress,
} from "@/lib/chessCom";
import { Box, Chip } from "@mui/material";
import { Icon } from "@iconify/react";

export default function LoadGame() {
  const router = useRouter();
  const game = useAtomValue(gameAtom);
  const { setPgn: setGamePgn } = useChessActions(gameAtom);
  const { resetToStartingPosition: resetBoard } = useChessActions(boardAtom);
  const { gameFromUrl } = useGameDatabase();
  const setEval = useSetAtom(gameEvalAtom);
  const setBoardOrientation = useSetAtom(boardOrientationAtom);
  const evaluationProgress = useAtomValue(evaluationProgressAtom);
  const activeLiveGame = useAtomValue(activeLiveGameAtom);
  const setActiveLiveGame = useSetAtom(activeLiveGameAtom);

  const joinedGameHistory = useMemo(() => game.history().join(), [game]);

  const resetAndSetGamePgn = useCallback(
    (
      pgn: string,
      orientation?: boolean,
      gameEval?: GameEval,
      isPollUpdate = false
    ) => {
      const gameFromPgn = new Chess();
      gameFromPgn.loadPgn(pgn);
      if (joinedGameHistory === gameFromPgn.history().join()) return;

      resetBoard(pgn);
      setEval(gameEval);
      setGamePgn(pgn);
      setBoardOrientation(orientation ?? true);

      if (!isPollUpdate) {
        setActiveLiveGame(null);
      }
    },
    [
      joinedGameHistory,
      resetBoard,
      setGamePgn,
      setEval,
      setBoardOrientation,
      setActiveLiveGame,
    ]
  );

  const {
    lichessGameId,
    chessComGameId,
    orientation: orientationParam,
  } = router.query;

  // Query parameters initial load effect
  useEffect(() => {
    const handleLichess = async (id: string) => {
      const res = await fetchLichessGame(id);
      if (typeof res === "string") {
        const orientation = orientationParam !== "black";
        resetAndSetGamePgn(res, orientation);

        const resultMatch = res.match(/\[Result\s+"([^"]+)"\]/i);
        const isLive = resultMatch && resultMatch[1] === "*";
        if (isLive) {
          setActiveLiveGame({ id, type: "lichess", orientation });
        }
      }
    };

    const handleChessCom = async (id: string) => {
      try {
        const res = await getChessComGameById(id);
        if (res) {
          let orientation = orientationParam !== "black";
          if (!orientationParam) {
            const chessComRaw = localStorage.getItem("chesscom-username") || "";
            const lichessRaw = localStorage.getItem("lichess-username") || "";
            const chessComNames = chessComRaw
              .split(",")
              .map((n) => n.trim().toLowerCase())
              .filter(Boolean);
            const lichessNames = lichessRaw
              .split(",")
              .map((n) => n.trim().toLowerCase())
              .filter(Boolean);
            const storedUsernames = [...chessComNames, ...lichessNames];
            const blackMatch = res.match(/\[Black\s+"([^"]+)"\]/i);
            if (
              blackMatch &&
              storedUsernames.includes(blackMatch[1].trim().toLowerCase())
            ) {
              orientation = false;
            }
          }
          resetAndSetGamePgn(res, orientation);
        }
      } catch (err) {
        if (err instanceof ChessComActiveGameError) {
          let orientation = orientationParam !== "black";
          if (!orientationParam && err.players.black) {
            const chessComRaw = localStorage.getItem("chesscom-username") || "";
            const lichessRaw = localStorage.getItem("lichess-username") || "";
            const chessComNames = chessComRaw
              .split(",")
              .map((n) => n.trim().toLowerCase())
              .filter(Boolean);
            const lichessNames = lichessRaw
              .split(",")
              .map((n) => n.trim().toLowerCase())
              .filter(Boolean);
            const storedUsernames = [...chessComNames, ...lichessNames];
            if (
              storedUsernames.includes(err.players.black.trim().toLowerCase())
            ) {
              orientation = false;
            }
          }
          const dummyPgn = `[Event "Live Chess.com Game"]\n[Site "Chess.com"]\n[White "${err.players.white || "White"}"]\n[Black "${err.players.black || "Black"}"]\n[Result "*"]\n\n*`;
          resetAndSetGamePgn(dummyPgn, orientation);
          setActiveLiveGame({ id, type: "chesscom", orientation });
        } else {
          console.warn("Failed to load chess.com game from url:", err);
        }
      }
    };

    if (gameFromUrl) {
      const orientation = !(
        gameFromUrl.site === "Chesskit.org" && gameFromUrl.black.name === "You"
      );
      resetAndSetGamePgn(gameFromUrl.pgn, orientation, gameFromUrl.eval);
    } else if (typeof lichessGameId === "string" && !!lichessGameId) {
      handleLichess(lichessGameId);
    } else if (typeof chessComGameId === "string" && !!chessComGameId) {
      handleChessCom(chessComGameId);
    }
  }, [
    gameFromUrl,
    lichessGameId,
    chessComGameId,
    orientationParam,
    resetAndSetGamePgn,
    setActiveLiveGame,
  ]);

  // Polling loop effect for active live games
  useEffect(() => {
    if (!activeLiveGame) return;

    const { id, type, orientation } = activeLiveGame;
    let isCancelled = false;

    const poll = async () => {
      try {
        if (type === "lichess") {
          const res = await fetchLichessGame(id);
          if (isCancelled) return;
          if (typeof res === "string") {
            const resultMatch = res.match(/\[Result\s+"([^"]+)"\]/i);
            const isFinished = resultMatch && resultMatch[1] !== "*";

            resetAndSetGamePgn(res, orientation, undefined, true);

            if (isFinished) {
              setActiveLiveGame(null);
            }
          }
        } else if (type === "chesscom") {
          const res = await getChessComGameById(id);
          if (isCancelled) return;
          if (res) {
            resetAndSetGamePgn(res, orientation, undefined, true);
            if (!isPgnInProgress(res)) {
              setActiveLiveGame(null);
            }
          }
        }
      } catch (err) {
        if (err instanceof ChessComActiveGameError) {
          // Silent: game still in progress
          return;
        }
        console.warn("Error polling live game:", err);
      }
    };

    poll();
    const interval = setInterval(poll, 5000);

    return () => {
      isCancelled = true;
      clearInterval(interval);
    };
  }, [activeLiveGame, resetAndSetGamePgn, setActiveLiveGame]);

  useEffect(() => {
    const eventHandler = (event: MessageEvent) => {
      try {
        if (!event?.data?.pgn) return;
        const { pgn, orientation } = event.data as {
          pgn: string;
          orientation?: "white" | "black";
        };
        resetAndSetGamePgn(pgn, orientation !== "black");
      } catch (error) {
        console.warn("Error processing message event:", error);
      }
    };
    window.addEventListener("message", eventHandler);

    return () => {
      window.removeEventListener("message", eventHandler);
    };
  }, [resetAndSetGamePgn]);

  const isGameLoaded =
    gameFromUrl !== undefined ||
    (!!game.getHeaders().White && game.getHeaders().White !== "?") ||
    game.history().length > 0;

  if (evaluationProgress) return null;

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
      {activeLiveGame && (
        <Chip
          icon={
            <Icon
              icon="ri:pulse-line"
              style={{
                fontSize: "1.1rem",
              }}
            />
          }
          label={`Live Polling (${activeLiveGame.type === "lichess" ? "Lichess" : "Chess.com"})`}
          color="error"
          variant="outlined"
          size="small"
          sx={{
            fontWeight: 600,
            animation: "pulse 1.5s infinite ease-in-out",
            "@keyframes pulse": {
              "0%": { opacity: 0.6 },
              "50%": { opacity: 1 },
              "100%": { opacity: 0.6 },
            },
          }}
        />
      )}
      <LoadGameButton
        label={isGameLoaded ? "Load another game" : "Load game"}
        size="small"
        setGame={async (game) => {
          await router.replace(
            {
              query: {},
              pathname: router.pathname,
            },
            undefined,
            { shallow: true, scroll: false }
          );
          resetAndSetGamePgn(game.pgn());
        }}
      />
    </Box>
  );
}
