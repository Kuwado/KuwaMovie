import { useState, useEffect } from 'react';

const useFetchMovies = (type, category, page) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
                }
            };
            const url = `https://api.themoviedb.org/3/${type}/${category}/day?language=vi&page=${page}`;

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setData(result.results);
                console.log(result)
            } catch (error) {
                setError(error);
            }
        };

        fetchMovies();
    }, [type, category, page]);

    return data;
};

export default useFetchMovies;
