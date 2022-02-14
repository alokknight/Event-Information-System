import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
// import axios from 'axios';

class Home extends React.Component {
    render (){
        return(
            <div>
                <Navbar/>
                <h1>This is home Page</h1>
                <Link to='/signin' className='text-info'>Login Here</Link> <br/>
                <Link to="/signup" className="text-info">Sign Up here</Link> <br/>
                <Link to="/event/add" className="text-info">Add New Event</Link> <br/> 
            </div>
        )
    }
}

export default Home;