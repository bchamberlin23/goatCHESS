import { Box, Stack, Typography } from "@mui/material";
import { useGameDatabase } from "@/hooks/useGameDatabase";
import { useAtomValue } from "jotai";
import { gameAtom } from "../states";

export default function GamePanel() {
  const { gameFromUrl } = useGameDatabase();
  const game = useAtomValue(gameAtom);
  const gameHeaders = game.getHeaders();

  const hasGameInfo =
    gameFromUrl !== undefined ||
    (!!gameHeaders.White && gameHeaders.White !== "?");

  if (!hasGameInfo) return null;

  const termination =
    gameFromUrl?.termination || gameHeaders.Termination || "?";
  const result =
    termination.split(" ").length > 2
      ? termination
      : gameFromUrl?.result || gameHeaders.Result || "?";

  return (
    <Stack
      direction="row"
      alignItems="center"
      flexWrap="wrap"
      gap={0.75}
      marginTop={0.75}
      maxWidth="min(50rem, 100%)"
    >
      <MetaPill
        label="Site"
        value={gameFromUrl?.site || gameHeaders.Site || "?"}
      />
      <MetaPill
        label="Date"
        value={gameFromUrl?.date || gameHeaders.Date || "?"}
      />
      <MetaPill label="Result" value={result} />
    </Stack>
  );
}

function MetaPill({ label, value }: { label: string; value: string }) {
  return (
    <Box
      sx={{
        alignItems: "baseline",
        backgroundColor: "rgba(255, 255, 255, 0.045)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: 1,
        display: "inline-flex",
        gap: 0.75,
        maxWidth: { xs: "100%", md: "22rem" },
        padding: "0.25rem 0.55rem",
      }}
    >
      <Typography
        color="text.secondary"
        fontSize="0.72rem"
        fontWeight={700}
        letterSpacing={0}
        textTransform="uppercase"
      >
        {label}
      </Typography>

      <Typography fontSize="0.82rem" noWrap title={value}>
        {value}
      </Typography>
    </Box>
  );
}
