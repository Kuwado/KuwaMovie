import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MediaItem from '../components/MediaItem';

const MediaSearchPage = () => {
    const [medias, setMedias] = useState([]);
    const { name } = useParams();

    useEffect(() => {
        const fetchMedias = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
                }
            };

            const url = `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=vi&page=1`;

            try {
                const response = await fetch(url, options);
                const meds = await response.json();
                console.log(meds);
                setMedias(meds.results);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMedias();
    }, [name]);

    return (
        <section className='w-full'>
            <h2 className='lt:text-[60px] lt:leading-[68px] mb:text-[52px] mb:leading-[60px] pt-[60px] text-center font-bold uppercase h-fit'>Kết quả tìm kiếm</h2>
            <div className="grid auto-rows-auto mb:grid-cols-2 mt:grid-cols-3 tl:grid-cols-4 dt:grid-cols-5 gap-2">
                {medias && medias.length > 0 ? (
                    medias.map((media, index) => (
                        media && media.poster_path != null && (
                            <div key={index} className='group w-fit h-fit relative m-2'>
                                <MediaItem media={media} type={"movie"} />
                            </div>
                        )
                    ))
                ) : (
                    <p>No media found</p>
                )}
            </div>
        </section>
    );
}

export default MediaSearchPage;
