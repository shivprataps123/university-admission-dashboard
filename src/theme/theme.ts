import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#173F5F',
      dark: '#0F2D44',
      light: '#2F5D7C',
      contrastText: '#FFFFFF',
    },

    secondary: {
      main: '#2A9D8F',
      dark: '#217A70',
      light: '#4DB6A9',
      contrastText: '#FFFFFF',
    },

    background: {
      default: '#F5F7FA',
      paper: '#FFFFFF',
    },

    text: {
      primary: '#172B4D',
      secondary: '#5E6C84',
    },

    success: {
      main: '#2E7D32',
    },

    warning: {
      main: '#ED8B00',
    },

    error: {
      main: '#D32F2F',
    },

    divider: '#E2E8F0',
  },

  typography: {
    fontFamily: [
      'Inter',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),

    h4: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },

    h5: {
      fontWeight: 700,
      letterSpacing: '-0.015em',
    },

    h6: {
      fontWeight: 600,
    },

    body1: {
      lineHeight: 1.6,
    },

    body2: {
      lineHeight: 1.5,
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid #E2E8F0',
          boxShadow: '0 2px 8px rgba(15, 45, 68, 0.06)',
          borderRadius: 12,
          backgroundImage: "none",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        size: 'small',
      },
    },
  },
});