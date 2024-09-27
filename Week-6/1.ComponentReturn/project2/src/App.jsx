import { useState } from 'react'
import './App.css'

/*  
          -------------
        | Keys in react |
          -------------
    => This app is todo app that renders 3 todos.
    => https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
    => We need keys whenever we are rendering list like items, so that react can uniquely identify each one of them and not get confused,
    => So, we should always define the 'key' in this.
*/

let idCounter = 4;

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title : "Do gym",
      description : "9-10 gym"
    }, 
    { 
      id: 2,
      title : "Go to class",
      description : "Daily class"
    }, 
    { 
      id: 3,
      title : "Do DSA after class",
      description : "Code daily"
    }
  ])


  function addTodo() {
    /*
      -> ugly way to do
      const newTodos = []
      for(let i = 0;i < todos.length; i++){
        newTodos.push(todos[i]);
      }

      newTodos.push({
        id: idCounter++,
        title: Math.random(),
        description: Math.random()
      })

      setTodos(newTodos)
    */

    setTodos([...todos,{
      id: idCounter++,
      title: Math.random(),
      description: Math.random()
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add a new todo</button>
      {todos.map(todo => <Todo key = {todo.id} title = {todo.title} description = {todo.description} />)}
    </div>
  )
}

function Todo(props){
  const title = props.title;
  const description = props.description;

  return <div>
    <h3>{title}</h3>
    <h5>{description}</h5>
  </div>

}

export default App
