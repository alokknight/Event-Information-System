import React from 'react'
// import { Link, Navigate } from 'react-router-dom'
// import axios from 'axios';

export default function Sponsers() {
    return (
        <>
    <React.Fragment>
        <div>
            <section>
                <section id="sponsers">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header">
                            <h2>Our Sponsers</h2>
                            <p>These are our Sponsers</p>
                        </div>
                    </div>
                </section>
                <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <img src={require("./Images/treasurywines.png")} alt="" />
                        <h2 className="h-secondary text-center">coderpapa.org</h2>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.!</p>
                    </div>
                    <div className="col text-center">
                        <img src={require("./Images/treasurywines.png")} alt="" />
                        <h2 className="h-secondary text-center">CodeWorld.ml</h2>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="col text-center">
                        <img src={require("./Images/treasurywines.png")} alt="" />
                        <h2 className="h-secondary text-center">Glenmorang</h2>
                        <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="col text-center">
                        <img src={require("./Images/treasurywines.png")} alt="" />
                        <h2 className="h-secondary text-center">Strathisla</h2>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                </div>
            </section>





            <section>
                <section id="client">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header">
                            <h2>Our Clients</h2>
                            <p><i>These colleges and companies are our regular customer.</i></p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <img src={require("./Images/treasurywines.png")} alt="Our Client" />
                            </div>
                            <div className="col text-center">
                                <img src={require("./Images/treasurywines.png")} alt="Our Client" />
                            </div>
                            <div className="col text-center">
                                <img src={require("./Images/treasurywines.png")} alt="Our Client" />
                            </div>
                            <div className="col text-center" >
                                <img src={require("./Images/treasurywines.png")} alt="Our Client" />
                            </div>
                        </div>
                </div>
                </section>
            </section>
        </div>
        </React.Fragment>
        </>
    )
}
