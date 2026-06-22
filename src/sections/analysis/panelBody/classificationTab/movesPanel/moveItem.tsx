import { MoveClassification } from "@/types/enums";
import { Box } from "@mui/material";
import Image from "next/image";
import { useAtomValue } from "jotai";
import { boardAtom, currentPositionAtom, gameAtom } from "../../../states";
import { useChessActions } from "@/hooks/useChessActions";
import { useEffect } from "react";
import { isInViewport } from "@/lib/helpers";
import { CLASSIFICATION_COLORS } from "@/constants";
import PrettyMoveSan from "@/components/prettyMoveSan";

interface Props {
  san: string;
  moveClassification?: MoveClassification;
  moveIdx: number;
  moveColor: "w" | "b";
}

export default function MoveItem({
  san,
  moveClassification,
  moveIdx,
  moveColor,
}: Props) {
  const game = useAtomValue(gameAtom);
  const board = useAtomValue(boardAtom);
  const { goToMove } = useChessActions(boardAtom);
  const position = useAtomValue(currentPositionAtom);
  const color = getMoveColor(moveClassification);

  const isCurrentMove = position?.currentMoveIdx === moveIdx;

  useEffect(() => {
    if (!isCurrentMove) return;
    const moveItem = document.getElementById(`move-${moveIdx}`);
    if (!moveItem) return;

    const movePanel = document.getElementById("moves-panel");
    if (!movePanel || !isInViewport(movePanel)) return;

    moveItem.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [isCurrentMove, moveIdx]);

  const handleClick = () => {
    if (isCurrentMove) return;
    const gameToUse = game.moveNumber() > 1 ? game : board;
    goToMove(moveIdx, gameToUse);
  };

  return (
    <Box
      onClick={handleClick}
      sx={(theme) => ({
        cursor: isCurrentMove ? "default" : "pointer",
        display: "flex",
        alignItems: "center",
        padding: "0.25rem 0.5rem",
        borderRadius: 1,
        width: "90%",
        backgroundColor: isCurrentMove
          ? theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, 0.12)"
            : "rgba(0, 0, 0, 0.08)"
          : "transparent",
        color: isCurrentMove
          ? theme.palette.text.primary
          : theme.palette.text.secondary,
        "&:hover": {
          backgroundColor: !isCurrentMove
            ? theme.palette.mode === "dark"
              ? "rgba(255, 255, 255, 0.05)"
              : "rgba(0, 0, 0, 0.04)"
            : undefined,
        },
        transition: "all 0.15s ease",
      })}
      id={`move-${moveIdx}`}
    >
      <Box
        sx={{
          width: 14,
          height: 14,
          marginRight: 0.75,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {color ? (
          <Image
            src={`/icons/${moveClassification}.png`}
            alt=""
            width={14}
            height={14}
          />
        ) : null}
      </Box>

      <PrettyMoveSan
        san={san}
        color={moveColor}
        typographyProps={{
          fontSize: "0.88rem",
          fontWeight: isCurrentMove ? 750 : 500,
        }}
      />
    </Box>
  );
}

const getMoveColor = (moveClassification?: MoveClassification) => {
  if (
    !moveClassification ||
    moveClassificationsToIgnore.includes(moveClassification)
  ) {
    return undefined;
  }

  return CLASSIFICATION_COLORS[moveClassification];
};

const moveClassificationsToIgnore: MoveClassification[] = [
  MoveClassification.Okay,
  MoveClassification.Excellent,
  MoveClassification.Forced,
];
