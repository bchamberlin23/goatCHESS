import {
  EvaluateGameParams,
  EvaluatePositionWithUpdateParams,
  GameEval,
  PositionEval,
} from "@/types/eval";

/**
 * Common engine interface implemented by both browser-side engines
 * (which run in a Web Worker) and local engines (which talk to the
 * local engine bridge over WebSocket).
 */
export interface Engine {
  readonly name: string;
  getIsReady(): boolean;
  shutdown(): void;
  stopAllCurrentJobs(): Promise<void>;
  evaluateGame(params: EvaluateGameParams): Promise<GameEval>;
  evaluatePositionWithUpdate(
    params: EvaluatePositionWithUpdateParams
  ): Promise<PositionEval>;
  getEngineNextMove(
    fen: string,
    elo: number,
    depth?: number
  ): Promise<string | undefined>;
}
