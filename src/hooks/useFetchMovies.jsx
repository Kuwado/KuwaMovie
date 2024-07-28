import { useState, useEffect } from 'react';

const useFetchMovies = (url) => {
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
            // const url = `https://api.themoviedb.org/3/${type}/${category}/day?language=vi&page=${page}`;
            const urll = `${url}`;

            try {
                const response = await fetch(urll, options);
                const result = await response.json();
                setData(result.results);
                console.log('f', result.results)
            } catch (error) {
                setError(error);
            }
        };

        fetchMovies();
    }, [url]);

    return data;
};

export default useFetchMovies;
