import React from 'react';
import Header from './components/Header';
import KuwaMovieRouter from "./routes/KuwaMovieRouter";

function App() {
  return (
    <div className='box-border m-0 bg-mainDark'>
      <Header />
      <KuwaMovieRouter />
    </div>
  );
}

export default App;
