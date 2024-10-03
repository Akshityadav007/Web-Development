# useRef
    - It is a React hook that provides a way to persist mutable values across renders without causing re-renders when the value changes.
    - It’s commonly used for accessing and manipulating DOM elements, but it can also store any mutable value that you want to retain across renders.
    - Key points about useRef:
        - Preserves value across renders: The value stored in a useRef persists between renders of the component. Unlike state, updating the useRef value does not trigger a re-render.
        - Mutable container: useRef returns an object with a single property, current, that you can freely modify.
        - Accessing DOM elements: It’s frequently used to access or interact with DOM elements directly (like input fields, buttons, etc.).


# Custom Hooks
    - Just like built in hooks, we can write our own Custom Hooks.
    - It should start with a 'use' (name convention).