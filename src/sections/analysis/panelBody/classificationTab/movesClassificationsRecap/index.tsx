import { usePlayersData } from "@/hooks/usePlayersData";
import { Grid2 as Grid, Paper, Typography } from "@mui/material";
import { gameAtom, gameEvalAtom } from "../../../states";
import { MoveClassification } from "@/types/enums";
import ClassificationRow from "./classificationRow";
import { useAtomValue } from "jotai";

export default function MovesClassificationsRecap() {
  const { white, black } = usePlayersData(gameAtom);
  const gameEval = useAtomValue(gameEvalAtom);

  if (!gameEval?.positions.length) return null;

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
        flex: "0 1 25rem",
        minWidth: { xs: "100%", md: "21rem" },
        overflow: "hidden",
        padding: 1.5,
      }}
    >
      <Typography color="text.secondary" fontSize="0.72rem" fontWeight={700}>
        MOVE QUALITY
      </Typography>

      <Grid
        container
        alignItems="center"
        justifyContent="space-evenly"
        wrap="nowrap"
        size={12}
        marginTop={1}
      >
        <Typography width="7rem" align="center" noWrap fontSize="0.78rem">
          {white.name}
        </Typography>

        <Typography width="7rem" />

        <Typography width="7rem" align="center" noWrap fontSize="0.78rem">
          {black.name}
        </Typography>
      </Grid>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        rowGap={0.55}
        sx={{ scrollbarWidth: "thin", overflowY: "auto" }}
        maxHeight={{ xs: "18rem", lg: "100%" }}
        marginTop={0.75}
      >
        {sortedMoveClassfications.map((classification) => (
          <ClassificationRow
            key={classification}
            classification={classification}
          />
        ))}
      </Grid>
    </Paper>
  );
}

export const sortedMoveClassfications = [
  MoveClassification.Splendid,
  MoveClassification.Perfect,
  MoveClassification.Best,
  MoveClassification.Excellent,
  MoveClassification.Okay,
  MoveClassification.Opening,
  MoveClassification.Inaccuracy,
  MoveClassification.Mistake,
  MoveClassification.Blunder,
];
