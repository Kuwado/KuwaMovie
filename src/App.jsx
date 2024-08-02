import React from 'react';
import Header from './components/Header';
import KuwaMovieRouter from "./routes/KuwaMovieRouter";
import { MenuProvider } from './context/MenuContext';

function App() {
  return (
    <MenuProvider>
      <div className='box-border m-0 bg-mainDark tl:text-base mb:text-sm text-textDark'>
        <Header />
        <KuwaMovieRouter />
      </div>
    </MenuProvider>
  );
}

export default App;
