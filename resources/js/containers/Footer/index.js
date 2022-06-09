import React from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'reactstrap';
import { Colxx } from '../../components/common/CustomBootstrap';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-contact">
                            <figure>
                                <img src="images/guruu.png" alt="footer logo" className="footer-log"/>
                            </figure>
                            <p>
                                Suite 85, 139 Cardigan St <br />
                                Carlton,  3053<br />
                                Melbourn <br /><br />
                                <strong>Phone:</strong> +61411111111<br />
                                <strong>Email:</strong> info@example.com<br />
                            </p>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h2>Resources</h2>
                            <ul>
                                <li><i className="bx bx-chevron-right"/> <Link to={'/'}>Blog</Link></li>
                                <li><i className="bx bx-chevron-right"/> <Link to={'/'}>About Us</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h2>Help and Feedback</h2>
                            <ul>
                                <li><i className="bx bx-chevron-right"/> <Link to={'/'}>Feedback</Link></li>
                                <li><i className="bx bx-chevron-right"/> <Link to={'/'}>Testimonials</Link></li>
                                <li><i className="bx bx-chevron-right"/> <Link to={'/'}>Contact us</Link></li>
                                <li><i className="bx bx-chevron-right"/> <Link to={'/'}>Refund Policy</Link></li>
                                <li><i className="bx bx-chevron-right"/> <Link to={'/'}>Privacy policy</Link></li>
                                <li><i className="bx bx-chevron-right"/> <Link to={'/'}>Terms</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h2>Follow Us</h2>
                            <div className="social-links pt-3 pt-md-0">
                                <a href="#" className="facebook"><i className="bx bxl-facebook"/></a>
                                <a href="#" className="instagram"><i className="bx bxl-instagram"/></a>
                                <a href="#" className="twitter"><i className="bx bxl-twitter"/></a>
                                <a href="#" className="linkedin"><i className="bx bxl-linkedin"/></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
