import { PageTitle } from "@/components/pageTitle";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useEngine } from "@/hooks/useEngine";
import { DEFAULT_ENGINE } from "@/constants";
import { getChessComUserAllRecentGames } from "@/lib/chessCom";
import { getLichessUserAllRecentGames } from "@/lib/lichess";
import { analyzeAllGames } from "@/lib/insights/analyzeAllGames";
import {
  GameCountSelection,
  getGameCountLabel,
  parseCustomGameCount,
  resolveGameFetchLimit,
} from "@/lib/insights/gameCount";
import { LoadedGame } from "@/types/game";
import { InsightsReport } from "@/types/insights";
import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  Grid2 as Grid,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { useCallback, useMemo, useRef, useState } from "react";
import InsightsHeader from "@/sections/insights/InsightsHeader";
import AccuracyTrendChart from "@/sections/insights/AccuracyTrendChart";
import RatingTrendChart from "@/sections/insights/RatingTrendChart";
import WinRateCard from "@/sections/insights/WinRateCard";
import MoveQualityDistribution from "@/sections/insights/MoveQualityDistribution";
import BestWorstMoves from "@/sections/insights/BestWorstMoves";
import CommonMistakes from "@/sections/insights/CommonMistakes";
import OpeningBreakdown from "@/sections/insights/OpeningBreakdown";
import TimeControlStats from "@/sections/insights/TimeControlStats";
import PhaseAccuracy from "@/sections/insights/PhaseAccuracy";
import InsightsProgress from "@/sections/insights/InsightsProgress";
import KeyInsights from "@/sections/insights/KeyInsights";
import OpponentProfile from "@/sections/insights/OpponentProfile";

type Platform = "chesscom" | "lichess";

const platformOptions = [
  {
    value: "chesscom" as Platform,
    label: "Chess.com",
    icon: "simple-icons:chessdotcom",
    color: "#81b64c",
  },
  {
    value: "lichess" as Platform,
    label: "Lichess",
    icon: "simple-icons:lichess",
    color: "#dfdfdf",
  },
];

const gameCountOptions = [25, 50, 100] as const;

