import { DEFAULT_ENGINE } from "@/constants";
import { EngineSelection } from "@/lib/engine/selection";
import { Color } from "@/types/enums";
import { CurrentPosition } from "@/types/eval";
import { Chess } from "chess.js";
import { atom } from "jotai";

export const gameAtom = atom(new Chess());
export const gameDataAtom = atom<CurrentPosition>({});
export const playerColorAtom = atom<Color>(Color.White);
export const enginePlaySelectionAtom = atom<EngineSelection>({
  kind: "browser",
  name: DEFAULT_ENGINE,
});
export const engineEloAtom = atom(1500);
export const isGameInProgressAtom = atom(false);
export const playViewMoveIndexAtom = atom<number | null>(null);
export const gameStartTimeAtom = atom<number | null>(null);
export const playBoardFlippedAtom = atom(false);

// Pre-move: store a queued move while waiting for engine response
export interface PreMove {
  from: string;
  to: string;
  promotion?: string;
}
export const preMoveAtom = atom<PreMove | null>(null);
