import { useState } from 'react'
import './App.css'
import { useMemo } from 'react';
import { useEffect } from 'react';

/*
  -> Create an app that does two things - 
      1. Increases a counter by 1
      2. Lets user put a value in an input box (n) and you need to show sum from 1-n.

    *One restricton - everything needs to be inside App
*/

// expensive way to do ⬇
// function App() {
//   const [counter, setCounter] = useState(0);
//   const [inputValue, setInputValue] = useState(0);

//   let sum = 0;
//   for(let i = 1;i <= inputValue; i++){
//     sum += i;
//   }

//   return (
//  <div>
//     <input type = "number" onChange = {(e)=> setInputValue(Number(e.target.value))}></input>
//     <br/>
//     {/* Sum is {((inputValue) * (inputValue + 1)) / 2} */}
//     Sum is {sum}            {/* Just to make this work expensive we are doing this using loop */}
//     <br/>
//     <button onClick={() => setCounter(counter + 1)}>Counter ({counter})</button>
//  </div>
//   )
// }

/*
  => Using above approach re-renders every time value changes, even if the value has been called earlier.
  => This causes an issue in case we have an expensive operation inside.
  => We can use hooks - either useEffect or useMemo (better)
*/


function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  // const [sum, setSum] = useState(0);

  let finalSum = useMemo(() => {
    let sum = 0;
    for(let i = 1;i <= inputValue; i++){
      sum += i;
    }
    return sum;
  }, [inputValue]);


  // useEffect(() => {
  //   let sum = 0;
  //   for(let i = 1;i <= inputValue; i++){
  //     sum += i;
  //   }
  //   setSum(sum);
  // },[inputValue]);

  return (
 <div>
    <input type = "number" onChange = {(e)=> setInputValue(Number(e.target.value))}></input>
    <br/>
    Sum is {finalSum}           
    <br/>
    <button onClick={() => setCounter(counter + 1)}>Counter ({counter})</button>
 </div>
  )
}

export default App 
