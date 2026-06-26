import { Box, Stack, Typography, Chip } from "@mui/material";
import { useAtomValue } from "jotai";
import { botGameAtom } from "./states";
import { getOpeningName } from "@/lib/chess";
import LiveEvalDisplay from "./LiveEvalDisplay";

interface EvalHeaderProps {
  whiteLabel: string;
  blackLabel: string;
  whiteElo: number;
  blackElo: number;
}

export default function EvalHeader({
  whiteLabel,
  blackLabel,
  whiteElo,
  blackElo,
}: EvalHeaderProps) {
  const game = useAtomValue(botGameAtom);

  const opening = getOpeningName(game);

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1.5}
      width="100%"
      sx={{
        pb: 2,
        mb: 2,
        borderBottom: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, 0.08)"
            : "rgba(0, 0, 0, 0.08)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 40,
          height: 40,
          borderRadius: 2,
          backgroundColor: "rgba(201, 169, 110, 0.12)",
          color: "#C9A96E",
        }}
      >
        <Typography fontSize="1.4rem">⚔️</Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1" fontWeight={700}>
          Bot vs Bot
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1} flexWrap="wrap">
          <Typography variant="caption" color="text.secondary">
            {whiteLabel} ({whiteElo}) vs {blackLabel} ({blackElo})
          </Typography>
          {opening && (
            <Chip
              label={opening}
              size="small"
              sx={{
                fontSize: "0.65rem",
                fontWeight: 600,
                height: 20,
                borderRadius: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark"
                    ? "rgba(201,169,110,0.1)"
                    : "rgba(201,169,110,0.08)",
                color: "#C9A96E",
                border: "1px solid",
                borderColor: "rgba(201,169,110,0.2)",
              }}
            />
          )}
        </Stack>
      </Box>
      <LiveEvalDisplay />
    </Stack>
  );
}
