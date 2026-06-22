import { MistakePattern } from "@/types/insights";
import { MAIN_THEME_COLOR } from "@/constants";
import {
  Box,
  ButtonBase,
  Collapse,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { useState, useCallback } from "react";
import InsightMovePreview from "./InsightMovePreview";

interface CommonMistakesProps {
  mistakes: MistakePattern[];
}

const PHASE_CONFIG = {
  opening: {
    icon: "mdi:chess-rook",
    color: "#3894eb",
    label: "Opening",
  },
  middlegame: {
    icon: "mdi:chess-queen",
    color: MAIN_THEME_COLOR,
    label: "Middlegame",
  },
  endgame: {
    icon: "mdi:chess-king",
    color: "#b583d6",
    label: "Endgame",
  },
} as const;

export default function CommonMistakes({ mistakes }: CommonMistakesProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  // Group by phase
  const grouped = mistakes.reduce(
    (acc, m) => {
      if (!acc[m.phase]) acc[m.phase] = [];
      acc[m.phase].push(m);
      return acc;
    },
    {} as Record<string, MistakePattern[]>
  );

  const phases = (["opening", "middlegame", "endgame"] as const).filter(
    (p) => grouped[p]?.length
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
      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2.5 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 32,
            height: 32,
            borderRadius: 1.5,
            background:
              "linear-gradient(135deg, rgba(223, 83, 83, 0.15), rgba(223, 83, 83, 0.05))",
          }}
        >
          <Icon icon="mdi:alert-circle-outline" width={18} color="#df5353" />
        </Box>
        <Box>
          <Typography fontSize="0.95rem" fontWeight={800}>
            Common Mistakes
          </Typography>
          <Typography
            fontSize="0.68rem"
            fontWeight={600}
            color="text.secondary"
          >
            Recurring patterns across your games
          </Typography>
        </Box>
      </Stack>

      {/* Phase Sections */}
      {phases.length === 0 ? (
        <Typography
          fontSize="0.82rem"
          color="text.secondary"
          sx={{ textAlign: "center", py: 4, opacity: 0.6 }}
        >
          No recurring mistake patterns found
        </Typography>
      ) : (
        <Stack spacing={2}>
          {phases.map((phase) => {
            const cfg = PHASE_CONFIG[phase];
            const items = grouped[phase];

            return (
              <Box key={phase}>
                {/* Phase Badge */}
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={0.75}
                  sx={{ mb: 1.25 }}
                >
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.5,
                      backgroundColor: `${cfg.color}14`,
                      border: `1px solid ${cfg.color}28`,
                      borderRadius: 1,
                      px: 1,
                      py: 0.25,
                    }}
                  >
                    <Icon icon={cfg.icon} width={14} color={cfg.color} />
                    <Typography
                      fontSize="0.72rem"
                      fontWeight={750}
                      color={cfg.color}
                    >
                      {cfg.label}
                    </Typography>
                  </Box>
                  <Typography
                    fontSize="0.68rem"
                    fontWeight={600}
                    color="text.secondary"
                  >
                    {items.length} pattern{items.length !== 1 ? "s" : ""}
                  </Typography>
                </Stack>

                {/* Mistake Cards */}
                <Stack spacing={0.75}>
                  {items.map((mistake, idx) => (
                    <MistakeCard
                      key={`${phase}-${idx}`}
                      mistake={mistake}
                      isDark={isDark}
                    />
                  ))}
                </Stack>
              </Box>
            );
          })}
        </Stack>
      )}
    </Paper>
  );
}

function MistakeCard({
  mistake,
  isDark,
}: {
  mistake: MistakePattern;
  isDark: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const [selectedExampleIdx, setSelectedExampleIdx] = useState<number | null>(
    null
  );

  const handleToggle = useCallback(() => {
    setExpanded((prev) => !prev);
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: isDark
          ? "rgba(255, 255, 255, 0.02)"
          : "rgba(0, 0, 0, 0.015)",
        border: "1px solid",
        borderColor: isDark
          ? "rgba(255, 255, 255, 0.05)"
          : "rgba(0, 0, 0, 0.04)",
        borderRadius: 2,
        overflow: "hidden",
        transition: "all 0.2s ease",
        "&:hover": {
          borderColor: isDark
            ? "rgba(255, 255, 255, 0.1)"
            : "rgba(0, 0, 0, 0.08)",
        },
      }}
    >
      <ButtonBase
        onClick={handleToggle}
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 14px",
          textAlign: "left",
        }}
      >
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography fontSize="0.82rem" fontWeight={700} noWrap>
            {mistake.description}
          </Typography>
        </Box>

        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ flexShrink: 0, ml: 1 }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.35,
              backgroundColor: "rgba(223, 83, 83, 0.1)",
              border: "1px solid rgba(223, 83, 83, 0.2)",
              borderRadius: 1,
              px: 0.75,
              py: 0.15,
            }}
          >
            <Typography fontSize="0.7rem" fontWeight={800} color="#df5353">
              ×{mistake.count}
            </Typography>
          </Box>

          <Icon
            icon={expanded ? "mdi:chevron-up" : "mdi:chevron-down"}
            width={18}
            color={isDark ? "#777" : "#999"}
          />
        </Stack>
      </ButtonBase>

      <Collapse in={expanded} timeout={250}>
        <Box
          sx={{
            px: 1.75,
            pb: 1.5,
            borderTop: "1px solid",
            borderColor: isDark
              ? "rgba(255, 255, 255, 0.04)"
              : "rgba(0, 0, 0, 0.04)",
            pt: 1.25,
          }}
        >
          <Typography
            fontSize="0.68rem"
            fontWeight={700}
            color="text.secondary"
            letterSpacing="0.04em"
            textTransform="uppercase"
            sx={{ mb: 1 }}
          >
            Examples
          </Typography>

          <Stack spacing={0.5}>
            {mistake.examples.slice(0, 5).map((ex, idx) => (
              <InsightMovePreview
                key={`${ex.gameId}-${ex.moveIndex}-${idx}`}
                move={ex}
                isSelected={selectedExampleIdx === idx}
                onPrimaryClick={() =>
                  setSelectedExampleIdx((prev) => (prev === idx ? null : idx))
                }
                compact
              />
            ))}
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
}
