import { useState, useEffect } from 'react';

export const useIsOnline = () => {
    const [online, setOnline] = useState(window.navigator.onLine);

    useEffect(() => {
        const handleOnline = () => setOnline(true);
        const handleOffline = () => setOnline(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        // Cleanup event listeners when component unmounts
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []); // Empty dependency array ensures effect runs only on mount/unmount

    return online;
};
