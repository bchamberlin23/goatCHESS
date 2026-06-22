import {
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { PropsWithChildren, useMemo, useEffect } from "react";
import NavBar from "./NavBar";
import SiteFooter from "./SiteFooter";
import KeyboardShortcutsDialog from "@/components/KeyboardShortcutsDialog";
import GlobalSnackbar from "@/components/GlobalSnackbar";
import { useGlobalShortcuts } from "@/hooks/useGlobalShortcuts";
import { useAtom } from "jotai";
import { darkModeAtom } from "@/states/global";
import { MAIN_THEME_COLOR } from "@/constants";

const globalStyles = (
  <GlobalStyles
    styles={{
      "@import":
        "url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap')",
      "*": {
        scrollbarWidth: "thin",
      },
      body: {
        fontFamily: "'Inter', sans-serif !important",
      },
    }}
  />
);

export default function Layout({ children }: PropsWithChildren) {
  const [isDarkMode, setDarkMode] = useAtom(darkModeAtom);
  const { shortcutsOpen, setShortcutsOpen } = useGlobalShortcuts();

  useEffect(() => {
    const item = window.localStorage.getItem("useDarkMode");
    if (item) {
      try {
        const value = JSON.parse(item);
        setDarkMode(value ?? true);
      } catch {
        setDarkMode(true);
      }
    } else {
      setDarkMode(true);
    }
  }, [setDarkMode]);

  useEffect(() => {
    if (isDarkMode !== null) {
      window.localStorage.setItem("useDarkMode", JSON.stringify(isDarkMode));
    }
  }, [isDarkMode]);

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: "'Inter', 'Roboto', sans-serif",
          h6: { fontWeight: 700, letterSpacing: "-0.01em" },
          body1: { letterSpacing: "-0.005em" },
          body2: { letterSpacing: "-0.005em" },
          button: { fontWeight: 600, letterSpacing: "0.01em" },
        },
        shape: {
          borderRadius: 10,
        },
        palette: {
          mode: isDarkMode ? "dark" : "light",
          error: {
            main: "#e57373",
          },
          primary: {
            main: MAIN_THEME_COLOR,
          },
          secondary: {
            main: isDarkMode ? "#1e1e22" : "#f5f5f5",
          },
          background: {
            default: isDarkMode ? "#111113" : "#f0f0f2",
            paper: isDarkMode ? "#1a1a1e" : "#ffffff",
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 8,
                textTransform: "none" as const,
                fontWeight: 600,
                boxShadow: "none",
                "&:hover": {
                  boxShadow: "none",
                },
              },
              contained: {
                background: `linear-gradient(135deg, ${MAIN_THEME_COLOR}, #b8944f)`,
                color: "#1a1a1e",
                "&:hover": {
                  background: `linear-gradient(135deg, #d4b87a, ${MAIN_THEME_COLOR})`,
                },
              },
              outlined: {
                borderColor: isDarkMode
                  ? "rgba(255,255,255,0.12)"
                  : "rgba(0,0,0,0.12)",
                "&:hover": {
                  borderColor: MAIN_THEME_COLOR,
                  backgroundColor: isDarkMode
                    ? "rgba(201,169,110,0.08)"
                    : "rgba(201,169,110,0.06)",
                },
              },
            },
          },
          MuiDialog: {
            styleOverrides: {
              paper: {
                backgroundImage: "none",
                borderRadius: 16,
                border: isDarkMode
                  ? "1px solid rgba(255,255,255,0.06)"
                  : "1px solid rgba(0,0,0,0.06)",
                backgroundColor: isDarkMode ? "#1a1a1e" : "#ffffff",
              },
            },
          },
          MuiDrawer: {
            styleOverrides: {
              paper: {
                backgroundImage: "none",
                backgroundColor: isDarkMode ? "#141416" : "#fafafa",
                borderRight: isDarkMode
                  ? "1px solid rgba(255,255,255,0.06)"
                  : "1px solid rgba(0,0,0,0.06)",
              },
            },
          },
          MuiFab: {
            styleOverrides: {
              root: {
                boxShadow: isDarkMode
                  ? "0 4px 20px rgba(0,0,0,0.4)"
                  : "0 4px 20px rgba(0,0,0,0.12)",
              },
            },
          },
          MuiTab: {
            styleOverrides: {
              root: {
                textTransform: "none" as const,
                fontWeight: 500,
                fontSize: "0.85rem",
                letterSpacing: "0",
              },
            },
          },
          MuiTabs: {
            styleOverrides: {
              indicator: {
                backgroundColor: MAIN_THEME_COLOR,
                height: 2.5,
                borderRadius: "2px 2px 0 0",
              },
            },
          },
          MuiSelect: {
            styleOverrides: {
              root: {
                borderRadius: 8,
              },
            },
          },
          MuiOutlinedInput: {
            styleOverrides: {
              root: {
                borderRadius: 8,
              },
            },
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                backgroundImage: "none",
              },
            },
          },
          MuiTooltip: {
            styleOverrides: {
              tooltip: {
                borderRadius: 6,
                fontSize: "0.75rem",
                fontWeight: 500,
              },
            },
          },
        },
      }),
    [isDarkMode]
  );

  if (isDarkMode === null) return null;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}
      <NavBar darkMode={!!isDarkMode} />
      <main style={{ margin: "1.5vh 1vw", minHeight: "calc(100vh - 120px)" }}>
        {children}
      </main>
      <SiteFooter />
      <KeyboardShortcutsDialog
        open={shortcutsOpen}
        onClose={() => setShortcutsOpen(false)}
      />
      <GlobalSnackbar />
    </ThemeProvider>
  );
}
