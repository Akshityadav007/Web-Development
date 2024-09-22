import { useState } from 'react'

/*
  - State of Todo app
     {
      todos : [
                {
                  title : "title1", description : "desc1", completed : false
                }
              ]
     }

*/

function App() {
  // define the todos data (state)
  const [todos, setTodos] = useState([
    {
    title : 'Go to GYM',
    description : 'Do exercise daily 8-9!',
    completed : false
    },
    {
    title : 'Learn DSA',
    description : 'Learn DSA 10-11!',
    completed : true
    }
  ]);

  function addTodo(){
    setTodos([...todos, {
      title : 'New Demo Todo',
      description : 'This is a dumy Todo, functionalities have not been added to "Add New Todo +"  button ',
      completed : false
    }])
  }

  return (
    <div>
      <button onClick= {addTodo} > Add a todo + </button>
      {
        todos.map(function (todo) {
          return <Todo title = {todo.title} description = {todo.description} completed = {todo.completed} />
        })
      }
      
    </div>
  )
}


// todo app component
// title
// description
// completed
function Todo(props){
  return <div>
    <h4> {props.title} </h4>
    <h5> {props.description} </h5>
    <button>
      {props.completed ? "Done" : "Mark as completed"}
    </button>

  </div>
}


export default App
