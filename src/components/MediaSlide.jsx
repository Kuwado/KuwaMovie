import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MediaItem from './MediaItem';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1280 },
    items: 5,
  },
  laptop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 4,
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

const MediaSlide = ({ title, medias, type }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`w-full pb-10 ${theme ? 'bg-mainLight' : 'bg-mainDark'}`}>
      <div className='w-10/12 mx-auto space-y-3'>
        <h2 className='lt:text-3xl mb:text-2xl uppercase font-bold text-3xl border-b-4 border-extra w-fit pb-2'>{title}</h2>
        <Carousel responsive={responsive} infinite={false} removeArrowOnDeviceType={["tablet", "minitablet", "mobile"]}>
          {medias.length > 0 && medias.map((media) => (
            <div key={media.id} className='group w-fit h-fit relative m-2'>
              <MediaItem media={media} type={type} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>

  )
}

export default MediaSlide