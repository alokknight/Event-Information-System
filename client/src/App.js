import React from 'react';
import Home from './components/Home';
import About from './components/About';
import EventAdd from './components/Eventadd';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Sponsers from './components/Sponsers';
import FAQ from './components/FAQ';
import PNF from './components/404';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignOut from './components/SignOut';
import Protected from './components/Protected';
import EventShow from './components/EventShow';
import Dashboard from './components/Dashboard';
import EventEdit from './components/EventEdit';
import EmailVerify from './components/EmailVerify';
import ForgetPassword from './components/Forget_password';
import ChangePassword from './components/Change_password';

function App() {
  return (
    <Routes>
      <Route exact path="/" element = {<Home />} />
      <Route path="/signin" element = {<SignIn />} />
      <Route path='/signup' element = {<SignUp />} />
      <Route path='/signout' element = {<SignOut/>} />
      <Route path='/dashboard' element = {<Protected cmp={Dashboard}></Protected>}/>
      <Route path="/about" element = {<About/>} />
      <Route exact path="/event/add" element = {<Protected cmp={EventAdd}></Protected>} />
      <Route path='/event/edit/:eName' element = {<Protected cmp={EventEdit}></Protected>} />
      <Route path='/event/:eName' element={<Protected cmp= {EventShow}></Protected>}/>
      <Route path="/sponsers" element = {<Sponsers />} />
      <Route path="/FAQ" element = {<FAQ/>} />
      <Route path='/signup/:id/verify/:token' element={<EmailVerify/>}/>
      <Route path='/password/forget' element={<ForgetPassword/>}/>
      <Route path='/password/reset/:id/:token' element={<ChangePassword/>}/>
      <Route path="*" element = {<PNF/> }/>
    </Routes>

  );
}

export default App;