import React from "react";
// import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

class PNF extends React.Component {
    render(){
        return(
            <div>
                <Navbar/>
                <h1>Please Enter Right Url</h1>
                <Link to='/'>Home</Link>
            </div>
        )
    }
}

export default PNF;