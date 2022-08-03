import React, { useState, useEffect } from 'react';
import TopHeader from '../../components/_App/TopHeader';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import AppointmentFormTwo from '../../components/Common/AppointmentFormTwo';
import Footer from '../../components/_App/Footer';
import { useRouter } from 'next/router';
import baseUrl from '../../utils/baseUrl';
import axios from 'axios';
import NotificationManager from 'react-notifications/lib/NotificationManager';

const DoctorDetails = () => {
    const router = useRouter();
    const { did } = router.query

    const [doctor, setDoctor] = useState({});


    useEffect(() => {
        if(did) {
            const url = `${baseUrl}/api/doctors/${did}`;
            axios.get(url)
            .then( (res) => {
                setDoctor(res.data);
            })
            .catch ( (err) => {
                NotificationManager.error('Error message', 'Something went wrong');
            });
        }
        
    }, [did])

    return (
        <>
            <TopHeader />
            
            <Navbar />

            <PageBanner 
                pageTitle={doctor.firstname + ' ' + doctor.lastname + "(" + doctor.major + ")"}
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Doctor Details" 
                bgImage="page-title-five" 
            /> 
 
            <div className="doctor-details-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="doctor-details-item doctor-details-left">
                                <img src={baseUrl + '/' + doctor.imagePath} alt="Doctor" />

                                <div className="doctor-details-contact">
                                    <h3>Contact info</h3>
                                    <ul>
                                        <li>
                                            <i className="icofont-ui-call"></i>
                                            Call: +{doctor.phone}
                                        </li>
                                        <li>
                                            <i className="icofont-ui-message"></i>
                                            {doctor.email}
                                        </li>
                                        <li>
                                            <i className="icofont-location-pin"></i>
                                            {doctor.address}
                                        </li>
                                    </ul>
                                </div>

                                <div className="doctor-details-work">
                                    <h3>Working hours</h3>
                                    <div className="appointment-item-two-right">
                                        <div className="appointment-item-content">
                                            <ul>
                                                <li>Monday <span>9:00 AM - 8:00 PM</span></li>
                                                <li>Tuesday <span>9:00 AM - 8:00 PM</span></li>
                                                <li>Wednesday <span>9:00 AM - 8:00 PM</span></li>
                                                <li>Sunday <span>9:00 AM - 8:00 PM</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="doctor-details-item">
                                <div className="doctor-details-right">
                                    <div className="doctor-details-biography">
                                        <h3>{doctor.firstname + ' ' + doctor.lastname} ({doctor.major})</h3>
                                    </div>

                                    <div className="doctor-details-biography">
                                        <h3>Biography</h3>

                                        <p>{doctor.biography}</p>
                                        
                                        <p></p>
                                    </div>

                                    <div className="doctor-details-biography">
                                        <h3>Educations</h3>
                                        <ul>
                                            {
                                                doctor.educations?.map((education, idx) => {
                                                    return(
                                                        <li key={idx}>
                                                            <p>{education.school + ' (' + education.startDate + '-' + education.endDate + ')'}</p>
                                                            <p>{education.degree + ' of ' + education.fieldOfStudy}</p>
                                                            <p>{education.description}</p>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>

                                    <div className="doctor-details-biography">
                                        <h3>Experiences</h3>
                                        <ul>
                                            {
                                                doctor.experiences?.map((experience, idx) => {
                                                    return(
                                                        <li key={idx}>
                                                            <p>{experience.company + ', ' + experience.title + ' (' + experience.startDate + '-' + experience.endDate + ')'}</p>
                                                            <p>{experience.description}</p>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-100">
                <AppointmentFormTwo />
            </div>
    
            <Footer />
        </>
    )
}

export default DoctorDetails;