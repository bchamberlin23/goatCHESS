import { AggregatedInsights } from "@/types/insights";
import { MAIN_THEME_COLOR } from "@/constants";
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import { useMemo } from "react";

const ACTUAL_RATING_COLOR = "#3894eb";
const ESTIMATED_ELO_COLOR = MAIN_THEME_COLOR;

interface RatingTrendChartProps {
  data: AggregatedInsights;
}

function CustomTooltip({
  active,
  payload,
  label,
}: TooltipProps<number, string>) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  if (!active || !payload?.length) return null;

  return (
    <Box
      sx={{
        backgroundColor: isDark
          ? "rgba(22, 22, 24, 0.95)"
          : "rgba(255, 255, 255, 0.95)",
        border: "1px solid",
        borderColor: isDark
          ? "rgba(255, 255, 255, 0.1)"
          : "rgba(0, 0, 0, 0.08)",
        borderRadius: 2,
        padding: "10px 14px",
        backdropFilter: "blur(8px)",
        boxShadow: isDark
          ? "0 8px 24px rgba(0, 0, 0, 0.4)"
          : "0 8px 24px rgba(0, 0, 0, 0.12)",
      }}
    >
      <Typography
        fontSize="0.72rem"
        fontWeight={600}
        color="text.secondary"
        sx={{ mb: 0.75 }}
      >
        {label}
      </Typography>
      {payload.map((entry) => (
        <Stack
          key={entry.name}
          direction="row"
          alignItems="center"
          spacing={0.75}
          sx={{ mb: 0.25 }}
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: entry.color,
              flexShrink: 0,
            }}
          />
          <Typography
            fontSize="0.78rem"
            fontWeight={600}
            color="text.secondary"
          >
            {entry.name}:
          </Typography>
          <Typography fontSize="0.85rem" fontWeight={900} color={entry.color}>
            {entry.value}
          </Typography>
        </Stack>
      ))}
    </Box>
  );
}

function CustomLegend({
  payload,
}: {
  payload?: Array<{ value: string; color: string }>;
}) {
  if (!payload) return null;
  return (
    <Stack direction="row" justifyContent="center" spacing={2.5} sx={{ mt: 1 }}>
      {payload.map((entry) => (
        <Stack
          key={entry.value}
          direction="row"
          alignItems="center"
          spacing={0.75}
        >
          <Box
            sx={{
              width: 10,
              height: 3,
              borderRadius: 1,
              backgroundColor: entry.color,
            }}
          />
          <Typography
            fontSize="0.72rem"
            fontWeight={650}
            color="text.secondary"
          >
            {entry.value}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}

export default function RatingTrendChart({ data }: RatingTrendChartProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const chartData = useMemo(
    () =>
      data.ratingTrend.map((d) => ({
        ...d,
        dateLabel: d.date
          ? new Date(d.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })
          : `#${d.gameIndex + 1}`,
      })),
    [data.ratingTrend]
  );

  const allRatings = data.ratingTrend.flatMap((d) => [
    d.rating,
    d.estimatedElo,
  ]);
  const minRating = Math.floor((Math.min(...allRatings) - 50) / 50) * 50;
  const maxRating = Math.ceil((Math.max(...allRatings) + 50) / 50) * 50;

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
            background: `linear-gradient(135deg, ${ACTUAL_RATING_COLOR}22, ${ACTUAL_RATING_COLOR}08)`,
          }}
        >
          <Icon
            icon="mdi:chart-timeline-variant-shimmer"
            width={18}
            color={ACTUAL_RATING_COLOR}
          />
        </Box>
        <Typography fontSize="0.95rem" fontWeight={800}>
          Rating Trend
        </Typography>
      </Stack>

      {/* Chart */}
      <Box sx={{ width: "100%", height: 280 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 5, right: 10, left: -10, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)"}
              vertical={false}
            />

            <XAxis
              dataKey="dateLabel"
              tick={{ fontSize: 11, fill: isDark ? "#777" : "#999" }}
              tickLine={false}
              axisLine={{
                stroke: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
              }}
              interval="preserveStartEnd"
            />

            <YAxis
              domain={[minRating, maxRating]}
              tick={{ fontSize: 11, fill: isDark ? "#777" : "#999" }}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} />

            <Line
              type="monotone"
              dataKey="rating"
              name="Actual Rating"
              stroke={ACTUAL_RATING_COLOR}
              strokeWidth={2.5}
              dot={false}
              activeDot={{
                r: 5,
                fill: ACTUAL_RATING_COLOR,
                stroke: isDark ? "#1a1a1e" : "#ffffff",
                strokeWidth: 2,
              }}
              animationDuration={1200}
              animationEasing="ease-in-out"
            />

            <Line
              type="monotone"
              dataKey="estimatedElo"
              name="Estimated Elo"
              stroke={ESTIMATED_ELO_COLOR}
              strokeWidth={2.5}
              strokeDasharray="6 3"
              dot={false}
              activeDot={{
                r: 5,
                fill: ESTIMATED_ELO_COLOR,
                stroke: isDark ? "#1a1a1e" : "#ffffff",
                strokeWidth: 2,
              }}
              animationDuration={1400}
              animationEasing="ease-in-out"
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
}
