import NavLink from "@/components/NavLink";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

const MenuOptions = [
  { text: "Home", icon: "mdi:home", href: "/" },
  { text: "Play", icon: "streamline:chess-pawn", href: "/play" },
  { text: "Puzzles", icon: "mdi:puzzle", href: "/puzzles" },
  {
    text: "Analysis",
    icon: "streamline:magnifying-glass-solid",
    href: "/analysis",
  },
  {
    text: "Insights",
    icon: "mdi:chart-box",
    href: "/insights",
  },
  {
    text: "Learn",
    icon: "mdi:school",
    href: "/learn",
  },
  {
    text: "Database",
    icon: "streamline:database",
    href: "/database",
  },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function NavMenu({ open, onClose }: Props) {
  const router = useRouter();

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Toolbar />
      <Box sx={{ width: 240, overflow: "hidden", paddingTop: 1 }}>
        <Typography
          color="text.secondary"
          sx={{
            fontSize: "0.65rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            paddingX: 3,
            paddingY: 1,
          }}
        >
          NAVIGATION
        </Typography>
        <List>
          {MenuOptions.map(({ text, icon, href }) => {
            const isActive = router.pathname === href;
            return (
              <ListItem key={text} disablePadding sx={{ px: 1, py: 0.25 }}>
                <NavLink href={href}>
                  <ListItemButton
                    onClick={onClose}
                    sx={{
                      borderRadius: 2,
                      backgroundColor: isActive
                        ? "rgba(201, 169, 110, 0.12)"
                        : "transparent",
                      borderLeft: isActive
                        ? "3px solid #C9A96E"
                        : "3px solid transparent",
                      color: isActive ? "#C9A96E" : "text.primary",
                      paddingLeft: 1.5,
                      "&:hover": {
                        backgroundColor: isActive
                          ? "rgba(201, 169, 110, 0.18)"
                          : "rgba(201, 169, 110, 0.08)",
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 36,
                        color: isActive ? "#C9A96E" : "inherit",
                      }}
                    >
                      <Icon icon={icon} height="1.2em" />
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      primaryTypographyProps={{
                        fontSize: "0.88rem",
                        fontWeight: isActive ? 600 : 500,
                      }}
                    />
                  </ListItemButton>
                </NavLink>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
}
