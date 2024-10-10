import { Suspense } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

// lazy loading component
import {Signup} from './pages/Signup';
import {Signin} from './pages/Signin';
import {Dashboard} from './pages/Dashboard';
import {Landing} from './pages/Landing';
import {SendMoney} from './pages/SendMoney';


function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Suspense fallback = {<div>loading...</div>}>
            <Routes>
              <Route path = "/signup" element = {<Signup />} />
              <Route path = "/signin" element = {<Signin />} />
              <Route path = "/dashboard" element = {<Dashboard />} />              
              <Route path = "/send" element = {<SendMoney />} />            
              <Route path = "/" element = {<Landing />} /> 
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
