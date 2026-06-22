import { Box, Stack, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

export default function SiteFooter() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 3,
        px: 2,
        borderTop: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.06)"
            : "rgba(0,0,0,0.06)",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        sx={{ maxWidth: 1100, mx: "auto" }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography
            fontSize="0.82rem"
            color="text.secondary"
            fontWeight={500}
          >
            Chesskit — Free &amp; open source
          </Typography>
          <Typography
            fontSize="0.75rem"
            color="text.secondary"
            sx={{ opacity: 0.6 }}
          >
            •
          </Typography>
          <Typography
            fontSize="0.75rem"
            color="text.secondary"
            sx={{ opacity: 0.6 }}
          >
            AGPL-3.0
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={2}>
          <Box
            component="a"
            href="https://github.com/GuillaumeSD/Chesskit"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              color: "text.secondary",
              textDecoration: "none",
              fontSize: "0.8rem",
              fontWeight: 500,
              transition: "color 0.15s",
              "&:hover": { color: "primary.main" },
            }}
          >
            <Icon icon="mdi:github" width={16} />
            GitHub
          </Box>

          <Typography
            fontSize="0.75rem"
            color="text.secondary"
            sx={{ opacity: 0.5 }}
          >
            Press{" "}
            <Box
              component="kbd"
              sx={{
                display: "inline-block",
                px: 0.5,
                borderRadius: 0.5,
                border: "1px solid",
                borderColor: "divider",
                fontSize: "0.7rem",
                fontFamily: "'Inter', monospace",
                fontWeight: 600,
              }}
            >
              ?
            </Box>{" "}
            for shortcuts
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
