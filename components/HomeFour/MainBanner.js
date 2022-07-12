import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="slider-item slider-item-two slider-item-img">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="slider-text">
                            <div className="slider-shape">
                                <img src="/images/covid-circle-image.png" alt="Shape" />
                            </div>

                            <h1>Stay Home And Be Aware About Covid-19</h1>
                            <p>To help physician practices provide convenient health care access to their patients through secure video visits – and receive full reimbursement tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                            
                            <div className="common-btn">
                                <Link href="/appointment">
                                    <a>Get Appointment</a>
                                </Link>
                                <Link href="/about">
                                    <a className="cmn-btn-right">Learn More</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;