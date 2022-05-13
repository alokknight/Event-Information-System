import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <>
<div>

    <footer id="footer" >
        <div className="footer-top">
        <div className="container">
            <div className="row">

            <div className="col-lg-3 col-md-6 footer-info">
                <img src={require("./Images/castle.png")} alt="icon1"/>&nbsp; Event Website<br/>
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
                {/* <h4></h4> */}
                <h4><Link to="/help" style={{ textDecoration: 'none', color:"#ffff"}}>Contact Us</Link></h4>
                <p>Still have Questions? Go ahead, ask:</p>
                <i className="fa fa-map-marker" ></i> MMMUT, GKP, INDIA<br />
                <i className="fa fa-phone" ></i> Phone: +91 7897867722<br />
                <i className="fa fa-envelope" > </i> Email: alokpatel885@mail.com<br />
                <form action="/action_page.php" target="_blank">
                    <p><input className="input border" type="text" placeholder="Name" required name="Name" /></p>
                    <p><input className="input border" type="text" placeholder="Email" required name="Email" /></p>
                    <p><input className="input border" type="text" placeholder="Message" required name="Message" /></p>
                    <button type="submit" className="btn green third">Send a Message</button>
                </form>
            </div>

            <div className="col-lg-3 col-md-6 footer-contact">
                <h4>DEVELOPED BY</h4>
                <p>
                MMMUT Gorakhpur,<br/>
                India<br/>
                <strong>Phone:</strong> +91 789 786 7722<br/>
                <strong>Email:</strong> <a href="mailto:alokpatel885@gmail.com">alokpatel885@gmail.com</a><br/>
                <strong>Phone:</strong> +91 891 779 3044<br/>
                <strong>Email:</strong> <a href="mailto:pkg@gmail.com">pkgcoder1@gmail.com</a><br/>
                <strong>Phone:</strong> +91 872 666 8480<br/>
                <strong>Email:</strong><a href="mailto:shikharinfinity99@gmail.com"> shikharinfinity99@gmail.com</a><br/>
                </p>

                <div className="social-links">
                <a href="https://www.codeworld.ml" className="twitter"> <i className="fa fa-twitter rotate360"></i></a>
                <a href="https://www.codeworld.ml" className="facebook"><i className="fa fa-facebook rotate360"></i></a>
                <a href="https://www.codeworld.ml" className="instagram"><i className="fa fa-instagram rotate360"></i></a>
                <a href="https://www.codeworld.ml" className="google-plus"><i className="fa fa-google-plus rotate360"></i></a>
                <a href="https://www.codeworld.ml" className="linkedin"><i className="fa fa-linkedin rotate360"></i></a>
                </div>

            </div>

            </div>
        </div>
        </div>

        <div className="container">
            <div className="copyright">
                &copy; Copyright <strong></strong>. All Rights Reserved
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
        {/* <a href="#" className="back-to-top"><i className="fa fa-angle-up mx-4"></i></a> */}
</footer>

</div>
</>
    )
}