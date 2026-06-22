import { LoadedGame } from "@/types/game";
import { MAIN_THEME_COLOR } from "@/constants";
import {
  Box,
  Button,
  Fade,
  LinearProgress,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { useMemo } from "react";

interface InsightsProgressProps {
  progress: number;
  currentGame: number;
  totalGames: number;
  currentGameInfo?: LoadedGame;
  onCancel: () => void;
  startTime: number;
}

export default function InsightsProgress({
  progress,
  currentGame,
  totalGames,
  currentGameInfo,
  onCancel,
  startTime,
}: InsightsProgressProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const estimatedTimeRemaining = useMemo(() => {
    if (progress <= 0 || currentGame <= 0) return null;

    const elapsed = Date.now() - startTime;
    const msPerGame = elapsed / currentGame;
    const gamesRemaining = totalGames - currentGame;
    const remainingMs = msPerGame * gamesRemaining;

    if (remainingMs < 1000) return "Almost done…";

    const seconds = Math.ceil(remainingMs / 1000);
    if (seconds < 60) return `~${seconds}s remaining`;

    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `~${minutes}m ${secs}s remaining`;
  }, [progress, currentGame, totalGames, startTime]);

  return (
    <Fade in timeout={400}>
      <Paper
        elevation={0}
        sx={{
          backgroundColor: isDark
            ? "rgba(255, 255, 255, 0.035)"
            : "rgba(255, 255, 255, 0.72)",
          border: "1px solid",
          borderColor: isDark
            ? "rgba(255, 255, 255, 0.08)"
            : "rgba(0, 0, 0, 0.07)",
          borderRadius: 3,
          padding: { xs: 2, sm: 3 },
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Header */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: 2.5 }}
        >
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 36,
                height: 36,
                borderRadius: 2,
                background: `linear-gradient(135deg, ${MAIN_THEME_COLOR}22, ${MAIN_THEME_COLOR}08)`,
                border: `1px solid ${MAIN_THEME_COLOR}20`,
                animation: "pulse 2s ease-in-out infinite",
                "@keyframes pulse": {
                  "0%, 100%": { opacity: 1 },
                  "50%": { opacity: 0.6 },
                },
              }}
            >
              <Icon icon="mdi:brain" width={20} color={MAIN_THEME_COLOR} />
            </Box>

            <Box>
              <Typography fontSize="0.95rem" fontWeight={800}>
                Analyzing Games
              </Typography>
              <Typography
                fontSize="0.72rem"
                fontWeight={600}
                color="text.secondary"
              >
                Evaluating positions with Stockfish
              </Typography>
            </Box>
          </Stack>

          <Button
            variant="outlined"
            onClick={onCancel}
            size="small"
            startIcon={<Icon icon="mdi:close" width={16} />}
            sx={{
              textTransform: "none",
              fontWeight: 700,
              fontSize: "0.78rem",
              borderColor: isDark
                ? "rgba(255, 255, 255, 0.12)"
                : "rgba(0, 0, 0, 0.12)",
              color: "text.secondary",
              borderRadius: 2,
              px: 2,
              "&:hover": {
                borderColor: "#df5353",
                color: "#df5353",
                backgroundColor: "rgba(223, 83, 83, 0.08)",
              },
              transition: "all 0.2s ease",
            }}
          >
            Cancel
          </Button>
        </Stack>

        {/* Progress Bar */}
        <Box sx={{ mb: 2 }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mb: 0.75 }}
          >
            <Typography
              fontSize="0.78rem"
              fontWeight={700}
              color="text.primary"
            >
              Analyzing game {currentGame} of {totalGames}…
            </Typography>
            <Typography
              fontSize="0.82rem"
              fontWeight={900}
              color={MAIN_THEME_COLOR}
            >
              {progress.toFixed(0)}%
            </Typography>
          </Stack>

          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 8,
              borderRadius: 4,
              backgroundColor: isDark
                ? "rgba(255, 255, 255, 0.06)"
                : "rgba(0, 0, 0, 0.06)",
              "& .MuiLinearProgress-bar": {
                backgroundColor: MAIN_THEME_COLOR,
                borderRadius: 4,
                backgroundImage: `linear-gradient(90deg, ${MAIN_THEME_COLOR}, #e8d5a8, ${MAIN_THEME_COLOR})`,
                backgroundSize: "200% 100%",
                animation: "shimmer 2s linear infinite",
                "@keyframes shimmer": {
                  "0%": { backgroundPosition: "200% 0" },
                  "100%": { backgroundPosition: "-200% 0" },
                },
              },
            }}
          />
        </Box>

        {/* Current Game Info + ETA */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          justifyContent="space-between"
          spacing={1}
        >
          {currentGameInfo && (
            <Fade in key={currentGameInfo.id} timeout={300}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  backgroundColor: isDark
                    ? "rgba(255, 255, 255, 0.03)"
                    : "rgba(0, 0, 0, 0.025)",
                  borderRadius: 1.5,
                  px: 1.5,
                  py: 0.65,
                  border: "1px solid",
                  borderColor: isDark
                    ? "rgba(255, 255, 255, 0.04)"
                    : "rgba(0, 0, 0, 0.03)",
                }}
              >
                <Icon
                  icon="mdi:chess-pawn"
                  width={14}
                  color={MAIN_THEME_COLOR}
                />
                <Typography
                  fontSize="0.75rem"
                  fontWeight={700}
                  noWrap
                  sx={{ maxWidth: 200 }}
                >
                  {currentGameInfo.white.name} vs {currentGameInfo.black.name}
                </Typography>

                {currentGameInfo.timeControl && (
                  <>
                    <Box
                      sx={{
                        width: "1px",
                        height: 12,
                        backgroundColor: isDark
                          ? "rgba(255, 255, 255, 0.1)"
                          : "rgba(0, 0, 0, 0.08)",
                      }}
                    />
                    <Stack direction="row" alignItems="center" spacing={0.35}>
                      <Icon
                        icon="mdi:clock-outline"
                        width={12}
                        color={isDark ? "#777" : "#999"}
                      />
                      <Typography
                        fontSize="0.68rem"
                        fontWeight={600}
                        color="text.secondary"
                      >
                        {currentGameInfo.timeControl}
                      </Typography>
                    </Stack>
                  </>
                )}
              </Box>
            </Fade>
          )}

          {estimatedTimeRemaining && (
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Icon
                icon="mdi:clock-outline"
                width={14}
                color={isDark ? "#666" : "#aaa"}
              />
              <Typography
                fontSize="0.72rem"
                fontWeight={600}
                color="text.secondary"
              >
                {estimatedTimeRemaining}
              </Typography>
            </Stack>
          )}
        </Stack>
      </Paper>
    </Fade>
  );
}
