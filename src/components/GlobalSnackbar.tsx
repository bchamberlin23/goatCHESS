import { useAtomValue } from "jotai";
import { snackbarAtom } from "@/states/global";
import { Snackbar, Alert, AlertColor } from "@mui/material";
import { useSnackbar } from "@/hooks/useSnackbar";

export default function GlobalSnackbar() {
  const snackbar = useAtomValue(snackbarAtom);
  const { closeSnackbar } = useSnackbar();

  return (
    <Snackbar
      open={snackbar.open}
      autoHideDuration={3500}
      onClose={closeSnackbar}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        onClose={closeSnackbar}
        severity={snackbar.severity as AlertColor}
        variant="filled"
        sx={{
          borderRadius: 2,
          fontWeight: 600,
          fontSize: "0.875rem",
          minWidth: 200,
        }}
      >
        {snackbar.message}
      </Alert>
    </Snackbar>
  );
}
