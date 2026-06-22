import { useMemo, useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Stack,
  Typography,
  Button,
  Box,
  Divider,
  Paper,
  Tooltip,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { Chess } from "chess.js";
import { atom, useAtom } from "jotai";
import Board from "@/components/board";
import { Color } from "@/types/enums";
import { useChessActions } from "@/hooks/useChessActions";
import { useScreenSize } from "@/hooks/useScreenSize";

interface Props {
  open: boolean;
  onClose: () => void;
  initialFen: string;
  opponentMoveSan?: string;
  puzzleTitle?: string;
}

export default function AnalysisOverlay({
  open,
  onClose,
  initialFen,
  opponentMoveSan,
  puzzleTitle,
}: Props) {
  const screenSize = useScreenSize();

  const analysisGameAtom = useMemo(
    () => atom(new Chess(initialFen)),
    [initialFen]
  );
  const [game, setGame] = useAtom(analysisGameAtom);
  const { reset, undoMove } = useChessActions(analysisGameAtom);

  const [orientation, setOrientation] = useState<Color>(Color.White);

  const history = game.history();

  const boardSize = useMemo(() => {
    const width = screenSize.width;
    const height = screenSize.height;
    if (width < 900) return Math.min(width - 40, height - 300);
    return Math.min(width - 500, height * 0.7);
  }, [screenSize]);

  useEffect(() => {
    if (open && initialFen) {
      const chess = new Chess(initialFen);
      setGame(chess);
      setOrientation(chess.turn() as Color);
    }
  }, [open, initialFen, setGame]);

  const handleFlip = () => {
    setOrientation((prev) =>
      prev === Color.White ? Color.Black : Color.White
    );
  };

  const handleReset = () => {
    reset({ fen: initialFen, noHeaders: true });
  };

  const handleUndo = () => {
    undoMove();
  };

  const handleCopyFen = () => {
    navigator.clipboard.writeText(game.fen());
  };

  const handleCopyPgn = () => {
    navigator.clipboard.writeText(game.pgn() || "No moves played yet.");
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1a1a1e" : "#fbfbfb",
          backgroundImage: "none",
          borderRadius: 4,
          maxHeight: "90vh",
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 3,
          py: 2,
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(201, 169, 110, 0.15)",
              color: "primary.main",
              borderRadius: 2,
              p: 1,
            }}
          >
            <Icon icon="streamline:magnifying-glass-solid" height={22} />
          </Box>
          <Box>
            <Typography variant="h6" fontWeight={850}>
              Analysis Board
            </Typography>
            {puzzleTitle && (
              <Typography variant="caption" color="text.secondary">
                Analyzing: {puzzleTitle}
              </Typography>
            )}
          </Box>
        </Stack>
        <IconButton onClick={onClose} size="medium">
          <Icon icon="mdi:close" />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: { xs: 2, md: 3 }, overflowY: "auto" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems={{ xs: "center", md: "stretch" }}
        >
          {/* Left Column: Board */}
          <Box sx={{ flexShrink: 0, position: "relative" }}>
            <Board
              id="AnalysisBoard"
              gameAtom={analysisGameAtom}
              canPlay={true} // Allow free play for both sides
              boardSize={boardSize}
              boardOrientation={orientation}
              whitePlayer={{ name: "White" }}
              blackPlayer={{ name: "Black" }}
            />
          </Box>

          {/* Right Column: Panel Controls */}
          <Stack spacing={2} sx={{ flexGrow: 1, minWidth: { md: 320 } }}>
            <Paper
              elevation={0}
              sx={{
                flexGrow: 1,
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 3,
                p: 2.5,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark"
                    ? "rgba(255, 255, 255, 0.02)"
                    : "rgba(0, 0, 0, 0.01)",
                display: "flex",
                flexDirection: "column",
                minHeight: 250,
              }}
            >
              <Typography variant="subtitle2" fontWeight={800} gutterBottom>
                Move History
              </Typography>

              {opponentMoveSan && (
                <Box
                  sx={{
                    px: 1.5,
                    py: 1,
                    mb: 1.5,
                    borderRadius: 1.5,
                    backgroundColor: "action.hover",
                    borderLeft: "3px solid",
                    borderColor: "primary.main",
                  }}
                >
                  <Typography variant="caption" color="text.secondary">
                    Initial Position Opponent Move
                  </Typography>
                  <Typography variant="body2" fontWeight={700}>
                    {opponentMoveSan}
                  </Typography>
                </Box>
              )}

              <Box sx={{ flexGrow: 1, overflowY: "auto", maxH: 200, my: 1 }}>
                {history.length === 0 ? (
                  <Typography
                    color="text.secondary"
                    align="center"
                    sx={{ py: 4, fontStyle: "italic", fontSize: "0.85rem" }}
                  >
                    Play moves on the board to analyze.
                  </Typography>
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                      alignContent: "start",
                    }}
                  >
                    {history.map((move, index) => {
                      const isWhite = index % 2 === 0;
                      const moveNum = Math.floor(index / 2) + 1;

                      return (
                        <Box
                          key={index}
                          sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            fontSize: "0.88rem",
                            px: 1,
                            py: 0.5,
                            borderRadius: 1,
                            backgroundColor: "action.selected",
                            fontWeight: 600,
                          }}
                        >
                          {isWhite && (
                            <Typography
                              component="span"
                              variant="caption"
                              color="text.secondary"
                              sx={{ mr: 0.5 }}
                            >
                              {moveNum}.
                            </Typography>
                          )}
                          {move}
                        </Box>
                      );
                    })}
                  </Box>
                )}
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Navigation Controls */}
              <Stack direction="row" spacing={1} justifyContent="center">
                <Tooltip title="Reset to Start">
                  <IconButton onClick={handleReset}>
                    <Icon icon="lucide:rotate-ccw" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Undo Move">
                  <IconButton
                    onClick={handleUndo}
                    disabled={history.length === 0}
                  >
                    <Icon icon="lucide:undo" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Flip Board">
                  <IconButton onClick={handleFlip}>
                    <Icon icon="lucide:arrow-up-down" />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Paper>

            {/* Utility buttons */}
            <Stack direction="row" spacing={1.5}>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<Icon icon="lucide:copy" />}
                onClick={handleCopyFen}
                sx={{ py: 1 }}
              >
                Copy FEN
              </Button>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<Icon icon="lucide:share-2" />}
                onClick={handleCopyPgn}
                sx={{ py: 1 }}
              >
                Copy PGN
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
