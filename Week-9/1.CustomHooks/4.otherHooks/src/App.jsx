import './App.css'

// import {useIsOnline} from './hooks/useIsOnline';              // 1.
// import {useMousePointer} from './hooks/useMousePointer';      // 2.
import { useDimensions } from "./hooks/useDimensions";           // 3.

function App() {
  // const isOnline = useIsOnline();            // 1.
  // const mousePointer = useMousePointer();    // 2.
  const {width, height} = useDimensions();      // 3.

  return (
    <>
    {/* 1. */}
    {/* User is : {isOnline ? 'online ✅' : 'offline ❌'} */}

    {/* 2. */}
    {/* Your mouse position is {mousePointer.x} {mousePointer.y} */}


    {/* 3. */}
    Current dimensions are : {width} x {height};
      
    </>
  )
}

export default App