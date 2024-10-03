import { Dashboard } from '../components/Dashboard';
import { Landing } from '../components/Landing';
import './App.css';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';

function App() {
  return (
    <div>
      {/* 2. let us add a top bar */}

      {/* below is wrong way -> right way is 3. */}

      {/* <div>
        <button onClick = {() => {
          window.location.href = "/"        // this is wrong way as it is doing hard-reload (re - fetching HTML)
        }}>
          Landing Page
        </button>
        <button onClick = {() => {
          window.location.href = "/dashboard"
        }}>
          Dashboard
        </button>
      </div> */}

    {/* 1. make routes */}
    <BrowserRouter>
    {/* 3. Make a component, because useNavigate hook only works inside 'BrowserRouter' component where it can figure out the heirarchy tree. */}
      <Appbar />
      <Routes>
        <Route path = "/dashboard" element = {<Dashboard />} /> 
        <Route path = "/" element = {<Landing />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}


// 3. This is the right way to move across routes - using hook 'useNavigation()'
function Appbar(){
  const navigate = useNavigate();

  return  <div>
    <div>
      <button onClick = {() => { navigate("/") }}> Landing Page </button>
      <button onClick = {() => { navigate("/dashboard") }}> Dashboard </button>
    </div>
  </div>
}

export default App
