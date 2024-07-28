// App.js
import React from 'react';
import HomePage from './pages/HomePage';
import MediaPage from './pages/MediaPage';

function App() {


  return (
    <>
      <div className='box-border m-0 bg-bgDark'>
        {/* <HomePage /> */}
        <MediaPage type={'movie'} />
      </div>
    </>
  );
}

export default App;
