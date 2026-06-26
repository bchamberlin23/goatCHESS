import { PageTitle } from "@/components/pageTitle";
import BotBoard from "@/sections/botVsBot/board";
import BotControls from "@/sections/botVsBot/BotControls";
import BotMoveHistory from "@/sections/botVsBot/BotMoveHistory";
import BotSettingsButton from "@/sections/botVsBot/BotSettingsButton";
import { useBotMatch } from "@/sections/botVsBot/useBotMatch";
import {
  botGameAtom,
  botBoardFlippedAtom,
  whiteEngineSelectionAtom,
  blackEngineSelectionAtom,
  whiteEngineEloAtom,
  blackEngineEloAtom,
} from "@/sections/botVsBot/states";
import { Grid2 as Grid, Box, Stack, Typography, Chip } from "@mui/material";
import { useAtomValue, useSetAtom } from "jotai";
import { useEffect } from "react";
import { ENGINE_LABELS } from "@/constants";
import { useLocalEngines } from "@/hooks/useLocalEngines";
import { getOpeningName } from "@/lib/chess";

export default function BotVsBot() {
  const game = useAtomValue(botGameAtom);
  const setBoardFlipped = useSetAtom(botBoardFlippedAtom);
  const whiteSelection = useAtomValue(whiteEngineSelectionAtom);
  const blackSelection = useAtomValue(blackEngineSelectionAtom);
  const whiteElo = useAtomValue(whiteEngineEloAtom);
  const blackElo = useAtomValue(blackEngineEloAtom);
  const { getEngineLabel } = useLocalEngines();

  const whiteLabel =
    whiteSelection.kind === "browser"
      ? ENGINE_LABELS[whiteSelection.name]?.small || "Stockfish"
      : getEngineLabel(whiteSelection.id);

  const blackLabel =
    blackSelection.kind === "browser"
      ? ENGINE_LABELS[blackSelection.name]?.small || "Stockfish"
      : getEngineLabel(blackSelection.id);

  useBotMatch();

  // Keyboard shortcuts for the bot-vs-bot page
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      if (e.key === "f" || e.key === "F") {
        setBoardFlipped((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setBoardFlipped]);

  return (
    <Grid
      container
      gap={4}
      justifyContent="space-evenly"
      alignItems="start"
      sx={{ minHeight: "90vh" }}
    >
      <PageTitle title="Chesskit Bot vs Bot" />

      <BotBoard />

      <Grid
        container
        marginTop={{ xs: 0, md: "2.5em" }}
        justifyContent="flex-start"
        alignItems="stretch"
        borderRadius={3}
        size={{
          xs: 12,
          md: "grow",
        }}
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1a1a1e" : "#f8f8fa",
          border: "1px solid",
          borderColor: (theme) =>
            theme.palette.mode === "dark"
              ? "rgba(255, 255, 255, 0.06)"
              : "rgba(0, 0, 0, 0.06)",
          boxShadow: (theme) =>
            theme.palette.mode === "dark"
              ? "0 8px 32px rgba(0, 0, 0, 0.35)"
              : "0 8px 32px rgba(29, 36, 44, 0.08)",
          height: { xs: "auto", md: "calc(90vh - 60px)" },
          flexDirection: "column",
          display: "flex",
          maxWidth: "480px",
          width: "100%",
        }}
        padding={3}
      >
        {/* Matchup header */}
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
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              flexWrap="wrap"
            >
              <Typography variant="caption" color="text.secondary">
                {whiteLabel} ({whiteElo}) vs {blackLabel} ({blackElo})
              </Typography>
              {(() => {
                const opening = getOpeningName(game);
                if (!opening) return null;
                return (
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
                );
              })()}
            </Stack>
          </Box>
        </Stack>

        {/* Move history */}
        <Box sx={{ flexGrow: 1, minHeight: 180, overflow: "hidden", mb: 2 }}>
          <BotMoveHistory />
        </Box>

        {/* Bottom controls */}
        <Stack spacing={2} width="100%">
          <BotControls />
          <Box width="100%" display="flex" justifyContent="center">
            <BotSettingsButton />
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}
