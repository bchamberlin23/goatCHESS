import { useAtomValue } from "jotai";
import {
  gameAtom,
  isGameInProgressAtom,
  playerColorAtom,
  gameStartTimeAtom,
} from "./states";
import {
  Button,
  Typography,
  Card,
  CardContent,
  Box,
  Stack,
  Tooltip,
  IconButton,
} from "@mui/material";
import { Color } from "@/types/enums";
import { setGameHeaders } from "@/lib/chess";
import { useGameDatabase } from "@/hooks/useGameDatabase";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import GameSettingsButton from "./gameSettings/gameSettingsButton";
import { useState, useMemo } from "react";
import { useSnackbar } from "@/hooks/useSnackbar";

export default function GameRecap() {
  const game = useAtomValue(gameAtom);
  const playerColor = useAtomValue(playerColorAtom);
  const isGameInProgress = useAtomValue(isGameInProgressAtom);
  const gameStartTime = useAtomValue(gameStartTimeAtom);
  const { addGame } = useGameDatabase();
  const router = useRouter();
  const { showSnackbar } = useSnackbar();

  const [copied, setCopied] = useState(false);

  // Compute duration once when recap is shown
  const gameDurationStr = useMemo(() => {
    if (!gameStartTime) return "";
    const elapsedMs = Date.now() - gameStartTime;
    const totalSecs = Math.floor(elapsedMs / 1000);
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins}m ${secs}s`;
  }, [isGameInProgress, gameStartTime]); // eslint-disable-line react-hooks/exhaustive-deps

  if (isGameInProgress || !game.history().length) return null;

  const isCheckmate = game.isCheckmate();
  const isDraw =
    game.isDraw() ||
    game.isStalemate() ||
    game.isThreefoldRepetition() ||
    game.isInsufficientMaterial();

  let winnerLabel = "";
  if (isCheckmate) {
    const winnerColor = game.turn() === "w" ? Color.Black : Color.White;
    winnerLabel = winnerColor === playerColor ? "You" : "Stockfish";
  }

  const getResultLabel = () => {
    if (isCheckmate) {
      return `${winnerLabel} won by checkmate!`;
    }
    if (game.isInsufficientMaterial()) return "Draw by insufficient material";
    if (game.isStalemate()) return "Draw by stalemate";
    if (game.isThreefoldRepetition()) return "Draw by threefold repetition";
    if (game.isDraw()) return "Draw by fifty-move rule";

    return "You resigned";
  };

  const getResultIcon = () => {
    if (isCheckmate) {
      return { icon: "mdi:crown", color: "#C9A96E" };
    }
    if (isDraw) {
      return { icon: "mdi:handshake", color: "#9e9e9e" };
    }
    return { icon: "mdi:flag-variant", color: "#df5353" };
  };

  const handleOpenGameAnalysis = async () => {
    const gameToAnalysis = setGameHeaders(game, {
      resigned: !game.isGameOver() ? playerColor : undefined,
    });
    const gameId = await addGame(gameToAnalysis);

    router.push({ pathname: "/analysis", query: { gameId } });
  };

  const handleCopyPgn = () => {
    navigator.clipboard.writeText(game.pgn());
    setCopied(true);
    showSnackbar("PGN copied to clipboard", "success");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadPgn = () => {
    const pgn = game.pgn();
    const today = new Date().toISOString().slice(0, 10);
    const filename = `chesskit-vs-stockfish-${today}.pgn`;
    const blob = new Blob([pgn], { type: "application/x-chess-pgn" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showSnackbar("PGN downloaded", "success");
  };

  const { icon: resultIcon, color: iconColor } = getResultIcon();
  const totalMoves = game.history().length;
  const fullMoves = Math.ceil(totalMoves / 2);

  return (
    <Card
      elevation={0}
      sx={{
        width: "100%",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, 0.02)"
            : "rgba(0, 0, 0, 0.015)",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, 0.06)"
            : "rgba(0, 0, 0, 0.05)",
        borderRadius: 2.5,
        mt: 1,
      }}
    >
      <CardContent sx={{ p: 2.5, "&:last-child": { pb: 2.5 } }}>
        <Stack spacing={2.5} alignItems="center" textAlign="center">
          {/* Result Icon & Title */}
          <Stack spacing={1} alignItems="center">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 56,
                height: 56,
                borderRadius: "50%",
                backgroundColor: `${iconColor}15`,
                color: iconColor,
              }}
            >
              <Icon icon={resultIcon} width={32} height={32} />
            </Box>
            <Typography variant="h6" fontWeight={700} color="text.primary">
              {getResultLabel()}
            </Typography>
          </Stack>

          {/* Game Stats */}
          <Stack
            direction="row"
            spacing={3}
            justifyContent="center"
            sx={{
              width: "100%",
              py: 1,
              px: 2,
              borderRadius: 1.5,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark"
                  ? "rgba(255, 255, 255, 0.015)"
                  : "rgba(0, 0, 0, 0.01)",
            }}
          >
            <Box>
              <Typography
                variant="caption"
                color="text.secondary"
                display="block"
              >
                MOVES
              </Typography>
              <Typography variant="body2" fontWeight={600}>
                {fullMoves} ({totalMoves} ply)
              </Typography>
            </Box>
            {gameDurationStr && (
              <Box>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  display="block"
                >
                  DURATION
                </Typography>
                <Typography variant="body2" fontWeight={600}>
                  {gameDurationStr}
                </Typography>
              </Box>
            )}
          </Stack>

          {/* Action Buttons */}
          <Stack spacing={1.25} width="100%">
            <Stack direction="row" spacing={1.5} width="100%">
              <Box sx={{ flex: 1 }}>
                <GameSettingsButton />
              </Box>
              <Button
                variant="outlined"
                onClick={handleCopyPgn}
                startIcon={
                  <Icon icon={copied ? "mdi:check" : "mdi:content-copy"} />
                }
                fullWidth
                sx={{
                  flex: 1,
                  borderRadius: 2,
                  borderColor: "divider",
                  color: "text.primary",
                  "&:hover": {
                    borderColor: "text.primary",
                    backgroundColor: (theme) =>
                      theme.palette.mode === "dark"
                        ? "rgba(255, 255, 255, 0.05)"
                        : "rgba(0, 0, 0, 0.04)",
                  },
                }}
              >
                {copied ? "Copied!" : "Copy PGN"}
              </Button>
              <Tooltip title="Download PGN">
                <IconButton
                  onClick={handleDownloadPgn}
                  size="medium"
                  sx={{
                    borderRadius: 2,
                    border: "1px solid",
                    borderColor: "divider",
                    color: "text.primary",
                    "&:hover": {
                      borderColor: "text.primary",
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark"
                          ? "rgba(255, 255, 255, 0.05)"
                          : "rgba(0, 0, 0, 0.04)",
                    },
                  }}
                >
                  <Icon icon="mdi:download" width={20} />
                </IconButton>
              </Tooltip>
            </Stack>

            <Button
              variant="contained"
              onClick={handleOpenGameAnalysis}
              startIcon={<Icon icon="streamline:magnifying-glass-solid" />}
              fullWidth
              sx={{
                borderRadius: 2,
                py: 1,
                backgroundColor: "#C9A96E",
                color: "#121212",
                boxShadow: "none",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#bda065",
                  boxShadow: "none",
                },
              }}
            >
              Open game analysis
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
