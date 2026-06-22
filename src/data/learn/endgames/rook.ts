import { LearnTopic } from "../types";

export const rookEndgames: LearnTopic = {
  slug: "rook-endgames",
  title: "Rook Endgames",
  category: "endgames",
  description:
    "Rook endings are the most common in chess. Master the Lucena and Philidor positions, rook activity principles, and handling rook+pawn vs rook.",
  difficulty: "intermediate",
  estimatedMinutes: 15,
  icon: "mdi:chess-rook",
  tags: ["rook", "lucena", "philidor", "bridge", "cut-off"],
  sections: [
    {
      title: "Why Rook Endgames Matter",
      type: "text",
      content: `Rook endgames are the most common type of endgame in chess. About 40-50% of all games reach a rook endgame at some point. Understanding the key positions (Lucena, Philidor, Vancura) is essential for practical play. The basic principles — the rook behind the passed pawn, cutting off the king, the bridge maneuver — determine countless games at every level.`,
    },
    {
      title: "The Lucena Position (Winning)",
      type: "position",
      fen: "4K3/4P3/8/8/8/8/4k3/7r w - - 0 1",
      content: `The Lucena Position is the most important winning method in rook endgames. The stronger side has king in front of the pawn (on the promotion square), the pawn on the 7th rank, and the defending rook is cutting off the king. The winning method is called "building a bridge":

1. Move the rook to the 4th rank (Rook to e4 or f4)
2. The king steps out from in front of the pawn
3. The defending rook checks
4. The stronger king approaches the checking rook using the bridge rook as shelter
5. Once the king reaches the 5th rank near the rook, the checks stop
6. The pawn queens

Key requirement: The defending king must be cut off by at least two files. If the defending king is too close (only one file away), the position may be drawn because the king can assist in the defense.

The Lucena is the bread and butter of rook endgame technique. Every serious player must know how to win this position — it comes up constantly in practice.`,
    },
    {
      title: "The Philidor Position (Drawing)",
      type: "position",
      fen: "4k3/4r3/8/8/8/8/4P3/4K3 w - - 0 1",
      content: `The Philidor Position is the standard drawing method when the defender's rook is on the 6th rank (3rd rank for Black/White respectively) and the attacker's king cannot advance because the rook cuts it off.

The defending method (Philidor's 6th-rank defense):
1. Keep the rook on the 6th rank, preventing the enemy king from advancing
2. When the pawn advances to the 6th rank (making the 6th-rank defense impossible), drop the rook back to the 1st/8th rank
3. Give checks from behind — the king cannot escape the checks
4. The attacking king has no shelter — without the Lucena bridge, the checks are perpetual

Key distinction: Philidor works when the defensive rook is on the 6th rank waiting. Once the pawn reaches the 6th rank, the rook must immediately go behind to check. The moment of transition is critical — mistiming it loses.

The Vancura Position: A different drawing method when the pawn is a rook's pawn. The defending rook checks from the side, and the defending king stays in the corner. The attacking king cannot escape the side checks.`,
    },
    {
      title: "Rook Endgame Principles",
      type: "key-idea",
      content: `1. Rook Behind the Passed Pawn: Tarrasch's rule — rooks belong behind passed pawns. Behind your own to push it, behind the enemy's to stop it. A rook in front of its own passed pawn is passive.

2. Active Rook vs Passive Rook: The difference often decides the game. An active rook checks, attacks pawns, and cuts off the king. A passive rook defends and waits. In rook endings, activity is everything.

3. King Activity: In the endgame, the king becomes a fighting piece. A centralized king can support pawn advances, attack weak pawns, and assist the rook. The side with a more active king usually wins.

4. Cutting Off the King: A rook can cut off the enemy king along a file or rank. This is often more important than immediate material gain. A cut-off king cannot participate in the defense or counterattack.

5. Pawn Weaknesses: Every pawn weakness is a potential target. In rook endings, multiple weaknesses are fatal because the rook can switch between them faster than the king can defend.

Golden rule: In rook endings, do not rush. Patient maneuvering is rewarded. Many rook endings are drawn with best play, but in practice, the more active side often wins because the defense is harder than the attack.`,
    },
  ],
};
