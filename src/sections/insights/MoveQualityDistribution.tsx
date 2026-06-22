import { AggregatedInsights } from "@/types/insights";
import { CLASSIFICATION_COLORS, MAIN_THEME_COLOR } from "@/constants";
import { MoveClassification } from "@/types/enums";
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { useMemo } from "react";

interface MoveQualityDistributionProps {
  data: AggregatedInsights;
}

const DISPLAY_CLASSIFICATIONS = [
  { key: MoveClassification.Splendid, label: "Brilliant" },
  { key: MoveClassification.Perfect, label: "Great" },
  { key: MoveClassification.Best, label: "Best" },
  { key: MoveClassification.Excellent, label: "Excellent" },
  { key: MoveClassification.Okay, label: "Okay" },
  { key: MoveClassification.Inaccuracy, label: "Inaccuracy" },
  { key: MoveClassification.Mistake, label: "Mistake" },
  { key: MoveClassification.Blunder, label: "Blunder" },
];

export default function MoveQualityDistribution({
  data,
}: MoveQualityDistributionProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const totalMoves = useMemo(
    () =>
      Object.values(data.classificationTotals).reduce(
        (sum, count) => sum + count,
        0
      ),
    [data.classificationTotals]
  );

  const chartData = useMemo(
    () =>
      DISPLAY_CLASSIFICATIONS.map(({ key, label }) => {
        const count = data.classificationTotals[key] || 0;
        return {
          label,
          classification: key,
          count,
          percentage: totalMoves > 0 ? (count / totalMoves) * 100 : 0,
          color: CLASSIFICATION_COLORS[key],
        };
      }),
    [data.classificationTotals, totalMoves]
  );

  // Build stacked bar data - single row with all classifications as keys
  const stackedData = useMemo(() => {
    const row: Record<string, number> = { name: "Moves" as unknown as number };
    chartData.forEach((d) => {
      row[d.label] = d.percentage;
    });
    return [row];
  }, [chartData]);

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
            <Icon
              icon="mdi:chart-bar-stacked"
              width={18}
              color={MAIN_THEME_COLOR}
            />
          </Box>
          <Typography fontSize="0.95rem" fontWeight={800}>
            Move Quality Distribution
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
            Total:
          </Typography>
          <Typography fontSize="0.78rem" fontWeight={900} color="text.primary">
            {totalMoves} moves
          </Typography>
        </Box>
      </Stack>

      {/* Stacked Horizontal Bar */}
      <Box sx={{ width: "100%", height: 48, mb: 2 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={stackedData}
            layout="vertical"
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            barCategoryGap={0}
          >
            <XAxis type="number" domain={[0, 100]} hide />
            <YAxis type="category" dataKey="name" hide />
            {chartData.map((d) => (
              <Bar
                key={d.label}
                dataKey={d.label}
                stackId="a"
                fill={d.color}
                radius={0}
                animationDuration={800}
                animationEasing="ease-out"
              >
                <Cell fill={d.color} />
              </Bar>
            ))}
          </BarChart>
        </ResponsiveContainer>
      </Box>

      {/* Legend Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(4, 1fr)",
          },
          gap: 1,
        }}
      >
        {chartData.map((d) => (
          <Box
            key={d.label}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.75,
              px: 1,
              py: 0.5,
              borderRadius: 1,
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor: isDark
                  ? "rgba(255, 255, 255, 0.04)"
                  : "rgba(0, 0, 0, 0.03)",
              },
            }}
          >
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: d.color,
                flexShrink: 0,
                boxShadow: `0 1px 3px ${d.color}44`,
              }}
            />
            <Box sx={{ minWidth: 0 }}>
              <Typography
                fontSize="0.72rem"
                fontWeight={700}
                color="text.primary"
                noWrap
              >
                {d.label}
              </Typography>
              <Typography
                fontSize="0.65rem"
                fontWeight={600}
                color="text.secondary"
              >
                {d.count} ({d.percentage.toFixed(1)}%)
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}