export default function InsightsPage() {
  const [platform, setPlatform] = useState<Platform>("chesscom");
  const [rawStoredValue, setStoredValues] = useLocalStorage<string>(
    `insights-${platform}-username`,
    ""
  );
  const [username, setUsername] = useState("");
  const [hasEdited, setHasEdited] = useState(false);
  const [gameCountSelection, setGameCountSelection] =
    useState<GameCountSelection>({ mode: "preset", value: 25 });
  const [customGameCountInput, setCustomGameCountInput] = useState("150");

  // Analysis state
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentGameIndex, setCurrentGameIndex] = useState(0);
  const [totalGames, setTotalGames] = useState(0);
  const [currentGameInfo, setCurrentGameInfo] = useState<LoadedGame | null>(
    null
  );
  const [startTime, setStartTime] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [report, setReport] = useState<InsightsReport | null>(null);

  const abortControllerRef = useRef<AbortController | null>(null);
  const engine = useEngine(DEFAULT_ENGINE);
  const customGameCount = parseCustomGameCount(customGameCountInput);
  const isCustomGameCountInvalid =
    gameCountSelection.mode === "custom" && customGameCount === null;
  const selectedGameCountLabel =
    gameCountSelection.mode === "custom" && customGameCount === null
      ? "custom games"
      : getGameCountLabel(
          gameCountSelection.mode === "custom"
            ? {
                mode: "custom",
                value: customGameCount ?? gameCountSelection.value,
              }
            : gameCountSelection
        );

  const storedValues = useMemo(() => {
    if (typeof rawStoredValue === "string") {
      return rawStoredValue
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
    }
    return [];
  }, [rawStoredValue]);

  if (
    !hasEdited &&
    storedValues.length &&
    username.trim().toLowerCase() !== storedValues[0].trim().toLowerCase()
  ) {
    setUsername(storedValues[0].trim());
  }

  const updateHistory = useCallback(
    (name: string) => {
      const trimmed = name.trim();
      if (!trimmed) return;
      const lower = trimmed.toLowerCase();
      const updated = [
        trimmed,
        ...storedValues.filter((u) => u.toLowerCase() !== lower),
      ].slice(0, 8);
      setStoredValues(updated.join(","));
    },
    [storedValues, setStoredValues]
  );

  const deleteUsername = (usernameToDelete: string) => {
    const updated = storedValues.filter((u) => u !== usernameToDelete);
    setStoredValues(updated.join(","));
  };

  const handleUsernameChange = (
    _: React.SyntheticEvent,
    newValue: string | null
  ) => {
    const newInputValue = newValue ?? "";
    setUsername(newInputValue.trim());
    setHasEdited(true);
  };

  const handleCancel = useCallback(() => {
    abortControllerRef.current?.abort();
    setIsAnalyzing(false);
    setIsFetching(false);
  }, []);

  const handleGameCountModeChange = (value: string) => {
    if (value === "custom") {
      setGameCountSelection({
        mode: "custom",
        value: customGameCount ?? 150,
      });
      return;
    }

    if (value === "unlimited") {
      setGameCountSelection({ mode: "unlimited" });
      return;
    }

    const preset = Number(value);
    if (
      gameCountOptions.includes(preset as (typeof gameCountOptions)[number])
    ) {
      setGameCountSelection({
        mode: "preset",
        value: preset as (typeof gameCountOptions)[number],
      });
    }
  };

  const handleAnalyze = useCallback(async () => {
    if (!username.trim() || !engine) return;

    const selectedGameCount: GameCountSelection =
      gameCountSelection.mode === "custom"
        ? customGameCount
          ? { mode: "custom", value: customGameCount }
          : gameCountSelection
        : gameCountSelection;

    if (selectedGameCount.mode === "custom" && customGameCount === null) {
      setError("Enter a positive whole number of games to analyze.");
      return;
    }

    const gameFetchLimit = resolveGameFetchLimit(selectedGameCount);

    setError(null);
    setReport(null);
    setIsFetching(true);
    setIsAnalyzing(false);
    setProgress(0);

    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      // Step 1: Fetch games
      let games: LoadedGame[];
      if (platform === "chesscom") {
        games = await getChessComUserAllRecentGames(
          username.trim(),
          gameFetchLimit,
          controller.signal
        );
      } else {
        games = await getLichessUserAllRecentGames(
          username.trim(),
          gameFetchLimit,
          controller.signal
        );
      }

      if (games.length === 0) {
        setError("No games found for this username.");
        setIsFetching(false);
        return;
      }

      updateHistory(username.trim());

      // Step 2: Analyze games
      setIsFetching(false);
      setIsAnalyzing(true);
      setTotalGames(games.length);
      setStartTime(Date.now());

      const result = await analyzeAllGames({
        games,
        username: username.trim(),
        platform,
        engine,
        depth: 14,
        onGameStart: (index, game) => {
          setCurrentGameIndex(index);
          setCurrentGameInfo(game);
        },
        onProgress: (p) => setProgress(p),
        signal: controller.signal,
      });

      setReport(result);
    } catch (e) {
      if (e instanceof DOMException && e.name === "AbortError") {
        // User cancelled — don't show error
      } else {
        setError(
          e instanceof Error ? e.message : "An error occurred during analysis"
        );
      }
    } finally {
      setIsAnalyzing(false);
      setIsFetching(false);
    }
  }, [
    username,
    engine,
    gameCountSelection,
    customGameCount,
    platform,
    updateHistory,
  ]);

  const avgRating = useMemo(() => {
    if (!report) return 0;
    const ratings = report.games
      .map((g) =>
        g.userColor === "white"
          ? g.game.white.rating || 0
          : g.game.black.rating || 0
      )
      .filter((r) => r > 0);
    return ratings.length > 0
      ? Math.round(ratings.reduce((a, b) => a + b, 0) / ratings.length)
      : 0;
  }, [report]);

  return (
    <Grid container gap={3} justifyContent="center" sx={{ pb: 6 }}>
      <PageTitle title="Chesskit Insights — Analyze All Games" />

      {/* Setup Panel */}
      {!report && (
        <Grid size={12} container justifyContent="center">
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
              borderRadius: 3,
              padding: { xs: 3, sm: 4 },
              maxWidth: 600,
              width: "100%",
            }}
          >
            <Stack spacing={3} alignItems="center">
              {/* Header */}
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Icon icon="mdi:chart-box" width={28} color="#C9A96E" />
                <Typography
                  fontSize="1.4rem"
                  fontWeight={800}
                  letterSpacing="-0.02em"
                >
                  Game Insights
                </Typography>
              </Stack>

              <Typography
                color="text.secondary"
                fontSize="0.9rem"
                textAlign="center"
                sx={{ maxWidth: 420 }}
              >
                Analyze all your recent games with Stockfish and get a
                comprehensive breakdown of your play.
              </Typography>

              {/* Platform Selector */}
              <Stack
                direction="row"
                spacing={1}
                sx={{ width: "100%", maxWidth: 400 }}
              >
                {platformOptions.map((opt) => (
                  <Button
                    key={opt.value}
                    fullWidth
                    variant={platform === opt.value ? "contained" : "outlined"}
                    startIcon={<Icon icon={opt.icon} />}
                    onClick={() => {
                      setPlatform(opt.value);
                      setHasEdited(false);
                    }}
                    sx={{
                      textTransform: "none",
                      fontWeight: 700,
                      py: 1.2,
                      ...(platform === opt.value
                        ? {}
                        : {
                            color: "text.primary",
                          }),
                    }}
                  >
                    {opt.label}
                  </Button>
                ))}
              </Stack>

              {/* Username Input */}
              <FormControl sx={{ width: "100%", maxWidth: 400 }}>
                <Autocomplete
                  freeSolo
                  options={storedValues}
                  inputValue={username}
                  onInputChange={handleUsernameChange}
                  onChange={handleUsernameChange}
                  renderOption={(props, option) => {
                    const { key, ...rest } = props;
                    return (
                      <li
                        key={key}
                        {...rest}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          paddingRight: 8,
                        }}
                      >
                        <span>{option}</span>
                        <Icon
                          icon="mdi:close"
                          style={{ cursor: "pointer" }}
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteUsername(option);
                          }}
                        />
                      </li>
                    );
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={`Enter your ${platform === "chesscom" ? "Chess.com" : "Lichess"} username...`}
                      variant="outlined"
                    />
                  )}
                />
              </FormControl>

              {/* Game Count */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                alignItems={{ xs: "stretch", sm: "flex-start" }}
                spacing={2}
                sx={{ width: "100%", maxWidth: 400 }}
              >
                <Typography
                  fontSize="0.85rem"
                  fontWeight={600}
                  color="text.secondary"
                  sx={{ whiteSpace: "nowrap" }}
                >
                  Games to analyze:
                </Typography>
                <Stack spacing={1} sx={{ flex: 1, minWidth: 0 }}>
                  <Select
                    value={
                      gameCountSelection.mode === "preset"
                        ? String(gameCountSelection.value)
                        : gameCountSelection.mode
                    }
                    onChange={(e) =>
                      handleGameCountModeChange(String(e.target.value))
                    }
                    size="small"
                    sx={{ minWidth: 150 }}
                  >
                    {gameCountOptions.map((n) => (
                      <MenuItem key={n} value={String(n)}>
                        Last {n}
                      </MenuItem>
                    ))}
                    <MenuItem value="custom">Custom</MenuItem>
                    <MenuItem value="unlimited">Unlimited</MenuItem>
                  </Select>

                  {gameCountSelection.mode === "custom" && (
                    <FormControl error={isCustomGameCountInvalid}>
                      <TextField
                        value={customGameCountInput}
                        onChange={(e) => {
                          const nextValue = e.target.value;
                          setCustomGameCountInput(nextValue);
                          const parsed = parseCustomGameCount(nextValue);
                          if (parsed) {
                            setGameCountSelection({
                              mode: "custom",
                              value: parsed,
                            });
                          }
                        }}
                        type="number"
                        size="small"
                        label="Custom game count"
                        slotProps={{
                          htmlInput: { min: 1, step: 1 },
                        }}
                      />
                      {isCustomGameCountInvalid && (
                        <FormHelperText>
                          Use a positive whole number. No upper cap.
                        </FormHelperText>
                      )}
                    </FormControl>
                  )}

                  {gameCountSelection.mode === "unlimited" && (
                    <Typography fontSize="0.75rem" color="text.secondary">
                      Fetches every available game, then analyzes each one.
                      Large histories can take a long time.
                    </Typography>
                  )}
                </Stack>
              </Stack>

              {/* Analyze Button */}
              <Button
                variant="contained"
                size="large"
                disabled={
                  !username.trim() ||
                  isAnalyzing ||
                  isFetching ||
                  !engine ||
                  isCustomGameCountInvalid
                }
                onClick={handleAnalyze}
                startIcon={
                  isFetching ? (
                    <CircularProgress size={18} color="inherit" />
                  ) : (
                    <Icon icon="mdi:magnify" />
                  )
                }
                sx={{
                  fontWeight: 800,
                  fontSize: "1rem",
                  px: 5,
                  py: 1.4,
                  borderRadius: 2,
                }}
              >
                {isFetching
                  ? "Fetching Games..."
                  : !engine
                    ? "Loading Engine..."
                    : `Analyze ${selectedGameCountLabel}`}
              </Button>

              {error && (
                <Typography color="error" fontSize="0.88rem" fontWeight={500}>
                  {error}
                </Typography>
              )}
            </Stack>
          </Paper>
        </Grid>
      )}

      {/* Progress */}
      {isAnalyzing && (
        <Grid size={12} container justifyContent="center">
          <Box sx={{ width: "100%", maxWidth: 600 }}>
            <InsightsProgress
              progress={progress}
              currentGame={currentGameIndex + 1}
              totalGames={totalGames}
              currentGameInfo={currentGameInfo ?? undefined}
              onCancel={handleCancel}
              startTime={startTime}
            />
          </Box>
        </Grid>
      )}

      {/* Results Dashboard */}
      {report && (
        <>
          {/* Back button */}
          <Grid size={12} container justifyContent="center">
            <Box sx={{ width: "100%", maxWidth: 1200 }}>
              <Button
                startIcon={<Icon icon="mdi:arrow-left" />}
                onClick={() => {
                  setReport(null);
                  setProgress(0);
                }}
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
                  mb: -1,
                }}
              >
                New Analysis
              </Button>
            </Box>
          </Grid>

          {/* Header Card */}
          <Grid size={12} container justifyContent="center">
            <Box sx={{ width: "100%", maxWidth: 1200 }}>
              <InsightsHeader
                username={report.username}
                platform={report.platform}
                report={report.aggregated}
                avgRating={avgRating}
              />
            </Box>
          </Grid>

          {/* Key Insights */}
          <Grid size={12} container justifyContent="center">
            <Box sx={{ width: "100%", maxWidth: 1200 }}>
              <KeyInsights data={report.aggregated} />
            </Box>
          </Grid>

          {/* Charts Row */}
          <Grid size={12} container justifyContent="center" gap={3}>
            <Box
              sx={{
                width: "100%",
                maxWidth: 1200,
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: 3,
              }}
            >
              <AccuracyTrendChart data={report.aggregated} />
              <RatingTrendChart data={report.aggregated} />
            </Box>
          </Grid>

          {/* Stats Row */}
          <Grid size={12} container justifyContent="center" gap={3}>
            <Box
              sx={{
                width: "100%",
                maxWidth: 1200,
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
                gap: 3,
              }}
            >
              <WinRateCard data={report.aggregated} />
              <PhaseAccuracy data={report.aggregated} />
              <MoveQualityDistribution data={report.aggregated} />
            </Box>
          </Grid>

          {/* Opponent Quality */}
          <Grid size={12} container justifyContent="center">
            <Box sx={{ width: "100%", maxWidth: 1200 }}>
              <OpponentProfile data={report.aggregated} />
            </Box>
          </Grid>

          {/* Best/Worst Moves */}
          <Grid size={12} container justifyContent="center">
            <Box sx={{ width: "100%", maxWidth: 1200 }}>
              <BestWorstMoves
                bestMoves={report.aggregated.bestMoves}
                worstMoves={report.aggregated.worstMoves}
              />
            </Box>
          </Grid>

          {/* Common Mistakes */}
          {report.aggregated.commonMistakes.length > 0 && (
            <Grid size={12} container justifyContent="center">
              <Box sx={{ width: "100%", maxWidth: 1200 }}>
                <CommonMistakes mistakes={report.aggregated.commonMistakes} />
              </Box>
            </Grid>
          )}

          {/* Openings & Time Controls */}
          <Grid size={12} container justifyContent="center" gap={3}>
            <Box
              sx={{
                width: "100%",
                maxWidth: 1200,
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: 3,
              }}
            >
              <OpeningBreakdown data={report.aggregated} />
              <TimeControlStats data={report.aggregated} />
            </Box>
          </Grid>
        </>
      )}
    </Grid>
  );
}
