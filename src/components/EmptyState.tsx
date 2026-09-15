import InboxRoundedIcon from "@mui/icons-material/InboxRounded";

import {
  Stack,
  Typography,
} from "@mui/material";

interface EmptyStateProps {
  title?: string;
  message?: string;
}

const EmptyState = ({
  title = "No data available",
  message = "There is no admission data to display.",
}: EmptyStateProps) => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      spacing={1}
      sx={{
        minHeight: 300,
        width: "100%",
        textAlign: "center",
        px: 2,
      }}
    >
      <InboxRoundedIcon
        sx={{
          fontSize: 48,
          color: "text.secondary",
        }}
      />

      <Typography variant="h6">
        {title}
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
    </Stack>
  );
};

export default EmptyState;