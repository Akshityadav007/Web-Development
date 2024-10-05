import './App.css'
import { RecoilRoot, useRecoilStateLoadable, useRecoilValueLoadable } from 'recoil';
import { todosAtomFamily } from './atoms';
import { Suspense } from 'react';

function App() {
  return <RecoilRoot>
    {/* we can handle error using 'Suspense' or 'ErrorBoundary' */}
    <Suspense fallback = {"loading..."}>
      <Todo id={1}/>
      <Todo id={2} />
      <Todo id={3} />
      <Todo id={4} />
      <Todo id={5} />
    </Suspense>
  </RecoilRoot>
}

function Todo({id}) {
  //  const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
  const todo = useRecoilValueLoadable(todosAtomFamily(id));
  // console.log(todo.state);

  if (todo.state === "loading") {
  // using state we can also handle errors (state == "hasError")
    return <div>loading</div>
   }
  //  console.log(todo.contents);
  else if (todo.state === "hasValue"){
    return (
      <>
      {todo.contents.title}
      <br />
      {todo.contents.completed ? "Done" : "Not done"}
      <br />
      </>
    )
  }
  else if(todo.state === "hasError"){
    return <div>
      Some Error occured while fetching the value
    </div>
  }
}

export default App
