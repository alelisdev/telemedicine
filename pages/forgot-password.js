import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import baseUrl from '../utils/baseUrl';
import { userService } from '../services';

const ForgotPassword = () => {
    const router = useRouter();
    
    const { register, handleSubmit, errors } = useForm();

    const [email, setEmail] = useState('');

    const handleChange = e => {
        setEmail(e.target.value);
    }


    const onSubmit = async () => {
        // e.preventDefault();
        try {
            const url = `${baseUrl}/api/auth/forgot-password`;
            axios.post(url, { email })
            .then((res) => {
                router.push('/confirm-email');
            })
            .catch((err) => {
                NotificationManager.error('Error message', 'Something went wrong');
            });
        } catch (error) {
            NotificationManager.error('Error message', 'Something went wrong');
        }
    };

    useEffect(() => {
        if (userService.userValue && userService.userValue.type == 'success') {
            router.push('/');
        }
    }, [])

    return (
        <>
            <TopHeader />

            <Navbar />
            
            <PageBanner 
                pageTitle="Forgot Password" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Forgot Password" 
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
                                    <h2>Forgot Password</h2>
                                    <p>Did you forget Passowrd? If you remember the password, <Link href="/sign-in"><a>Sign In Here</a></Link></p>
                                </div>
                                <div className="signup-form" onSubmit={handleSubmit(onSubmit)}>
                                    <form>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input 
                                                        name="email"
                                                        value={email}
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
                                                <div className="text-center">
                                                    <button type="submit" className="btn signup-btn">Send Email</button>
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

export default ForgotPassword;