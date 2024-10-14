import { useEffect } from "react";


export function useInterval(callback, delay){
    useEffect(() => {
        const intervalId = setInterval(callback, delay);            // this is something new 'setInterval'

        return () => clearInterval(intervalId);
    }, [callback, delay]);
};