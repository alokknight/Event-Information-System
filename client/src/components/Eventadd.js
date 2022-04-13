import React from "react";
import { Navigate } from "react-router";
import Navbar from "./Navbar";

class EventAdd extends React.Component {
    constructor(props){
        super(props);
        this.state={
            redirect: localStorage.getItem('userTokenTime') ? true : false
        }
    }
    render(){
        if(!this.state.redirect) return <Navigate to="/signin"/>; 
        return(
            <div>
                <h1>You can add your events here</h1>
            </div>
        )
    }
}

export default EventAdd;