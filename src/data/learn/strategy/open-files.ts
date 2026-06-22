import { LearnTopic } from "../types";

export const openFilesOutposts: LearnTopic = {
  slug: "open-files-outposts",
  title: "Open Files and Outposts",
  category: "strategy",
  description:
    "Positional mastery. Learn how to open and control files with your rooks, penetrate to the 7th rank, and secure dominant outposts for your knights.",
  difficulty: "intermediate",
  estimatedMinutes: 15,
  icon: "mdi:highway",
  tags: ["strategy", "open file", "outpost", "rook activity", "knight"],
  sections: [
    {
      title: "Introduction",
      type: "text",
      content: `Positional chess is about placing your pieces on their optimal squares where they can exert the maximum influence. Two of the most important concepts in positional play are Open Files and Outposts:

- Open Files: A file with no pawns. Rooks need open files to travel deep into the enemy territory and attack targets.
- Outposts: A square (usually on the 4th, 5th, or 6th rank) that cannot be attacked by enemy pawns. Knights thrive on outposts, acting as powerful blockaders and attackers.

By mastering these two concepts, you will be able to formulate long-term strategic plans and slowly squeeze your opponent off the board.`,
    },
    {
      title: "Rooks on Open Files",
      type: "position",
      interactionMode: "freeplay",
      fen: "3r2k1/pp3ppp/8/8/8/8/PP1R1PPP/3R2K1 w - - 0 1",
      content: `A file is considered "open" when there are no pawns on it. Rooks are long-range pieces that are severely restricted by pawns. Therefore, placing your rooks on open files is a fundamental rule of chess.

Key guidelines:
1. Double your rooks: Placing both rooks on the same open file (doubling them) exerts massive pressure and prepares to break through.
2. Contesting files: If your opponent occupies an open file, you should often contest it by placing your own rook on it, neutralising their advantage.
3. Overprotecting the entry points: Ensure the entry squares on the open file are protected so your rooks can safely slide forward.

In this position, the d-file is completely open. White has a rook on d1 and another on d3 — both rooks on the open file. The Black rook on d8 is matched. The key question: which side can break through?`,
    },
    {
      title: "Penetrating to the 7th Rank",
      type: "position",
      fen: "5rk1/pp3ppp/8/8/8/8/PP1R1PPP/3R2K1 w - - 0 1",
      content: `The main goal of controlling an open file is to penetrate into the enemy camp — specifically to the 7th rank (2nd rank for Black).

A rook on the 7th rank is incredibly powerful because:
- It attacks the enemy pawns from the side or behind (where they are undefended).
- It traps the enemy king on the back rank, creating tactical mating nets.
- It restricts the mobility of the defending pieces.

If you can place two rooks on the 7th rank (known as "blind pigs"), they are almost always winning, regardless of the material balance.

The lesson: open files are a means to an end. The end is the 7th rank, where your rooks become dangerous invaders. Master the technique of doubling on the open file, then finding the moment to penetrate.`,
    },
    {
      title: "Outposts: Knight Havens",
      type: "position",
      interactionMode: "freeplay",
      fen: "r4rk1/pp3ppp/2np4/2bNp3/4P3/7P/PPP2PP1/R4RK1 w - - 0 1",
      content: `An outpost is a square on the 4th, 5th, or 6th rank that cannot be attacked by an enemy pawn. In this position, the d5 square is a perfect outpost for White.

The d5 square is an outpost because:
- It is supported by White's e4 pawn.
- Black has no pawn on the c-file or e-file that can push the knight away (the d6 pawn is backward and blocked).

Knights are short-range pieces that need to be close to the action to be effective. A knight anchored on a central outpost:
- Controls key squares in the enemy camp.
- Cannot be driven away by pawns, forcing the opponent to trade a bishop or rook for it.
- Acts as a shield, blocking enemy lines of communication.

The lesson: outposts are the knight's natural home. When you see a square that cannot be attacked by enemy pawns, ask: "Can a knight reach this square?" If yes, that's an outpost waiting to be occupied.`,
    },
    {
      title: "Quiz: Identify the Best Outpost",
      type: "trap",
      interactionMode: "quiz",
      orientation: "white",
      quizFen:
        "r1bqk2r/pp2ppbp/2np1np1/8/3NP3/2N1B3/PPP1BPPP/R2QK2R w KQkq - 4 8",
      quizAnswer: ["Nd5"],
      quizHint:
        "Look for a central square where your knight can jump, supported by a pawn, and cannot be easily attacked by Black's pawns.",
      content: `In this classic Sicilian defense structure, White has a space advantage. Black's pawns are on e7 and d6.

Find the most active central leap for the White knight to establish a powerful outpost and restrict Black's counterplay.`,
    },
  ],
};
