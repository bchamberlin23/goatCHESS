"use client";

import {
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  FlipVertical2,
  Pause,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/input";

interface GameControlsProps {
  currentPly: number;
  totalPlies: number;
  onStart: () => void;
  onBack: () => void;
  onForward: () => void;
  onEnd: () => void;
  onFlip: () => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
  playSpeedMs: number;
  onPlaySpeedChange: (ms: number) => void;
}

export function GameControls({
  currentPly,
  totalPlies,
  onStart,
  onBack,
  onForward,
  onEnd,
  onFlip,
  isPlaying,
  onTogglePlay,
  playSpeedMs,
  onPlaySpeedChange,
}: GameControlsProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-center gap-1 py-2">
        <Button variant="ghost" size="icon" onClick={onStart} disabled={currentPly === 0}>
          <ChevronsLeft className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={onBack} disabled={currentPly === 0}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="secondary" size="icon" onClick={onTogglePlay}>
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <Button variant="ghost" size="icon" onClick={onForward} disabled={currentPly >= totalPlies}>
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={onEnd} disabled={currentPly >= totalPlies}>
          <ChevronsRight className="h-4 w-4" />
        </Button>
        <div className="w-px h-6 bg-zinc-700 mx-2" />
        <Button variant="ghost" size="icon" onClick={onFlip}>
          <FlipVertical2 className="h-4 w-4" />
        </Button>
        <span className="text-xs text-zinc-500 ml-2">
          {currentPly} / {totalPlies}
        </span>
      </div>
      <div className="flex items-center gap-3 px-2">
        <Label className="text-xs shrink-0">Speed</Label>
        <Slider
          value={[playSpeedMs]}
          onValueChange={([v]) => onPlaySpeedChange(v)}
          min={200}
          max={2000}
          step={100}
          className="flex-1"
        />
        <span className="text-xs text-zinc-500 w-12 text-right">{playSpeedMs}ms</span>
      </div>
    </div>
  );
}
