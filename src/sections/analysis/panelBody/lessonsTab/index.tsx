import { CLASSIFICATION_COLORS } from "@/constants";
import PrettyMoveSan from "@/components/prettyMoveSan";
import { moveLineUciToSan } from "@/lib/chess";
import { capitalize } from "@/lib/helpers";
import { MoveClassification } from "@/types/enums";
import { PositionEval } from "@/types/eval";
import {
  Box,
  Button,
  Grid2 as Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useAtomValue } from "jotai";
import Image from "next/image";
import type { ReactNode } from "react";
import { useMemo } from "react";
import { boardAtom, gameAtom, gameEvalAtom } from "../../states";
import { useChessActions } from "@/hooks/useChessActions";

interface LessonMove {
  moveIdx: number;
  san: string;
  color: "w" | "b";
  classification?: MoveClassification;
  swing: number;
  evalBefore?: PositionEval;
  evalAfter?: PositionEval;
  fenBefore: string;
}

const negativeClassifications = [
  MoveClassification.Inaccuracy,
  MoveClassification.Mistake,
  MoveClassification.Blunder,
];

export default function LessonsTab(props: Parameters<typeof Grid>[0]) {
  const game = useAtomValue(gameAtom);
  const gameEval = useAtomValue(gameEvalAtom);
  const { goToMove } = useChessActions(boardAtom);

  const lessons = useMemo(() => {
    if (!gameEval) return [];

    const history = game.history({ verbose: true });
    return history.map((move, idx): LessonMove => {
      const evalBefore = gameEval.positions[idx];
      const evalAfter = gameEval.positions[idx + 1];
      const colorFactor = move.color === "w" ? 1 : -1;

      return {
        moveIdx: idx + 1,
        san: move.san,
        color: move.color,
        classification: evalAfter?.moveClassification,
        fenBefore: move.before,
        swing:
          (getEvalScore(evalAfter) - getEvalScore(evalBefore)) * colorFactor,
        evalBefore,
        evalAfter,
      };
    });
  }, [game, gameEval]);

  if (!gameEval) return null;

  const turningPoints = lessons
    .slice()
    .sort((a, b) => Math.abs(b.swing) - Math.abs(a.swing))
    .slice(0, 3);
  const missedMoves = lessons
    .filter((lesson) =>
      lesson.classification
        ? negativeClassifications.includes(lesson.classification)
        : false
    )
    .slice(0, 5);
  const firstNonBook = lessons.find(
    (lesson) => lesson.classification !== MoveClassification.Opening
  );
  const phaseRows = getPhaseRows(lessons);

  return (
    <Grid
      container
      size={12}
      alignItems="stretch"
      justifyContent="center"
      gap={1.5}
      {...props}
      flexGrow={1}
      sx={
        props.hidden
          ? { display: "none" }
          : {
              minHeight: 0,
              overflowY: "auto",
              flexGrow: 1,
              scrollbarWidth: "thin",
              ...props.sx,
            }
      }
    >
      <LessonPanel title="Top Turning Points" grow>
        <Stack gap={1}>
          {turningPoints.map((lesson) => (
            <LessonMoveRow
              key={lesson.moveIdx}
              lesson={lesson}
              onJump={() => goToMove(lesson.moveIdx, game)}
            />
          ))}
        </Stack>
      </LessonPanel>

      <LessonPanel title="Missed Chances" grow>
        {missedMoves.length ? (
          <Stack gap={1}>
            {missedMoves.map((lesson) => (
              <LessonMoveRow
                key={lesson.moveIdx}
                lesson={lesson}
                onJump={() => goToMove(lesson.moveIdx, game)}
                showBestMove
              />
            ))}
          </Stack>
        ) : (
          <EmptyText>No major mistakes or blunders found.</EmptyText>
        )}
      </LessonPanel>

      <LessonPanel title="Opening Exit">
        {firstNonBook ? (
          <Stack gap={1}>
            <Typography color="text.secondary" fontSize="0.86rem">
              Book play ended around move {Math.ceil(firstNonBook.moveIdx / 2)}.
              Start review here if you want the first original decision.
            </Typography>
            <LessonMoveRow
              lesson={firstNonBook}
              onJump={() => goToMove(firstNonBook.moveIdx, game)}
            />
          </Stack>
        ) : (
          <EmptyText>This game stayed inside opening theory.</EmptyText>
        )}
      </LessonPanel>

      <LessonPanel title="Phase Focus">
        <Stack gap={1}>
          {phaseRows.map((phase) => (
            <Box
              key={phase.label}
              sx={{
                alignItems: "center",
                display: "grid",
                gap: 1,
                gridTemplateColumns: "5.5rem minmax(0, 1fr) 3rem",
              }}
            >
              <Typography fontSize="0.86rem" fontWeight={750}>
                {phase.label}
              </Typography>
              <Box
                sx={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  borderRadius: 999,
                  height: 8,
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    backgroundColor:
                      phase.lossScore > 0 ? "#df5353" : "#74b038",
                    height: "100%",
                    width: `${Math.min(100, Math.abs(phase.lossScore) * 3)}%`,
                  }}
                />
              </Box>
              <Typography
                color={phase.lossScore > 0 ? "#df5353" : "#74b038"}
                fontSize="0.82rem"
                fontWeight={800}
                textAlign="right"
              >
                {phase.lossScore > 0 ? "-" : "+"}
                {Math.abs(phase.lossScore).toFixed(1)}
              </Typography>
            </Box>
          ))}
        </Stack>
      </LessonPanel>
    </Grid>
  );
}

