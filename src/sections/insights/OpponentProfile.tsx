import { AggregatedInsights, OpponentBucketStat } from "@/types/insights";
import { MAIN_THEME_COLOR } from "@/constants";
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";

interface OpponentProfileProps {
  data: AggregatedInsights;
}

const POSITIVE = "#22ac38";
const NEGATIVE = "#df5353";

export default function OpponentProfile({ data }: OpponentProfileProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const profile = data.opponentProfile;
  const scoreColor = profile.scoreVsExpected >= 0 ? POSITIVE : NEGATIVE;

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
      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
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
            icon="mdi:account-group-outline"
            width={18}
            color={MAIN_THEME_COLOR}
          />
        </Box>
        <Typography fontSize="0.95rem" fontWeight={800}>
          Opponent Quality
        </Typography>
      </Stack>

      {profile.gamesWithRatings === 0 ? (
        <Typography fontSize="0.84rem" color="text.secondary">
          No rating metadata was available for these games.
        </Typography>
      ) : (
        <>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(5, 1fr)" },
              gap: 1.25,
              mb: 2.25,
            }}
          >
            <Metric
              label="Avg opponent"
              value={String(profile.avgOpponentRating)}
            />
            <Metric
              label="Perf rating"
              value={String(profile.performanceRating)}
            />
            <Metric
              label="Rating gap"
              value={`${profile.avgRatingDiff >= 0 ? "+" : ""}${profile.avgRatingDiff}`}
            />
            <Metric
              label="Expected score"
              value={profile.expectedScore.toFixed(1)}
            />
            <Metric
              label="Vs expected"
              value={`${profile.scoreVsExpected >= 0 ? "+" : ""}${profile.scoreVsExpected.toFixed(1)}`}
              color={scoreColor}
            />
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "1fr 1.2fr" },
              gap: 2,
            }}
          >
            <Stack spacing={1.25}>
              <SplitRow
                label="Favorite"
                value={profile.gamesAsFavorite}
                total={profile.gamesWithRatings}
              />
              <SplitRow
                label="Peer"
                value={profile.gamesAsPeer}
                total={profile.gamesWithRatings}
              />
              <SplitRow
                label="Underdog"
                value={profile.gamesAsUnderdog}
                total={profile.gamesWithRatings}
              />
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 1,
                  pt: 0.5,
                }}
              >
                <MiniBadge
                  label="Upset wins"
                  value={profile.upsetWins}
                  color={POSITIVE}
                />
                <MiniBadge
                  label="Missed favorites"
                  value={profile.missedFavorites}
                  color={NEGATIVE}
                />
              </Box>
            </Stack>

            <Stack spacing={1}>
              {profile.bucketStats.map((bucket) => (
                <BucketRow key={bucket.label} bucket={bucket} />
              ))}
            </Stack>
          </Box>
        </>
      )}
    </Paper>
  );
}

function Metric({
  label,
  value,
  color = MAIN_THEME_COLOR,
}: {
  label: string;
  value: string;
  color?: string;
}) {
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
      <Typography fontSize="1.2rem" fontWeight={900} color={color}>
        {value}
      </Typography>
    </Box>
  );
}

function SplitRow({
  label,
  value,
  total,
}: {
  label: string;
  value: number;
  total: number;
}) {
  const pct = total > 0 ? (value / total) * 100 : 0;

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" sx={{ mb: 0.5 }}>
        <Typography fontSize="0.78rem" fontWeight={700}>
          {label}
        </Typography>
        <Typography fontSize="0.78rem" fontWeight={800} color="text.secondary">
          {value}
        </Typography>
      </Stack>
      <Box
        sx={{
          height: 8,
          borderRadius: 1,
          backgroundColor: "rgba(128, 128, 128, 0.16)",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: `${pct}%`,
            borderRadius: 1,
            backgroundColor: MAIN_THEME_COLOR,
          }}
        />
      </Box>
    </Box>
  );
}

function MiniBadge({
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
        border: "1px solid",
        borderColor: `${color}30`,
        borderRadius: 2,
        backgroundColor: `${color}10`,
        padding: 1.1,
      }}
    >
      <Typography fontSize="0.68rem" fontWeight={700} color="text.secondary">
        {label}
      </Typography>
      <Typography fontSize="1.1rem" fontWeight={900} color={color}>
        {value}
      </Typography>
    </Box>
  );
}

function BucketRow({ bucket }: { bucket: OpponentBucketStat }) {
  const scoreColor = bucket.scoreVsExpected >= 0 ? POSITIVE : NEGATIVE;

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "minmax(120px, 1fr) repeat(3, auto)",
        gap: 1.5,
        alignItems: "center",
        borderBottom: "1px solid rgba(128, 128, 128, 0.16)",
        pb: 1,
      }}
    >
      <Box>
        <Typography fontSize="0.8rem" fontWeight={800}>
          {bucket.label}
        </Typography>
        <Typography fontSize="0.68rem" color="text.secondary">
          {bucket.count} games, {bucket.avgAccuracy.toFixed(1)}% accuracy
        </Typography>
      </Box>
      <Typography fontSize="0.78rem" fontWeight={800}>
        {bucket.wins}-{bucket.draws}-{bucket.losses}
      </Typography>
      <Typography fontSize="0.78rem" color="text.secondary">
        Exp {bucket.expectedScore.toFixed(1)}
      </Typography>
      <Typography fontSize="0.78rem" fontWeight={900} color={scoreColor}>
        {bucket.scoreVsExpected >= 0 ? "+" : ""}
        {bucket.scoreVsExpected.toFixed(1)}
      </Typography>
    </Box>
  );
}
