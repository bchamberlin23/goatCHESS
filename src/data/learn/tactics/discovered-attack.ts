import { LearnTopic } from "../types";

export const discoveredAttack: LearnTopic = {
  slug: "discovered-attack",
  title: "Discovered Attack & Double Check",
  category: "tactics",
  description:
    "Moving one piece to reveal an attack by another behind it. Add check to both and you get the devastating double check.",
  difficulty: "intermediate",
  estimatedMinutes: 8,
  icon: "mdi:arrow-decision",
  tags: ["discovered", "double check", "revealed attack", "windmill"],
  sections: [
    {
      title: "What Is a Discovered Attack?",
      type: "text",
      content: `A discovered attack occurs when moving one piece reveals that a piece behind it is now attacking an enemy piece. The moving piece can also create its own threat (a discovered attack with tempo) or give check (discovered check). When both the moving piece and the revealed piece give check simultaneously, it's called a double check.

The key advantage of a discovered attack: you get TWO threats for the price of one move. The moved piece can threaten something while simultaneously uncovering an attack from the piece behind it. The opponent can only respond to one threat.`,
    },
    {
      title: "The Windmill",
      type: "position",
      fen: "4r1k1/3r1ppp/8/8/8/1B6/5PPP/4R1K1 w - - 0 1",
      content: `The windmill is the ultimate form of discovered attack. It's a repeating pattern where a piece gives discovered check, captures material, returns to give another discovered check, and captures more material — like a windmill turning.

The classic windmill setup: A bishop or rook is positioned behind a knight or rook that can give check. The front piece gives check, and while the opponent responds to the check, the back piece captures material. Then the front piece returns to give check again, the opponent responds, and the back piece captures more.

In this position: The rook on e1 and bishop on b3 form a windmill battery. Re8+! forces Kf7, and then White can capture on d7, return to e8 with check, capture on e8, and continue the cycle — winning massive material.`,
    },
    {
      title: "Double Check",
      type: "key-idea",
      content: `Double check is the most forcing move in chess. Both the moved piece and the revealed piece check the king simultaneously. The only legal response to a double check is to move the king — blocking or capturing is impossible because you can only do one move.

Key properties of double check:
1. The opponent MUST move the king (cannot block or capture)
2. Even if the checking pieces are both hanging, the opponent cannot capture them
3. Double check often leads to forced mate sequences
4. The king's flight squares are reduced by the checking pieces

Common double check patterns:
- Moving a knight to give check while discovering a bishop check
- Moving a bishop to give check while discovering a rook check
- The queen as both revealed and revealing piece (rare but deadly)

The most famous double check in history: In Anderssen's "Evergreen Game" (1852), a double check from the knight and bishop forced mate. Double checks are rare but devastating — when they happen, they're usually the prelude to mate.`,
    },
  ],
};
