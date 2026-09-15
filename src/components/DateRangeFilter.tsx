import { Stack, TextField } from "@mui/material";

interface DateRangeFilterProps {
  fromDate: string;
  toDate: string;
  onFromDateChange: (date: string) => void;
  onToDateChange: (date: string) => void;
}

const DateRangeFilter = ({
  fromDate,
  toDate,
  onFromDateChange,
  onToDateChange,
}: DateRangeFilterProps) => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={1.5}
      sx={{
        mt: 2,
      }}
    >
      <TextField
        label="From"
        type="date"
        value={fromDate}
        onChange={(event) => onFromDateChange(event.target.value)}
        slotProps={{
          inputLabel: {
            shrink: true,
          },
        }}
        fullWidth
      />

      <TextField
        label="To"
        type="date"
        value={toDate}
        onChange={(event) => onToDateChange(event.target.value)}
        slotProps={{
          inputLabel: {
            shrink: true,
          },
        }}
        fullWidth
      />
    </Stack>
  );
};

export default DateRangeFilter;