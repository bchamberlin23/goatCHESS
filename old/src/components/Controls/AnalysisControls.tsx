"use client";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/input";

interface AnalysisControlsProps {
  depth: number;
  onDepthChange: (depth: number) => void;
  isAnalyzing: boolean;
  isComplete: boolean;
  progress: number;
  estimatedSecondsRemaining: number | null;
  formatEta: (seconds: number) => string;
  onAnalyze: () => void;
  onStop: () => void;
  engineReady: boolean;
  engineLoading: boolean;
  engineError: string | null;
  engineLabel?: string;
  onRetryEngine?: () => void;
}

export function AnalysisControls({
  depth,
  onDepthChange,
  isAnalyzing,
  isComplete,
  progress,
  estimatedSecondsRemaining,
  formatEta,
  onAnalyze,
  onStop,
  engineReady,
  engineLoading,
  engineError,
  engineLabel,
  onRetryEngine,
}: AnalysisControlsProps) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-zinc-200">Analysis</h3>
        {engineLoading && <span className="text-xs text-zinc-500">Loading engine...</span>}
        {engineReady && !isAnalyzing && (
          <span className="text-xs text-emerald-500">{engineLabel ?? "Engine ready"}</span>
        )}
      </div>

      {engineError && (
        <div className="rounded bg-red-950/50 border border-red-900 p-2 text-xs text-red-300">
          {engineError}
          {onRetryEngine && (
            <Button variant="ghost" size="sm" className="mt-1 h-6 text-xs" onClick={onRetryEngine}>
              Retry
            </Button>
          )}
        </div>
      )}

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label>Depth</Label>
          <span className="text-sm text-zinc-400">{depth}</span>
        </div>
        <div className="flex gap-1">
          {([
            { label: "Fast", depth: 14 },
            { label: "Balanced", depth: 16 },
            { label: "Deep", depth: 20 },
          ] as const).map(({ label, depth: presetDepth }) => (
            <Button
              key={label}
              variant={depth === presetDepth ? "default" : "outline"}
              size="sm"
              className="flex-1 h-7 text-xs"
              disabled={isAnalyzing}
              onClick={() => onDepthChange(presetDepth)}
            >
              {label}
            </Button>
          ))}
        </div>
        <Slider
          value={[depth]}
          onValueChange={([v]) => onDepthChange(v)}
          min={12}
          max={22}
          step={1}
          disabled={isAnalyzing}
        />
        <p className="text-xs text-zinc-500">
          Lower depth is much faster. Classifications stay reliable at 14–16.
        </p>
      </div>

      {isAnalyzing && (
        <div className="space-y-1">
          <Progress value={progress * 100} />
          <p className="text-xs text-zinc-500 text-center">
            Analyzing... {Math.round(progress * 100)}%
            {estimatedSecondsRemaining !== null && (
              <> &middot; {formatEta(estimatedSecondsRemaining)}</>
            )}
          </p>
        </div>
      )}

      <div className="flex gap-2">
        {!isAnalyzing ? (
          <Button
            className="flex-1"
            onClick={onAnalyze}
            disabled={engineLoading || !engineReady}
          >
            {isComplete ? "Re-analyze" : "Analyze Game"}
          </Button>
        ) : (
          <Button className="flex-1" variant="secondary" onClick={onStop}>
            Stop
          </Button>
        )}
      </div>
    </div>
  );
}
