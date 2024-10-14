import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

// 1. has 'use' in its name
function useTodos(n) {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);           // 2. uses other hooks (useState, useEffect)

  useEffect(() => {
    const timerRes = setInterval(getTodos, n * 1000);

    function getTodos() {
      axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(res => {
        setTodos(res.data);
        setLoading(false);
      })
    }

    getTodos();         // call it once for the first time

    return () => {
      clearInterval(timerRes);
    }
  }, [n])

  return {todos, loading};
}


function App() {
  const {todos, loading} = useTodos(5);         // encapsulates the backend data fetching logic

  if(loading){
    return <div> Loading... </div>
  }
  else{
    return (
      <>
        {todos.map(todo => <Track key={todo.id} todo={todo} />)}
      </>
    )
  }
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.completed ? 'Completed' : 'Not Done'}
  </div>
}

export default App