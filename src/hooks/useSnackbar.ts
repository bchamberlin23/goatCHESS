import { useAtom } from "jotai";
import { snackbarAtom } from "@/states/global";
import { useCallback } from "react";

type SnackbarSeverity = "success" | "info" | "warning" | "error";

export function useSnackbar() {
  const [, setSnackbar] = useAtom(snackbarAtom);

  const showSnackbar = useCallback(
    (message: string, severity: SnackbarSeverity = "info") => {
      setSnackbar({ open: true, message, severity });
    },
    [setSnackbar]
  );

  const closeSnackbar = useCallback(() => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  }, [setSnackbar]);

  return { showSnackbar, closeSnackbar };
}
