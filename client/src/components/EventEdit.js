import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { decodeToken } from 'react-jwt'
import { useParams } from 'react-router'
import Footer from './Footer'
import Navbar from './Navbar'
import { useNavigate } from 'react-router'

function EventEdit({match}) {
    const {eName} = useParams();
    // console.log(eName)
    var userToken = localStorage.getItem('userTokenTime');
    if(userToken){
        var decoded = decodeToken(userToken)
        // console.log(decoded)
    }
    const Navigate = useNavigate();
    const [Event, setEvent] = useState({})
    // const [redirect, setRedirect] = useState(false);
    useEffect(()=>{
        axios.get(`/api/event/${eName}`)
        .then(res => {
          setEvent(res.data)
          if(res.data.userEmail !== decoded.email)
            throw new Error ('Unauthorized Access')
        })
        .catch(err => {
          alert(err)
          Navigate('/')
          console.log(err)})
    },[eName])

    const onSubmitHandler = e =>{
        e.preventDefault();
        axios.put(`/api/event/${eName}`, Event, {
            headers: {
                'Authorization': `Bearer ${userToken}`,
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            console.log("Event Update", res)
            alert('Event Updated')
            Navigate('/')
            // console.log(redirect)
        })
        .catch(err => {
            console.log(err.message)
            alert('User does not found with this Event')
        })
    }
    console.log(Event)

  return (
    <div>
         <div>
                <Navbar/>
                <h1 className="text-center m-5">Edit your events here</h1>
                <form onSubmit={onSubmitHandler}>
                <div className="container py-5 h-100 ">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="container col-lg-15 bg-success text-white my-4 border border-dark rounded">
                <div className="p-5">
                  <h3 className="fw-normal mb-5">General Information</h3>

                         <div className="mb-4 pb-2">
                            <select className="select" name="eTitle" onChange={e => setEvent({...Event, eTitle: e.target.value })} value={Event.eTitle} >
                           <option value="Fest">Event Title</option>
                            <option value="Cultural Fest">Cultural Fest</option>
                            <option value="Technical Event">Technical Event </option>
                            <option value="Gaming">Gaming</option>
                            <option value="Sports Carnival">Sports Carnival</option>
                            <option value="Personal Functions">Personal Functions</option>
                            <option value="Stage Shows">Stage Shows</option>
                            <option value="City level Carnival">City level Carnival</option>
                               </select>
                              </div>

                  <div className="row">
                    <div className="col-md-9 mb-4 pb-2">

                      <div className="form-outline">
                        <input type='text' id="form3Examplev2" name="eOrganiser" className="form-control form-control-lg" onChange={e => setEvent({...Event, eOrganiser: e.target.value })} value={Event.eOrganiser} required />
                        <label className="form-label" htmlFor="form3Examplev2">Event Organiser/Society</label>
                      </div>

                    </div>
                    <div className="col-md-15 mb-4 pb-2 ">

                      <div className="form-outline">
                        {/* <textarea type="text" id="form3Examplev3" className="form-control form-control-lg" /> */}
                        <div className="text-dark">
                        <CKEditor id="form3Examplev3" className="form-control form-control-lg" editor={ClassicEditor} onReady={editor =>{}}
                        onChange={(e, editor) => {
                            const data = editor.getData()
                            setEvent({...Event, eBody: data})
                        }}
                        name="eBody" data={Event.eBody}/>
                        </div>
                        <label className="form-label" htmlFor="form3Examplev3" rows='10'>Event Description and Details</label>
                      </div>

                    </div>
                    <div className="col-md-15 mb-4 pb-2 ">

                        <div className="form-outline">
                            <input type="date" name="eDate" onChange={e => setEvent({...Event, eDate: e.target.value })} value={Event.eDate} required/>
                        <label className="form-label" htmlFor="form3Examplev3" rows='10'>Event Date</label>
                        </div>

                    </div>

                  </div>

                  {/* <div className="mb-4 pb-2">
                    <select className="select">
                      <option value="1">Venue Type</option>
                      <option value="2">Bars and Clubs</option>
                      <option value="3">Restaurants</option>
                      <option value="4">Conference Centres</option>
                      <option value="5">Business Centres</option>
                      <option value="6">Sports Centres</option>
                      <option value="7">Halls</option>
                    </select>
                  </div> */}

                  <div className="col-md-15 mb-4 pb-2">
                    <div className="form-outline">
                      <textarea type="text" id="form3Examplev4" className="form-control form-control-lg" name="eVenue" onChange={e => setEvent({...Event, eVenue: e.target.value })} value={Event.eVenue} required />
                      <label className="form-label" htmlFor="form3Examplev4">Event Venue</label>
                    </div>
                  </div>

                  {/* <div className="row">
                    <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">

                      <div className="form-outline">
                        <input type="text" id="form3Examplev5" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form3Examplev5">Expected No. of People</label>
                      </div>

                    </div>
                    <div className="col-md-6">

                      <select className="select">
                        <option value="1">Preferred Week Day For The Event</option>
                        <option value="2">Sunday</option>
                        <option value="3">Monday</option>
                        <option value="4">Tuesday</option>
                        <option value="5">Wednesday</option>
                        <option value="6">Thursday</option>
                        <option value="7">Friday</option>
                        <option value="8">Saturday</option>
                      </select>

                    </div>
                  </div> */}

                </div>
                </div>
              <div className=" container col-lg-15 bg-indigo text-white border border-dark rounded">
                <div className="p-5">
                  <h3 className="fw-normal mb-5">Contact Details</h3>

                  <div className="mb-4 pb-2">
                    <div className="form-outline form-white">
                      <input type="text" name="address" id="form3Examplea2" className="form-control form-control-lg" onChange={e => setEvent({...Event, address: e.target.value })} value={Event.address} required />
                      <label className="form-label" htmlFor="form3Examplea2">Address</label>
                    </div>
                  </div>

                  {/* <div className="mb-4 pb-2">
                    <div className="form-outline form-white">
                      <input type="text" id="form3Examplea3" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Examplea3">Additional Information</label>
                    </div>
                  </div> */}

                  <div className="row">
                    <div className="col-md-5 mb-4 pb-2">

                      <div className="form-outline form-white">
                        <input type="text" name="pinCode" id="form3Examplea4" className="form-control form-control-lg" onChange={e => setEvent({...Event, pinCode: e.target.value })} value={Event.pinCode} required />
                        <label className="form-label" htmlFor="form3Examplea4">Pin Code</label>
                      </div>

                    </div>
                    <div className="col-md-7 mb-4 pb-2">

                      <div className="form-outline form-white">
                        <input type="text" name="city" id="form3Examplea5" className="form-control form-control-lg" onChange={e => setEvent({...Event, city: e.target.value })} value={Event.city} required/>
                        <label className="form-label" htmlFor="form3Examplea5">City</label>
                      </div>

                    </div>
                  </div>

                  <div className="mb-4 pb-2">
                    <div className="form-outline form-white">
                      <input type="text" name="country" id="form3Examplea6" className="form-control form-control-lg" placeholder="India" onChange={e => setEvent({...Event, country: e.target.value })} value={Event.country} required/>
                      <label className="form-label" htmlFor="form3Examplea6">Country</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-5 mb-4 pb-2">

                      <div className="form-outline form-white">
                        <input type="text" name="code" id="form3Examplea7" className="form-control form-control-lg" placeholder="+91" onChange={e => setEvent({...Event, code: e.target.value })} value={Event.code} required/>
                        <label className="form-label" htmlFor="form3Examplea7">Code +</label>
                      </div>

                    </div>
                    <div className="col-md-7 mb-4 pb-2">

                      <div className="form-outline form-white">
                        <input type="text" name="mobNo" id="form3Examplea8" className="form-control form-control-lg" onChange={e => setEvent({...Event, mobNo: e.target.value })} value={Event.mobNo} required/>
                        <label className="form-label" htmlFor="form3Examplea8">Contact Number</label>
                      </div>

                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="form-outline form-white">
                      <input type="text" name="email" id="form3Examplea9" className="form-control form-control-lg" onChange={e => setEvent({...Event, email: e.target.value })} value={Event.email} required/>
                      <label className="form-label" htmlFor="form3Examplea9">Contact Email</label>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-start mb-4 pb-3">
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      value=""
                      id="form2Example3c"
                      required
                    />
                    <label className="form-check-label text-white" htmlFor="form2Example3">
                      I do accept the <a href="#!" className="text-white"><u>Terms and Conditions</u></a> of your site.
                    </label>
                  </div>

                  <button type="submit" className="btn transonclick btn-light btn-lg" data-mdb-ripple-color="dark">Update</button>

                </div>
              </div>
            </div>

                </div>
                </form>
                <Footer/>
            </div>
    </div>
  )
}

export default EventEdit