import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MediaDetail from '../components/MediaDetail';
import MediaVideoSlide from '../components/MediaVideoSlide';
import MediaImages from '../components/MediaImages';
import MediaSlide from '../components/MediaSlide';

const MediaDetailPage = ({ type }) => {
    const { id } = useParams();
    const [error, setError] = useState('');
    const [media, setMedia] = useState([]);
    const [actors, setActors] = useState([]);
    const [videos, setVideos] = useState([]);
    const [images, setImages] = useState([]);
    const [sameMedias, setSameMedias] = useState([]);

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
            const urlImages = `https://api.themoviedb.org/3/${type}/${id}/images`;
            const urlSameMedias = `https://api.themoviedb.org/3/${type}/${id}/recommendations?language=vi&page=1`;

            try {
                const response = await fetch(url, options);
                const movs = await response.json();
                // console.log(movs);
                setMedia(movs);

                const response2 = await fetch(urlActors, options);
                const acts = await response2.json();
                // console.log(acts);
                setActors(acts);

                const response3 = await fetch(urlVideos, options);
                const vids = await response3.json();
                // console.log(vids);
                setVideos(vids.results.length > 5 ? vids.results.slice(0, 5) : vids.results);
                
                const response4 = await fetch(urlImages, options);
                const imgs = await response4.json();
                // console.log(imgs);
                setImages(imgs.backdrops.length > 10? imgs.backdrops.slice(0, 10) : imgs.backdrops);

                const response5 = await fetch(urlSameMedias, options);
                const sms = await response5.json();
                console.log(sms.results);
                setSameMedias(sms.results);

            } catch (error) {
                setError(error);
            }
        };

        fetchMedias();
    }, [id]);


    return (
        <>
            <div className='w-full h-[120vh] bg-center bg-no-repeat bg-cover fixed' style={{ backgroundImage: `url(${import.meta.env.VITE_IMG_URL}${media.backdrop_path})` }} />
            <div className='absolute w-full left-0  top-0 flex flex-col'>
                <MediaDetail media={media} actors={actors} type={type} />
                <MediaVideoSlide videos={videos} />
                <MediaImages images={images} />
                <MediaSlide title={'Phim tương tự'} medias={sameMedias} type={type} />
            </div>
        </>
    )
}

export default MediaDetailPage