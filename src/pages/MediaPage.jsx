import Header from '../components/Header';
import Banner from '../components/Banner';
import useFetchMovies from '../hooks/useFetchMovies';
import useFetchGenres from '../hooks/useFetchGenres';
import MediaList from '../components/MediaList';
const MediaPage = ({ type }) => {
    const genreMovies = useFetchGenres('movie');
    const genreTVs = useFetchGenres('tv');
    const bannerData = useFetchMovies(`https://api.themoviedb.org/3/trending/${type}/day?language=vi&page=1`);
    const popularMedias = useFetchMovies(`https://api.themoviedb.org/3/${type}/popular?language=vi&page=1`);
    const topMedias = useFetchMovies(`https://api.themoviedb.org/3/${type}/top_rated?language=vi&page=1`);
    let title1, title2;
    if (type === 'movie') {
        title1 = 'Phim lẻ phổ biến';
        title2 = 'Phim lẻ hot';
    } else if (type === 'tv') {
        title1 = 'Phim bộ phổ biến';
        title2 = 'Phim bộ hot';
    }

    return (
        <>
            <Header nav={type} />
            <section className='w-full'>
                <Banner movies={bannerData} genreMovies={genreMovies} genreTVs={genreTVs} />
                <MediaList type={'movie'} />
            </section>
        </>
    )
}

export default MediaPage