import { FaCaretRight } from 'react-icons/fa6';
import Carousel from 'react-multi-carousel';

const responsive = {
    desktop: {
        breakpoint: { max: 4000, min: 1280 },
        items: 4.5,
    },
    laptop: {
        breakpoint: { max: 1280, min: 1024 },
        items: 4.5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 4,
    },
    minitablet: {
        breakpoint: { max: 768, min: 480 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 480, min: 0 },
        items: 2,
    },
};

const MediaDetail = ({ media, actors, type }) => {
    const genres = media.genres || [];
    const casts = actors.cast || [];

    return (
        <div className='w-full lt:h-[120vh] mb:h-fit relative bg-gradient-to-t from-mainDark via-mainDark to-textDark-0 flex items-end'>
            <div className='relative h-fit w-10/12 mx-auto flex lt:flex-row lt:pt-0 mb:flex-col mb:pt-[64px] items-center gap-10'>
                <div className='w-[40%] min-w-[300px]'>
                    <img
                        src={`${import.meta.env.VITE_IMG_URL}${media.poster_path})`}
                        alt="avatar"
                        className='w-full object-cover'
                    />
                </div>
                <div className='lt:w-[60%] mb:w-full flex flex-col gap-4'>

                    <div className='flex flex-col mb:items-center lt:items-start gap-4'>
                        <h2 className='lt:text-[60px] lt:leading-[68px] mb:text-[52px] mb:leading-[60px] font-bold text-wrap break-words'>{media.title || media.original_title || media.original_name}</h2>
                        <div className='flex space-x-3'>
                            <span className='uppercase py-1 px-2 rounded-md border-extra border-2'>{type}</span>
                            {genres.length > 0 && genres.map(genre => (
                                <span key={genre.id} className='py-1 px-2 rounded-md bg-extra'>{genre.name}</span>
                            ))}
                        </div>
                        <div>{media.overview || media.tagline}</div>
                        <button className='small-btn main-btn w-fit text-xl inline-flex items-center space-x-1'>
                            <FaCaretRight />
                            <span className='uppercase'>Xem ngay</span>
                        </button>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h2 className='text-2xl uppercase font-bold border-b-4 border-extra w-fit pb-1 mt-2'>Diễn viên</h2>
                        <Carousel responsive={responsive} infinite={true} removeArrowOnDeviceType={["tablet", "minitablet", "mobile"]}>
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
        </div>
    )
}

export default MediaDetail