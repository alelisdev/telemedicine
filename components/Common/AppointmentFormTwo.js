import React from 'react';

const AppointmentFormTwo = () => {
    return (
        <div className="appointment-area-three">
            <div className="container-fluid p-0">
                <div className="row m-0">
                    <div className="col-lg-7">
                        <div className="appointment-item appointment-item-two">
                            <h2>Book your appointment</h2>
                            <span>We will confirm your appointment within 2 hours</span>

                            <div className="appointment-form">
                                <form>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <i className="icofont-business-man-alt-1"></i>
                                                <label>Name</label>
                                                <input type="text" className="form-control" placeholder="Enter Your Name" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <i className="icofont-ui-message"></i>
                                                <label>Email</label>
                                                <input type="email" className="form-control" placeholder="Enter Your Email" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <i className="icofont-ui-call"></i>
                                                <label>Phone</label>
                                                <input type="text" className="form-control" placeholder="Enter Your Number" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <i className="icofont-hospital"></i>
                                                <label>Services</label>
                                                <select className="form-control" id="exampleFormControlSelect1">
                                                    <option>Dental Care</option>
                                                    <option>Pathology</option>
                                                    <option>Diagnosis</option>
                                                    <option>Neurology</option>
                                                    <option>Cardiology</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <i className="icofont-doctor"></i>
                                                <label>Doctor</label>
                                                <input type="text" className="form-control" placeholder="Choose Your Doctor" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <i className="icofont-business-man"></i>
                                                <label>Age</label>
                                                <input type="text" className="form-control" placeholder="Your Age" />
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
                            <img src="/images/doctors/doctor4.jpg" alt="Doctor" />

                            <div className="speciality-emergency">
                                <div className="speciality-icon">
                                    <i className="icofont-ui-call"></i>
                                </div>
                                <h3>Emergency Call</h3>
                                <p>+07 554 332 322</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppointmentFormTwo;