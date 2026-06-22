"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Settings } from "lucide-react";
import { BOARD_THEMES, type BoardThemeId, type PieceThemeId } from "@/lib/board-themes";
import type { Preferences } from "@/hooks/usePreferences";

interface SettingsModalProps {
  preferences: Preferences;
  onUpdate: (patch: Partial<Preferences>) => void;
}

export function SettingsModal({ preferences, onUpdate }: SettingsModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Settings">
          <Settings className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>
        <div className="space-y-5">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Default analysis depth</Label>
              <span className="text-sm text-zinc-400">{preferences.defaultDepth}</span>
            </div>
            <Slider
              value={[preferences.defaultDepth]}
              onValueChange={([v]) => onUpdate({ defaultDepth: v })}
              min={12}
              max={22}
              step={1}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Auto-play speed</Label>
              <span className="text-sm text-zinc-400">{preferences.playSpeedMs}ms</span>
            </div>
            <Slider
              value={[preferences.playSpeedMs]}
              onValueChange={([v]) => onUpdate({ playSpeedMs: v })}
              min={200}
              max={2000}
              step={100}
            />
          </div>

          <div className="space-y-2">
            <Label>Board theme</Label>
            <div className="grid grid-cols-2 gap-2">
              {(Object.keys(BOARD_THEMES) as BoardThemeId[]).map((id) => (
                <Button
                  key={id}
                  variant={preferences.boardTheme === id ? "default" : "outline"}
                  size="sm"
                  onClick={() => onUpdate({ boardTheme: id })}
                >
                  {BOARD_THEMES[id].label}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Piece set</Label>
            <div className="flex gap-2">
              {(["default", "neo"] as PieceThemeId[]).map((id) => (
                <Button
                  key={id}
                  variant={preferences.pieceTheme === id ? "default" : "outline"}
                  size="sm"
                  onClick={() => onUpdate({ pieceTheme: id })}
                >
                  {id === "default" ? "Classic" : "Neo"}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
