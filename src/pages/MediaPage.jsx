import Banner from '../components/Banner';
import useFetchMovies from '../hooks/useFetchMovies';
import useFetchGenres from '../hooks/useFetchGenres';
import MediaList from '../components/MediaList';

const MediaPage = ({ type }) => {
    const genreMovies = useFetchGenres('movie');
    const genreTVs = useFetchGenres('tv');
    const bannerData = useFetchMovies(`https://api.themoviedb.org/3/trending/${type}/day?language=vi&page=1`);
    return (
        <>
            <section className='w-full'>
                <Banner movies={bannerData} genreMovies={genreMovies} genreTVs={genreTVs} />
                <MediaList type={type} />
            </section>
        </>
    )
}

export default MediaPage