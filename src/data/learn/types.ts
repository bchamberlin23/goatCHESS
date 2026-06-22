export type TopicCategory =
  | "openings"
  | "mates"
  | "tactics"
  | "strategy"
  | "endgames";

export interface LearnTopic {
  slug: string;
  title: string;
  category: TopicCategory;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedMinutes: number;
  icon: string;
  sections: TopicSection[];
  tags: string[];
  /** Practice mode — CPU plays random responses for the user to respond to */
  practice?: PracticeConfig;
}

export type InteractionMode = "freeplay" | "guided" | "quiz";

export interface TopicSection {
  title: string;
  type: "text" | "position" | "moves" | "tip" | "trap" | "key-idea";
  content?: string;
  fen?: string;
  moves?: string[];
  moveDescriptions?: string[];
  orientation?: "white" | "black";
  /** Interactive mode override — determined by section type when not set */
  interactionMode?: InteractionMode;
  /** For quiz sections: FEN of the position to solve */
  quizFen?: string;
  /** For quiz sections: the correct move(s) the user must find */
  quizAnswer?: string[];
  /** Hint shown if user plays wrong move in quiz mode */
  quizHint?: string;
}

/** One practice line — a sequence of moves the CPU will play and user is expected to match */
export interface PracticeLine {
  name: string;
  description: string;
  /** Full move sequence (both sides). CPU plays the black moves, user plays white */
  moves: string[];
}

export interface PracticeConfig {
  /** Starting FEN for practice (usually after 1.b4 or similar first move) */
  startingFen: string;
  /** Which side the user plays */
  userColor: "w" | "b";
  /** Instructions shown at practice start */
  instructions: string;
  /** Available lines the CPU randomly picks from */
  lines: PracticeLine[];
}

export const CATEGORY_META: Record<
  TopicCategory,
  {
    label: string;
    icon: string;
    description: string;
    color: string;
  }
> = {
  openings: {
    label: "Openings",
    icon: "mdi:chess-knight",
    description:
      "Master chess openings, their key ideas, main variations, and typical plans for both sides.",
    color: "#74b038",
  },
  mates: {
    label: "Checkmates",
    icon: "mdi:chess-king",
    description:
      "Learn essential checkmate patterns from basic to advanced that every player must know.",
    color: "#df5353",
  },
  tactics: {
    label: "Tactics",
    icon: "mdi:flash",
    description:
      "Develop your tactical vision with forks, pins, skewers, discovered attacks, and more.",
    color: "#dd8c36",
  },
  strategy: {
    label: "Strategy",
    icon: "mdi:target",
    description:
      "Understand positional chess, pawn structures, piece activity, space, and long-term planning.",
    color: "#7799cc",
  },
  endgames: {
    label: "Endgames",
    icon: "mdi:chess-rook",
    description:
      "Build your endgame technique with fundamental positions every player should master.",
    color: "#aa66cc",
  },
};

export const DIFFICULTY_COLORS: Record<string, string> = {
  beginner: "#74b038",
  intermediate: "#dd8c36",
  advanced: "#df5353",
};
