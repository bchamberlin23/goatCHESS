import { LearnTopic } from "../types";

export const englishOpening: LearnTopic = {
  slug: "english-opening",
  title: "The English Opening",
  category: "openings",
  description:
    "A flexible flank opening starting with 1.c4. The English can transpose to d4 openings or remain independent, offering White a wide range of strategic plans. Walk through the main lines and discover why Carlsen, Botvinnik, and Karpov all played the English.",
  difficulty: "intermediate",
  estimatedMinutes: 20,
  icon: "mdi:castle",
  tags: ["1.c4", "flank", "flexible", "symmetrical", "transpositional"],
  sections: [
    {
      title: "Introduction",
      type: "text",
      content: `The English Opening (1.c4) is White's most popular alternative to 1.e4 and 1.d4. It controls the d5 square and fights for the center from the flank. The English is extremely flexible — it can transpose to Queen's Gambit positions, lead to a Reversed Sicilian (where White plays the Sicilian with an extra tempo), or remain in independent English territory.

The English has been a favorite of many world champions including Botvinnik, Karpov, and Carlsen. The extra tempo (compared to 1...c5 for Black) gives White a slight but persistent edge.

The main variations are:
- The Symmetrical English (1...c5) — Black mirrors, leading to rich strategic play
- The Reversed Sicilian (1...e5) — White plays a Sicilian with an extra tempo
- The Anglo-Indian (1...Nf6) — flexible setup that can transpose to many openings
- The Botvinnik System (with 2.Nc3 and g3) — a classical setup for White`,
    },
    {
      title: "Step-by-Step: The Symmetrical English",
      type: "position",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      content: `The Symmetrical English is the most popular reply to 1.c4. After 1.c4 c5 2.Nc3 Nc6 3.g3 g6 4.Bg2 Bg7, both sides have fianchettoed their kingside bishops.

The position is balanced and the game becomes a long, strategic battle. White's extra tempo gives a slight but persistent edge.

Key themes:
1. The Long Diagonal
White's bishop on g2 is the most active piece on the board. It eyes the queenside and supports the b1-h7 diagonal.

2. The d5 Square
The d5 square is the most contested central square. Whoever controls d5 (or prevents the other from using it) gains a huge advantage.

3. The b4 Push
The b4 advance is White's main queenside break. It challenges Black's queenside pawns and opens lines for the rook.`,
    },
    {
      title: "Step-by-Step: The Reversed Sicilian",
      type: "position",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      content: `The Reversed Sicilian (1.c4 e5) is Black's most direct reply to the English. By playing e5, Black essentially says: "I'll play the Sicilian with the white pieces."

The extra tempo gives White a slight but persistent edge. The Botvinnik System (with g3, Bg2, Nc3, Nf3) is the most ambitious setup for White.

Key themes:
1. The Reversed Roles
White is now the Sicilian player with the extra tempo. The strategic ideas are mirrored: Black has the central pawn, White has the flank attack.

2. The d5 Square
The d5 square is the most contested square. Whoever controls it gains a huge advantage.

3. The Botvinnik Setup
The g3, Bg2, Nc3, Nf3 setup is solid and flexible. It allows White to play on either wing depending on Black's setup.`,
    },
    {
      title: "Step-by-Step: The Anglo-Indian",
      type: "position",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      content: `The Anglo-Indian (1...Nf6) is the most flexible reply to the English. Black delays committing the center, keeping options open.

The key feature: after 1.c4 Nf6 2.Nc3 e6 3.Nf3 d5, the position can transpose to:
- A Queen's Gambit Declined (if White plays d4)
- A King's Indian Defense (if White plays g3)
- An independent English (if White plays g3, Bg2, d3)

The Anglo-Indian is a great choice for Black because it's flexible and hard for White to prepare against. Carlsen has used it many times at the top level.

Key themes:
1. Flexibility
By not committing to ...e5 or ...c5, Black keeps options open. The game can go in many directions depending on White's choices.

2. The d5 Challenge
Black's main plan is to challenge the center with ...d5. After the challenge, the game often transposes to familiar QGD structures.

3. The English Rewards Flexibility
The English rewards players who understand both flank and central pawn structures. It's a great choice for players who like to play both sides of the same position.`,
    },
    {
      title: "Key Strategic Ideas",
      type: "key-idea",
      content: `The English Opening is rich with strategic themes that recur across all variations:

1. The c4 Pawn Controls d5
The c4 pawn's main job is to control d5. This gives White a flexible center without committing the e-pawn or d-pawn. The pawn structure can be molded based on Black's response.

2. The Reversed Sicilian
After 1.c4 e5, White is playing a Sicilian with the extra tempo. The strategic ideas are mirrored: White has the central pawn, Black has the flank attack.

3. Transpositions
The English often transposes to d4 openings. Players of 1.c4 must be ready to play QGD, KID, or Slav structures with either color.

4. The Long Diagonal
The g2 bishop (or c1 bishop) often becomes the most powerful piece on the board. It's a long-range piece that controls key squares and supports pawn advances.

5. Flexible Center
Unlike 1.e4 or 1.d4, the English allows White to delay committing the central pawns. This makes the position harder to prepare against and gives White more options.

The English is a great choice for players who want a flexible, fighting position. It rewards strategic understanding over memorized theory, and it's been a top-level weapon for decades.`,
    },
  ],
};
