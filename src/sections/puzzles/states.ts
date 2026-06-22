import { Chess } from "chess.js";
import { atom } from "jotai";
import { puzzles } from "./puzzleData";
import { CurrentPosition } from "@/types/eval";

export const puzzleGameAtom = atom(new Chess(puzzles[0].fen));
export const puzzleCurrentPositionAtom = atom<CurrentPosition>({});
