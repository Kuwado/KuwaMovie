import { useEffect, useState, useMemo, useContext } from "react";
import MediaItem from "./MediaItem";
import { ThemeContext } from "../context/ThemeContext";

const MediaList = ({ type }) => {
    const [isPopular, setIsPopular] = useState(true);
    const [page, setPage] = useState(1);
    const [medias, setMedias] = useState([]);
    const { theme } = useContext(ThemeContext);

    const url = useMemo(() => (
        `https://api.themoviedb.org/3/${type}/${isPopular ? 'popular' : 'top_rated'}?language=vi&page=${page}`
    ), [isPopular, page, type]);

    const title = type === 'movie' ? 'Phim lẻ' : 'Phim bộ';

    const handleClick = () => {
        setMedias([]);
        setPage(1);
        setIsPopular(!isPopular);
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

    return (
        <div className="w-10/12 mx-auto mt-4">
            <div className="flex justify-between mb-2">
                <h2 className='lt:text-3xl mb:text-2xl uppercase font-bold border-b-4 border-extra w-fit pb-2'>{title}</h2>
                <div className="flex">
                    <button
                        className={`py-2 px-4 rounded-tl-xl rounded-bl-xl border-2 ${theme ? 'border-black' : 'border-white'} ${isPopular ? 'bg-extra font-bold' : ''}`}
                        onClick={handleClick}
                        disabled={isPopular}
                    >
                        Phổ biến
                    </button>
                    <button
                        className={`py-2 px-4 rounded-tr-xl rounded-br-xl border-2 ${theme ? 'border-black' : 'border-white'} ${!isPopular ? 'bg-extra font-bold' : ''}`}
                        onClick={handleClick}
                        disabled={!isPopular}
                    >
                        Hot
                    </button>
                </div>
            </div>
            <div className="grid auto-rows-auto mb:grid-cols-2 mt:grid-cols-3 tl:grid-cols-4 dt:grid-cols-5 gap-2">
                {medias && medias.length > 0 && medias.map((media, index) => (
                    <div key={index} className='group w-fit h-fit relative m-2'>
                        <MediaItem media={media} type={type} />
                    </div>
                ))}
                {medias && medias.length === 0 && <p>No media found</p>}
            </div>
            <div className="flex justify-center">
                <button onClick={morePage} className="my-4 mx-auto py-2 px-4 bg-extra rounded-tl-xl rounded-br-xl items-center">
                    Xem thêm
                </button>
            </div>
        </div>
    );
};

export default MediaList;
