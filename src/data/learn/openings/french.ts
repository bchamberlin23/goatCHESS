import { LearnTopic } from "../types";

export const frenchDefense: LearnTopic = {
  slug: "french-defense",
  title: "The French Defense",
  category: "openings",
  description:
    "A sturdy and resilient reply to 1.e4. The French (1.e4 e6) builds a solid pawn chain and counterattacks the center with ...c5 and ...f6. Walk through the main variations and learn the strategic ideas.",
  difficulty: "intermediate",
  estimatedMinutes: 20,
  icon: "mdi:baguette",
  tags: ["1.e4", "e6", "solid", "counter-attack", "pawn-chain"],
  sections: [
    {
      title: "Introduction",
      type: "text",
      content: `The French Defense (1.e4 e6 2.d4 d5) is one of Black's sturdiest replies to 1.e4. By establishing a solid pawn chain (e6-d5), Black concedes space in return for a resilient position that is difficult for White to crack.

The French has been a favorite of many world champions including Botvinnik, Petrosian, and most recently, Ding Liren. The characteristic struggle is between White's space advantage and Black's counterattacking potential.

The three main variations are:
- The Winawer (3.Nc3 Bb4) — the sharpest and most theoretical
- The Classical (3.Nc3 Nf6) — the steadiest approach
- The Tarrasch (3.Nd2) — solid and avoiding the Winawer's complications

After 3.exd5 (the Exchange French), the position is simplified and often leads to a slow strategic battle.`,
    },
    {
      title: "Step-by-Step: The Winawer Variation",
      type: "moves",
      interactionMode: "guided",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: [
        "e4",
        "e6",
        "d4",
        "d5",
        "Nc3",
        "Bb4",
        "e5",
        "c5",
        "a3",
        "Bxc3+",
        "bxc3",
        "Ne7",
        "Qg4",
        "cxd4",
        "cxd4",
        "Nf5",
        "Bd3",
        "h5",
        "Qh3",
        "Qc7",
        "Nf3",
        "Nbc6",
        "O-O",
        "Bd7",
        "Bxh7",
        "Nxh7",
        "Qxh7",
        "O-O-O",
        "Qxg7",
        "Rdg8",
        "Qxh7",
        "Nxd4",
        "Nxd4",
        "Qxg2",
      ],
      moveDescriptions: [
        "White opens with e4.",
        "THE FRENCH DEFENSE! Black plays e6, preparing to build a strong pawn chain. The bishop on f8 is blocked for now, but the position is solid.",
        "White plays d4, the central push. This is the key move — White challenges Black's central control.",
        "Black plays d5, fighting for the center. The e6-d5 pawn chain is the heart of the French Defense.",
        "White develops the queenside knight, defending the d4 pawn. The knight is heading for a strong square.",
        "THE WINAWER! Black plays Bb4, pinning the knight and threatening ...Bxc3+ (doubling White's pawns). This is the sharpest reply in the French.",
        "White plays e5, gaining space and kicking the c8 bishop. This is the main line — White is willing to accept a damaged pawn structure for a strong center.",
        "Black plays c5, challenging the d4 pawn. The c-pawn is a key attacker in the French — it targets the base of White's pawn chain.",
        "White plays a3, forcing the bishop to declare its intentions. This is the key move — White wants to double Black's pawns.",
        "Black trades bishops, doubling White's pawns. The c3 and c2 pawns are now a long-term weakness.",
        "White recaptures with the b-pawn, accepting the doubled pawns. The b-file is now open for the rook.",
        "Black develops the knight to e7, the standard French square. From e7, the knight is heading for f5 or g6.",
        "White plays the aggressive Qg4, attacking the g7 square and the e6 pawn. This is the main attacking idea for White.",
        "Black captures on d4, opening the position. The c-file is now open for the rook.",
        "White recaptures, restoring material. The position is now highly tactical.",
        "Black plays Nf5, the standard French maneuver. The knight is well-placed and threatens to take the e3 pawn.",
        "White plays Bd3, defending the e3 pawn and supporting the kingside attack. The bishop is well-placed.",
        "Black plays h5, attacking the queen. The h-pawn is a key defender of the kingside.",
        "White retreats the queen to h3, maintaining the attack. The queen is well-placed and still threatens g7.",
        "Black plays Qc7, centralizing the queen. The position is now balanced — both kings are exposed.",
        "White develops the knight to f3, supporting the central structure. The position is highly tactical.",
        "Black develops the queenside knight, completing the natural development.",
        "White castles, putting the king to safety. The position is now ready for the tactical phase.",
        "Black plays Bd7, connecting the rooks. The position is roughly equal.",
        "White plays the spectacular Bxh7! A Greek gift sacrifice — the bishop sacrifices itself to expose the Black king.",
        "Black captures with the knight, the best recapture. After ...Nxh7, the king is exposed.",
        "White plays Qxh7, the point of the sacrifice. The queen is now deadly on h7.",
        "Black castles queenside, putting the king on the opposite side of the board. The position is now a race.",
        "White plays Qxg7, attacking the rook. The queen is heading for mate on g8 or h8.",
        "Black plays Rg8, defending the g-pawn. The position is now highly tactical.",
        "White plays Qxh7, retreating. The position is roughly equal in the resulting endgame.",
        "Black plays the strong Nxd4!, winning material. The knight is untouchable.",
        "White recaptures with the knight, accepting the loss. The position is now roughly equal.",
        "Black plays Qxg2, attacking the knight. The position is winning for Black — White is down a piece.",
      ],
      content: `The Winawer Variation is the sharpest and most heavily analyzed line in the French Defense. The 4.e5 c5 5.a3 Bxc3+ 6.bxc3 line is the main battleground.

Key themes:
1. The c3-d4 Pawn Chain
White builds a strong center with the c3-d4 chain, but the c3 pawn is a long-term weakness.

2. Black's Counterplay
Black's plan is clear: attack c3 and d4 with every piece. The ...c5 break and the ...Qc7 maneuver are the main ideas.

3. The Greek Gift Sacrifice
The Bxh7+ sacrifice is a common tactical theme in the French. White's pieces are well-placed to exploit the h7 square.

4. The Endgame
The Winawer often leads to complicated endgames where Black's piece activity compensates for the doubled pawns.`,
    },
    {
      title: "Step-by-Step: The Classical French",
      type: "moves",
      interactionMode: "guided",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: [
        "e4",
        "e6",
        "d4",
        "d5",
        "Nc3",
        "Nf6",
        "Bg5",
        "Be7",
        "e5",
        "Nfd7",
        "Bxe7",
        "Qxe7",
        "f4",
        "O-O",
        "Nf3",
        "c5",
        "Bd3",
        "Nc6",
        "O-O",
        "f6",
        "exf6",
        "Nxf6",
        "dxc5",
        "Qxc5+",
        "Kh1",
        "Bd7",
        "Ne5",
        "Rac8",
        "Qg4",
        "Qxg4",
        "Nxg4",
        "Nxd4",
        "Nxh6+",
        "gxh6",
        "Bxh7+",
        "Kxh7",
        "Rxd4",
        "e5",
        "fxe5",
        "Rxf1+",
        "Rxf1",
      ],
      moveDescriptions: [
        "White opens with e4.",
        "The French Defense!",
        "White plays d4, the central push.",
        "Black plays d5, the standard response.",
        "White develops the queenside knight.",
        "THE CLASSICAL FRENCH! Black plays Nf6, the steadiest approach. The knight is well-placed and supports the central structure.",
        "White pins the knight, the main line. The pin is annoying for Black and prevents ...Nbd7 ideas.",
        "Black plays Be7, breaking the pin while keeping the bishop active.",
        "White pushes e5, gaining space and kicking the knight. This is the Steinitz Attack — White builds a massive center.",
        "Black retreats the knight to d7, the standard square. From d7, the knight is heading for c5 or f8.",
        "White trades bishops, simplifying the position. After Bxe7 Qxe7, Black has the bishop pair but a passive position.",
        "Black recaptures with the queen, maintaining the bishop pair. The position is now roughly equal.",
        "White plays f4, supporting the e5 pawn. The Steinitz Attack continues — White is building a huge center.",
        "Black castles, putting the king to safety.",
        "White develops the knight to f3, supporting the central structure.",
        "Black plays c5, challenging the d4 pawn. The c-pawn is the key counter-attacker.",
        "White plays Bd3, supporting the central structure. The bishop is well-placed.",
        "Black develops the queenside knight, completing the natural development.",
        "White castles, putting the king to safety.",
        "Black plays f6, the key counter-break. Black is willing to sacrifice a pawn to break open the position.",
        "White captures, opening the position. The e-file is now open for the rook.",
        "Black recaptures with the knight, centralizing. The position is now highly tactical.",
        "White trades on c5, opening the position. The c-file is now open for both rooks.",
        "Black recaptures with the queen, centralizing. The position is roughly equal.",
        "White plays Kh1, the wise choice before any checks. The king is now safe.",
        "Black plays Bd7, developing the bishop. The position is balanced.",
        "White plays the strong Ne5, centralizing the knight. The knight on e5 is a monster.",
        "Black plays Rac8, defending the queenside. The position is roughly equal.",
        "White plays Qg4, attacking the g7 square. The queen is well-placed.",
        "Black trades queens, simplifying the position. After Qxg4 Nxg4, the endgame is roughly equal.",
        "White recaptures with the knight, centralizing. The position is now an endgame.",
        "Black plays the strong Nxd4, winning a pawn. The knight is untouchable.",
        "White plays Nxh6+, a tactical resource. The knight captures the h6 pawn with check.",
        "Black recaptures with the g-pawn, opening the g-file. The position is now winning for White with the better structure.",
        "White plays Bxh7+, another check. The bishop sacrifices itself to expose the king.",
        "Black is forced to capture with the king. The h7 square is now a hole in the king position.",
        "White plays Rxd4, winning the knight. The position is now winning for White.",
        "Black plays e5, the best try to free the position.",
        "White captures, opening the f-file. The position is winning for White.",
        "Black plays Rxf1+, the best try. The rook captures with check.",
        "White recaptures with the rook, ending the checks. The endgame is now winning for White.",
      ],
      content: `The Classical French is the steadiest approach for Black. The 4.Bg5 Be7 5.e5 Nfd7 6.Bxe7 Qxe7 7.f4 line is the main Steinitz Attack, where White builds a massive center and tries to attack on the kingside.

Key themes:
1. The Space Advantage
White's e5-d4 pawn chain gives a huge space advantage. The plan: open the f-file, double rooks, and attack the Black king.

2. The Counter-Break
Black's f6 break is the key counter-attack. Without it, Black is slowly suffocated. With it, the position opens up and Black has tactical chances.

3. The Endgame
The Classical French often leads to endgames where Black's bishop pair compensates for the space disadvantage. Knowing when to trade pieces is essential.`,
    },
    {
      title: "Step-by-Step: The Tarrasch French",
      type: "moves",
      interactionMode: "guided",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: [
        "e4",
        "e6",
        "d4",
        "d5",
        "Nd2",
        "Nf6",
        "e5",
        "Nfd7",
        "c3",
        "c5",
        "f4",
        "Nc6",
        "Ndf3",
        "cxd4",
        "cxd4",
        "Be7",
        "Bd3",
        "O-O",
        "O-O",
        "f6",
        "exf6",
        "Nxf6",
        "Ne5",
        "Bd6",
        "Bxh7+",
        "Kxh7",
        "Ng5+",
        "Kg8",
        "Qf3",
        "Qe8",
        "Qh5",
        "Qf7",
        "Qxf7+",
        "Rxf7",
        "f5",
        "exf5",
        "Rxf5",
        "Bd7",
        "Nf3",
        "Re8",
        "Bd2",
        "Rxe4",
        "Bxh7+",
      ],
      moveDescriptions: [
        "White opens with e4.",
        "The French Defense!",
        "White plays d4, the central push.",
        "Black plays d5, the standard response.",
        "THE TARRASCH! White plays Nd2 instead of Nc3, avoiding the Winawer pin. This is a solid, patient approach.",
        "Black develops the kingside knight, the standard response.",
        "White pushes e5, gaining space. The knight on f6 is kicked.",
        "Black retreats the knight to d7, the standard square.",
        "White plays c3, supporting the d4 pawn. The position is solid.",
        "Black plays c5, challenging the d4 pawn. The c-pawn is the key counter-attacker.",
        "White plays f4, supporting the e5 pawn. The Steinitz setup continues.",
        "Black develops the queenside knight, completing the natural development.",
        "White develops the queenside knight to f3, supporting the central structure.",
        "Black trades on d4, opening the position. The c-file is now open.",
        "White recaptures, restoring material. The position is balanced.",
        "Black develops the bishop to e7, the natural square. The bishop is well-placed.",
        "White plays Bd3, supporting the central structure. The bishop is well-placed.",
        "Black castles, putting the king to safety.",
        "White castles. The position is now ready for the long middlegame.",
        "Black plays f6, the key counter-break. Black is willing to sacrifice a pawn to break open the position.",
        "White captures, opening the e-file. The position is now highly tactical.",
        "Black recaptures with the knight, centralizing. The position is roughly equal.",
        "White plays Ne5, centralizing the knight. The knight on e5 is a monster.",
        "Black plays Bd6, defending the f4 square. The position is now tactical.",
        "White plays Bxh7+!, a Greek gift sacrifice. The bishop sacrifices itself to expose the Black king.",
        "Black is forced to capture with the king. The h7 square is now a hole in the king position.",
        "White plays Ng5+, attacking the king and the f7 square. The pressure is mounting.",
        "Black plays Kg8, the only safe square. The king is forced to retreat into the center.",
        "White plays Qf3, attacking the f7 square. The position is now a kingside attack.",
        "Black plays Qe8, the best defense. The queen defends f7 and adds a defender.",
        "White plays Qh5, doubling on the h-file. The position is now a full attack.",
        "Black plays Qf7, defending f7. The position is roughly equal — Black is just barely surviving.",
        "White trades queens, simplifying the position. After Qxf7+ Rxf7, the position is roughly equal in the endgame.",
        "Black recaptures with the rook. The position is now an endgame.",
        "White plays f5, attacking the e6 pawn. The position is now winning for White with the better structure.",
        "Black captures, opening the position. The endgame is now sharp.",
        "White recaptures with the rook, centralizing. The position is winning for White.",
        "Black plays Bd7, defending the queenside. The position is roughly equal.",
        "White plays Nf3, defending the e4 square. The position is balanced.",
        "Black plays Re8, putting pressure on the e-file. The position is sharp.",
        "White plays Bd2, developing the bishop. The position is roughly equal.",
        "Black plays the strong Rxe4, winning a pawn. The rook is untouchable.",
        "White plays Bxh7+, the final check. The position is now a winning endgame for Black.",
      ],
      content: `The Tarrasch French is a solid alternative for White. The 3.Nd2 variation avoids the Winawer pin and leads to a quieter strategic battle.

Key themes:
1. Avoiding the Winawer
By playing 3.Nd2 instead of 3.Nc3, White avoids the ...Bb4 pin. The resulting positions are less sharp but still strategically complex.

2. The Isolated d4 Pawn
Many Tarrasch lines feature an isolated d4 pawn for White. This is a long-term weakness but also a source of piece activity.

3. The f6 Break
As in the Classical, the ...f6 break is Black's key counter-attacking move. Timing is critical.

The Tarrasch is a great choice for players who want a solid, positional French without memorizing 20 moves of Winawer theory.`,
    },
    {
      title: "Key Strategic Ideas",
      type: "key-idea",
      content: `The French Defense is rich with strategic themes that recur across all variations:

1. The e6-d5 Pawn Chain
Black's pawn chain is the heart of the French. It controls the center but restricts the light-squared bishop. The chain's strength is also its weakness — it can be attacked at the base (d5) or the head (e6).

2. The Light-Squared Bishop Problem
Black's biggest challenge is the light-squared bishop on c8. After ...e6 blocks its diagonal, this bishop often becomes a "bad" or "problem" piece. Black's solutions:
- Exchange it with ...b6, ...Ba6
- ...dxe4 at a moment when the bishop can develop to f5 or g4
- Keep it passive and accept a slightly worse position

3. The c5 Counter-Attack
The ...c5 break is Black's main counter-attacking move. It challenges the d4 pawn and opens the c-file. Knowing when to play this break is essential.

4. The e5-e4 Central Tension
The e4-e5 pawn is a key feature of many French lines. When White pushes e5, the position becomes closed and strategic. When the tension breaks, the position opens up.

5. The Endgame
The French often leads to endgames where Black's bishop pair compensates for the space disadvantage. Learning to play these endgames is a fundamental skill.

The French teaches a critical lesson: how to defend a slightly worse position with active piece play. This skill transfers to many other openings and is a hallmark of strong defensive players.`,
    },
  ],
};
