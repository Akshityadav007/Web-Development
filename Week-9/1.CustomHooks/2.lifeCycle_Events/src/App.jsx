import './App.css';
import React, { useEffect, useState } from 'react';

// watch the console of webpage to monitor changes.

function App() {
  const [render, setRender] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setRender(r => !r);     // r => !r, this means it will assign the opposite value of render to it
    }, 5 * 1000);
  }, []);

  return (
    <>
    {/* Step 1. */}
    {/* {render ? <FunctionalComponent /> : <div></div>} */}
    {/* Step 2. */}
    {render ? <ClassComponent /> : <div></div>}
    </>
  )
}


// current methods
function FunctionalComponent() {
  React.useEffect(() => {
    // Perform setup or data fetching here (similar to componentDidMount)
    console.log("component mounted");

    return () => {
      // Cleanup code (similar to componentWillUnmount)
      console.log("component unmounted");
    };
  }, []);

  // Render UI
  return <div>
    From inside my component.
  </div>
}


// old methods
class ClassComponent extends React.Component {
  componentDidMount() {
    // Perform setup or data fetching here
    console.log("component mounted");
  }

  componentWillUnmount() {
    // Clean up (e.g., remove event listeners or cancel subscriptions)
      console.log("component unmounted");
  }

  render() {
    // Render UI
    return <div> From inside my component </div>
  }
}

export default App
