// App.js
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import useFetchMovies from './hooks/useFetchMovies';
import useFetchGenres from './hooks/useFetchGenres';

function App() {
  const genreMovies = useFetchGenres('movie');
  const genreTVs = useFetchGenres('tv');
  const genres = { ...genreMovies, ...genreTVs};
  const bannerData = useFetchMovies('trending', 'all', 1);


  return (
    <>
      <div className='box-border m-0 bg-bgDark'>
        <Header />
        <section className='w-full'>
          <Banner movies={bannerData} genreMovies={genreMovies} genreTVs={genreTVs}/>
        </section>
      </div>
    </>
  );
}

export default App;
