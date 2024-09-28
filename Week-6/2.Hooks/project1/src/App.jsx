import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';



function App() {
  const [todos, setTodos] = useState([]);

  // this takes effect once 'todos' is mounted and thus again takes effect depending on 'dependency array' conditions
  useEffect(() => {
      // fetch("https://sum-server.100xdevs.com/todos")         // this site API is no longer working
      fetch("https://jsonplaceholder.typicode.com/todos")       // this API gives you free todos
      .then(async (res) => {
        const json = await res.json();
        setTodos(json);
      })
  }, []);                           // dependency array (we don't need it for this project) - takes 'state' variable as input

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
