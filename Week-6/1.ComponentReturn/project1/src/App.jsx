import React, { useState } from "react"

/*
    => In this project we learn:
        1. .jsx files can have only one component(root) as return value.
        2.  - Re - rendering, if a child component changes, the whole parent component re - renders.
            - To avoid this, 
              -> Solution 1: 
                - we push the state down to the component.
                - Hence, whenever we have this kind of situation we keep the hooks at LCA (lowest common ancestor) of all the child components that require re-rendering.
              -> Soltion 2:
                - Use React memo (memoization - (not of DP)) => https://react.dev/reference/react/memo
                - const component = React.memo(component function)
*/


function App() {
  const [title, setTitle] = useState("Akshit");  
  
  function updateTitle(){
    setTitle(Math.random());
  }

  return (
    <div>
      {/* <HeaderWithButton /> */}                {/* Solution 1 */}

      <button onClick = {updateTitle}>Click to change the title</button>    {/* Common, Solution 2 */}
      <br /> <br />                                                          {/* Common, Solution 2 */}
      <Header title = {title} />                                             {/* Common, Solution 2 */}

      <Header title = "Akshit2" />
      <Header title = "Akshit3" />
    </div>
  )
}


// Solution 1
// function HeaderWithButton(){
//     const [title, setTitle] = useState("Akshit");  
    
//     function updateTitle(){
//       setTitle(Math.random());
//     }

//     return <div>
//       <button onClick = {updateTitle}>Click to change the title</button>
//       <br /> <br />
//       <Header title = {title} />
//     </div>
// }


// Solution 1
// function Header({title}){
//   return <div>
//       My name is: {title}
//   </div>
// }
 
const Header = React.memo(function Header({title}){
  // Solution 2
  return <div>
      My name is: {title}
  </div>
});

export default App
