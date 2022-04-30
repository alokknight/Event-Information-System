import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { decodeToken } from 'react-jwt'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

function Dashboard() {
    const token = localStorage.getItem("userTokenTime")
    const decode = decodeToken(token)

    const [events, setEvent] = useState([]);
    const [change, setChange] = useState({
        edit: ''
    });
    useEffect(()=>{
        axios.get('/event',{
            headers: {
                'Authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            }
        })
        .then( res => setEvent(res.data))
        .catch(err => console.log(err.message))
    },[change,token])
    console.log(events)

    const eventDelete = event => {
        var r = window.confirm('Press Ok to delete')
        if(r === true){
            axios.delete(`/event/${event}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'content-type': 'application/json'
                }
            })
            .then(res => {
                console.log(res.data)
                setChange({
                    edit: ''
                });
            })
            .catch(err => console.log(err))
        }
    }

  return (
    <div>
        <Navbar/>
        <h1>Hi {decode.firstName}, Welcome to your profile</h1>
        {
            events.map(event => {
                return(
                    <div key={event._id} className="p-3 mb-2 bg-success text-white">
                        <h4 className='form-check-inline'>{event.eName}</h4>
                        <Link to={`/event/${event.eName}`}>
                            <button type="button" className="btn btn-primary form-check-inline"><i className="bi bi-binoculars"></i> View</button>
                        </Link>
                        <Link to={`/event/edit/${event.eName}`}> 
                            <button type="button" className="btn btn-info form-check-inline"><i className='bi bi-pencil-square'></i> Edit</button>
                        </Link>
                        <button type="button" 
                        className="btn btn-danger form-check-inline"
                        onClick={()=> eventDelete(event.eName)}
                        ><i className="bi bi-trash"></i> Delete</button>
                        <p>{event.snippet}</p>
                    </div>
                )
            })
        }
        <Footer/>
    </div>
  )
}

export default Dashboard