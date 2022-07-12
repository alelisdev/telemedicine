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
                                <p>+1 234 567 8901</p>
                                <p>+1 234 567 8901</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="emergency-item">
                            <i className="icofont-location-pin"></i>
                            <div className="emergency-inner">
                                <h3>Location</h3>
                                <p>California US</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-6 col-lg-4">
                        <div className="emergency-item">
                            <i className="icofont-ambulance-crescent"></i>
                            <div className="emergency-inner">
                                <h3>Ambulance</h3>
                                <p>+1 234 567 8901</p>
                                <p>+1 234 567 8901</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;