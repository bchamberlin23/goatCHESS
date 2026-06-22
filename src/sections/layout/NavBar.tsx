import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useEffect, useState } from "react";
import NavMenu from "./NavMenu";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import NavLink from "@/components/NavLink";
import Image from "next/image";
import { useAtom } from "jotai";
import { darkModeAtom } from "@/states/global";

interface Props {
  darkMode: boolean;
}

export default function NavBar({ darkMode }: Props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [, setDarkMode] = useAtom(darkModeAtom);
  const router = useRouter();

  useEffect(() => {
    setDrawerOpen(false);
  }, [router.pathname]);

  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: darkMode
            ? "rgba(17, 17, 19, 0.85)"
            : "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(16px)",
          color: darkMode ? "#e8e6e1" : "#1a1a1e",
          borderBottom: darkMode
            ? "1px solid rgba(255, 255, 255, 0.06)"
            : "1px solid rgba(0, 0, 0, 0.06)",
        }}
        enableColorOnDark
      >
        <Toolbar variant="dense" sx={{ minHeight: 48 }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: "min(0.5vw, 0.6rem)",
              padding: 0.75,
              my: 0.75,
              borderRadius: 2,
              "&:hover": {
                backgroundColor: darkMode
                  ? "rgba(255,255,255,0.06)"
                  : "rgba(0,0,0,0.04)",
              },
            }}
            onClick={() => setDrawerOpen((val) => !val)}
          >
            <Icon icon="mdi:menu" width={20} />
          </IconButton>

          <Image
            src="/favicon-32x32.png"
            alt="Chesskit logo"
            width={24}
            height={24}
          />

          <NavLink href="/">
            <Typography
              variant="h6"
              component="div"
              sx={{
                ml: 0.75,
                fontSize: { xs: "0.9rem", sm: "1rem" },
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              Chesskit
            </Typography>
          </NavLink>

          <Box flexGrow={1} />

          <Tooltip
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            <IconButton
              size="small"
              onClick={() => setDarkMode(!darkMode)}
              sx={{
                mr: 0.5,
                borderRadius: 1.5,
                color: darkMode ? "#e8e6e1" : "text.secondary",
                "&:hover": {
                  backgroundColor: darkMode
                    ? "rgba(255,255,255,0.06)"
                    : "rgba(0,0,0,0.04)",
                },
              }}
            >
              <Icon
                icon={darkMode ? "mdi:weather-night" : "mdi:weather-sunny"}
                width={18}
              />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <NavMenu open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </Box>
  );
}
