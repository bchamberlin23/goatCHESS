import { CLASSIFICATION_COLORS } from "@/constants";
import { usePlayersData } from "@/hooks/usePlayersData";
import { capitalize } from "@/lib/helpers";
import { MoveClassification } from "@/types/enums";
import {
  Box,
  Button,
  ButtonBase,
  Divider,
  Grid2 as Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useAtom, useAtomValue } from "jotai";
import Image from "next/image";
import GraphTab from "../graphTab";
import {
  boardAtom,
  currentPositionAtom,
  gameAtom,
  gameEvalAtom,
  selectedClassificationAtom,
  selectedSideAtom,
} from "../../states";
import { useChessActions } from "@/hooks/useChessActions";
import { useMemo } from "react";
import { Icon } from "@iconify/react";
import { getLineEvalLabel } from "@/lib/chess";

const summaryClassifications = [
  { key: MoveClassification.Splendid, label: "Brilliant" },
  { key: MoveClassification.Perfect, label: "Great" },
  { key: MoveClassification.Best, label: "Best" },
  { key: MoveClassification.Excellent, label: "Excellent" },
  { key: MoveClassification.Inaccuracy, label: "Inaccuracy" },
  { key: MoveClassification.Mistake, label: "Mistake" },
  { key: MoveClassification.Blunder, label: "Blunder" },
  { key: MoveClassification.Opening, label: "Opening" },
];

