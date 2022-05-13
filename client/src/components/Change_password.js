import React, { useState } from 'react'
import Navbar from './Navbar';
import Form from './Form'
import {useNavigate, useParams} from 'react-router'
import axios from 'axios';

function ChangePassword() {
  const {id, token} = useParams();
  const [ChangePass, setChangePass]= useState({});
  const Navigate = useNavigate();

  const onSubmitHandler = e =>{
    e.preventDefault();
    axios.put(`/api/password/reset/${id}/${token}`, ChangePass)
    .then(res => {
      alert('Password has been changed successfully')
      Navigate("/signin");
    })
    .catch(err=>{
      console.log(err);
      alert(err.error)
    })
  }
  return (
    <div>
      <Navbar />
        <div className="container">
          <div className="d-flex justify-content-center h-100">
            <div className="card">
              <div className="card-header">
              </div>

              <div className="card-body"></div>

              <Form onSubmit={onSubmitHandler}>
                <h3 className="text-center text-info">Change Password</h3>
                {/* <div className="form-group">
                  <label htmlFor="password" className="text-info">Old Password:</label><br />
                  <input
                    id="password"
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="********"
                    onChange={this.changeHandler}
                    required />
                </div> */}
                <div className="form-group">
                  <label htmlFor="password" className="text-info">New Password:</label><br />
                  <input
                    className="form-control"
                    type="password"
                    name="newPassword"
                    placeholder="********"
                    onChange={e => setChangePass({...ChangePass, newPassword: e.target.value})}
                    required />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="text-info">Confirm Password:</label><br />
                  <input
                    className="form-control"
                    type="password"
                    name="confPassword"
                    placeholder="********"
                    onChange={e => setChangePass({...ChangePass, confPassword: e.target.value})}
                    required />
                </div>
                <div className="d-flex justify-content-between align-items-end my-2">

                </div>

                <div className="card-footer">
                <button type='submit' className="btn transonclick float-left login_btn">Submit</button>
              </div>
              </Form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ChangePassword