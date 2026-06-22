import { PageTitle } from "@/components/pageTitle";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid2 as Grid,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { useAtomValue } from "jotai";
import { darkModeAtom } from "@/states/global";

interface FeatureCard {
  title: string;
  description: string;
  icon: string;
  href: string;
  cta: string;
  stats?: { label: string; value: string }[];
  tags?: string[];
  highlight?: boolean;
}

const features: FeatureCard[] = [
  {
    title: "Game Analysis",
    description:
      "Load games from chess.com or lichess and get Stockfish-powered evaluations, move classifications, and engine lines.",
    icon: "streamline:magnifying-glass-solid",
    href: "/analysis",
    cta: "Analyze a game",
    tags: ["Review", "Moves", "Lines", "Lessons"],
  },
  {
    title: "Play vs Stockfish",
    description:
      "Challenge Stockfish at any ELO. Practice your openings, sharpen your middlegame, and master endgame technique.",
    icon: "streamline:chess-pawn",
    href: "/play",
    cta: "Start playing",
    tags: ["Any ELO", "960", "Unlimited"],
    highlight: true,
  },
  {
    title: "Puzzle Center",
    description:
      "Tactical training with thousands of puzzles. Standard mode, Puzzle Storm, Survival Streak, and smart mistake review.",
    icon: "mdi:puzzle",
    href: "/puzzles",
    cta: "Train tactics",
    tags: ["Storm", "Streak", "Review"],
  },
  {
    title: "Insights",
    description:
      "Analyze all your games at once. See your accuracy trends, common mistakes, phase performance, and more.",
    icon: "mdi:chart-box",
    href: "/insights",
    cta: "View insights",
    tags: ["Trends", "Openings", "Mistakes"],
  },
  {
    title: "Game Database",
    description:
      "Save and organize your analyzed games locally. Search, copy PGN, and revisit analysis anytime.",
    icon: "streamline:database",
    href: "/database",
    cta: "Browse database",
    tags: ["Import", "Export", "PGN"],
  },
];

