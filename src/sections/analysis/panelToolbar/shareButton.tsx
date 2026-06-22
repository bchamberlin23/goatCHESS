import { ToolbarButton } from "@/components/ToolbarButton";
import { useAtomValue } from "jotai";
import { boardAtom } from "../states";
import { useSnackbar } from "@/hooks/useSnackbar";
import { useRouter } from "next/router";

export default function ShareAnalysisButton() {
  const board = useAtomValue(boardAtom);
  const { showSnackbar } = useSnackbar();
  const router = useRouter();

  const handleShare = () => {
    const fen = board.fen();
    const pgn = board.pgn();
    // Encode FEN in URL hash; also include PGN if it's a loaded game
    const params = new URLSearchParams();
    params.set("fen", fen);
    if (board.history().length > 0) {
      params.set("pgn", encodeURIComponent(pgn));
    }
    const url = `${window.location.origin}${router.pathname}#${params.toString()}`;
    navigator.clipboard.writeText(url);
    showSnackbar("Analysis link copied to clipboard", "success");
  };

  return (
    <ToolbarButton
      tooltip="Share analysis link"
      onClick={handleShare}
      icon="mdi:share-variant"
    />
  );
}
