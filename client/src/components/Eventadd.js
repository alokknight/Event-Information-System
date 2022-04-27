import React from "react";
import Navbar from "./Navbar";
import classicEditor from '@ckeditor/ckeditor5-build-classic';
import {CKEditor} from '@ckeditor/ckeditor5-react'
import axios from "axios";
import { Navigate } from "react-router-dom";

class EventAdd extends React.Component {
    constructor(props){
        super(props);
        this.state={
            eTitle:'',
            eName:'',
            eBody:'',
            eDate:'',
            eVenue: '',
            address:'',
            pinCode: '',
            city: '',
            country: '',
            code: '',
            mobNo: '',
            email: '',
            redirect: false
        }
    }
    changeHandler=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
        // console.log(e.target.value)
    }
    ckEditorHandler=(e,editor)=>{
        const data = editor.getData();
        this.setState({
            eBody: data
        })
        console.log(data)
    }
    onSubmitHandler=(e)=>{
        e.preventDefault();
        // axios.post({
        //   url: '/event/add',
        //   headers: {
        //     "Authorization": localStorage.getItem("userTokenTime")
        //   },
        //   body: JSON.stringify({
        //       eName: this.state.eName,
        //       eBody: this.state.eBody,
        //       eDate: this.state.eDate,
        //       address: this.state.address,
        //       pinCode: this.state.pinCode,
        //       city: this.state.city,
        //       country: this.state.country,
        //       code: this.state.code,
        //       mobNo: this.state.mobNo,
        //       email: this.state.email
        //   })
        // })
        axios.post('/event/add',{
            eTitle: this.state.eTitle,
            eName: this.state.eName,
            eBody: this.state.eBody,
            eDate: this.state.eDate,
            eVenue: this.state.eVenue,
            address: this.state.address,
            pinCode: this.state.pinCode,
            city: this.state.city,
            country: this.state.country,
            code: this.state.code,
            mobNo: this.state.mobNo,
            email: this.state.email
        })
        .then((res)=>{
            console.log("Event Response", res);
            alert('Event Added successfully');
            this.setState({
                redirect: true
            })
            
        })
        .catch((err)=>{
            console.log(err)
            alert('Please enter your regesitered Email ID')
        })
    }
    render(){
      if(this.state.redirect) return <Navigate to="/"/>
        return(
            <div>
                <Navbar/>
                <h1 className="text-center m-5">You can add your events here</h1>
                <form onSubmit={this.onSubmitHandler}>
                <div className="container py-5 h-100 ">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="container col-lg-15 bg-success text-white my-4 border border-dark rounded">
                <div className="p-5">
                  <h3 className="fw-normal mb-5">General Information</h3>

                         <div className="mb-4 pb-2">
                            <select className="select" name="eTitle" onChange={this.changeHandler}>
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
                        <input type='text' id="form3Examplev2" name="eName" className="form-control form-control-lg" onChange={this.changeHandler} required />
                        <label className="form-label" htmlFor="form3Examplev2">Event name</label>
                      </div>

                    </div>
                    <div className="col-md-15 mb-4 pb-2 ">

                      <div className="form-outline">
                        {/* <textarea type="text" id="form3Examplev3" className="form-control form-control-lg" /> */}
                        <div className="text-dark">
                        <CKEditor id="form3Examplev3" className="form-control form-control-lg" editor={classicEditor} onReady={editor =>{

                        }} onChange={this.ckEditorHandler} name="eBody"/>
                        </div>
                        <label className="form-label" htmlFor="form3Examplev3" rows='10'>Event Description and Details</label>
                      </div>

                    </div>
                    <div className="col-md-15 mb-4 pb-2 ">

                        <div className="form-outline">
                            <input type="date" name="eDate" onChange={this.changeHandler} required/>
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
                      <textarea type="text" id="form3Examplev4" className="form-control form-control-lg" name="eVenue" onChange={this.changeHandler} required />
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
                      <input type="text" name="address" id="form3Examplea2" className="form-control form-control-lg" onChange={this.changeHandler} required />
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
                        <input type="text" name="pinCode" id="form3Examplea4" className="form-control form-control-lg" onChange={this.changeHandler} required />
                        <label className="form-label" htmlFor="form3Examplea4">Pin Code</label>
                      </div>

                    </div>
                    <div className="col-md-7 mb-4 pb-2">

                      <div className="form-outline form-white">
                        <input type="text" name="city" id="form3Examplea5" className="form-control form-control-lg" onChange={this.changeHandler} required/>
                        <label className="form-label" htmlFor="form3Examplea5">City</label>
                      </div>

                    </div>
                  </div>

                  <div className="mb-4 pb-2">
                    <div className="form-outline form-white">
                      <input type="text" name="country" id="form3Examplea6" className="form-control form-control-lg" placeholder="India" onChange={this.changeHandler} required/>
                      <label className="form-label" htmlFor="form3Examplea6">Country</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-5 mb-4 pb-2">

                      <div className="form-outline form-white">
                        <input type="text" name="code" id="form3Examplea7" className="form-control form-control-lg" placeholder="+91" onChange={this.changeHandler} required/>
                        <label className="form-label" htmlFor="form3Examplea7">Code +</label>
                      </div>

                    </div>
                    <div className="col-md-7 mb-4 pb-2">

                      <div className="form-outline form-white">
                        <input type="text" name="mobNo" id="form3Examplea8" className="form-control form-control-lg" onChange={this.changeHandler} required/>
                        <label className="form-label" htmlFor="form3Examplea8">Phone Number</label>
                      </div>

                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="form-outline form-white">
                      <input type="text" name="email" id="form3Examplea9" className="form-control form-control-lg" onChange={this.changeHandler} required/>
                      <label className="form-label" htmlFor="form3Examplea9">Your Email</label>
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

                  <button type="submit" className="btn btn-light btn-lg" data-mdb-ripple-color="dark">Register</button>

                </div>
              </div>
            </div>
            
                </div>
                </form>
            </div>
        )
    }
}

export default EventAdd;