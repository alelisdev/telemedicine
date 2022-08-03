import React, { useState } from 'react';
import baseUrl from '../../utils/baseUrl';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { NotificationManager } from 'react-notifications';
import { useRouter } from 'next/router';
const INITIAL_STATE = {
    name: "",
    email: "",
    phone: "",
    services: "",
    age: "",
};

const AppointmentFormTwo = () => {

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

            const payload = { name, email, phone, services, did, age };
            axios.post(url, payload)
            .then((res) => {
                setApt(INITIAL_STATE);
                NotificationManager.success('Success message', res.data.msg);
            })
            .catch(() => {
                NotificationManager.error('Error message', 'Something Went Wrong!');
            });
        } catch (error) {
            NotificationManager.error('Error message', 'Something went wrong');
        }
    };
    
    return (
        <div className="appointment-area-three">
            <div className="container-fluid p-0">
                <div className="row m-0">
                    <div className="col-lg-7">
                        <div className="appointment-item appointment-item-two">
                            <h2>Book your appointment</h2>
                            <span>We will confirm your appointment within 2 hours</span>

                            <div className="appointment-form">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <i className="icofont-business-man-alt-1"></i>
                                                <label>Name</label>
                                                <input type="text" name='name' value={apt.name} onChange={handleChange} ref={register({ required: true })} className="form-control" placeholder="Enter Your Name" />
                                                <div className='invalid-feedback' style={{display: 'block'}}>
                                                    {errors.name && 'Name is required.'}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <i className="icofont-ui-message"></i>
                                                <label>Email</label>
                                                <input type="email" name='email' value={apt.email} onChange={handleChange} ref={register({ required: true, pattern: /^\S+@\S+$/i })} className="form-control" placeholder="Enter Your Email" />
                                                <div className='invalid-feedback' style={{display: 'block'}}>
                                                    {errors.email && 'Email is required.'}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <i className="icofont-ui-call"></i>
                                                <label>Phone</label>
                                                <input type="text" name='phone' value={apt.phone} onChange={handleChange}  ref={register({ required: true })} className="form-control" placeholder="Enter Your Number" />
                                                <div className='invalid-feedback' style={{display: 'block'}}>
                                                    {errors.phone && 'Phone Number is required.'}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <i className="icofont-hospital"></i>
                                                <label>Services</label>
                                                <select className="form-control" value={apt.services} name='services' onChange={handleChange} ref={register({ required: true })} id="exampleFormControlSelect1">
                                                    <option value="" hidden>Choose a Service</option>
                                                    <option value='2'>Dental Care</option>
                                                    <option value='1'>Pathology</option>
                                                    <option value='3' >Diagnosis</option>
                                                    <option value='4' >Neurology</option>
                                                    <option value='5' >Cardiology</option>
                                                </select>
                                                <div className='invalid-feedback' style={{display: 'block'}}>
                                                    {errors.age && 'Services is required.'}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <i className="icofont-business-man"></i>
                                                <label>Age</label>
                                                <input type="text" name='age' value={apt.age} onChange={handleChange} ref={register({ required: true })} className="form-control" placeholder="Your Age" />
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

                    <div className="col-lg-5 pr-0">
                        <div className="speciality-item speciality-right speciality-right-two speciality-right-three">
                            <picture><img src="/images/doctors/doctor4.jpg" alt="Doctor" /></picture>

                            <div className="speciality-emergency">
                                <div className="speciality-icon">
                                    <i className="icofont-ui-call"></i>
                                </div>
                                <h3>Emergency Call</h3>
                                <p>+1 234 567 8901</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppointmentFormTwo;