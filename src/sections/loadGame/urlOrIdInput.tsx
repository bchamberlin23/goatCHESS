import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  CircularProgress,
  Alert,
  Chip,
  Grid2 as Grid,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { getChessComGameById, ChessComActiveGameError } from "@/lib/chessCom";
import { getPlatformInfo } from "@/lib/gameUrl";
import { fetchLichessGame } from "@/lib/lichess";
import { useSetAtom } from "jotai";
import { activeLiveGameAtom } from "../analysis/states";

interface Props {
  onSelect: (pgn: string, boardOrientation?: boolean) => void;
}

export default function UrlOrIdInput({ onSelect }: Props) {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const setActiveLiveGame = useSetAtom(activeLiveGameAtom);

  const getStoredUsernames = (): string[] => {
    if (typeof window === "undefined") return [];
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

    return [...chessComNames, ...lichessNames];
  };

  const determineBoardOrientation = (pgn: string): boolean => {
    const blackMatch = pgn.match(/\[Black\s+"([^"]+)"\]/i);
    if (!blackMatch) return true;

    const blackPlayer = blackMatch[1].trim().toLowerCase();
    const storedUsernames = getStoredUsernames();

    // If the black player matches one of our stored usernames, orient board as Black (false)
    if (storedUsernames.includes(blackPlayer)) {
      return false;
    }

    return true;
  };

  const handleLoad = async () => {
    if (!inputValue.trim()) return;

    const info = getPlatformInfo(inputValue);
    if (!info) {
      setError(
        "Could not detect a valid Chess.com or Lichess URL / ID. Please check your input."
      );
      return;
    }

    setLoading(true);
    setError(null);

    try {
      let pgn = "";
      if (info.type === "chesscom") {
        try {
          pgn = await getChessComGameById(info.id);
        } catch (err) {
          if (err instanceof ChessComActiveGameError) {
            const orientation = determineBoardOrientation(
              `[Black "${err.players.black || ""}"]`
            );
            setActiveLiveGame({
              id: info.id,
              type: "chesscom",
              orientation,
            });
            const dummyPgn = `[Event "Live Chess.com Game"]\n[Site "Chess.com"]\n[White "${err.players.white || "White"}"]\n[Black "${err.players.black || "Black"}"]\n[Result "*"]\n\n*`;
            onSelect(dummyPgn, orientation);
            return;
          } else {
            throw err;
          }
        }
      } else if (info.type === "lichess") {
        const lichessRes = await fetchLichessGame(info.id);
        if (typeof lichessRes !== "string") {
          throw new Error(
            lichessRes.error || "Failed to fetch game from Lichess"
          );
        }
        pgn = lichessRes;

        const orientation = determineBoardOrientation(pgn);
        const resultMatch = pgn.match(/\[Result\s+"([^"]+)"\]/i);
        const isLive = resultMatch && resultMatch[1] === "*";
        if (isLive) {
          setActiveLiveGame({
            id: info.id,
            type: "lichess",
            orientation,
          });
        }
      }

      if (!pgn) {
        throw new Error("No PGN data found for this game.");
      }

      const orientation = determineBoardOrientation(pgn);
      onSelect(pgn, orientation);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred while loading the game."
      );
    } finally {
      setLoading(false);
    }
  };

  const platformInfo = getPlatformInfo(inputValue);

  return (
    <Grid container gap={2} sx={{ width: "100%", mt: 1 }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          gap: 1,
          alignItems: "flex-start",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <TextField
            fullWidth
            label="Game URL or ID"
            placeholder="e.g. https://www.chess.com/game/live/... or https://lichess.org/..."
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setError(null);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !loading && inputValue.trim()) {
                handleLoad();
              }
            }}
            disabled={loading}
            variant="outlined"
            error={!!error}
          />
          {platformInfo && (
            <Box sx={{ mt: 1, display: "flex", alignItems: "center", gap: 1 }}>
              <Chip
                icon={
                  <Icon
                    icon={
                      platformInfo.type === "chesscom"
                        ? "mdi:chess-pawn"
                        : "mdi:chess-knight"
                    }
                    style={{ fontSize: "1.1rem" }}
                  />
                }
                label={`${platformInfo.platform} detected`}
                color={
                  platformInfo.type === "chesscom" ? "success" : "secondary"
                }
                variant="outlined"
                size="small"
                sx={{
                  animation: "fadeIn 0.25s ease-out",
                  "@keyframes fadeIn": {
                    "0%": { opacity: 0, transform: "translateY(-4px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                  },
                }}
              />
            </Box>
          )}
        </Box>
        <Button
          variant="contained"
          onClick={handleLoad}
          disabled={loading || !inputValue.trim()}
          sx={{ height: 56, minWidth: 120 }}
        >
          {loading ? <CircularProgress size={24} /> : "Load Game"}
        </Button>
      </Box>

      {error && (
        <Box sx={{ width: "100%" }}>
          <Alert severity="error" variant="filled">
            {error}
          </Alert>
        </Box>
      )}
    </Grid>
  );
}
