import { useContext } from 'react';
import Header from './components/Header';
import KuwaMovieRouter from "./routes/KuwaMovieRouter";
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`box-border m-0 tl:text-base mb:text-sm ${theme ? 'text-textLight bg-mainLight' : 'text-textDark bg-mainDark'}`}>
      <Header />
      <KuwaMovieRouter />
    </div>
  );
}

export default App;
