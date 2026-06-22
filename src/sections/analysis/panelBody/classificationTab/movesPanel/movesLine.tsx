import { MoveClassification } from "@/types/enums";
import { Box, Typography } from "@mui/material";
import MoveItem from "./moveItem";

interface Props {
  moves: { san: string; moveClassification?: MoveClassification }[];
  moveNb: number;
}

export default function MovesLine({ moves, moveNb }: Props) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "2.5rem 1fr 1fr",
        alignItems: "center",
        width: "100%",
        paddingY: 0.25,
        borderRadius: 0.5,
        "&:hover": {
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? "rgba(255, 255, 255, 0.02)"
              : "rgba(0, 0, 0, 0.02)",
        },
      }}
    >
      <Typography
        color="text.secondary"
        fontSize="0.85rem"
        fontWeight={600}
        sx={{ paddingLeft: 0.75 }}
      >
        {moveNb}.
      </Typography>

      <MoveItem {...moves[0]} moveIdx={(moveNb - 1) * 2 + 1} moveColor="w" />

      {moves[1] ? (
        <MoveItem {...moves[1]} moveIdx={(moveNb - 1) * 2 + 2} moveColor="b" />
      ) : (
        <Box />
      )}
    </Box>
  );
}
