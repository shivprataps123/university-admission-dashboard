import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

import {
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";

interface DashboardHeaderProps {
  onRefresh: () => void;
  isRefreshing: boolean;
}

const DashboardHeader = ({
  onRefresh,
  isRefreshing,
}: DashboardHeaderProps) => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      alignItems={{ xs: "flex-start", sm: "center" }}
      justifyContent="space-between"
      spacing={2}
    >
      <Stack
        direction="row"
        spacing={1.5}
        alignItems="center"
      >
        <Box
          aria-hidden="true"
          sx={{
            width: 46,
            height: 46,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "primary.main",
            color: "primary.contrastText",
            flexShrink: 0,
          }}
        >
          <SchoolRoundedIcon />
        </Box>

        <Box>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "1.75rem",
                md: "2rem",
              },
              lineHeight: 1.2,
            }}
          >
            Admission Analytics
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mt: 0.25,
            }}
          >
            Monitor university application performance and trends
          </Typography>
        </Box>
      </Stack>

      <Button
        aria-label="Refresh admission analytics"
        variant="outlined"
        startIcon={<RefreshRoundedIcon />}
        onClick={onRefresh}
        disabled={isRefreshing}
        sx={{
          minWidth: 100,
        }}
      >
        {isRefreshing ? "Refreshing..." : "Refresh"}
      </Button>
    </Stack>
  );
};

export default DashboardHeader;