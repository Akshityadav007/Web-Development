import { useState } from 'react'
import './App.css'
import { CountContext } from './context';
import { useContext } from 'react';

// Create a context.jsx file

function App() {
  const [count, setCount] = useState(0);

  // wrap anyone that wants to use the teleported value inside a provider
  return (
    <div>
      <CountContext.Provider value = {count}>
        <Count setCount = {setCount} />
      </CountContext.Provider>
    </div>
  )
}


// now we don't need to drill down 'count' to Count() now, we can directly teleport it to 'CountRender()' and 'Buttons()'
function Count({setCount}){
  return <div>
    <CountRender />
    <Buttons setCount={setCount} />
  </div>
}


function CountRender(){
  const count = useContext(CountContext);

  return <div>
    {count}
  </div>
}


function Buttons({setCount}){
  const count = useContext(CountContext);

  return <div>
    <button onClick = {() => { setCount(count + 1) }}> ⬆️ </button>
    <button onClick = {() => { setCount(count - 1) }}> ⬇️ </button>
  </div>
}

export default App
