"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input, Textarea, Label } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GameSelector } from "./GameSelector";
import {
  fetchChessComGames,
  fetchLichessGames,
  parseFenPosition,
  parsePgn,
  readFileAsText,
} from "@/lib/chess-utils";
import type { FetchedGame, ParsedGame } from "@/lib/types";
import { Upload } from "lucide-react";

interface ImportModalProps {
  onImport: (game: ParsedGame) => void;
}

export function ImportModal({ onImport }: ImportModalProps) {
  const [open, setOpen] = useState(false);
  const [pgnText, setPgnText] = useState("");
  const [username, setUsername] = useState("");
  const [platform, setPlatform] = useState<"chesscom" | "lichess">("chesscom");
  const [fen, setFen] = useState("");
  const [fetchedGames, setFetchedGames] = useState<FetchedGame[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const handleImportPgn = () => {
    try {
      const game = parsePgn(pgnText);
      onImport(game);
      setOpen(false);
      reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid PGN");
    }
  };

  const handleFetchGames = async () => {
    if (!username.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const games =
        platform === "chesscom"
          ? await fetchChessComGames(username.trim())
          : await fetchLichessGames(username.trim());
      setFetchedGames(games);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch games");
    } finally {
      setLoading(false);
    }
  };

  const handleSelectGame = (game: FetchedGame) => {
    try {
      const parsed = parsePgn(game.pgn, game.id);
      onImport(parsed);
      setOpen(false);
      reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid game PGN");
    }
  };

  const importFromFile = async (file: File) => {
    try {
      const text = await readFileAsText(file);
      const game = parsePgn(text);
      onImport(game);
      setOpen(false);
      reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to read file");
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    await importFromFile(file);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) await importFromFile(file);
  };

  const handleImportFen = () => {
    try {
      const game = parseFenPosition(fen.trim());
      onImport(game);
      setOpen(false);
      reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid FEN");
    }
  };

  const reset = () => {
    setPgnText("");
    setUsername("");
    setFen("");
    setFetchedGames([]);
    setError(null);
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) reset(); }}>
      <DialogTrigger asChild>
        <Button>Import Game</Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Import Game</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="pgn">
          <TabsList className="w-full">
            <TabsTrigger value="pgn" className="flex-1">PGN</TabsTrigger>
            <TabsTrigger value="username" className="flex-1">Username</TabsTrigger>
            <TabsTrigger value="file" className="flex-1">File</TabsTrigger>
            <TabsTrigger value="fen" className="flex-1">FEN</TabsTrigger>
          </TabsList>

          <TabsContent value="pgn" className="space-y-3">
            <Label>Paste PGN</Label>
            <Textarea
              value={pgnText}
              onChange={(e) => setPgnText(e.target.value)}
              placeholder="[Event &quot;?&quot;]&#10;[White &quot;Player1&quot;]&#10;..."
              rows={8}
            />
            <Button onClick={handleImportPgn} disabled={!pgnText.trim()}>
              Load Game
            </Button>
          </TabsContent>

          <TabsContent value="username" className="space-y-3">
            <div className="flex gap-2">
              <Button
                variant={platform === "chesscom" ? "default" : "outline"}
                size="sm"
                onClick={() => setPlatform("chesscom")}
              >
                Chess.com
              </Button>
              <Button
                variant={platform === "lichess" ? "default" : "outline"}
                size="sm"
                onClick={() => setPlatform("lichess")}
              >
                Lichess
              </Button>
            </div>
            <Label>Username</Label>
            <div className="flex gap-2">
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                onKeyDown={(e) => e.key === "Enter" && handleFetchGames()}
              />
              <Button onClick={handleFetchGames} disabled={!username.trim() || loading}>
                Fetch
              </Button>
            </div>
            <GameSelector games={fetchedGames} onSelect={handleSelectGame} loading={loading} />
          </TabsContent>

          <TabsContent value="file" className="space-y-3">
            <Label>Upload PGN file</Label>
            <div
              className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
                dragOver ? "border-emerald-500 bg-emerald-950/20" : "border-zinc-700 hover:border-emerald-600"
              }`}
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
            >
              <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
                <Upload className="h-8 w-8 text-zinc-500 mb-2" />
                <span className="text-sm text-zinc-400">Drop or click to upload .pgn file</span>
                <input type="file" accept=".pgn,.txt" className="hidden" onChange={handleFileUpload} />
              </label>
            </div>
          </TabsContent>

          <TabsContent value="fen" className="space-y-3">
            <Label>FEN Position</Label>
            <Input
              value={fen}
              onChange={(e) => setFen(e.target.value)}
              placeholder="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
            />
            <Button onClick={handleImportFen} disabled={!fen.trim()}>
              Load Position
            </Button>
          </TabsContent>
        </Tabs>

        {error && <p className="text-sm text-red-400">{error}</p>}
      </DialogContent>
    </Dialog>
  );
}
