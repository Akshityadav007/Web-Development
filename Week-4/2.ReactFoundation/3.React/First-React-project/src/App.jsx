// jsx files (javascript XML) are a combination of javascript and xml

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <button onClick= {() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
    </>
  )
}

export default App
