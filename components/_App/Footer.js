import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-4">
                            <div className="footer-item">
                                <div className="footer-contact">
                                    <h3>Contact Us</h3>
                                    <ul>
                                        <li>
                                            <i className="icofont-ui-message"></i>
                                            <a href="mailto:ben@bkginvestments.com">helloben@bkginvestments.com</a>
                                            <a href="mailto:ben@bkginvestments.com">infoben@bkginvestments.com</a>
                                        </li>
                                        <li>
                                            <i className="icofont-stock-mobile"></i>
                                            <a href="tel:+07554332322">Call: +1 234 567 8901</a>
                                            <a href="tel:+236256256365">Call: +1 952 232 2334</a>
                                        </li>
                                        <li>
                                            <i className="icofont-location-pin"></i>
                                            California US
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-2">
                            <div className="footer-item">
                                <div className="footer-quick">
                                    <h3>Quick Links</h3>
                                    <ul>
                                        <li>
                                            <Link href="/about">
                                                <a>About us</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about">
                                                <a>Blog</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/blog-details">
                                                <a>Our Expertise</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/faq">
                                                <a>Faq</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/doctor">
                                                <a>Doctors</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <a>Contact us</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-sm-6 col-lg-3">
                            <div className="footer-item">
                                <div className="footer-quick">
                                    <h3>Our Services</h3>
                                    <ul>
                                        <li>
                                            <Link href="/service-details">
                                                <a>Dental Care</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>Cardiology</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>Hijama Therapy</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>Massage Therapy</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>Ambluance Sevices</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>Medicine</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="footer-item">
                                <div className="footer-feedback">
                                    <h3>Feedback</h3>
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Phone" />
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" id="your_message" rows="3" placeholder="Message"></textarea>
                                        </div>
                                        <div className="text-left">
                                            <button type="submit" className="btn feedback-btn">SUBMIT</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="copyright-area">
                <div className="container">
                    <div className="copyright-item">
                        <p>Copyright &copy; {currentYear} Design & Developed by <a href="/" target="_blank">topcoder728@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;