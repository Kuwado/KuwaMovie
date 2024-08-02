import PropTypes from 'prop-types';
import { FaCaretRight } from 'react-icons/fa6';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

const responsive = {
    desktop: {
        breakpoint: { max: 4000, min: 1280 },
        items: 1,
    },
    laptop: {
        breakpoint: { max: 1280, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 1,
    },
    minitablet: {
        breakpoint: { max: 768, min: 480 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 480, min: 0 },
        items: 1,
    },
};

const Banner = ({ medias, genreMovies, genreTVs }) => {

    return (
        <Carousel responsive={responsive} infinite={true} removeArrowOnDeviceType={["tablet", "minitablet", "mobile"]} className='lt:h-[100vh] mb:h-fit'>
            {medias.length > 0 && medias.map((media) => {

                const genres = media.media_type === 'movie' ? genreMovies : genreTVs;
                const genreNames = media.genre_ids.map(id => {
                    const genre = genres.find(genre => genre.id === id);
                    return genre ? genre.name : null;
                }).filter(name => name !== null);

                return (
                    <div key={media.id} className='bg-center bg-no-repeat bg-cover h-full relative cursor-grab' style={{ backgroundImage: `url(${import.meta.env.VITE_IMG_URL}${media.backdrop_path})` }}>
                        <div className='w-full h-full absolute top-0 left-0 bg-bgGradient' />
                        <div className='w-10/12 h-full mx-auto top-0 z-20 relative flex items-center justify-center gap-5 lt:flex-row mb:flex-col-reverse'>
                            <div className='lt:w-1/2 mb:w-full flex flex-col justify-center gap-5 mb:items-center lt:items-start'>
                                <h2 className='lt:text-[60px] lt:leading-[68px] mb:text-[52px] mb:leading-[60px] font-bold text-wrap break-words h-fit'>{media.title || media.original_title || media.original_name}</h2>
                                <div className='flex space-x-3'>
                                    <span className='uppercase py-1 px-2 rounded-md border-extra border-2 flex items-center justify-center'>{media.media_type}</span>
                                    {genreNames.length > 0 && genreNames.map((name, index) => (
                                        <span key={`${media.id}-${index}`} className='py-1 px-2 rounded-md bg-extra flex items-center justify-center'>{name}</span>
                                    ))}
                                </div>
                                <div>{media.overview}</div>
                                <Link to={`/${media.media_type}/${media.id}`} className='small-btn main-btn w-fit text-xl inline-flex items-center space-x-1'>
                                    <FaCaretRight />
                                    <span className='uppercase'>Xem ngay</span>
                                </Link>
                            </div>
                            <div className='lt:w-1/2 mb:w-full mb:pt-4 flex items-center justify-center bg-cover'>
                                <img src={`${import.meta.env.VITE_IMG_URL}${media.poster_path}`} alt="avatar"
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
