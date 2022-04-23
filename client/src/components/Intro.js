import React from 'react'
import {decodeToken} from 'react-jwt'

export default function Intro() {
  const decode = decodeToken(localStorage.getItem('userTokenTime'))
  console.log(decode)
  return (
<div>
  <section id="intro">
    <div className="intro-container" data-aos="zoom-in" data-aos-delay="100">
      <h3 className="text-light">Welcome </h3>
      <h1 className="mb-4 pb-0">Find<br/><span>and Add</span> Upcoming Events</h1>
      <p className="mb-4 pb-0">One Website for all the Nearby Events</p>
      <a href="/event/add" className="btn btn-info">Add Event</a>
      <a href="#about" className="about-btn scrollto">About The Event</a>
    </div>
  </section>
</div>
  )
}
