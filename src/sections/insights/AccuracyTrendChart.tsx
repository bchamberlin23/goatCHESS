import { AggregatedInsights } from "@/types/insights";
import { MAIN_THEME_COLOR } from "@/constants";
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import { useMemo } from "react";

interface AccuracyTrendChartProps {
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

  const entry = payload[0];
  const accuracy = entry.value as number;
  const gameIndex = entry.payload.gameIndex;

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
      <Typography fontSize="0.72rem" fontWeight={600} color="text.secondary">
        Game #{gameIndex + 1}
      </Typography>
      <Typography fontSize="0.7rem" color="text.secondary" sx={{ mb: 0.5 }}>
        {label}
      </Typography>
      <Stack direction="row" alignItems="baseline" spacing={0.5}>
        <Typography fontSize="1.1rem" fontWeight={900} color={MAIN_THEME_COLOR}>
          {accuracy.toFixed(1)}%
        </Typography>
        <Typography fontSize="0.72rem" fontWeight={600} color="text.secondary">
          accuracy
        </Typography>
      </Stack>
    </Box>
  );
}

export default function AccuracyTrendChart({ data }: AccuracyTrendChartProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const chartData = useMemo(
    () =>
      data.accuracyTrend.map((d) => ({
        ...d,
        dateLabel: d.date
          ? new Date(d.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })
          : `#${d.gameIndex + 1}`,
      })),
    [data.accuracyTrend]
  );

  const avgAccuracy = data.overallAccuracy;

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
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: 2.5 }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
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
            <Icon icon="mdi:chart-line" width={18} color={MAIN_THEME_COLOR} />
          </Box>
          <Typography fontSize="0.95rem" fontWeight={800}>
            Accuracy Trend
          </Typography>
        </Stack>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            backgroundColor: isDark
              ? "rgba(255, 255, 255, 0.05)"
              : "rgba(0, 0, 0, 0.04)",
            borderRadius: 1,
            px: 1,
            py: 0.3,
          }}
        >
          <Typography
            fontSize="0.72rem"
            fontWeight={600}
            color="text.secondary"
          >
            Avg:
          </Typography>
          <Typography
            fontSize="0.78rem"
            fontWeight={900}
            color={MAIN_THEME_COLOR}
          >
            {avgAccuracy.toFixed(1)}%
          </Typography>
        </Box>
      </Stack>

      {/* Chart */}
      <Box sx={{ width: "100%", height: 280 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 5, right: 10, left: -10, bottom: 5 }}
          >
            <defs>
              <linearGradient id="accuracyGradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor={MAIN_THEME_COLOR}
                  stopOpacity={0.35}
                />
                <stop
                  offset="60%"
                  stopColor={MAIN_THEME_COLOR}
                  stopOpacity={0.08}
                />
                <stop
                  offset="100%"
                  stopColor={MAIN_THEME_COLOR}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

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
              domain={[0, 100]}
              tick={{ fontSize: 11, fill: isDark ? "#777" : "#999" }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => `${v}%`}
            />

            <Tooltip content={<CustomTooltip />} />

            <ReferenceLine
              y={avgAccuracy}
              stroke={MAIN_THEME_COLOR}
              strokeDasharray="6 4"
              strokeOpacity={0.5}
              strokeWidth={1.5}
              label={{
                value: `Avg ${avgAccuracy.toFixed(1)}%`,
                position: "right",
                fontSize: 10,
                fontWeight: 700,
                fill: MAIN_THEME_COLOR,
              }}
            />

            <Area
              type="monotone"
              dataKey="accuracy"
              stroke={MAIN_THEME_COLOR}
              strokeWidth={2.5}
              fill="url(#accuracyGradient)"
              dot={false}
              activeDot={{
                r: 5,
                fill: MAIN_THEME_COLOR,
                stroke: isDark ? "#1a1a1e" : "#ffffff",
                strokeWidth: 2,
              }}
              animationDuration={1200}
              animationEasing="ease-in-out"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
}
