"use client";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#181818',
      paper: '#23272f',
    },
    text: {
      primary: '#fff',
      secondary: '#b0b0b0',
    },
    grey: {
      200: '#23272f',
      300: '#2c313a',
    },
  },
});

export default function MuiThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
}
