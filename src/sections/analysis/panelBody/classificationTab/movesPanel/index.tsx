import { Box, Paper, Typography } from "@mui/material";
import MovesLine from "./movesLine";
import { useMemo } from "react";
import { useAtomValue } from "jotai";
import { boardAtom, gameAtom, gameEvalAtom } from "../../../states";
import { MoveClassification } from "@/types/enums";

export default function MovesPanel() {
  const game = useAtomValue(gameAtom);
  const board = useAtomValue(boardAtom);
  const gameEval = useAtomValue(gameEvalAtom);

  const gameMoves = useMemo(() => {
    const gameHistory = game.history();
    const boardHistory = board.history();
    const history = gameHistory.length ? gameHistory : boardHistory;

    if (!history.length) return undefined;

    const moves: { san: string; moveClassification?: MoveClassification }[][] =
      [];

    for (let i = 0; i < history.length; i += 2) {
      const items = [
        {
          san: history[i],
          moveClassification: gameHistory.length
            ? gameEval?.positions[i + 1]?.moveClassification
            : undefined,
        },
      ];

      if (history[i + 1]) {
        items.push({
          san: history[i + 1],
          moveClassification: gameHistory.length
            ? gameEval?.positions[i + 2]?.moveClassification
            : undefined,
        });
      }

      moves.push(items);
    }

    return moves;
  }, [game, board, gameEval]);

  if (!gameMoves?.length) return null;

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
        flex: 1,
        flexDirection: "column",
        minHeight: 0,
        minWidth: { xs: "100%", md: "24rem" },
        overflow: "hidden",
        padding: 1.5,
      }}
    >
      <Typography color="text.secondary" fontSize="0.72rem" fontWeight={700}>
        MOVE LIST
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.25,
          paddingTop: 1,
          scrollbarWidth: "thin",
          overflowY: "auto",
          flexGrow: 1,
          height: 0,
        }}
        id="moves-panel"
      >
        {gameMoves?.map((moves, idx) => (
          <MovesLine
            key={`${moves.map(({ san }) => san).join()}-${idx}`}
            moves={moves}
            moveNb={idx + 1}
          />
        ))}
      </Box>
    </Paper>
  );
}
