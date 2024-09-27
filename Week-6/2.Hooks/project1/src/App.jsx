import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';



function App() {
  const [todos, setTodos] = useState([]);

  // this takes effect after 10 seconds
  useEffect(() => {
    setTimeout(() => {
      // fetch("https://sum-server.100xdevs.com/todos")         // this site API is no longer working
      fetch("https://jsonplaceholder.typicode.com/todos")       // this API gives you free todos
      .then(async (res) => {
        const json = await res.json();
        setTodos(json);
      })
    }, 10 * 1000)
  }, [todos]);                           // dependency array (we don't need it for this project)

  return (
    <div>
      {todos.map(todo => <Todo key = {todo.id} title={todo.title} completed = {todo.completed}/>)}
    </div>
  )
}

function Todo(prop){
  const title = prop.title;
  const completed =  prop.completed;

  return <div>
    <h3>Title : {title}</h3>
    <h5>{completed ? "Done" : "InComplete"}</h5>
  </div>
}

export default App
