import { ThemeProvider, Divider } from '@mui/material';
import { WelcomeHome } from '../WelcomeHome';
import { AboutMe } from '../AboutMe';
import { Companies } from '../Companies';
import { useTheme } from '../../hooks/useTheme';
import { Certifications } from '../Certifications';

const App = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <WelcomeHome />
      <Divider variant="middle" />
      <AboutMe />
      <Divider variant="middle" />
      <Companies />
      <Divider variant="middle" />
      <Certifications />
    </ThemeProvider>
  );
};

export default App;
