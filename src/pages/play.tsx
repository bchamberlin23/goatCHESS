import { PageTitle } from "@/components/pageTitle";
import Board from "@/sections/play/board";
import GameInProgress from "@/sections/play/gameInProgress";
import GameRecap from "@/sections/play/gameRecap";
import GameSettingsButton from "@/sections/play/gameSettings/gameSettingsButton";
import PlayMoveHistory from "@/sections/play/PlayMoveHistory";
import {
  isGameInProgressAtom,
  playerColorAtom,
  enginePlaySelectionAtom,
  engineEloAtom,
  gameStartTimeAtom,
  gameAtom,
  playViewMoveIndexAtom,
  playBoardFlippedAtom,
} from "@/sections/play/states";
import {
  Grid2 as Grid,
  Box,
  Stack,
  Typography,
  IconButton,
  Tooltip,
  Chip,
} from "@mui/material";
import { useAtom, useAtomValue } from "jotai";
import { useEffect } from "react";
import { Color } from "@/types/enums";
import { ENGINE_LABELS } from "@/constants";
import { Icon } from "@iconify/react";
import { useNavigationGuard } from "@/hooks/useNavigationGuard";
import { getOpeningName } from "@/lib/chess";
import { useLocalEngines } from "@/hooks/useLocalEngines";

export default function Play() {
  const isGameInProgress = useAtomValue(isGameInProgressAtom);
  const playerColor = useAtomValue(playerColorAtom);
  const enginePlaySelection = useAtomValue(enginePlaySelectionAtom);
  const engineElo = useAtomValue(engineEloAtom);
  const [, setGameStartTime] = useAtom(gameStartTimeAtom);
  const game = useAtomValue(gameAtom);
  const [viewMoveIdx, setViewMoveIdx] = useAtom(playViewMoveIndexAtom);
  const [, setBoardFlipped] = useAtom(playBoardFlippedAtom);
  const { getEngineLabel } = useLocalEngines();

  const engineLabel =
    enginePlaySelection.kind === "browser"
      ? ENGINE_LABELS[enginePlaySelection.name]?.small || "Stockfish"
      : getEngineLabel(enginePlaySelection.id);

  // Record game start time when game becomes active
  useEffect(() => {
    if (isGameInProgress) {
      setGameStartTime(Date.now());
    }
  }, [isGameInProgress, setGameStartTime]);

  // Navigation guard: warn before leaving during an active game
  useNavigationGuard(isGameInProgress);

  // Dynamic favicon: show turn indicator
  useEffect(() => {
    if (!isGameInProgress) return;

    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isPlayerTurn = game.turn() === playerColor;

    // Draw filled circle
    ctx.beginPath();
    ctx.arc(16, 16, 12, 0, Math.PI * 2);
    ctx.fillStyle = isPlayerTurn ? "#4caf50" : "#2196f3";
    ctx.fill();

    // Draw small pawn in center
    ctx.fillStyle = "#fff";
    ctx.font = "14px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(isPlayerTurn ? "♙" : "♟", 16, 16);

    const faviconUrl = canvas.toDataURL("image/png");

    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = faviconUrl;

    return () => {
      // Restore original favicon
      const origLink =
        document.querySelector<HTMLLinkElement>("link[rel~='icon']");
      if (origLink) origLink.href = "/favicon-32x32.png";
    };
  }, [isGameInProgress, game, playerColor]);

  // Keyboard shortcuts for Play page
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      if (e.key === "f" || e.key === "F") {
        // Flip board - handled by board component
        return;
      }

      const history = game.history({ verbose: true });
      if (history.length === 0) return;

      const currentIdx = viewMoveIdx === null ? history.length : viewMoveIdx;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        if (currentIdx > 1) {
          setViewMoveIdx(currentIdx - 1);
        } else if (currentIdx === 1) {
          setViewMoveIdx(0);
        }
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        if (currentIdx < history.length) {
          const nextIdx = currentIdx + 1;
          setViewMoveIdx(nextIdx >= history.length ? null : nextIdx);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [game, viewMoveIdx, setViewMoveIdx]);

  return (
    <Grid
      container
      gap={4}
      justifyContent="space-evenly"
      alignItems="start"
      sx={{ minHeight: "90vh" }}
    >
      <PageTitle title="Chesskit Play vs Stockfish" />

      <Board />

      <Grid
        container
        marginTop={{ xs: 0, md: "2.5em" }}
        justifyContent="flex-start"
        alignItems="stretch"
        borderRadius={3}
        size={{
          xs: 12,
          md: "grow",
        }}
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1a1a1e" : "#f8f8fa",
          border: "1px solid",
          borderColor: (theme) =>
            theme.palette.mode === "dark"
              ? "rgba(255, 255, 255, 0.06)"
              : "rgba(0, 0, 0, 0.06)",
          boxShadow: (theme) =>
            theme.palette.mode === "dark"
              ? "0 8px 32px rgba(0, 0, 0, 0.35)"
              : "0 8px 32px rgba(29, 36, 44, 0.08)",
          height: { xs: "auto", md: "calc(90vh - 60px)" },
          flexDirection: "column",
          display: "flex",
          maxWidth: "480px",
          width: "100%",
        }}
        padding={3}
      >
        {/* Matchup Header */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={1.5}
          width="100%"
          sx={{
            pb: 2,
            mb: 2,
            borderBottom: "1px solid",
            borderColor: (theme) =>
              theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.08)"
                : "rgba(0, 0, 0, 0.08)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              borderRadius: 2,
              backgroundColor: "rgba(201, 169, 110, 0.12)",
              color: "#C9A96E",
            }}
          >
            <Icon icon="streamline:chess-pawn" width={22} height={22} />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1" fontWeight={700}>
              Play vs Computer
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              flexWrap="wrap"
            >
              <Typography variant="caption" color="text.secondary">
                {playerColor === Color.White
                  ? "You (White) vs "
                  : `${engineLabel} vs `}
                {playerColor === Color.White
                  ? `${engineLabel} (${engineElo})`
                  : "You (Black)"}
              </Typography>
              {(() => {
                const opening = getOpeningName(game);
                if (!opening) return null;
                return (
                  <Chip
                    label={opening}
                    size="small"
                    sx={{
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      height: 20,
                      borderRadius: 1,
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark"
                          ? "rgba(201,169,110,0.1)"
                          : "rgba(201,169,110,0.08)",
                      color: "#C9A96E",
                      border: "1px solid",
                      borderColor: "rgba(201,169,110,0.2)",
                    }}
                  />
                );
              })()}
            </Stack>
          </Box>
          <Tooltip title="Flip board (F)">
            <IconButton
              size="small"
              onClick={() => setBoardFlipped((prev) => !prev)}
              sx={{
                color: "text.secondary",
                "&:hover": {
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark"
                      ? "rgba(255,255,255,0.06)"
                      : "rgba(0,0,0,0.04)",
                },
              }}
            >
              <Icon icon="eva:flip-fill" width={20} />
            </IconButton>
          </Tooltip>
        </Stack>

        {/* Move History (middle section - expands) */}
        <Box sx={{ flexGrow: 1, minHeight: 180, overflow: "hidden", mb: 2 }}>
          <PlayMoveHistory />
        </Box>

        {/* Bottom controls */}
        <Stack spacing={2} width="100%">
          <GameInProgress />
          {!isGameInProgress && (
            <Box width="100%" display="flex" justifyContent="center">
              <GameSettingsButton />
            </Box>
          )}
          <GameRecap />
        </Stack>
      </Grid>
    </Grid>
  );
}