function LessonPanel({
  title,
  children,
  grow,
}: {
  title: string;
  children: ReactNode;
  grow?: boolean;
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, 0.035)"
            : "rgba(255, 255, 255, 0.72)",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, 0.08)"
            : "rgba(0, 0, 0, 0.07)",
        borderRadius: 2,
        flex: grow ? "1 1 25rem" : "1 1 18rem",
        minWidth: { xs: "100%", md: grow ? "24rem" : "18rem" },
        padding: { xs: 1.5, sm: 2 },
      }}
    >
      <Typography
        color="text.secondary"
        fontSize="0.78rem"
        fontWeight={700}
        paddingBottom={1.1}
      >
        {title.toUpperCase()}
      </Typography>
      {children}
    </Paper>
  );
}

function LessonMoveRow({
  lesson,
  onJump,
  showBestMove,
}: {
  lesson: LessonMove;
  onJump: () => void;
  showBestMove?: boolean;
}) {
  const bestMove = getBestMoveSan(lesson);
  const color = lesson.classification
    ? CLASSIFICATION_COLORS[lesson.classification]
    : "text.secondary";

  return (
    <Box
      sx={{
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.12)",
        border: "1px solid rgba(255, 255, 255, 0.07)",
        borderRadius: 1.5,
        display: "grid",
        gap: 1,
        gridTemplateColumns: "2.4rem minmax(0, 1fr) auto",
        padding: "0.65rem 0.75rem",
      }}
    >
      <Typography color="text.secondary" fontSize="0.82rem" fontWeight={800}>
        {Math.ceil(lesson.moveIdx / 2)}
        {lesson.color === "b" ? "..." : "."}
      </Typography>

      <Box minWidth={0}>
        <Stack direction="row" alignItems="center" spacing={0.75} minWidth={0}>
          {lesson.classification && (
            <Image
              src={`/icons/${lesson.classification}.png`}
              alt=""
              width={16}
              height={16}
            />
          )}
          <PrettyMoveSan
            san={lesson.san}
            color={lesson.color}
            typographyProps={{ fontSize: "0.9rem", fontWeight: 850 }}
          />
          <Typography color={color} fontSize="0.82rem" fontWeight={800} noWrap>
            {lesson.classification
              ? capitalize(lesson.classification)
              : "Unclassified"}
          </Typography>
        </Stack>

        <Typography color="text.secondary" fontSize="0.78rem" noWrap>
          {showBestMove && bestMove
            ? `Best was ${bestMove}`
            : getSwingLabel(lesson.swing)}
        </Typography>
      </Box>

      <Button size="small" variant="text" onClick={onJump} sx={{ minWidth: 0 }}>
        Jump
      </Button>
    </Box>
  );
}

function EmptyText({ children }: { children: ReactNode }) {
  return (
    <Typography color="text.secondary" fontSize="0.86rem">
      {children}
    </Typography>
  );
}

function getBestMoveSan(lesson: LessonMove) {
  const bestMove = lesson.evalBefore?.bestMove;
  if (!bestMove) return undefined;

  return moveLineUciToSan(lesson.fenBefore)(bestMove);
}

function getSwingLabel(swing: number) {
  if (Math.abs(swing) < 20) return "Position stayed about the same";
  if (swing > 0) return `Gained about ${(swing / 100).toFixed(1)} pawns`;
  return `Lost about ${(Math.abs(swing) / 100).toFixed(1)} pawns`;
}

function getEvalScore(position?: PositionEval) {
  const line = position?.lines[0];
  if (!line) return 0;
  if (line.mate) return line.mate > 0 ? 10000 : -10000;
  return line.cp ?? 0;
}

function getPhaseRows(lessons: LessonMove[]) {
  const phases = [
    { label: "Opening", moves: lessons.slice(0, 16) },
    { label: "Middlegame", moves: lessons.slice(16, 60) },
    { label: "Endgame", moves: lessons.slice(60) },
  ];

  return phases.map((phase) => ({
    label: phase.label,
    lossScore:
      phase.moves.reduce((sum, move) => sum + Math.min(0, move.swing), 0) / 100,
  }));
}
