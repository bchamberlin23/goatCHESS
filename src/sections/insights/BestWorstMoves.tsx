import { RankedMove } from "@/types/insights";
import { MAIN_THEME_COLOR } from "@/constants";
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";
import { useState, useCallback } from "react";
import InsightMovePreview from "./InsightMovePreview";

interface BestWorstMovesProps {
  bestMoves: RankedMove[];
  worstMoves: RankedMove[];
}

export default function BestWorstMoves({
  bestMoves,
  worstMoves,
}: BestWorstMovesProps) {
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
          <Icon icon="mdi:star-shooting" width={18} color={MAIN_THEME_COLOR} />
        </Box>
        <Typography fontSize="0.95rem" fontWeight={800}>
          Key Moves
        </Typography>
      </Stack>

      {/* Two Columns */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 2.5, md: 3 }}
      >
        {/* Best Moves */}
        <MoveColumn
          title="Best Moves"
          subtitle="Highest win% gain"
          icon="mdi:trending-up"
          iconColor="#22ac38"
          moves={bestMoves.slice(0, 10)}
          positive
        />

        {/* Worst Moves */}
        <MoveColumn
          title="Worst Moves"
          subtitle="Biggest win% loss"
          icon="mdi:trending-down"
          iconColor="#df5353"
          moves={worstMoves.slice(0, 10)}
          positive={false}
        />
      </Stack>
    </Paper>
  );
}

function MoveColumn({
  title,
  subtitle,
  icon,
  iconColor,
  moves,
  positive,
}: {
  title: string;
  subtitle: string;
  icon: string;
  iconColor: string;
  moves: RankedMove[];
  positive: boolean;
}) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handleToggle = useCallback((idx: number) => {
    setSelectedIdx((prev) => (prev === idx ? null : idx));
  }, []);

  return (
    <Box sx={{ flex: 1, minWidth: 0 }}>
      <Stack
        direction="row"
        alignItems="center"
        spacing={0.75}
        sx={{ mb: 1.5 }}
      >
        <Icon icon={icon} width={16} color={iconColor} />
        <Box>
          <Typography fontSize="0.82rem" fontWeight={800}>
            {title}
          </Typography>
          <Typography
            fontSize="0.65rem"
            fontWeight={600}
            color="text.secondary"
          >
            {subtitle}
          </Typography>
        </Box>
      </Stack>

      <Stack spacing={0.5}>
        {moves.length === 0 ? (
          <Typography
            fontSize="0.78rem"
            color="text.secondary"
            sx={{ textAlign: "center", py: 3, opacity: 0.6 }}
          >
            No moves to display
          </Typography>
        ) : (
          moves.map((move, idx) => (
            <MoveItem
              key={`${move.gameId}-${move.moveIndex}`}
              move={move}
              rank={idx + 1}
              isSelected={selectedIdx === idx}
              onToggle={() => handleToggle(idx)}
              positive={positive}
            />
          ))
        )}
      </Stack>
    </Box>
  );
}

function MoveItem({
  move,
  rank,
  isSelected,
  onToggle,
  positive,
}: {
  move: RankedMove;
  rank: number;
  isSelected: boolean;
  onToggle: () => void;
  positive: boolean;
}) {
  return (
    <InsightMovePreview
      move={move}
      rank={rank}
      isSelected={isSelected}
      onPrimaryClick={onToggle}
      positive={positive}
    />
  );
}
