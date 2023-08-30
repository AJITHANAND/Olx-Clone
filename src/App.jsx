import { Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Link } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup';



function App() {
  return (
    <div> 

      <Router>
        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element= { <Signup/>} />
        </Routes>
      </Router>


      
    </div>
  );
}

export default App;
