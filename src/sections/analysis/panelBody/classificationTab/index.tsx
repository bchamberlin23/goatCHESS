import { Icon } from "@iconify/react";
import { CLASSIFICATION_COLORS } from "@/constants";
import PrettyMoveSan from "@/components/prettyMoveSan";
import { getLineEvalLabel } from "@/lib/chess";
import { capitalize } from "@/lib/helpers";
import { MoveClassification } from "@/types/enums";
import { Box, BoxProps, Paper, Stack, Typography } from "@mui/material";
import { useAtomValue, useSetAtom } from "jotai";
import Image from "next/image";
import MovesPanel from "./movesPanel";
import GraphTab from "../graphTab";
import {
  boardAtom,
  currentPositionAtom,
  tabAtom,
  selectedClassificationAtom,
} from "../../states";

export default function ClassificationTab({ sx, ...props }: BoxProps) {
  return (
    <Box
      {...props}
      sx={[
        {
          display: props.hidden ? "none" : "flex",
          flexDirection: "column",
          flexGrow: 1,
          gap: 1.5,
          minHeight: 0,
          height: "100%",
          width: "100%",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <MoveReviewCard />

      <MovesPanel />

      <GraphTab size={12} />
    </Box>
  );
}

function MoveReviewCard() {
  const board = useAtomValue(boardAtom);
  const position = useAtomValue(currentPositionAtom);
  const setTab = useSetAtom(tabAtom);
  const setSelectedClassification = useSetAtom(selectedClassificationAtom);

  const boardHistory = board.history({ verbose: true });
  const selectedMove = boardHistory.at(-1);
  const classification = position.eval?.moveClassification;
  const evaluationLabel = position.eval?.lines[0]
    ? getLineEvalLabel(position.eval.lines[0])
    : undefined;

  const isClickable = !!classification && !!selectedMove;

  const handleClick = () => {
    if (isClickable) {
      setSelectedClassification(classification);
      setTab(0);
    }
  };

  return (
    <Paper
      elevation={0}
      onClick={handleClick}
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
        overflow: "hidden",
        width: "100%",
        cursor: isClickable ? "pointer" : "default",
        "&:hover": isClickable
          ? {
              backgroundColor: (theme) =>
                theme.palette.mode === "dark"
                  ? "rgba(255, 255, 255, 0.06)"
                  : "rgba(255, 255, 255, 0.8)",
              borderColor: (theme) =>
                theme.palette.mode === "dark"
                  ? "rgba(255, 255, 255, 0.15)"
                  : "rgba(0, 0, 0, 0.12)",
            }
          : {},
        transition: "all 0.15s ease",
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          display: "grid",
          gap: 1.5,
          gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) auto" },
          padding: { xs: 1.25, sm: 1.5 },
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1.25} minWidth={0}>
          <ClassificationIcon classification={classification} />

          <Box minWidth={0}>
            <Typography fontSize="1rem" fontWeight={850} lineHeight={1.25}>
              {selectedMove ? (
                <>
                  <PrettyMoveSan
                    san={selectedMove.san}
                    color={selectedMove.color}
                    typographyProps={{
                      component: "span",
                      fontSize: "1rem",
                      fontWeight: 850,
                    }}
                  />{" "}
                  {getMoveHeadline(classification)}
                </>
              ) : (
                "Step into the first move"
              )}
            </Typography>

            <Typography
              color="text.secondary"
              fontSize="0.88rem"
              marginTop={0.45}
            >
              {getMoveDescription(classification, !!selectedMove)}
            </Typography>
          </Box>
        </Stack>

        <Box
          sx={{
            alignSelf: "start",
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1a1a1e" : "#f4f1e8",
            borderRadius: 1,
            color: (theme) =>
              theme.palette.mode === "dark" ? "#f4f2ec" : "#222426",
            fontSize: "0.96rem",
            fontWeight: 850,
            minWidth: "4.4rem",
            padding: "0.42rem 0.65rem",
            textAlign: "center",
          }}
        >
          {evaluationLabel ?? "0.00"}
        </Box>
      </Box>
    </Paper>
  );
}

function ClassificationIcon({
  classification,
}: {
  classification?: MoveClassification;
}) {
  if (!classification) {
    return (
      <Box
        sx={{
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          borderRadius: "50%",
          display: "flex",
          height: 32,
          justifyContent: "center",
          minWidth: 32,
          width: 32,
        }}
      >
        <Icon icon="mdi:cursor-default-click" height={18} />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        alignItems: "center",
        backgroundColor: CLASSIFICATION_COLORS[classification],
        borderRadius: "50%",
        display: "flex",
        height: 32,
        justifyContent: "center",
        minWidth: 32,
        width: 32,
      }}
    >
      <Image
        src={`/icons/${classification}.png`}
        alt=""
        width={20}
        height={20}
      />
    </Box>
  );
}

function getMoveHeadline(classification?: MoveClassification) {
  if (!classification) return "";

  const labels: Partial<Record<MoveClassification, string>> = {
    [MoveClassification.Splendid]: "is brilliant",
    [MoveClassification.Perfect]: "is great",
    [MoveClassification.Best]: "is best",
    [MoveClassification.Excellent]: "is excellent",
    [MoveClassification.Okay]: "is okay",
    [MoveClassification.Opening]: "is a book move",
    [MoveClassification.Inaccuracy]: "is inaccurate",
    [MoveClassification.Mistake]: "is a mistake",
    [MoveClassification.Blunder]: "is a blunder",
    [MoveClassification.Forced]: "is forced",
  };

  return labels[classification] ?? `is ${capitalize(classification)}`;
}

function getMoveDescription(
  classification: MoveClassification | undefined,
  hasSelectedMove: boolean
) {
  if (!hasSelectedMove) {
    return "Select a move from the list below to review its details.";
  }

  switch (classification) {
    case MoveClassification.Splendid:
      return "A rare tactical find that keeps or improves the position.";
    case MoveClassification.Perfect:
      return "The clean solution. Other moves would have let the advantage slip.";
    case MoveClassification.Best:
      return "This matches the engine's preferred plan.";
    case MoveClassification.Excellent:
      return "A strong practical move with little or no downside.";
    case MoveClassification.Okay:
      return "Playable, but there was a cleaner way to continue.";
    case MoveClassification.Opening:
      return "Book theory. This move has proven reliable in many games.";
    case MoveClassification.Inaccuracy:
      return "A small slip. The position is still playable, but the advantage changed.";
    case MoveClassification.Mistake:
      return "This gives away a meaningful chunk of the position.";
    case MoveClassification.Blunder:
      return "A major miss. Look for the tactic or defensive resource that changed.";
    case MoveClassification.Forced:
      return "The position leaves very little choice here.";
    default:
      return "Review the engine line below to compare plans.";
  }
}
