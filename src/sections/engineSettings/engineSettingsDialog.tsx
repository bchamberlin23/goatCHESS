import Slider from "@/components/slider";
import { EngineName } from "@/types/enums";
import {
  MenuItem,
  Select,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  FormControl,
  InputLabel,
  OutlinedInput,
  DialogActions,
  Typography,
  Grid2 as Grid,
  Box,
  useTheme,
  Switch,
  FormControlLabel,
  TextField,
  IconButton,
  Divider,
  Tooltip,
  Stack,
} from "@mui/material";
import {
  engineSelectionAtom,
  engineDepthAtom,
  engineMultiPvAtom,
  engineWorkersNbAtom,
} from "../analysis/states";
import { darkModeAtom } from "@/states/global";
import ArrowOptions from "./arrowOptions";
import { useAtomLocalStorage } from "@/hooks/useAtomLocalStorage";
import { useEffect, useState } from "react";
import { isEngineSupported } from "@/lib/engine/shared";
import { Stockfish16_1 } from "@/lib/engine/stockfish16_1";
import { useAtom, useAtomValue } from "jotai";
import { boardHueAtom, pieceSetAtom } from "@/components/board/states";
import Image from "next/image";
import { Icon } from "@iconify/react";
import {
  DEFAULT_ENGINE,
  ENGINE_LABELS,
  PIECE_SETS,
  STRONGEST_ENGINE,
} from "@/constants";
import { getRecommendedWorkersNb } from "@/lib/engine/worker";
import { useLocalEngines } from "@/hooks/useLocalEngines";
import { engineSelectionKey } from "@/lib/engine/selection";
import { localBridgeAvailableAtom } from "@/lib/engine/localEngineConfig";
import { logMessageIfLocalhost } from "@/lib/helpers";
import { getMyEnginePreset } from "@/lib/engine/myEngine";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function EngineSettingsDialog({ open, onClose }: Props) {
  const [depth, setDepth] = useAtomLocalStorage(
    "engine-depth",
    engineDepthAtom
  );
  const [multiPv, setMultiPv] = useAtomLocalStorage(
    "engine-multi-pv",
    engineMultiPvAtom
  );
  const [engineSelection, setEngineSelection] = useAtomLocalStorage(
    "engine-selection",
    engineSelectionAtom
  );
  const [boardHue, setBoardHue] = useAtom(boardHueAtom);
  const [pieceSet, setPieceSet] = useAtom(pieceSetAtom);
  const [engineWorkersNb, setEngineWorkersNb] = useAtom(engineWorkersNbAtom);
  const [darkModeVal, setDarkModeVal] = useAtom(darkModeAtom);
  const localBridgeAvailable = useAtomValue(localBridgeAvailableAtom);
  const {
    engines: localEngines,
    detectedEngines,
    addEngine,
    removeEngine,
  } = useLocalEngines();

  const [newEngineName, setNewEngineName] = useState("");
  const [newEnginePath, setNewEnginePath] = useState("");
  const [addError, setAddError] = useState<string | null>(null);

  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  useEffect(() => {
    if (
      engineSelection.kind === "browser" &&
      !isEngineSupported(engineSelection.name)
    ) {
      if (Stockfish16_1.isSupported()) {
        setEngineSelection({
          kind: "browser",
          name: EngineName.Stockfish16_1Lite,
        });
      } else {
        setEngineSelection({ kind: "browser", name: EngineName.Stockfish11 });
      }
    }
  }, [setEngineSelection, engineSelection]);

  const handleSelectionChange = (value: string) => {
    if (value.startsWith("local:")) {
      setEngineSelection({
        kind: "local",
        id: value.slice("local:".length),
      });
    } else {
      setEngineSelection({
        kind: "browser",
        name: value.slice("browser:".length) as EngineName,
      });
    }
  };

  const handleAddLocalEngine = () => {
    setAddError(null);
    const result = addEngine({
      name: newEngineName.trim(),
      path: newEnginePath.trim(),
    });
    if (!result.ok) {
      setAddError(result.error);
      return;
    }
    setNewEngineName("");
    setNewEnginePath("");
    logMessageIfLocalhost(`Added local engine: ${result.engine.name}`);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle
        variant="h5"
        sx={{
          paddingBottom: 1.5,
          fontSize: "1.25rem",
          fontWeight: 700,
          borderBottom: (theme) =>
            theme.palette.mode === "dark"
              ? "1px solid rgba(255,255,255,0.06)"
              : "1px solid rgba(0,0,0,0.06)",
        }}
      >
        Settings
      </DialogTitle>
      <DialogContent sx={{ paddingBottom: 0 }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          paddingTop={1}
          spacing={3}
          size={12}
        >
          <Grid
            container
            justifyContent="center"
            size={{ xs: 12, sm: 7, md: 8 }}
          >
            <Typography variant="body2">
              {ENGINE_LABELS[DEFAULT_ENGINE].small} is the default engine if
              your device support its requirements. It offers the best balance
              between speed and strength.{" "}
              {ENGINE_LABELS[STRONGEST_ENGINE].small} is the strongest engine
              available, note that it requires a one time download of{" "}
              {ENGINE_LABELS[STRONGEST_ENGINE].sizeMb}MB and is much more
              compute intensive.
            </Typography>
          </Grid>

          <Grid
            container
            justifyContent="center"
            size={{ xs: 12, sm: 5, md: 4 }}
          >
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="dialog-select-label">Engine</InputLabel>
              <Select
                labelId="dialog-select-label"
                id="dialog-select"
                displayEmpty
                input={<OutlinedInput label="Engine" />}
                value={engineSelectionKey(engineSelection)}
                onChange={(e) => handleSelectionChange(e.target.value)}
                sx={{ width: 280, maxWidth: "100%" }}
              >
                {Object.values(EngineName).map((engine) => (
                  <MenuItem
                    key={`browser:${engine}`}
                    value={`browser:${engine}`}
                    disabled={!isEngineSupported(engine)}
                  >
                    {ENGINE_LABELS[engine].full}
                  </MenuItem>
                ))}
                {localEngines.length > 0 && (
                  <Box sx={{ width: "100%", opacity: 0.5, px: 2, py: 0.5 }}>
                    <Typography variant="caption" fontWeight={700}>
                      Local engines
                    </Typography>
                  </Box>
                )}
                {localEngines.map((engine) => (
                  <MenuItem
                    key={`local:${engine.id}`}
                    value={`local:${engine.id}`}
                    disabled={!localBridgeAvailable}
                  >
                    {engine.name} {!localBridgeAvailable && "(bridge offline)"}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Slider
            label="Maximum depth"
            value={depth}
            setValue={setDepth}
            min={10}
            max={30}
            marksFilter={2}
          />

          <Slider
            label="Number of lines"
            value={multiPv}
            setValue={setMultiPv}
            min={2}
            max={6}
            marksFilter={1}
            size={6}
          />

          <ArrowOptions />

          {/* Local engines section */}
          <Grid container size={12}>
            <Divider sx={{ width: "100%", my: 1 }} />
          </Grid>
          <Grid container justifyContent="center" alignItems="center" size={12}>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ mb: 1 }}
            >
              <Icon icon="mdi:chip" width={20} />
              <Typography variant="subtitle2" fontWeight={700}>
                Local engines
              </Typography>
              <Tooltip
                title={
                  localBridgeAvailable
                    ? "Engine bridge is running. Local engines can be used."
                    : "Engine bridge is not running. Start it with `npm run dev` to use local engines."
                }
              >
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: localBridgeAvailable
                      ? "#4caf50"
                      : "#f44336",
                  }}
                />
              </Tooltip>
            </Stack>
          </Grid>

          {localEngines.length > 0 && (
            <Grid container size={12}>
              <Stack spacing={1} sx={{ width: "100%" }}>
                {localEngines.map((engine) => (
                  <Box
                    key={engine.id}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      p: 1,
                      borderRadius: 1,
                      border: "1px solid",
                      borderColor: (theme) =>
                        theme.palette.mode === "dark"
                          ? "rgba(255,255,255,0.08)"
                          : "rgba(0,0,0,0.08)",
                    }}
                  >
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="body2" fontWeight={600}>
                        {engine.name}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{
                          wordBreak: "break-all",
                          display: "block",
                        }}
                      >
                        {engine.path}
                      </Typography>
                    </Box>
                    <IconButton
                      size="small"
                      onClick={() => removeEngine(engine.id)}
                      aria-label="remove engine"
                    >
                      <Icon icon="mdi:trash-can-outline" />
                    </IconButton>
                  </Box>
                ))}
              </Stack>
            </Grid>
          )}

          <Grid
            container
            justifyContent="center"
            alignItems="flex-end"
            size={12}
            spacing={1}
          >
            <Grid size={{ xs: 12, sm: 4 }}>
              <TextField
                label="Name"
                variant="outlined"
                size="small"
                value={newEngineName}
                onChange={(e) => setNewEngineName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                label="Path to UCI binary"
                variant="outlined"
                size="small"
                value={newEnginePath}
                onChange={(e) => setNewEnginePath(e.target.value)}
                placeholder="/usr/local/bin/stockfish"
                fullWidth
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 2 }}>
              <Button
                variant="contained"
                onClick={handleAddLocalEngine}
                disabled={!newEngineName.trim() || !newEnginePath.trim()}
                fullWidth
              >
                Add
              </Button>
            </Grid>
          </Grid>

          <Grid container justifyContent="center" size={12}>
            <Button
              size="small"
              variant="outlined"
              startIcon={<Icon icon="mdi:desktop-classic" />}
              onClick={() => {
                const preset = getMyEnginePreset();
                setNewEngineName(preset.name);
                setNewEnginePath(preset.path);
              }}
              sx={{ textTransform: "none" }}
            >
              Quick-add my desktop engine
            </Button>
          </Grid>

          {addError && (
            <Grid container size={12}>
              <Typography color="error" variant="caption">
                {addError}
              </Typography>
            </Grid>
          )}

          {detectedEngines.length > 0 && localEngines.length === 0 && (
            <Grid container size={12}>
              <Box
                sx={{
                  p: 1.5,
                  borderRadius: 1,
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark"
                      ? "rgba(255,255,255,0.04)"
                      : "rgba(0,0,0,0.04)",
                  width: "100%",
                }}
              >
                <Typography variant="caption" fontWeight={600}>
                  Detected on your system:
                </Typography>
                <Stack spacing={0.5} sx={{ mt: 0.5 }}>
                  {detectedEngines.map((e) => (
                    <Stack
                      key={e.path}
                      direction="row"
                      alignItems="center"
                      spacing={1}
                    >
                      <Typography
                        variant="caption"
                        sx={{ fontFamily: "monospace", flexGrow: 1 }}
                      >
                        {e.name} — {e.path}
                      </Typography>
                      <Button
                        size="small"
                        onClick={() => {
                          setNewEngineName(e.name);
                          setNewEnginePath(e.path);
                        }}
                      >
                        Use
                      </Button>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </Grid>
          )}

          <Grid
            container
            justifyContent="center"
            alignItems="center"
            size={12}
            sx={{
              mt: 1,
              mb: 1,
              py: 1.5,
              borderTop: (theme) =>
                theme.palette.mode === "dark"
                  ? "1px solid rgba(255,255,255,0.06)"
                  : "1px solid rgba(0,0,0,0.06)",
              borderBottom: (theme) =>
                theme.palette.mode === "dark"
                  ? "1px solid rgba(255,255,255,0.06)"
                  : "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <FormControlLabel
              control={
                <Switch
                  checked={!!darkModeVal}
                  onChange={(e) => setDarkModeVal(e.target.checked)}
                  color="primary"
                />
              }
              label={
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Icon
                    icon={darkModeVal ? "mdi:brightness-7" : "mdi:brightness-4"}
                    width={22}
                  />
                  <Typography variant="subtitle2" fontWeight={700}>
                    Dark Mode
                  </Typography>
                </Box>
              }
            />
          </Grid>

          <Grid
            container
            justifyContent="center"
            size={{ xs: 12, sm: 8, md: 9 }}
          >
            <Slider
              label="Board hue"
              value={boardHue}
              setValue={setBoardHue}
              min={0}
              max={360}
            />
          </Grid>

          <Grid
            container
            justifyContent="center"
            alignItems="center"
            size={{ xs: 12, sm: 4, md: 3 }}
          >
            <FormControl variant="outlined">
              <InputLabel id="dialog-select-label">Piece set</InputLabel>
              <Select
                labelId="dialog-select-label"
                id="dialog-select"
                displayEmpty
                input={<OutlinedInput label="Piece set" />}
                value={pieceSet}
                onChange={(e) =>
                  setPieceSet(e.target.value as (typeof PIECE_SETS)[number])
                }
                sx={{ width: 200, maxWidth: "100%" }}
              >
                {PIECE_SETS.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Image
                        loading="lazy"
                        src={`/piece/${name}/${isDarkMode ? "w" : "b"}N.svg`}
                        alt={`${name} knight`}
                        width={24}
                        height={24}
                      />
                      {name}
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid
            container
            justifyContent="center"
            alignItems="center"
            size={{ xs: 12, md: 11 }}
          >
            <Slider
              label="Number of threads"
              value={engineWorkersNb}
              setValue={setEngineWorkersNb}
              min={1}
              max={12}
              marksFilter={1}
              infoContent={
                <>
                  More threads means faster analysis, but only if your device
                  can handle them, otherwise it may have the opposite effect.
                  The estimated optimal value for your device is{" "}
                  {getRecommendedWorkersNb()}. Due to privacy restrictions in
                  some browsers, this value might be underestimated. Don't
                  hesitate to try different values to find the best one for your
                  device.
                </>
              }
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions
        sx={{
          m: 1,
          borderTop: (theme) =>
            theme.palette.mode === "dark"
              ? "1px solid rgba(255,255,255,0.06)"
              : "1px solid rgba(0,0,0,0.06)",
          paddingTop: 2,
        }}
      >
        <Button variant="contained" onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
