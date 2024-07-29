import { useEffect, useState, useMemo } from "react";
import { FaCaretRight } from "react-icons/fa";

const MediaList = ({ type }) => {
    const [isPopular, setIsPopular] = useState(true);
    const [page, setPage] = useState(1);
    const [medias, setMedias] = useState([]);

    const url = useMemo(() => (
        `https://api.themoviedb.org/3/${type}/${isPopular ? 'popular' : 'top_rated'}?language=vi&page=${page}`
    ), [isPopular, page, type]);

    const title = type === 'movie' ? 'Phim lẻ' : 'Phim bộ';

    console.log(page)

    const handleClick = () => {
        console.log('click')
        setMedias([]);
        setPage(1);
        setIsPopular(!isPopular);
        console.log('click-end')
    };

    const morePage = () => {
        setPage(page + 1);
    };

    useEffect(() => {
        const fetchMovies = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                page === 1 ? setMedias(result.results) : setMedias(prevMedias => [...prevMedias, ...result.results])
            } catch (error) {
                setError(error);
            }
        };

        fetchMovies();
    }, [isPopular, page, type]);

    console.log('hehe')

    return (
        <div className="w-10/12 mx-auto mt-4">
            <div className="flex justify-between mb-2">
                <h2 className='uppercase font-bold text-3xl text-textDark border-b-4 border-extra w-fit pb-2'>{title}</h2>
                <div className="flex text-textDark text-xl">
                    <button
                        className={`py-2 px-4 rounded-tl-xl rounded-bl-xl border-2 border-white ${isPopular ? 'bg-extra' : ''}`}
                        onClick={handleClick}
                        disabled={isPopular}
                    >
                        Phổ biến
                    </button>
                    <button
                        className={`py-2 px-4 rounded-tr-xl rounded-br-xl border-2 border-white ${!isPopular ? 'bg-extra' : ''}`}
                        onClick={handleClick}
                        disabled={!isPopular}
                    >
                        Hot
                    </button>
                </div>
            </div>
            <div className="grid auto-rows-auto grid-cols-5 gap-2">
                {medias && medias.length > 0 && medias.map((media) => (
                    <div key={media.id} className='group w-fit h-fit relative m-2'>
                        <img
                            src={`${import.meta.env.VITE_IMG_URL}${media.poster_path}`}
                            alt={media.title || media.original_title || media.original_name}
                            className="w-full h-full object-cover"
                        />
                        <div className='absolute bottom-0 left-0 w-full h-full p-3 group-hover:opacity-100 opacity-0 transition-opacity ease-in flex items-end text-textDark text-xl bg-gradient-to-t from-mainDark to-mainLight-[0]'>
                            {media.title || media.original_title || media.original_name}
                        </div>
                        <div className='absolute bottom-0 left-0 w-full h-full flex items-center justify-center group-hover:opacity-100 opacity-0 transition-opacity ease-in cursor-pointer'>
                            <div className='rounded-[50%] p-2 bg-extra text-textDark text-3xl hover:bg-textDark hover:text-extra'>
                                <FaCaretRight />
                            </div>
                        </div>
                    </div>
                ))}
                {medias && medias.length === 0 && <p>No media found</p>}
            </div>
            <div className="flex justify-center">
                <button onClick={morePage} className="my-4 mx-auto py-2 px-4 bg-extra text-textDark rounded-tl-xl rounded-br-xl items-center">
                    Load More
                </button>
            </div>
        </div>
    );
};

export default MediaList;
