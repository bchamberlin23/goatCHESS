import { Box, Button, Stack, Typography, Chip, Tooltip } from "@mui/material";
import { Icon } from "@iconify/react";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  botGameAtom,
  botIsRunningAtom,
  botIsPausedAtom,
  botViewMoveIndexAtom,
  botBoardFlippedAtom,
  whiteEngineSelectionAtom,
  blackEngineSelectionAtom,
} from "./states";
import { useChessActions } from "@/hooks/useChessActions";
import { useLocalEngines } from "@/hooks/useLocalEngines";
import { ENGINE_LABELS } from "@/constants";
export default function BotControls() {
  const game = useAtomValue(botGameAtom);
  const [isRunning, setIsRunning] = useAtom(botIsRunningAtom);
  const [isPaused, setIsPaused] = useAtom(botIsPausedAtom);
  const setViewMoveIdx = useSetAtom(botViewMoveIndexAtom);
  const setBoardFlipped = useSetAtom(botBoardFlippedAtom);
  const whiteSelection = useAtomValue(whiteEngineSelectionAtom);
  const blackSelection = useAtomValue(blackEngineSelectionAtom);
  const { reset: resetGame } = useChessActions(botGameAtom);
  const { getEngineLabel } = useLocalEngines();

  const whiteLabel =
    whiteSelection.kind === "browser"
      ? ENGINE_LABELS[whiteSelection.name]?.small || "Stockfish"
      : getEngineLabel(whiteSelection.id);

  const blackLabel =
    blackSelection.kind === "browser"
      ? ENGINE_LABELS[blackSelection.name]?.small || "Stockfish"
      : getEngineLabel(blackSelection.id);

  const handleStart = () => {
    if (game.isGameOver()) {
      resetGame({
        white: { name: whiteLabel },
        black: { name: blackLabel },
      });
    }
    setViewMoveIdx(null);
    setIsPaused(false);
    setIsRunning(true);
  };

  const handlePauseResume = () => {
    setIsPaused((prev) => !prev);
  };

  const handleStop = () => {
    setIsRunning(false);
    setIsPaused(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsPaused(false);
    setViewMoveIdx(null);
    resetGame({
      white: { name: whiteLabel },
      black: { name: blackLabel },
    });
  };

  const isGameOver = game.isGameOver();
  const moveNumber = Math.floor(game.history().length / 2) + 1;

  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2} sx={{ width: "100%" }}>
        {/* Status header */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            p: 1.5,
            borderRadius: 1.5,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.02)"
                : "rgba(0, 0, 0, 0.02)",
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: isRunning && !isPaused ? "#4caf50" : "#f44336",
                animation:
                  isRunning && !isPaused
                    ? "pulse 2s infinite ease-in-out"
                    : "none",
                "@keyframes pulse": {
                  "0%": { transform: "scale(0.95)", opacity: 1 },
                  "70%": { transform: "scale(1)", opacity: 0.6 },
                  "100%": { transform: "scale(0.95)", opacity: 1 },
                },
              }}
            />
            <Typography variant="body2" fontWeight={600} color="text.primary">
              {isRunning && !isPaused
                ? `${game.turn() === "w" ? whiteLabel : blackLabel} is thinking...`
                : isGameOver
                  ? "Match finished"
                  : "Match paused"}
            </Typography>
          </Stack>

          <Chip
            label={`Move ${moveNumber}`}
            size="small"
            sx={{
              fontSize: "0.65rem",
              fontWeight: 600,
              height: 22,
              borderRadius: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.06)"
                  : "rgba(0,0,0,0.05)",
            }}
          />
        </Stack>

        {/* Control buttons */}
        <Stack direction="row" spacing={1.5} width="100%">
          {isRunning && !isGameOver ? (
            <Button
              variant="contained"
              color={isPaused ? "success" : "warning"}
              onClick={handlePauseResume}
              startIcon={<Icon icon={isPaused ? "mdi:play" : "mdi:pause"} />}
              fullWidth
              sx={{ borderRadius: 2, py: 1, boxShadow: "none" }}
            >
              {isPaused ? "Resume" : "Pause"}
            </Button>
          ) : (
            <Button
              variant="contained"
              color="success"
              onClick={handleStart}
              startIcon={<Icon icon="mdi:play" />}
              fullWidth
              sx={{ borderRadius: 2, py: 1, boxShadow: "none" }}
            >
              {isGameOver ? "Restart" : "Start"}
            </Button>
          )}

          <Button
            variant="outlined"
            color="error"
            onClick={handleStop}
            disabled={!isRunning}
            startIcon={<Icon icon="mdi:stop" />}
            fullWidth
            sx={{ borderRadius: 2, py: 1 }}
          >
            Stop
          </Button>

          <Button
            variant="outlined"
            onClick={handleReset}
            startIcon={<Icon icon="mdi:refresh" />}
            fullWidth
            sx={{ borderRadius: 2, py: 1 }}
          >
            Reset
          </Button>
        </Stack>

        <Stack direction="row" spacing={1.5} width="100%">
          <Tooltip title="Flip board (F)">
            <Button
              variant="outlined"
              onClick={() => setBoardFlipped((prev) => !prev)}
              startIcon={<Icon icon="eva:flip-fill" />}
              fullWidth
              sx={{ borderRadius: 2, py: 1 }}
            >
              Flip
            </Button>
          </Tooltip>
        </Stack>
      </Stack>
    </Box>
  );
}
