import { useState } from 'react'
// import './App.css'

// All the styling of the webpage is done by 'App.css' & 'index.css' files


// 1. states, components (let's define a global state)
// let state = {
//   count : 0
// }

// the above global state was capable of updating the state, but couldn't re-render the components
// to re-render we need 'hook' in react , so we import it

function App() {
  const [count, setCount] = useState(0);    // this is array destructuring
  /* 
    -> 1. useState(0):
          - useState is a React Hook that allows you to add state to functional components.
          - When you call useState, it returns an array with two values:
          - The current state value (count in this case).
          - A function to update that state (setCount in this case).
          - The argument passed to useState(0) is the initial value of the state, so count starts at 0.
       2. const [count, setCount]:
          - This is array destructuring. The useState hook returns two things:
          - count: The current value of the state (initially 0).
          - setCount: A function that lets you update the count state.
          - So, if you call setCount(newValue), it will change the value of count.
  */
  
  // function onClickHandler(){
  //   setCount(count + 1);      // 2. this updates the count using hook 'useState'
  // }

  return (
    <>  
    {/* Below code is XML and HTML */}
      <div>
        Konnichiwa! Watashi no u-ebu peji (webpage) e yokoso. 
        <br />
        Watashi no namae Akshit desu.
        <br /><br />

        {/* 1. Below is the real code, the above code is by me.*/}
        {/* <button onClick = {onClickHandler}>Counter : {count}</button> */}

        {/* 3. The above thing was also good, but we can define our custom button instead of this */}

        <CustomButton count = {count} setCount = {setCount}></CustomButton>

        {/* 4. Now since we have defined the custom component, we can reuse this */}
      </div>
      
    </>
  )
}

// 3. Define custom button (component)
function CustomButton(props){

  function onClickHandler(){
    props.setCount(props.count + 1);      
  }

  return <button onClick = {onClickHandler}>
    Counter {props.count}
  </button>
}

export default App
