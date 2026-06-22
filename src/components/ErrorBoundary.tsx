import { Component, ErrorInfo, ReactNode } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { Icon } from "@iconify/react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "60vh",
            px: 3,
          }}
        >
          <Stack
            spacing={3}
            alignItems="center"
            textAlign="center"
            maxWidth={400}
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(229, 115, 115, 0.1)",
                color: "#e57373",
              }}
            >
              <Icon icon="mdi:alert-circle" width={36} />
            </Box>
            <Typography variant="h6" fontWeight={700}>
              Something went wrong
            </Typography>
            <Typography variant="body2" color="text.secondary">
              An unexpected error occurred. This page will recover when you
              refresh.
            </Typography>
            <Button
              variant="outlined"
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.reload();
              }}
              startIcon={<Icon icon="mdi:refresh" />}
              sx={{ borderRadius: 2 }}
            >
              Refresh page
            </Button>
          </Stack>
        </Box>
      );
    }

    return this.props.children;
  }
}
