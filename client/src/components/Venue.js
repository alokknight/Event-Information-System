import React from 'react';
// import { a } from 'react-router-dom';
import "./ven.css";


function Venue() {
  return (
    <div>
      <div className='section-header'>
        <h2 className='text-center'>Event Venue</h2>
        <p className='text-center'>Event location map and sample locations</p>
      </div>
      <div className='container mt-5'>
        <div className='row'>
          <div id="map-container-google-3" className="col-lg-6 z-depth-1-half map-container-3">
            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14253.622450778397!2d83.4331276!3d26.7314295!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc039bdf0211338a9!2sMadan%20Mohan%20Malaviya%20University%20Of%20Technology!5e0!3m2!1sen!2sin!4v1622038187561!5m2!1sen!2sin"
              style={{ border: "0" }} >
            </iframe>
          </div>
          <div className="col-lg-6 venue-info">
            <div className="row">
              <img className='img-fluid' src="http://mmmut.ac.in/icvmwt2021/images/mmmut.jpg" alt="MMMUT " />
              <div className="">
                <h3>Madan Mohan Malaviya University of Technology, Gorakhpur</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <div className='section-header '>
          <h2 className="text-center">Video Gallery</h2>
        </div>
        <div className="video-gallery">
          <div className='row'>
            <div className="gallery-item">
              <a className="vimeo-popup" href="https://www.youtube.com/watch?v=GcD5gf5llvk rel='noreferrer'">
                <img src="https://images.unsplash.com/photo-1650747835887-3abb06160fa7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Nauka Vihar" />
                <div className="gallery-item-caption">
                  <div>
                    <h2>Nauka Vihar</h2>
                    <p>The evergreen pond</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="gallery-item ">
              <a className="vimeo-popup" href="https://www.youtube.com/watch?v=SpMVPPIl8x0" rel='noreferrer'>
                <img src="http://www.mmmut.ac.in/BannerMMMUT/3.jpg" alt="MMMUT " />
                <div className="gallery-item-caption">
                  <div>
                    <h2>MMMUT</h2>
                    <p>THE TECHNOLOGICAL UNIVERSITY</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className='row'>
            <div className="gallery-item">
              <a className="vimeo-popup" href="https://www.youtube.com/watch?v=nRWlc3T5xgk" rel='noreferrer'>
                <img src="https://content3.jdmagicbox.com/comp/gorakhpur/m4/9999px551.x551.171203053019.g8m4/catalogue/syed-modi-railway-stadium-gorakhpur-stadiums-rj1jeu7qu3.jpg" alt="Railway stadium" />
                <div className="gallery-item-caption">
                  <div>
                    <h2>Syed Modi Railway Stadium,Gorakhpur</h2>
                    <p>The Training Ground of Gorakhpur</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="gallery-item">
              <a className="vimeo-popup" href="https://www.youtube.com/watch?v=iQLnYIzyzAE" rel='noreferrer'>
                <img src="https://scontent.flko7-2.fna.fbcdn.net/v/t31.18172-8/30072797_1997862160477070_8204703375831174149_o.jpg?stp=dst-jpg_p180x540&_nc_cat=101&ccb=1-5&_nc_sid=e3f864&_nc_ohc=7rIvF-katD0AX_bRVOs&_nc_ht=scontent.flko7-2.fna&oh=00_AT_IQCK6kAaUUeJcXDxzCJyHE2S8ZPpzKJT4pDIxqCbklg&oe=6299A177" alt="Gorakhpur Club" />
                <div className="gallery-item-caption">
                  <div>
                    <h2>Gorakhpur Club</h2>
                    <p>The Event Hub of Gorakhpur</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className='row'>
            <div className="gallery-item">
              <a className="vimeo-popup">
                <iframe
                  style={{ width: "100%", height: "100%" }}
                  src={"https://www.youtube.com/embed/iQLnYIzyzAE"}
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen="true"
                  title="video"
                />
                <div className="gallery-item-caption">
                  <div>
                    <h2>Gorakhpur Club</h2>
                    <p>The Event Hub of Gorakhpur</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Venue
