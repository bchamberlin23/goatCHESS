import {
  Box,
  Grid2 as Grid,
  Grid2Props as GridProps,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import type { ReactNode } from "react";
import { useAtomValue } from "jotai";
import { boardAtom, gameAtom, gameEvalAtom } from "../../states";
import MoveInfo from "./moveInfo";
import Opening from "./opening";
import EngineLines from "./engineLines";
import { usePlayersData } from "@/hooks/usePlayersData";

export default function AnalysisTab(props: GridProps) {
  const gameEval = useAtomValue(gameEvalAtom);
  const game = useAtomValue(gameAtom);
  const board = useAtomValue(boardAtom);
  const { white, black } = usePlayersData(gameAtom);

  const boardHistory = board.history();
  const gameHistory = game.history();

  const isGameOver =
    boardHistory.length > 0 &&
    (board.isCheckmate() ||
      board.isDraw() ||
      boardHistory.join() === gameHistory.join());

  return (
    <Grid
      container
      size={12}
      justifyContent="center"
      alignItems="stretch"
      gap={1.5}
      marginY={{ lg: gameEval ? 0.25 : undefined }}
      {...props}
      flexGrow={1}
      sx={
        props.hidden
          ? { display: "none" }
          : {
              minHeight: 0,
              overflowY: "auto",
              flexGrow: 1,
              scrollbarWidth: "thin",
              ...props.sx,
            }
      }
    >
      <PanelSurface
        sx={{
          flex: "1 1 18rem",
          minWidth: { xs: "100%", lg: "18rem" },
        }}
      >
        <Typography color="text.secondary" fontSize="0.72rem" fontWeight={700}>
          PLAYERS
        </Typography>

        <Stack rowGap={1}>
          <PlayerSummary
            name={white.name}
            rating={white.rating}
            accuracy={gameEval?.accuracy.white}
            estimatedElo={gameEval?.estimatedElo?.white}
            color="white"
          />
          <PlayerSummary
            name={black.name}
            rating={black.rating}
            accuracy={gameEval?.accuracy.black}
            estimatedElo={gameEval?.estimatedElo?.black}
            color="black"
          />
        </Stack>
      </PanelSurface>

      <PanelSurface
        sx={{
          flex: "1 1 18rem",
          justifyContent: "center",
          minWidth: { xs: "100%", lg: "18rem" },
        }}
      >
        <Typography color="text.secondary" fontSize="0.72rem" fontWeight={700}>
          CURRENT MOVE
        </Typography>
        <MoveInfo />
        <Opening />

        {isGameOver && (
          <Typography color="text.secondary" fontSize="0.82rem" noWrap>
            Game is over
          </Typography>
        )}
      </PanelSurface>

      <PanelSurface
        sx={{
          flex: "1.6 1 25rem",
          minWidth: { xs: "100%", lg: "24rem" },
        }}
      >
        <Typography color="text.secondary" fontSize="0.72rem" fontWeight={700}>
          ENGINE LINES
        </Typography>
        <EngineLines size={12} />
      </PanelSurface>
    </Grid>
  );
}

function PanelSurface({
  children,
  sx,
}: {
  children: ReactNode;
  sx?: SxProps<Theme>;
}) {
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
        gap: 1.2,
        minHeight: "8rem",
        padding: 1.5,
        ...sx,
      }}
    >
      {children}
    </Paper>
  );
}

function PlayerSummary({
  name,
  rating,
  accuracy,
  estimatedElo,
  color,
}: {
  name: string;
  rating?: number;
  accuracy?: number;
  estimatedElo?: number;
  color: "white" | "black";
}) {
  const accent = color === "white" ? "#e8e2d8" : "#141416";

  return (
    <Box
      sx={{
        alignItems: "center",
        display: "grid",
        gap: 1,
        gridTemplateColumns: "minmax(0, 1fr) auto auto",
      }}
    >
      <Stack direction="row" alignItems="center" minWidth={0} spacing={1}>
        <Box
          sx={{
            backgroundColor: accent,
            border: "1px solid rgba(255, 255, 255, 0.16)",
            borderRadius: "50%",
            height: 24,
            width: 24,
          }}
        />
        <Box minWidth={0}>
          <Typography fontSize="0.9rem" fontWeight={650} noWrap title={name}>
            {name}
          </Typography>
          <Typography color="text.secondary" fontSize="0.72rem" noWrap>
            {rating ? `${rating} rapid` : "Unrated"}
          </Typography>
        </Box>
      </Stack>

      <MetricPill
        label="ACC"
        value={
          accuracy !== undefined && Number.isFinite(accuracy)
            ? `${accuracy.toFixed(1)}%`
            : "..."
        }
      />
      <MetricPill
        label="PERF"
        value={
          estimatedElo !== undefined && Number.isFinite(estimatedElo)
            ? Math.round(estimatedElo)
            : "..."
        }
      />
    </Box>
  );
}

function MetricPill({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.22)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: 1.25,
        minWidth: "3.9rem",
        padding: "0.28rem 0.45rem",
        textAlign: "center",
      }}
    >
      <Typography color="text.secondary" fontSize="0.62rem" fontWeight={700}>
        {label}
      </Typography>
      <Typography fontSize="0.86rem" fontWeight={700} lineHeight={1.1}>
        {value}
      </Typography>
    </Box>
  );
}
