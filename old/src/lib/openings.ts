import type { OpeningInfo } from "./types";

const FALLBACK_OPENINGS: OpeningInfo[] = [
  { eco: "A00", name: "King's Fianchetto Opening", moves: "g3" },
  { eco: "A01", name: "Larsen's Opening", moves: "b3" },
  { eco: "A04", name: "Zukertort Opening", moves: "Nf3" },
  { eco: "A10", name: "English Opening", moves: "c4" },
  { eco: "A40", name: "Queen's Pawn Game", moves: "d4" },
  { eco: "A80", name: "Dutch Defense", moves: "d4 f5" },
  { eco: "B00", name: "King's Pawn Opening", moves: "e4" },
  { eco: "B01", name: "Scandinavian Defense", moves: "e4 d5" },
  { eco: "B06", name: "Modern Defense", moves: "e4 g6" },
  { eco: "B07", name: "Pirc Defense", moves: "e4 d6" },
  { eco: "B10", name: "Caro-Kann Defense", moves: "e4 c6" },
  { eco: "B20", name: "Sicilian Defense", moves: "e4 c5" },
  { eco: "B22", name: "Sicilian, Alapin Variation", moves: "e4 c5 c3" },
  { eco: "B23", name: "Sicilian, Closed", moves: "e4 c5 Nc3" },
  { eco: "B27", name: "Sicilian, Hyperaccelerated Dragon", moves: "e4 c5 Nf3 g6" },
  { eco: "B30", name: "Sicilian, Rossolimo Variation", moves: "e4 c5 Nf3 Nc6 Bb5" },
  { eco: "B40", name: "Sicilian, Kan Variation", moves: "e4 c5 Nf3 e6" },
  { eco: "B50", name: "Sicilian, Delayed Alapin", moves: "e4 c5 Nf3 d6" },
  { eco: "B90", name: "Sicilian, Najdorf Variation", moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6" },
  { eco: "C00", name: "French Defense", moves: "e4 e6" },
  { eco: "C20", name: "King's Pawn Game", moves: "e4 e5" },
  { eco: "C30", name: "King's Gambit", moves: "e4 e5 f4" },
  { eco: "C40", name: "King's Knight Opening", moves: "e4 e5 Nf3" },
  { eco: "C42", name: "Petrov's Defense", moves: "e4 e5 Nf3 Nf6" },
  { eco: "C50", name: "Italian Game", moves: "e4 e5 Nf3 Nc6 Bc4" },
  { eco: "C60", name: "Ruy Lopez", moves: "e4 e5 Nf3 Nc6 Bb5" },
  { eco: "C65", name: "Ruy Lopez, Berlin Defense", moves: "e4 e5 Nf3 Nc6 Bb5 Nf6" },
  { eco: "C70", name: "Ruy Lopez, Morphy Defense", moves: "e4 e5 Nf3 Nc6 Bb5 a6" },
  { eco: "D00", name: "Queen's Pawn Game", moves: "d4 d5" },
  { eco: "D02", name: "London System", moves: "d4 d5 Nf3 Nf6 Bf4" },
  { eco: "D06", name: "Queen's Gambit", moves: "d4 d5 c4" },
  { eco: "D10", name: "Slav Defense", moves: "d4 d5 c4 c6" },
  { eco: "D20", name: "Queen's Gambit Accepted", moves: "d4 d5 c4 dxc4" },
  { eco: "D30", name: "Queen's Gambit Declined", moves: "d4 d5 c4 e6" },
  { eco: "D35", name: "QGD, Exchange Variation", moves: "d4 d5 c4 e6 Nc3 Nf6 cxd5 exd5" },
  { eco: "D40", name: "Semi-Tarrasch Defense", moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c5" },
  { eco: "D50", name: "QGD, 4...Be7", moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7" },
  { eco: "D60", name: "QGD, Orthodox Defense", moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7" },
  { eco: "D70", name: "Grunfeld Defense", moves: "d4 Nf6 c4 g6 Nc3 d5" },
  { eco: "D80", name: "Grunfeld Defense", moves: "d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5" },
  { eco: "E00", name: "Queen's Pawn Game", moves: "d4 Nf6" },
  { eco: "E10", name: "Queen's Pawn Game", moves: "d4 Nf6 c4 e6" },
  { eco: "E20", name: "Nimzo-Indian Defense", moves: "d4 Nf6 c4 e6 Nc3 Bb4" },
  { eco: "E60", name: "King's Indian Defense", moves: "d4 Nf6 c4 g6" },
  { eco: "E70", name: "King's Indian, Classical", moves: "d4 Nf6 c4 g6 Nc3 Bg7" },
  { eco: "E90", name: "King's Indian, Classical", moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6" },
];

let cachedOpenings: OpeningInfo[] | null = null;
let loadPromise: Promise<OpeningInfo[]> | null = null;

async function loadOpenings(): Promise<OpeningInfo[]> {
  if (cachedOpenings) return cachedOpenings;
  if (loadPromise) return loadPromise;

  loadPromise = fetch("/data/openings.json")
    .then((res) => (res.ok ? res.json() : FALLBACK_OPENINGS))
    .then((data: OpeningInfo[]) => {
      cachedOpenings = data.length > 0 ? data : FALLBACK_OPENINGS;
      return cachedOpenings;
    })
    .catch(() => {
      cachedOpenings = FALLBACK_OPENINGS;
      return cachedOpenings;
    });

  return loadPromise;
}

export async function ensureOpeningsLoaded(): Promise<void> {
  await loadOpenings();
}

function getOpeningsSync(): OpeningInfo[] {
  return cachedOpenings ?? FALLBACK_OPENINGS;
}

export function detectOpening(moveSans: string[]): OpeningInfo | null {
  const sequence = moveSans.join(" ");
  const openings = getOpeningsSync();
  let best: OpeningInfo | null = null;

  for (const opening of openings) {
    if (sequence.startsWith(opening.moves) && (!best || opening.moves.length > best.moves.length)) {
      best = opening;
    }
  }

  return best;
}

export function isBookMove(moveSans: string[]): boolean {
  const sequence = moveSans.join(" ");
  const openings = getOpeningsSync();
  return openings.some(
    (opening) => opening.moves === sequence || opening.moves.startsWith(sequence + " "),
  );
}

export interface OpeningContinuation {
  san: string;
  count: number;
}

export async function getOpeningContinuations(moveSans: string[]): Promise<OpeningContinuation[]> {
  const openings = await loadOpenings();
  const prefix = moveSans.join(" ");
  const nextMoveCounts = new Map<string, number>();

  for (const opening of openings) {
    let nextSan: string | null = null;

    if (!prefix) {
      nextSan = opening.moves.split(" ")[0] ?? null;
    } else if (opening.moves === prefix) {
      continue;
    } else if (opening.moves.startsWith(prefix + " ")) {
      nextSan = opening.moves.slice(prefix.length + 1).split(" ")[0] ?? null;
    }

    if (nextSan) {
      nextMoveCounts.set(nextSan, (nextMoveCounts.get(nextSan) ?? 0) + 1);
    }
  }

  return [...nextMoveCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([san, count]) => ({ san, count }));
}

if (typeof window !== "undefined") {
  loadOpenings();
}
