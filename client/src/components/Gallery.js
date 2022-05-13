import React from 'react';
import './gallery.css'

export default function Gallery() {
    return (
        <div className="gallery mt-5">
            <div className='section-header'>
                <h2 className=''>Gallery</h2>
            </div>
            <div className="container page-top">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                        {/* <a href="https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR-1024-80.jpg.webp" className="fancybox" rel="ligthbox"> */}
                        <input type="checkbox" id="zoomCheck"/>
                        <label for="zoomCheck">
                            <img src="https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR-1024-80.jpg.webp" className="zoom img-fluid " alt="" />
                        </label>

                        {/* </a> */}
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a href="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" className="fancybox" rel="ligthbox">
                            <img src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" className="zoom img-fluid" alt="" />
                        </a>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a href="https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="fancybox" rel="ligthbox">
                            <img src="https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="zoom img-fluid " alt="" />
                        </a>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a href="https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="fancybox" rel="ligthbox">
                            <img src="https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="zoom img-fluid " alt="" />
                        </a>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a href="https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR-1024-80.jpg.webp" className="fancybox" rel="ligthbox">
                            <img src="https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR-1024-80.jpg.webp" className="zoom img-fluid " alt="" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a href="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" className="fancybox" rel="ligthbox">
                            <img src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" className="zoom img-fluid" alt="" />
                        </a>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a href="https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="fancybox" rel="ligthbox">
                            <img src="https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="zoom img-fluid " alt="" />
                        </a>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                        <a href="https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="fancybox" rel="ligthbox">
                            <img src="https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="zoom img-fluid " alt="" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}