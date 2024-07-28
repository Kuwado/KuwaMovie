import PropTypes from 'prop-types';
import { FaCaretRight } from 'react-icons/fa6';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    all: {
        breakpoint: { max: 3000, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

const Banner = ({ movies, genreMovies, genreTVs }) => {

    return (
        <Carousel responsive={responsive} infinite={true} className='h-[700px]'>
            {movies.length > 0 && movies.map((movie) => {

                const genres = movie.media_type === 'movie' ? genreMovies : genreTVs;
                const genreNames = movie.genre_ids.map(id => {
                    const genre = genres.find(genre => genre.id === id);
                    return genre ? genre.name : null;
                }).filter(name => name !== null);

                return (
                    <div key={movie.id} className='bg-center bg-no-repeat bg-cover h-full relative cursor-grab' style={{ backgroundImage: `url(${import.meta.env.VITE_IMG_URL}${movie.backdrop_path})` }}>
                        <div className='w-full h-full absolute top-0 left-0 bg-bgGradient' />
                        <div className='w-10/12 h-full mx-auto top-0 z-2 relative flex'>
                            <div className='w-1/2 flex flex-col justify-center text-textDark gap-5'>
                                <h2 className='text-[60px] font-bold text-wrap break-words'>{movie.title || movie.original_title || movie.original_name}</h2>
                                <div className='flex space-x-3'>
                                    <span className='uppercase py-1 px-2 rounded-md border-extra border-2'>{movie.media_type}</span>
                                    {genreNames.length > 0 && genreNames.map((name, index) => (
                                        <span key={`${movie.id}-${index}`} className='py-1 px-2 rounded-md bg-extra text-textDark'>{name}</span>
                                    ))}
                                </div>
                                <div>{movie.overview}</div>
                                <a href="#" className='small-btn main-btn w-fit text-xl inline-flex items-center space-x-1'>
                                    <FaCaretRight />
                                    <span className='uppercase'>Xem ngay</span>
                                </a>
                            </div>
                            <div className='w-1/2 flex items-center justify-center bg-cover'>
                                <img src={`${import.meta.env.VITE_IMG_URL}${movie.poster_path}`} alt="avatar" 
                                className='w-[300px] h-[400px] hover:scale-125' />
                            </div>
                        </div>
                    </div>
                );
            })}
        </Carousel>
    );
};

Banner.propTypes = {
    movies: PropTypes.array,
    genreMovies: PropTypes.array,
    genreTVs: PropTypes.array,
};

export default Banner;
