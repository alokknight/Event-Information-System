import React from 'react';
import Navbar from './Navbar';
import Intro from './Intro';
import FAQ from './FAQ';
import Footer from './Footer';
import About from './About';
import Sponsers from './Sponsers';
import Eschd from './EventScheduler';
import Esd1 from './Esd1';

function Home() {
  return (
    <div>
        <Navbar/>
        <Intro/>
        <About/>
        <Eschd/>
        <Esd1/>
        <Sponsers />
        <FAQ/>
        <Footer/>
    </div> 
 )
}

export default Home