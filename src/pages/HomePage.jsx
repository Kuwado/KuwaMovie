import Banner from '../components/Banner';
import useFetchMedias from '../hooks/useFetchMedias';
import useFetchGenres from '../hooks/useFetchGenres';
import MediaSlide from '../components/MediaSlide';

const HomePage = () => {
    const genreMovies = useFetchGenres('movie');
    const genreTVs = useFetchGenres('tv');
    const bannerData = useFetchMedias('https://api.themoviedb.org/3/trending/all/day?language=vi&page=1');
    const popularMovies = useFetchMedias('https://api.themoviedb.org/3/movie/popular?language=vi&page=1');
    const popularTVs = useFetchMedias('https://api.themoviedb.org/3/tv/popular?language=vi&page=1');
    const topMovies = useFetchMedias('https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1');
    const topTVs = useFetchMedias('https://api.themoviedb.org/3/tv/top_rated?language=vi&page=1');

    return (
        <>
            <section className='w-full'>
                <Banner medias={bannerData} genreMovies={genreMovies} genreTVs={genreTVs} />
                <MediaSlide title={'Phim lẻ phổ biến'} medias={popularMovies} type={'movie'} />
                <MediaSlide title={'Phim bộ phổ biến'} medias={popularTVs} type={'tv'} />
                <MediaSlide title={'Phim lẻ hot'} medias={topMovies} type={'movie'} />
                <MediaSlide title={'Phim bộ hot'} medias={topTVs} type={'tv'} />
            </section>
        </>
    )
}

export default HomePage