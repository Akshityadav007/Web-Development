import { useState } from 'react'
import './App.css'

/*
  => In this site, we'll learn about wrapper components.
  => Wrapper components wrap an inner React component.

*/

function App() {

  return (
   <div>
    {/* <CardWrapper innerComponent = {<TextComponent />} />
    <CardWrapper innerComponent = {<TextComponent2 />} /> */}
    {/* We won't be using the above syntax, instead we'll use below syntax for wrapper */}
      
    <CardWrapper>
      <TextComponent />
      <CardWrapper>
        <TextComponent2 />
      </CardWrapper>
    </CardWrapper>
   </div>
  )
}



function TextComponent(){
  return <div>
    Heya! Anata ga koko ni ite kurete ureshīdesu.
  </div>
} 
function TextComponent2(){
  return <div>
    Heya! Watashi no namae wa akushitto desu
  </div>
}

// wrong way⬇️
// function CardWrapper(prop) {
//   return <div style={{border : "2px solid black"}}>
//     {prop.innerComponent}
//   </div>
// }

function CardWrapper({children}) {
  return <div style={{border : "2px solid black"}}>
    {children}
  </div>
}

export default App
