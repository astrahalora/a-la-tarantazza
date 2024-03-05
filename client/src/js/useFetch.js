import { useState, useEffect } from "react";
import { ordersUrl } from "./endpoints";

export function useFetch() {
    const [data, setData] = useState();
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setData(null);
        setIsError(false);
        setIsLoading(true);

        const controller = new AbortController();

        fetch(ordersUrl, { signal: controller.signal })
        .then(res => {
            // if unsuccessful status, reject and throw an error
            if(res.status === 200) {
                return res.json();
            }
            return Promise.reject(res);
        })
        .then(setData)
        .catch((e) => {
            // if the error is coming from the controller, completely ignore it
            if(e.name === "AbortError") return;
            setIsError(true);
        })
        .finally(() => {
            // if fetch aborted, leave the loading on
            if(controller.signal.aborted) return;
            setIsLoading(false)
        });

        return () => {
            controller.abort();
        };
    }, []);
    
    return { data, isError, isLoading }
}