export default function HomePage() {
  const router = useRouter();
  const isDark = useAtomValue(darkModeAtom);

  return (
    <Stack spacing={0} sx={{ pb: 8 }}>
      <PageTitle title="Chesskit — Free Chess Analysis & Training" />

      {/* ── Hero ── */}
      <Box
        sx={{
          pt: { xs: 6, md: 10 },
          pb: { xs: 5, md: 7 },
          textAlign: "center",
          position: "relative",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          fontWeight={900}
          letterSpacing="-0.03em"
          sx={{
            fontSize: { xs: "2.2rem", md: "3.4rem" },
            lineHeight: 1.15,
            mb: 2,
            background:
              "linear-gradient(135deg, #C9A96E 0%, #d4b87a 40%, #b8944f 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Chess, analyzed.
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          fontWeight={400}
          sx={{
            maxWidth: 560,
            mx: "auto",
            mb: 4,
            fontSize: { xs: "1rem", md: "1.15rem" },
            lineHeight: 1.6,
          }}
        >
          Free, open-source chess analysis and training powered by Stockfish.
          Review your games, train tactics, play against the engine, and track
          your progress.
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
          justifyContent="center"
        >
          <Button
            variant="contained"
            size="large"
            onClick={() => router.push("/analysis")}
            startIcon={
              <Icon icon="streamline:magnifying-glass-solid" height={20} />
            }
            sx={{ px: 4, py: 1.5, fontSize: "0.95rem" }}
          >
            Open Analysis Board
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => router.push("/play")}
            startIcon={<Icon icon="streamline:chess-pawn" height={20} />}
            sx={{ px: 4, py: 1.5, fontSize: "0.95rem" }}
          >
            Play vs Computer
          </Button>
        </Stack>
      </Box>

      {/* ── How It Works ── */}
      <Box
        sx={{
          maxWidth: 800,
          mx: "auto",
          width: "100%",
          px: { xs: 1, sm: 2 },
          py: { xs: 4, md: 6 },
        }}
      >
        <Typography
          variant="overline"
          color="text.secondary"
          fontWeight={700}
          letterSpacing="0.08em"
          sx={{ display: "block", mb: 4, textAlign: "center" }}
        >
          How it works
        </Typography>

        <Grid container spacing={3}>
          {[
            {
              step: "1",
              title: "Load",
              description:
                "Paste a PGN, import from chess.com or lichess, or start a new game against Stockfish at any ELO.",
              icon: "mdi:file-upload-outline",
            },
            {
              step: "2",
              title: "Analyze",
              description:
                "Stockfish evaluates every move. See blunders, inaccuracies, best lines, and phase-by-phase accuracy breakdowns.",
              icon: "streamline:magnifying-glass-solid",
            },
            {
              step: "3",
              title: "Improve",
              description:
                "Review mistakes, train with puzzles, track rating trends, and build a local database of your analyzed games.",
              icon: "mdi:trending-up",
            },
          ].map((item) => (
            <Grid key={item.step} size={{ xs: 12, sm: 4 }}>
              <Stack
                spacing={2}
                alignItems="center"
                textAlign="center"
                sx={{ px: 1 }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: isDark
                      ? "rgba(201,169,110,0.1)"
                      : "rgba(201,169,110,0.07)",
                    color: "#C9A96E",
                    position: "relative",
                  }}
                >
                  <Icon icon={item.icon} width={26} height={26} />
                  <Box
                    sx={{
                      position: "absolute",
                      top: -6,
                      right: -6,
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#C9A96E",
                      color: "#1a1a1e",
                      fontSize: "0.75rem",
                      fontWeight: 800,
                    }}
                  >
                    {item.step}
                  </Box>
                </Box>
                <Box>
                  <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* ── Trust Badges ── */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
          mb: 6,
          px: 2,
        }}
      >
        {["No accounts", "No ads", "100% free", "Open source"].map((badge) => (
          <Chip
            key={badge}
            label={badge}
            icon={<Icon icon="mdi:check-circle" width={16} />}
            variant="outlined"
            sx={{
              borderRadius: 2,
              py: 2.5,
              px: 0.5,
              fontWeight: 600,
              fontSize: "0.82rem",
              borderColor: isDark
                ? "rgba(255,255,255,0.08)"
                : "rgba(0,0,0,0.08)",
              backgroundColor: isDark
                ? "rgba(255,255,255,0.015)"
                : "rgba(0,0,0,0.01)",
              "& .MuiChip-icon": {
                color: "#4caf50",
              },
            }}
          />
        ))}
      </Box>

      {/* ── Feature Grid ── */}
      <Box
        sx={{ maxWidth: 1100, mx: "auto", width: "100%", px: { xs: 1, sm: 2 } }}
      >
        <Typography
          variant="overline"
          color="text.secondary"
          fontWeight={700}
          letterSpacing="0.08em"
          sx={{
            display: "block",
            mb: 3,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Features
        </Typography>

        <Grid container spacing={2.5}>
          {features.map((feature) => (
            <Grid key={feature.title} size={{ xs: 12, sm: 6, lg: 4 }}>
              <Card
                elevation={0}
                onClick={() => router.push(feature.href)}
                sx={{
                  cursor: "pointer",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  border: "1px solid",
                  borderColor: feature.highlight
                    ? alpha("#C9A96E", 0.28)
                    : isDark
                      ? "rgba(255,255,255,0.06)"
                      : "rgba(0,0,0,0.06)",
                  backgroundColor: isDark
                    ? "rgba(255,255,255,0.025)"
                    : "rgba(255,255,255,0.72)",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    borderColor: feature.highlight
                      ? "#C9A96E"
                      : isDark
                        ? "rgba(255,255,255,0.12)"
                        : "rgba(0,0,0,0.12)",
                    transform: "translateY(-2px)",
                    boxShadow: isDark
                      ? "0 8px 32px rgba(0,0,0,0.35)"
                      : "0 8px 32px rgba(29,36,44,0.08)",
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: { xs: 2.5, sm: 3 },
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 1.5,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: isDark
                        ? "rgba(201,169,110,0.12)"
                        : "rgba(201,169,110,0.08)",
                      color: "#C9A96E",
                      mb: 2,
                    }}
                  >
                    <Icon icon={feature.icon} width={22} height={22} />
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h6"
                    component="h3"
                    fontWeight={700}
                    letterSpacing="-0.01em"
                    sx={{ mb: 1, fontSize: "1.05rem" }}
                  >
                    {feature.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2, lineHeight: 1.6, flexGrow: 1 }}
                  >
                    {feature.description}
                  </Typography>

                  {/* Tags */}
                  {feature.tags && (
                    <Stack
                      direction="row"
                      spacing={0.75}
                      flexWrap="wrap"
                      sx={{ mb: 2 }}
                    >
                      {feature.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          variant="outlined"
                          sx={{
                            borderRadius: 1,
                            fontSize: "0.7rem",
                            fontWeight: 600,
                            height: 22,
                            borderColor: isDark
                              ? "rgba(255,255,255,0.1)"
                              : "rgba(0,0,0,0.1)",
                          }}
                        />
                      ))}
                    </Stack>
                  )}

                  <Divider sx={{ mb: 1.5, opacity: 0.5 }} />

                  {/* CTA */}
                  <Typography
                    variant="body2"
                    fontWeight={700}
                    color="primary.main"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      fontSize: "0.85rem",
                    }}
                  >
                    {feature.cta}
                    <Icon icon="mdi:arrow-right" height={16} />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* ── Bottom CTA ── */}
      <Box sx={{ textAlign: "center", mt: 8, px: 2 }}>
        <Typography
          variant="h5"
          fontWeight={800}
          letterSpacing="-0.02em"
          sx={{ mb: 1.5 }}
        >
          Open source and always free
        </Typography>
        <Typography
          color="text.secondary"
          sx={{ maxWidth: 480, mx: "auto", mb: 3, lineHeight: 1.6 }}
        >
          Chesskit is built in the open. No accounts, no paywalls, no ads. Just
          chess analysis that works on any device.
        </Typography>
        <Button
          variant="outlined"
          onClick={() => router.push("/analysis")}
          endIcon={<Icon icon="mdi:arrow-right" />}
          sx={{ fontWeight: 700, px: 3, py: 1.2 }}
        >
          Get started
        </Button>
      </Box>
    </Stack>
  );
}
