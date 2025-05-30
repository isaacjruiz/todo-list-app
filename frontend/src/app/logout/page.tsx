"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    Cookies.remove('token');
    Cookies.remove('user');
    router.replace('/login');
  }, [router]);

  return (
    <ThemeProvider theme={darkTheme}>
    </ThemeProvider>
  );
}
