import { LearnTopic } from "../types";

export const ruyLopez: LearnTopic = {
  slug: "ruy-lopez",
  title: "The Ruy Lopez (Spanish)",
  category: "openings",
  description:
    "One of the oldest and most respected openings in chess, named after the 16th-century Spanish priest Ruy Lopez de Segura. Master its key ideas, the main variations, and the strategic plans for both sides through a step-by-step walkthrough.",
  difficulty: "intermediate",
  estimatedMinutes: 25,
  icon: "mdi:shield-cross",
  tags: ["1.e4", "e5", "Bb5", "Spanish", "classical"],
  sections: [
    {
      title: "Introduction",
      type: "text",
      content: `The Ruy Lopez begins with 1.e4 e5 2.Nf3 Nc6 3.Bb5 and is considered one of the best openings for White to fight for an advantage after 1.e4. It's played at all levels, from beginner to world championship matches. The key idea is the bishop on b5 puts pressure on the knight that defends e5 — after Black eventually plays ...a6 and ...b5, White gains space and time while Black's queenside pawns may become targets.

The opening was first analyzed in print in 1561 by the Spanish priest Ruy López de Segura, making it one of the oldest recorded openings still in regular use. The same basic idea — pinning the knight that defends e5 — is the foundation of the Italian Game (3.Bc4) as well, but the b5 square is deeper and more annoying for Black.`,
    },
    {
      title: "Step-by-Step: The Main Line Spanish",
      type: "moves",
      interactionMode: "guided",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: [
        "e4",
        "e5",
        "Nf3",
        "Nc6",
        "Bb5",
        "a6",
        "Ba4",
        "Nf6",
        "O-O",
        "Be7",
        "Re1",
        "b5",
        "Bb3",
        "d6",
        "c3",
        "O-O",
        "h3",
        "Nb8",
      ],
      moveDescriptions: [
        "White takes the center with the king's pawn. This is the most aggressive first move — it opens lines for the queen and bishop and stakes a claim to d5 and f5.",
        "Black mirrors with a central pawn. The double-king-pawn opening is the oldest and most classical structure in chess, and leads to open, tactical play.",
        "White develops the knight toward the center, attacking the e5 pawn. This is the standard attacking move — the knight reaches f3 where it controls d4, e5, and g5.",
        "Black defends the e5 pawn with a second piece. The knight on c6 also eyes the d4 square, beginning the battle for the center.",
        "The Ruy Lopez! The bishop attacks the knight that defends e5. This is the move that gives the opening its name. White is hinting that if the knight moves, e5 falls.",
        "The Morphy Defense — Black's most popular reply. The pawn kicks the bishop, forcing White to decide whether to retreat or capture. This is the starting point of nearly all modern Ruy Lopez theory.",
        "The bishop retreats to a4 where it remains active and still eyes the e5 square. Capturing the knight on c6 (4.Bxc6) is the Exchange Variation, leading to simpler play.",
        "Black develops the kingside knight, attacking the e4 pawn. This is the natural response — now Black has a piece defending e5 and a piece attacking e4. The position is tense.",
        "White castles kingside, putting the king to safety. Castling early is a fundamental opening principle and is especially important in the Ruy Lopez where the king will be safe behind the pawns.",
        "Black develops the bishop to e7, completing the natural setup. Notice that the bishop on e7 is somewhat passive — it's a key feature of the Ruy Lopez that White's bishop on b3 is the more active piece.",
        "White places the rook on the e-file, supporting the e4 pawn. This is the standard plan — the rook defends e4 and prepares to double on the e-file if Black ever plays ...d6.",
        "Black plays the second pawn kick, attacking the bishop on a4. This is the hallmark of the Closed Spanish — Black gains queenside space but the b5 pawn becomes a permanent feature of the position.",
        "The bishop retreats to b3 where it is well-placed. It still eyes the e5 square and now points at f7. This is the Closed Spanish bishop — a powerful long-term asset for White.",
        "Black plays the modest d6, supporting e5. This is the main line — the e5 pawn is now defended twice (by the d6 pawn and the f6 knight), so White cannot capture it for free.",
        "White prepares the d4 break. The c3 pawn supports a future d4 push, which is White's main plan to challenge Black's center. Notice the patience — White is building a strong structure before committing.",
        "Black castles kingside. Both kings are now safe and the position enters the middle game. This is the starting point of all the main Closed Spanish systems.",
        "A useful waiting move. White gains a tempo by threatening g4 (which would attack the f6 knight) and prepares to recapture with the g-pawn if Black plays ...Bg4.",
        "The knight retreats to b8 — this is the Breyer Variation, one of the most respected systems for Black. The knight is heading to d7, where it supports both e5 and the queenside.",
      ],
      content: `This is the starting position of the Closed Spanish, one of the most deeply studied positions in chess. Both sides have completed development and the battle is now about long-term plans.

Key features of this position:
1. White's bishop on b3 is the best piece on the board — it points at f7 and the e5 pawn
2. Black's d6-e5 pawn chain is solid but restricts the light-squared bishop on c8
3. White's d4 break is the main plan to crack open the position
4. The b5 pawn is a long-term target for White

In the next sections we'll explore the major variations from this starting point.`,
    },
    {
      title: "Step-by-Step: The Exchange Variation",
      type: "moves",
      interactionMode: "guided",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: [
        "e4",
        "e5",
        "Nf3",
        "Nc6",
        "Bb5",
        "a6",
        "Bxc6",
        "dxc6",
        "Nc3",
        "f6",
        "d3",
        "Bd6",
        "O-O",
        "Ne7",
        "Re1",
        "O-O",
        "Bd2",
        "c5",
        "d4",
        "exd4",
        "Nxd4",
      ],
      moveDescriptions: [
        "White takes the center.",
        "Black mirrors with e5.",
        "White develops with the standard knight attack on e5.",
        "Black defends the pawn.",
        "The Ruy Lopez bishop appears.",
        "Black plays the Morphy kick.",
        "The Exchange Variation! White removes Black's key defender of e5. After this, Black's d-pawn will be damaged, and White gets a structural target.",
        "Black recaptures, but now has doubled c-pawns. This is the price of the Exchange Variation — Black loses the ability to play ...c6 without creating a tripled pawn structure.",
        "White develops the queenside knight, defending e4 and preparing to recapture on d4 if Black plays ...exd4 later.",
        "A useful move supporting the e5 pawn. Black is building a solid structure, but the f6 pawn will weaken the light squares around the king.",
        "White plays the modest d3, supporting e4 and the bishop. This is the typical Exchange setup — White builds a small center and prepares to trade on e5.",
        "Black develops the bishop actively. From d6, the bishop is well-placed but the e5 pawn limits its activity. Black will likely play ...e5 to trade and relieve the cramp.",
        "White castles, putting the king to safety.",
        "The knight reroutes to e7, defending d5 and g6 squares. From e7 the knight can support an ...e5 push or jump to g6.",
        "White defends e4 with the rook. Note the symmetry of the rook placement with Black's plan.",
        "Black castles, completing development.",
        "White develops the bishop, perhaps to be redeployed via c1. The bishop is heading to a more active square.",
        "Black challenges the center with ...c5, preventing White from playing d4 easily. This is the Sicilian-style approach to the Exchange.",
        "White plays d4 anyway, opening the position. This is the key moment — if the center opens, White's pawn majority could become a powerful weapon.",
        "Black trades, accepting the position. This is the principled response — after the trade, both sides have a half-open file.",
        "White recaptures with the knight, which jumps into a powerful position. The knight on d4 is excellent — it eyes c6, e6, f5, and the c-file.",
      ],
      content: `The Exchange Variation leads to a slow, strategic game. After the dust settles, the key features are:

1. Black has doubled c-pawns but gains the bishop pair
2. White has a 4v3 kingside pawn majority (a slight endgame advantage if all other pieces come off)
3. The position is roughly equal but White has a tiny structural edge

Bobby Fischer used this variation to beat Boris Spassky in game 5 of their 1972 world championship match, with the simple plan: trade pieces, push the kingside pawns, and win the endgame. The lesson: simplicity is sometimes the strongest weapon.`,
    },
    {
      title: "Step-by-Step: The Marshall Attack",
      type: "moves",
      interactionMode: "guided",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      moves: [
        "e4",
        "e5",
        "Nf3",
        "Nc6",
        "Bb5",
        "a6",
        "Ba4",
        "Nf6",
        "O-O",
        "Be7",
        "Re1",
        "b5",
        "Bb3",
        "O-O",
        "c3",
        "d5",
        "exd5",
        "Nxd5",
        "Nxe5",
        "c6",
        "d4",
        "Bb7",
        "Nc4",
        "Nxe5",
        "dxe5",
        "Qxd1",
        "Rxd1",
        "Be6",
        "Nd6",
        "Bxd6",
        "exd6",
        "Rfd8",
        "Rxd6",
        "Rxd6",
        "Rxd6",
      ],
      moveDescriptions: [
        "White opens with the king's pawn.",
        "Black mirrors.",
        "Knight development toward the center.",
        "Knight defends e5.",
        "The Ruy Lopez bishop.",
        "The Morphy kick.",
        "Bishop retreats to a4, the main line.",
        "Black's knight develops, attacking e4.",
        "White castles.",
        "Black develops the bishop to the natural square.",
        "Rook to e1, defending e4.",
        "The second pawn kick to b5.",
        "Bishop to b3, the active Spanish square.",
        "Black castles — the starting position of the Marshall.",
        "White prepares the d4 break with c3.",
        "THE MARSHALL GAMBIT! Black offers a pawn for piece activity. This is one of the most heavily analyzed lines in all of chess.",
        "White accepts the pawn — by far the most common choice. Now White has an extra pawn but Black has tremendous piece activity.",
        "Black recaptures with the knight, hitting the e4 pawn.",
        "White's knight takes the e5 pawn. Now Black's compensation becomes clear — the open position and active pieces.",
        "Black plays the key move c6, preventing Nd5 ideas and preparing to recapture on e5 with the bishop.",
        "White pushes d4 anyway, fighting for the center. The position is sharp — every move counts.",
        "Black develops the bishop to b7, adding another attacker to the e5 knight.",
        "White retreats the knight to c4, where it remains active but slightly exposed.",
        "Black trades knights — the position begins to clarify.",
        "White recaptures with the d-pawn, opening the file.",
        "Black trades queens, simplifying into an endgame where Black's compensation is most evident.",
        "White recaptures with the rook — both rooks on the d-file, a critical feature of the Marshall endgame.",
        "Black plays Be6, preparing to bring the knight to d5.",
        "White plays the strong Nd6!, exploiting the bishop's awkward position.",
        "Black trades, eliminating White's active knight.",
        "White recaptures with the e-pawn, fixing the structure.",
        "Black's rook comes to d8, doubling on the file.",
        "White trades, taking the file.",
        "Black recaptures.",
        "White trades again — the endgame simplifies. The Marshall is famous for these complex endgames where Black has 'just enough' compensation for the pawn.",
      ],
      content: `The Marshall Attack is the most aggressive way for Black to meet the Closed Spanish. Frank Marshall unveiled it against Capablanca in 1918 and it has been a top-level weapon ever since.

Key points about the Marshall:
1. Black gives up a pawn for tremendous piece activity
2. The resulting position is complex — White must know deep theory to survive
3. Modern theory considers the Marshall roughly equal, but the line is so sharp that small errors by either side lose
4. World champions from Capablanca to Carlsen have played and analyzed this line

Many modern White players avoid the Marshall entirely by playing 8.h3 (the Anti-Marshall), preventing ...d5 in one go. This shows the practical impact of opening theory — even famous gambits can be sidestepped.`,
    },
    {
      title: "Key Strategic Ideas",
      type: "key-idea",
      content: `Now that you've seen the main lines, here are the strategic themes that recur throughout the Ruy Lopez:

1. The Light-Squared Bishop Dominance
White's bishop on b3 is the star of the show. It targets f7 and the e5 pawn, and it dominates any Black piece that lands on its diagonal. Keeping this bishop active is White's top priority.

2. The Queenside Pawn Targets
After ...a6 and ...b5, Black's queenside pawns are on light squares — the same color as White's bishop. This is a long-term weakness. White's plan: pile up on b5, attack it with a4, and use it as an outpost or capture it.

3. The d4 Break
White's key central lever is d4. The timing is crucial:
- Too early (move 4-5) and Black has time to react with ...d5 or ...exd4
- Too late and Black's position is too solid
- The right moment is usually when White has completed kingside development

4. Knight Maneuvers: Nd2-f1-g3
The b1 knight often takes a long route: b1-d2-f1-g3 (or e3). This brings the knight to the kingside where it can support attacks on the Black king. The Nd2-f1 maneuver is a hallmark of the Closed Spanish.

5. The Endgame Advantage
If pieces come off, White's pawn structure is often slightly better. The 4v3 kingside pawn majority (after the bishop comes to c1 and d4 trades) is a real long-term asset. This is why the Exchange Variation is so popular at the top level.`,
    },
  ],
};
