import { InsightsReport } from "@/types/insights";
import { LoadedGame } from "@/types/game";
import { atom } from "jotai";

export const insightsReportAtom = atom<InsightsReport | null>(null);
export const insightsProgressAtom = atom(0);
export const insightsCurrentGameIndexAtom = atom(0);
export const insightsTotalGamesAtom = atom(0);
export const insightsCurrentGameAtom = atom<LoadedGame | null>(null);
export const insightsIsAnalyzingAtom = atom(false);
export const insightsErrorAtom = atom<string | null>(null);
export const insightsStartTimeAtom = atom<number>(0);
