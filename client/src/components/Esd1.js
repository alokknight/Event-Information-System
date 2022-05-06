import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Eschd.css';

export default function Esd1() {

    const [todayEvents, setTodayEvents] = useState([])

    useEffect(()=>{
        axios.get('/event/today')
        .then(res => setTodayEvents(res.data))
        .catch(err => console.log(err.error))
    },[])
    // console.log(todayEvents)
  return (
    <div>
        <div className="event-schedule-area-two bg-color pad100"  >
            <div className="container" >
        <div className="tab-content" id="myTabContent" >
            <div className="tab-pane fade active show " id="today" role="tabpanel" >
                <div className="table-responsive" >
                    <table className="table" >
                        <thead > 
                            <tr style={{backgroundcolor:'black'}}>
                                <th className="text-center" scope="col">Date</th>
                                <th scope="col">Organiser</th>
                                <th scope="col">Event</th>
                                <th scope="col">Venue</th>
                                <th className="text-center" scope="col">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todayEvents.map(event => {
                                    return(
                                        <tr className="inner-box" key={event.eName} >
                                        <th scope="row">
                                            <div className="event-date">
                                                {/* <span>{event.eDate}</span> */}
                                                <p>{event.eDate}</p>
                                            </div>
                                        </th>
                                        <td>
                                            <div className="event-img">
                                                <h4>{event.eOrganiser}</h4>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="event-wrap">
                                                <h3>{event.eName}</h3>
                                                {/* <div className="meta">
                                                    <div className="time">
                                                        <span >2:00 PM - 05:00 PM </span>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="r-no">
                                                <span className=".demo-1 .main h4">{event.eVenue}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="primary-btn">
                                                <Link to={`/event/${event.eName}`}>
                                                    <button className='btn btn-primary'>Read More</button>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
    </div>
    </div>
        </div>
    </div>
  )
}
