import { useState, useEffect } from 'react';

const useFetchMedias = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMedias = async () => {
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
            } catch (error) {
                setError(error);
            }
        };

        fetchMedias();
    }, [url]);

    return data;
};

export default useFetchMedias;
