import React from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
// import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path="/signin" element = {<SignIn />} />
      <Route exact path='/signup' element = {<SignUp />} />
    </Routes>
  );
}

export default App;
