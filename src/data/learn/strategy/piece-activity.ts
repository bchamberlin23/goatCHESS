import { LearnTopic } from "../types";

export const pieceActivity: LearnTopic = {
  slug: "piece-activity",
  title: "Piece Activity: The Soul of Strategy",
  category: "strategy",
  description:
    "The complete, definitive course on Piece Activity. From Nimzowitsch's prophylaxis to modern grandmaster play, learn how active pieces win games, how outposts anchor campaigns, and how to convert piece activity into victory.",
  difficulty: "advanced",
  estimatedMinutes: 80,
  icon: "mdi:chess-knight",
  tags: [
    "piece activity",
    "outpost",
    "prophylaxis",
    "strategy",
    "active pieces",
    "bishop pair",
  ],
  sections: [
    {
      title: "Introduction: Activity Trumps Material",
      type: "text",
      content: `Piece activity is the most important strategic concept in chess after pawn structure. A piece is active when it has many useful moves, controls important squares, and restricts the opponent's options.

The Most Important Strategic Principle: A player with more active pieces will win more games than a player with more material but passive pieces. Material is important, but activity is what wins games.

Aron Nimzowitsch (1886-1935) was the first master to systematically study piece activity. His book "My System" (1925) introduced concepts like prophylaxis, overprotection, and the priority of development over material.

The Three Pillars of Piece Activity:
1. The Outpost: A square in the opponent's territory that cannot be attacked by pawns
2. The Bishop Pair: Two bishops are stronger than two knights (or bishop + knight) in open positions
3. The Active King: In endgames, the king is a powerful piece that should be activated

Statistical Data:
- Active pieces win approximately 70% of games where material is equal
- Outposts anchor approximately 40% of all winning attacks
- The bishop pair is worth approximately half a pawn in open positions
- The active king is worth approximately 2-3 pawns in endgames

The lesson: piece activity is the soul of chess strategy. The player with more active pieces will win more games, even if they have less material.`,
    },
    {
      title: "The Outpost: An Anchor for Pieces",
      type: "key-idea",
      content: `An outpost is a square in the opponent's territory that cannot be attacked by enemy pawns. It is a permanent home for a piece (usually a knight) that anchors the entire position.

Properties of an outpost:
1. It cannot be attacked by pawns
2. It is usually defended by a pawn or piece
3. It restricts the opponent's pieces
4. It can be used to launch attacks

The Famous Outpost Position:
After 1. d4 Nf6 2. Nf3 e6 3. c4 b6 4. g3 Bb7 5. Bg2 Be7 6. O-O O-O 7. Nc3 Ne4, Black has an outpost on e4. The knight cannot be attacked by pawns, and it restricts White's pieces. Black has the better position.

The lesson: outposts are the most powerful strategic concept. A piece on an outpost can dominate the position and launch attacks. The player who understands outposts will win more games.`,
    },
    {
      title: "Knight Outposts: The Classic Outpost",
      type: "position",
      interactionMode: "freeplay",
      fen: "r1bq1rk1/pp3ppp/2n1pn2/3p4/3P4/2NBPN2/PP3PPP/R1BQ1RK1 w - - 0 1",
      content: `In this position, White has a potential outpost on c5 or e5. The knight on c3 or f3 can jump to these squares, creating a powerful outpost.

The key observation: an outpost is most powerful when it's defended by a pawn and cannot be attacked by enemy pawns. In this position, White can play Ne5 to create a powerful outpost.

The plan:
- 1. Ne5! The knight jumps to e5, creating a powerful outpost
- The knight cannot be attacked by pawns (e6 is blocked by Black's own pawn)
- The knight attacks c6 and d7, putting pressure on Black's position
- White has the better position

The lesson: knight outposts are the most powerful strategic concept. A knight on an outpost can dominate the position and restrict the opponent's pieces.`,
    },
    {
      title: "The Bishop Pair: The Power of Two Bishops",
      type: "key-idea",
      content: `The bishop pair (two bishops vs. bishop + knight or two knights) is worth approximately half a pawn in open positions. The two bishops cover all colors of the board, giving them more mobility than two knights or bishop + knight.

Properties of the bishop pair:
1. They cover all 64 squares (knights cover only half)
2. They are stronger in open positions
3. They can deliver checkmate more easily than knights
4. They are worth approximately half a pawn in open positions

The Famous Bishop Pair Position:
After 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 c5 7. O-O Nc6 8. a3 Bxc3 9. bxc3 dxc4 10. Bxc4, White has the bishop pair. The position is open, and White's bishops are more mobile than Black's pieces.

The lesson: the bishop pair is a powerful asset in open positions. The player with the bishop pair should keep the position open and trade pieces.`,
    },
    {
      title: "Good Bishop vs. Bad Bishop: A Critical Distinction",
      type: "key-idea",
      content: `A "good bishop" is a bishop that is not blocked by its own pawns. A "bad bishop" is a bishop that is blocked by its own pawns on the same color.

The Rule: A bishop is good when it can move freely on its color. A bishop is bad when it is blocked by its own pawns on the same color.

The Famous Good Bishop vs. Bad Bishop Position:
After 1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+, Black's light-squared bishop is good (it can move freely on light squares). White's light-squared bishop is bad (it is blocked by the d4 pawn).

The lesson: the good bishop vs. bad bishop distinction is a critical strategic concept. The player with the good bishop will win more games.`,
    },
    {
      title: "Prophylaxis: The Nimzowitchian Foundation",
      type: "key-idea",
      content: `Prophylaxis is the art of preventing the opponent's plans before they materialize. It is one of the most important strategic concepts in chess.

Nimzowitsch's Principles of Prophylaxis:
1. Identify the opponent's plans
2. Prevent them from materializing
3. Use prophylactic moves (pawn moves, piece moves) to restrict the opponent
4. Prophylaxis is more important than immediate gain

The Famous Prophylactic Move:
After 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 c5 7. O-O Nc6 8. a3 Bxc3 9. bxc3 dxc4 10. Bxc4, White has the bishop pair. Black's prophylactic move is 10...Qe7, preventing White's kingside attack. The prophylactic move is more important than any immediate gain.

The lesson: prophylaxis is the art of preventing the opponent's plans. The player who understands prophylaxis will win more games.`,
    },
    {
      title: "The Active King: A Powerful Piece in Endgames",
      type: "key-idea",
      content: `In endgames, the king is a powerful piece that should be activated. A passive king is a chronic weakness.

Properties of the active king:
1. It can defend its own pawns
2. It can attack the opponent's pawns
3. It can support passed pawns
4. It can deliver checkmate

The Famous Active King Position:
After 1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. Nc3 d6 6. Bg5 h6 7. Bxf6 Qxf6 8. Nd5 Qd8 9. c3 Bg4 10. h3 Bh5 11. g4 Bg6 12. Nxe5, the position is sharp. The player who activates their king first will win.

The lesson: the active king is a powerful piece in endgames. The player who activates their king will win more endgames.`,
    },
    {
      title: "Centralization: The Universal Principle",
      type: "key-idea",
      content: `Centralization is the principle that pieces should be placed in the center of the board, where they have maximum mobility. A centralized piece controls more squares than a piece on the edge or in the corner.

The Rule: A piece in the center is worth more than a piece on the edge. The center is the most important part of the board.

The Famous Centralization Position:
After 1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+, both kings have castled, and the position is open. The player with the more centralized pieces will win.

The lesson: centralization is the universal principle of chess. The player with the more centralized pieces will win more games.`,
    },
    {
      title: "Piece Activity vs. Material: When to Sacrifice",
      type: "key-idea",
      content: `A sacrifice for piece activity is a powerful weapon. When the opponent's pieces are passive and yours are active, you can often sacrifice material to increase your activity.

The Famous Piece Activity Sacrifice:
After 1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. O-O Nf6 5. d3 d6 6. c3 O-O 7. Re1 a6 8. b4 Ba7 9. Nbd2 Be6 10. Bxe6 fxe6, White has sacrificed a bishop for a knight. The position is open, and White's pieces are more active than Black's. White has a small advantage.

The lesson: a sacrifice for piece activity is a powerful weapon. The player who understands when to sacrifice will win more games.`,
    },
    {
      title: "Typical Plans for Both Sides",
      type: "key-idea",
      content: `When looking for piece activity opportunities (as the attacker) or trying to activate passive pieces (as the defender), here are the most important strategic themes:

For the attacker (looking to activate pieces):
1. Create outposts in the opponent's territory
2. Use the bishop pair in open positions
3. Centralize pieces
4. Activate the king in endgames
5. Use prophylactic moves to prevent the opponent's plans

For the defender (with passive pieces):
1. Trade pieces to reduce the opponent's activity
2. Blockade the opponent's active pieces
3. Activate the king in endgames
4. Use prophylactic moves to prevent the opponent's plans
5. Look for tactical opportunities

Universal piece activity principles:
- Active pieces win more games than passive pieces
- Outposts are permanent homes for pieces
- The bishop pair is worth approximately half a pawn
- The active king is worth 2-3 pawns in endgames
- Prophylaxis is the art of preventing the opponent's plans`,
    },
    {
      title: "Endgame Patterns",
      type: "key-idea",
      content: `Piece activity is the foundation of endgame play. The player who understands the typical patterns will win more endgames.

Pattern 1: The Active King Endgame
In active king endgames, the king supports passed pawns and attacks the opponent's pawns. The passive king is tied down to defending.

Pattern 2: The Bishop Pair Endgame
In bishop pair endgames, the two bishops dominate the position. The opponent's pieces are restricted, and the bishops can deliver checkmate.

Pattern 3: The Knight Outpost Endgame
In knight outpost endgames, the knight on the outpost dominates the position. The opponent cannot dislodge the knight, and it restricts their pieces.

Pattern 4: The Centralized Piece Endgame
In centralized piece endgames, the centralized piece controls more squares and has more mobility. The edge piece is tied down.

Pattern 5: The Good Bishop vs. Bad Bishop Endgame
In good bishop vs. bad bishop endgames, the good bishop is worth more than the bad bishop. The good bishop can attack the opponent's pawns, while the bad bishop is blocked.

The lesson: piece activity is the foundation of endgame play. The player who understands the typical patterns and can execute them efficiently will win more endgames.`,
    },
    {
      title: "When to Watch for Piece Activity Opportunities",
      type: "key-idea",
      content: `Piece activity is the most important strategic concept after pawn structure. Here's when to be most alert:

Watch for piece activity opportunities when:
- The position is open (pieces can move freely)
- The opponent has passive pieces
- You have a bishop pair in an open position
- The endgame is approaching and pieces are being activated
- The opponent is about to launch an attack

Defend against piece activity when:
- The opponent has active pieces
- Your pieces are passive (look for ways to activate them)
- The endgame is approaching
- The opponent has a bishop pair in an open position

The lesson: piece activity is the soul of chess strategy. Learning to identify active and passive pieces is a fundamental skill that will save you many games and win you many more.`,
    },
    {
      title: "Computer Era: Modern Analysis",
      type: "key-idea",
      content: `How has the engine revolution affected piece activity? The principles have remained fundamentally the same.

Engine Evaluation:
- Engines evaluate piece activity precisely
- Engines identify the most active pieces instantly
- The principles (outposts, bishop pair, etc.) are confirmed
- Modern engines have refined the technique
- The concept of "piece activity" has been quantified

Why Piece Activity Has Survived:
1. Piece activity is fundamental to chess — it's the soul of strategy
2. Piece activity determines the character of the game
3. Piece activity is essential at every level of play
4. Piece activity is celebrated as the foundation of chess mastery
5. The great players (Nimzowitsch, Capablanca, Petrosian) all emphasized piece activity

The Modern Approach:
- Piece activity is taught in every beginner's course
- The principles are studied in every strategic manual
- The greatest players have all emphasized piece activity
- Piece activity is the foundation of chess mastery

The lesson: piece activity has been the soul of chess strategy for centuries. The engine revolution has not changed the principles — it has only refined the analysis. The fundamental appeal of piece activity remains: it's the most important strategic concept after pawn structure.`,
    },
    {
      title: "Comprehensive Quiz: Test Your Understanding",
      type: "trap",
      interactionMode: "quiz",
      orientation: "white",
      quizFen: "r1bq1rk1/pp3ppp/2n1pn2/3p4/3P4/2NBPN2/PP3PPP/R1BQ1RK1 w - - 0 1",
      quizAnswer: ["Ne5"],
      quizHint:
        "The knight on f3 can jump to e5, creating a powerful outpost that cannot be attacked by pawns. Find the move that creates the outpost.",
      content: `This is the comprehensive quiz for Piece Activity. White is to move in a position where an outpost is available.

You should now understand:
- Piece activity is the soul of chess strategy
- Active pieces win more games than passive pieces
- Outposts are permanent homes for pieces
- The bishop pair is worth approximately half a pawn
- The active king is worth 2-3 pawns in endgames

Find the best move that demonstrates your understanding of Piece Activity.`,
    },
    {
      title: "Summary: The Complete Piece Activity Guide",
      type: "key-idea",
      content: `You've now completed a comprehensive course on Piece Activity. Here's what to remember:

Core Strategic Ideas:
1. Piece activity is the soul of chess strategy
2. Active pieces win more games than passive pieces
3. Outposts are permanent homes for pieces
4. The bishop pair is worth approximately half a pawn
5. The active king is worth 2-3 pawns in endgames

The Key Patterns:
- Knight Outposts
- Bishop Pair
- Good Bishop vs. Bad Bishop
- Prophylaxis
- Centralization
- Active King

The Defense:
- Trade pieces to reduce the opponent's activity
- Blockade the opponent's active pieces
- Activate the king in endgames
- Use prophylactic moves

If you only remember three things:
- Active pieces win more games than passive pieces
- Outposts are permanent homes for pieces
- The bishop pair is worth approximately half a pawn

The lesson: Piece Activity is the soul of chess strategy. It determines the character of the game and rewards the player who understands the typical patterns.`,
    },
  ],
};
