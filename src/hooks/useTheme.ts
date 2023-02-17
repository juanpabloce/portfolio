import { createTheme, ThemeOptions } from '@mui/material';
import { useEffect, useState } from 'react';

const customTheme = {
  palette: {
    primary: {
      main: '#3e8ffa',
      contrastText: '#fff',
    },
    secondary: {
      main: '#607d8b',
      contrastText: '#fff',
    },
    warning: {
      main: '#ef9f1b',
      contrastText: '#fff',
    },
  },
  shape: {
    borderRadius: 6,
  },
};

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeOptions>(customTheme);

  useEffect(() => {
    setTheme(customTheme);
  }, []);

  return { theme: createTheme(theme), setTheme };
};
