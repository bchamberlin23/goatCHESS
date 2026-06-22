import { AggregatedInsights } from "@/types/insights";
import { MAIN_THEME_COLOR } from "@/constants";
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

interface InsightsHeaderProps {
  username: string;
  platform: "chesscom" | "lichess";
  report: AggregatedInsights;
  avgRating: number;
}

const PLATFORM_CONFIG = {
  chesscom: {
    label: "Chess.com",
    color: "#81b64c",
    icon: "simple-icons:chessdotcom",
  },
  lichess: {
    label: "Lichess",
    color: "#b583d6",
    icon: "simple-icons:lichess",
  },
};

export default function InsightsHeader({
  username,
  platform,
  report,
  avgRating,
}: InsightsHeaderProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const platformCfg = PLATFORM_CONFIG[platform];

  const { wins, draws, losses } = report.winRate;
  const accuracy = Number.isFinite(report.overallAccuracy)
    ? report.overallAccuracy
    : 0;
  const estimatedRating = Number.isFinite(report.estimatedRating)
    ? report.estimatedRating
    : 0;
  const safeAvgRating = Number.isFinite(avgRating) ? avgRating : 0;
  const ratingDiff = estimatedRating - safeAvgRating;

  // Animate the ring on mount
  const [animatedAccuracy, setAnimatedAccuracy] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setAnimatedAccuracy(accuracy), 100);
    return () => clearTimeout(timer);
  }, [accuracy]);

  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (animatedAccuracy / 100) * circumference;

  return (
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
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "center", md: "flex-start" }}
        spacing={{ xs: 3, md: 4 }}
      >
        {/* Left: Profile + Platform */}
        <Stack
          alignItems={{ xs: "center", md: "flex-start" }}
          spacing={1.5}
          sx={{ minWidth: 0 }}
        >
          {/* Username + Badge */}
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 44,
                height: 44,
                borderRadius: 2,
                background: isDark
                  ? "linear-gradient(135deg, rgba(201, 169, 110, 0.15), rgba(201, 169, 110, 0.05))"
                  : "linear-gradient(135deg, rgba(201, 169, 110, 0.2), rgba(201, 169, 110, 0.08))",
                border: `1px solid ${isDark ? "rgba(201, 169, 110, 0.2)" : "rgba(201, 169, 110, 0.3)"}`,
              }}
            >
              <Icon icon="mdi:account" width={26} color={MAIN_THEME_COLOR} />
            </Box>

            <Box sx={{ minWidth: 0 }}>
              <Typography
                fontSize="1.3rem"
                fontWeight={900}
                noWrap
                sx={{
                  background: `linear-gradient(135deg, ${MAIN_THEME_COLOR}, #e8d5a8)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {username}
              </Typography>

              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.5,
                  backgroundColor: `${platformCfg.color}18`,
                  border: `1px solid ${platformCfg.color}30`,
                  borderRadius: 1,
                  px: 0.8,
                  py: 0.15,
                }}
              >
                <Icon
                  icon={platformCfg.icon}
                  width={12}
                  color={platformCfg.color}
                />
                <Typography
                  fontSize="0.68rem"
                  fontWeight={700}
                  color={platformCfg.color}
                >
                  {platformCfg.label}
                </Typography>
              </Box>
            </Box>
          </Stack>

          {/* Total Games */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.75,
              backgroundColor: isDark
                ? "rgba(255, 255, 255, 0.05)"
                : "rgba(0, 0, 0, 0.04)",
              borderRadius: 1.5,
              px: 1.5,
              py: 0.5,
            }}
          >
            <Icon icon="mdi:chess-queen" width={16} color={MAIN_THEME_COLOR} />
            <Typography
              fontSize="0.82rem"
              fontWeight={700}
              color="text.secondary"
            >
              {report.totalGames} games analyzed
            </Typography>
          </Box>

          {/* Win/Draw/Loss Badges */}
          <Stack direction="row" spacing={0.75}>
            <ResultBadge label="W" count={wins} color="#22ac38" />
            <ResultBadge label="D" count={draws} color="#888" />
            <ResultBadge label="L" count={losses} color="#df5353" />
          </Stack>
        </Stack>

        {/* Center: Accuracy Ring */}
        <Stack alignItems="center" spacing={1} sx={{ flexShrink: 0 }}>
          <Typography
            fontSize="0.7rem"
            fontWeight={700}
            letterSpacing="0.08em"
            color="text.secondary"
            textTransform="uppercase"
          >
            Overall Accuracy
          </Typography>

          <Box sx={{ position: "relative", display: "inline-flex" }}>
            <svg width="110" height="110">
              {/* Background track */}
              <circle
                cx="55"
                cy="55"
                r={radius}
                fill="transparent"
                stroke={
                  isDark
                    ? "rgba(201, 169, 110, 0.08)"
                    : "rgba(201, 169, 110, 0.12)"
                }
                strokeWidth="7"
              />
              {/* Animated progress arc */}
              <circle
                cx="55"
                cy="55"
                r={radius}
                fill="transparent"
                stroke={MAIN_THEME_COLOR}
                strokeWidth="7"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                transform="rotate(-90 55 55)"
                style={{
                  transition:
                    "stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
                  filter: `drop-shadow(0 0 6px ${MAIN_THEME_COLOR}55)`,
                }}
              />
            </svg>
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                fontSize="1.5rem"
                fontWeight={900}
                color={MAIN_THEME_COLOR}
                lineHeight={1}
              >
                {accuracy.toFixed(1)}
              </Typography>
              <Typography
                fontSize="0.65rem"
                fontWeight={700}
                color="text.secondary"
              >
                %
              </Typography>
            </Box>
          </Box>
        </Stack>

        {/* Right: Estimated Performance Rating */}
        <Stack
          alignItems={{ xs: "center", md: "flex-end" }}
          spacing={1}
          sx={{ flexGrow: 1 }}
        >
          <Typography
            fontSize="0.7rem"
            fontWeight={700}
            letterSpacing="0.08em"
            color="text.secondary"
            textTransform="uppercase"
          >
            Est. Performance
          </Typography>

          <Typography
            fontSize="2.5rem"
            fontWeight={900}
            lineHeight={1}
            sx={{
              background: `linear-gradient(135deg, ${MAIN_THEME_COLOR}, #e8d5a8)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: `drop-shadow(0 2px 8px ${MAIN_THEME_COLOR}33)`,
            }}
          >
            {estimatedRating}
          </Typography>

          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Icon
              icon={
                ratingDiff >= 0 ? "mdi:arrow-up-bold" : "mdi:arrow-down-bold"
              }
              width={16}
              color={ratingDiff >= 0 ? "#22ac38" : "#df5353"}
            />
            <Typography
              fontSize="0.82rem"
              fontWeight={700}
              color={ratingDiff >= 0 ? "#22ac38" : "#df5353"}
            >
              {ratingDiff >= 0 ? "+" : ""}
              {ratingDiff}
            </Typography>
            <Typography
              fontSize="0.78rem"
              fontWeight={500}
              color="text.secondary"
            >
              vs avg {safeAvgRating}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
}

function ResultBadge({
  label,
  count,
  color,
}: {
  label: string;
  count: number;
  color: string;
}) {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 0.5,
        backgroundColor: `${color}14`,
        border: `1px solid ${color}30`,
        borderRadius: 1,
        px: 1,
        py: 0.25,
        transition: "all 0.2s ease",
        "&:hover": {
          backgroundColor: `${color}22`,
          transform: "translateY(-1px)",
        },
      }}
    >
      <Typography fontSize="0.72rem" fontWeight={800} color={color}>
        {label}
      </Typography>
      <Typography fontSize="0.78rem" fontWeight={900} color={color}>
        {count}
      </Typography>
    </Box>
  );
}
