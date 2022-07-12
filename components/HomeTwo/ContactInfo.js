import React from 'react';

const ContactInfo = () => {
    return (
        <div className="emergency-area">
            <div className="container">
                <div className="row justify-content-center emergency-bg">
                    <div className="col-sm-6 col-lg-4">
                        <div className="emergency-item">
                            <i className="icofont-ui-call"></i>
                            <div className="emergency-inner">
                                <h3>Emergency Call</h3>
                                <p>+07 5554 3332 322</p>
                                <p>+07 5554 3332 322</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="emergency-item">
                            <i className="icofont-location-pin"></i>
                            <div className="emergency-inner">
                                <h3>Location</h3>
                                <p>2108-267 Road Quadra, Toronto, Canada Victiria Canada</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-6 col-lg-4">
                        <div className="emergency-item">
                            <i className="icofont-ambulance-crescent"></i>
                            <div className="emergency-inner">
                                <h3>Ambulance</h3>
                                <p>+07 5554 3332 322</p>
                                <p>+07 5554 3332 322</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;