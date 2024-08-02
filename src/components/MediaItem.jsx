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
            <div className='lt:flex mb:hidden absolute bottom-0 left-0 w-full h-full p-3 group-hover:opacity-100 opacity-0 transition-opacity ease-in items-end bg-gradient-to-t from-mainDark to-mainLight-[0]'>
                {media.title || media.original_title || media.original_name}
            </div>
            <Link className='lt:hidden mb:flex w-full px-3 pt-2 items-end' to={`/${type}/${media.id}`}>
                {media.title || media.original_title || media.original_name}
            </Link>
            <Link className='lt:flex mb:hidden absolute bottom-0 left-0 w-full h-full items-center justify-center group-hover:opacity-100 opacity-0 transition-opacity ease-in cursor-pointer'
                to={`/${type}/${media.id}`}>
                <div className='rounded-[50%] p-2 bg-extra text-3xl hover:bg-textDark hover:text-extra'>
                    <FaCaretRight />
                </div>
            </Link>
        </>
    )
}

export default MediaItem