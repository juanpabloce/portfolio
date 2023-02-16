export interface ITheme {
  color: string;
  backgroundColor: string;
}

export type ThemeContextType = {
  theme: ITheme;
  setTheme: (theme: ITheme) => void;
};

export const themeOptions: ITheme[] = [
  { color: 'black', backgroundColor: 'white' },
  { color: 'white', backgroundColor: '#18122B' },
];
