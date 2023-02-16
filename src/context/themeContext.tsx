import { PropsWithChildren, createContext, useState } from 'react';
import { ITheme, ThemeContextType, themeOptions } from '../types/theme';

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(themeOptions[0]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
