import './App.css'
// import { useState } from 'react';
// import { useInterval } from './hooks/useInterval';
import SearchBar from './components/SearchBar';


function App() {
  // 1.
  // const [count, setCount] = useState(0);
  
  // useInterval(() => {
  //   setCount(c => c + 1);
  // }, 1000);

  // 2.


  return (
    <>
    {/* 1. */}
    {/* Count is: {count} */}

    {/* 2. */}
    <SearchBar></SearchBar>
    </>
  )
}

export default App
