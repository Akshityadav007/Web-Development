import './App.css'
import {countAtom, evenSelector } from "./store/atoms/count"
import {RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";


function App() {

  return (
    <div>
      {/* Always wrap the component using recoil with 'RecoilRoot' */}
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

// now this component will not re-render unnecessarily
function Count(){
  // console.log("re-rendered");
  return <div>
    <CountRender />
    <Buttons />
    <EvenOdd />            
  </div>
}

function CountRender(){
  // console.log("Count re-rendered");
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

function Buttons(){
  // const [count, setCount] = useRecoilState(countAtom);           // doing this re-renders the button
  // console.log("buttons re-rendered");
  const setCount = useSetRecoilState(countAtom);          // for this use a function inside setCount in onClick

  return <div>
    <button onClick = {() => { setCount(count => count + 1) }}> ⬆️ </button>
    <button onClick = {() => { setCount(count => count - 1) }}> ⬇️ </button>
  </div>
}


// Class assignment
function EvenOdd(){
  // console.log("Even odd re-rendered");
  // const count = useRecoilValue(countAtom);           // this is ugly way
  
  const isOdd = useRecoilValue(evenSelector);              // better way using selector (define a selector for this in count.js first)
  return <div>
    {(isOdd) ? "It is odd" : "It is even"}
  </div>
}

export default App
