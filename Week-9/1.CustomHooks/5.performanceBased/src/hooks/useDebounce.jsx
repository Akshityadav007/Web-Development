import { useState } from "react";
import { useEffect } from "react";

export const useDebounce = (input, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(input);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedValue(input)
        }, delay);

        return () => {
            clearInterval(timerId);             // in case setDebounced is called before 'delay', clear the old clock
        }
    }, [input, delay]); 

    return debouncedValue;
}