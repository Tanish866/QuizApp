## Higher order components

- A Higher-Order Component (HOC) in a functional context is a function that takes a
- functional component as an argument and returns a new, "enhanced" functional component
- with additional logic or props. 

## Hooks

- In React, a custom Hook is a JavaScript function that encapsulates reusable logic, 
- allowing you to share stateful behavior across multiple components without
- duplicating code. Unlike a standard function, a custom Hook can call other React Hooks
- like useState or useEffect.

## 1. Reusing "Stateful" Logic  
- Standard helper functions are great for math or data formatting, but they cannot hold
- React state or trigger side effects (like API calls). 
- Without Custom Hooks: If two different components need to fetch data and track a
- loading state, you have to copy-paste the useState and useEffect code into both.
- With Custom Hooks: You write the fetching logic once in useFetch and simply call it in
- any component. Each component gets its own independent state from that Hook. 

## 2. Cleaning Up "Messy" Components

- As components grow, they often get cluttered with non-UI logic (event listeners,
- timers, form validation). 
- Custom Hooks allow you to separate concerns. You can move 20 lines of complex logic
- into a single-line Hook call like const data = useMyComplexLogic(), leaving your
- component focused only on what the UI looks like.
