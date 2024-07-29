import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MediaDetail from '../components/MediaDetail';
import MediaVideoSlide from '../components/MediaVideoSlide';

const MediaDetailPage = ({ type }) => {
    const { id } = useParams();
    const [error, setError] = useState('');
    const [media, setMedia] = useState([]);
    const [actors, setActors] = useState([]);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchMedias = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
                }
            };

            const url = `https://api.themoviedb.org/3/${type}/${id}?language=vi`;
            const urlActors = `https://api.themoviedb.org/3/${type}/${id}/credits?language=vi`;
            const urlVideos = `https://api.themoviedb.org/3/${type}/${id}/videos?language=en-US`;

            try {
                const response = await fetch(url, options);
                const movs = await response.json();
                console.log(movs);
                setMedia(movs);

                const response2 = await fetch(urlActors, options);
                const acts = await response2.json();
                console.log(acts);
                setActors(acts);

                const response3 = await fetch(urlVideos, options);
                const vids = await response3.json();
                console.log(vids);
                setVideos(vids.results);

            } catch (error) {
                setError(error);
            }
        };

        fetchMedias();
    }, [id]);


    return (
        <>
            <div className='w-full h-[120vh] bg-center bg-no-repeat bg-cover fixed' style={{ backgroundImage: `url(${import.meta.env.VITE_IMG_URL}${media.backdrop_path})` }} />
            <div className='absolute w-full left-0  top-0 flex flex-col text-textDark'>
                <MediaDetail media={media} actors={actors} type={type} />
                <MediaVideoSlide videos={videos} />

            </div>
        </>

    )
}

export default MediaDetailPage