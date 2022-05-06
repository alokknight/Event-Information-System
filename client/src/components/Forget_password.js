import React, { useState } from 'react'
import Navbar from './Navbar';
import Form from './Form'
import {useNavigate} from 'react-router'
import { Link } from 'react-router-dom';
import axios from 'axios';

function ForgetPassword() {
  const [email, setEmail] = useState();
  const Navigate = useNavigate();
  const onSubmitHandler= e=>{
    e.preventDefault();
    axios.post('/api/password/forgot', email)
    .then(res=>{
      alert('Reset Link has been sent to your mail.')
      Navigate("/signin")
    })
    .catch(err=>{
      alert(err.message)
    })
  }

  return (
    <div>
       <Navbar />
        <div className="container">
          <div className="d-flex justify-content-center h-100">
            <div className="card">
              <div className="card-header">
                {/* <img style= "align:center"; src="{{request.scheme}}://{{request.META.HTTP_HOST}}/static/img/smartservelogo.jpg" alt="EMS"width="50" height="50"></img> */}

                {/* <h2>Event ManageMent</h2> */}
              </div>

              <div className="card-body"></div>

              <Form onSubmit={onSubmitHandler}>
                <h3 className="text-center text-info">Forget Password</h3>
                <div className="form-group">
                  <label htmlFor="email" className="text-info">Fill your email to reset:</label><br />
                  <input
                    id="email"
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="xyz@domain.com"
                    onChange={e => setEmail({email: e.target.value})}
                    required />
                </div>

                <div className="d-flex justify-content-between align-items-end my-2">

                </div>

                <div className="card-footer">
                <button type='submit' className="btn float-left login_btn">Send Request</button>
              </div>
              </Form>


              <div className="card-footer">
                <div className="d-flex justify-content-center links">
                  <Link className="nav-item nav-link" to="/signup">Sign Up</Link>
                  {/* <Link to="/signup" className="d-flex justify-content-centertext-info">Sign Up</Link> */}
                </div>

                <div className="d-flex justify-content-center">
                  <Link className="nav-item nav-link" to="/signin">Sign In</Link>
                </div>
              </div>

            </div>
          </div>
        </div>

    </div>
  )
}

export default ForgetPassword