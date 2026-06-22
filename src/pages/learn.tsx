import { PageTitle } from "@/components/pageTitle";
import { allTopics, getTopicsByCategory } from "@/data/learn/topics";
import {
  CATEGORY_META,
  DIFFICULTY_COLORS,
  TopicCategory,
  LearnTopic,
} from "@/data/learn/types";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Grid2 as Grid,
  Paper,
  Stack,
  Tabs,
  Tab,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";

const CATEGORIES: TopicCategory[] = [
  "openings",
  "mates",
  "tactics",
  "strategy",
  "endgames",
];

export default function LearnHubPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<
    TopicCategory | "all"
  >("all");

  const displayedTopics = useMemo(() => {
    if (selectedCategory === "all") return allTopics;
    return getTopicsByCategory(selectedCategory);
  }, [selectedCategory]);

  return (
    <Grid container gap={3} justifyContent="center" sx={{ pb: 6 }}>
      <PageTitle title="Learn Chess — Openings, Tactics, Endgames &amp; More" />

      {/* Header */}
      <Grid size={12} container justifyContent="center">
        <Stack
          alignItems="center"
          spacing={1}
          sx={{ maxWidth: 700, textAlign: "center", mt: 1 }}
        >
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Icon icon="mdi:school" width={32} color="#C9A96E" />
            <Typography
              fontSize={{ xs: "1.5rem", sm: "1.8rem" }}
              fontWeight={800}
              letterSpacing="-0.02em"
            >
              Chess Learning Center
            </Typography>
          </Stack>
          <Typography
            color="text.secondary"
            fontSize="0.95rem"
            sx={{ maxWidth: 540 }}
          >
            Master chess from openings to endgames. Each lesson includes
            interactive board positions, annotated move sequences, key strategic
            ideas, and practical examples.
          </Typography>
        </Stack>
      </Grid>

      {/* Category Tabs */}
      <Grid size={12} container justifyContent="center">
        <Paper
          elevation={0}
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.03)"
                : "rgba(255, 255, 255, 0.6)",
            border: "1px solid",
            borderColor: (theme) =>
              theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.06)"
                : "rgba(0, 0, 0, 0.06)",
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          <Tabs
            value={selectedCategory}
            onChange={(_, val) => setSelectedCategory(val)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ px: 1 }}
          >
            <Tab
              value="all"
              label={
                <Stack direction="row" alignItems="center" spacing={0.75}>
                  <Icon icon="mdi:view-grid" width={18} />
                  <span>All Topics</span>
                </Stack>
              }
            />
            {CATEGORIES.map((cat) => {
              const meta = CATEGORY_META[cat];
              const count = getTopicsByCategory(cat).length;
              return (
                <Tab
                  key={cat}
                  value={cat}
                  label={
                    <Stack direction="row" alignItems="center" spacing={0.75}>
                      <Icon icon={meta.icon} width={18} />
                      <span>{meta.label}</span>
                      <Box
                        component="span"
                        sx={{
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          color: "text.secondary",
                          backgroundColor: (theme) =>
                            theme.palette.mode === "dark"
                              ? "rgba(255,255,255,0.08)"
                              : "rgba(0,0,0,0.06)",
                          borderRadius: 999,
                          px: 0.9,
                          py: 0.15,
                          ml: 0.25,
                        }}
                      >
                        {count}
                      </Box>
                    </Stack>
                  }
                />
              );
            })}
          </Tabs>
        </Paper>
      </Grid>

      {/* Category Description */}
      {selectedCategory !== "all" && (
        <Grid size={12} container justifyContent="center">
          <Box sx={{ maxWidth: 1200, width: "100%", px: { xs: 1, sm: 2 } }}>
            <Stack direction="row" alignItems="flex-start" spacing={1.5}>
              <Box
                sx={{
                  width: 4,
                  height: "100%",
                  minHeight: 40,
                  borderRadius: 999,
                  backgroundColor: CATEGORY_META[selectedCategory].color,
                  flexShrink: 0,
                  mt: 0.3,
                }}
              />
              <Stack spacing={0.5}>
                <Typography fontWeight={750} fontSize="1.1rem">
                  {CATEGORY_META[selectedCategory].label}
                </Typography>
                <Typography color="text.secondary" fontSize="0.88rem">
                  {CATEGORY_META[selectedCategory].description}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Grid>
      )}

      {/* Topic Cards Grid */}
      <Grid size={12} container justifyContent="center">
        <Box
          sx={{
            width: "100%",
            maxWidth: 1200,
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              lg: "1fr 1fr 1fr",
            },
            gap: 2,
            px: { xs: 1, sm: 2 },
          }}
        >
          {displayedTopics.map((topic) => (
            <TopicCard
              key={topic.slug}
              topic={topic}
              onClick={() => router.push(`/learn/${topic.slug}`)}
            />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}

function TopicCard({
  topic,
  onClick,
}: {
  topic: LearnTopic;
  onClick: () => void;
}) {
  const meta = CATEGORY_META[topic.category];
  const difficultyColor = DIFFICULTY_COLORS[topic.difficulty];

  return (
    <Card
      elevation={0}
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.03)"
            : "rgba(255,255,255,0.65)",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.07)"
            : "rgba(0,0,0,0.06)",
        borderRadius: 3,
        transition: "all 0.18s ease",
        "&:hover": {
          borderColor: meta.color,
          transform: "translateY(-2px)",
          boxShadow: (theme) =>
            theme.palette.mode === "dark"
              ? `0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px ${meta.color}22`
              : `0 8px 32px rgba(0,0,0,0.08), 0 0 0 1px ${meta.color}22`,
        },
      }}
    >
      <CardActionArea onClick={onClick} sx={{ p: 0 }}>
        <CardContent sx={{ p: 2.5, "&:last-child": { pb: 2.5 } }}>
          <Stack spacing={1.5}>
            {/* Header row */}
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  backgroundColor: `${meta.color}18`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon icon={topic.icon} width={22} color={meta.color} />
              </Box>
              <Stack spacing={0.25} minWidth={0}>
                <Typography
                  fontWeight={750}
                  fontSize="0.95rem"
                  letterSpacing="-0.01em"
                  noWrap
                >
                  {topic.title}
                </Typography>
                <Typography color="text.secondary" fontSize="0.75rem" noWrap>
                  {meta.label}
                </Typography>
              </Stack>
            </Stack>

            {/* Description */}
            <Typography
              color="text.secondary"
              fontSize="0.82rem"
              lineHeight={1.5}
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {topic.description}
            </Typography>

            {/* Tags and difficulty */}
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              flexWrap="wrap"
              useFlexGap
            >
              <Chip
                label={topic.difficulty}
                size="small"
                sx={{
                  fontSize: "0.7rem",
                  fontWeight: 650,
                  height: 22,
                  backgroundColor: `${difficultyColor}18`,
                  color: difficultyColor,
                  border: `1px solid ${difficultyColor}40`,
                }}
              />
              <Chip
                label={`${topic.estimatedMinutes} min`}
                size="small"
                sx={{
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  height: 22,
                  backgroundColor: "transparent",
                  color: "text.secondary",
                  border: "1px solid",
                  borderColor: (theme) =>
                    theme.palette.mode === "dark"
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(0,0,0,0.1)",
                }}
              />
              <Typography
                color="text.secondary"
                fontSize="0.7rem"
                sx={{ ml: "auto" }}
              >
                {topic.sections.length} sections
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
