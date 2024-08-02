import { useEffect, useRef } from 'react'
import Carousel from 'react-multi-carousel'
import MediaVideo from './MediaVideo';

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
const opts = {
    height: '390',
    width: '640',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
    },
};

const MediaVideoSlide = ({ videos }) => {

    return (
        <div className='w-full bg-mainDark py-10'>
            <div className='w-10/12 mx-auto space-y-3'>
                <h2 className='lt:text-3xl mb:text-2xl uppercase font-bold border-b-4 border-extra w-fit pb-2'>Videos</h2>
                <Carousel responsive={responsive} infinite={false} showDots={true} className='pb-10'>
                    {videos.length > 0 && videos.map(video => (
                        <div key={video.id} >
                            <MediaVideo video={video} />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default MediaVideoSlide