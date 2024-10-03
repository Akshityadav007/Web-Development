# useCallBack
    - It is a hook in React, a popular JS library for building user interfaces.
    - It is used to memoize functions, which can help in optimizing the performance of your application, especially in case involving child components that reply on reference equality to prevent unnecessary renders.

    - useCallback memoizes the function reference, meaning it keeps the same reference to the function across renders unless the specified dependencies change.
    - Here's how it works:
        - Without useCallback, a new function would be created on every render, even if its logic remains unchanged.
        - With useCallback, React keeps the same function reference between renders, as long as the dependencies don't change.
    

    - Difference between useCallback and useMemo:
        - useCallback: Memoizes a function.
        - useMemo: Memoizes the result of a computation.