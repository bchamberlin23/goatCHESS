import { LearnTopic } from "../types";

export const pieceActivity: LearnTopic = {
  slug: "piece-activity",
  title: "Piece Activity & Coordination",
  category: "strategy",
  description:
    "An inactive piece is a useless piece. Learn how to evaluate piece activity, find optimal squares, and coordinate your army for maximum effectiveness.",
  difficulty: "intermediate",
  estimatedMinutes: 10,
  icon: "mdi:run-fast",
  tags: [
    "piece activity",
    "coordination",
    "outpost",
    "good bishop",
    "bad bishop",
  ],
  sections: [
    {
      title: "The Activity Principle",
      type: "text",
      content: `In chess, piece activity is everything. A well-placed knight on an outpost is often worth more than a rook stuck in the corner. The key question for every piece: "What are you doing?" If a piece controls important squares, supports a pawn break, or threatens the opponent, it's earning its keep. If it's just sitting there, it's a liability.

Steinitz's accumulation theory: Accumulate small advantages (better piece placement, better pawn structure, etc.) until they convert to a decisive advantage. Piece activity is the most important of these small advantages.`,
    },
    {
      title: "Knight Outposts",
      type: "position",
      fen: "r1bq1rk1/ppp2ppp/2np1n2/4p3/2BPP3/2N2N2/PPP2PPP/R1BQ1RK1 b - - 0 1",
      content: `A knight outpost is a square where a knight cannot be attacked by enemy pawns and controls key squares. The ideal knight outpost is:
1. Protected by a friendly pawn
2. Cannot be attacked by enemy pawns (they've advanced past or aren't on adjacent files)
3. Controls central squares or weak squares in the enemy position
4. Close to the enemy king (for attacking outposts) or blockading a passed pawn (for defensive outposts)

The classic outpost: d5 for White (when Black has played ...e6 and ...c6), e5 for Black (when White has played e4 and c4). A knight on d5/e5 dominates the center.

Capablanca's rule: A knight on the 5th rank (for White) or 4th rank (for Black), supported by a pawn, is often worth a rook. While this is an exaggeration, it conveys the point: a well-posted knight is devastating.`,
    },
    {
      title: "Good Bishop vs Bad Bishop",
      type: "key-idea",
      content: `A "good" bishop is one whose pawns are on the opposite color, giving it open diagonals. A "bad" bishop is one whose pawns are on the same color, blocking its movement.

Key strategic ideas about bishops:
1. If you have a bad bishop, try to trade it for your opponent's good bishop
2. If your opponent has a bad bishop, keep your good bishop and dominate the light/dark squares
3. Place your pawns on the color opposite to your remaining bishop
4. In the endgame, a bad bishop can be a fatal weakness if the opponent's king can infiltrate on the weak color complex

The French Defense teaches this concept beautifully: Black's light-squared bishop is often "bad" (stuck behind e6), while White's light-squared bishop is "good." Black must either trade it or find compensating trumps.

The "Tall Pawn" concept: A bishop that controls a long open diagonal is like a "tall pawn" — it controls every square along the diagonal and restricts the enemy king. Bishops on open long diagonals are incredibly powerful in the endgame.`,
    },
    {
      title: "Rook Activity",
      type: "key-idea",
      content: `Rooks are the hardest pieces to activate because they start in the corners. Key principles for rook activity:

1. Open Files: Rooks belong on open files. A rook on an open file controls the entire file and can invade the 7th rank.

2. The 7th Rank: Rooks on the 7th rank attack the opponent's pawns from behind and restrict the enemy king. Two rooks on the 7th rank is often a decisive advantage.

3. Rook Lifts: Bringing a rook to the 3rd/4th rank via a lift (Ra3-h3) is a common attacking maneuver, especially in positions with opposite-side castling.

4. Rook Behind Passed Pawns: In the endgame, rooks belong behind passed pawns — both your own (to support the advance) and the opponent's (to blockade).

5. The Tarrasch Rule: "Rooks belong behind passed pawns." This is one of the most important endgame principles. A rook behind its own passed pawn pushes it forward; a rook behind the enemy passed pawn holds it back.`,
    },
  ],
};
