import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="banner-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="banner-item">
                            <h1>Your Healthy Life is Our First Priority</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </p>
                            
                            <div className="common-btn-two">
                                <Link href="/appointment">
                                    <a>Get Appointment</a>
                                </Link>
                                <Link href="/about">
                                    <a className="cmn-btn-right-two">Learn More</a>
                                </Link>
                            </div>

                            <div className="banner-right">
                                <img src="/images/home-three/home-three-banner1.png" alt="Banner" />
                                <img src="/images/home-three/home-three-banner-shape2.png" alt="Banner" />
                                <img src="/images/home-three/home-three-banner-shape2.png" alt="Banner" />
                                <img src="/images/about-shape1.png" alt="Banner" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="heart-shape">
                <img src="/images/heart-graph.png" alt="Banner" />
            </div>
        </div>
    )
}

export default MainBanner;