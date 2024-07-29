import { FaCaretRight } from 'react-icons/fa6';
import Carousel from 'react-multi-carousel';

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4.5,
    },
    tablet: {
      breakpoint: { max: 1200, min: 600 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2,
    },
  };

const MediaDetail = ({ movie, actors, type }) => {
    const genres = movie.genres || [];
    const casts = actors.cast || [];

    return (
        <div className='w-full h-[120vh] relative bg-gradient-to-t from-mainDark via-mainDark to-textDark-0 flex items-end pb-4'>
            <div className='relative z-10 h-fit w-10/12 mx-auto flex items-center gap-10'>
                <div className='w-[40%]'>
                    <img
                        src={`${import.meta.env.VITE_IMG_URL}${movie.poster_path})`}
                        alt="avatar"
                        className='w-full object-cover'
                    />
                </div>
                <div className='w-[60%] flex flex-col justify-center gap-4'>
                    <h2 className='text-[60px] font-bold text-wrap break-words'>{movie.title || movie.original_title || movie.original_name}</h2>
                    <div className='flex space-x-3'>
                        <span className='uppercase py-1 px-2 rounded-md border-extra border-2'>{type}</span>
                        {genres.length > 0 && genres.map(genre => (
                            <span key={genre.id} className='py-1 px-2 rounded-md bg-extra text-textDark'>{genre.name}</span>
                        ))}
                    </div>
                    <div>{movie.overview || movie.tagline}</div>
                    <button className='small-btn main-btn w-fit text-xl inline-flex items-center space-x-1'>
                        <FaCaretRight />
                        <span className='uppercase'>Xem ngay</span>
                    </button>
                    <h2 className='uppercase font-bold text-2xl text-textDark border-b-4 border-extra w-fit pb-1 mt-2'>Diễn viên</h2>
                    <Carousel responsive={responsive} infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]}>
                        {casts.length > 0 && casts.map(cast => (
                            <div key={cast.id} className='relative mx-1'>
                                <img src={`${import.meta.env.VITE_IMG_URL}${cast.profile_path})`} alt="cast-avatar" />
                                <div className='absolute left-0 right-0 bottom-0 p-3 bg-mainDark/50 overflow-hidden text-nowrap text-ellipsis'>{cast.name || cast.original_name}</div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default MediaDetail