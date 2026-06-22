import {
  Button,
  CircularProgress,
  Typography,
  Box,
  Divider,
  Stack,
  keyframes,
} from "@mui/material";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  gameAtom,
  isGameInProgressAtom,
  playerColorAtom,
  enginePlaySelectionAtom,
  playViewMoveIndexAtom,
} from "./states";
import { useEffect } from "react";
import { Icon } from "@iconify/react";
import { ENGINE_LABELS } from "@/constants";
import { useLocalEngines } from "@/hooks/useLocalEngines";
import UndoMoveButton from "./undoMoveButton";

const pulseGreen = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 6px rgba(76, 175, 80, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);
  }
`;

const pulseBlue = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(33, 150, 243, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 6px rgba(33, 150, 243, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(33, 150, 243, 0);
  }
`;

export default function GameInProgress() {
  const game = useAtomValue(gameAtom);
  const [isGameInProgress, setIsGameInProgress] = useAtom(isGameInProgressAtom);
  const playerColor = useAtomValue(playerColorAtom);
  const engineSelection = useAtomValue(enginePlaySelectionAtom);
  const { getEngineLabel } = useLocalEngines();
  const setViewMoveIdx = useSetAtom(playViewMoveIndexAtom);

  useEffect(() => {
    if (game.isGameOver()) setIsGameInProgress(false);
  }, [game, setIsGameInProgress]);

  const handleResign = () => {
    setIsGameInProgress(false);
    setViewMoveIdx(null);
  };

  if (!isGameInProgress) return null;

  const isPlayerTurn = game.turn() === playerColor;
  const engineLabel =
    engineSelection.kind === "browser"
      ? ENGINE_LABELS[engineSelection.name]?.small || "Stockfish"
      : getEngineLabel(engineSelection.id);
  const moveNumber = Math.floor(game.history().length / 2) + 1;

  return (
    <Box sx={{ width: "100%", mt: 1 }}>
      <Stack spacing={2} sx={{ width: "100%" }}>
        {/* Turn indicator and status */}
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
            {/* Pulsing indicator dot */}
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: isPlayerTurn ? "#4caf50" : "#2196f3",
                animation: `${isPlayerTurn ? pulseGreen : pulseBlue} 2s infinite ease-in-out`,
              }}
            />
            <Typography variant="body2" fontWeight={600} color="text.primary">
              {isPlayerTurn ? "Your turn" : `${engineLabel} is thinking...`}
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            {!isPlayerTurn && (
              <CircularProgress size={14} thickness={6} color="primary" />
            )}
            <Typography
              variant="caption"
              color="text.secondary"
              fontWeight={500}
            >
              Move {moveNumber}
            </Typography>
          </Stack>
        </Stack>

        <Divider sx={{ opacity: 0.6 }} />

        {/* Action buttons */}
        <Stack direction="row" spacing={1.5} width="100%">
          <UndoMoveButton />

          <Button
            variant="contained"
            color="error"
            onClick={handleResign}
            startIcon={<Icon icon="mdi:flag-variant" />}
            fullWidth
            sx={{
              borderRadius: 2,
              py: 1,
              boxShadow: "none",
              "&:hover": {
                boxShadow: "none",
              },
            }}
          >
            Resign
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
