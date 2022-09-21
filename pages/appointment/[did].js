import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import TopHeader from '../../components/_App/TopHeader';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import baseUrl from '../../utils/baseUrl';
import { NotificationManager } from 'react-notifications';

const INITIAL_STATE = {
    name: "",
    email: "",
    phone: "",
    services: "",
    age: "",
};

const Appointment = () => {
    const router = useRouter();
    const [apt, setApt] = useState(INITIAL_STATE);
    const { did } = router.query
    const { register, handleSubmit, errors } = useForm();

    const handleChange = e => {
        const { name, value } = e.target;
        setApt(prevState => ({ ...prevState, [name]: value }));
    }
    
    const onSubmit = async e => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        try {
            const url = `${baseUrl}/api/appointment`;
            const { name, email, phone, services, age } = apt;
            const payload = { name, email, phone, services, age, did };
            axios.post(url, payload)
            .then((res) => {
                NotificationManager.success('Success message', res.data.msg);
                setApt(INITIAL_STATE);
            })
            .catch(() => {
                NotificationManager.error('Error message', 'Something Went Wrong!');
            });
        } catch (error) {
            NotificationManager.error('Error message', 'Something went wrong');
        }
    };
    return (
        <>
            <TopHeader />

            <Navbar />
            
            <PageBanner 
                pageTitle="Appointment" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Appointment" 
                bgImage="page-title-one" 
            /> 
            
            <div className="appointment-area-two ptb-100">
                <div className="container">
                    <div className="row align-items-center appointment-wrap-two">
                        <div className="col-lg-7">
                            <div className="appointment-item appointment-item-two">
                                <div className="appointment-shape">
                                    <picture>
                                        <img src="/images/hart-img1.png" alt="Shape" />
                                    </picture>
                                </div>

                                <h2>Book your appointment</h2>
                                <span>We will confirm your appointment within 2 hours</span>

                                <div className="appointment-form">
                                    <form id="appointmentForm" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <i className="icofont-business-man-alt-1"></i>
                                                    <label>Name</label>
                                                    <input 
                                                        name='name' 
                                                        onChange={handleChange} 
                                                        type="text" 
                                                        ref={register({ required: true })} 
                                                        value={apt.name}
                                                        className="form-control" 
                                                        placeholder="Enter Your Name" 
                                                    />
                                                    <div className='invalid-feedback' style={{display: 'block'}}>
                                                        {errors.name && 'Name is required.'}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <i className="icofont-ui-message"></i>
                                                    <label>Email</label>
                                                    <input 
                                                        name='email' 
                                                        onChange={handleChange} 
                                                        ref={register({ required: true, pattern: /^\S+@\S+$/i })} 
                                                        value={apt.email}
                                                        type="email" className="form-control" 
                                                        placeholder="Enter Your Email" 
                                                    />
                                                    <div className='invalid-feedback' style={{display: 'block'}}>
                                                        {errors.email && 'Email is required.'}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <i className="icofont-ui-call"></i>
                                                    <label>Phone</label>
                                                    <input 
                                                        name='phone' 
                                                        onChange={handleChange} 
                                                        ref={register({ required: true })} 
                                                        value={apt.phone}
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="Enter Your Number" 
                                                    />
                                                    <div className='invalid-feedback' style={{display: 'block'}}>
                                                        {errors.phone && 'Phone Number is required.'}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <i className="icofont-business-man"></i>
                                                    <label>Age</label>
                                                    <input 
                                                        name='age' 
                                                        type="text"
                                                        onChange={handleChange} 
                                                        ref={register({ required: true, pattern:{
                                                            value: /^(0|[1-9]\d*)(\.\d+)?$/
                                                         }, })} 
                                                        value={apt.age} 
                                                        className="form-control" 
                                                        placeholder="Your Age" 
                                                    />
                                                    <div className='invalid-feedback' style={{display: 'block'}}>
                                                        {errors.age && 'Age is required with a number.'}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <i className="icofont-hospital"></i>
                                                    <label htmlFor='services'>Services</label>
                                                    <select name='services' value={apt.services} onChange={handleChange} ref={register({ required: true })} className="form-control" id="services">
                                                        <option value="" hidden>Choose a Service</option>
                                                        <option value={2}>2</option>
                                                        <option value={3}>3</option>
                                                        <option value={4}>4</option>
                                                        <option value={5}>5</option>
                                                    </select>
                                                    <div className='invalid-feedback' style={{display: 'block'}}>
                                                        {errors.services && 'Services is required.'}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <button type="submit" className="btn appointment-btn">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="appointment-item-two-right">
                                <div className="appointment-item-content">
                                    <h2>Working Hours</h2>
                                    <ul>
                                        <li>Monday <span>9:00 AM - 8:00 PM</span></li>
                                        <li>Tuesday <span>9:00 AM - 8:00 PM</span></li>
                                        <li>Wednesday <span>9:00 AM - 8:00 PM</span></li>
                                        <li>Thursday <span>9:00 AM - 8:00 PM</span></li>
                                        <li>Friday <span>9:00 AM - 8:00 PM</span></li>
                                        <li>Saturday <span>9:00 AM - 8:00 PM</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    )
}

export default Appointment;