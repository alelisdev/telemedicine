import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const SignUp = () => {
    return (
        <>
            <TopHeader />

            <Navbar />
            
            <PageBanner 
                pageTitle="Sign Up" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Sign Up" 
                bgImage="page-title-one" 
            /> 
 
            <div className="signup-area ptb-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 pl-0">
                            <div className="signup-left">
                                <img src="/images/signup-bg.jpg" alt="SignUp" />
                            </div>
                        </div>

                        <div className="col-lg-6 ptb-100">
                            <div className="signup-item">
                                <div className="signup-head">
                                    <h2>Sign Up Here</h2>
                                    <p>Already have an account? <Link href="/sign-in"><a>Sign In</a></Link></p>
                                </div>

                                <div className="signup-form">
                                    <form>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="First Name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Last Name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Phone Number" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" placeholder="Your Email" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="password" className="form-control" placeholder="Password" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="password" className="form-control" placeholder="Confirm Password" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                                                        <label className="form-check-label" htmlFor="gridCheck">
                                                            Yes, I agree with all <Link href="/terms-condition">Terms & Conditions</Link>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="text-center">
                                                    <button type="submit" className="btn signup-btn">Sign Up</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
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

export default SignUp;