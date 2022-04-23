import React from 'react';
import Home from './components/Home';
import About from './components/About';
import EventAdd from './components/Eventadd';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Sponsers from './components/Sponsers';
import FAQ from './components/FAQ';
// import Footer from './components/Footer';
import PNF from './components/404';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignOut from './components/SignOut';
import Protected from './components/Protected';
// import Navbar from './components/Navbar';

function App() {
  return (
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route exact path="/signin" element = {<SignIn />} />
      {/* <Route exact path="/signin" element = {<Login />} /> */}
      <Route exact path='/signup' element = {<SignUp />} />
      <Route exact path='/signout' element = {<SignOut/>} />
      <Route exact path="/about" element = {<About/>} />
      <Route exact path="/event/add" element = {<Protected cmp={EventAdd}></Protected>} />
      <Route exact path="/sponsers" element = {<Sponsers />} />
      <Route exact path="/FAQ" element = {<FAQ/>} />
      {/* <Route exact path="#footer" element = {<Footer/>} /> */}
      <Route path="*" element = {<PNF/> }/>
    </Routes>

  );
}

export default App;