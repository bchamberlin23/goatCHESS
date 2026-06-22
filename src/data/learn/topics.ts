import { LearnTopic } from "./types";
import { polishOpening } from "./openings/polish";
import { ruyLopez } from "./openings/ruy-lopez";
import { sicilianDefense } from "./openings/sicilian";
import { italianGame } from "./openings/italian";
import { queensGambit } from "./openings/queens-gambit";
import { frenchDefense } from "./openings/french";
import { caroKann } from "./openings/caro-kann";
import { englishOpening } from "./openings/english";
import { kingsIndian } from "./openings/kings-indian";
import { scandinavianOpening } from "./openings/scandinavian";
import { backRankMate } from "./mates/back-rank";
import { smotheredMate } from "./mates/smothered";
import { arabianMate } from "./mates/arabian";
import { bodensMate } from "./mates/bodens";
import { anastasiasMate } from "./mates/anastasias";
import { scholarsMate } from "./mates/scholars";
import { fork } from "./tactics/fork";
import { pin } from "./tactics/pin";
import { skewer } from "./tactics/skewer";
import { discoveredAttack } from "./tactics/discovered-attack";
import { doubleCheck } from "./tactics/double-check";
import { deflectionDecoy } from "./tactics/deflection-decoy";
import { pawnStructure } from "./strategy/pawn-structure";
import { pieceActivity } from "./strategy/piece-activity";
import { spaceAdvantage } from "./strategy/space-advantage";
import { openFiles } from "./strategy/open-files";
import { kingPawn } from "./endgames/king-pawn";
import { rookEndgames } from "./endgames/rook";
import { opposition } from "./endgames/opposition";
import { queenPawn } from "./endgames/queen-pawn";

export const allTopics: LearnTopic[] = [
  // Openings
  polishOpening,
  ruyLopez,
  sicilianDefense,
  italianGame,
  queensGambit,
  frenchDefense,
  caroKann,
  englishOpening,
  kingsIndian,
  scandinavianOpening,

  // Mates
  backRankMate,
  smotheredMate,
  arabianMate,
  bodensMate,
  anastasiasMate,
  scholarsMate,

  // Tactics
  fork,
  pin,
  skewer,
  discoveredAttack,
  doubleCheck,
  deflectionDecoy,

  // Strategy
  pawnStructure,
  pieceActivity,
  spaceAdvantage,
  openFiles,

  // Endgames
  kingPawn,
  rookEndgames,
  opposition,
  queenPawn,
];

export function getTopicsByCategory(category: string): LearnTopic[] {
  return allTopics.filter((t) => t.category === category);
}

export function getTopicBySlug(slug: string): LearnTopic | undefined {
  return allTopics.find((t) => t.slug === slug);
}
