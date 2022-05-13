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
import Dashboard from './components/Dashboard';
import EventEdit from './components/EventEdit';
import EmailVerify from './components/EmailVerify';
import ForgetPassword from './components/Forget_password';
import ChangePassword from './components/Change_password';
import Esd2 from './components/Esd2';
import Esd3 from './components/Esd3';
import Updateprofile from './components/Updateprofile';
import Extra from './components/Extra';
import Event from './components/Event';
import Help from './components/Help';
import './loader.css';
import NetworkDetector from './Hoc/NetworkDetector';

class App extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }

  render() {
    const { loading } = this.state;

    if(loading) { // if your component doesn't have to wait for an async action, remove this block
      return null; // render null when app is not ready
    }

    return (
    <div>
      <Routes>
        <Route exact path="/" element = {<Home />} />
        <Route path="/about" element = {<About/>} />
        <Route path="/Extra" element = {<Extra/>} />
        <Route path='/upcoming' element={<Esd2/>}/>
        <Route path='/past' element={<Esd3/>}/>
        <Route path="/sponsers" element = {<Sponsers />} />
        <Route path="/FAQ" element = {<FAQ/>} />
        <Route path="/signin" element = {<SignIn />} />
        <Route path='/signup' element = {<SignUp />} />
        <Route path='/signout' element = {<SignOut/>} />
        <Route path='/dashboard' element = {<Protected cmp={Dashboard}></Protected>}/>
        <Route exact path="/event/add" element = {<Protected cmp={EventAdd}></Protected>} />
        <Route path='/event/edit/:eName' element = {<Protected cmp={EventEdit}></Protected>} />
        <Route path='/updateprofile' element = {<Updateprofile/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/event/:eName' element={<Event/>}/>
        <Route path='/signup/:id/verify/:token' element={<EmailVerify/>}/>
        <Route path='/password/forgot' element={<ForgetPassword/>}/>
        <Route path='/password/reset/:id/:token' element={<ChangePassword/>}/>
        <Route path="*" element = {<PNF/> }/>
      </Routes>
    </div>
    );
  }
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}
// export default NetworkDetector(App);
export default App;



// function App() {
//   return (
//     <Routes>
//       <Route exact path="/" element = {<Home />} />
//       <Route path="/about" element = {<About/>} />
//       <Route path='/upcoming' element={<Esd2/>}/>
//       <Route path='/past' element={<Esd3/>}/>
//       <Route path="/sponsers" element = {<Sponsers />} />
//       <Route path="/FAQ" element = {<FAQ/>} />
//       <Route path="/signin" element = {<SignIn />} />
//       <Route path='/signup' element = {<SignUp />} />
//       <Route path='/signout' element = {<SignOut/>} />
//       <Route path='/dashboard' element = {<Protected cmp={Dashboard}></Protected>}/>
//       <Route exact path="/event/add" element = {<Protected cmp={EventAdd}></Protected>} />
//       <Route path='/event/edit/:eName' element = {<Protected cmp={EventEdit}></Protected>} />
//       <Route path='/updateprofile' element = {<Updateprofile/>}/>
//       <Route path='/help' element={<Help/>}/>
//       <Route path='/event/:eName' element={<Event/>}/>
//       <Route path='/signup/:id/verify/:token' element={<EmailVerify/>}/>
//       <Route path='/password/forgot' element={<ForgetPassword/>}/>
//       <Route path='/password/reset/:id/:token' element={<ChangePassword/>}/>
//       <Route path="*" element = {<PNF/> }/>
//     </Routes>

//   );
// }
// export default App;