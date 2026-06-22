import { AggregatedInsights, KeyInsight } from "@/types/insights";
import { MAIN_THEME_COLOR } from "@/constants";
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";

interface KeyInsightsProps {
  data: AggregatedInsights;
}

const TONE_COLORS: Record<KeyInsight["tone"], string> = {
  good: "#22ac38",
  warning: "#d9852b",
  neutral: MAIN_THEME_COLOR,
};

export default function KeyInsights({ data }: KeyInsightsProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { recentForm, analysisRange } = data;
  const dateRange =
    analysisRange.firstDate && analysisRange.lastDate
      ? `${analysisRange.firstDate} to ${analysisRange.lastDate}`
      : "Recent games";

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
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        spacing={2}
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
              icon="mdi:lightbulb-on-outline"
              width={18}
              color={MAIN_THEME_COLOR}
            />
          </Box>
          <Typography fontSize="0.95rem" fontWeight={800}>
            Key Insights
          </Typography>
        </Stack>

        <Typography fontSize="0.78rem" fontWeight={650} color="text.secondary">
          {data.totalGames} games, {dateRange}
        </Typography>
      </Stack>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 1.5,
        }}
      >
        {data.keyInsights.map((insight) => (
          <InsightItem
            key={`${insight.title}-${insight.message}`}
            insight={insight}
          />
        ))}
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(4, 1fr)" },
          gap: 1.25,
          mt: 2,
          pt: 2,
          borderTop: "1px solid",
          borderColor: isDark
            ? "rgba(255, 255, 255, 0.06)"
            : "rgba(0, 0, 0, 0.06)",
        }}
      >
        <FormMetric
          label="Recent accuracy"
          value={`${recentForm.recentAccuracy.toFixed(1)}%`}
        />
        <FormMetric
          label="Accuracy change"
          value={`${recentForm.accuracyDelta >= 0 ? "+" : ""}${recentForm.accuracyDelta.toFixed(1)}`}
        />
        <FormMetric
          label="Recent score"
          value={`${recentForm.recentScore.toFixed(1)}%`}
        />
        <FormMetric
          label="Current streak"
          value={
            recentForm.currentStreak
              ? `${recentForm.currentStreak.length} ${recentForm.currentStreak.result}`
              : "None"
          }
        />
      </Box>
    </Paper>
  );
}

function InsightItem({ insight }: { insight: KeyInsight }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const color = TONE_COLORS[insight.tone];

  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: isDark
          ? "rgba(255, 255, 255, 0.06)"
          : "rgba(0, 0, 0, 0.06)",
        borderRadius: 2,
        padding: 1.5,
        backgroundColor: isDark
          ? "rgba(255, 255, 255, 0.025)"
          : "rgba(0, 0, 0, 0.018)",
        minHeight: 116,
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 26,
            height: 26,
            borderRadius: 1,
            backgroundColor: `${color}18`,
          }}
        >
          <Icon icon={insight.icon} width={16} color={color} />
        </Box>
        <Typography fontSize="0.82rem" fontWeight={800}>
          {insight.title}
        </Typography>
      </Stack>
      <Typography fontSize="0.78rem" color="text.secondary" lineHeight={1.45}>
        {insight.message}
      </Typography>
    </Box>
  );
}

function FormMetric({ label, value }: { label: string; value: string }) {
  return (
    <Box>
      <Typography
        fontSize="0.68rem"
        fontWeight={700}
        color="text.secondary"
        textTransform="uppercase"
        letterSpacing="0.06em"
      >
        {label}
      </Typography>
      <Typography fontSize="1.05rem" fontWeight={900} color={MAIN_THEME_COLOR}>
        {value}
      </Typography>
    </Box>
  );
}
