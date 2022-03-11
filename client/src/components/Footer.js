import React from 'react'

export default function Footer() {
    return (
        <>
<div>

    <footer id="footer" >
        <div className="footer-top">
        <div className="container">
            <div className="row">

            <div className="col-lg-3 col-md-6 footer-info">
                <img src={require("./Images/castle.png")} alt="icon1"/>&nbsp; text1alok <br/>
                <img src={require("./Images/castle.png")} alt="icon1"/>&nbsp; text1alok <br/>
                <img src={require("./Images/castle.png")} alt="icon1"/>&nbsp; text1alok <br/>
                <img src={require("./Images/castle.png")} alt="icon1"/>&nbsp; text1alok <br/>
                <p>Website to show details of all events.</p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                <li><i className="fa fa-angle-right"></i> <a href="/">Home</a></li>
                <li><i className="fa fa-angle-right"></i> <a href="/about">About us</a></li>
                <li><i className="fa fa-angle-right"></i> <a href="/gallary">Gallary</a></li>
                <li><i className="fa fa-angle-right"></i> <a href="/terms&condition">Terms of service</a></li>
                <li><i className="fa fa-angle-right"></i> <a href="/policy">Privacy policy</a></li>
                </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                <li><i className="fa fa-angle-right"></i> <a href="#">Home</a></li>
                <li><i className="fa fa-angle-right"></i> <a href="#">About us</a></li>
                <li><i className="fa fa-angle-right"></i> <a href="#">Services</a></li>
                <li><i className="fa fa-angle-right"></i> <a href="#">Terms of service</a></li>
                <li><i className="fa fa-angle-right"></i> <a href="#">Privacy policy</a></li>
                </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                MMMUT Gorakhpur,<br/>
                India<br/>
                <strong>Phone:</strong> +91 789 786 7722<br/>
                <strong>Email:</strong> <a href="mailto:alokpatel885@gmail.com">alokpatel885@gmail.com</a><br/>
                <strong>Phone:</strong> +91 891 779 3044<br/>
                <strong>Email:</strong> <a href="mailto:pkg@gmail.com">pkg@gmail.com</a><br/>
                <strong>Phone:</strong> +91 872 666 8480<br/>
                <strong>Email:</strong><a href="mailto:shikharinfinity99@gmail.com"> shikharinfinity99@gmail.com</a><br/>
                </p>

                <div className="social-links">
                <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
                <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
                </div>

            </div>

            </div>
        </div>
        </div>

        <div className="container">
            <div className="copyright">
                &copy; Copyright <strong>CODERPAPA</strong>. All Rights Reserved
            </div>
            <div className="credits">
                {/* <!--
                All the links in the footer should remain intact.
                You can delete the links only if you purchased the pro version.
                Licensing information: https://bootstrapmade.com/license/
                Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=TheEvent --> */}
                Made with 💖
            </div>
        </div>
        <a href="#" className="back-to-top"><i className="fa fa-angle-up mx-4"></i></a>
</footer>

</div>
</>
    )
}
