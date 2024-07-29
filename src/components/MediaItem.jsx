import { Link } from "react-router-dom"
import { FaCaretRight } from "react-icons/fa6"

const MediaItem = ({ media, type }) => {
    return (
        <>
            <img
                src={`${import.meta.env.VITE_IMG_URL}${media.poster_path}`}
                alt={media.title || media.original_title || media.original_name}
                className="w-full h-full object-cover"
            />
            <div className='absolute bottom-0 left-0 w-full h-full p-3 group-hover:opacity-100 opacity-0 transition-opacity ease-in flex items-end text-textDark text-xl bg-gradient-to-t from-mainDark to-mainLight-[0]'>
                {media.title || media.original_title || media.original_name}
            </div>
            <Link className='absolute bottom-0 left-0 w-full h-full flex items-center justify-center group-hover:opacity-100 opacity-0 transition-opacity ease-in cursor-pointer'
                to={`/${type}/${media.id}`}>
                <div className='rounded-[50%] p-2 bg-extra text-textDark text-3xl hover:bg-textDark hover:text-extra'>
                    <FaCaretRight />
                </div>
            </Link>
        </>
    )
}

export default MediaItem