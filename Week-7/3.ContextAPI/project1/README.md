# Context API
    - This lets you fix prop drilling.
    - The Context API in React is a powerful feature that allows you to share values (like data or functions) across your component tree without having to pass props down manually at every level(prop drilling). 
    - This is especially useful for global data that needs to be accessed by multiple components, such as themes, user authentication, or language settings.
    - https://react.dev/learn/passing-data-deeply-with-context
    
# Limitation
    - All connected states are re-rendered irrespective of whether they are using the data.
    - E.g. In this example, 'Count' component is re-rendered every time we 'increase/decrease' the count, it doesn't take count data but still it is re-rendered.