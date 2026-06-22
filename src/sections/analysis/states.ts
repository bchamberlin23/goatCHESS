import { DEFAULT_ENGINE } from "@/constants";
import { getRecommendedWorkersNb } from "@/lib/engine/worker";
import { EngineName, MoveClassification } from "@/types/enums";
import { CurrentPosition, GameEval, SavedEvals } from "@/types/eval";
import { Chess } from "chess.js";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const gameEvalAtom = atom<GameEval | undefined>(undefined);
export const gameAtom = atom(new Chess());
export const boardAtom = atom(new Chess());
export const currentPositionAtom = atom<CurrentPosition>({});

export const boardOrientationAtom = atom(true);
export const showBestMoveArrowAtom = atom(true);
export const showTopMovesArrowsAtom = atom(false);
export const showPlayerMoveIconAtom = atom(true);

export const engineNameAtom = atom<EngineName>(DEFAULT_ENGINE);
export const engineDepthAtom = atom(14);
export const engineMultiPvAtom = atom(3);
export const engineWorkersNbAtom = atomWithStorage(
  "engineWorkersNb",
  getRecommendedWorkersNb()
);
export const evaluationProgressAtom = atom(0);

export const savedEvalsAtom = atom<SavedEvals>({});
/* darkModeAtom has moved to @/states/global — re-export for compatibility */

// Global tab and review subpage selection state
export const tabAtom = atom(2);
export const selectedClassificationAtom = atom<MoveClassification | null>(null);
export const selectedSideAtom = atom<"all" | "white" | "black">("all");

export interface ActiveLiveGame {
  id: string;
  type: "lichess" | "chesscom";
  orientation: boolean;
}

export const activeLiveGameAtom = atom<ActiveLiveGame | null>(null);
