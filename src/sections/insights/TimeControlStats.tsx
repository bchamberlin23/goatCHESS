import { AggregatedInsights } from "@/types/insights";
import { MAIN_THEME_COLOR } from "@/constants";
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";

interface TimeControlStatsProps {
  data: AggregatedInsights;
}

const TIME_CONTROL_ICONS: Record<string, string> = {
  bullet: "mdi:lightning-bolt",
  blitz: "mdi:fire",
  rapid: "mdi:clock-fast",
  classical: "mdi:clock-outline",
  correspondence: "mdi:email-outline",
  daily: "mdi:calendar-clock",
};

function getTimeControlIcon(label: string): string {
  const lower = label.toLowerCase();
  for (const [key, icon] of Object.entries(TIME_CONTROL_ICONS)) {
    if (lower.includes(key)) return icon;
  }
  return "mdi:timer-outline";
}

export default function TimeControlStats({ data }: TimeControlStatsProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const stats = [...data.timeControlStats].sort((a, b) => b.count - a.count);

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
          <Icon
            icon="mdi:timer-cog-outline"
            width={18}
            color={MAIN_THEME_COLOR}
          />
        </Box>
        <Typography fontSize="0.95rem" fontWeight={800}>
          Time Controls
        </Typography>
      </Stack>

      {/* Cards */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1.5,
        }}
      >
        {stats.length === 0 ? (
          <Typography
            fontSize="0.82rem"
            color="text.secondary"
            sx={{ width: "100%", textAlign: "center", py: 4, opacity: 0.6 }}
          >
            No time control data available
          </Typography>
        ) : (
          stats.map((tc) => (
            <TimeControlCard key={tc.timeControl} stat={tc} isDark={isDark} />
          ))
        )}
      </Box>
    </Paper>
  );
}

function TimeControlCard({
  stat,
  isDark,
}: {
  stat: {
    timeControl: string;
    label: string;
    count: number;
    winRate: number;
    avgAccuracy: number;
  };
  isDark: boolean;
}) {
  const icon = getTimeControlIcon(stat.label);
  const safeWinRate = Number.isFinite(stat.winRate) ? stat.winRate : 0;
  const safeAvgAccuracy = Number.isFinite(stat.avgAccuracy)
    ? stat.avgAccuracy
    : 0;
  const winColor =
    safeWinRate >= 60
      ? "#22ac38"
      : safeWinRate >= 45
        ? MAIN_THEME_COLOR
        : "#df5353";
  const accColor =
    safeAvgAccuracy >= 80
      ? "#22ac38"
      : safeAvgAccuracy >= 60
        ? MAIN_THEME_COLOR
        : "#df5353";

  return (
    <Box
      sx={{
        flex: {
          xs: "1 1 calc(50% - 12px)",
          sm: "1 1 calc(33.33% - 12px)",
          md: "1 1 auto",
        },
        minWidth: { xs: "calc(50% - 12px)", sm: 160 },
        maxWidth: { xs: "100%", sm: 220 },
        backgroundColor: isDark
          ? "rgba(255, 255, 255, 0.025)"
          : "rgba(0, 0, 0, 0.015)",
        border: "1px solid",
        borderColor: isDark
          ? "rgba(255, 255, 255, 0.06)"
          : "rgba(0, 0, 0, 0.05)",
        borderRadius: 2.5,
        padding: "14px 16px",
        transition: "all 0.25s ease",
        cursor: "default",
        "&:hover": {
          borderColor: isDark
            ? "rgba(201, 169, 110, 0.2)"
            : "rgba(201, 169, 110, 0.3)",
          backgroundColor: isDark
            ? "rgba(255, 255, 255, 0.04)"
            : "rgba(0, 0, 0, 0.025)",
          transform: "translateY(-2px)",
          boxShadow: isDark
            ? "0 8px 24px rgba(0, 0, 0, 0.3)"
            : "0 8px 24px rgba(0, 0, 0, 0.08)",
        },
      }}
    >
      {/* Icon + Label */}
      <Stack
        direction="row"
        alignItems="center"
        spacing={0.75}
        sx={{ mb: 1.5 }}
      >
        <Icon icon={icon} width={18} color={MAIN_THEME_COLOR} />
        <Typography fontSize="0.82rem" fontWeight={800} noWrap>
          {stat.label}
        </Typography>
      </Stack>

      {/* Game Count */}
      <Stack direction="row" alignItems="baseline" spacing={0.5} sx={{ mb: 1 }}>
        <Typography fontSize="1.3rem" fontWeight={900} lineHeight={1}>
          {stat.count}
        </Typography>
        <Typography fontSize="0.65rem" fontWeight={600} color="text.secondary">
          games
        </Typography>
      </Stack>

      {/* Stats Row */}
      <Stack direction="row" spacing={1.5}>
        <Box>
          <Typography
            fontSize="0.6rem"
            fontWeight={700}
            color="text.secondary"
            letterSpacing="0.04em"
            textTransform="uppercase"
          >
            Win%
          </Typography>
          <Typography fontSize="0.85rem" fontWeight={900} color={winColor}>
            {safeWinRate.toFixed(0)}%
          </Typography>
        </Box>

        <Box
          sx={{
            width: "1px",
            backgroundColor: isDark
              ? "rgba(255, 255, 255, 0.08)"
              : "rgba(0, 0, 0, 0.06)",
          }}
        />

        <Box>
          <Typography
            fontSize="0.6rem"
            fontWeight={700}
            color="text.secondary"
            letterSpacing="0.04em"
            textTransform="uppercase"
          >
            Acc
          </Typography>
          <Typography fontSize="0.85rem" fontWeight={900} color={accColor}>
            {safeAvgAccuracy.toFixed(1)}%
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
