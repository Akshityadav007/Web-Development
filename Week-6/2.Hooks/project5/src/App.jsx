import { useState, useEffect, useRef } from 'react';
import './App.css'

/*
  -> Let us create a simpler todo application using custom hooks.
  -> A "state" refers to an object that holds dynamic data about a component. 
    - The state can change over time, usually in response to user actions or other events, and when it changes, it triggers a re-render of the component to reflect the new data.

*/

// wrong way of doing DOM
// function App() {
//   const [incomeTax, setIncomeTax] = useState(20000);

//   useEffect(() => {
//     setTimeout(() => {
//       document.getElementById("incomeTaxContainer").innerHTML = 10;
//     }, 5 * 1000);
//   }, []);


//   return (
//     <div>
//        Hi there, your ITRs are <div id = "incomeTaxContainer">{incomeTax}</div>
//     </div>
//   )
// }


// right way of DOM
function App() {
  const [incomeTax, setIncomeTax] = useState(20000);

  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      // console.log(divRef.current);
      divRef.current.innerHTML = 10;      // divRef.current gives the access of the current reference of specific page
    }, 5 * 1000);
  }, []);


  return (
    <div>
       Hi there, your ITRs are <div ref = {divRef}>{incomeTax}</div>
    </div>
  )
}

export default App
