import { EngineName } from "@/types/enums";
import { Engine } from "@/lib/engine/engine";

/**
 * Identifies which engine to use. Either a built-in browser engine
 * (running in a Web Worker) or a local engine (running as a native
 * subprocess via the local engine bridge).
 */
export type EngineSelection =
  | { kind: "browser"; name: EngineName }
  | { kind: "local"; id: string };

export const engineSelectionKey = (selection: EngineSelection): string =>
  selection.kind === "browser"
    ? `browser:${selection.name}`
    : `local:${selection.id}`;

export const engineDisplayName = (selection: EngineSelection): string =>
  selection.kind === "browser" ? selection.name : selection.id;

/**
 * Common type used wherever a caller holds a reference to a running engine.
 */
export type AnyEngine = Engine;
