import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import axios from 'axios';

/*
  # Problem 1
  -> We need to write a component that takes a todo id as an input and fetches the data for that todo from the given endpoint and then renders it.
  -> How would the dependency array change ?

  # Problem 2
  -> Now add multiple buttons which will render the todo on clicking the button having it's id.
*/

function App() {
  // solution 2: state? useState
  const [selectedId, setSelectedId] = useState(1);              // initially 1 is selected

  return <div>
    <button onClick = {() => setSelectedId(1)}>1</button>
    <button onClick = {() => setSelectedId(2)}>2</button>
    <button onClick = {() => setSelectedId(3)}>3</button>
    <button onClick = {() => setSelectedId(4)}>4</button>
    <button onClick = {() => setSelectedId(5)}>5</button>
    <button onClick = {() => setSelectedId(6)}>6</button>
    <Todo id = {selectedId} />
    </div>
}

function Todo({id}){
  const [todo, setTodos] = useState({});

  // solution 1: write your effect here
 
  useEffect(() => {
      // fetch("https://jsonplaceholder.typicode.com/todos")         
      axios.get("https://jsonplaceholder.typicode.com/todos/" + id)         // we will use 'axios'  - does the same thing but is effective in other works
      .then((res) => {
          setTodos(res.data)  
      })                      // we don't use async/await in axios as it is smart enough to figure it out itself
  }, [id]);                   // solution 2: pass 'id' in the dependency array to tell what changes

  return <div>
    <h3>Title : {todo.title}</h3>
    <h5>{todo.completed ? "Done" : "InComplete"}</h5>
  </div>
}

export default App
