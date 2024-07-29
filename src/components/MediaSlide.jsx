import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import { FaCaretRight } from 'react-icons/fa6';
import MediaItem from './MediaItem';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 5,
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


const MediaSlide = ({ title, medias, type }) => {
  return (
    <div className='w-10/12 mx-auto my-4 media-list'>
      <h2 className='uppercase font-bold text-3xl text-textDark border-b-4 border-extra w-fit pb-2'>{title}</h2>
      <Carousel responsive={responsive} infinite={true}>
        {medias.length > 0 && medias.map((media) => (
          <div key={media.id} className='group w-fit h-fit relative m-2'>
            <MediaItem media={media} type={type} />
          </div>
        ))}
      </Carousel>


    </div>
  )
}

export default MediaSlide