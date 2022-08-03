import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import { userService } from '../services';
import { NotificationManager } from 'react-notifications';

// Form initial state
const INITIAL_STATE = {
    email: "",
    password: "",
};

const SignIn = () => {
    const router = useRouter();
    
    const { register, handleSubmit, errors } = useForm();

    const [logininfo, setLogininfo] = useState(INITIAL_STATE);

    const handleChange = e => {
        const { name, value } = e.target;
        setLogininfo(prevState => ({ ...prevState, [name]: value }));
    }

    useEffect(() => {
        if (userService.userValue && userService.userValue.type == 'success') {
            router.push('/');
        }
    }, [])


    const onSubmit = async e => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        try {
            const { email, password } = logininfo;
            setLogininfo(logininfo);
            const payload = { email, password };
            const user = await userService.login(payload);
            if(user.type == 'success') {
                router.push('/');
                NotificationManager.success('Success message', 'Sign In Successed!');
                setLogininfo(INITIAL_STATE);
            } else {
                NotificationManager.error('Error message', user.msg);
            }
        } catch (error) {
            NotificationManager.error('Error message', 'Something went wrong');
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
                                    <p>{"Didn't you account yet?"} <Link href="/sign-up"><a>Sign Up Here</a></Link></p>
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
                                                    <div className="forgot-password">
                                                        <Link href="/forgot-password">
                                                        <a>Forgot Password?</a>
                                                        </Link>
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