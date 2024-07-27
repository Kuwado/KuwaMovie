import { useState, useEffect } from "react";

const useFetchGenres = (type) => {
    const [genres, setGenres] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGenres = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
                }
            };
            const url = `https://api.themoviedb.org/3/genre/${type}/list?language=en`;

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setGenres(result.genres);
                console.log(result)
            } catch (error) {
                setError(error);
            };
        }
        fetchGenres();
    }, [type]);

    return genres;
}

export default useFetchGenres;