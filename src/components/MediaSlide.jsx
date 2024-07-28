import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaCaretRight } from 'react-icons/fa6';

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


const MediaSlide = ({ title, movies }) => {
  return (
    <div className='w-10/12 mx-auto my-4 movie-list'>
      <h2 className='uppercase font-bold text-3xl text-textDark border-b-4 border-extra w-fit pb-2'>{title}</h2>
      <Carousel responsive={responsive} infinite={true}>
        {movies.length > 0 && movies.map((movie) => (
          <div key={movie.id} className='group w-fit h-fit relative m-2'>
            <img src={`${import.meta.env.VITE_IMG_URL}${movie.poster_path}`} alt="avatar" />
            <div className='absolute bottom-0 left-0 w-full h-full p-3 group-hover:opacity-100 opacity-0 transition-opacity ease-in flex items-end text-textDark text-xl bg-gradient-to-t from-mainDark to-mainLight-[0] first-letter'>
              {movie.title || movie.original_title || movie.original_name}
            </div>
            <div className='absolute bottom-0 left-0 w-full h-full flex items-center justify-center group-hover:opacity-100 opacity-0 transition-opacity ease-in cursor-pointer'>
              <div className='rounded-[50%] p-2 bg-extra text-textDark text-3xl hover:bg-textDark hover:text-extra'><FaCaretRight /></div>
            </div>
          </div>
        ))}
      </Carousel>


    </div>
  )
}

export default MediaSlide