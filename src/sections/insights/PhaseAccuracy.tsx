import { AggregatedInsights } from "@/types/insights";
import { MAIN_THEME_COLOR } from "@/constants";
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

interface PhaseAccuracyProps {
  data: AggregatedInsights;
}

const PHASE_CONFIG = [
  {
    key: "opening" as const,
    label: "Opening",
    icon: "mdi:chess-rook",
  },
  {
    key: "middlegame" as const,
    label: "Middlegame",
    icon: "mdi:chess-queen",
  },
  {
    key: "endgame" as const,
    label: "Endgame",
    icon: "mdi:chess-king",
  },
];

function getAccuracyColor(accuracy: number): string {
  if (accuracy >= 85) return "#22ac38";
  if (accuracy >= 70) return "#74b038";
  if (accuracy >= 55) return MAIN_THEME_COLOR;
  if (accuracy >= 40) return "#e69f00";
  return "#df5353";
}

function getAccuracyLabel(accuracy: number): string {
  if (accuracy >= 90) return "Excellent";
  if (accuracy >= 80) return "Great";
  if (accuracy >= 70) return "Good";
  if (accuracy >= 55) return "Okay";
  if (accuracy >= 40) return "Needs Work";
  return "Poor";
}

export default function PhaseAccuracy({ data }: PhaseAccuracyProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

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
      }}
    >
      {/* Header */}
      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2.5 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 32,
            height: 32,
            borderRadius: 1.5,
            background: `linear-gradient(135deg, ${MAIN_THEME_COLOR}22, ${MAIN_THEME_COLOR}08)`,
          }}
        >
          <Icon icon="mdi:chart-arc" width={18} color={MAIN_THEME_COLOR} />
        </Box>
        <Box>
          <Typography fontSize="0.95rem" fontWeight={800}>
            Phase Accuracy
          </Typography>
          <Typography
            fontSize="0.68rem"
            fontWeight={600}
            color="text.secondary"
          >
            Your performance by game phase
          </Typography>
        </Box>
      </Stack>

      {/* Three arcs */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 3, sm: 2 }}
        justifyContent="space-around"
        alignItems="center"
      >
        {PHASE_CONFIG.map((phase) => {
          const accuracy = data.phaseAccuracy[phase.key];
          return (
            <PhaseArc
              key={phase.key}
              label={phase.label}
              icon={phase.icon}
              accuracy={accuracy}
              isDark={isDark}
            />
          );
        })}
      </Stack>
    </Paper>
  );
}

function PhaseArc({
  label,
  icon,
  accuracy,
  isDark,
}: {
  label: string;
  icon: string;
  accuracy: number;
  isDark: boolean;
}) {
  const [animatedAccuracy, setAnimatedAccuracy] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedAccuracy(accuracy), 150);
    return () => clearTimeout(timer);
  }, [accuracy]);

  const color = getAccuracyColor(accuracy);
  const qualityLabel = getAccuracyLabel(accuracy);

  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  // Only use ~75% of the circle (270 degrees) for a nice arc look
  const arcLength = circumference * 0.75;
  const arcOffset = arcLength - (animatedAccuracy / 100) * arcLength;

  return (
    <Stack alignItems="center" spacing={1}>
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <svg width="100" height="100" viewBox="0 0 100 100">
          {/* Background arc */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke={
              isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.06)"
            }
            strokeWidth="6"
            strokeDasharray={`${arcLength} ${circumference}`}
            strokeLinecap="round"
            transform="rotate(135 50 50)"
          />
          {/* Colored progress arc */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth="6"
            strokeDasharray={`${arcLength} ${circumference}`}
            strokeDashoffset={arcOffset}
            strokeLinecap="round"
            transform="rotate(135 50 50)"
            style={{
              transition: "stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1)",
              filter: `drop-shadow(0 0 4px ${color}55)`,
            }}
          />
        </svg>

        {/* Center content */}
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
            fontSize="1.25rem"
            fontWeight={900}
            color={color}
            lineHeight={1}
          >
            {accuracy.toFixed(0)}
          </Typography>
          <Typography
            fontSize="0.55rem"
            fontWeight={700}
            color="text.secondary"
          >
            %
          </Typography>
        </Box>
      </Box>

      {/* Label */}
      <Stack alignItems="center" spacing={0.25}>
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Icon icon={icon} width={14} color={color} />
          <Typography fontSize="0.82rem" fontWeight={750}>
            {label}
          </Typography>
        </Stack>
        <Typography fontSize="0.65rem" fontWeight={650} color={color}>
          {qualityLabel}
        </Typography>
      </Stack>
    </Stack>
  );
}
