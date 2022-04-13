import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Intro from './Intro';
import FAQ from './FAQ';
import Footer from './Footer';
import About from './About';
import Sponsers from './Sponsers';
// import Gallary from './Gallary';
// import axios from 'axios';

class Home extends React.Component {
    render (){
        return(
            <div>
                <Navbar/>
                <Intro/>
                <About/>
                <Sponsers />
                <FAQ/>
                <Footer/>
            </div>
        )
    }
}

export default Home;