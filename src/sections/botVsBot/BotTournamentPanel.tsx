import { ENGINE_LABELS } from "@/constants";
import { useChessActions } from "@/hooks/useChessActions";
import { useLocalEngines } from "@/hooks/useLocalEngines";
import {
  engineSelectionKey,
  type EngineSelection,
} from "@/lib/engine/selection";
import { isEngineSupported } from "@/lib/engine/shared";
import { EngineName } from "@/types/enums";
import { Icon } from "@iconify/react";
import {
  Box,
  Button,
  Chip,
  Divider,
  FormControl,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useMemo } from "react";
import {
  blackEngineEloAtom,
  blackEngineSelectionAtom,
  botEvalAtom,
  botGameAtom,
  botIsPausedAtom,
  botIsRunningAtom,
  botTournamentAtom,
  botTournamentGamesPerMatchAtom,
  botTournamentMoveLimitAtom,
  botTournamentSizeAtom,
  botViewMoveIndexAtom,
  whiteEngineEloAtom,
  whiteEngineSelectionAtom,
} from "./states";
import {
  createTournament,
  getNextGamePairing,
  type TournamentParticipant,
  type TournamentState,
} from "./tournament";

export default function BotTournamentPanel() {
  const [tournament, setTournament] = useAtom(botTournamentAtom);
  const [bracketSize, setBracketSize] = useAtom(botTournamentSizeAtom);
  const [gamesPerMatch, setGamesPerMatch] = useAtom(
    botTournamentGamesPerMatchAtom
  );
  const [moveLimit, setMoveLimit] = useAtom(botTournamentMoveLimitAtom);
  const whiteSelection = useAtomValue(whiteEngineSelectionAtom);
  const blackSelection = useAtomValue(blackEngineSelectionAtom);
  const whiteElo = useAtomValue(whiteEngineEloAtom);
  const blackElo = useAtomValue(blackEngineEloAtom);
  const setIsRunning = useSetAtom(botIsRunningAtom);
  const setIsPaused = useSetAtom(botIsPausedAtom);
  const setViewMoveIdx = useSetAtom(botViewMoveIndexAtom);
  const setEval = useSetAtom(botEvalAtom);
  const { reset } = useChessActions(botGameAtom);
  const { engines: localEngines, getEngineLabel } = useLocalEngines();

  const entrants = useMemo(
    () =>
      buildEntrants({
        bracketSize,
        whiteSelection,
        blackSelection,
        whiteElo,
        blackElo,
        getEngineLabel,
        localEngines,
      }),
    [
      blackElo,
      blackSelection,
      bracketSize,
      getEngineLabel,
      localEngines,
      whiteElo,
      whiteSelection,
    ]
  );

  const activePairing = tournament ? getNextGamePairing(tournament) : undefined;
  const completedGames =
    tournament?.rounds
      .flatMap((round) => round.matches)
      .flatMap((match) => match.games).length ?? 0;
  const completedMatches =
    tournament?.rounds
      .flatMap((round) => round.matches)
      .filter((match) => match.status === "complete").length ?? 0;
  const totalMatches =
    tournament?.rounds.flatMap((round) => round.matches).length ?? 0;
  const progress = totalMatches ? (completedMatches / totalMatches) * 100 : 0;

  const startTournament = () => {
    const nextTournament = createTournament({
      name: `${bracketSize}-Engine Knockout`,
      gamesPerMatch,
      participants: entrants,
    });
    const firstPairing = getNextGamePairing(nextTournament);
    if (!firstPairing) return;

    setTournament(nextTournament);
    setViewMoveIdx(null);
    setEval(null);
    reset({
      white: {
        name: firstPairing.white.name,
        rating: firstPairing.white.elo,
      },
      black: {
        name: firstPairing.black.name,
        rating: firstPairing.black.elo,
      },
    });
    setIsPaused(false);
    setIsRunning(true);
  };

  const clearTournament = () => {
    setTournament(null);
    setIsRunning(false);
    setIsPaused(false);
  };

  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        p: 1.5,
      }}
    >
      <Stack spacing={1.5}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={1} alignItems="center" minWidth={0}>
            <Icon icon="mdi:tournament" width={20} height={20} />
            <Typography variant="subtitle2" fontWeight={800} noWrap>
              Engine Tournament
            </Typography>
          </Stack>
          {tournament?.champion && (
            <Chip
              size="small"
              color="warning"
              icon={<Icon icon="mdi:trophy" />}
              label={tournament.champion.name}
              sx={{ maxWidth: 170 }}
            />
          )}
        </Stack>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
          <FormControl size="small" fullWidth>
            <InputLabel id="bot-tournament-bracket-label">Bracket</InputLabel>
            <Select
              labelId="bot-tournament-bracket-label"
              label="Bracket"
              value={bracketSize}
              onChange={(event) => setBracketSize(Number(event.target.value))}
            >
              {[2, 4, 8].map((size) => (
                <MenuItem key={size} value={size}>
                  {size} engines
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl size="small" fullWidth>
            <InputLabel id="bot-tournament-games-label">Games</InputLabel>
            <Select
              labelId="bot-tournament-games-label"
              label="Games"
              value={gamesPerMatch}
              onChange={(event) => setGamesPerMatch(Number(event.target.value))}
            >
              {[1, 2, 4, 6].map((games) => (
                <MenuItem key={games} value={games}>
                  {games}/match
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl size="small" fullWidth>
            <InputLabel id="bot-tournament-cap-label">Move cap</InputLabel>
            <Select
              labelId="bot-tournament-cap-label"
              label="Move cap"
              value={moveLimit}
              onChange={(event) => setMoveLimit(Number(event.target.value))}
            >
              {[120, 180, 240, 320].map((limit) => (
                <MenuItem key={limit} value={limit}>
                  {limit} ply
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>

        <Stack direction="row" spacing={1}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<Icon icon="mdi:play-circle" />}
            onClick={startTournament}
            fullWidth
            sx={{ borderRadius: 2 }}
          >
            Start Tournament
          </Button>
          <Button
            variant="outlined"
            startIcon={<Icon icon="mdi:close-circle-outline" />}
            onClick={clearTournament}
            disabled={!tournament}
            sx={{ borderRadius: 2, minWidth: 104 }}
          >
            Clear
          </Button>
        </Stack>

        <SeedPreview entrants={entrants} />

        {tournament && (
          <>
            <Divider />
            <Stack spacing={1}>
              <Stack direction="row" justifyContent="space-between" gap={1}>
                <Typography variant="caption" color="text.secondary">
                  {completedMatches}/{totalMatches} matches
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {completedGames} games played
                </Typography>
              </Stack>
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{ height: 6, borderRadius: 999 }}
              />
              {activePairing && (
                <Box
                  sx={{
                    borderRadius: 1.5,
                    bgcolor: (theme) =>
                      theme.palette.mode === "dark"
                        ? "rgba(255,255,255,0.05)"
                        : "rgba(0,0,0,0.035)",
                    p: 1,
                  }}
                >
                  <Typography variant="caption" color="text.secondary">
                    LIVE GAME {activePairing.gameNumber}
                  </Typography>
                  <Typography variant="body2" fontWeight={800} noWrap>
                    {activePairing.white.name} vs {activePairing.black.name}
                  </Typography>
                </Box>
              )}
            </Stack>
            <BracketView tournament={tournament} />
            <StandingsView tournament={tournament} />
          </>
        )}
      </Stack>
    </Box>
  );
}

function SeedPreview({ entrants }: { entrants: TournamentParticipant[] }) {
  return (
    <Stack direction="row" gap={0.75} flexWrap="wrap">
      {entrants.map((entrant) => (
        <Chip
          key={entrant.id}
          size="small"
          label={`#${entrant.seed} ${entrant.name}`}
          sx={{ maxWidth: 180 }}
        />
      ))}
    </Stack>
  );
}

function BracketView({ tournament }: { tournament: TournamentState }) {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={1}
      alignItems="stretch"
    >
      {tournament.rounds.map((round) => (
        <Box key={round.round} sx={{ flex: 1, minWidth: 0 }}>
          <Typography variant="caption" color="text.secondary" fontWeight={800}>
            {round.label.toUpperCase()}
          </Typography>
          <Stack spacing={0.75} mt={0.75}>
            {round.matches.map((match) => (
              <Box
                key={match.id}
                sx={{
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 1.5,
                  p: 1,
                }}
              >
                <MatchPlayer
                  name={match.playerA?.name ?? "TBD"}
                  score={match.scoreA}
                  winner={match.winner?.id === match.playerA?.id}
                />
                <MatchPlayer
                  name={match.playerB?.name ?? "TBD"}
                  score={match.scoreB}
                  winner={match.winner?.id === match.playerB?.id}
                />
                <Stack direction="row" spacing={0.5} mt={0.75}>
                  <Chip
                    size="small"
                    label={
                      match.needsTiebreak
                        ? "Tiebreak"
                        : match.status === "playing"
                          ? "Live"
                          : match.status
                    }
                    color={
                      match.needsTiebreak
                        ? "warning"
                        : match.status === "playing"
                          ? "success"
                          : "default"
                    }
                    sx={{ height: 20, fontSize: "0.65rem" }}
                  />
                  <Chip
                    size="small"
                    label={`${match.games.length} games`}
                    sx={{ height: 20, fontSize: "0.65rem" }}
                  />
                </Stack>
              </Box>
            ))}
          </Stack>
        </Box>
      ))}
    </Stack>
  );
}

function MatchPlayer({
  name,
  score,
  winner,
}: {
  name: string;
  score: number;
  winner: boolean;
}) {
  return (
    <Stack direction="row" justifyContent="space-between" spacing={1}>
      <Typography
        variant="body2"
        fontWeight={winner ? 800 : 500}
        color={winner ? "text.primary" : "text.secondary"}
        noWrap
      >
        {winner && <Icon icon="mdi:crown" width={14} height={14} />} {name}
      </Typography>
      <Typography variant="body2" fontWeight={800}>
        {score}
      </Typography>
    </Stack>
  );
}

function StandingsView({ tournament }: { tournament: TournamentState }) {
  const recentGames = tournament.rounds
    .flatMap((round) => round.matches)
    .flatMap((match) => match.games.map((game) => ({ game, match })))
    .slice(-4)
    .reverse();

  return (
    <Stack spacing={1}>
      <Typography variant="caption" color="text.secondary" fontWeight={800}>
        STANDINGS
      </Typography>
      {tournament.standings.slice(0, 4).map((standing, idx) => (
        <Stack
          key={standing.participant.id}
          direction="row"
          alignItems="center"
          spacing={1}
        >
          <Typography variant="caption" color="text.secondary" width={18}>
            {idx + 1}
          </Typography>
          <Typography variant="body2" flex={1} noWrap>
            {standing.participant.name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {standing.wins}-{standing.draws}-{standing.losses}
          </Typography>
          <Typography variant="body2" fontWeight={800} width={28}>
            {standing.points}
          </Typography>
        </Stack>
      ))}

      {recentGames.length > 0 && (
        <>
          <Typography variant="caption" color="text.secondary" fontWeight={800}>
            GAME LOG
          </Typography>
          {recentGames.map(({ game, match }) => (
            <Typography
              key={game.id}
              variant="caption"
              color="text.secondary"
              noWrap
            >
              R{match.round}.{match.index} G{game.gameNumber}: {game.result},{" "}
              {game.moves} ply
            </Typography>
          ))}
        </>
      )}
    </Stack>
  );
}

interface BuildEntrantsParams {
  bracketSize: number;
  whiteSelection: EngineSelection;
  blackSelection: EngineSelection;
  whiteElo: number;
  blackElo: number;
  getEngineLabel: (id: string) => string;
  localEngines: { id: string; name: string }[];
}

const buildEntrants = ({
  bracketSize,
  whiteSelection,
  blackSelection,
  whiteElo,
  blackElo,
  getEngineLabel,
  localEngines,
}: BuildEntrantsParams): TournamentParticipant[] => {
  const candidates: Omit<TournamentParticipant, "seed">[] = [
    {
      id: `slot-white:${engineSelectionKey(whiteSelection)}`,
      name: getSelectionLabel(whiteSelection, getEngineLabel),
      elo: whiteElo,
      selection: whiteSelection,
    },
    {
      id: `slot-black:${engineSelectionKey(blackSelection)}`,
      name: getSelectionLabel(blackSelection, getEngineLabel),
      elo: blackElo,
      selection: blackSelection,
    },
  ];

  Object.values(EngineName)
    .filter(isEngineSupported)
    .forEach((name, idx) => {
      candidates.push({
        id: `browser:${name}`,
        name: ENGINE_LABELS[name].small,
        elo: Math.max(1200, 3200 - idx * 90),
        selection: { kind: "browser", name },
      });
    });

  localEngines.forEach((engine, idx) => {
    candidates.push({
      id: `local:${engine.id}`,
      name: engine.name,
      elo: Math.max(1200, 2800 - idx * 80),
      selection: { kind: "local", id: engine.id },
    });
  });

  const uniqueCandidates = dedupeCandidates(candidates);
  const baseCandidates = [...uniqueCandidates];
  while (uniqueCandidates.length < bracketSize) {
    const base =
      baseCandidates[uniqueCandidates.length % baseCandidates.length];
    uniqueCandidates.push({
      ...base,
      id: `${base.id}:clone-${uniqueCandidates.length + 1}`,
      name: `${base.name} ${uniqueCandidates.length + 1}`,
    });
  }

  return uniqueCandidates.slice(0, bracketSize).map((candidate, idx) => ({
    ...candidate,
    seed: idx + 1,
  }));
};

const getSelectionLabel = (
  selection: EngineSelection,
  getEngineLabel: (id: string) => string
): string =>
  selection.kind === "browser"
    ? ENGINE_LABELS[selection.name]?.small || "Stockfish"
    : getEngineLabel(selection.id);

const dedupeCandidates = (
  candidates: Omit<TournamentParticipant, "seed">[]
): Omit<TournamentParticipant, "seed">[] => {
  const seen = new Set<string>();
  const unique: Omit<TournamentParticipant, "seed">[] = [];

  for (const candidate of candidates) {
    if (seen.has(candidate.id)) continue;
    seen.add(candidate.id);
    unique.push(candidate);
  }

  return unique;
};
