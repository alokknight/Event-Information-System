import React from "react";
import './Eschd.css';
import { Link } from 'react-router-dom';


export default function Eschd() {
    return (
        <>
            <div className="event-schedule-area-two pad100 my-5" >
                <section id="Event">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header">
                            <h2>Event Schedule</h2>
                            <p>All Events are shown here</p>
                        </div>
                    </div>
                </section>
                <div className="container ">
                    {/*
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <div className="title-text">
                                <h2>Event Schedule</h2>
                            </div>
                            <p>
                                In ludus latine mea, eos paulo quaestio an. Meis possit ea sit. Vidisse molestie<br />
                                cum te, sea lorem instructior at.
                            </p>
                        </div>
                    </div>
                </div>
                */}

                    <div className="row ">
                        <div className="col-lg-12">
                            <ul className="nav custom-tab " id="myTab" role="tablist">
                                <li className="nav-item">
                                    <Link className="nav-link active show" id="home-tab Thursday" data-toggle="tab" to="/" role="tab" aria-controls="home" aria-selected="true">TODAY</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" id="profile-tab" data-toggle="tab" to="/upcoming" role="tab" aria-controls="profile" aria-selected="false">UPCOMING</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" id="contact-tab" data-toggle="tab" to="/past" role="tab" aria-controls="contact" aria-selected="false">PAST</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}