export default function SummaryTab(props: Parameters<typeof Grid>[0]) {
  const gameEval = useAtomValue(gameEvalAtom);
  const { white, black } = usePlayersData(gameAtom);
  const game = useAtomValue(gameAtom);
  const currentPosition = useAtomValue(currentPositionAtom);
  const { goToMove } = useChessActions(boardAtom);

  // Subpage states
  const [selectedClassification, setSelectedClassification] = useAtom(
    selectedClassificationAtom
  );
  const [selectedSide, setSelectedSide] = useAtom(selectedSideAtom);

  const whiteCounts = useMemo(() => {
    if (!gameEval) return {};
    return getClassificationCounts(gameEval.positions, "white");
  }, [gameEval]);

  const blackCounts = useMemo(() => {
    if (!gameEval) return {};
    return getClassificationCounts(gameEval.positions, "black");
  }, [gameEval]);

  const history = useMemo(() => {
    return game.history({ verbose: true });
  }, [game]);

  const allMatchedMoves = useMemo(() => {
    if (!gameEval || !selectedClassification) return [];
    return history
      .map((move, i) => {
        const positionEval = gameEval.positions[i + 1];
        const classification = positionEval?.moveClassification;
        const evaluation = positionEval?.lines?.[0]
          ? getLineEvalLabel(positionEval.lines[0])
          : undefined;
        return {
          move,
          index: i + 1,
          classification,
          evaluation,
          moveNumber: Math.floor(i / 2) + 1,
        };
      })
      .filter((m) => m.classification === selectedClassification);
  }, [gameEval, selectedClassification, history]);

  const filteredMoves = useMemo(() => {
    if (selectedSide === "all") return allMatchedMoves;
    return allMatchedMoves.filter((m) => {
      const isWhite = m.move.color === "w";
      return selectedSide === "white" ? isWhite : !isWhite;
    });
  }, [allMatchedMoves, selectedSide]);

  if (!gameEval) {
    return null;
  }

  return (
    <Grid
      container
      size={12}
      alignItems="stretch"
      justifyContent="center"
      rowGap={1.5}
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
      {selectedClassification ? (
        <Stack spacing={1.5} sx={{ width: "100%" }}>
          <Box sx={{ alignSelf: "flex-start" }}>
            <Button
              startIcon={<Icon icon="mdi:arrow-left" />}
              onClick={() => setSelectedClassification(null)}
              sx={{
                textTransform: "none",
                color: "text.secondary",
                fontWeight: 650,
                fontSize: "0.85rem",
                "&:hover": {
                  color: "primary.main",
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark"
                      ? "rgba(201, 169, 110, 0.08)"
                      : "rgba(201, 169, 110, 0.05)",
                },
                borderRadius: 1.5,
                px: 1.5,
              }}
            >
              Back to Summary
            </Button>
          </Box>

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
              width: "100%",
              padding: { xs: 2, sm: 2.5 },
            }}
          >
            {/* Header: Title and Toggle */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "flex-start", sm: "center" }}
              justifyContent="space-between"
              rowGap={2}
              sx={{ mb: 2 }}
            >
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor:
                      CLASSIFICATION_COLORS[selectedClassification],
                    borderRadius: "50%",
                    height: 32,
                    width: 32,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
                  }}
                >
                  <Image
                    src={`/icons/${selectedClassification}.png`}
                    alt=""
                    width={20}
                    height={20}
                  />
                </Box>
                <Typography fontSize="1.1rem" fontWeight={850}>
                  {capitalize(selectedClassification)} Moves
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1}>
                <FilterPill
                  label="All"
                  active={selectedSide === "all"}
                  onClick={() => setSelectedSide("all")}
                  count={allMatchedMoves.length}
                />
                <FilterPill
                  label="White"
                  active={selectedSide === "white"}
                  onClick={() => setSelectedSide("white")}
                  count={whiteCounts[selectedClassification] ?? 0}
                />
                <FilterPill
                  label="Black"
                  active={selectedSide === "black"}
                  onClick={() => setSelectedSide("black")}
                  count={blackCounts[selectedClassification] ?? 0}
                />
              </Stack>
            </Stack>

            <Divider sx={{ mb: 2, opacity: 0.6 }} />

            {/* Scrollable list */}
            <Box
              sx={{
                maxHeight: "22rem",
                overflowY: "auto",
                scrollbarWidth: "thin",
                pr: 0.5,
              }}
            >
              {filteredMoves.length === 0 ? (
                <Typography
                  color="text.secondary"
                  fontSize="0.88rem"
                  sx={{ py: 3, textAlign: "center" }}
                >
                  No {selectedClassification} moves found for this selection.
                </Typography>
              ) : (
                filteredMoves.map((m) => {
                  const moveLabel =
                    m.move.color === "w"
                      ? `${m.moveNumber}. ${m.move.san}`
                      : `${m.moveNumber}... ${m.move.san}`;
                  const isCurrent = currentPosition?.currentMoveIdx === m.index;
                  const playerName =
                    m.move.color === "w" ? white.name : black.name;

                  return (
                    <MoveDetailItem
                      key={m.index}
                      moveLabel={moveLabel}
                      color={m.move.color}
                      evaluation={m.evaluation}
                      classification={selectedClassification}
                      isActive={isCurrent}
                      onClick={() => {
                        goToMove(m.index, game);
                      }}
                      playerName={playerName}
                    />
                  );
                })
              )}
            </Box>
          </Paper>
        </Stack>
      ) : (
        <>
          {/* Accuracy Matchup Cards */}
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
              width: "100%",
              padding: { xs: 2, sm: 2.5 },
            }}
          >
            <Typography
              color="text.secondary"
              fontSize="0.75rem"
              fontWeight={700}
              letterSpacing="0.05em"
              sx={{ mb: 2 }}
            >
              ACCURACY MATCHUP
            </Typography>

            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 2.5, md: 0 }}
              alignItems="center"
              justifyContent="space-around"
              divider={
                <Box
                  sx={{
                    width: { xs: "60%", md: "1px" },
                    height: { xs: "1px", md: "70px" },
                    backgroundColor: (theme) =>
                      theme.palette.mode === "dark"
                        ? "rgba(255, 255, 255, 0.1)"
                        : "rgba(0, 0, 0, 0.08)",
                    alignSelf: "center",
                  }}
                />
              }
            >
              <PlayerAccuracyCard
                name={white.name}
                rating={white.rating}
                accuracy={gameEval.accuracy.white}
                side="white"
              />

              <PlayerAccuracyCard
                name={black.name}
                rating={black.rating}
                accuracy={gameEval.accuracy.black}
                side="black"
              />
            </Stack>
          </Paper>

          {/* Move Quality List */}
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
              width: "100%",
              padding: { xs: 2, sm: 2.5 },
            }}
          >
            {/* Aligned Table Header */}
            <Box
              sx={{
                alignItems: "center",
                columnGap: 1,
                display: "grid",
                gridTemplateColumns: "minmax(7rem, 1fr) 4rem 2.5rem 4rem",
                paddingBottom: 1.5,
                borderBottom: (theme) =>
                  `1px solid ${
                    theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.08)"
                      : "rgba(0, 0, 0, 0.07)"
                  }`,
                marginBottom: 2,
              }}
            >
              <Typography
                color="text.secondary"
                fontSize="0.75rem"
                fontWeight={700}
                letterSpacing="0.05em"
              >
                MOVE QUALITY
              </Typography>

              <Typography
                fontSize="0.78rem"
                fontWeight={700}
                textAlign="center"
                noWrap
                title={white.name}
                sx={{ overflow: "hidden", textOverflow: "ellipsis" }}
              >
                {white.name.split(" ")[0]}
              </Typography>

              <Box />

              <Typography
                fontSize="0.78rem"
                fontWeight={700}
                textAlign="center"
                noWrap
                title={black.name}
                sx={{ overflow: "hidden", textOverflow: "ellipsis" }}
              >
                {black.name.split(" ")[0]}
              </Typography>
            </Box>

            <Stack gap={1}>
              {summaryClassifications.map(({ key, label }) => (
                <QualityRow
                  key={key}
                  classification={key}
                  label={label}
                  whiteCount={whiteCounts[key] ?? 0}
                  blackCount={blackCounts[key] ?? 0}
                  onClick={(side) => {
                    setSelectedClassification(key);
                    setSelectedSide(side);
                  }}
                />
              ))}
            </Stack>
          </Paper>
        </>
      )}

      <GraphTab size={12} />
    </Grid>
  );
}

