- Components are still getting re-rendered.
- Passing props can becmoe verbose and inconvenient when you need to pass some props deeply through the tree, or if many components need the same prop.
- The nearest common ancestor would be far removed from the components that need data, and lifting state up that high can lead to a situation called "prop drilling".