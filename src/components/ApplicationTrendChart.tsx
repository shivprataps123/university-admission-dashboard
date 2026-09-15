import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Box } from "@mui/material";

import type { ApplicationTrend } from "../types/analytics";
import EmptyState from "./EmptyState";

interface ApplicationTrendChartProps {
  data: ApplicationTrend[];
}

const ApplicationTrendChart = ({
  data,
}: ApplicationTrendChartProps) => {
if (!data.length) {
  return (
    <EmptyState
      title="No trend data"
      message="No applications were recorded for the selected date range."
    />
  );
}

  return (
    <Box
      sx={{
        width: "100%",
        height: 320,
        mt: 2,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 10,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
          />

          <XAxis
            dataKey="date"
            tick={{
              fontSize: 12,
            }}
            tickLine={false}
            axisLine={false}
            minTickGap={20}
            tickFormatter={(value: string) => {
              const date = new Date(`${value}T00:00:00`);

              return date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              });
            }}
          />

          <YAxis
            tick={{
              fontSize: 12,
            }}
            tickLine={false}
            axisLine={false}
            allowDecimals={false}
          />

          <Tooltip
            labelFormatter={(value) => {
              const date = new Date(`${value}T00:00:00`);

              return date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              });
            }}
            formatter={(value) => [
              `${value} applications`,
              "Applications",
            ]}
          />

          <Line
            type="monotone"
            dataKey="applications"
            stroke="#2A9D8F"
            strokeWidth={3}
            dot={{
              r: 4,
            }}
            activeDot={{
              r: 6,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default ApplicationTrendChart;