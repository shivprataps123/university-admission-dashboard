import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import DashboardHeader from "../components/DashboardHeader";
import MetricCard from "../components/MetricCard";
import ApplicationBarChart from "../components/ApplicationBarChart";
import ApplicationTrendChart from "../components/ApplicationTrendChart";
import DateRangeFilter from "../components/DateRangeFilter";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";
import EmptyState from "../components/EmptyState";

import { getAdmissionAnalytics } from "../api/analytics";
import type { AdmissionAnalytics } from "../types/analytics";

const AdmissionDashboard = () => {
  const [analytics, setAnalytics] =
    useState<AdmissionAnalytics | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const isInvalidDateRange = Boolean(
    fromDate &&
      toDate &&
      fromDate > toDate,
  );

  const fetchAnalytics = useCallback(async () => {
    try {
      setError(null);

      const data = await getAdmissionAnalytics();

      setAnalytics(data);
    } catch (error) {
      console.error(
        "Failed to fetch admission analytics:",
        error,
      );

      setError(
        "Unable to load admission analytics. Please try again.",
      );
    }
  }, []);

  useEffect(() => {
    const loadInitialData = async () => {
      setIsLoading(true);

      try {
        await fetchAnalytics();
      } finally {
        setIsLoading(false);
      }
    };

    loadInitialData();
  }, [fetchAnalytics]);

  const handleRefresh = async () => {
    setIsRefreshing(true);

    try {
      await fetchAnalytics();
    } finally {
      setIsRefreshing(false);
    }
  };

  const filteredApplicationTrends = useMemo(() => {
    if (!analytics || isInvalidDateRange) {
      return [];
    }

    return analytics.applicationTrends.filter((item) => {
      const isAfterFromDate =
        !fromDate || item.date >= fromDate;

      const isBeforeToDate =
        !toDate || item.date <= toDate;

      return isAfterFromDate && isBeforeToDate;
    });
  }, [
    analytics,
    fromDate,
    toDate,
    isInvalidDateRange,
  ]);

  const hasDashboardData = Boolean(
    analytics &&
      (
        analytics.totalApplicants > 0 ||
        analytics.verifiedApplicants > 0 ||
        analytics.rejectedApplicants > 0 ||
        analytics.applicationsPerProgram.length > 0 ||
        analytics.applicationTrends.length > 0
      ),
  );

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        py: {
          xs: 3,
          md: 5,
        },
      }}
    >
      <Container maxWidth="xl">
        <Stack
          spacing={{
            xs: 3,
            md: 4,
          }}
        >
          <DashboardHeader
            onRefresh={handleRefresh}
            isRefreshing={isRefreshing}
          />

          {/* Initial loading */}
          {isLoading && <LoadingState />}

          {/* API error */}
          {error && !isLoading && (
            <ErrorState
              message={error}
              onRetry={handleRefresh}
              isRetrying={isRefreshing}
            />
          )}

          {/* Successful response but no data */}
          {analytics &&
            !isLoading &&
            !error &&
            !hasDashboardData && (
              <EmptyState
                title="No admission data available"
                message="There is currently no admission data to display."
              />
            )}

          {/* Dashboard */}
          {analytics &&
            !isLoading &&
            !error &&
            hasDashboardData && (
              <>
                {/* Metric Cards */}
                <Grid container spacing={3}>
                  <Grid
                    size={{
                      xs: 12,
                      sm: 6,
                      md: 4,
                    }}
                  >
                    <MetricCard
                      title="Total Applicants"
                      value={analytics.totalApplicants}
                      type="total"
                    />
                  </Grid>

                  <Grid
                    size={{
                      xs: 12,
                      sm: 6,
                      md: 4,
                    }}
                  >
                    <MetricCard
                      title="Verified Applicants"
                      value={analytics.verifiedApplicants}
                      type="verified"
                    />
                  </Grid>

                  <Grid
                    size={{
                      xs: 12,
                      sm: 6,
                      md: 4,
                    }}
                  >
                    <MetricCard
                      title="Rejected Applicants"
                      value={analytics.rejectedApplicants}
                      type="rejected"
                    />
                  </Grid>
                </Grid>

                {/* Charts */}
                <Grid container spacing={3}>
                  {/* Program Applications */}
                  <Grid
                    size={{
                      xs: 12,
                      md: 6,
                    }}
                  >
                    <Paper
                      component="section"
                      sx={{
                        p: {
                          xs: 2,
                          sm: 3,
                        },
                        minHeight: 400,
                        height: "100%",
                      }}
                    >
                      <Typography variant="h6">
                        Applications per Program
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 0.5 }}
                      >
                        Distribution of applications across
                        academic programs
                      </Typography>

                      <ApplicationBarChart
                        data={
                          analytics.applicationsPerProgram
                        }
                      />
                    </Paper>
                  </Grid>

                  {/* Application Trends */}
                  <Grid
                    size={{
                      xs: 12,
                      md: 6,
                    }}
                  >
                    <Paper
                      component="section"
                      sx={{
                        p: {
                          xs: 2,
                          sm: 3,
                        },
                        minHeight: 400,
                        height: "100%",
                      }}
                    >
                      <Typography variant="h6">
                        Application Trends
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 0.5 }}
                      >
                        Daily application volume over the
                        selected period
                      </Typography>

                      <DateRangeFilter
                        fromDate={fromDate}
                        toDate={toDate}
                        onFromDateChange={setFromDate}
                        onToDateChange={setToDate}
                      />

                      {isInvalidDateRange && (
                        <Typography
                          variant="body2"
                          color="error"
                          sx={{ mt: 1 }}
                        >
                          The "From" date must be earlier
                          than the "To" date.
                        </Typography>
                      )}

                      <ApplicationTrendChart
                        data={filteredApplicationTrends}
                      />
                    </Paper>
                  </Grid>
                </Grid>
              </>
            )}
        </Stack>
      </Container>
    </Box>
  );
};

export default AdmissionDashboard;