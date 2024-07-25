import React from 'react'
import { FaCaretRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className='bg-banner1 bg-center bg-no-repeat bg-cover w-full h-[650px] relative'>
        <div className='w-full h-full absolute top-0 left-0 bg-bgGradient' />
        <div className='w-10/12 h-full mx-auto top-0 z-2 relative flex'>
            <div className='flex-1 flex flex-col justify-center text-textDark gap-5'>
                <h2 className='text-[60px]'>Teen phim owr daay</h2>
                <div>Rate va theer loaij</div>
                <div>Tom tat phim</div>
                <a href="#" className='inline-flex items-center justify-center small-btn main-btn w-fit text-xl'>
                    <div><FaCaretRight /> </div>
                    <p>Xem ngay</p>
                </a>
            </div>
            <div className='flex-1'></div>
        </div>
    </div>
  )
}

export default Banner