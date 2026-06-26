import { Box, Typography } from "@mui/material";
import { useAtomValue } from "jotai";
import { botEvalAtom } from "./states";

export default function LiveEvalDisplay() {
  const evalData = useAtomValue(botEvalAtom);

  if (!evalData || !evalData.lines[0]) {
    return null;
  }

  const bestLine = evalData.lines[0];
  let evalText = "0.0";
  let color = "#C9A96E";

  if (bestLine.mate !== undefined) {
    // Mate display
    const mateMoves = Math.abs(bestLine.mate);
    evalText = `M${mateMoves}`;
    color = bestLine.mate > 0 ? "#4caf50" : "#f44336";
  } else if (bestLine.cp !== undefined) {
    // Centipawn display
    const cpValue = bestLine.cp / 100;
    const sign = cpValue >= 0 ? "+" : "";
    evalText = `${sign}${cpValue.toFixed(2)}`;
    color = cpValue > 0 ? "#4caf50" : cpValue < 0 ? "#f44336" : "#C9A96E";
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        px: 1.5,
        py: 0.5,
        borderRadius: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, 0.05)"
            : "rgba(0, 0, 0, 0.03)",
      }}
    >
      <Typography
        variant="body2"
        fontWeight={700}
        sx={{ color, fontSize: "1.1rem" }}
      >
        {evalText}
      </Typography>
      {bestLine.depth > 0 && (
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ fontSize: "0.7rem" }}
        >
          d{bestLine.depth}
        </Typography>
      )}
    </Box>
  );
}
