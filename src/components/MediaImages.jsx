import React from 'react'
import Carousel from 'react-multi-carousel'

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

const MediaImages = ({ images }) => {
  return (
    <div className='w-full bg-mainDark pb-10'>
      <div className='w-10/12 mx-auto space-y-3'>
        <h2 className='lt:text-3xl mb:text-2xl uppercase font-bold border-b-4 border-extra w-fit pb-2'>Hình ảnh</h2>
        <Carousel responsive={responsive} infinite={false} removeArrowOnDeviceType={["tablet", "minitablet", "mobile"]} transitionDuration={500}>
          {images?.map((image, index) => (
            <div key={index} >
              <img src={`${import.meta.env.VITE_IMG_URL}${image.file_path})`} alt="backdrop" />
            </div>
          ))}
        </Carousel>
      </div>

    </div>
  )
}

export default MediaImages