import {useCallback, useState} from 'react';

const useFetch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestConfig, applyData) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method ??= 'GET',
                headers: requestConfig.headers ??= {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestConfig.body),
            });

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            applyData(data);
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
            setError(err.message || 'Something went wrong!');
        }
    }, []);

    return {
        isLoading,
        error,
        sendRequest,
    }
};

export default useFetch;