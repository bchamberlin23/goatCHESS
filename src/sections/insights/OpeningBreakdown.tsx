import { AggregatedInsights } from "@/types/insights";
import { MAIN_THEME_COLOR } from "@/constants";
import {
  Box,
  ButtonBase,
  Collapse,
  LinearProgress,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { useState, useCallback } from "react";

interface OpeningBreakdownProps {
  data: AggregatedInsights;
}

export default function OpeningBreakdown({ data }: OpeningBreakdownProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const sortedOpenings = [...data.openingStats].sort(
    (a, b) => b.count - a.count
  );

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
        sx={{ mb: 2 }}
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
              icon="mdi:book-open-variant"
              width={18}
              color={MAIN_THEME_COLOR}
            />
          </Box>
          <Typography fontSize="0.95rem" fontWeight={800}>
            Opening Repertoire
          </Typography>
        </Stack>

        <Typography fontSize="0.72rem" fontWeight={600} color="text.secondary">
          {sortedOpenings.length} openings
        </Typography>
      </Stack>

      {/* Column Headers */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 4rem 5.5rem 4.5rem",
          columnGap: 1,
          px: 1,
          pb: 1,
          borderBottom: "1px solid",
          borderColor: isDark
            ? "rgba(255, 255, 255, 0.06)"
            : "rgba(0, 0, 0, 0.06)",
          mb: 0.5,
        }}
      >
        <Typography
          fontSize="0.68rem"
          fontWeight={700}
          color="text.secondary"
          letterSpacing="0.05em"
          textTransform="uppercase"
        >
          Opening
        </Typography>
        <Typography
          fontSize="0.68rem"
          fontWeight={700}
          color="text.secondary"
          letterSpacing="0.05em"
          textTransform="uppercase"
          textAlign="center"
        >
          Games
        </Typography>
        <Typography
          fontSize="0.68rem"
          fontWeight={700}
          color="text.secondary"
          letterSpacing="0.05em"
          textTransform="uppercase"
          textAlign="center"
        >
          Win%
        </Typography>
        <Typography
          fontSize="0.68rem"
          fontWeight={700}
          color="text.secondary"
          letterSpacing="0.05em"
          textTransform="uppercase"
          textAlign="right"
        >
          Accuracy
        </Typography>
      </Box>

      {/* Opening Rows */}
      <Box
        sx={{
          maxHeight: 400,
          overflowY: "auto",
          scrollbarWidth: "thin",
        }}
      >
        {sortedOpenings.length === 0 ? (
          <Typography
            fontSize="0.82rem"
            color="text.secondary"
            sx={{ textAlign: "center", py: 4, opacity: 0.6 }}
          >
            No opening data available
          </Typography>
        ) : (
          sortedOpenings.map((opening, idx) => (
            <OpeningRow
              key={opening.name}
              opening={opening}
              isDark={isDark}
              rank={idx + 1}
            />
          ))
        )}
      </Box>
    </Paper>
  );
}

function OpeningRow({
  opening,
  isDark,
  rank,
}: {
  opening: {
    name: string;
    count: number;
    wins: number;
    draws: number;
    losses: number;
    winRate: number;
    avgAccuracy: number;
  };
  isDark: boolean;
  rank: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const handleToggle = useCallback(() => setExpanded((p) => !p), []);
  const winPct = Number.isFinite(opening.winRate) ? opening.winRate : 0;
  const safeAvgAccuracy = Number.isFinite(opening.avgAccuracy)
    ? opening.avgAccuracy
    : 0;
  const winColor =
    winPct >= 60 ? "#22ac38" : winPct >= 45 ? MAIN_THEME_COLOR : "#df5353";
  const accColor =
    safeAvgAccuracy >= 80
      ? "#22ac38"
      : safeAvgAccuracy >= 60
        ? MAIN_THEME_COLOR
        : "#df5353";

  return (
    <Box>
      <ButtonBase
        onClick={handleToggle}
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 4rem 5.5rem 4.5rem",
          columnGap: 1,
          alignItems: "center",
          px: 1,
          py: 0.85,
          borderRadius: 1.5,
          textAlign: "left",
          "&:hover": {
            backgroundColor: isDark
              ? "rgba(255, 255, 255, 0.03)"
              : "rgba(0, 0, 0, 0.02)",
          },
          transition: "all 0.15s ease",
        }}
      >
        {/* Opening Name */}
        <Box
          sx={{ minWidth: 0, display: "flex", alignItems: "center", gap: 1 }}
        >
          <Typography
            fontSize="0.72rem"
            fontWeight={700}
            color="text.secondary"
            sx={{ minWidth: 16 }}
          >
            {"#"}
            {rank}
          </Typography>
          <Typography fontSize="0.8rem" fontWeight={700} noWrap>
            {opening.name}
          </Typography>
        </Box>

        {/* Games Count */}
        <Typography
          fontSize="0.82rem"
          fontWeight={800}
          textAlign="center"
          color="text.secondary"
        >
          {opening.count}
        </Typography>

        {/* Win Rate Bar */}
        <Box sx={{ px: 0.5 }}>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <LinearProgress
              variant="determinate"
              value={winPct}
              sx={{
                flex: 1,
                height: 6,
                borderRadius: 3,
                backgroundColor: isDark
                  ? "rgba(255, 255, 255, 0.06)"
                  : "rgba(0, 0, 0, 0.06)",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: winColor,
                  borderRadius: 3,
                },
              }}
            />
            <Typography fontSize="0.7rem" fontWeight={800} color={winColor}>
              {winPct.toFixed(0)}%
            </Typography>
          </Stack>
        </Box>

        {/* Accuracy */}
        <Typography
          fontSize="0.82rem"
          fontWeight={900}
          textAlign="right"
          color={accColor}
        >
          {safeAvgAccuracy.toFixed(1)}%
        </Typography>
      </ButtonBase>

      <Collapse in={expanded} timeout={250}>
        <Box
          sx={{
            px: 2,
            pb: 1.5,
            pt: 0.5,
          }}
        >
          <Stack direction="row" spacing={2}>
            <MiniStat label="Wins" value={opening.wins} color="#22ac38" />
            <MiniStat label="Draws" value={opening.draws} color="#888" />
            <MiniStat label="Losses" value={opening.losses} color="#df5353" />
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
}

function MiniStat({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 0.5,
      }}
    >
      <Box
        sx={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: color,
        }}
      />
      <Typography fontSize="0.7rem" fontWeight={600} color="text.secondary">
        {label}:
      </Typography>
      <Typography fontSize="0.75rem" fontWeight={800} color={color}>
        {value}
      </Typography>
    </Box>
  );
}
