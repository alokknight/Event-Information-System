import React from 'react';
import Navbar from './Navbar';
import Intro from './Intro';
import FAQ from './FAQ';
import Footer from './Footer';
import About from './About';
import Sponsers from './Sponsers';

function Home() {
  return (
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

export default Home