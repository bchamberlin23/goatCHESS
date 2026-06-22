import {
  PuzzleProfile,
  defaultPuzzleProfile,
  PuzzleHistoryItem,
} from "./puzzleData";

const STORAGE_KEY = "chesskit_puzzle_profile_v2";

export interface ExtendedPuzzleProfile extends PuzzleProfile {
  achievements: string[];
  stormHighScore: number;
  streakHighScore: number;
  mistakeIds: string[]; // Spaced repetition mistake review queue
}

export const defaultExtendedProfile: ExtendedPuzzleProfile = {
  ...defaultPuzzleProfile,
  achievements: [],
  stormHighScore: 0,
  streakHighScore: 0,
  mistakeIds: [],
};

export function loadPuzzleProfile(): ExtendedPuzzleProfile {
  if (typeof window === "undefined") return defaultExtendedProfile;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return defaultExtendedProfile;

    const parsed = JSON.parse(stored);
    return {
      ...defaultExtendedProfile,
      ...parsed,
      // Ensure nested fields are initialized
      themeStats: parsed.themeStats || {},
      history: parsed.history || [],
      seenIds: parsed.seenIds || [],
      favoriteIds: parsed.favoriteIds || [],
      missedIds: parsed.missedIds || [],
      achievements: parsed.achievements || [],
      mistakeIds: parsed.mistakeIds || [],
    };
  } catch (error) {
    console.error("Failed to load puzzle profile", error);
    return defaultExtendedProfile;
  }
}

export function savePuzzleProfile(profile: ExtendedPuzzleProfile) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch (error) {
    console.error("Failed to save puzzle profile", error);
  }
}

export function addPuzzleAttempt(
  profile: ExtendedPuzzleProfile,
  puzzleId: string,
  title: string,
  puzzleRating: number,
  result: "solved" | "failed" | "skipped" | "revealed",
  ratingDelta: number,
  primaryTheme: string
): ExtendedPuzzleProfile {
  const newProfile = { ...profile };

  // Update overall counts
  newProfile.attempts += 1;
  newProfile.seenIds = [...new Set([...newProfile.seenIds, puzzleId])];

  if (result === "solved") {
    newProfile.solved += 1;
    newProfile.streak += 1;
    if (newProfile.streak > newProfile.bestStreak) {
      newProfile.bestStreak = newProfile.streak;
    }
    // Remove from mistakes if it was in there
    newProfile.mistakeIds = newProfile.mistakeIds.filter(
      (id) => id !== puzzleId
    );
  } else {
    if (result === "failed" || result === "revealed") {
      newProfile.failed += 1;
      newProfile.missedIds = [...new Set([...newProfile.missedIds, puzzleId])];
      // Add to spaced repetition review queue
      newProfile.mistakeIds = [
        ...new Set([...newProfile.mistakeIds, puzzleId]),
      ];
    } else {
      newProfile.skipped += 1;
    }
    newProfile.streak = 0;
  }

  // Update rating
  newProfile.rating = Math.max(100, newProfile.rating + ratingDelta);

  // Update theme metrics
  if (primaryTheme) {
    const stats = newProfile.themeStats[primaryTheme] || {
      solved: 0,
      failed: 0,
    };
    if (result === "solved") {
      stats.solved += 1;
    } else if (result === "failed" || result === "revealed") {
      stats.failed += 1;
    }
    newProfile.themeStats = {
      ...newProfile.themeStats,
      [primaryTheme]: stats,
    };
  }

  // Add history item
  const historyItem: PuzzleHistoryItem = {
    id: puzzleId,
    title,
    rating: puzzleRating,
    result,
    delta: ratingDelta,
    at: new Date().toISOString(),
  };
  newProfile.history = [historyItem, ...newProfile.history.slice(0, 199)]; // Cap history at 200 items

  // Check achievements
  newProfile.achievements = checkAchievements(newProfile);

  savePuzzleProfile(newProfile);
  return newProfile;
}

export function toggleFavorite(
  profile: ExtendedPuzzleProfile,
  puzzleId: string
): ExtendedPuzzleProfile {
  const newProfile = { ...profile };
  if (newProfile.favoriteIds.includes(puzzleId)) {
    newProfile.favoriteIds = newProfile.favoriteIds.filter(
      (id) => id !== puzzleId
    );
  } else {
    newProfile.favoriteIds = [...newProfile.favoriteIds, puzzleId];
  }
  savePuzzleProfile(newProfile);
  return newProfile;
}

export function saveStormHighScore(
  profile: ExtendedPuzzleProfile,
  score: number
): ExtendedPuzzleProfile {
  const newProfile = { ...profile };
  if (score > newProfile.stormHighScore) {
    newProfile.stormHighScore = score;
    savePuzzleProfile(newProfile);
  }
  return newProfile;
}

export function saveStreakHighScore(
  profile: ExtendedPuzzleProfile,
  score: number
): ExtendedPuzzleProfile {
  const newProfile = { ...profile };
  if (score > newProfile.streakHighScore) {
    newProfile.streakHighScore = score;
    savePuzzleProfile(newProfile);
  }
  return newProfile;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  check: (profile: ExtendedPuzzleProfile) => boolean;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "first_solve",
    name: "First Blood",
    description: "Solve your very first chess puzzle",
    icon: "lucide:sword",
    check: (p) => p.solved >= 1,
  },
  {
    id: "streak_5",
    name: "On Fire",
    description: "Reach a solve streak of 5 puzzles",
    icon: "lucide:flame",
    check: (p) => p.bestStreak >= 5,
  },
  {
    id: "streak_10",
    name: "Tactical Genius",
    description: "Reach a solve streak of 10 puzzles",
    icon: "lucide:trophy",
    check: (p) => p.bestStreak >= 10,
  },
  {
    id: "expert_solver",
    name: "Grandmaster Brain",
    description: "Reach a puzzle rating of 1800 ELO",
    icon: "lucide:crown",
    check: (p) => p.rating >= 1800,
  },
  {
    id: "pioneer",
    name: "Explorer",
    description: "Solve puzzles across 5 different themes",
    icon: "lucide:compass",
    check: (p) =>
      Object.keys(p.themeStats).filter((t) => p.themeStats[t].solved > 0)
        .length >= 5,
  },
  {
    id: "storm_10",
    name: "Storm Chaser",
    description: "Solve 10+ puzzles in a single Puzzle Storm run",
    icon: "lucide:zap",
    check: (p) => p.stormHighScore >= 10,
  },
  {
    id: "storm_20",
    name: "Lightning Master",
    description: "Solve 20+ puzzles in a single Puzzle Storm run",
    icon: "lucide:cloud-lightning",
    check: (p) => p.stormHighScore >= 20,
  },
  {
    id: "streak_mode_10",
    name: "Survivor",
    description: "Get a streak of 10+ in Puzzle Streak mode",
    icon: "lucide:shield-check",
    check: (p) => p.streakHighScore >= 10,
  },
  {
    id: "mistake_clearer",
    name: "Clean Slate",
    description: "Successfully solve a puzzle in Mistake Review",
    icon: "lucide:check-circle",
    check: (p) =>
      p.attempts > p.solved + p.failed &&
      p.history.some((h) => h.result === "solved" && p.seenIds.includes(h.id)), // simplified check
  },
];

function checkAchievements(profile: ExtendedPuzzleProfile): string[] {
  const unlocked = [...profile.achievements];
  for (const ach of ACHIEVEMENTS) {
    if (!unlocked.includes(ach.id) && ach.check(profile)) {
      unlocked.push(ach.id);
    }
  }
  return unlocked;
}
