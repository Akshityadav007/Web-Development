import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import './App.css'
import { filterAtom, filteredTodos } from './store/atoms/todo'

function App() {

  return (
   <div>
    <RecoilRoot>
      <InputKeyword />
      <FilteredTodos />
    </RecoilRoot>
   </div>
  )
}


function InputKeyword(){
  const setInput = useSetRecoilState(filterAtom);
  return <div>
    <input type = "text" placeholder = "Enter filter keyword"
    onChange= {(e) => {
      setInput(e.target.value);
    }}
    />
  </div>
}

function FilteredTodos(){
  const todos = useRecoilValue(filteredTodos);
  return <div>
    { 
    todos.map((todo, index) => (
      <Todo 
        key = {index} 
        title = {todo.title} 
        description = {todo.description} 
        completed = {todo.completed}
        />
    ))
    }
  </div>
}

function Todo(props){
  return <div>
    <p>Title : {props.title}</p>
    Description : {props.description} <br></br>
    Completed : {(props.completed) ? "Done" : "Not Done"}
  </div>
}

export default App
