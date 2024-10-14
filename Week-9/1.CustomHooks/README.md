# Custom Hooks
- Hooks that you create yourself, so othyer people can use them are called custom hooks.
- A custom hook is effectively a function, but with the following properties -
    1. Uses another hook internally (useState, useEffect, another custom hook).
    2. Starts with 'use'.

- A few good examples are:
1. Data fetching hooks - used to encapsulate all the logic to fetch the data from your backend.
2. Browser functionality related hooks - usesOnlineStatus, useWindowSize, useMousePosition.
3. Performance/Timer based - useInterval, useDebounce.