import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import baseUrl from '../utils/baseUrl';

const INITIAL_STATE = {
    name: "",
    email: "",
    phone: "",
    services: "",
    sDrName: "",
    age: "",
};

const Appointment = () => {

    const [apt, setApt] = useState(INITIAL_STATE);

    const { register, handleSubmit, errors } = useForm();

    const handleChange = e => {
        const { name, value } = e.target;
        setApt(prevState => ({ ...prevState, [name]: value }));
    }


    const onSubmit = async e => {
        // e.preventDefault();
        try {
            const url = `${baseUrl}/api/appointment`;
            console.log(apt);
            const { name, email, phone, services, sDrName, age } = apt;
            const payload = { name, email, phone, services, sDrName, age };
            await axios.post(url, payload);
            setApt(INITIAL_STATE);
        } catch (error) {
            console.log(error)
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
                                    <img src="/images/hart-img1.png" alt="Shape" />
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
                                                    <i className="icofont-hospital"></i>
                                                    <label>Services</label>
                                                    <select name='services' onChange={handleChange} className="form-control" id="exampleFormControlSelect1">
                                                        <option>Dental Care</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <i className="icofont-doctor"></i>
                                                    <label>Doctor</label>
                                                    <select name='sDrName' onChange={handleChange} className="form-control" id="exampleFormControlSelect2">
                                                        <option>Choose Your Doctor</option>
                                                        <option>John Smith</option>
                                                        <option>Sarah Taylor</option>
                                                        <option>Stevn King</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <i className="icofont-business-man"></i>
                                                    <label>Age</label>
                                                    <input 
                                                        name='age' 
                                                        onChange={handleChange} 
                                                        ref={register({ required: true })} 
                                                        value={apt.phone}
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="Your Age" 
                                                    />
                                                    <div className='invalid-feedback' style={{display: 'block'}}>
                                                        {errors.age && 'Age is required.'}
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