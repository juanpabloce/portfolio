import ReactDOM from 'react-dom/client';
import './assets/index.css';
import { ThemeProvider } from './context/themeContext';
import App from './components/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);
