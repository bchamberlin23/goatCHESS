import { Grid2 as Grid } from "@mui/material";
import GamePanel from "./gamePanel";
import LoadGame from "./loadGame";
import AnalyzeButton from "./analyzeButton";
import LinearProgressBar from "@/components/LinearProgressBar";
import { useAtomValue } from "jotai";
import { evaluationProgressAtom } from "../states";

export default function PanelHeader() {
  const evaluationProgress = useAtomValue(evaluationProgressAtom);

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="flex-start"
      rowGap={1.5}
      columnGap={2}
      size={12}
    >
      <Grid
        container
        justifyContent="flex-start"
        alignItems="center"
        columnGap={1.25}
        size={{ xs: 12, md: "grow" }}
      >
        <GamePanel />
      </Grid>

      <Grid
        container
        justifyContent={{ xs: "flex-start", md: "flex-end" }}
        alignItems="center"
        rowGap={1}
        columnGap={1}
        size={{ xs: 12, md: "auto" }}
      >
        <LoadGame />
        <AnalyzeButton />
        <LinearProgressBar value={evaluationProgress} label="Analyzing..." />
      </Grid>
    </Grid>
  );
}
