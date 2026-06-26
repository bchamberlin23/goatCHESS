import { Button } from "@mui/material";
import { useState } from "react";
import BotSettingsDialog from "./BotSettingsDialog";

export default function BotSettingsButton() {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <Button variant="contained" onClick={() => setOpenDialog(true)}>
        Configure match
      </Button>
      <BotSettingsDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
      />
    </>
  );
}
