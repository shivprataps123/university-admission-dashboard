import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";

import {
  Button,
  Stack,
  Typography,
} from "@mui/material";

interface ErrorStateProps {
  message: string;
  onRetry: () => void;
  isRetrying?: boolean;
}

const ErrorState = ({
  message,
  onRetry,
  isRetrying = false,
}: ErrorStateProps) => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      spacing={2}
      sx={{
        minHeight: 300,
        width: "100%",
        textAlign: "center",
        px: 2,
      }}
    >
      <ErrorOutlineRoundedIcon
        color="error"
        sx={{
          fontSize: 48,
        }}
      />

      <Typography variant="h6">
        Something went wrong
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          maxWidth: 420,
        }}
      >
        {message}
      </Typography>

      <Button
        variant="outlined"
        startIcon={<RefreshRoundedIcon />}
        onClick={onRetry}
        disabled={isRetrying}
      >
        {isRetrying ? "Retrying..." : "Try Again"}
      </Button>
    </Stack>
  );
};

export default ErrorState;