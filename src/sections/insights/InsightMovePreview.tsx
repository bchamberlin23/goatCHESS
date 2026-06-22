import { RankedMove } from "@/types/insights";
import { CLASSIFICATION_COLORS, MAIN_THEME_COLOR } from "@/constants";
import { getMovePreviewPosition } from "@/lib/insights/movePreview";
import {
  Box,
  Button,
  ButtonBase,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { useEffect, useMemo, useState } from "react";
import { Chessboard } from "react-chessboard";
import { Arrow } from "react-chessboard/dist/chessboard/types";

interface InsightMovePreviewProps {
  move: RankedMove;
  rank?: number;
  isSelected: boolean;
  positive?: boolean;
  onPrimaryClick: () => void;
  compact?: boolean;
}

const LIGHT_SQUARE = "#edeed1";
const DARK_SQUARE = "#779952";
const DARK_MODE_LIGHT_SQUARE = "#ced6b0";
const DARK_MODE_DARK_SQUARE = "#6b8a5e";

export default function InsightMovePreview({
  move,
  rank,
  isSelected,
  positive = false,
  onPrimaryClick,
  compact = false,
}: InsightMovePreviewProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [isBoardOpen, setIsBoardOpen] = useState(false);
  const preview = useMemo(() => getMovePreviewPosition(move), [move]);

  const handleClick = () => {
    if (isSelected) {
      setIsBoardOpen(true);
      return;
    }

    onPrimaryClick();
  };

  return (
    <Box>
      <ButtonBase
        onClick={handleClick}
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: compact ? "6px 8px" : "8px 10px",
          borderRadius: 1.5,
          backgroundColor: isSelected
            ? isDark
              ? "rgba(201, 169, 110, 0.08)"
              : "rgba(201, 169, 110, 0.06)"
            : "transparent",
          border: "1px solid",
          borderColor: isSelected
            ? `${MAIN_THEME_COLOR}88`
            : "rgba(128, 128, 128, 0.08)",
          "&:hover": {
            backgroundColor: isDark
              ? "rgba(255, 255, 255, 0.04)"
              : "rgba(0, 0, 0, 0.03)",
          },
          transition: "background-color 0.15s ease, border-color 0.15s ease",
        }}
      >
        <MoveLabel move={move} rank={rank} compact={compact} isDark={isDark} />
        {!compact && <EvalBadge move={move} positive={positive} />}
      </ButtonBase>

      {isSelected && (
        <MiniBoard
          move={move}
          position={preview.beforeFen}
          isDark={isDark}
          onOpen={() => setIsBoardOpen(true)}
        />
      )}

      <MoveBoardDialog
        open={isBoardOpen}
        move={move}
        preview={preview}
        onClose={() => setIsBoardOpen(false)}
      />
    </Box>
  );
}

function MoveLabel({
  move,
  rank,
  compact,
  isDark,
}: {
  move: RankedMove;
  rank?: number;
  compact: boolean;
  isDark: boolean;
}) {
  const classColor = CLASSIFICATION_COLORS[move.classification];

  return (
    <Stack direction="row" alignItems="center" spacing={1} sx={{ minWidth: 0 }}>
      {rank !== undefined && (
        <Typography
          fontSize="0.68rem"
          fontWeight={800}
          color="text.secondary"
          sx={{ width: 18, textAlign: "center", flexShrink: 0 }}
        >
          {rank}
        </Typography>
      )}

      <Box
        sx={{
          width: compact ? 8 : 20,
          height: compact ? 8 : 20,
          borderRadius: "50%",
          backgroundColor: classColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          boxShadow: `0 1px 3px ${classColor}44`,
        }}
      >
        {!compact && <Icon icon="mdi:chess-pawn" width={12} color="#fff" />}
      </Box>

      <Box sx={{ minWidth: 0, textAlign: "left" }}>
        <Typography
          fontSize={compact ? "0.75rem" : "0.82rem"}
          fontWeight={800}
          noWrap
        >
          {move.moveNumber}. {move.moveSan}
        </Typography>
        <Typography
          fontSize={compact ? "0.65rem" : "0.62rem"}
          fontWeight={500}
          color="text.secondary"
          noWrap
          sx={{
            maxWidth: compact ? "16rem" : "12rem",
            color: isDark ? "rgba(255, 255, 255, 0.58)" : undefined,
          }}
        >
          {move.whiteName} vs {move.blackName}
        </Typography>
      </Box>
    </Stack>
  );
}

