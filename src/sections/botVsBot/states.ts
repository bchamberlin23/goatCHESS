import { DEFAULT_ENGINE } from "@/constants";
import { EngineSelection } from "@/lib/engine/selection";
import type { TournamentState } from "./tournament";
import { Color } from "@/types/enums";
import { CurrentPosition, PositionEval } from "@/types/eval";
import { Chess } from "chess.js";
import { atom } from "jotai";

export const botGameAtom = atom(new Chess());
export const botGameDataAtom = atom<CurrentPosition>({});
export const botViewMoveIndexAtom = atom<number | null>(null);
export const botBoardFlippedAtom = atom(false);
export const botEvalAtom = atom<PositionEval | null>(null);

export const whiteEngineSelectionAtom = atom<EngineSelection>({
  kind: "browser",
  name: DEFAULT_ENGINE,
});
export const blackEngineSelectionAtom = atom<EngineSelection>({
  kind: "browser",
  name: DEFAULT_ENGINE,
});

export const whiteEngineEloAtom = atom(1500);
export const blackEngineEloAtom = atom(1500);

export const botMoveDelayAtom = atom(500);
export const botIsRunningAtom = atom(false);
export const botIsPausedAtom = atom(false);

export const botOrientationAtom = atom<Color>(Color.White);

export const botTournamentAtom = atom<TournamentState | null>(null);
export const botTournamentSizeAtom = atom(4);
export const botTournamentGamesPerMatchAtom = atom(1);
export const botTournamentMoveLimitAtom = atom(240);
