import { Box, Paper, Typography, useTheme } from "@mui/material";
import { useAtom } from "jotai";
import { useMemo, useEffect, useRef } from "react";
import PrettyMoveSan from "@/components/prettyMoveSan";
import { botGameAtom, botViewMoveIndexAtom } from "./states";

export default function BotMoveHistory() {
  const [game] = useAtom(botGameAtom);
  const [viewMoveIdx, setViewMoveIdx] = useAtom(botViewMoveIndexAtom);
  const scrollRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  const history = useMemo(() => {
    return game.history({ verbose: true });
  }, [game]);

  const currentMoveIdx = viewMoveIdx === null ? history.length : viewMoveIdx;

  const gameMoves = useMemo(() => {
    const moves: { san: string; color: "w" | "b"; idx: number }[][] = [];
    for (let i = 0; i < history.length; i += 2) {
      const pair: { san: string; color: "w" | "b"; idx: number }[] = [
        {
          san: history[i].san,
          color: "w",
          idx: i + 1,
        },
      ];
      if (history[i + 1]) {
        pair.push({
          san: history[i + 1].san,
          color: "b",
          idx: i + 2,
        });
      }
      moves.push(pair);
    }
    return moves;
  }, [history]);

  useEffect(() => {
    if (scrollRef.current) {
      const activeElement = scrollRef.current.querySelector(
        "[data-active='true']"
      );
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
      } else {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    }
  }, [currentMoveIdx, gameMoves]);

  const handleMoveClick = (idx: number) => {
    if (idx === history.length) {
      setViewMoveIdx(null);
    } else {
      setViewMoveIdx(idx);
    }
  };

  const getResultText = () => {
    if (!game.isGameOver()) return null;
    if (game.isCheckmate()) {
      const loser = game.turn() === "w" ? "White" : "Black";
      return `Checkmate • ${loser === "White" ? "Black" : "White"} wins`;
    }
    if (game.isDraw()) {
      if (game.isStalemate()) return "Draw • Stalemate";
      if (game.isThreefoldRepetition()) return "Draw • Threefold Repetition";
      if (game.isInsufficientMaterial()) return "Draw • Insufficient Material";
      return "Draw";
    }
    return "Game Over";
  };

  const resultText = getResultText();

  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, 0.035)"
            : "rgba(255, 255, 255, 0.72)",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, 0.08)"
            : "rgba(0, 0, 0, 0.07)",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "100%",
        height: "100%",
        minHeight: 180,
        overflow: "hidden",
        padding: 1.5,
        boxSizing: "border-box",
      }}
    >
      <Typography color="text.secondary" fontSize="0.72rem" fontWeight={700}>
        MOVE LIST
      </Typography>

      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.25,
          paddingTop: 1,
          scrollbarWidth: "thin",
          overflowY: "auto",
          overflowX: "hidden",
          flexGrow: 1,
          minWidth: 0,
        }}
      >
        {gameMoves.length === 0 ? (
          <Typography
            color="text.secondary"
            variant="body2"
            sx={{ fontStyle: "italic", p: 1, textAlign: "center" }}
          >
            No moves played yet.
          </Typography>
        ) : (
          gameMoves.map((pair, rowIdx) => {
            const moveNb = rowIdx + 1;
            return (
              <Box
                key={rowIdx}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "2rem 1fr 1fr",
                  alignItems: "center",
                  width: "100%",
                  paddingY: 0.25,
                  borderRadius: 0.5,
                  overflow: "hidden",
                  "&:hover": {
                    backgroundColor: (theme) =>
                      theme.palette.mode === "dark"
                        ? "rgba(255, 255, 255, 0.02)"
                        : "rgba(0, 0, 0, 0.02)",
                  },
                }}
              >
                <Typography
                  color="text.secondary"
                  fontSize="0.85rem"
                  fontWeight={600}
                  sx={{ paddingLeft: 0.75 }}
                >
                  {moveNb}.
                </Typography>

                {pair.map((move) => {
                  const isActive = currentMoveIdx === move.idx;
                  return (
                    <Box
                      key={move.idx}
                      onClick={() => handleMoveClick(move.idx)}
                      data-active={isActive}
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        padding: "0.25rem 0.5rem",
                        borderRadius: 1,
                        minWidth: 0,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        backgroundColor: isActive
                          ? theme.palette.mode === "dark"
                            ? "rgba(255, 255, 255, 0.12)"
                            : "rgba(0, 0, 0, 0.08)"
                          : "transparent",
                        color: isActive
                          ? theme.palette.text.primary
                          : theme.palette.text.secondary,
                        "&:hover": {
                          backgroundColor: !isActive
                            ? theme.palette.mode === "dark"
                              ? "rgba(255, 255, 255, 0.05)"
                              : "rgba(0, 0, 0, 0.04)"
                            : undefined,
                        },
                        transition: "all 0.15s ease",
                      }}
                    >
                      <PrettyMoveSan
                        san={move.san}
                        color={move.color}
                        typographyProps={{
                          fontSize: "0.88rem",
                          fontWeight: isActive ? 750 : 500,
                        }}
                      />
                    </Box>
                  );
                })}

                {pair.length === 1 && <Box />}
              </Box>
            );
          })
        )}
      </Box>

      {resultText && (
        <Box
          sx={{
            borderTop: "1px solid",
            borderColor: (theme) =>
              theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.08)"
                : "rgba(0, 0, 0, 0.07)",
            pt: 1.5,
            mt: 1,
            textAlign: "center",
          }}
        >
          <Typography variant="subtitle2" fontWeight={600} color="text.primary">
            {resultText}
          </Typography>
        </Box>
      )}
    </Paper>
  );
}
