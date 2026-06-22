import { Fab } from "@mui/material";
import { useState } from "react";
import EngineSettingsDialog from "./engineSettingsDialog";
import { Icon } from "@iconify/react";

export default function EngineSettingsButton() {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <Fab
        title="Engine settings"
        size="small"
        sx={{
          top: "auto",
          right: 16,
          bottom: 16,
          left: "auto",
          position: "fixed",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1e1e22" : "#f0f0f2",
          color: (theme) =>
            theme.palette.mode === "dark" ? "#a0a0a0" : "#555",
          border: (theme) =>
            theme.palette.mode === "dark"
              ? "1px solid rgba(255,255,255,0.08)"
              : "1px solid rgba(0,0,0,0.08)",
          "&:hover": {
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#252528" : "#e8e8ea",
            color: "primary.main",
          },
          transition: "all 0.2s ease",
        }}
        onClick={() => setOpenDialog(true)}
      >
        <Icon icon="mdi:settings" height={20} />
      </Fab>

      <EngineSettingsDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
      />
    </>
  );
}
