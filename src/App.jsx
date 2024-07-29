import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';

function App() {
  return (
      <div>
        <Header nav={'home'} />
        {/* <HomePage /> */}
      </div>
  );
}

export default App;
