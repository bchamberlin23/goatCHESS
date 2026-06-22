import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

interface ShortcutItem {
  keys: string[];
  description: string;
}

interface ShortcutGroup {
  title: string;
  shortcuts: ShortcutItem[];
}

function getShortcutsForRoute(pathname: string): ShortcutGroup[] {
  const global: ShortcutGroup = {
    title: "Global",
    shortcuts: [{ keys: ["?"], description: "Toggle keyboard shortcuts" }],
  };

  const analysis: ShortcutGroup = {
    title: "Analysis Board",
    shortcuts: [
      { keys: ["←"], description: "Previous move" },
      { keys: ["→"], description: "Next move" },
      { keys: ["↑"], description: "Jump to final position" },
      { keys: ["↓"], description: "Jump to start" },
      { keys: ["F"], description: "Flip board" },
    ],
  };

  const play: ShortcutGroup = {
    title: "Play vs Computer",
    shortcuts: [
      { keys: ["←"], description: "View previous move" },
      { keys: ["→"], description: "View next move" },
      { keys: ["F"], description: "Flip board" },
    ],
  };

  const puzzles: ShortcutGroup = {
    title: "Puzzle Training",
    shortcuts: [
      { keys: ["H"], description: "Get a hint" },
      { keys: ["N"], description: "Skip to next puzzle" },
      { keys: ["F"], description: "Flip board" },
    ],
  };

  const groups = [global];
  if (pathname === "/analysis") groups.push(analysis);
  if (pathname === "/play") groups.push(play);
  if (pathname === "/puzzles") groups.push(puzzles);

  return groups;
}

function KeyCap({ label }: { label: string }) {
  return (
    <Box
      component="kbd"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 28,
        height: 28,
        px: 1,
        borderRadius: 1,
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.15)"
            : "rgba(0,0,0,0.15)",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.06)"
            : "rgba(0,0,0,0.04)",
        fontFamily: "'Inter', monospace",
        fontSize: "0.75rem",
        fontWeight: 700,
        lineHeight: 1,
        color: "text.primary",
        boxShadow: (theme) =>
          theme.palette.mode === "dark"
            ? "0 1px 0 rgba(255,255,255,0.06)"
            : "0 1px 0 rgba(0,0,0,0.08)",
      }}
    >
      {label}
    </Box>
  );
}

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function KeyboardShortcutsDialog({ open, onClose }: Props) {
  const router = useRouter();
  const groups = getShortcutsForRoute(router.pathname);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          maxHeight: "80vh",
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pb: 1,
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Icon icon="mdi:keyboard" width={20} color="#C9A96E" />
          <Typography fontSize="1rem" fontWeight={700}>
            Keyboard Shortcuts
          </Typography>
        </Stack>
        <IconButton size="small" onClick={onClose}>
          <Icon icon="mdi:close" width={18} />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ pt: 0 }}>
        <Stack spacing={2.5}>
          {groups.map((group, i) => (
            <Box key={group.title}>
              <Typography
                variant="overline"
                color="text.secondary"
                fontWeight={700}
                letterSpacing="0.08em"
                sx={{ display: "block", mb: 1.5 }}
              >
                {group.title}
              </Typography>
              <Stack spacing={1.25}>
                {group.shortcuts.map((shortcut) => (
                  <Stack
                    key={shortcut.description}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography
                      fontSize="0.88rem"
                      color="text.secondary"
                      fontWeight={500}
                    >
                      {shortcut.description}
                    </Typography>
                    <Stack direction="row" spacing={0.5}>
                      {shortcut.keys.map((key) => (
                        <KeyCap key={key} label={key} />
                      ))}
                    </Stack>
                  </Stack>
                ))}
              </Stack>
              {i < groups.length - 1 && (
                <Divider sx={{ mt: 2, opacity: 0.5 }} />
              )}
            </Box>
          ))}
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
