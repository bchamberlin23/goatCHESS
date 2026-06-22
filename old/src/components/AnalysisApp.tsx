"use client";

import { useCallback, useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { ImportModal } from "@/components/Import/ImportModal";
import { ChessBoardPanel } from "@/components/Board/ChessBoard";
import { MoveList } from "@/components/Analysis/MoveList";
import { EvalGraph } from "@/components/Analysis/EvalGraph";
import { ReportCard } from "@/components/Analysis/ReportCard";
import { EngineLines } from "@/components/Analysis/EngineLines";
import { OpeningExplorerPanel } from "@/components/Analysis/OpeningExplorer";
import { GameControls } from "@/components/Controls/GameControls";
import { AnalysisControls } from "@/components/Controls/AnalysisControls";
import { SettingsModal } from "@/components/Settings/SettingsModal";
import { useAnalysis } from "@/hooks/useAnalysis";
import { useGameState } from "@/hooks/useGameState";
import { useEngine } from "@/hooks/useEngine";
import { usePreferences } from "@/hooks/usePreferences";
import type { ParsedGame } from "@/lib/types";

export function AnalysisApp() {
  const [game, setGame] = useState<ParsedGame | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [liveLines, setLiveLines] = useState<ReturnType<typeof useEngine>["liveEvals"]>([]);

  const { preferences, updatePreferences } = usePreferences();
  const depth = preferences.defaultDepth;
  const setDepth = useCallback(
    (d: number) => updatePreferences({ defaultDepth: d }),
    [updatePreferences],
  );

  const analysis = useAnalysis();
  const engine = useEngine();
  const gameState = useGameState(game, analysis.moves);
  const initEngine = engine.init;
  const stopEngine = engine.stop;

  const handleImport = useCallback(async (imported: ParsedGame) => {
    analysis.reset();
    setGame(imported);
    gameState.loadGame();
    await analysis.loadCached(imported);
  }, [analysis, gameState]);

  const handleAnalyze = useCallback(async () => {
    if (!game) return;
    stopEngine();
    await initEngine();
    analysis.analyze(game, depth);
  }, [game, depth, initEngine, stopEngine, analysis]);

  const currentEval = gameState.currentMoveAnalysis?.evalAfter ?? liveLines[0]?.score ?? 0;
  const currentMate = gameState.currentMoveAnalysis?.mateAfter ?? liveLines[0]?.mate ?? null;

  const engineLines = analysis.isAnalyzing
    ? analysis.liveEngineLines
    : gameState.currentMoveAnalysis?.engineLines ?? liveLines;

  const liveDepth = analysis.isAnalyzing
    ? analysis.liveDepth
    : engine.liveDepth;

  useEffect(() => {
    void initEngine();
  }, [initEngine]);

  useEffect(() => {
    if (!game || gameState.explorationMoves.length > 0) return;
    if (analysis.isAnalyzing) return;

    const timer = setTimeout(async () => {
      try {
        const evals = await engine.evaluateLive(gameState.currentFen, 14);
        setLiveLines(evals);
      } catch {
        // ignore
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [gameState.currentFen, game, analysis.isAnalyzing, engine, gameState.explorationMoves.length]);

  useEffect(() => {
    if (!isPlaying || !game) return;

    const interval = setInterval(() => {
      if (gameState.currentPly >= game.moves.length) {
        setIsPlaying(false);
        return;
      }
      gameState.goForward();
    }, preferences.playSpeedMs);

    return () => clearInterval(interval);
  }, [isPlaying, game, gameState, preferences.playSpeedMs]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          gameState.goBack();
          break;
        case "ArrowRight":
          e.preventDefault();
          gameState.goForward();
          break;
        case "Home":
          e.preventDefault();
          gameState.goToStart();
          break;
        case "End":
          e.preventDefault();
          gameState.goToEnd();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameState]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {engine.isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/80 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 p-8">
            <Loader2 className="h-8 w-8 animate-spin text-emerald-500" />
            <p className="text-sm text-zinc-300">
              Loading Stockfish ({engine.engineLabel})...
            </p>
          </div>
        </div>
      )}

      <header className="border-b border-zinc-800 bg-zinc-900/80 backdrop-blur sticky top-0 z-40">
        <div className="max-w-[1600px] mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-emerald-600 flex items-center justify-center font-bold text-sm">
              CA
            </div>
            <h1 className="text-lg font-semibold">Chess Analyze</h1>
          </div>
          <div className="flex items-center gap-2">
            <SettingsModal preferences={preferences} onUpdate={updatePreferences} />
            <ImportModal onImport={handleImport} />
          </div>
        </div>
      </header>

      {!game ? (
        <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
          <h2 className="text-3xl font-bold text-zinc-100">Analyze Your Chess Games</h2>
          <p className="text-zinc-400 text-lg">
            Import a game from PGN, Chess.com, Lichess, or set up a position with FEN.
            Get move classifications, accuracy scores, evaluation graphs, and more.
          </p>
          <ImportModal onImport={handleImport} />
        </div>
      ) : (
        <main className="max-w-[1600px] mx-auto px-4 py-4">
          <div className="mb-3 flex items-center justify-between text-sm">
            <div>
              <span className="font-medium">{game.headers.white}</span>
              {game.headers.whiteElo && (
                <span className="text-zinc-500 ml-1">({game.headers.whiteElo})</span>
              )}
              <span className="text-zinc-500 mx-2">vs</span>
              <span className="font-medium">{game.headers.black}</span>
              {game.headers.blackElo && (
                <span className="text-zinc-500 ml-1">({game.headers.blackElo})</span>
              )}
            </div>
            {gameState.opening && (
              <span className="text-zinc-500 text-xs">
                {gameState.opening.eco} {gameState.opening.name}
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_300px] gap-4">
            <div className="space-y-4 order-2 lg:order-1">
              <OpeningExplorerPanel
                fen={gameState.currentFen}
                moveSans={gameState.explorerMoveSans}
                localOpening={gameState.opening}
                onMoveSelect={gameState.tryMove}
              />
              <EngineLines
                lines={engineLines}
                fen={gameState.currentFen}
                depth={depth}
                liveDepth={liveDepth}
                onLineClick={gameState.playVariation}
              />
            </div>

            <div className="space-y-3 order-1 lg:order-2">
              <ChessBoardPanel
                fen={gameState.currentFen}
                orientation={gameState.boardOrientation}
                lastMove={gameState.lastMove}
                moveAnalysis={gameState.currentMoveAnalysis}
                onMove={gameState.tryMove}
                evalScore={currentEval}
                evalMate={currentMate}
                boardTheme={preferences.boardTheme}
                pieceTheme={preferences.pieceTheme}
              />
              <EvalGraph
                moves={analysis.moves}
                currentPly={gameState.currentPly}
                onMoveClick={gameState.goToPly}
              />
              <GameControls
                currentPly={gameState.currentPly}
                totalPlies={game.moves.length}
                onStart={gameState.goToStart}
                onBack={gameState.goBack}
                onForward={gameState.goForward}
                onEnd={gameState.goToEnd}
                onFlip={gameState.flipBoard}
                isPlaying={isPlaying}
                onTogglePlay={() => setIsPlaying((p) => !p)}
                playSpeedMs={preferences.playSpeedMs}
                onPlaySpeedChange={(ms) => updatePreferences({ playSpeedMs: ms })}
              />
            </div>

            <div className="space-y-4 order-3">
              <AnalysisControls
                depth={depth}
                onDepthChange={setDepth}
                isAnalyzing={analysis.isAnalyzing}
                isComplete={analysis.isComplete}
                progress={analysis.progress}
                estimatedSecondsRemaining={analysis.estimatedSecondsRemaining}
                formatEta={analysis.formatEta}
                onAnalyze={handleAnalyze}
                onStop={analysis.stop}
                engineReady={engine.isReady}
                engineLoading={engine.isLoading}
                engineError={engine.error}
                engineLabel={engine.engineLabel}
                onRetryEngine={engine.retry}
              />

              <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 overflow-hidden">
                <div className="px-3 py-2 border-b border-zinc-800">
                  <h3 className="text-sm font-semibold text-zinc-200">Moves</h3>
                </div>
                <div className="h-64">
                  {analysis.moves.length > 0 ? (
                    <MoveList
                      moves={analysis.moves}
                      currentPly={gameState.currentPly}
                      onMoveClick={gameState.goToPly}
                      explorationMoves={gameState.explorationMoves}
                      onResetExploration={gameState.resetExploration}
                    />
                  ) : (
                    <RawMoveList
                      moves={game.moves}
                      currentPly={gameState.currentPly}
                      onMoveClick={gameState.goToPly}
                    />
                  )}
                </div>
              </div>

              <ReportCard
                report={analysis.report}
                onKeyMomentClick={gameState.goToPly}
              />
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

function RawMoveList({
  moves,
  currentPly,
  onMoveClick,
}: {
  moves: { san: string; color: "w" | "b"; ply: number }[];
  currentPly: number;
  onMoveClick: (ply: number) => void;
}) {
  const rows: Array<{ num: number; white?: typeof moves[0]; black?: typeof moves[0] }> = [];
  for (let i = 0; i < moves.length; i += 2) {
    rows.push({ num: i / 2 + 1, white: moves[i], black: moves[i + 1] });
  }

  return (
    <div className="overflow-y-auto h-full text-sm font-mono p-2">
      {rows.map(({ num, white, black }) => (
        <div key={num} className="grid grid-cols-[2rem_1fr_1fr] gap-1 py-0.5">
          <span className="text-zinc-500">{num}.</span>
          {white && (
            <button
              onClick={() => onMoveClick(white.ply)}
              className={`text-left px-1 rounded ${currentPly === white.ply ? "bg-emerald-700/40" : "hover:bg-zinc-800"}`}
            >
              {white.san}
            </button>
          )}
          {black && (
            <button
              onClick={() => onMoveClick(black.ply)}
              className={`text-left px-1 rounded ${currentPly === black.ply ? "bg-emerald-700/40" : "hover:bg-zinc-800"}`}
            >
              {black.san}
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
