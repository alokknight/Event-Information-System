import React from 'react'
import { decodeToken } from 'react-jwt'
import { Link } from 'react-router-dom'
import './intro.css';
export default function Intro() {
  const token = localStorage.getItem('userTokenTime')
  if (token)
    var decode = decodeToken(token)
  return (
    <div>
      <section id="intro">
        <div className="intro-container" data-aos="zoom-in" data-aos-delay="100">
          <h3 className="text-light">Welcome! {(token) ? decode.firstName : ''} </h3>
          {/* <h1 className="mb-4 pb-0">Find<br/><span>and Add</span> Upcoming Events</h1> */}
          <h1 className="mb-4 pb-0"> Find and <br /><span> Add</span>
            <p style={{ "font-size": "2.1rem" }} className="bounce">
              Upc
              <Link to='/event/add'>
                <span className="char">
                  {/* o */}
                  <div className="col-lg-3">
                    <a href='/about' className='play-btn scrollto' ></a>
                  </div>
                </span>
              </Link>
              ming
            </p>
          </h1>
          <h1>Events</h1>
          <p className="mb-4 pb-0">One Website for all the Nearby Events</p>
          <Link to='/event/add' className='btn btn-primary' >Add Event</Link>
          <Link to="/about" className="about-btn scrollto">About The Event</Link>
        </div>
      </section>
    </div>
  )
}
