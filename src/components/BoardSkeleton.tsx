import { Skeleton, Box, Stack } from "@mui/material";

interface Props {
  height?: number;
}

export default function BoardSkeleton({ height = 500 }: Props) {
  return (
    <Box
      sx={{
        width: height,
        height,
        position: "relative",
        borderRadius: 1,
        overflow: "hidden",
      }}
    >
      <Skeleton
        variant="rectangular"
        width="100%"
        height="100%"
        animation="wave"
        sx={{ bgcolor: "rgba(255,255,255,0.04)" }}
      />
      <Stack
        spacing={0.5}
        sx={{
          position: "absolute",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          alignItems: "center",
        }}
      >
        <Skeleton
          variant="rounded"
          width={140}
          height={16}
          sx={{ bgcolor: "rgba(255,255,255,0.08)" }}
        />
        <Skeleton
          variant="rounded"
          width={100}
          height={12}
          sx={{ bgcolor: "rgba(255,255,255,0.05)" }}
        />
      </Stack>
    </Box>
  );
}
