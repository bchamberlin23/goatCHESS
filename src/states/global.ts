import { atom } from "jotai";

/**
 * Global application state atoms.
 * These are used across multiple sections/pages and belong outside
 * any single feature's states file.
 */

// Dark/light mode — persisted in localStorage by the layout component.
export const darkModeAtom = atom<boolean | null>(null);

// Global snackbar / toast notification system
export interface SnackbarState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error";
}

const defaultSnackbar: SnackbarState = {
  open: false,
  message: "",
  severity: "info",
};

export const snackbarAtom = atom<SnackbarState>(defaultSnackbar);