function PlayerAccuracyCard({
  name,
  rating,
  accuracy,
  side,
}: {
  name: string;
  rating?: number;
  accuracy: number;
  side: "white" | "black";
}) {
  const isWhite = side === "white";
  const safeAccuracy = Number.isFinite(accuracy) ? accuracy : 0;
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (safeAccuracy / 100) * circumference;

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      sx={{ width: { xs: "100%", md: "42%" }, minWidth: 0 }}
    >
      {/* Player Avatar */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: isWhite ? "#ddd9cf" : "#151516",
          border: "2px solid",
          borderColor: isWhite ? "#86c35a" : "rgba(255, 255, 255, 0.16)",
          borderRadius: 1.5,
          height: 52,
          width: 52,
          flexShrink: 0,
          boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
        }}
      >
        <Image
          src={isWhite ? "/piece/companion/wP.svg" : "/piece/companion/bP.svg"}
          alt={side}
          width={34}
          height={34}
          style={{ opacity: isWhite ? 0.75 : 0.9 }}
        />
      </Box>

      {/* Player Details */}
      <Box sx={{ minWidth: 0, flexGrow: 1 }}>
        <Typography
          fontSize="0.95rem"
          fontWeight={800}
          noWrap
          title={name}
          sx={{ mb: 0.25 }}
        >
          {name}
        </Typography>
        <Box
          sx={{
            display: "inline-block",
            backgroundColor: (theme) =>
              theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.08)"
                : "rgba(0, 0, 0, 0.06)",
            borderRadius: 0.75,
            padding: "0.1rem 0.4rem",
            fontSize: "0.7rem",
            fontWeight: 700,
            color: "text.secondary",
          }}
        >
          {rating ? `${rating}` : "Unrated"}
        </Box>
      </Box>

      {/* Accuracy Ring */}
      <Box sx={{ position: "relative", display: "inline-flex", flexShrink: 0 }}>
        <svg width="70" height="70">
          <circle
            cx="35"
            cy="35"
            r={radius}
            fill="transparent"
            stroke={
              isWhite ? "rgba(134, 195, 90, 0.12)" : "rgba(56, 148, 235, 0.12)"
            }
            strokeWidth="5.5"
          />
          <circle
            cx="35"
            cy="35"
            r={radius}
            fill="transparent"
            stroke={isWhite ? "#86c35a" : "#3894eb"}
            strokeWidth="5.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform="rotate(-90 35 35)"
            style={{
              transition: "stroke-dashoffset 0.6s ease-in-out",
            }}
          />
        </svg>
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            fontSize="0.9rem"
            fontWeight={900}
            color={isWhite ? "#86c35a" : "#3894eb"}
          >
            {safeAccuracy.toFixed(0)}%
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
}

