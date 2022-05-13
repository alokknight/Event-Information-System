import React from 'react'
import Navbar from './Navbar'
import './about.css'
import Footer from './Footer'
export default function About() {
    return (
        <div>

          <Navbar/>

          <div className="bg-light">
            <div className="container py-5">
              <div className="row h-100 align-items-center py-5">
                <div className="col-lg-6">
                  <h1 className="display-4">About us </h1>
                  <p className="lead text-muted mb-0">Everything you want to know about the developers</p>
                  <p className="lead text-muted mb-0">Always striving to be your first choice</p>


                </div>
                <div className="col-lg-6 d-lg-block my-3"><img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" className="img-fluid"/></div>
              </div>
            </div>
          </div>

          <div className="bg-white py-5">
            <div className="container py-5">
              <div className="row align-items-center mb-5">
                <div className="col-lg-6 order-1 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                  <h2 className="font-weight-light">Our Vision</h2>
                  <p className="font-italic text-muted mb-4">We intend to create a website good enough for everyone to become the one stop shop for all kinds of management of events and easily navigable for everyone to work on.Also we provide easy management and update of events that is to provide a fluid experience along with an efficient work environment to whosoever is using the website. This not only helps our clients in getting rid of a lot of extra work they might have had to go through while planning an event and also save their time and money.We also provide </p>
                  <p> Advertising and accessing events via email.</p>
                  <p>Full support 24/7</p>
                </div>
                <div className="col-lg-5 px-5 mx-auto order-2 order-lg-2"><img src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt="" className="img-fluid mb-4 mb-lg-0"/></div>
              </div>

              <div className="row align-items-center mb-5">
                <div className="col-lg-6 order-1 order-lg-1"><i className="fa fa-leaf fa-2x mb-3 order-1 text-primary"></i>
                  <h2 className="font-weight-light">How We Function</h2>
                  <p className="font-italic text-muted mb-4">As is evident being an event management company we basically allow our users to manage and schedule their events.The Management and Scheduling of events starts with a simple task of creating an account on our website and then putiing in your required details of the kind of event you want to host or schedule.Accordingly you will receive a mail on your id ragarding verifications after which you can full fledgedly access and use your account on our website to manage all your tasks.</p>
                </div>
                <div className="col-lg-5 px-5 mx-auto order-2 order-lg-2"><img src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg" alt="" className="img-fluid mb-4 mb-lg-0"/></div>
              </div>

            </div>
          </div>

          <div className="bg-light py-5">
            <div className="container py-5">
              <div className="row mb-4">
                <div className="section-header">
                  <h2 className="display-4 font-weight-light">Our Team</h2>
                  <p className="font-italic  font-monospace text-info bg-secondary"> &nbsp;We are from CSE Btech Final Year, MMMUT Gorakhpur</p>
                </div>
              </div>

              <div className="row text-center">
                {/* <!-- Team item--> */}
                <div className="digital-column col-xl-4 col-sm-6 mb-5">
                  <div className="digital-image bg-white rounded shadow-sm py-5 px-4"><img  src={require('./Images/Prashant.jpg')} alt="MMMUt" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm bg-black"/>
                    <h5 className="mb-0">Prashant Gupta</h5>
                    <ul className="social mb-0 list-inline mt-3">

                      <li className="list-inline-item"><a href="https://github.com/imPGupta" className="social-link"><i className="fa fa-github"></i></a></li>
                      <li className="list-inline-item"><a href="https://www.linkedin.com/in/impgupta" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                      <li className="list-inline-item"><a href="mailto:prashantkgupta17@gmail.com" className="social-link"><i className="fa fa-envelope"></i></a></li>
                    </ul>
                  </div>
                </div>
                {/* <!-- End--> */}

                {/* <!-- Team item--> */}
                <div className="digital-column col-xl-4 col-sm-6 mb-5">
                  <div className="digital-image bg-white rounded shadow-sm py-5 px-4"><img src={require('./Images/Shikhar.jpg')} alt=""  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm bg-black"/>
                    <h5 className="mb-0">Shikhar Chaturvedi</h5>
                    <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item"><a href="https://github.com/shikhar790" className="social-link"><i className="fa fa-github"></i></a></li>
                      <li className="list-inline-item"><a href="https://www.linkedin.com/in/shikhar-chaturvedi-1026a21a8/" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                      <li className="list-inline-item"><a href="mailto:shikharinfinity99@gmail.com" className="social-link"><i className="fa fa-envelope"></i></a></li>
                    </ul>
                  </div>
                </div>
                {/* <!-- End--> */}

                {/* <!-- Team item--> */}
                <div className="digital-column col-xl-4 col-sm-6 mb-5">
                  <div className="digital-image bg-white rounded shadow-sm py-5 px-4"><img src={require('./Images/Alok.jpg')} alt="" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm bg-black"/>
                    <h5 className="mb-0">Alok Patel</h5>
                    <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item"><a href="https://www.github.com/alokknight" className="social-link"><i className="fa fa-github"></i></a></li>
                      <li className="list-inline-item"><a href="https://www.linkedin.com/in/alokknight" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                      <li className="list-inline-item"><a href="mailto:alokpatel885@gmail.com" className="social-link"><i className="fa fa-envelope"></i></a></li>

                    </ul>
                  </div>
                </div>
                {/* /* <!-- End--> */}



              </div>
            </div>
          </div>

          <Footer/>
        </div>
    )
}

