import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Footer from './Footer'
import Navbar from './Navbar'

function EventShow({match}) {
  const {eName} = useParams()
  const [event, setEvent] = useState({})
  const Navigate = useNavigate();
  useEffect(()=>{
    axios.get(`/event/${eName}`)
    .then(res => setEvent(res.data))
    .catch(err =>{
      console.log(err, 'Event not found react')
    })
  }, [eName])

  if(!event) Navigate("*")
  console.log(event)
  return (
    <div>
        <Navbar/>
        <p>{event.eTitle}</p>
        <h1>{event.eName}</h1>
        <div dangerouslySetInnerHTML={{__html: event.eBody}}></div>
        date: {event.eDate}<br></br>
        Venue: {event.eVenue}<br></br>
        Address: {event.address}<br></br>
        pinCode: {event.pinCode}<br></br>
        city: {event.city}<br></br>
        country: {event.country}<br></br>
        Contact mobNo: {event.code}
        {event.mobNo}<br></br>
        Contact email: {event.email}<br></br>
        <Footer/>
    </div>
  )
}

export default EventShow