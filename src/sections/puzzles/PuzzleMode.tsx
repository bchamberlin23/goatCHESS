import Board from "@/components/board";
import { PageTitle } from "@/components/pageTitle";
import { useScreenSize } from "@/hooks/useScreenSize";
import { Color } from "@/types/enums";
import { Icon } from "@iconify/react";
import {
  Box,
  Button,
  Chip,
  Grid2 as Grid,
  Paper,
  Stack,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  LinearProgress,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Slider,
  Alert,
  Divider,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { Chess, Move } from "chess.js";
import { useAtom, useSetAtom } from "jotai";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  puzzles,
  getPuzzleTitle,
  getPuzzleThemeDescription,
  puzzleThemes,
  getRatingDelta,
  formatOpening,
  LichessPuzzle,
} from "./puzzleData";
import { puzzleCurrentPositionAtom, puzzleGameAtom } from "./states";
import { pieceSetAtom, boardHueAtom } from "@/components/board/states";
import { darkModeAtom } from "@/states/global";
import { PIECE_SETS } from "@/constants";
import {
  loadPuzzleProfile,
  savePuzzleProfile,
  addPuzzleAttempt,
  toggleFavorite,
  saveStormHighScore,
  saveStreakHighScore,
  ACHIEVEMENTS,
  ExtendedPuzzleProfile,
} from "./puzzleStorage";
import {
  playMoveSound,
  playCaptureSound,
  playCheckSound,
  playSuccessSound,
  playFailureSound,
} from "./puzzleSounds";
import AnalysisOverlay from "./AnalysisOverlay";
import { useNavigationGuard } from "@/hooks/useNavigationGuard";

// Recharts (with SSR safety check)
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip as ChartTooltip,
  ResponsiveContainer,
} from "recharts";

type Feedback = "idle" | "correct" | "incorrect" | "complete" | "revealed";

