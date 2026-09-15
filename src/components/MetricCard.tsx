import { useEffect, useState } from "react";

import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

interface MetricCardProps {
  title: string;
  value: number;
  type: "total" | "verified" | "rejected";
}

interface MetricColor {
  main: "error.main" | "warning.main" | "primary.main";
}

const metricDescriptions = {
  total: "All submitted applications",
  verified: "Successfully verified applications",
  rejected: "Applications that were rejected",
};

const ANIMATION_DURATION = 1000;

const MetricCard = ({
  title,
  value,
  type,
}: MetricCardProps) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    const startTime = performance.now();

    const animateValue = (currentTime: number) => {
      const elapsed = currentTime - startTime;

      const progress = Math.min(
        elapsed / ANIMATION_DURATION,
        1,
      );

      // Ease-out animation
      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      const currentValue = Math.round(
        value * easedProgress,
      );

      setDisplayValue(currentValue);

      if (progress < 1) {
        animationFrameId =
          requestAnimationFrame(animateValue);
      }
    };

    animationFrameId =
      requestAnimationFrame(animateValue);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [value]);

  const getMetricColor = (): MetricColor => {
    if (value > 1000) {
      return {
        main: "error.main",
      };
    }

    if (value > 500) {
      return {
        main: "warning.main",
      };
    }

    return {
      main: "primary.main"
    };
  };

  const getIcon = () => {
    switch (type) {
      case "verified":
        return <VerifiedRoundedIcon />;

      case "rejected":
        return <CancelRoundedIcon />;

      default:
        return <PeopleAltRoundedIcon />;
    }
  };

  const color = getMetricColor();

  return (
    <Card
      component="section"
      sx={{
        height: "100%",
        transition:
          "box-shadow 0.2s ease, transform 0.2s ease",

        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow:
            "0 6px 18px rgba(15, 45, 68, 0.10)",
        },
      }}
    >
      <CardContent
        sx={{
          p: {
            xs: 2.5,
            sm: 3,
          },

          "&:last-child": {
            pb: {
              xs: 2.5,
              sm: 3,
            },
          },
        }}
      >
        <Stack spacing={2.5}>
          {/* Title + Icon */}
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight={600}
            >
              {title}
            </Typography>

            <Box
              aria-hidden="true"
              sx={{
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                color: color.main,

                flexShrink: 0,

                "& svg": {
                  fontSize: 20,
                },
              }}
            >
              {getIcon()}
            </Box>
          </Stack>

          {/* Animated Value */}
          <Typography
            variant="h4"
            component="p"
            sx={{
              color: color.main,
              fontWeight: 700,
              lineHeight: 1.1,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {displayValue.toLocaleString()}
          </Typography>

          {/* Description */}
          <Typography
            variant="body2"
            color="text.secondary"
          >
            {metricDescriptions[type]}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default MetricCard;