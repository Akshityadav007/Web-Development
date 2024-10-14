1. useIsOnline hook
    - Create a hook that returns true or false based on weather the user is currently online
    - You are given that - 
        window.navigator.onLine returns true or false based on weather the user is online
    - You can attach the following event listeners to listen to weather the user is online or not
        window.addEventListener('online', () => console.log('Became online'));
        window.addEventListener('offline', () => console.log('Became offline'));

 
Solution
 
2. useMousePointer hook
    - Create a hook that returns you the current mouse pointer position.
    - The final react app that uses it looks like this (Video preview) - https://youtu.be/Jp6fLijh2Kk
    
    - You are given that 
        window.addEventListener('mousemove', handleMouseMove);

        will trigger the handleMouseMove function anytime the mouse pointer is moved.


- We can use the 2nd mouse to get window dimensions as we resize it.