import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MediaDetail from '../components/MediaDetail';

const MediaDetailPage = ({ type }) => {
    const { id } = useParams();
    console.log(id)
    const [movie, setMovie] = useState([]);
    const [actors, setActors] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
                }
            };

            const url = `https://api.themoviedb.org/3/${type}/${id}?language=vi`;
            const urlActors = `https://api.themoviedb.org/3/${type}/${id}/credits?language=vi`;

            try {
                const response = await fetch(url, options);
                const movs = await response.json();
                console.log(movs);
                setMovie(movs);

                const response2 = await fetch(urlActors, options);
                const acts = await response2.json();
                console.log(acts);
                setActors(acts);
            } catch (error) {
                setError(error);
            }
        };

        fetchMovies();
    }, [id]);


    return (
        <>
            <div className='w-full h-[120vh] bg-center bg-no-repeat bg-cover fixed' style={{ backgroundImage: `url(${import.meta.env.VITE_IMG_URL}${movie.backdrop_path})` }} />
            <div className='absolute w-full left-0  top-0 flex flex-col text-textDark h-[2000px]'>
                <MediaDetail movie={movie} actors={actors} type={type} />

            </div>
        </>

    )
}

export default MediaDetailPage