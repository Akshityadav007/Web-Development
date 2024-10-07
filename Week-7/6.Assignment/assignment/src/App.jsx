import './App.css';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import {lazy, Suspense} from 'react';

import Landing from  './components/Landing';
import {Question1} from './components/Question1';
import {Question2} from './components/Question2';
import {Question3} from './components/Question3';
import {Question4} from './components/Question4';
import {Question5} from './components/Question5';
import {Question6} from './components/Question6';
import {Question7} from './components/Question7';


function App() {

  return (
    <div>
      <BrowserRouter basename='/'>
        <Suspense fallback = {<div>Loading...</div>}>
          <TopBar />
          <hr></hr>
          <Routes>
            <Route path = '/' element = {<Landing />} />
            <Route path = '/Question1' element = {<Question1 />} />
            <Route path = '/Question2' element = {<Question2 />} />
            <Route path = '/Question3' element = {<Question3 />} />
            <Route path = '/Question4' element = {<Question4 />} />
            <Route path = '/Question5' element = {<Question5 />} />
            <Route path = '/Question6' element = {<Question6 />} />
            <Route path = '/Question7' element = {<Question7 />} />
          </Routes>
          </Suspense>
      </BrowserRouter>
    </div>
  )
}

function TopBar(){
  const navigate = useNavigate();

  return <div>
    <button onClick = {() => { navigate("/") }}>Home</button>
    <button onClick = {() => { navigate("/Question1") }}>Question 1</button>
    <button onClick = {() => { navigate("/Question2") }}>Question 2</button>
    <button onClick = {() => { navigate("/Question3") }}>Question 3</button>
    <button onClick = {() => { navigate("/Question4") }}>Question 4</button>
    <button onClick = {() => { navigate("/Question5") }}>Question 5</button>
    <button onClick = {() => { navigate("/Question6") }}>Question 6</button>
    <button onClick = {() => { navigate("/Question7") }}>Question 7</button>
  </div>
}

export default App
