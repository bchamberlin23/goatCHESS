import { PageTitle } from "@/components/pageTitle";
import { getTopicBySlug } from "@/data/learn/topics";
import {
  CATEGORY_META,
  DIFFICULTY_COLORS,
  LearnTopic,
  PracticeLine,
} from "@/data/learn/types";
import {
  Box,
  Button,
  Chip,
  Grid2 as Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import PrettyMoveSan from "@/components/prettyMoveSan";

const SECTION_TYPE_ICONS: Record<string, string> = {
  text: "mdi:text-box",
  position: "mdi:chess-board",
  moves: "mdi:play-circle",
  tip: "mdi:lightbulb",
  trap: "mdi:alert-octagon",
  "key-idea": "mdi:star",
};

type ViewMode = "lesson" | "practice";

export default function LessonPage() {
  const router = useRouter();
  const { slug } = router.query;

  const topic: LearnTopic | undefined = useMemo(() => {
    if (typeof slug !== "string") return undefined;
    return getTopicBySlug(slug);
  }, [slug]);

  // ── Core state ──────────────────────────────────
  const [viewMode, setViewMode] = useState<ViewMode>("lesson");
  const [activeSection, setActiveSection] = useState(0);
  const [fen, setFen] = useState("");
  const [moveIndex, setMoveIndex] = useState(0);

  // Quiz state
  const [quizRevealed, setQuizRevealed] = useState(false);

  // Practice state
  const [practiceLine, setPracticeLine] = useState<PracticeLine | null>(null);
  const [practiceIdx, setPracticeIdx] = useState(0);
  const [practiceFinished, setPracticeFinished] = useState(false);

  const cpuTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Derived ─────────────────────────────────────
  const section = topic?.sections[activeSection];
  const hasMoves = !!(section?.moves && section.moves.length > 0);
  const movesLength = section?.moves?.length ?? 0;
  const hasBoard = !!(section?.fen || hasMoves);
  const interactionMode =
    section?.interactionMode ?? resolveDefaultMode(section?.type ?? "position");
  const boardWidth =
    typeof window !== "undefined" && window.innerWidth < 600 ? 280 : 400;

  // ── Compute FEN ─────────────────────────────────
  const computeFen = useCallback(
    (sectionIdx: number, mIdx: number) => {
      if (!topic) return "";
      const s = topic.sections[sectionIdx];
      if (!s) return "";
      if (s.interactionMode === "quiz" && s.quizFen) return s.quizFen;
      const g = s.fen ? new Chess(s.fen) : new Chess();
      if (s.moves) {
        for (let i = 0; i < mIdx && i < s.moves.length; i++) {
          try {
            g.move(s.moves[i]);
          } catch {
            break;
          }
        }
      }
      return g.fen();
    },
    [topic]
  );

  // ── Navigate to a move index ────────────────────
  const goToMove = useCallback(
    (idx: number) => {
      if (!topic) return;
      const f = computeFen(activeSection, idx);
      setFen(f);
      setMoveIndex(idx);
      setQuizRevealed(false);
    },
    [topic, activeSection, computeFen]
  );

  // ── Reset section when section changes ──────────
  useEffect(() => {
    if (!topic) return;
    setFen(computeFen(activeSection, 0));
    setMoveIndex(0);
    setQuizRevealed(false);
  }, [topic, activeSection, computeFen]);

  // ── Keyboard: arrow keys navigate moves ─────────
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (viewMode !== "lesson") return;
      if (e.key === "ArrowRight" && hasMoves && moveIndex < movesLength)
        goToMove(moveIndex + 1);
      if (e.key === "ArrowLeft" && moveIndex > 0) goToMove(moveIndex - 1);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [viewMode, hasMoves, moveIndex, movesLength, goToMove]);

  // ── Practice: start ─────────────────────────────
  const startPractice = useCallback(() => {
    if (!topic?.practice?.lines.length) return;
    const lines = topic.practice.lines;
    const chosen = lines[Math.floor(Math.random() * lines.length)];
    const g = new Chess(topic.practice.startingFen);
    setViewMode("practice");
    setPracticeLine(chosen);
    setPracticeIdx(0);
    setPracticeFinished(false);
    setFen(g.fen());

    if (cpuTimerRef.current) clearTimeout(cpuTimerRef.current);
    cpuTimerRef.current = setTimeout(() => {
      try {
        g.move(chosen.moves[0]);
        setFen(g.fen());
        setPracticeIdx(1);
      } catch {
        /* */
      }
    }, 500);
  }, [topic]);

  // ── Practice: play user move (button click) ─────
  const playPracticeMove = useCallback(
    (moveSan: string) => {
      if (!practiceLine) return;
      const g = new Chess(fen);
      try {
        const m = g.move(moveSan);
        if (!m) return;
        setFen(g.fen());
        const next = practiceIdx + 1;
        setPracticeIdx(next);

        if (next >= practiceLine.moves.length) {
          setPracticeFinished(true);
          return;
        }

        // CPU responds
        if (cpuTimerRef.current) clearTimeout(cpuTimerRef.current);
        cpuTimerRef.current = setTimeout(() => {
          try {
            g.move(practiceLine.moves[next]);
            setFen(g.fen());
            const after = next + 1;
            setPracticeIdx(after);
            if (after >= practiceLine.moves.length) setPracticeFinished(true);
          } catch {
            /* */
          }
        }, 400);
      } catch {
        /* */
      }
    },
    [fen, practiceLine, practiceIdx]
  );

  // ── Practice: stop ──────────────────────────────
  const stopPractice = useCallback(() => {
    if (cpuTimerRef.current) clearTimeout(cpuTimerRef.current);
    setViewMode("lesson");
    setPracticeLine(null);
    setPracticeIdx(0);
    setPracticeFinished(false);
    setFen(computeFen(activeSection, 0));
    setMoveIndex(0);
  }, [activeSection, computeFen]);

  // ── Practice: try another ───────────────────────
  const newPracticeLine = useCallback(() => {
    if (cpuTimerRef.current) clearTimeout(cpuTimerRef.current);
    startPractice();
  }, [startPractice]);

  useEffect(
    () => () => {
      if (cpuTimerRef.current) clearTimeout(cpuTimerRef.current);
    },
    []
  );

  // ── Loading ─────────────────────────────────────
  if (router.isFallback || !topic || !section) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
        <Typography color="text.secondary">Loading...</Typography>
      </Box>
    );
  }

  const meta = CATEGORY_META[topic.category];
  const dc = DIFFICULTY_COLORS[topic.difficulty];
  const expectedUserMove = practiceLine
    ? practiceLine.moves[practiceIdx]
    : null;

  return (
    <Grid container gap={3} justifyContent="center" sx={{ pb: 6 }}>
      <PageTitle title={`Learn: ${topic.title} — Chesskit`} />

      {/* Header */}
      <Grid size={12} container justifyContent="center">
        <Box sx={{ width: "100%", maxWidth: 1000, px: { xs: 1, sm: 2 } }}>
          <Stack spacing={2}>
            <Button
              startIcon={<Icon icon="mdi:arrow-left" />}
              onClick={() => {
                viewMode === "practice"
                  ? stopPractice()
                  : router.push("/learn");
              }}
              sx={{
                textTransform: "none",
                color: "text.secondary",
                fontWeight: 650,
                fontSize: "0.85rem",
                alignSelf: "flex-start",
                borderRadius: 1.5,
                px: 1.5,
                "&:hover": {
                  color: "primary.main",
                  bgcolor: (t: any) =>
                    t.palette.mode === "dark"
                      ? "rgba(201,169,110,0.08)"
                      : "rgba(201,169,110,0.05)",
                },
              }}
            >
              {viewMode === "practice" ? "Exit Practice" : "Back to Learn"}
            </Button>
            <Paper
              elevation={0}
              sx={{
                bgcolor: (t: any) =>
                  t.palette.mode === "dark"
                    ? "rgba(255,255,255,0.04)"
                    : "rgba(255,255,255,0.7)",
                border: "1px solid",
                borderColor: (t: any) =>
                  t.palette.mode === "dark"
                    ? "rgba(255,255,255,0.08)"
                    : "rgba(0,0,0,0.07)",
                borderRadius: 3,
                p: { xs: 2.5, sm: 3 },
              }}
            >
              <Stack spacing={1.5}>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  flexWrap="wrap"
                  useFlexGap
                >
                  <Chip
                    label={meta.label}
                    size="small"
                    icon={<Icon icon={meta.icon} width={14} />}
                    sx={{
                      bgcolor: `${meta.color}18`,
                      color: meta.color,
                      fontWeight: 650,
                      fontSize: "0.72rem",
                    }}
                  />
                  <Chip
                    label={topic.difficulty}
                    size="small"
                    sx={{
                      bgcolor: `${dc}18`,
                      color: dc,
                      fontWeight: 650,
                      fontSize: "0.72rem",
                    }}
                  />
                  <Chip
                    label={`${topic.estimatedMinutes} min`}
                    size="small"
                    sx={{
                      fontWeight: 500,
                      fontSize: "0.72rem",
                      color: "text.secondary",
                    }}
                  />
                  {viewMode === "practice" && (
                    <Chip
                      label="PRACTICE"
                      size="small"
                      color="primary"
                      sx={{ fontWeight: 750, fontSize: "0.72rem" }}
                    />
                  )}
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1.5}>
                  <Icon icon={topic.icon} width={28} color={meta.color} />
                  <Typography
                    fontSize="1.4rem"
                    fontWeight={800}
                    letterSpacing="-0.02em"
                  >
                    {topic.title}
                    {viewMode === "practice" && practiceLine && (
                      <Typography
                        component="span"
                        fontSize="0.85rem"
                        color="text.secondary"
                        sx={{ ml: 1 }}
                      >
                        vs {practiceLine.name}
                      </Typography>
                    )}
                  </Typography>
                </Stack>
                <Typography color="text.secondary" fontSize="0.9rem">
                  {viewMode === "practice" && practiceLine
                    ? `${practiceLine.description} — ${topic.practice?.instructions}`
                    : topic.description}
                </Typography>
              </Stack>
            </Paper>
          </Stack>
        </Box>
      </Grid>

      {/* Main */}
      <Grid size={12} container justifyContent="center">
        <Box
          sx={{
            width: "100%",
            maxWidth: 1000,
            px: { xs: 1, sm: 2 },
            display: "grid",
            gridTemplateColumns:
              viewMode === "practice" ? "1fr" : { xs: "1fr", md: "220px 1fr" },
            gap: 2.5,
          }}
        >
          {/* Sidebar */}
          {viewMode === "lesson" && (
            <Paper
              elevation={0}
              sx={{
                bgcolor: (t: any) =>
                  t.palette.mode === "dark"
                    ? "rgba(255,255,255,0.03)"
                    : "rgba(255,255,255,0.6)",
                border: "1px solid",
                borderColor: (t: any) =>
                  t.palette.mode === "dark"
                    ? "rgba(255,255,255,0.06)"
                    : "rgba(0,0,0,0.06)",
                borderRadius: 2.5,
                p: 1.5,
                height: "fit-content",
                position: { xs: "static", md: "sticky" },
                top: 80,
                maxHeight: { xs: "none", md: "calc(100vh - 120px)" },
                overflow: "auto",
              }}
            >
              <Typography
                color="text.secondary"
                fontSize="0.68rem"
                fontWeight={700}
                letterSpacing="0.08em"
                sx={{ px: 1, pb: 1 }}
              >
                SECTIONS
              </Typography>
              <Stack spacing={0.25}>
                {topic.sections.map((s, i) => (
                  <Button
                    key={i}
                    fullWidth
                    onClick={() => {
                      setActiveSection(i);
                      setViewMode("lesson");
                    }}
                    sx={{
                      textTransform: "none",
                      justifyContent: "flex-start",
                      color: activeSection === i ? "#C9A96E" : "text.primary",
                      bgcolor:
                        activeSection === i
                          ? "rgba(201,169,110,0.12)"
                          : "transparent",
                      fontWeight: activeSection === i ? 700 : 500,
                      fontSize: "0.8rem",
                      py: 0.8,
                      px: 1.25,
                      borderRadius: 1.5,
                      textAlign: "left",
                      "&:hover": {
                        bgcolor:
                          activeSection === i
                            ? "rgba(201,169,110,0.18)"
                            : "rgba(201,169,110,0.06)",
                      },
                      lineHeight: 1.35,
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        mr: 1,
                        opacity: 0.6,
                        fontSize: "0.7rem",
                        flexShrink: 0,
                      }}
                    >
                      {i + 1}
                    </Box>
                    {s.title}
                  </Button>
                ))}
                {topic.practice && (
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={startPractice}
                    sx={{
                      mt: 1.5,
                      textTransform: "none",
                      fontWeight: 700,
                      fontSize: "0.82rem",
                      py: 1,
                    }}
                  >
                    <Icon icon="mdi:sword-cross" style={{ marginRight: 6 }} />
                    Start Practice
                  </Button>
                )}
              </Stack>
            </Paper>
          )}

          {/* Content */}
          <Stack spacing={2.5} minWidth={0}>
            {/* ── Board ──────────────────────────────── */}
            {hasBoard && (
              <Paper
                elevation={0}
                sx={{
                  bgcolor: "transparent",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1.5,
                  p: 1.5,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: 480,
                    aspectRatio: "1",
                    position: "relative",
                  }}
                >
                  <Chessboard
                    id="learn-board"
                    position={fen}
                    boardWidth={boardWidth}
                    arePiecesDraggable={false}
                    animationDuration={200}
                    customBoardStyle={{
                      borderRadius: "8px",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                    }}
                  />
                </Box>

                {/* Board controls */}
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  flexWrap="wrap"
                  useFlexGap
                  justifyContent="center"
                >
                  {/* Lesson: guided mode arrows */}
                  {viewMode === "lesson" &&
                    interactionMode === "guided" &&
                    hasMoves && (
                      <>
                        <IconButton
                          size="small"
                          onClick={() => goToMove(0)}
                          disabled={moveIndex === 0}
                        >
                          <Icon icon="mdi:skip-backward" width={20} />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={() => goToMove(moveIndex - 1)}
                          disabled={moveIndex === 0}
                        >
                          <Icon icon="mdi:chevron-left" width={22} />
                        </IconButton>
                        <Typography
                          color="text.secondary"
                          fontSize="0.82rem"
                          fontWeight={700}
                          sx={{ minWidth: 56, textAlign: "center" }}
                        >
                          {moveIndex}/{movesLength}
                        </Typography>
                        <IconButton
                          size="small"
                          onClick={() => goToMove(moveIndex + 1)}
                          disabled={moveIndex >= movesLength}
                        >
                          <Icon icon="mdi:chevron-right" width={22} />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={() => goToMove(movesLength)}
                          disabled={moveIndex >= movesLength}
                        >
                          <Icon icon="mdi:skip-forward" width={20} />
                        </IconButton>
                      </>
                    )}

                  {/* Lesson: quiz mode reveal */}
                  {viewMode === "lesson" &&
                    interactionMode === "quiz" &&
                    section.quizAnswer &&
                    (!quizRevealed ? (
                      <Button
                        size="small"
                        variant="contained"
                        color="error"
                        onClick={() => setQuizRevealed(true)}
                        sx={{
                          textTransform: "none",
                          fontWeight: 700,
                          fontSize: "0.8rem",
                        }}
                      >
                        Reveal Answer
                      </Button>
                    ) : (
                      <Paper
                        elevation={0}
                        sx={{
                          bgcolor: "#74b03815",
                          border: "1px solid #74b03840",
                          borderRadius: 2,
                          px: 2,
                          py: 1,
                        }}
                      >
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <Icon
                            icon="mdi:check-circle"
                            color="#74b038"
                            width={20}
                          />
                          <Typography
                            color="#74b038"
                            fontWeight={700}
                            fontSize="0.85rem"
                          >
                            Answer:{" "}
                            <PrettyMoveSan
                              san={section.quizAnswer[0]}
                              color={
                                section.orientation === "black" ? "b" : "w"
                              }
                              typographyProps={{
                                fontSize: "0.9rem",
                                fontWeight: 800,
                              }}
                            />
                          </Typography>
                        </Stack>
                      </Paper>
                    ))}

                  {/* Lesson: freeplay / position / key-idea — just the board, no controls needed */}
                  {viewMode === "lesson" &&
                    interactionMode === "freeplay" &&
                    !hasMoves && (
                      <Typography color="text.secondary" fontSize="0.72rem">
                        Position for reference
                      </Typography>
                    )}

                  {/* Practice: expected move button */}
                  {viewMode === "practice" &&
                    practiceLine &&
                    !practiceFinished &&
                    (expectedUserMove ? (
                      <Stack spacing={1.5} alignItems="center">
                        <Typography color="text.secondary" fontSize="0.78rem">
                          Your turn — play:
                        </Typography>
                        <Button
                          variant="contained"
                          size="large"
                          onClick={() => playPracticeMove(expectedUserMove)}
                          sx={{
                            textTransform: "none",
                            fontWeight: 800,
                            fontSize: "1rem",
                            px: 3,
                            py: 1,
                          }}
                        >
                          <PrettyMoveSan
                            san={expectedUserMove}
                            color={practiceIdx % 2 === 1 ? "w" : "b"}
                            typographyProps={{
                              fontSize: "1.05rem",
                              fontWeight: 800,
                            }}
                          />
                        </Button>
                        <Typography color="text.secondary" fontSize="0.68rem">
                          Click the button to play this move — the CPU will
                          respond
                        </Typography>
                      </Stack>
                    ) : (
                      <Typography color="text.secondary" fontSize="0.78rem">
                        CPU thinking...
                      </Typography>
                    ))}

                  {/* Practice: finished */}
                  {viewMode === "practice" && practiceFinished && (
                    <Stack spacing={1.5} alignItems="center">
                      <Typography
                        color="#74b038"
                        fontSize="0.95rem"
                        fontWeight={800}
                      >
                        ✓ Line completed!
                      </Typography>
                      <Stack direction="row" spacing={1}>
                        <Button
                          size="small"
                          variant="contained"
                          onClick={newPracticeLine}
                          startIcon={<Icon icon="mdi:shuffle" />}
                          sx={{ textTransform: "none", fontWeight: 700 }}
                        >
                          Try Another
                        </Button>
                        <Button
                          size="small"
                          variant="outlined"
                          onClick={stopPractice}
                          sx={{ textTransform: "none" }}
                        >
                          Back to Lesson
                        </Button>
                      </Stack>
                    </Stack>
                  )}
                </Stack>
              </Paper>
            )}

            {/* Practice info */}
            {viewMode === "practice" && practiceLine && !practiceFinished && (
              <Paper
                elevation={0}
                sx={{
                  bgcolor: (t: any) =>
                    t.palette.mode === "dark"
                      ? "rgba(201,169,110,0.06)"
                      : "rgba(201,169,110,0.04)",
                  border: "1px solid rgba(201,169,110,0.2)",
                  borderRadius: 2,
                  p: 2,
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1.5}>
                  <Icon icon="mdi:information" color="#C9A96E" width={20} />
                  <Stack spacing={0.25}>
                    <Typography
                      fontWeight={700}
                      fontSize="0.82rem"
                      color="#C9A96E"
                    >
                      {practiceLine.name}
                    </Typography>
                    <Typography fontSize="0.78rem" color="text.secondary">
                      {practiceLine.description} — Click the highlighted move
                      button above to play.
                    </Typography>
                  </Stack>
                </Stack>
              </Paper>
            )}

            {/* Move chips */}
            {viewMode === "lesson" &&
              interactionMode === "guided" &&
              hasMoves &&
              movesLength > 0 && (
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: (t: any) =>
                      t.palette.mode === "dark"
                        ? "rgba(255,255,255,0.03)"
                        : "rgba(255,255,255,0.6)",
                    border: "1px solid",
                    borderColor: (t: any) =>
                      t.palette.mode === "dark"
                        ? "rgba(255,255,255,0.06)"
                        : "rgba(0,0,0,0.06)",
                    borderRadius: 2.5,
                    p: 2,
                  }}
                >
                  <Typography
                    fontWeight={700}
                    fontSize="0.85rem"
                    sx={{ mb: 1 }}
                  >
                    Move Sequence — click any move to jump
                  </Typography>
                  <Stack
                    direction="row"
                    flexWrap="wrap"
                    spacing={0.5}
                    useFlexGap
                    sx={{ maxHeight: 130, overflow: "auto" }}
                  >
                    {section.moves!.map((san, i) => {
                      const isWhite = i % 2 === 0;
                      const isCurrent = i === moveIndex - 1;
                      const isPlayed = i < moveIndex;
                      return (
                        <Button
                          key={i}
                          size="small"
                          variant={isCurrent ? "contained" : "outlined"}
                          onClick={() => goToMove(i + 1)}
                          sx={{
                            minWidth: 0,
                            px: isWhite ? 1 : 0.7,
                            py: 0.3,
                            fontSize: "0.78rem",
                            fontWeight: isCurrent ? 750 : 500,
                            opacity: isPlayed && !isCurrent ? 0.45 : 1,
                            transition: "all 0.15s",
                          }}
                        >
                          {isWhite && (
                            <Box
                              component="span"
                              sx={{
                                mr: 0.3,
                                opacity: 0.5,
                                fontSize: "0.65rem",
                              }}
                            >
                              {Math.floor(i / 2) + 1}.
                            </Box>
                          )}
                          <PrettyMoveSan
                            san={san}
                            color={isWhite ? "w" : "b"}
                            typographyProps={{
                              fontSize: "0.8rem",
                              fontWeight: 750,
                            }}
                          />
                        </Button>
                      );
                    })}
                  </Stack>
                  <Typography
                    color="text.secondary"
                    fontSize="0.68rem"
                    sx={{ mt: 1 }}
                  >
                    Tip: use ← → arrow keys to step through moves
                  </Typography>
                </Paper>
              )}

            {/* Section content */}
            {viewMode === "lesson" && (
              <Paper
                elevation={0}
                sx={{
                  bgcolor: (t: any) =>
                    t.palette.mode === "dark"
                      ? "rgba(255,255,255,0.04)"
                      : "rgba(255,255,255,0.7)",
                  border: "1px solid",
                  borderColor: (t: any) =>
                    t.palette.mode === "dark"
                      ? "rgba(255,255,255,0.08)"
                      : "rgba(0,0,0,0.07)",
                  borderRadius: 3,
                  p: { xs: 2.5, sm: 3 },
                }}
              >
                <Stack spacing={2.5}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: 1.5,
                        bgcolor: `${meta.color}18`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon
                        icon={
                          SECTION_TYPE_ICONS[section.type] || "mdi:information"
                        }
                        width={18}
                        color={meta.color}
                      />
                    </Box>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography fontWeight={750} fontSize="1.05rem">
                        {section.title}
                      </Typography>
                      {interactionMode === "quiz" && (
                        <Chip
                          label="QUIZ"
                          size="small"
                          sx={{
                            bgcolor: "#df535320",
                            color: "#df5353",
                            fontWeight: 700,
                            fontSize: "0.65rem",
                            height: 20,
                          }}
                        />
                      )}
                      {interactionMode === "guided" && (
                        <Chip
                          label="GUIDED"
                          size="small"
                          sx={{
                            bgcolor: "#74b03820",
                            color: "#74b038",
                            fontWeight: 700,
                            fontSize: "0.65rem",
                            height: 20,
                          }}
                        />
                      )}
                    </Stack>
                  </Stack>

                  {/* Move description for current step */}
                  {section.moveDescriptions && moveIndex > 0 && (
                    <Paper
                      elevation={0}
                      sx={{
                        bgcolor: (t: any) =>
                          t.palette.mode === "dark"
                            ? "rgba(201,169,110,0.08)"
                            : "rgba(201,169,110,0.06)",
                        border: "1px solid rgba(201,169,110,0.2)",
                        borderRadius: 2,
                        p: 2,
                      }}
                    >
                      <Stack spacing={1}>
                        <Typography
                          fontWeight={700}
                          fontSize="0.8rem"
                          color="#C9A96E"
                        >
                          Move {moveIndex}:{" "}
                          <PrettyMoveSan
                            san={section.moves![moveIndex - 1]}
                            color={moveIndex % 2 === 1 ? "w" : "b"}
                            typographyProps={{
                              fontSize: "0.85rem",
                              fontWeight: 800,
                            }}
                          />
                        </Typography>
                        <Typography fontSize="0.85rem" lineHeight={1.6}>
                          {section.moveDescriptions[moveIndex - 1]}
                        </Typography>
                      </Stack>
                    </Paper>
                  )}

                  {section.content && (
                    <Typography
                      fontSize="0.9rem"
                      lineHeight={1.7}
                      sx={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
                    >
                      {section.content}
                    </Typography>
                  )}
                </Stack>
              </Paper>
            )}

            {/* Lesson: section nav + practice CTA */}
            {viewMode === "lesson" && (
              <>
                <Stack direction="row" justifyContent="space-between">
                  <Button
                    startIcon={<Icon icon="mdi:arrow-left" />}
                    disabled={activeSection === 0}
                    onClick={() => setActiveSection((s) => s - 1)}
                    sx={{ textTransform: "none", fontWeight: 600 }}
                  >
                    Previous
                  </Button>
                  <Button
                    endIcon={<Icon icon="mdi:arrow-right" />}
                    disabled={activeSection >= topic.sections.length - 1}
                    onClick={() => setActiveSection((s) => s + 1)}
                    sx={{ textTransform: "none", fontWeight: 600 }}
                  >
                    Next Section
                  </Button>
                </Stack>

                {topic.practice && (
                  <Paper
                    elevation={0}
                    sx={{
                      bgcolor: (t: any) =>
                        t.palette.mode === "dark"
                          ? "rgba(201,169,110,0.08)"
                          : "rgba(201,169,110,0.05)",
                      border: "2px dashed rgba(201,169,110,0.35)",
                      borderRadius: 3,
                      p: 3,
                      textAlign: "center",
                    }}
                  >
                    <Stack spacing={1.5} alignItems="center">
                      <Icon icon="mdi:sword-cross" width={36} color="#C9A96E" />
                      <Typography fontWeight={800} fontSize="1.1rem">
                        Ready to practice?
                      </Typography>
                      <Typography
                        color="text.secondary"
                        fontSize="0.85rem"
                        sx={{ maxWidth: 500 }}
                      >
                        The CPU will randomly pick a Black defense. Click the
                        highlighted move button to play each White response.
                      </Typography>
                      <Button
                        variant="contained"
                        size="large"
                        onClick={startPractice}
                        startIcon={<Icon icon="mdi:play" />}
                        sx={{
                          textTransform: "none",
                          fontWeight: 800,
                          px: 4,
                          py: 1.2,
                          borderRadius: 2,
                        }}
                      >
                        Start Practice
                      </Button>
                    </Stack>
                  </Paper>
                )}

                <Stack alignItems="center" spacing={0.5}>
                  <Box
                    sx={{
                      height: 4,
                      borderRadius: 999,
                      bgcolor: (t: any) =>
                        t.palette.mode === "dark"
                          ? "rgba(255,255,255,0.06)"
                          : "rgba(0,0,0,0.06)",
                      width: "100%",
                      maxWidth: 400,
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        height: "100%",
                        borderRadius: 999,
                        bgcolor: meta.color,
                        width: `${((activeSection + 1) / topic.sections.length) * 100}%`,
                        transition: "width 0.3s ease",
                      }}
                    />
                  </Box>
                  <Typography color="text.secondary" fontSize="0.72rem">
                    Section {activeSection + 1} of {topic.sections.length}
                  </Typography>
                </Stack>
              </>
            )}
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}

function resolveDefaultMode(type: string): "freeplay" | "guided" | "quiz" {
  if (type === "moves") return "guided";
  if (type === "trap") return "quiz";
  return "freeplay";
}
