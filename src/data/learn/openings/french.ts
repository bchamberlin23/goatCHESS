import { LearnTopic } from "../types";

export const frenchDefense: LearnTopic = {
  slug: "french-defense",
  title: "The French Defense",
  category: "openings",
  description:
    "A sturdy and resilient reply to 1.e4. The French (1.e4 e6) builds a solid pawn chain and counterattacks the center with ...c5 and ...f6.",
  difficulty: "intermediate",
  estimatedMinutes: 15,
  icon: "mdi:baguette",
  tags: ["1.e4", "e6", "solid", "counter-attack", "pawn-chain"],
  sections: [
    {
      title: "Introduction",
      type: "text",
      content: `The French Defense (1.e4 e6 2.d4 d5) is one of Black's sturdiest replies to 1.e4. By establishing a solid pawn chain (e6-d5), Black concedes space in return for a resilient position that is difficult for White to crack. The French has been a favorite of many world champions including Botvinnik, Petrosian, and most recently, Ding Liren. The characteristic struggle is between White's space advantage and Black's counterattacking potential.`,
    },
    {
      title: "Main Line: 3.Nc3 (or 3.Nd2)",
      type: "position",
      fen: "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq - 0 3",
      content: `After 2.d4 d5, White must decide how to defend the e4 pawn. The main moves are:

3.Nc3: The most popular. Black has three main choices — 3...Bb4 (the Winawer), 3...Nf6 (the Classical), and 3...dxe4 (the Rubinstein).

3.Nd2 (the Tarrasch): A solid alternative that avoids the Winawer's complications. Black usually plays 3...Nf6 or 3...c5.

3.e5 (the Advance): Closes the center immediately. Black responds 3...c5! challenging the base of White's pawn chain. This leads to sharp play where White attacks on the kingside and Black on the queenside.

3.exd5 (the Exchange): Simplifies to a symmetrical position. Often played by White players who want a draw, though Black can still play for a win.`,
    },
    {
      title: "The Winawer: 3.Nc3 Bb4",
      type: "position",
      fen: "rnbqk1nr/ppp2ppp/4p3/3p4/1b1PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4",
      content: `The Winawer Variation (3...Bb4) is the sharpest reply in the French. Black pins the knight, threatening to double White's pawns with ...Bxc3+. 

White's main response is 4.e5 (gaining space) when Black continues 4...c5 5.a3 Bxc3+ 6.bxc3. White has doubled pawns but a strong center and the bishop pair. Black has a clear plan: attack c3 and d4 with every piece. This variation is deeply theoretical and leads to some of the sharpest positions in chess.

Black's alternatives include 4...Ne7 (the Poisoned Pawn) and 4...b6 (the Armenian Variation). The Winawer is not for the faint-hearted — both sides must know concrete lines or risk being strategically lost by move 15.`,
    },
    {
      title: "The Classical: 3.Nc3 Nf6",
      type: "position",
      fen: "rnbqkb1r/ppp2ppp/4pn2/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4",
      content: `The Classical French (3...Nf6) is the steadiest approach. After 4.Bg5 Be7, White has two main plans: 5.e5 (the Steinitz) closing the center, or 5.Bxf6 (the Burn) trading a bishop for strategic reasons. Key variations include:

- 4.e5 Nfd7 5.f4 (the Steinitz Attack): White builds a huge center and attacks on the kingside.
- 4.Bg5 Be7 5.e5 Nfd7 6.Bxe7 Qxe7 (the Alekhine-Chatard Attack): White gets a small but persistent edge.

The Classical French teaches fundamental strategic ideas: how to play against a space disadvantage, the value of the ...c5 break, and the importance of piece exchanges.`,
    },
    {
      title: "The Light-Squared Bishop Problem",
      type: "key-idea",
      content: `Black's biggest challenge in the French is the light-squared bishop on c8. After ...e6 blocks its diagonal, this bishop often becomes a "bad" or "problem" piece.

Black's solutions:
1. Exchange it with ...b6, ...Ba6 — trading it for White's useful light-squared bishop
2. ...dxe4 at a moment when the bishop can develop to f5 or g4
3. Keep it passive and accept a slightly worse but solid position
4. In the Winawer, the bishop often stays on c8 for a long time while Black plays on the dark squares

The French teaches an essential chess lesson: how to manage a bad piece while building compensating trumps elsewhere.`,
    },
  ],
};
