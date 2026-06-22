import { IconButton, Tooltip, Box } from "@mui/material";
import { Icon } from "@iconify/react";

interface Props {
  tooltip: string;
  icon: string;
  onClick?: () => void;
  disabled?: boolean;
  iconHeight?: number;
  shortcut?: string;
}

export const ToolbarButton = ({
  tooltip,
  icon,
  onClick,
  disabled = false,
  iconHeight = 24,
  shortcut,
}: Props) => {
  const paddingX = `${Math.round(20 - (iconHeight - 24) / 2)}px`;

  const tooltipContent = shortcut ? `${tooltip} (${shortcut})` : tooltip;

  return (
    <Tooltip title={tooltipContent}>
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <IconButton
          onClick={onClick}
          disabled={disabled}
          sx={{
            paddingX,
            borderRadius: "8px",
            width: "auto",
            height: "46px",
          }}
        >
          <Icon icon={icon} height={iconHeight} />
        </IconButton>
        {shortcut && (
          <Box
            sx={{
              position: "absolute",
              bottom: 2,
              right: 4,
              fontSize: "0.55rem",
              fontWeight: 700,
              lineHeight: 1,
              px: 0.4,
              py: 0.1,
              borderRadius: 0.5,
              border: "1px solid",
              borderColor: "divider",
              backgroundColor: (theme) =>
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(0,0,0,0.06)",
              color: "text.secondary",
              opacity: 0.7,
            }}
          >
            {shortcut}
          </Box>
        )}
      </Box>
    </Tooltip>
  );
};