function QualityRow({
  classification,
  label,
  whiteCount,
  blackCount,
  onClick,
}: {
  classification: MoveClassification;
  label: string;
  whiteCount: number;
  blackCount: number;
  onClick: (side: "all" | "white" | "black") => void;
}) {
  const color = CLASSIFICATION_COLORS[classification];
  const hasMoves = whiteCount > 0 || blackCount > 0;

  return (
    <ButtonBase
      onClick={() => hasMoves && onClick("all")}
      disabled={!hasMoves}
      sx={{
        width: "100%",
        alignItems: "center",
        columnGap: 1,
        display: "grid",
        gridTemplateColumns: "minmax(7rem, 1fr) 4rem 2.5rem 4rem",
        minHeight: 36,
        textAlign: "left",
        borderRadius: 1,
        px: 1,
        mx: -1,
        cursor: hasMoves ? "pointer" : "default",
        "&:hover": hasMoves
          ? {
              backgroundColor: (theme) =>
                theme.palette.mode === "dark"
                  ? "rgba(255, 255, 255, 0.04)"
                  : "rgba(0, 0, 0, 0.03)",
            }
          : {},
        transition: "all 0.15s ease",
      }}
    >
      <Box>
        <Typography
          fontSize="0.88rem"
          fontWeight={750}
          color={hasMoves ? "text.primary" : "text.secondary"}
          sx={{ opacity: hasMoves ? 1 : 0.4 }}
        >
          {label || capitalize(classification)}
        </Typography>
      </Box>

      <Box
        onClick={(e) => {
          if (whiteCount > 0) {
            e.stopPropagation();
            onClick("white");
          }
        }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 0.75,
          height: "28px",
          cursor: whiteCount > 0 ? "pointer" : "default",
          "&:hover":
            whiteCount > 0
              ? {
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.08)"
                      : "rgba(0, 0, 0, 0.06)",
                }
              : {},
          transition: "background-color 0.15s ease",
        }}
      >
        <Typography
          color={whiteCount > 0 ? color : "text.secondary"}
          fontSize="0.92rem"
          fontWeight={whiteCount > 0 ? 850 : 400}
          textAlign="center"
          sx={{ opacity: whiteCount > 0 ? 1 : 0.3 }}
        >
          {whiteCount}
        </Typography>
      </Box>

      <Box
        sx={{
          justifySelf: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: color,
          borderRadius: "50%",
          height: 22,
          width: 22,
          boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
          opacity: hasMoves ? 1 : 0.3,
        }}
      >
        <Image
          src={`/icons/${classification}.png`}
          alt=""
          width={14}
          height={14}
        />
      </Box>

      <Box
        onClick={(e) => {
          if (blackCount > 0) {
            e.stopPropagation();
            onClick("black");
          }
        }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 0.75,
          height: "28px",
          cursor: blackCount > 0 ? "pointer" : "default",
          "&:hover":
            blackCount > 0
              ? {
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.08)"
                      : "rgba(0, 0, 0, 0.06)",
                }
              : {},
          transition: "background-color 0.15s ease",
        }}
      >
        <Typography
          color={blackCount > 0 ? color : "text.secondary"}
          fontSize="0.92rem"
          fontWeight={blackCount > 0 ? 850 : 400}
          textAlign="center"
          sx={{ opacity: blackCount > 0 ? 1 : 0.3 }}
        >
          {blackCount}
        </Typography>
      </Box>
    </ButtonBase>
  );
}

