import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import baseUrl from '../utils/baseUrl';

// Form initial state
const INITIAL_STATE = {
    email: "",
    password: "",
};

const SignIn = () => {

    const { register, handleSubmit, errors } = useForm();

    const [logininfo, setLogininfo] = useState(INITIAL_STATE);

    const handleChange = e => {
        const { name, value } = e.target;
        setLogininfo(prevState => ({ ...prevState, [name]: value }));
    }


    const onSubmit = async e => {
        // e.preventDefault();
        try {
            const url = `${baseUrl}/api/login`;
            console.log(logininfo);
            const { email, password } = logininfo;
            const payload = { email, password };
            await axios.post(url, payload);
            console.log(url);
            setLogininfo(INITIAL_STATE);
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <TopHeader />

            <Navbar />
            
            <PageBanner 
                pageTitle="Sign In" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Sign In" 
                bgImage="page-title-one" 
            />

            <div className="signup-area ptb-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 pl-0">
                            <div className="login-left">
                                <img src="/images/login-bg.jpg" alt="Login" />
                            </div>
                        </div>

                        <div className="col-lg-6 ptb-100">
                            <div className="signup-item">
                                <div className="signup-head">
                                    <h2>Sign In Here</h2>
                                    <p>Didn't you account yet? <Link href="/sign-up"><a>Sign Up Here</a></Link></p>
                                </div>
                                <div className="signup-form" onSubmit={handleSubmit(onSubmit)}>
                                    <form>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input 
                                                        name="email"
                                                        value={logininfo.email}
                                                        onChange={handleChange}
                                                        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                                                        type="email" 
                                                        className="form-control" 
                                                        placeholder="Your Email" 
                                                    />
                                                    <div className='invalid-feedback' style={{display: 'block'}}>
                                                        {errors.email && 'Email is required.'}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input 
                                                        name="password"
                                                        value={logininfo.password}
                                                        onChange={handleChange}
                                                        ref={register({ required: true })} 
                                                        type="password" 
                                                        className="form-control" 
                                                        placeholder="Password" 
                                                    />
                                                    <div className='invalid-feedback' style={{display: 'block'}}>
                                                        {errors.password && 'Password is required.'}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="forgot-pass">
                                                        <a href="#">Forgot Password?</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="text-center">
                                                    <button type="submit" className="btn signup-btn">Login</button>
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

export default SignIn;