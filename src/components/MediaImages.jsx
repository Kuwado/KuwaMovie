import React from 'react'
import Carousel from 'react-multi-carousel'

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1200, min: 600 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

const MediaImages = ({ images }) => {
    return (
        <div className='w-full bg-mainDark pb-10'>
            <div className='w-10/12 mx-auto space-y-3'>
                <h2 className='uppercase font-bold text-3xl text-textDark border-b-4 border-extra w-fit pb-2'>Hình ảnh</h2>
                <Carousel responsive={responsive} infinite={false} removeArrowOnDeviceType={["tablet", "mobile"]} transitionDuration={500}>
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