function FilterPill({
  label,
  active,
  onClick,
  count,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  count: number;
}) {
  return (
    <ButtonBase
      onClick={onClick}
      sx={{
        borderRadius: 2,
        padding: "0.3rem 0.8rem",
        fontSize: "0.82rem",
        fontWeight: 650,
        backgroundColor: (theme) =>
          active
            ? theme.palette.mode === "dark"
              ? "rgba(201, 169, 110, 0.15)"
              : "rgba(201, 169, 110, 0.12)"
            : "transparent",
        color: (theme) =>
          active ? "primary.main" : theme.palette.text.secondary,
        border: "1px solid",
        borderColor: (theme) =>
          active
            ? "primary.main"
            : theme.palette.mode === "dark"
              ? "rgba(255, 255, 255, 0.08)"
              : "rgba(0, 0, 0, 0.08)",
        "&:hover": {
          backgroundColor: (theme) =>
            active
              ? theme.palette.mode === "dark"
                ? "rgba(201, 169, 110, 0.2)"
                : "rgba(201, 169, 110, 0.18)"
              : theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.04)"
                : "rgba(0, 0, 0, 0.04)",
        },
        transition: "all 0.15s ease",
      }}
    >
      {label} ({count})
    </ButtonBase>
  );
}

function MoveDetailItem({
  moveLabel,
  color,
  evaluation,
  classification,
  isActive,
  onClick,
  playerName,
}: {
  moveLabel: string;
  color: "w" | "b";
  evaluation?: string;
  classification: MoveClassification;
  isActive: boolean;
  onClick: () => void;
  playerName: string;
}) {
  const classColor = CLASSIFICATION_COLORS[classification];

  return (
    <ButtonBase
      onClick={onClick}
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.55rem 0.85rem",
        borderRadius: 1.5,
        backgroundColor: (theme) =>
          isActive
            ? theme.palette.mode === "dark"
              ? "rgba(255, 255, 255, 0.06)"
              : "rgba(0, 0, 0, 0.04)"
            : "transparent",
        borderLeft: isActive ? "3px solid #C9A96E" : "3px solid transparent",
        "&:hover": {
          backgroundColor: (theme) =>
            isActive
              ? theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.08)"
                : "rgba(0, 0, 0, 0.06)"
              : theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.03)"
                : "rgba(0, 0, 0, 0.02)",
        },
        transition: "all 0.15s ease",
        mb: 0.5,
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1.5} minWidth={0}>
        {/* Color indicator */}
        <Box
          sx={{
            width: 14,
            height: 14,
            borderRadius: "50%",
            backgroundColor: color === "w" ? "#ffffff" : "#1a1a1c",
            border: (theme) =>
              color === "w"
                ? theme.palette.mode === "dark"
                  ? "1px solid rgba(255, 255, 255, 0.2)"
                  : "1px solid rgba(0, 0, 0, 0.2)"
                : "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
            flexShrink: 0,
          }}
        />

        <Typography
          fontSize="0.88rem"
          fontWeight={isActive ? 800 : 600}
          color="text.primary"
        >
          {moveLabel}
        </Typography>

        <Typography
          fontSize="0.75rem"
          color="text.secondary"
          noWrap
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "10rem",
            display: { xs: "none", sm: "block" },
          }}
        >
          by {playerName}
        </Typography>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={1.5}>
        {evaluation && (
          <Box
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1b1c1e" : "#e8e5db",
              borderRadius: 0.75,
              padding: "0.15rem 0.5rem",
              fontSize: "0.75rem",
              fontWeight: 800,
              color: "text.primary",
            }}
          >
            {evaluation}
          </Box>
        )}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: classColor,
            borderRadius: "50%",
            height: 20,
            width: 20,
            boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
          }}
        >
          <Image
            src={`/icons/${classification}.png`}
            alt=""
            width={12}
            height={12}
          />
        </Box>
      </Stack>
    </ButtonBase>
  );
}

function getClassificationCounts(
  positions: { moveClassification?: MoveClassification }[],
  color: "white" | "black"
) {
  return positions.reduce(
    (counts, position, idx) => {
      const isWhiteMove = idx % 2 !== 0;
      const matchesColor = color === "white" ? isWhiteMove : !isWhiteMove;

      if (matchesColor && position.moveClassification) {
        counts[position.moveClassification] =
          (counts[position.moveClassification] ?? 0) + 1;
      }

      return counts;
    },
    {} as Partial<Record<MoveClassification, number>>
  );
}
