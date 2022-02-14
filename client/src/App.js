import React from 'react';
import Home from './components/Home';
import EventAdd from './components/Eventadd';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import PNF from './components/404';
// import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignOut from './components/SignOut';
// import Navbar from './components/Navbar';

function App() {
  return (
    <Routes>
      {/* <Navbar/> */}
      <Route exact path="/" element = {<Home />} />
      <Route exact path="/signin" element = {<SignIn />} />
      <Route exact path='/signup' element = {<SignUp />} />
      <Route exact path='/signout' element = {<SignOut/>} />
      <Route exact path="/event/add" element = {<EventAdd />} />
      <Route path='*' element = {<PNF/> }/>
    </Routes>
  );
}

export default App;