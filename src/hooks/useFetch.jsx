import React, { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState([])
    const [isloading, setIsLoading] = useState(true)
    const[isError, setIsError] = useState(false)

    const getData = async () => {
        try {
            const response = await fetch(url);
            const results = await response.json();
            setIsLoading(false);
            setData(results);
        } catch (error) {
            setIsError(true);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, [url]);

    return { isloading, isError, data}; 
};