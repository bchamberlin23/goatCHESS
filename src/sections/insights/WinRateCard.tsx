import { AggregatedInsights } from "@/types/insights";
import { MAIN_THEME_COLOR } from "@/constants";
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
} from "recharts";
import { useMemo } from "react";

const WIN_COLOR = "#22ac38";
const DRAW_COLOR = "#888888";
const LOSS_COLOR = "#df5353";

interface WinRateCardProps {
  data: AggregatedInsights;
}

function CustomTooltip({ active, payload }: TooltipProps<number, string>) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  if (!active || !payload?.length) return null;

  const entry = payload[0];

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
        padding: "8px 12px",
        backdropFilter: "blur(8px)",
        boxShadow: isDark
          ? "0 8px 24px rgba(0, 0, 0, 0.4)"
          : "0 8px 24px rgba(0, 0, 0, 0.12)",
      }}
    >
      <Stack direction="row" alignItems="center" spacing={0.75}>
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: entry.payload.fill,
          }}
        />
        <Typography fontSize="0.78rem" fontWeight={700}>
          {entry.name}: {entry.value}
        </Typography>
      </Stack>
    </Box>
  );
}

export default function WinRateCard({ data }: WinRateCardProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const { wins, draws, losses } = data.winRate;
  const totalGames = wins + draws + losses;
  const winRate = totalGames > 0 ? ((wins / totalGames) * 100).toFixed(1) : "0";

  const pieData = useMemo(
    () => [
      { name: "Wins", value: wins, fill: WIN_COLOR },
      { name: "Draws", value: draws, fill: DRAW_COLOR },
      { name: "Losses", value: losses, fill: LOSS_COLOR },
    ],
    [wins, draws, losses]
  );

  const whiteAccuracy = data.accuracyByColor.white;
  const blackAccuracy = data.accuracyByColor.black;

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
      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 32,
            height: 32,
            borderRadius: 1.5,
            background: `linear-gradient(135deg, ${WIN_COLOR}22, ${WIN_COLOR}08)`,
          }}
        >
          <Icon icon="mdi:chart-donut" width={18} color={WIN_COLOR} />
        </Box>
        <Typography fontSize="0.95rem" fontWeight={800}>
          Win Rate
        </Typography>
      </Stack>

      {/* Donut Chart */}
      <Box sx={{ position: "relative", width: "100%", height: 200 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={80}
              paddingAngle={3}
              dataKey="value"
              strokeWidth={0}
              animationBegin={200}
              animationDuration={1000}
              animationEasing="ease-out"
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.fill}
                  style={{
                    filter: `drop-shadow(0 2px 4px ${entry.fill}44)`,
                  }}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>

        {/* Center text */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <Typography
            fontSize="1.6rem"
            fontWeight={900}
            lineHeight={1}
            color={WIN_COLOR}
          >
            {winRate}%
          </Typography>
          <Typography
            fontSize="0.65rem"
            fontWeight={700}
            color="text.secondary"
            letterSpacing="0.05em"
          >
            WIN RATE
          </Typography>
        </Box>
      </Box>

      {/* Legend */}
      <Stack
        direction="row"
        justifyContent="center"
        spacing={2.5}
        sx={{ mt: 1, mb: 2.5 }}
      >
        {pieData.map((entry) => (
          <Stack
            key={entry.name}
            direction="row"
            alignItems="center"
            spacing={0.5}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: entry.fill,
              }}
            />
            <Typography
              fontSize="0.72rem"
              fontWeight={650}
              color="text.secondary"
            >
              {entry.name}
            </Typography>
            <Typography
              fontSize="0.78rem"
              fontWeight={900}
              color="text.primary"
            >
              {entry.value}
            </Typography>
          </Stack>
        ))}
      </Stack>

      {/* Color Breakdown */}
      <Box
        sx={{
          borderTop: "1px solid",
          borderColor: isDark
            ? "rgba(255, 255, 255, 0.06)"
            : "rgba(0, 0, 0, 0.06)",
          pt: 2,
        }}
      >
        <Typography
          fontSize="0.7rem"
          fontWeight={700}
          letterSpacing="0.06em"
          color="text.secondary"
          textTransform="uppercase"
          sx={{ mb: 1.5 }}
        >
          Accuracy by Color
        </Typography>

        <Stack direction="row" spacing={2}>
          <ColorStatCard
            label="As White"
            accuracy={whiteAccuracy}
            icon="mdi:chess-king"
            iconBg="#ffffff"
            iconColor="#333"
            isDark={isDark}
          />
          <ColorStatCard
            label="As Black"
            accuracy={blackAccuracy}
            icon="mdi:chess-king"
            iconBg="#1a1a1c"
            iconColor="#ccc"
            isDark={isDark}
          />
        </Stack>
      </Box>
    </Paper>
  );
}

function ColorStatCard({
  label,
  accuracy,
  icon,
  iconBg,
  iconColor,
  isDark,
}: {
  label: string;
  accuracy: number;
  icon: string;
  iconBg: string;
  iconColor: string;
  isDark: boolean;
}) {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        gap: 1.25,
        backgroundColor: isDark
          ? "rgba(255, 255, 255, 0.03)"
          : "rgba(0, 0, 0, 0.02)",
        borderRadius: 2,
        padding: "10px 14px",
        border: "1px solid",
        borderColor: isDark
          ? "rgba(255, 255, 255, 0.05)"
          : "rgba(0, 0, 0, 0.04)",
        transition: "all 0.2s ease",
        "&:hover": {
          backgroundColor: isDark
            ? "rgba(255, 255, 255, 0.05)"
            : "rgba(0, 0, 0, 0.03)",
          transform: "translateY(-1px)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 28,
          height: 28,
          borderRadius: 1,
          backgroundColor: iconBg,
          border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
          flexShrink: 0,
        }}
      >
        <Icon icon={icon} width={16} color={iconColor} />
      </Box>
      <Box>
        <Typography fontSize="0.68rem" fontWeight={600} color="text.secondary">
          {label}
        </Typography>
        <Typography
          fontSize="0.95rem"
          fontWeight={900}
          color={MAIN_THEME_COLOR}
        >
          {accuracy.toFixed(1)}%
        </Typography>
      </Box>
    </Box>
  );
}
