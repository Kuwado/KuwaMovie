import { useEffect, useRef } from 'react'
import Carousel from 'react-multi-carousel'
import MediaVideo from './MediaVideo';

const responsive = {
    all: {
        breakpoint: { max: 3000, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
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
                <h2 className='uppercase font-bold text-3xl text-textDark border-b-4 border-extra w-fit pb-2'>Videos</h2>
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