export default function PuzzleMode() {
  const screenSize = useScreenSize();
  const [activeTab, setActiveTab] = useState(1); // Default to Training tab
  const [profile, setProfile] = useState<ExtendedPuzzleProfile | null>(null);

  // Jotai atoms for chessboard settings and state
  const [game, setPuzzleGame] = useAtom(puzzleGameAtom);
  const setPuzzleCurrentPosition = useSetAtom(puzzleCurrentPositionAtom);
  const [pieceSet, setPieceSet] = useAtom(pieceSetAtom);
  const [boardHue, setBoardHue] = useAtom(boardHueAtom);
  const [darkModeVal, setDarkModeVal] = useAtom(darkModeAtom);

  // Load profile on client mount
  useEffect(() => {
    setProfile(loadPuzzleProfile());
  }, []);

  // SSR safety
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Board Size
  const boardSize = useMemo(() => {
    const width = screenSize.width;
    const height = screenSize.height;

    if (width < 900) return Math.min(width - 20, height - 260);
    return Math.min(width - 560, height * 0.75);
  }, [screenSize]);

  // ==========================================
  // 1. STANDARD TRAINING MODE STATE
  // ==========================================
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [feedback, setFeedback] = useState<Feedback>("idle");
  const [userColor, setUserColor] = useState<Color>(Color.White);
  const [canPlay, setCanPlay] = useState<Color | boolean>(false);
  const [hasFailedThisPuzzle, setHasFailedThisPuzzle] = useState(false);
  const [playbackIndex, setPlaybackIndex] = useState(-1);
  const [activePuzzleId, setActivePuzzleId] = useState<string | null>(null);

  // Filters
  const [filterLevel, setFilterLevel] = useState<string>("All");
  const [filterTheme, setFilterTheme] = useState<string>("All");
  const [filterOpening] = useState<string>("All");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  // Hints
  const [hintLevel, setHintLevel] = useState(0); // 0 = no hints, 1 = piece, 2 = theme, 3 = show SAN

  // Analysis Overlay
  const [analysisOpen, setAnalysisOpen] = useState(false);

  // Currently loaded puzzle
  const currentPuzzle = useMemo(() => {
    // Filter puzzles list based on selections
    let list = puzzles;
    if (filterLevel !== "All") {
      list = list.filter((p) => p.level === filterLevel);
    }
    if (filterTheme !== "All") {
      list = list.filter((p) => p.themes.includes(filterTheme));
    }
    if (filterOpening !== "All") {
      list = list.filter((p) => p.openingTags.includes(filterOpening));
    }
    if (showFavoritesOnly && profile) {
      list = list.filter((p) => profile.favoriteIds.includes(p.id));
    }

    if (list.length === 0) return puzzles[0]; // fallback
    return list[puzzleIndex % list.length];
  }, [
    puzzleIndex,
    filterLevel,
    filterTheme,
    filterOpening,
    showFavoritesOnly,
    profile,
  ]);

  // ==========================================
  // 2. TIMED PUZZLE STORM STATE
  // ==========================================
  const [stormActive, setStormActive] = useState(false);
  const [stormTime, setStormTime] = useState(180); // 3 minutes
  const [stormScore, setStormScore] = useState(0);
  const [stormStrikes, setStormStrikes] = useState(0);
  const [stormPuzzle, setStormPuzzle] = useState<LichessPuzzle | null>(null);
  const [stormStep, setStormStep] = useState(0);
  const stormTimerRef = useRef<NodeJS.Timeout | null>(null);

  // ==========================================
  // 3. PUZZLE STREAK (SURVIVAL) STATE
  // ==========================================
  const [streakActive, setStreakActive] = useState(false);
  const [streakScore, setStreakScore] = useState(0);
  const [streakPuzzle, setStreakPuzzle] = useState<LichessPuzzle | null>(null);
  const [streakStep, setStreakStep] = useState(0);

  // Navigation guard: warn before leaving during active storm/streak session
  useNavigationGuard(stormActive || streakActive);

  // ==========================================
  // 4. MISTAKE REVIEW STATE
  // ==========================================
  const [reviewActive, setReviewActive] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [reviewStep, setReviewStep] = useState(0);
  const [reviewFeedback, setReviewFeedback] = useState<Feedback>("idle");

  const reviewPuzzle = useMemo(() => {
    if (!profile || profile.mistakeIds.length === 0) return null;
    const currentId =
      profile.mistakeIds[reviewIndex % profile.mistakeIds.length];
    return puzzles.find((p) => p.id === currentId) || puzzles[0];
  }, [profile, reviewIndex]);

  // ==========================================
  // SOUND EFFECTS & PIECE DROPS HOOKS
  // ==========================================
  const buildPuzzlePosition = useCallback(
    (puzzle: LichessPuzzle, step: number) => {
      const nextGame = new Chess(puzzle.startFen);
      for (let i = 0; i < step; i++) {
        const uci = puzzle.solution[i];
        if (!uci) break;
        nextGame.move({
          from: uci.slice(0, 2),
          to: uci.slice(2, 4),
          promotion: uci[4] || undefined,
        });
      }
      return nextGame;
    },
    []
  );

  // Play Opponent First Move Animation
  const startPuzzleAnimation = useCallback(
    (puzzle: LichessPuzzle, isStorm = false) => {
      setFeedback("idle");
      setHasFailedThisPuzzle(false);
      setHintLevel(0);
      setPlaybackIndex(-1);
      setActivePuzzleId(null);

      const color = puzzle.userColor === "w" ? Color.White : Color.Black;
      setUserColor(color);

      // Instantly load FEN before opponent move
      const startG = new Chess(puzzle.fen);
      setPuzzleGame(startG);
      setPuzzleCurrentPosition({});
      setCanPlay(false);

      const playOpponentMove = () => {
        try {
          const finishedG = new Chess(puzzle.startFen);
          setPuzzleGame(finishedG);

          // Get move details to play sound and highlight
          const tempG = new Chess(puzzle.fen);
          const opponentMoveResult = tempG.move({
            from: puzzle.opponentMove.slice(0, 2),
            to: puzzle.opponentMove.slice(2, 4),
            promotion: puzzle.opponentMove[4] || undefined,
          });

          setPuzzleCurrentPosition({ lastMove: opponentMoveResult });

          if (opponentMoveResult.captured) {
            playCaptureSound();
          } else if (finishedG.inCheck()) {
            playCheckSound();
          } else {
            playMoveSound();
          }
          setCanPlay(color);
          setActivePuzzleId(puzzle.id);
        } catch (e) {
          console.error("Animation move failure", e);
          setPuzzleGame(new Chess(puzzle.startFen));
          setCanPlay(color);
          setActivePuzzleId(puzzle.id);
        }
      };

      if (isStorm) {
        // Instant play in storm mode
        playOpponentMove();
        return () => {};
      } else {
        // Animated 750ms delay in standard training
        const timeout = setTimeout(playOpponentMove, 750);
        return () => clearTimeout(timeout);
      }
    },
    [setPuzzleGame, setPuzzleCurrentPosition]
  );

  // Trigger loading puzzle when index changes
  useEffect(() => {
    if (activeTab === 1) {
      startPuzzleAnimation(currentPuzzle, false);
      setStepIndex(0);
    }
  }, [currentPuzzle, activeTab, startPuzzleAnimation]);

  // Handle Playback Stepping
  const handlePlayback = (direction: "start" | "prev" | "next" | "end") => {
    if (playbackIndex === -1) {
      setPlaybackIndex(stepIndex);
    }

    let newIndex = playbackIndex === -1 ? stepIndex : playbackIndex;
    const solLength = currentPuzzle.solution.length;

    if (direction === "start") newIndex = 0;
    else if (direction === "prev") newIndex = Math.max(0, newIndex - 1);
    else if (direction === "next") newIndex = Math.min(solLength, newIndex + 1);
    else if (direction === "end") newIndex = solLength;

    setPlaybackIndex(newIndex);
    setPuzzleGame(buildPuzzlePosition(currentPuzzle, newIndex));
    setCanPlay(false);
  };

  // Exit playback mode and return to active game position
  const exitPlayback = () => {
    setPlaybackIndex(-1);
    setPuzzleGame(buildPuzzlePosition(currentPuzzle, stepIndex));
    setCanPlay(stepIndex < currentPuzzle.solution.length ? userColor : false);
  };

  // ==========================================
  // GAME EFFECT - MONITOR BOARD MOVES
  // ==========================================
  useEffect(() => {
    // Standard mode game monitor
    if (activeTab !== 1 || playbackIndex !== -1) return;
    if (activePuzzleId !== currentPuzzle.id) return;

    const history = game.history({ verbose: true });
    const expectedMovesCount = stepIndex;

    // Check if player played a move
    if (history.length <= expectedMovesCount) return;

    const lastMove = history.at(-1);
    if (!lastMove) return;

    // Ignore opponent's move when it is processed by this effect
    if (lastMove.color !== currentPuzzle.userColor) return;

    const expectedMove = currentPuzzle.solution[expectedMovesCount];
    const playedMove = lastMove.from + lastMove.to + (lastMove.promotion ?? "");

    // Correct move check (direct match OR leads to checkmate in one)
    const isCorrect = playedMove === expectedMove || game.isCheckmate();

    if (!isCorrect) {
      // Incorrect move
      setFeedback("incorrect");
      playFailureSound();

      // Update rating for first fail
      if (!hasFailedThisPuzzle && profile) {
        setHasFailedThisPuzzle(true);
        const delta = getRatingDelta(profile.rating, currentPuzzle.rating, 0);
        const updated = addPuzzleAttempt(
          profile,
          currentPuzzle.id,
          getPuzzleTitle(currentPuzzle),
          currentPuzzle.rating,
          "failed",
          delta,
          currentPuzzle.primaryTheme
        );
        setProfile(updated);
      }

      // Reset board to last correct state after short delay
      setTimeout(() => {
        setPuzzleGame(buildPuzzlePosition(currentPuzzle, stepIndex));
        setFeedback("idle");
      }, 750);
      return;
    }

    // Play move sounds
    if (lastMove.captured) playCaptureSound();
    else if (game.inCheck()) playCheckSound();
    else playMoveSound();

    const nextStep = stepIndex + 1;
    setStepIndex(nextStep);

    if (nextStep === currentPuzzle.solution.length || game.isCheckmate()) {
      // Puzzle fully completed!
      setFeedback("complete");
      setCanPlay(false);
      playSuccessSound();

      if (!hasFailedThisPuzzle && profile) {
        const delta = getRatingDelta(profile.rating, currentPuzzle.rating, 1);
        const updated = addPuzzleAttempt(
          profile,
          currentPuzzle.id,
          getPuzzleTitle(currentPuzzle),
          currentPuzzle.rating,
          "solved",
          delta,
          currentPuzzle.primaryTheme
        );
        setProfile(updated);
      }
    } else {
      // Opponent response
      setFeedback("correct");
      setCanPlay(false);

      setTimeout(() => {
        const opponentUci = currentPuzzle.solution[nextStep];
        const nextGame = buildPuzzlePosition(currentPuzzle, nextStep + 1);
        setPuzzleGame(nextGame);

        // Highlight opponent reply
        const opponentMoveDetail = new Chess(
          buildPuzzlePosition(currentPuzzle, nextStep).fen()
        ).move({
          from: opponentUci.slice(0, 2),
          to: opponentUci.slice(2, 4),
          promotion: opponentUci[4] || undefined,
        });
        setPuzzleCurrentPosition({ lastMove: opponentMoveDetail });

        if (opponentMoveDetail.captured) playCaptureSound();
        else if (nextGame.inCheck()) playCheckSound();
        else playMoveSound();

        setStepIndex(nextStep + 1);
        setCanPlay(userColor);
        setFeedback("idle");
      }, 600);
    }
  }, [
    game,
    stepIndex,
    currentPuzzle,
    userColor,
    hasFailedThisPuzzle,
    profile,
    activeTab,
    playbackIndex,
    buildPuzzlePosition,
    setPuzzleCurrentPosition,
    setPuzzleGame,
    activePuzzleId,
  ]);

  // ==========================================
  // PUZZLE STORM GAMEPLAY CONTROLS
  // ==========================================
  const startStorm = () => {
    setStormActive(true);
    setStormScore(0);
    setStormStrikes(0);
    setStormTime(180);
    loadNextStormPuzzle(0);
  };

  const loadNextStormPuzzle = (currentScore: number) => {
    // Select puzzle rating based on score
    let minRating = 600;
    let maxRating = 1000;

    if (currentScore > 5 && currentScore <= 12) {
      minRating = 1000;
      maxRating = 1300;
    } else if (currentScore > 12 && currentScore <= 20) {
      minRating = 1300;
      maxRating = 1600;
    } else if (currentScore > 20 && currentScore <= 30) {
      minRating = 1600;
      maxRating = 1900;
    } else if (currentScore > 30) {
      minRating = 1900;
      maxRating = 3000;
    }

    const candidates = puzzles.filter(
      (p) => p.rating >= minRating && p.rating <= maxRating
    );
    const chosen =
      candidates[Math.floor(Math.random() * candidates.length)] || puzzles[0];

    setStormPuzzle(chosen);
    setStormStep(0);
    startPuzzleAnimation(chosen, true);
  };

  // Timer loop for Storm
  useEffect(() => {
    if (stormActive && stormTime > 0) {
      stormTimerRef.current = setInterval(() => {
        setStormTime((t) => {
          if (t <= 1) {
            clearInterval(stormTimerRef.current!);
            setStormActive(false);
            playFailureSound();
            if (profile) {
              const updated = saveStormHighScore(profile, stormScore);
              setProfile(updated);
            }
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => {
      if (stormTimerRef.current) clearInterval(stormTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stormActive, stormScore, profile]);

  // Monitor moves in Storm Mode
  useEffect(() => {
    if (activeTab !== 2 || !stormActive || !stormPuzzle) return;
    if (activePuzzleId !== stormPuzzle.id) return;

    const history = game.history({ verbose: true });
    if (history.length <= stormStep) return;

    const lastMove = history.at(-1);
    if (!lastMove) return;

    // Ignore opponent's move when it is processed by this effect
    if (lastMove.color !== stormPuzzle.userColor) return;

    const expectedMove = stormPuzzle.solution[stormStep];
    const playedMove = lastMove.from + lastMove.to + (lastMove.promotion ?? "");
    const isCorrect = playedMove === expectedMove || game.isCheckmate();

    if (!isCorrect) {
      // Strike!
      playFailureSound();
      const nextStrikes = stormStrikes + 1;
      setStormStrikes(nextStrikes);

      if (nextStrikes >= 3) {
        setStormActive(false);
        if (stormTimerRef.current) clearInterval(stormTimerRef.current);
        if (profile) {
          const updated = saveStormHighScore(profile, stormScore);
          setProfile(updated);
        }
      } else {
        // Skip to next puzzle on strike
        loadNextStormPuzzle(stormScore);
      }
      return;
    }

    // Play move sounds
    if (lastMove.captured) playCaptureSound();
    else if (game.inCheck()) playCheckSound();
    else playMoveSound();

    const nextStep = stormStep + 1;
    setStormStep(nextStep);

    if (nextStep === stormPuzzle.solution.length || game.isCheckmate()) {
      // Solved!
      playSuccessSound();
      const nextScore = stormScore + 1;
      setStormScore(nextScore);
      setStormTime((t) => t + 3); // Reward +3 seconds
      loadNextStormPuzzle(nextScore);
    } else {
      // Opponent response
      setTimeout(() => {
        const opponentUci = stormPuzzle.solution[nextStep];
        const nextGame = buildPuzzlePosition(stormPuzzle, nextStep + 1);
        setPuzzleGame(nextGame);

        // Highlight
        const opponentMoveDetail = new Chess(
          buildPuzzlePosition(stormPuzzle, nextStep).fen()
        ).move({
          from: opponentUci.slice(0, 2),
          to: opponentUci.slice(2, 4),
          promotion: opponentUci[4] || undefined,
        });
        setPuzzleCurrentPosition({ lastMove: opponentMoveDetail });

        if (opponentMoveDetail.captured) playCaptureSound();
        else if (nextGame.inCheck()) playCheckSound();
        else playMoveSound();

        setStormStep(nextStep + 1);
      }, 350);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    game,
    stormStep,
    stormActive,
    stormPuzzle,
    stormScore,
    stormStrikes,
    activeTab,
    buildPuzzlePosition,
    setPuzzleCurrentPosition,
    setPuzzleGame,
    profile,
    activePuzzleId,
  ]);

  // ==========================================
  // PUZZLE STREAK (SURVIVAL) GAMEPLAY CONTROLS
  // ==========================================
  const startStreak = () => {
    setStreakActive(true);
    setStreakScore(0);
    loadNextStreakPuzzle(0);
  };

  const loadNextStreakPuzzle = (currentStreakVal: number) => {
    // Scaled rating
    const targetRating = 700 + currentStreakVal * 50;
    const candidates = puzzles.filter(
      (p) => p.rating >= targetRating - 80 && p.rating <= targetRating + 80
    );
    const chosen =
      candidates[Math.floor(Math.random() * candidates.length)] || puzzles[0];

    setStreakPuzzle(chosen);
    setStreakStep(0);
    startPuzzleAnimation(chosen, true);
  };

  // Monitor moves in Streak Mode
  useEffect(() => {
    if (activeTab !== 3 || !streakActive || !streakPuzzle) return;
    if (activePuzzleId !== streakPuzzle.id) return;

    const history = game.history({ verbose: true });
    if (history.length <= streakStep) return;

    const lastMove = history.at(-1);
    if (!lastMove) return;

    // Ignore opponent's move when it is processed by this effect
    if (lastMove.color !== streakPuzzle.userColor) return;

    const expectedMove = streakPuzzle.solution[streakStep];
    const playedMove = lastMove.from + lastMove.to + (lastMove.promotion ?? "");
    const isCorrect = playedMove === expectedMove || game.isCheckmate();

    if (!isCorrect) {
      // Game Over! One mistake ends streak
      playFailureSound();
      setStreakActive(false);
      if (profile) {
        const updated = saveStreakHighScore(profile, streakScore);
        setProfile(updated);
      }
      return;
    }

    if (lastMove.captured) playCaptureSound();
    else if (game.inCheck()) playCheckSound();
    else playMoveSound();

    const nextStep = streakStep + 1;
    setStreakStep(nextStep);

    if (nextStep === streakPuzzle.solution.length || game.isCheckmate()) {
      // Solved!
      playSuccessSound();
      const nextScore = streakScore + 1;
      setStreakScore(nextScore);
      loadNextStreakPuzzle(nextScore);
    } else {
      // Opponent reply
      setTimeout(() => {
        const opponentUci = streakPuzzle.solution[nextStep];
        const nextGame = buildPuzzlePosition(streakPuzzle, nextStep + 1);
        setPuzzleGame(nextGame);

        // Highlight
        const opponentMoveDetail = new Chess(
          buildPuzzlePosition(streakPuzzle, nextStep).fen()
        ).move({
          from: opponentUci.slice(0, 2),
          to: opponentUci.slice(2, 4),
          promotion: opponentUci[4] || undefined,
        });
        setPuzzleCurrentPosition({ lastMove: opponentMoveDetail });

        if (opponentMoveDetail.captured) playCaptureSound();
        else if (nextGame.inCheck()) playCheckSound();
        else playMoveSound();

        setStreakStep(nextStep + 1);
      }, 450);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    game,
    streakStep,
    streakActive,
    streakPuzzle,
    streakScore,
    activeTab,
    buildPuzzlePosition,
    setPuzzleCurrentPosition,
    setPuzzleGame,
    profile,
    activePuzzleId,
  ]);

  // ==========================================
  // MISTAKE REVIEW GAMEPLAY MONITOR
  // ==========================================
  const startMistakeReview = () => {
    if (!profile || profile.mistakeIds.length === 0) return;
    setReviewActive(true);
    setReviewIndex(0);
    setReviewStep(0);
    setReviewFeedback("idle");
    if (reviewPuzzle) {
      startPuzzleAnimation(reviewPuzzle, false);
    }
  };

  useEffect(() => {
    if (activeTab === 4 && reviewActive && reviewPuzzle) {
      startPuzzleAnimation(reviewPuzzle, false);
      setReviewStep(0);
    }
  }, [
    reviewIndex,
    reviewActive,
    activeTab,
    reviewPuzzle,
    startPuzzleAnimation,
  ]);

  // Monitor moves in Mistake Review
  useEffect(() => {
    if (activeTab !== 4 || !reviewActive || !reviewPuzzle) return;
    if (activePuzzleId !== reviewPuzzle.id) return;

    const history = game.history({ verbose: true });
    if (history.length <= reviewStep) return;

    const lastMove = history.at(-1);
    if (!lastMove) return;

    // Ignore opponent's move when it is processed by this effect
    if (lastMove.color !== reviewPuzzle.userColor) return;

    const expectedMove = reviewPuzzle.solution[reviewStep];
    const playedMove = lastMove.from + lastMove.to + (lastMove.promotion ?? "");
    const isCorrect = playedMove === expectedMove || game.isCheckmate();

    if (!isCorrect) {
      setReviewFeedback("incorrect");
      playFailureSound();

      setTimeout(() => {
        setPuzzleGame(buildPuzzlePosition(reviewPuzzle, reviewStep));
        setReviewFeedback("idle");
      }, 750);
      return;
    }

    if (lastMove.captured) playCaptureSound();
    else if (game.inCheck()) playCheckSound();
    else playMoveSound();

    const nextStep = reviewStep + 1;
    setReviewStep(nextStep);

    if (nextStep === reviewPuzzle.solution.length || game.isCheckmate()) {
      // Solved successfully in review!
      setReviewFeedback("complete");
      playSuccessSound();

      if (profile) {
        // Remove from mistakes list and update profile
        const newMistakes = profile.mistakeIds.filter(
          (id) => id !== reviewPuzzle.id
        );
        const updatedProfile = {
          ...profile,
          mistakeIds: newMistakes,
          solved: profile.solved + 1, // count review solves slightly
        };
        // Add to history
        updatedProfile.history = [
          {
            id: reviewPuzzle.id,
            title: `Review: ${getPuzzleTitle(reviewPuzzle)}`,
            rating: reviewPuzzle.rating,
            result: "solved",
            delta: 0, // no rating impact on mistake review
            at: new Date().toISOString(),
          },
          ...updatedProfile.history.slice(0, 199),
        ];
        setProfile(updatedProfile);
        savePuzzleProfile(updatedProfile);
      }
    } else {
      setReviewFeedback("correct");
      setTimeout(() => {
        const opponentUci = reviewPuzzle.solution[nextStep];
        const nextGame = buildPuzzlePosition(reviewPuzzle, nextStep + 1);
        setPuzzleGame(nextGame);

        const opponentMoveDetail = new Chess(
          buildPuzzlePosition(reviewPuzzle, nextStep).fen()
        ).move({
          from: opponentUci.slice(0, 2),
          to: opponentUci.slice(2, 4),
          promotion: opponentUci[4] || undefined,
        });
        setPuzzleCurrentPosition({ lastMove: opponentMoveDetail });

        if (opponentMoveDetail.captured) playCaptureSound();
        else if (nextGame.inCheck()) playCheckSound();
        else playMoveSound();

        setReviewStep(nextStep + 1);
        setReviewFeedback("idle");
      }, 600);
    }
  }, [
    game,
    reviewStep,
    reviewActive,
    reviewPuzzle,
    activeTab,
    buildPuzzlePosition,
    setPuzzleCurrentPosition,
    setPuzzleGame,
    profile,
    activePuzzleId,
  ]);

  // ==========================================
  // HINTS CONTROLS
  // ==========================================
  const getHint = () => {
    if (feedback === "complete") return;
    const nextHint = hintLevel + 1;
    setHintLevel(nextHint);

    if (nextHint === 1) {
      // Hint 1: Highlight source piece square
      const expectedMove = currentPuzzle.solution[stepIndex];
      const fromSquare = expectedMove.slice(0, 2);
      setPuzzleCurrentPosition({
        lastMove: { from: fromSquare, to: fromSquare } as unknown as Move,
      });
      playCheckSound(); // sound alert
    } else if (nextHint === 2) {
      // Hint 2: Show theme/conceptual info
      playCheckSound();
    } else if (nextHint === 3) {
      // Hint 3: Show actual SAN
      playCheckSound();

      // Show the actual SAN move in the interface and flag puzzle as revealed/failed
      if (!hasFailedThisPuzzle && profile) {
        setHasFailedThisPuzzle(true);
        const delta = getRatingDelta(profile.rating, currentPuzzle.rating, 0);
        const updated = addPuzzleAttempt(
          profile,
          currentPuzzle.id,
          getPuzzleTitle(currentPuzzle),
          currentPuzzle.rating,
          "revealed",
          delta,
          currentPuzzle.primaryTheme
        );
        setProfile(updated);
      }
    }
  };

  // Next puzzle navigation
  const nextPuzzle = () => {
    setPuzzleIndex((prev) => prev + 1);
    setStepIndex(0);
  };

  // Skip puzzle
  const skipPuzzle = () => {
    if (profile) {
      const updated = addPuzzleAttempt(
        profile,
        currentPuzzle.id,
        getPuzzleTitle(currentPuzzle),
        currentPuzzle.rating,
        "skipped",
        0,
        currentPuzzle.primaryTheme
      );
      setProfile(updated);
    }
    nextPuzzle();
  };

  // Bookmark / Favorite toggle
  const handleToggleFavorite = () => {
    if (!profile) return;
    const updated = toggleFavorite(profile, currentPuzzle.id);
    setProfile(updated);
  };

  // export PGN / FEN
  const copyFen = () => {
    navigator.clipboard.writeText(game.fen());
  };

  const copyPgn = () => {
    navigator.clipboard.writeText(game.pgn() || currentPuzzle.fen);
  };

  // Rating Tiers & Badges helper
  const getEloTier = (rating: number) => {
    if (rating < 1000) return { name: "Bronze Novice", color: "#a05a2c" };
    if (rating < 1200) return { name: "Silver Scholar", color: "#a0aec0" };
    if (rating < 1400) return { name: "Golden Tactician", color: "#ecc94b" };
    if (rating < 1600) return { name: "Platinum Candidate", color: "#319795" };
    if (rating < 1800) return { name: "Emerald Master", color: "#38a169" };
    if (rating < 2000) return { name: "Diamond Grandmaster", color: "#3182ce" };
    return { name: "Elite Super GM", color: "#805ad5" };
  };

  // Simulated Leaderboard Rankings
  const leaderboardData = useMemo(() => {
    const defaultPlayers = [
      { name: "Stockfish 18 (Engine)", rating: 2850, isUser: false },
      { name: "Magnus Carlsen", rating: 2800, isUser: false },
      { name: "Hikaru Nakamura", rating: 2750, isUser: false },
      { name: "TacticalBot Extreme", rating: 2100, isUser: false },
      { name: "Lichess Master Puzzle", rating: 1750, isUser: false },
      { name: "Intermediate Chess Coach", rating: 1450, isUser: false },
      { name: "Casual Woodpusher", rating: 950, isUser: false },
    ];

    if (!profile) return defaultPlayers;

    const all = [
      ...defaultPlayers,
      { name: "You (Puzzle Solver)", rating: profile.rating, isUser: true },
    ];
    return all.sort((a, b) => b.rating - a.rating);
  }, [profile]);

  if (!mounted || !profile) return null;

  return (
    <Stack spacing={3} sx={{ pb: 6, px: { xs: 1, md: 2 } }}>
      <PageTitle title="Chesskit Puzzle Center" />
      {/* Modern Premium Tabs Bar */}
      <Paper
        elevation={0}
        sx={{
          borderRadius: 3,
          border: "1px solid",
          borderColor: "divider",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1a1a1e" : "#ffffff",
          p: 0.5,
        }}
      >
        <Tabs
          value={activeTab}
          onChange={(_, val) => setActiveTab(val)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            minHeight: 48,
            "& .MuiTab-root": {
              minHeight: 44,
              borderRadius: 2,
              mx: 0.5,
              py: 1,
              px: 2.5,
              fontWeight: 700,
              fontSize: "0.85rem",
              transition: "all 0.2s",
              "&.Mui-selected": {
                color: "primary.main",
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark"
                    ? "rgba(201, 169, 110, 0.12)"
                    : "rgba(201, 169, 110, 0.08)",
              },
            },
          }}
        >
          <Tab
            icon={
              <Icon
                icon="lucide:dashboard"
                width={18}
                style={{ marginRight: 6 }}
              />
            }
            iconPosition="start"
            label="Dashboard"
            value={0}
          />
          <Tab
            icon={
              <Icon icon="mdi:puzzle" width={18} style={{ marginRight: 6 }} />
            }
            iconPosition="start"
            label="Training"
            value={1}
          />
          <Tab
            icon={
              <Icon icon="lucide:zap" width={18} style={{ marginRight: 6 }} />
            }
            iconPosition="start"
            label="Puzzle Storm"
            value={2}
          />
          <Tab
            icon={
              <Icon
                icon="lucide:shield-check"
                width={18}
                style={{ marginRight: 6 }}
              />
            }
            iconPosition="start"
            label="Puzzle Streak"
            value={3}
          />
          <Tab
            icon={
              <Icon
                icon="lucide:book-open"
                width={18}
                style={{ marginRight: 6 }}
              />
            }
            iconPosition="start"
            label={`Mistake Review (${profile.mistakeIds.length})`}
            value={4}
          />
          <Tab
            icon={
              <Icon icon="lucide:users" width={18} style={{ marginRight: 6 }} />
            }
            iconPosition="start"
            label="Leaderboards"
            value={5}
          />
          <Tab
            icon={
              <Icon
                icon="lucide:settings"
                width={18}
                style={{ marginRight: 6 }}
              />
            }
            iconPosition="start"
            label="Settings"
            value={6}
          />
        </Tabs>
      </Paper>
      {/* ======================================================== */}
      {/* TAB 0: DASHBOARD & ANALYTICS */}
      {/* ======================================================== */}
      {activeTab === 0 && (
        <Grid container spacing={3}>
          {/* Main Info Cards */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 4,
                border: "1px solid",
                borderColor: "divider",
                background: (theme) =>
                  theme.palette.mode === "dark"
                    ? "linear-gradient(135deg, #202124 0%, #161719 100%)"
                    : "linear-gradient(135deg, #f6f7f8 0%, #e2e8f0 100%)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Stack spacing={2.5}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      fontWeight={700}
                    >
                      CURRENT PUZZLE RATING
                    </Typography>
                    <Chip
                      label={getEloTier(profile.rating).name}
                      sx={{
                        backgroundColor:
                          getEloTier(profile.rating).color + "25",
                        color: getEloTier(profile.rating).color,
                        fontWeight: 800,
                        border: `1px solid ${getEloTier(profile.rating).color}50`,
                      }}
                      size="small"
                    />
                  </Stack>
                  <Box>
                    <Typography
                      variant="h2"
                      fontWeight={900}
                      sx={{ letterSpacing: "-1px" }}
                    >
                      {profile.rating}{" "}
                      <Typography
                        component="span"
                        variant="h5"
                        color="text.secondary"
                      >
                        ELO
                      </Typography>
                    </Typography>
                  </Box>
                  <Divider />
                  <Stack direction="row" justifyContent="space-between">
                    <Box>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        display="block"
                      >
                        SOLVED / TOTAL
                      </Typography>
                      <Typography variant="body1" fontWeight={800}>
                        {profile.solved} / {profile.attempts}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: "right" }}>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        display="block"
                      >
                        WIN RATE
                      </Typography>
                      <Typography variant="body1" fontWeight={800}>
                        {profile.attempts > 0
                          ? Math.round(
                              (profile.solved / profile.attempts) * 100
                            )
                          : 0}
                        %
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 4,
                border: "1px solid",
                borderColor: "divider",
                height: "100%",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Stack spacing={2}>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    fontWeight={700}
                  >
                    STREAK RECORDS
                  </Typography>
                  <Stack spacing={3}>
                    <Box>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        display="block"
                      >
                        CURRENT SOLVE STREAK
                      </Typography>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Icon icon="lucide:flame" color="#e53e3e" width={28} />
                        <Typography variant="h4" fontWeight={900}>
                          {profile.streak}
                        </Typography>
                      </Stack>
                    </Box>
                    <Box>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        display="block"
                      >
                        BEST SOLVE STREAK
                      </Typography>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Icon icon="lucide:trophy" color="#d69e2e" width={24} />
                        <Typography variant="h5" fontWeight={800}>
                          {profile.bestStreak}
                        </Typography>
                      </Stack>
                    </Box>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 4,
                border: "1px solid",
                borderColor: "divider",
                height: "100%",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Stack spacing={2}>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    fontWeight={700}
                  >
                    GAME MODE HIGH SCORES
                  </Typography>
                  <Stack spacing={3}>
                    <Box>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        display="block"
                      >
                        PUZZLE STORM HIGH SCORE
                      </Typography>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Icon icon="lucide:zap" color="#ecc94b" width={28} />
                        <Typography variant="h4" fontWeight={900}>
                          {profile.stormHighScore}
                        </Typography>
                      </Stack>
                    </Box>
                    <Box>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        display="block"
                      >
                        PUZZLE STREAK RECORD
                      </Typography>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Icon
                          icon="lucide:shield-check"
                          color="#3182ce"
                          width={24}
                        />
                        <Typography variant="h5" fontWeight={800}>
                          {profile.streakHighScore}
                        </Typography>
                      </Stack>
                    </Box>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          {/* ELO Progress Chart */}
          <Grid size={{ xs: 12, md: 8 }} sx={{ minWidth: 0 }}>
            <Paper
              elevation={0}
              sx={{
                borderRadius: 4,
                border: "1px solid",
                borderColor: "divider",
                p: 3,
              }}
            >
              <Typography variant="subtitle1" fontWeight={850} sx={{ mb: 2 }}>
                Rating Progression
              </Typography>
              <Box
                sx={{ width: "100%", height: 260, minWidth: 0, minHeight: 0 }}
              >
                {profile.history.length === 0 ? (
                  <Stack
                    height="100%"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{ fontStyle: "italic" }}
                    >
                      Solve some puzzles to see your rating graph.
                    </Typography>
                  </Stack>
                ) : (
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={[...profile.history].reverse().map((h, i) => ({
                        index: i + 1,
                        rating: h.rating,
                      }))}
                      margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="colorElo"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#C9A96E"
                            stopOpacity={0.4}
                          />
                          <stop
                            offset="95%"
                            stopColor="#C9A96E"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <XAxis
                        dataKey="index"
                        stroke="#888888"
                        fontSize={11}
                        tickLine={false}
                      />
                      <YAxis
                        stroke="#888888"
                        fontSize={11}
                        tickLine={false}
                        domain={["auto", "auto"]}
                      />
                      <ChartTooltip
                        contentStyle={{
                          backgroundColor: "#1a1a1e",
                          border: "1px solid rgba(255,255,255,0.08)",
                          borderRadius: 6,
                          color: "#fff",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="rating"
                        stroke="#C9A96E"
                        strokeWidth={2.5}
                        fillOpacity={1}
                        fill="url(#colorElo)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                )}
              </Box>
            </Paper>
          </Grid>

          {/* Theme Stats Progress */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={0}
              sx={{
                borderRadius: 4,
                border: "1px solid",
                borderColor: "divider",
                p: 3,
                height: "100%",
              }}
            >
              <Typography variant="subtitle1" fontWeight={850} sx={{ mb: 2 }}>
                Tactics Breakdown
              </Typography>
              <Stack
                spacing={2}
                sx={{ maxHeight: 250, overflowY: "auto", pr: 1 }}
              >
                {Object.keys(profile.themeStats).length === 0 ? (
                  <Typography
                    color="text.secondary"
                    variant="body2"
                    sx={{ fontStyle: "italic", py: 4, textAlign: "center" }}
                  >
                    No stats available yet.
                  </Typography>
                ) : (
                  Object.entries(profile.themeStats).map(
                    ([themeKey, stats]) => {
                      const total = stats.solved + stats.failed;
                      const percent =
                        total > 0
                          ? Math.round((stats.solved / total) * 100)
                          : 0;
                      const themeName =
                        puzzleThemes[themeKey]?.name ?? themeKey;

                      return (
                        <Box key={themeKey}>
                          <Stack
                            direction="row"
                            justifyContent="space-between"
                            sx={{ mb: 0.5 }}
                          >
                            <Typography variant="caption" fontWeight={700}>
                              {themeName}
                            </Typography>
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              {stats.solved}/{total} ({percent}%)
                            </Typography>
                          </Stack>
                          <LinearProgress
                            variant="determinate"
                            value={percent}
                            sx={{ height: 6, borderRadius: 3 }}
                          />
                        </Box>
                      );
                    }
                  )
                )}
              </Stack>
            </Paper>
          </Grid>

          {/* Achievements Grid */}
          <Grid size={12}>
            <Paper
              elevation={0}
              sx={{
                borderRadius: 4,
                border: "1px solid",
                borderColor: "divider",
                p: 3,
              }}
            >
              <Typography variant="subtitle1" fontWeight={850} sx={{ mb: 2 }}>
                Tactical Achievements
              </Typography>
              <Grid container spacing={2}>
                {ACHIEVEMENTS.map((ach) => {
                  const isUnlocked = profile.achievements.includes(ach.id);
                  return (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={ach.id}>
                      <Card
                        elevation={0}
                        sx={{
                          borderRadius: 3,
                          border: "1px solid",
                          borderColor: isUnlocked ? "primary.main" : "divider",
                          backgroundColor: isUnlocked
                            ? "rgba(201, 169, 110, 0.04)"
                            : "transparent",
                          opacity: isUnlocked ? 1 : 0.6,
                          transition: "all 0.3s",
                        }}
                      >
                        <CardContent
                          sx={{ display: "flex", alignItems: "center", p: 2 }}
                        >
                          <Box
                            sx={{
                              p: 1.5,
                              borderRadius: 2,
                              backgroundColor: isUnlocked
                                ? "primary.main"
                                : "action.selected",
                              color: isUnlocked ? "#1a1a1e" : "text.secondary",
                              mr: 2,
                              display: "flex",
                            }}
                          >
                            <Icon icon={ach.icon} width={24} />
                          </Box>
                          <Box>
                            <Typography variant="body2" fontWeight={800}>
                              {ach.name}
                            </Typography>
                            <Typography
                              variant="caption"
                              color="text.secondary"
                              display="block"
                            >
                              {ach.description}
                            </Typography>
                          </Box>
                          {isUnlocked && (
                            <Box
                              sx={{
                                ml: "auto",
                                color: "primary.main",
                                display: "flex",
                              }}
                            >
                              <Icon icon="lucide:check-circle" width={18} />
                            </Box>
                          )}
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </Paper>
          </Grid>

          {/* Recent History Table */}
          <Grid size={12}>
            <Paper
              elevation={0}
              sx={{
                borderRadius: 4,
                border: "1px solid",
                borderColor: "divider",
                p: 3,
                overflow: "hidden",
              }}
            >
              <Typography variant="subtitle1" fontWeight={850} sx={{ mb: 2 }}>
                Recent Puzzle Activity
              </Typography>
              {profile.history.length === 0 ? (
                <Typography
                  color="text.secondary"
                  variant="body2"
                  sx={{ fontStyle: "italic", py: 4, textAlign: "center" }}
                >
                  No recent activity logged.
                </Typography>
              ) : (
                <TableContainer>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 800 }}>
                          Puzzle ID
                        </TableCell>
                        <TableCell sx={{ fontWeight: 800 }}>
                          Tactic / Theme
                        </TableCell>
                        <TableCell sx={{ fontWeight: 800 }} align="right">
                          Rating
                        </TableCell>
                        <TableCell sx={{ fontWeight: 800 }} align="center">
                          Result
                        </TableCell>
                        <TableCell sx={{ fontWeight: 800 }} align="right">
                          Elo Delta
                        </TableCell>
                        <TableCell sx={{ fontWeight: 800 }} align="right">
                          Timestamp
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {profile.history.slice(0, 10).map((h, i) => (
                        <TableRow key={i}>
                          <TableCell>
                            <Typography
                              component="a"
                              href={`https://lichess.org/training/${h.id}`}
                              target="_blank"
                              rel="noreferrer"
                              variant="body2"
                              fontWeight={700}
                              color="primary.main"
                              sx={{
                                textDecoration: "none",
                                display: "inline-flex",
                                alignItems: "center",
                              }}
                            >
                              {h.id}
                              <Icon
                                icon="lucide:external-link"
                                width={12}
                                style={{ marginLeft: 3 }}
                              />
                            </Typography>
                          </TableCell>
                          <TableCell>{h.title}</TableCell>
                          <TableCell align="right">{h.rating}</TableCell>
                          <TableCell align="center">
                            {h.result === "solved" ? (
                              <Chip
                                label="Success"
                                color="success"
                                size="small"
                                sx={{ fontWeight: 700 }}
                              />
                            ) : h.result === "skipped" ? (
                              <Chip
                                label="Skipped"
                                color="default"
                                size="small"
                                variant="outlined"
                                sx={{ fontWeight: 700 }}
                              />
                            ) : (
                              <Chip
                                label="Failed"
                                color="error"
                                size="small"
                                sx={{ fontWeight: 700 }}
                              />
                            )}
                          </TableCell>
                          <TableCell
                            align="right"
                            sx={{
                              fontWeight: 800,
                              color:
                                h.delta > 0
                                  ? "success.main"
                                  : h.delta < 0
                                    ? "error.main"
                                    : "text.secondary",
                            }}
                          >
                            {h.delta > 0
                              ? `+${h.delta}`
                              : h.delta === 0
                                ? "0"
                                : h.delta}
                          </TableCell>
                          <TableCell
                            align="right"
                            sx={{ color: "text.secondary" }}
                          >
                            {new Date(h.at).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </Paper>
          </Grid>
        </Grid>
      )}
      {/* ======================================================== */}
      {/* TAB 1: INTERACTIVE PUZZLE TRAINING */}
      {/* ======================================================== */}
      {activeTab === 1 && (
        <Grid container spacing={4} justifyContent="center" alignItems="start">
          {/* Left Column: Chess Board */}
          <Grid size={{ xs: 12, md: 7, lg: 6 }}>
            <Stack spacing={1.5} alignItems="center">
              <Board
                id="TrainingBoard"
                gameAtom={puzzleGameAtom}
                currentPositionAtom={puzzleCurrentPositionAtom}
                canPlay={playbackIndex === -1 ? canPlay : false}
                boardSize={boardSize}
                boardOrientation={userColor}
                whitePlayer={{ name: "White Player" }}
                blackPlayer={{ name: "Black Player" }}
              />
              <Typography variant="caption" color="text.secondary">
                Scroll or use buttons below to navigate moves in completed
                lines.
              </Typography>
            </Stack>
          </Grid>

          {/* Right Column: Puzzle Controls */}
          <Grid size={{ xs: 12, md: 5, lg: 5 }}>
            <Stack spacing={2.5}>
              {/* Filter Panel */}
              <Paper
                elevation={0}
                sx={{
                  p: 2.5,
                  borderRadius: 4,
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Typography
                  variant="subtitle2"
                  fontWeight={850}
                  sx={{ mb: 1.5 }}
                >
                  Filter & Customize Puzzles
                </Typography>
                <Stack spacing={2}>
                  <Stack direction="row" spacing={1.5}>
                    <FormControl size="small" fullWidth>
                      <InputLabel>Difficulty</InputLabel>
                      <Select
                        value={filterLevel}
                        label="Difficulty"
                        onChange={(e) => {
                          setFilterLevel(e.target.value);
                          setPuzzleIndex(0);
                        }}
                      >
                        <MenuItem value="All">All Levels</MenuItem>
                        <MenuItem value="Beginner">
                          Beginner (&lt; 1000)
                        </MenuItem>
                        <MenuItem value="Improver">
                          Improver (1000-1400)
                        </MenuItem>
                        <MenuItem value="Club">
                          Club Player (1400-1800)
                        </MenuItem>
                        <MenuItem value="Advanced">
                          Advanced (1800-2200)
                        </MenuItem>
                        <MenuItem value="Expert">Expert (&gt; 2200)</MenuItem>
                      </Select>
                    </FormControl>

                    <FormControl size="small" fullWidth>
                      <InputLabel>Tactical Theme</InputLabel>
                      <Select
                        value={filterTheme}
                        label="Tactical Theme"
                        onChange={(e) => {
                          setFilterTheme(e.target.value);
                          setPuzzleIndex(0);
                        }}
                        MenuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}
                      >
                        <MenuItem value="All">All Themes</MenuItem>
                        {Object.entries(puzzleThemes).map(([k, t]) => (
                          <MenuItem key={k} value={k}>
                            {t.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Stack>

                  <Stack
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Button
                      variant={showFavoritesOnly ? "contained" : "outlined"}
                      startIcon={<Icon icon="lucide:star" />}
                      size="small"
                      onClick={() => {
                        setShowFavoritesOnly(!showFavoritesOnly);
                        setPuzzleIndex(0);
                      }}
                    >
                      Favorites Only
                    </Button>
                    <Typography variant="caption" color="text.secondary">
                      Showing matching database puzzles
                    </Typography>
                  </Stack>
                </Stack>
              </Paper>

              {/* Core Active Puzzle Card */}
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1a1a1e" : "#f6f7f8",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 4,
                  p: 3,
                }}
              >
                <Stack spacing={2.2}>
                  {/* Title & Favorite */}
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box>
                      <Typography variant="h6" fontWeight={850}>
                        {getPuzzleTitle(currentPuzzle)}
                      </Typography>
                      {currentPuzzle.openingTags.length > 0 && (
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          display="block"
                        >
                          Opening: {formatOpening(currentPuzzle.openingTags)}
                        </Typography>
                      )}
                    </Box>
                    <IconButton onClick={handleToggleFavorite} color="primary">
                      <Icon
                        icon={
                          profile.favoriteIds.includes(currentPuzzle.id)
                            ? "lucide:star-off"
                            : "lucide:star"
                        }
                        color={
                          profile.favoriteIds.includes(currentPuzzle.id)
                            ? "#ecc94b"
                            : "inherit"
                        }
                      />
                    </IconButton>
                  </Stack>

                  {/* Themes chips */}
                  <Stack direction="row" flexWrap="wrap" gap={0.8}>
                    <Chip
                      label={currentPuzzle.level}
                      size="small"
                      color="primary"
                    />
                    {currentPuzzle.themes.slice(0, 3).map((t) => (
                      <Chip
                        key={t}
                        label={puzzleThemes[t]?.name ?? t}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Stack>

                  {/* Feedback Message */}
                  <Box
                    sx={{
                      backgroundColor:
                        feedback === "incorrect"
                          ? "rgba(223, 83, 83, 0.12)"
                          : feedback === "complete"
                            ? "rgba(116, 176, 56, 0.14)"
                            : feedback === "correct"
                              ? "rgba(116, 176, 56, 0.08)"
                              : "action.selected",
                      border: "1px solid",
                      borderColor:
                        feedback === "incorrect"
                          ? "rgba(223, 83, 83, 0.35)"
                          : feedback === "complete"
                            ? "rgba(116, 176, 56, 0.35)"
                            : "divider",
                      borderRadius: 2.5,
                      p: 2,
                    }}
                  >
                    <Typography
                      fontWeight={800}
                      color={
                        feedback === "incorrect" ? "error.main" : "text.primary"
                      }
                    >
                      {feedback === "incorrect"
                        ? "Try again!"
                        : feedback === "complete"
                          ? "Tactical sequence solved!"
                          : feedback === "correct"
                            ? "Correct, continue..."
                            : "Your Move"}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      fontSize="0.84rem"
                      sx={{ mt: 0.5 }}
                    >
                      {feedback === "incorrect"
                        ? "That move is legal, but not the forcing continuation."
                        : feedback === "complete"
                          ? "Well done. You found the winning line!"
                          : feedback === "correct"
                            ? "Keep following the force line."
                            : `Find the best move for ${userColor === Color.White ? "White" : "Black"}.`}
                    </Typography>
                  </Box>

                  {/* Hints System */}
                  <Stack spacing={1}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography
                        variant="caption"
                        fontWeight={700}
                        color="text.secondary"
                      >
                        STUCK? USE HINTS
                      </Typography>
                      {hintLevel > 0 && (
                        <Typography
                          variant="caption"
                          color="primary"
                          fontWeight={700}
                        >
                          Hint {hintLevel}/3 Active
                        </Typography>
                      )}
                    </Stack>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={getHint}
                      disabled={feedback === "complete"}
                      fullWidth
                    >
                      {hintLevel === 0
                        ? "Get Hint (1/3: Highlight Piece)"
                        : hintLevel === 1
                          ? "Get Hint (2/3: Reveal Theme)"
                          : hintLevel === 2
                            ? "Get Hint (3/3: Reveal SAN Move)"
                            : "No more hints available"}
                    </Button>
                    {hintLevel >= 2 && (
                      <Alert
                        severity="info"
                        icon={false}
                        sx={{ py: 0.5, borderRadius: 2 }}
                      >
                        <Typography
                          variant="caption"
                          display="block"
                          fontWeight={700}
                        >
                          Theme: {getPuzzleThemeDescription(currentPuzzle)}
                        </Typography>
                      </Alert>
                    )}
                    {hintLevel >= 3 && (
                      <Alert
                        severity="warning"
                        icon={false}
                        sx={{ py: 0.5, borderRadius: 2 }}
                      >
                        <Typography
                          variant="caption"
                          display="block"
                          fontWeight={800}
                        >
                          Next Move SAN:{" "}
                          {currentPuzzle.solutionSans[stepIndex] || "N/A"}
                        </Typography>
                      </Alert>
                    )}
                  </Stack>

                  {/* Playback Controls (Active only upon completion/reveal) */}
                  {(feedback === "complete" || playbackIndex !== -1) && (
                    <Stack spacing={1} sx={{ pt: 1 }}>
                      <Typography
                        variant="caption"
                        fontWeight={700}
                        color="text.secondary"
                      >
                        SOLUTION MOVE PLAYBACK
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={1}
                        justifyContent="center"
                      >
                        <IconButton
                          size="small"
                          onClick={() => handlePlayback("start")}
                        >
                          <Icon icon="lucide:chevrons-left" />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={() => handlePlayback("prev")}
                        >
                          <Icon icon="lucide:chevron-left" />
                        </IconButton>
                        <Box
                          sx={{
                            flexGrow: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Typography variant="caption" fontWeight={800}>
                            {playbackIndex === -1 ? stepIndex : playbackIndex} /{" "}
                            {currentPuzzle.solution.length}
                          </Typography>
                        </Box>
                        <IconButton
                          size="small"
                          onClick={() => handlePlayback("next")}
                        >
                          <Icon icon="lucide:chevron-right" />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={() => handlePlayback("end")}
                        >
                          <Icon icon="lucide:chevrons-right" />
                        </IconButton>
                      </Stack>
                      {playbackIndex !== -1 && (
                        <Button
                          variant="outlined"
                          color="primary"
                          size="small"
                          onClick={exitPlayback}
                        >
                          Return to Active Play
                        </Button>
                      )}
                    </Stack>
                  )}

                  {/* Control Actions */}
                  <Stack direction="row" spacing={1.5} sx={{ mt: 1 }}>
                    <Button
                      variant="outlined"
                      onClick={() => startPuzzleAnimation(currentPuzzle, false)}
                      fullWidth
                    >
                      Reset
                    </Button>
                    <Button variant="outlined" onClick={skipPuzzle} fullWidth>
                      Skip
                    </Button>
                    <Button variant="contained" onClick={nextPuzzle} fullWidth>
                      Next
                    </Button>
                  </Stack>

                  <Divider />

                  {/* Analysis and Export Buttons */}
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    <Button
                      variant="text"
                      size="small"
                      startIcon={
                        <Icon icon="streamline:magnifying-glass-solid" />
                      }
                      onClick={() => setAnalysisOpen(true)}
                    >
                      Analyze
                    </Button>
                    <Button
                      variant="text"
                      size="small"
                      startIcon={<Icon icon="lucide:copy" />}
                      onClick={copyFen}
                    >
                      Copy FEN
                    </Button>
                    <Button
                      variant="text"
                      size="small"
                      startIcon={<Icon icon="lucide:share-2" />}
                      onClick={copyPgn}
                    >
                      Copy PGN
                    </Button>
                  </Stack>
                </Stack>
              </Paper>
            </Stack>
          </Grid>
        </Grid>
      )}
      {/* ======================================================== */}
      {/* TAB 2: PUZZLE STORM */}
      {/* ======================================================== */}
      {activeTab === 2 && (
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {!stormActive ? (
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  border: "1px solid",
                  borderColor: "divider",
                  textAlign: "center",
                }}
              >
                <Icon icon="lucide:zap" width={64} color="#ecc94b" />
                <Typography variant="h4" fontWeight={900} sx={{ mt: 2, mb: 1 }}>
                  Puzzle Storm
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  Solve as many puzzles as possible in 3 minutes! Each correct
                  puzzle adds time (+3s). One mistake counts as a strike. 3
                  strikes and the run is over.
                </Typography>

                <Box
                  sx={{
                    mb: 4,
                    p: 2,
                    borderRadius: 3,
                    backgroundColor: "action.selected",
                    display: "inline-block",
                  }}
                >
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    display="block"
                  >
                    YOUR PUZZLE STORM RECORD
                  </Typography>
                  <Typography
                    variant="h4"
                    fontWeight={900}
                    color="primary.main"
                  >
                    {profile.stormHighScore} Solved
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  size="large"
                  onClick={startStorm}
                  fullWidth
                >
                  Launch Storm
                </Button>
              </Paper>
            </Grid>
          ) : (
            // Storm is active
            <Grid
              container
              spacing={4}
              size={12}
              justifyContent="center"
              alignItems="start"
            >
              <Grid size={{ xs: 12, md: 7, lg: 6 }}>
                <Stack spacing={2} alignItems="center">
                  {/* Stats Headings */}
                  <Stack
                    direction="row"
                    spacing={4}
                    sx={{
                      width: "100%",
                      justifyContent: "space-between",
                      px: 2,
                    }}
                  >
                    <Box>
                      <Typography variant="caption" color="text.secondary">
                        SCORE
                      </Typography>
                      <Typography variant="h5" fontWeight={900}>
                        {stormScore}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: "center" }}>
                      <Typography variant="caption" color="text.secondary">
                        TIME REMAINING
                      </Typography>
                      <Typography
                        variant="h5"
                        fontWeight={900}
                        color={stormTime < 30 ? "error.main" : "text.primary"}
                        sx={
                          stormTime < 30
                            ? {
                                animation: "pulse 0.8s ease-in-out infinite",
                                "@keyframes pulse": {
                                  "0%, 100%": { opacity: 1 },
                                  "50%": { opacity: 0.4 },
                                },
                              }
                            : undefined
                        }
                      >
                        {Math.floor(stormTime / 60)}:
                        {(stormTime % 60).toString().padStart(2, "0")}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: "right" }}>
                      <Typography variant="caption" color="text.secondary">
                        STRIKES
                      </Typography>
                      <Stack direction="row" spacing={0.5} sx={{ mt: 0.5 }}>
                        {[1, 2, 3].map((s) => (
                          <Icon
                            key={s}
                            icon="lucide:x-circle"
                            width={22}
                            color={
                              s <= stormStrikes
                                ? "#df5353"
                                : "rgba(255,255,255,0.15)"
                            }
                          />
                        ))}
                      </Stack>
                    </Box>
                  </Stack>

                  <LinearProgress
                    variant="determinate"
                    value={(stormTime / 180) * 100}
                    sx={{ width: "100%", height: 8, borderRadius: 4 }}
                  />

                  {stormPuzzle && (
                    <Board
                      id="StormBoard"
                      gameAtom={puzzleGameAtom}
                      currentPositionAtom={puzzleCurrentPositionAtom}
                      canPlay={userColor}
                      boardSize={boardSize}
                      boardOrientation={userColor}
                      whitePlayer={{ name: "Storm" }}
                      blackPlayer={{ name: "Speed" }}
                    />
                  )}
                </Stack>
              </Grid>
            </Grid>
          )}
        </Grid>
      )}
      {/* ======================================================== */}
      {/* TAB 3: PUZZLE STREAK (SURVIVAL) */}
      {/* ======================================================== */}
      {activeTab === 3 && (
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {!streakActive ? (
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  border: "1px solid",
                  borderColor: "divider",
                  textAlign: "center",
                }}
              >
                <Icon icon="lucide:shield-check" width={64} color="#3182ce" />
                <Typography variant="h4" fontWeight={900} sx={{ mt: 2, mb: 1 }}>
                  Puzzle Streak
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  Solve puzzles of increasing difficulty. One single mistake and
                  the streak is broken! How high can you climb?
                </Typography>

                <Box
                  sx={{
                    mb: 4,
                    p: 2,
                    borderRadius: 3,
                    backgroundColor: "action.selected",
                    display: "inline-block",
                  }}
                >
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    display="block"
                  >
                    BEST PUZZLE STREAK
                  </Typography>
                  <Typography
                    variant="h4"
                    fontWeight={900}
                    color="primary.main"
                  >
                    {profile.streakHighScore} Puzzles
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  size="large"
                  onClick={startStreak}
                  fullWidth
                >
                  Start Streak Run
                </Button>
              </Paper>
            </Grid>
          ) : (
            // Streak is active
            <Grid
              container
              spacing={4}
              size={12}
              justifyContent="center"
              alignItems="start"
            >
              <Grid size={{ xs: 12, md: 7, lg: 6 }}>
                <Stack spacing={2} alignItems="center">
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    sx={{ width: "100%", px: 2 }}
                  >
                    <Box>
                      <Typography variant="caption" color="text.secondary">
                        CURRENT STREAK
                      </Typography>
                      <Typography
                        variant="h5"
                        fontWeight={900}
                        color="primary.main"
                      >
                        {streakScore}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: "right" }}>
                      <Typography variant="caption" color="text.secondary">
                        PUZZLE DIFFICULTY
                      </Typography>
                      <Typography variant="h6" fontWeight={800}>
                        ~{700 + streakScore * 50} ELO
                      </Typography>
                    </Box>
                  </Stack>

                  {streakPuzzle && (
                    <Board
                      id="StreakBoard"
                      gameAtom={puzzleGameAtom}
                      currentPositionAtom={puzzleCurrentPositionAtom}
                      canPlay={userColor}
                      boardSize={boardSize}
                      boardOrientation={userColor}
                      whitePlayer={{ name: "Survival" }}
                      blackPlayer={{ name: "Tactic" }}
                    />
                  )}
                </Stack>
              </Grid>
            </Grid>
          )}
        </Grid>
      )}
      {/* ======================================================== */}
      {/* TAB 4: MISTAKE REVIEW (SPACED REPETITION) */}
      {/* ======================================================== */}
      {activeTab === 4 && (
        <Grid container spacing={4} justifyContent="center" alignItems="start">
          {profile.mistakeIds.length === 0 ? (
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 5,
                  borderRadius: 4,
                  border: "1px solid",
                  borderColor: "divider",
                  textAlign: "center",
                }}
              >
                <Icon icon="lucide:check-circle" width={64} color="#38a169" />
                <Typography variant="h5" fontWeight={900} sx={{ mt: 2, mb: 1 }}>
                  No Mistakes to Review!
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Fantastic job! Your mistake queue is empty. Failures in
                  Standard Training mode will automatically populate this tab
                  for review.
                </Typography>
              </Paper>
            </Grid>
          ) : !reviewActive ? (
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  border: "1px solid",
                  borderColor: "divider",
                  textAlign: "center",
                }}
              >
                <Icon icon="lucide:book-open" width={64} color="primary.main" />
                <Typography variant="h4" fontWeight={900} sx={{ mt: 2, mb: 1 }}>
                  Mistake Review
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  Review the puzzles you previously failed. Solving them
                  correctly removes them from this queue, solidifying your
                  tactical patterns.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  onClick={startMistakeReview}
                  fullWidth
                >
                  Begin Review ({profile.mistakeIds.length} Left)
                </Button>
              </Paper>
            </Grid>
          ) : (
            // Review is active
            <Grid
              container
              spacing={4}
              size={12}
              justifyContent="center"
              alignItems="start"
            >
              <Grid size={{ xs: 12, md: 7, lg: 6 }}>
                {reviewPuzzle && (
                  <Board
                    id="ReviewBoard"
                    gameAtom={puzzleGameAtom}
                    currentPositionAtom={puzzleCurrentPositionAtom}
                    canPlay={reviewFeedback === "complete" ? false : userColor}
                    boardSize={boardSize}
                    boardOrientation={userColor}
                    whitePlayer={{ name: "Mistake" }}
                    blackPlayer={{ name: "Review" }}
                  />
                )}
              </Grid>

              <Grid size={{ xs: 12, md: 5, lg: 5 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Stack spacing={2.5}>
                    <Typography variant="h6" fontWeight={850}>
                      Review Mode
                    </Typography>
                    {reviewPuzzle && (
                      <Box>
                        <Typography variant="subtitle2" fontWeight={800}>
                          {getPuzzleTitle(reviewPuzzle)}
                        </Typography>
                        <Chip
                          label={reviewPuzzle.level}
                          size="small"
                          color="primary"
                          sx={{ mt: 1 }}
                        />
                      </Box>
                    )}

                    <Box
                      sx={{
                        backgroundColor:
                          reviewFeedback === "incorrect"
                            ? "rgba(223, 83, 83, 0.12)"
                            : reviewFeedback === "complete"
                              ? "rgba(116, 176, 56, 0.14)"
                              : "action.selected",
                        border: "1px solid",
                        borderColor:
                          reviewFeedback === "incorrect"
                            ? "rgba(223, 83, 83, 0.35)"
                            : reviewFeedback === "complete"
                              ? "rgba(116, 176, 56, 0.35)"
                              : "divider",
                        borderRadius: 2.5,
                        p: 2,
                      }}
                    >
                      <Typography fontWeight={800}>
                        {reviewFeedback === "incorrect"
                          ? "Incorrect, try again!"
                          : reviewFeedback === "complete"
                            ? "Mistake Solved!"
                            : "Your Move"}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 0.5 }}
                      >
                        {reviewFeedback === "complete"
                          ? "This puzzle is removed from your review list!"
                          : "Find the forcing move."}
                      </Typography>
                    </Box>

                    <Stack direction="row" spacing={1.5}>
                      {reviewFeedback === "complete" ? (
                        <Button
                          variant="contained"
                          onClick={() => {
                            setReviewIndex((i) => i + 1);
                            setReviewFeedback("idle");
                          }}
                          fullWidth
                        >
                          Next Mistake
                        </Button>
                      ) : (
                        <Button
                          variant="outlined"
                          onClick={() =>
                            startPuzzleAnimation(reviewPuzzle!, false)
                          }
                          fullWidth
                        >
                          Reset Board
                        </Button>
                      )}
                    </Stack>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          )}
        </Grid>
      )}
      {/* ======================================================== */}
      {/* TAB 5: LEADERBOARDS */}
      {/* ======================================================== */}
      {activeTab === 5 && (
        <Grid container spacing={3} justifyContent="center">
          {/* User Stats Summary */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={3}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Typography variant="subtitle1" fontWeight={850} sx={{ mb: 2 }}>
                  Your Rankings
                </Typography>

                <Stack spacing={2.5}>
                  <Box>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Icon icon="lucide:trophy" width={20} color="#d69e2e" />
                        <Typography variant="body2" fontWeight={600}>
                          Puzzle Rating
                        </Typography>
                      </Stack>
                      <Chip
                        label={getEloTier(profile.rating).name}
                        size="small"
                        sx={{
                          backgroundColor:
                            getEloTier(profile.rating).color + "20",
                          color: getEloTier(profile.rating).color,
                          border: `1px solid ${getEloTier(profile.rating).color}40`,
                          fontWeight: 700,
                        }}
                      />
                    </Stack>
                    <Typography variant="h4" fontWeight={900} sx={{ mt: 0.5 }}>
                      {profile.rating}
                    </Typography>
                  </Box>

                  <Divider />

                  <Stack direction="row" spacing={2}>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        display="block"
                      >
                        STORM HIGH
                      </Typography>
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <Icon icon="lucide:zap" width={18} color="#ecc94b" />
                        <Typography variant="h6" fontWeight={800}>
                          {profile.stormHighScore}
                        </Typography>
                      </Stack>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        display="block"
                      >
                        STREAK RECORD
                      </Typography>
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <Icon
                          icon="lucide:shield-check"
                          width={18}
                          color="#3182ce"
                        />
                        <Typography variant="h6" fontWeight={800}>
                          {profile.streakHighScore}
                        </Typography>
                      </Stack>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        display="block"
                      >
                        SOLVE RATE
                      </Typography>
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <Icon icon="lucide:target" width={18} color="#38a169" />
                        <Typography variant="h6" fontWeight={800}>
                          {profile.attempts > 0
                            ? Math.round(
                                (profile.solved / profile.attempts) * 100
                              )
                            : 0}
                          %
                        </Typography>
                      </Stack>
                    </Box>
                  </Stack>
                </Stack>
              </Paper>

              {/* Category Leaderboard */}
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Typography variant="subtitle1" fontWeight={850} sx={{ mb: 2 }}>
                  Storm Leaderboard
                </Typography>
                <TableContainer>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 800 }}>#</TableCell>
                        <TableCell sx={{ fontWeight: 800 }}>Name</TableCell>
                        <TableCell align="right" sx={{ fontWeight: 800 }}>
                          Solved
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {[
                        { name: "Hikaru Nakamura", score: 68, isUser: false },
                        { name: "Magnus Carlsen", score: 62, isUser: false },
                        { name: "Lichess Master", score: 55, isUser: false },
                        {
                          name: "TacticalBot Extreme",
                          score: 42,
                          isUser: false,
                        },
                        {
                          name: "Casual Woodpusher",
                          score: profile.stormHighScore,
                          isUser: true,
                          showIfLower: true,
                        },
                      ]
                        .filter((p) => !p.showIfLower || p.score > 0)
                        .sort((a, b) => b.score - a.score)
                        .map((player, idx) => (
                          <TableRow
                            key={player.name}
                            sx={{
                              backgroundColor: player.isUser
                                ? "rgba(201, 169, 110, 0.08)"
                                : "inherit",
                              borderLeft: player.isUser ? "3px solid" : "none",
                              borderColor: "primary.main",
                            }}
                          >
                            <TableCell sx={{ fontWeight: 700 }}>
                              #{idx + 1}
                            </TableCell>
                            <TableCell
                              sx={{ fontWeight: player.isUser ? 800 : 500 }}
                            >
                              {player.name} {player.isUser && "(You)"}
                            </TableCell>
                            <TableCell align="right" sx={{ fontWeight: 800 }}>
                              {player.score}
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Stack>
          </Grid>

          {/* Rating Leaderboard */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 4,
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Typography variant="h6" fontWeight={850} sx={{ mb: 1 }}>
                Tactical Rating Leaderboard
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Your puzzle Elo compared to legendary engines, grandmasters, and
                specialized bots. Rankings are simulated for illustrative
                purposes.
              </Typography>

              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 800 }}>Rank</TableCell>
                      <TableCell sx={{ fontWeight: 800 }}>Name</TableCell>
                      <TableCell align="right" sx={{ fontWeight: 800 }}>
                        Rating
                      </TableCell>
                      <TableCell align="center" sx={{ fontWeight: 800 }}>
                        Tier
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {leaderboardData.map((player, index) => {
                      const tier = getEloTier(player.rating);
                      return (
                        <TableRow
                          key={index}
                          sx={{
                            backgroundColor: player.isUser
                              ? "rgba(201, 169, 110, 0.08)"
                              : "inherit",
                            borderLeft: player.isUser ? "4px solid" : "none",
                            borderColor: "primary.main",
                          }}
                        >
                          <TableCell sx={{ fontWeight: 800 }}>
                            #{index + 1}
                          </TableCell>
                          <TableCell
                            sx={{ fontWeight: player.isUser ? 800 : 500 }}
                          >
                            {player.name} {player.isUser && "(You)"}
                          </TableCell>
                          <TableCell align="right" sx={{ fontWeight: 800 }}>
                            {player.rating}
                          </TableCell>
                          <TableCell align="center">
                            <Chip
                              label={tier.name}
                              size="small"
                              sx={{
                                backgroundColor: tier.color + "20",
                                color: tier.color,
                                border: `1px solid ${tier.color}40`,
                                fontWeight: 700,
                              }}
                            />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      )}
      {/* ======================================================== */}
      {/* TAB 6: SETTINGS */}
      {/* ======================================================== */}
      {activeTab === 6 && (
        <Grid container spacing={3} justifyContent="center">
          <Grid size={{ xs: 12, md: 8 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 4,
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Typography variant="h6" fontWeight={850} sx={{ mb: 4 }}>
                Chessboard settings
              </Typography>

              <Stack spacing={4}>
                {/* Dark Mode Toggle */}
                <Box>
                  <Typography variant="subtitle2" fontWeight={800} gutterBottom>
                    Theme mode
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    display="block"
                    sx={{ mb: 2 }}
                  >
                    Toggle between light and dark mode.
                  </Typography>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={!!darkModeVal}
                        onChange={(e) => setDarkModeVal(e.target.checked)}
                        color="primary"
                      />
                    }
                    label={
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Icon
                          icon={
                            darkModeVal
                              ? "mdi:brightness-7"
                              : "mdi:brightness-4"
                          }
                          width={20}
                        />
                        <Typography variant="body2" fontWeight={500}>
                          {darkModeVal ? "Dark Mode" : "Light Mode"}
                        </Typography>
                      </Box>
                    }
                  />
                </Box>

                <Divider />

                {/* Board Hue Shift */}
                <Box>
                  <Typography variant="subtitle2" fontWeight={800} gutterBottom>
                    Board Color theme (Hue Rotation)
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    display="block"
                    sx={{ mb: 2 }}
                  >
                    Rotate the hue of the board tiles to customize the look.
                    Current: {boardHue}°
                  </Typography>
                  <Slider
                    value={boardHue}
                    min={0}
                    max={360}
                    step={10}
                    onChange={(_, val) => setBoardHue(val as number)}
                    valueLabelDisplay="auto"
                  />
                  {/* Sample board visualizer */}
                  <Stack direction="row" spacing={1.5} sx={{ mt: 1 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        backgroundColor: "#c9a96e",
                        borderRadius: 1,
                        filter: boardHue
                          ? `hue-rotate(${boardHue}deg)`
                          : "none",
                      }}
                    />
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        backgroundColor: "#587a80",
                        borderRadius: 1,
                        filter: boardHue
                          ? `hue-rotate(${boardHue}deg)`
                          : "none",
                      }}
                    />
                  </Stack>
                </Box>

                <Divider />

                {/* Piece Set dropdown */}
                <Box>
                  <Typography variant="subtitle2" fontWeight={800} gutterBottom>
                    Chess Piece Set
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    display="block"
                    sx={{ mb: 2 }}
                  >
                    Choose your favorite pieces skin.
                  </Typography>

                  <FormControl size="small" fullWidth sx={{ maxWidth: 300 }}>
                    <InputLabel>Piece Set</InputLabel>
                    <Select
                      value={pieceSet}
                      label="Piece Set"
                      onChange={(e) =>
                        setPieceSet(e.target.value as typeof pieceSet)
                      }
                    >
                      {PIECE_SETS.map((set) => (
                        <MenuItem key={set} value={set}>
                          {set.toUpperCase()}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  {/* Piece Preview */}
                  <Stack
                    direction="row"
                    spacing={1.5}
                    sx={{ mt: 3, flexWrap: "wrap", gap: 1 }}
                  >
                    {["wK", "wQ", "wR", "bN", "bB", "bP"].map((p) => (
                      <Box
                        key={p}
                        sx={{
                          width: 48,
                          height: 48,
                          backgroundImage: `url(/piece/${pieceSet}/${p}.svg)`,
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                          backgroundColor: "action.hover",
                          borderRadius: 2,
                          p: 0.5,
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      )}
      {/* ANALYSIS POPUP OVERLAY */}
      <AnalysisOverlay
        open={analysisOpen}
        onClose={() => setAnalysisOpen(false)}
        initialFen={currentPuzzle.fen}
        opponentMoveSan={currentPuzzle.opponentMoveSan}
        puzzleTitle={getPuzzleTitle(currentPuzzle)}
      />
    </Stack>
  );
}
