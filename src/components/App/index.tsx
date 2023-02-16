import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="app" style={theme}>
      Hello World
    </div>
  );
};

export default App;