function EvalBadge({
  move,
  positive,
}: {
  move: RankedMove;
  positive: boolean;
}) {
  const evalDiff = move.evalAfter - move.evalBefore;
  const evalDiffDisplay =
    evalDiff >= 0 ? `+${evalDiff.toFixed(1)}` : evalDiff.toFixed(1);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 0.5,
        backgroundColor: positive
          ? "rgba(34, 172, 56, 0.1)"
          : "rgba(223, 83, 83, 0.1)",
        border: `1px solid ${
          positive ? "rgba(34, 172, 56, 0.2)" : "rgba(223, 83, 83, 0.2)"
        }`,
        borderRadius: 1,
        px: 0.75,
        py: 0.2,
        flexShrink: 0,
      }}
    >
      <Icon
        icon={positive ? "mdi:arrow-up-bold" : "mdi:arrow-down-bold"}
        width={12}
        color={positive ? "#22ac38" : "#df5353"}
      />
      <Typography
        fontSize="0.72rem"
        fontWeight={800}
        color={positive ? "#22ac38" : "#df5353"}
      >
        {evalDiffDisplay}
      </Typography>
    </Box>
  );
}

function MiniBoard({
  move,
  position,
  isDark,
  onOpen,
}: {
  move: RankedMove;
  position: string;
  isDark: boolean;
  onOpen: () => void;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        py: 1.5,
        px: 1,
      }}
    >
      <ButtonBase
        onClick={onOpen}
        sx={{
          borderRadius: 2,
          overflow: "hidden",
          border: "1px solid",
          borderColor: isDark
            ? "rgba(255, 255, 255, 0.08)"
            : "rgba(0, 0, 0, 0.08)",
          boxShadow: isDark
            ? "0 4px 16px rgba(0, 0, 0, 0.3)"
            : "0 4px 16px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Chessboard
          id={`mini-${move.gameId}-${move.moveIndex}`}
          position={position}
          boardWidth={180}
          arePiecesDraggable={false}
          customDarkSquareStyle={{
            backgroundColor: isDark ? DARK_MODE_DARK_SQUARE : DARK_SQUARE,
          }}
          customLightSquareStyle={{
            backgroundColor: isDark ? DARK_MODE_LIGHT_SQUARE : LIGHT_SQUARE,
          }}
        />
      </ButtonBase>
    </Box>
  );
}

function MoveBoardDialog({
  open,
  move,
  preview,
  onClose,
}: {
  open: boolean;
  move: RankedMove;
  preview: ReturnType<typeof getMovePreviewPosition>;
  onClose: () => void;
}) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const boardSize = isSmall ? 320 : 520;
  const [position, setPosition] = useState(preview.beforeFen);

  useEffect(() => {
    if (!open) return;
    setPosition(preview.beforeFen);
    const timeout = window.setTimeout(() => {
      setPosition(preview.afterFen);
    }, 350);

    return () => window.clearTimeout(timeout);
  }, [open, preview.afterFen, preview.beforeFen]);

  const arrowColor = CLASSIFICATION_COLORS[move.classification];
  const customArrows: Arrow[] = preview.arrow
    ? [[preview.arrow[0], preview.arrow[1], arrowColor] as Arrow]
    : [];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            backgroundColor: isDark ? "#171719" : "#f8f7f3",
            borderRadius: 3,
          },
        },
      }}
    >
      <DialogContent sx={{ p: { xs: 2, sm: 3 } }}>
        <Stack spacing={2}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box sx={{ minWidth: 0 }}>
              <Typography fontSize="1rem" fontWeight={900} noWrap>
                {move.moveNumber}. {move.moveSan}
              </Typography>
              <Typography fontSize="0.78rem" color="text.secondary" noWrap>
                {move.whiteName} vs {move.blackName}
              </Typography>
            </Box>
            <IconButton onClick={onClose} aria-label="Close move board">
              <Icon icon="mdi:close" width={20} />
            </IconButton>
          </Stack>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: isDark
                  ? "0 18px 48px rgba(0, 0, 0, 0.45)"
                  : "0 18px 48px rgba(48, 38, 16, 0.18)",
              }}
            >
              <Chessboard
                id={`large-${move.gameId}-${move.moveIndex}`}
                position={position}
                boardWidth={boardSize}
                arePiecesDraggable={false}
                animationDuration={500}
                customArrows={customArrows}
                customDarkSquareStyle={{
                  backgroundColor: isDark ? DARK_MODE_DARK_SQUARE : DARK_SQUARE,
                }}
                customLightSquareStyle={{
                  backgroundColor: isDark
                    ? DARK_MODE_LIGHT_SQUARE
                    : LIGHT_SQUARE,
                }}
              />
            </Box>
          </Box>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
            <Button
              onClick={() => {
                setPosition(preview.beforeFen);
                window.setTimeout(() => setPosition(preview.afterFen), 100);
              }}
              startIcon={<Icon icon="mdi:replay" />}
              variant="outlined"
              sx={{ textTransform: "none", fontWeight: 750 }}
            >
              Replay move
            </Button>
            <Typography
              fontSize="0.78rem"
              color="text.secondary"
              sx={{ alignSelf: "center" }}
            >
              The board starts from the position before the move, then animates
              to the move that was played.
            </Typography>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
