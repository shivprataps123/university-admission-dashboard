import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  Box,
  Typography,
} from "@mui/material";

import type { ProgramApplication } from "../types/analytics";

interface ApplicationBarChartProps {
  data: ProgramApplication[];
}

const ApplicationBarChart = ({
  data,
}: ApplicationBarChartProps) => {
  if (!data.length) {
    return (
      <Box
        sx={{
          minHeight: 320,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography color="text.secondary">
          No program application data available.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: 320,
        mt: 3,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
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
            dataKey="program"
            tick={{
              fontSize: 12,
            }}
            tickLine={false}
            axisLine={false}
            interval={0}
            angle={-18}
            textAnchor="end"
            height={65}
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
            cursor={{
              fill: "rgba(23, 63, 95, 0.05)",
            }}
            formatter={(value) => [
              `${value} applications`,
              "Applications",
            ]}
          />

          <Bar
            dataKey="applications"
            fill="#173F5F"
            radius={[6, 6, 0, 0]}
            maxBarSize={48}
          />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default ApplicationBarChart;