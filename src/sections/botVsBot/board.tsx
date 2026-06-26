import { useAtom, PrimitiveAtom, atom } from "jotai";
import { useEffect, useMemo } from "react";
import { Chess } from "chess.js";
import Board from "@/components/board";
import { useScreenSize } from "@/hooks/useScreenSize";
import { usePlayersData } from "@/hooks/usePlayersData";
import { useGameData } from "@/hooks/useGameData";
import { Color } from "@/types/enums";
import {
  botGameAtom,
  botGameDataAtom,
  botViewMoveIndexAtom,
  botBoardFlippedAtom,
} from "./states";

export default function BotBoard() {
  const screenSize = useScreenSize();
  const { white, black } = usePlayersData(botGameAtom);
  const [boardFlipped, setBoardFlipped] = useAtom(botBoardFlippedAtom);

  const boardSize = useMemo(() => {
    const width = screenSize.width;
    const height = screenSize.height;

    if (window?.innerWidth < 900) {
      return Math.min(width, height - 150);
    }

    return Math.min(width - 300, height * 0.83);
  }, [screenSize]);

  // Keyboard shortcut: F to flip board
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      if (e.key === "f" || e.key === "F") {
        setBoardFlipped((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setBoardFlipped]);

  const orientation = boardFlipped ? Color.Black : Color.White;

  const playBoardAtom = useMemo(
    () =>
      atom(
        (get) => {
          const gameVal = get(botGameAtom);
          const viewIdxVal = get(botViewMoveIndexAtom);
          if (viewIdxVal === null) return gameVal;

          const history = gameVal.history({ verbose: true });
          const initialFen =
            history.length > 0 ? history[0].before : gameVal.fen();
          const tempGame = new Chess(initialFen);

          const headers = gameVal.getHeaders();
          for (const [key, val] of Object.entries(headers)) {
            if (val !== undefined) tempGame.setHeader(key, val);
          }

          for (let i = 0; i < viewIdxVal; i++) {
            if (history[i]) {
              tempGame.move({
                from: history[i].from,
                to: history[i].to,
                promotion: history[i].promotion,
              });
            }
          }
          return tempGame;
        },
        (_, set, update: Chess | ((prev: Chess) => Chess)) => {
          set(botGameAtom, update);
        }
      ),
    []
  );

  useGameData(playBoardAtom as PrimitiveAtom<Chess>, botGameDataAtom);

  return (
    <Board
      id="BotVsBotBoard"
      canPlay={false}
      gameAtom={playBoardAtom as PrimitiveAtom<Chess>}
      boardSize={boardSize}
      whitePlayer={white}
      blackPlayer={black}
      boardOrientation={orientation}
      currentPositionAtom={botGameDataAtom}
    />
  );
}
