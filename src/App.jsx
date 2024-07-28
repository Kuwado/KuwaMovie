// App.js
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import useFetchMovies from './hooks/useFetchMovies';
import useFetchGenres from './hooks/useFetchGenres';
import MovieList from './components/MovieList';

function App() {
  const genreMovies = useFetchGenres('movie');
  const genreTVs = useFetchGenres('tv');
  const bannerData = useFetchMovies('https://api.themoviedb.org/3/trending/all/day?language=vi&page=1');
  const popularMovies = useFetchMovies('https://api.themoviedb.org/3/movie/popular?language=vi&page=1');
  const popularTVs = useFetchMovies('https://api.themoviedb.org/3/tv/popular?language=vi&page=1');
  const topMovies = useFetchMovies('https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1');
  const topTVs = useFetchMovies('https://api.themoviedb.org/3/tv/top_rated?language=vi&page=1');

  return (
    <>
      <div className='box-border m-0 bg-bgDark'>
        <Header nav={'home'} />
        <section className='w-full'>
          <Banner movies={bannerData} genreMovies={genreMovies} genreTVs={genreTVs} />
          <MovieList title={'Phim lẻ phổ biến'} movies={popularMovies} />
          <MovieList title={'Phim bộ phổ biến'} movies={popularTVs} />
          <MovieList title={'Phim lẻ hot'} movies={topMovies} />
          <MovieList title={'Phim bộ hot'} movies={topTVs} />
        </section>
      </div>
    </>
  );
}

export default App;
