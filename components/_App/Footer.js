import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { NotificationManager } from 'react-notifications';
import axios from 'axios';
import baseUrl from '../../utils/baseUrl';

const INITIAL_STATE = {
    name: '',
    phone: '',
    message: ''
};

const Footer = () => {
    const { register, handleSubmit, errors } = useForm();
    const [feedback, setFeedback] = useState(INITIAL_STATE);

    const onSubmit = async (e) => {
        if (e && e.preventDefault) { // add?
            e.preventDefault();
        }
        console.log(errors);
        const url = `${baseUrl}/api/feedback/add`
        axios.post(url, feedback)
        .then( (res) => {
            NotificationManager.success('Success message', 'Feedback successfully submitted.');
            setFeedback(INITIAL_STATE);
        })
        .catch( (err) =>
            NotificationManager.error('Error message', 'Something went wrong')
        );
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFeedback(prevState => ({ ...prevState, [name]: value }));
    }

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
                                                <a>Besides anxiety & Depression</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>Hypertension</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>Prescription refills</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>Antidepressants</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>Sleeping pills</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>Insomnia</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>Erectile dysfunction</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>Relationship conflict</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>Marriage counseling</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>Diabetes</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>Allergy pills</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>Covid testing</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>Covid treatment</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>Doctor’s Note for work</a>
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
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-group">
                                            <input type="text" value={feedback.name} ref={register({ required: true })} onChange={handleChange} name='name' className="form-control" placeholder="Name" />
                                            <div className='invalid-feedback' style={{display: 'block'}}>
                                                {errors.name && 'Name is required.'}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" value={feedback.phone} ref={register({ required: true })} onChange={handleChange} name='phone' className="form-control" placeholder="Phone" />
                                            <div className='invalid-feedback' style={{display: 'block'}}>
                                                {errors.phone && 'Phone Number is required.'}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" value={feedback.message} onChange={handleChange} ref={register({ required: true })} name='message' id="your_message" rows="3" placeholder="Message"></textarea>
                                            <div className='invalid-feedback' style={{display: 'block'}}>
                                                {errors.message && 'Message is required.'}
                                            </div>  
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