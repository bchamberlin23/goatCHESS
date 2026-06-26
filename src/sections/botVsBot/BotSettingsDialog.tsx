import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid2 as Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { EngineName } from "@/types/enums";
import { isEngineSupported } from "@/lib/engine/shared";
import { Stockfish16_1 } from "@/lib/engine/stockfish16_1";
import { ENGINE_LABELS } from "@/constants";
import { useLocalEngines } from "@/hooks/useLocalEngines";
import { engineSelectionKey } from "@/lib/engine/selection";
import Slider from "@/components/slider";
import {
  whiteEngineSelectionAtom,
  blackEngineSelectionAtom,
  whiteEngineEloAtom,
  blackEngineEloAtom,
  botMoveDelayAtom,
} from "./states";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function BotSettingsDialog({ open, onClose }: Props) {
  const [whiteSelection, setWhiteSelection] = useAtom(whiteEngineSelectionAtom);
  const [blackSelection, setBlackSelection] = useAtom(blackEngineSelectionAtom);
  const [whiteElo, setWhiteElo] = useAtom(whiteEngineEloAtom);
  const [blackElo, setBlackElo] = useAtom(blackEngineEloAtom);
  const [moveDelay, setMoveDelay] = useAtom(botMoveDelayAtom);
  const { engines: localEngines } = useLocalEngines();

  useEffect(() => {
    [whiteSelection, blackSelection].forEach((selection, idx) => {
      const setter = idx === 0 ? setWhiteSelection : setBlackSelection;
      if (selection.kind === "browser" && !isEngineSupported(selection.name)) {
        if (Stockfish16_1.isSupported()) {
          setter({ kind: "browser", name: EngineName.Stockfish16_1Lite });
        } else {
          setter({ kind: "browser", name: EngineName.Stockfish11 });
        }
      }
    });
  }, [setWhiteSelection, setBlackSelection, whiteSelection, blackSelection]);

  const handleSelectionChange = (value: string, color: "white" | "black") => {
    const setter = color === "white" ? setWhiteSelection : setBlackSelection;
    if (value.startsWith("local:")) {
      setter({ kind: "local", id: value.slice("local:".length) });
    } else {
      setter({
        kind: "browser",
        name: value.slice("browser:".length) as EngineName,
      });
    }
  };

  const renderEngineSelect = (color: "white" | "black") => {
    const selection = color === "white" ? whiteSelection : blackSelection;
    const label = color === "white" ? "White engine" : "Black engine";

    return (
      <FormControl variant="outlined" fullWidth>
        <InputLabel id={`bot-${color}-engine-label`}>{label}</InputLabel>
        <Select
          labelId={`bot-${color}-engine-label`}
          input={<OutlinedInput label={label} />}
          value={engineSelectionKey(selection)}
          onChange={(e) => handleSelectionChange(e.target.value, color)}
          sx={{ width: "100%" }}
        >
          {Object.values(EngineName).map((engine) => (
            <MenuItem
              key={`${color}:browser:${engine}`}
              value={`browser:${engine}`}
              disabled={!isEngineSupported(engine)}
            >
              {ENGINE_LABELS[engine].full}
            </MenuItem>
          ))}
          {localEngines.length > 0 && (
            <MenuItem disabled value="">
              <Typography variant="caption" fontWeight={700}>
                Local engines
              </Typography>
            </MenuItem>
          )}
          {localEngines.map((engine) => (
            <MenuItem
              key={`${color}:local:${engine.id}`}
              value={`local:${engine.id}`}
            >
              {engine.name} (local)
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle marginY={1} variant="h5">
        Bot vs Bot settings
      </DialogTitle>
      <DialogContent sx={{ paddingBottom: 0 }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          rowGap={3}
          paddingTop={2}
        >
          <Grid size={{ xs: 12, sm: 6 }}>{renderEngineSelect("white")}</Grid>
          <Grid size={{ xs: 12, sm: 6 }}>{renderEngineSelect("black")}</Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Slider
              label="White Elo"
              value={whiteElo}
              setValue={setWhiteElo}
              min={0}
              max={3200}
              step={50}
              marksFilter={400}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Slider
              label="Black Elo"
              value={blackElo}
              setValue={setBlackElo}
              min={0}
              max={3200}
              step={50}
              marksFilter={400}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 8 }}>
            <Slider
              label="Delay between moves (ms)"
              value={moveDelay}
              setValue={setMoveDelay}
              min={0}
              max={3000}
              step={100}
              marksFilter={500}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ m: 2 }}>
        <Button
          variant="outlined"
          sx={{ marginRight: 2 }}
          onClick={handleClose}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
