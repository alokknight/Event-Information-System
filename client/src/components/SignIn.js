import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

import Form from './Form';
import Navbar from './Navbar';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      token: '',
      redirect: localStorage.getItem('userTokenTime') ? true : false
    }

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.emailInputChangeHandler = this.emailInputChangeHandler.bind(this);
    this.passwordInputChangeHandler = this.passwordInputChangeHandler.bind(this);
  }

  onSubmitHandler() {
    if (!(this.state.email === '' || this.state.password === '')
      && (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email))) {
      axios.post('/signin', {
        email: this.state.email,
        password: this.state.password
      }).then(res => {
        console.log(res);
        this.setState({
          token: res.data.token
        })
        const data = {
          token: this.state.token,
          time: new Date().getTime()
        }
        localStorage.setItem('userTokenTime', JSON.stringify(data));
        this.setState({
          redirect: true
        });
      }).catch(err => {
        console.log(err);
        alert('Please enter valid details');
      });
    } else {
      alert('Please enter valid details');
    }
  }

  emailInputChangeHandler(event) {
    this.setState({
      email: event.target.value
    });
  }

  passwordInputChangeHandler(event) {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    if (this.state.redirect) return <Navigate to="/" />;
    return (
      <React.Fragment>
        <Navbar />


        <div className="container">
          <div className="d-flex justify-content-center h-100">
            <div className="card">
              <div className="card-header">
                {/* <img style= "align:center"; src="{{request.scheme}}://{{request.META.HTTP_HOST}}/static/img/smartservelogo.jpg" alt="EMS"width="50" height="50"></img> */}
                <div className="d-flex justify-content-end social_icon">
                  <span><i className="fa fa-facebook-square"></i></span>
                  <span><i className="fa fa-google-plus-square"></i></span>
                  <span><i className="fa fa-twitter-square"></i></span>
                </div>
                {/* <h2>Event ManageMent</h2> */}
              </div>

              <div className="card-body"></div>

              <Form onSubmit={this.onSubmitHandler.bind(this)}>
                <h3 className="text-center text-info">Login</h3>
                <div className="form-group">
                  <label htmlFor="email" className="text-info">Email:</label><br />
                  <input
                    id="email"
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="xyz@domain.com"
                    onChange={this.emailInputChangeHandler}
                    required />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="text-info">Password:</label><br />
                  <input
                    id="password"
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="********"
                    onChange={this.passwordInputChangeHandler}
                    required />
                </div>
                <div className="d-flex justify-content-between align-items-end my-2">

                </div>

                <div className="card-footer">
                <button onClick={this.onSubmitHandler}
                  className="btn float-left login_btn"
                  type="button">Login</button>
              </div>


              {/* <div className="input-group form-group">
                <input type="email"
                            className="form-control"
                            placeholder = "Username@gmail.com"
                            name="username"/>
              </div>

              <div className="input-group form-group">
                <input type="password"
                            className="form-control"
                            placeholder="password"
                            name='password'/>
              </div> */}


              </Form>


              <div className="card-footer">
                <div className="d-flex justify-content-center links">
                  {/* <button onClick={this.onSubmitHandler}
                  className="btn btn-info btn-md"
                  // className="btn float-right login_btn"
                  type="button">Submit</button> */}

                  <Link to="/signup" className="d-flex justify-content-centertext-info">Sign Up</Link>
                  {/* <a href="/signup">Sign Up</a> */}
                </div>

                <div className="d-flex justify-content-center">
                  <a href="/forget_password/">Forgot your password?</a>
                </div>
              </div>

            </div>
          </div>
        </div>


      </React.Fragment>
    );
  }
}

export default SignIn;