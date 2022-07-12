import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    items:1,
    loop:true,
    margin:0,
    nav: true,
    dots: true,
    smartSpeed: 1000,
    autoplay:false,
    autoplayTimeout:9000,
    autoplayHoverPause:true,
    navText: [
        "<i class='icofont-simple-left'></i>",
        "<i class='icofont-simple-right'></i>"
    ],
};

const HeroSlider = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <>
            {display ? <OwlCarousel 
                className="home-slider owl-carousel owl-theme"
                {...options}
            > 
                <div className="slider-item slider-item-three slider-item-three-img">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="slider-text">
                                    <span>Stay Safe &</span>
                                    <h1>Be Informed About Covid-19</h1>

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

                <div className="slider-item slider-item-three slider-item-three-img-two">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="slider-text">
                                    <span>Stay Safe &</span>
                                    <h1>Be Aware About Covid-19</h1>
                                    
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
            </OwlCarousel> : ''}
        </>
    )
}

export default HeroSlider;