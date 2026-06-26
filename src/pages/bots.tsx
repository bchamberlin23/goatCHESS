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
import { useAtomValue, useSetAtom, useAtom } from "jotai";
import { useEffect } from "react";
import { ENGINE_LABELS } from "@/constants";
import { useLocalEngines } from "@/hooks/useLocalEngines";
import { getOpeningName } from "@/lib/chess";
import { Chess } from "chess.js";

export default function BotVsBot() {
  const game = useAtomValue(botGameAtom);
  const [, setGame] = useAtom(botGameAtom);
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

  // Update game headers when engine selections or elos change
  useEffect(() => {
    setGame((prev) => {
      // Only update if headers are different
      const currentHeaders = prev.getHeaders();
      if (
        currentHeaders.White === whiteLabel &&
        currentHeaders.Black === blackLabel &&
        currentHeaders.WhiteElo === String(whiteElo) &&
        currentHeaders.BlackElo === String(blackElo)
      ) {
        return prev;
      }

      // Create new game with same position but updated headers
      const newGame = new Chess(prev.fen());
      const headers = prev.getHeaders();
      for (const [key, val] of Object.entries(headers)) {
        if (val !== undefined) newGame.setHeader(key, val);
      }
      newGame.setHeader("White", whiteLabel);
      newGame.setHeader("Black", blackLabel);
      newGame.setHeader("WhiteElo", String(whiteElo));
      newGame.setHeader("BlackElo", String(blackElo));

      // Replay moves
      const history = prev.history({ verbose: true });
      for (const move of history) {
        newGame.move({
          from: move.from,
          to: move.to,
          promotion: move.promotion,
        });
      }
      return newGame;
    });
  }, [whiteLabel, blackLabel, whiteElo, blackElo, setGame]);

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
          overflow: "hidden",
        }}
        padding={3}
      >
        {/* Matchup header with eval */}
        <EvalHeader
          whiteLabel={whiteLabel}
          blackLabel={blackLabel}
          whiteElo={whiteElo}
          blackElo={blackElo}
        />

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
