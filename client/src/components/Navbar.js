import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

//////////////////////////////////////////////////////////////
//////////  class based react component( navbar)    //////////
//////////////////////////////////////////////////////////////

class Navbar extends React.Component{
    constructor() {
        super();
        this.state = {
            loggedIn: localStorage.getItem('userTokenTime')
        }
    };

        render(){
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">EMS</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {/* <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href='/event/add'>Add Event</a>
                                </li>
                                */}

                                {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href={props.dropdown1link}>{props.navbarDroplist1}</a></li>
                                        <li><a className="dropdown-item" href={props.drop1text1link}>{props.drop1text1}</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href={props.drop1text4link}>{props.drop1text4}</a></li>
                                    </ul>
                                </li> */}
                            </ul>

                            <React.Fragment>
                                {this.state.loggedIn ?
                                    <React.Fragment>
                                        <NavLink className="nav-item nav-link" to="/" exact>Home</NavLink>
                                        <NavLink className="nav-item nav-link" to='/event/venue' exact>Event Venue</NavLink>
                                        <NavLink className="nav-item nav-link" to="/event/add">Add Event</NavLink>
                                        <NavLink className="nav-item nav-link" to="/signout">Sign Out</NavLink>
                                    </React.Fragment>
                                    :
                                    <React.Fragment>
                                        <NavLink className="nav-item nav-link" to="/signin">Sign In</NavLink>
                                        <NavLink className="nav-item nav-link" to="/signup">Sign Up</NavLink>
                                    </React.Fragment>}

                                {/* <NavLink className="btn btn-primary" to={loginBtn.link} onClick={toggleStyle}>{btntext}</NavLink>
                                <Link className="btn btn-primary" to={loginBtn.link} onClick={toggleStyle}> {btntext} </Link>
                                <button className="btn btn-primary" onclick={loginBtn.link} onClick={toggleStyle}> {btntext} </button> */}
                            </React.Fragment>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
} export default Navbar;

/////////////////////////////////////////////////////////////
////////////      end class based component     /////////////
/////////////////////////////////////////////////////////////




// ////////////////////////////////
// /// pkg
// ////////////////////////////////
// class Navbar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loggedIn: localStorage.getItem('userTokenTime')
//     }
//   }

//   render() {
//     return (
//       <nav className="navbar navbar-expand-lg navbar-light bg-info">
//         <div className="container">
//           <Link className="navbar-brand" to="/">The Event</Link>
//           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
//             <div className="navbar-nav">
//               {this.state.loggedIn ?
//                 <React.Fragment>
//                   <NavLink className="nav-item nav-link" to="/" exact>Home</NavLink>
//                   <NavLink className="nav-item nav-link" to="/event/add">Add Event</NavLink>
//                   <NavLink className="nav-item nav-link" to="/signout">Sign Out</NavLink>
//                 </React.Fragment>
//                 :
//                 <React.Fragment>
//                   <NavLink className="nav-item nav-link" to="/signin">Sign In</NavLink>
//                   <NavLink className="nav-item nav-link" to="/signup">Sign Up</NavLink>
//                 </React.Fragment>}
//             </div>
//           </div>
//         </div>
//       </nav>
//     );
//   }
// }
// export default Navbar;
//////////////////////////////////////////////////////////
/////////////    pkg ended succesfully     ///////////////
//////////////////////////////////////////////////////////



