import {
  Grid2 as Grid,
  Typography,
  TextField,
  InputAdornment,
  Chip,
  Stack,
} from "@mui/material";
import { Icon } from "@iconify/react";
import {
  DataGrid,
  GridColDef,
  GridLocaleText,
  GRID_DEFAULT_LOCALE_TEXT,
  GridActionsCellItem,
  GridRowId,
} from "@mui/x-data-grid";
import { useCallback, useMemo, useState } from "react";
import LoadGameButton from "@/sections/loadGame/loadGameButton";
import { useGameDatabase } from "@/hooks/useGameDatabase";
import { useRouter } from "next/router";
import { PageTitle } from "@/components/pageTitle";

const gridLocaleText: GridLocaleText = {
  ...GRID_DEFAULT_LOCALE_TEXT,
  noRowsLabel: "No games found",
};

export default function GameDatabase() {
  const { games, deleteGame } = useGameDatabase(true);
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [resultFilter, setResultFilter] = useState<string | null>(null);

  // Filter games based on search query and result filter
  const filteredGames = useMemo(() => {
    let result = games;

    // Apply result filter
    if (resultFilter) {
      result = result.filter((game) => game.result === resultFilter);
    }

    // Apply search query
    if (!searchQuery.trim()) return result;
    const query = searchQuery.toLowerCase();
    result = result.filter((game) => {
      const searchableFields = [
        game.event,
        game.site,
        game.date,
        game.round,
        game.white.name,
        game.black.name,
        game.result,
        game.white.rating?.toString(),
        game.black.rating?.toString(),
      ].filter(Boolean);
      return searchableFields.some((field) =>
        field?.toLowerCase().includes(query)
      );
    });
    return result;
  }, [games, searchQuery, resultFilter]);

  const handleDeleteGameRow = useCallback(
    (id: GridRowId) => async () => {
      if (typeof id !== "number") {
        throw new Error("Unable to remove game");
      }
      await deleteGame(id);
    },
    [deleteGame]
  );

  const handleCopyGameRow = useCallback(
    (id: GridRowId) => async () => {
      if (typeof id !== "number") {
        throw new Error("Unable to copy game");
      }
      const game = filteredGames[id - 1];
      await navigator.clipboard?.writeText?.(game.pgn);
    },
    [filteredGames]
  );

  const columns: GridColDef[] = useMemo(
    () => [
      {
        field: "event",
        headerName: "Event",
        width: 150,
      },
      {
        field: "site",
        headerName: "Site",
        width: 150,
      },
      {
        field: "date",
        headerName: "Date",
        width: 150,
      },
      {
        field: "round",
        headerName: "Round",
        headerAlign: "center",
        align: "center",
        width: 150,
      },
      {
        field: "whiteLabel",
        headerName: "White",
        width: 200,
        headerAlign: "center",
        align: "center",
        valueGetter: (_, row) =>
          `${row.white.name ?? "Unknown"} (${row.white.rating ?? "?"})`,
      },
      {
        field: "result",
        headerName: "Result",
        headerAlign: "center",
        align: "center",
        width: 100,
      },
      {
        field: "blackLabel",
        headerName: "Black",
        width: 200,
        headerAlign: "center",
        align: "center",
        valueGetter: (_, row) =>
          `${row.black.name ?? "Unknown"} (${row.black.rating ?? "?"})`,
      },
      {
        field: "eval",
        headerName: "Evaluation",
        type: "boolean",
        headerAlign: "center",
        align: "center",
        width: 100,
        valueGetter: (_, row) => !!row.eval,
      },
      {
        field: "openEvaluation",
        type: "actions",
        headerName: "Analyze",
        width: 100,
        cellClassName: "actions",
        getActions: ({ id }) => {
          return [
            <GridActionsCellItem
              icon={
                <Icon icon="streamline:magnifying-glass-solid" width="20px" />
              }
              label="Open Evaluation"
              onClick={() =>
                router.push({ pathname: "/analysis", query: { gameId: id } })
              }
              color="inherit"
              key={`${id}-open-eval-button`}
            />,
          ];
        },
      },
      {
        field: "delete",
        type: "actions",
        headerName: "Delete",
        width: 100,
        cellClassName: "actions",
        getActions: ({ id }) => {
          return [
            <GridActionsCellItem
              icon={
                <Icon icon="mdi:delete-outline" color="#e57373" width="20px" />
              }
              label="Delete"
              onClick={handleDeleteGameRow(id)}
              color="inherit"
              key={`${id}-delete-button`}
            />,
          ];
        },
      },
      {
        field: "copy pgn",
        type: "actions",
        headerName: "Copy pgn",
        width: 100,
        cellClassName: "actions",
        getActions: ({ id }) => {
          return [
            <GridActionsCellItem
              icon={
                <Icon icon="ri:clipboard-line" color="#C9A96E" width="20px" />
              }
              label="Copy pgn"
              onClick={handleCopyGameRow(id)}
              color="inherit"
              key={`${id}-copy-button`}
            />,
          ];
        },
      },
    ],
    [handleDeleteGameRow, handleCopyGameRow, router]
  );

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      gap={3}
      marginTop={4}
    >
      <PageTitle title="Chesskit Game Database" />

      {/* Visible Title & Subtitle */}
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        size={12}
        direction="column"
        gap={0.5}
      >
        <Typography
          variant="h4"
          component="h1"
          fontWeight={700}
          textAlign="center"
        >
          Game Database
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          textAlign="center"
        >
          Your saved games and analysis history
        </Typography>
      </Grid>

      <Grid container justifyContent="center" alignItems="center" size={12}>
        <LoadGameButton />
      </Grid>

      {games.length > 0 && (
        <>
          <Grid container justifyContent="center" alignItems="center" size={12}>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ fontWeight: 500 }}
            >
              {filteredGames.length} game{filteredGames.length !== 1 && "s"} in
              your database
              {searchQuery && ` (filtered from ${games.length})`}
            </Typography>
          </Grid>

          <Grid container justifyContent="center" alignItems="center" size={12}>
            <TextField
              placeholder="Search by player, event, date..."
              size="small"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{
                maxWidth: 400,
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                },
              }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon icon="mdi:magnify" width={20} color="#9e9e9e" />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Grid>

          {/* Result filter chips */}
          <Grid container justifyContent="center" alignItems="center" size={12}>
            <Stack direction="row" spacing={1}>
              {[
                { label: "All", value: null, icon: "mdi:filter-variant" },
                { label: "Won", value: "1-0", icon: "mdi:trophy" },
                { label: "Lost", value: "0-1", icon: "mdi:close-circle" },
                { label: "Drawn", value: "1/2-1/2", icon: "mdi:handshake" },
              ].map((chip) => (
                <Chip
                  key={chip.label}
                  label={chip.label}
                  icon={<Icon icon={chip.icon} width={16} />}
                  variant={resultFilter === chip.value ? "filled" : "outlined"}
                  color={resultFilter === chip.value ? "primary" : "default"}
                  onClick={() => setResultFilter(chip.value)}
                  sx={{
                    borderRadius: 2,
                    fontWeight: 600,
                    fontSize: "0.8rem",
                    cursor: "pointer",
                  }}
                />
              ))}
            </Stack>
          </Grid>
        </>
      )}

      {games.length === 0 ? (
        <Grid size={12} display="flex" justifyContent="center">
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              py: 6,
              px: 3,
              textAlign: "center",
              backgroundColor: (theme) =>
                theme.palette.mode === "dark"
                  ? "rgba(255, 255, 255, 0.02)"
                  : "rgba(0, 0, 0, 0.015)",
              border: "1px dashed",
              borderColor: "divider",
              borderRadius: 3,
              maxWidth: 480,
              width: "100%",
            }}
          >
            <Icon
              icon="mdi:database-off-outline"
              width={48}
              height={48}
              style={{ opacity: 0.6, marginBottom: 12 }}
            />
            <Typography variant="h6" fontWeight={600} gutterBottom>
              No games yet
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Import a game or play against Stockfish to get started.
            </Typography>
          </Grid>
        </Grid>
      ) : (
        <Grid maxWidth="100%" minWidth="50px">
          <DataGrid
            aria-label="Games list"
            rows={filteredGames}
            columns={columns}
            disableColumnMenu
            hideFooter={true}
            localeText={gridLocaleText}
            initialState={{
              sorting: {
                sortModel: [
                  {
                    field: "date",
                    sort: "desc",
                  },
                ],
              },
            }}
            sx={{
              border: (theme) =>
                theme.palette.mode === "dark"
                  ? "1px solid rgba(255,255,255,0.06)"
                  : "1px solid rgba(0,0,0,0.06)",
              borderRadius: 2,
              "& .MuiDataGrid-columnHeaders": {
                borderBottom: (theme) =>
                  theme.palette.mode === "dark"
                    ? "1px solid rgba(255,255,255,0.06)"
                    : "1px solid rgba(0,0,0,0.06)",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: (theme) =>
                  theme.palette.mode === "dark"
                    ? "1px solid rgba(255,255,255,0.04)"
                    : "1px solid rgba(0,0,0,0.04)",
              },
            }}
          />
        </Grid>
      )}
    </Grid>
  );
}
