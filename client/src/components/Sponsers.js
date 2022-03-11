import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';

export default function Sponsers() {
    return (
        <>
    <React.Fragment>
        <div>
            <section id="sponsers-container">

                <section id="sponsers">
                <div className="container" data-aos="fade-up">
                <div className="section-header">
                    <h2>Our Sponsers</h2>
                    <p>These are our Sponsers</p>
                </div>
                </div>
            </section>

                <div id="sponsers">
                    <div className="box">
                        <img src={require("./Images/trivento.jpeg")} alt="" />
                        <h2 className="h-secondary center">CodeWorld.ml</h2>
                        <p className="center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                    </div>

                    <div className="box">
                        <img src={require("./Images/treasurywines.png")} alt="" />
                        <h2 className="h-secondary center">coderpapa.org</h2>
                        <p className="center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.!</p>

                    </div>
                    <div className="box">
                        <img src={require("./Images/treasurywines.png")} alt="" />
                        <h2 className="h-secondary center">Strathisla</h2>
                        <p className="center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="box">
                        <img src={require("./Images/Strathisla.gif")} alt="" />
                        <h2 className="h-secondary center">Glenmorang</h2>
                        <p className="center">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </section>



            <section id="client-section">
                <section id="client">
                    <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <h2>Our Clients</h2>
                        <p>These colleges and companies are our regular customer.</p>
                    </div>
                    </div>
                </section>
                {/* <div className="owl-carousel client-carousel" data-aos="fade-up" data-aos-delay="100"> */}
                <div id="clients">
                    <div className="venobox" data-gall="client-carousel">
                        <img src={require("./Images/castle.png")} alt="Our Client" />
                    </div><span/>
                    <div className="venobox" data-gall="client-carousel">
                        <img src={require("./Images/castle.png")} alt="Our Client" />
                    </div>
                    <div className="venobox" data-gall="client-carousel">
                        <img src={require("./Images/castle.png")} alt="Our Client" />
                    </div>
                    <div className="venobox" data-gall="client-carousel">
                        <img src={require("./Images/castle.png")} alt="Our Client" />
                    </div>
                    <div className="venobox" data-gall="client-carousel">
                        <img src={require("./Images/castle.png")} alt="Our Client" />
                    </div>
                    <div className="venobox" data-gall="client-carousel">
                        <img src={require("./Images/trivento.jpeg")} alt="Our Client" />
                    </div>
                </div>
                {/* </div> */}
            </section>
        </div>
        </React.Fragment>
        </>
    )
}
