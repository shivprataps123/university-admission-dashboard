import { CircularProgress, Stack, Typography } from "@mui/material";

const LoadingState = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      spacing={2}
      sx={{
        minHeight: 300,
        width: "100%",
      }}
    >
      <CircularProgress
        size={36}
        thickness={4}
        color="primary"
      />

      <Typography
        variant="body2"
        color="text.secondary"
      >
        Loading admission analytics...
      </Typography>
    </Stack>
  );
};

export default LoadingState;