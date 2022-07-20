import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import { userService } from '../services';

// Form initial state
const INITIAL_STATE = {
    password: "",
    confirmPassword: "",
};

const ResetPassword = () => {  

    const router = useRouter();

    const [resetInfo, setResetInfo] = useState(INITIAL_STATE);

    const { register, handleSubmit, errors, watch } = useForm();

    const password = useRef({});

    password.current = watch("password", "");


    const handleChange = e => {
        const { name, value } = e.target;
        setResetInfo(prevState => ({ ...prevState, [name]: value }));
    }


    const onSubmit = async e => {
        // e.preventDefault();
        try {
            const { password, confirmPassword } = resetInfo;
            setResetInfo(resetInfo);
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <TopHeader />

            <Navbar />
            
            <PageBanner 
                pageTitle="Reest Password" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Reest Password" 
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
                                    <h2>Reset Password Here</h2>
                                </div>

                                <div className="signup-form">
                                    <form id="registerForm" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input 
                                                        type="password"
                                                        name="password"
                                                        className="form-control" 
                                                        placeholder="Password" 
                                                        // value={resetInfo.password}
                                                        onChange={handleChange}
                                                        ref={register({
                                                            required: "You must specify a password",
                                                            minLength: {
                                                                value: 8,
                                                                message: "Password must have at least 8 characters"
                                                            }
                                                        })}
                                                    />
                                                    <div className='invalid-feedback' style={{display: 'block'}}>
                                                        {errors.password && <p>{errors.password.message}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input 
                                                        type="password" 
                                                        name="confirmPassword"
                                                        className="form-control" 
                                                        placeholder="Confirm Password" 
                                                        value={resetInfo.confirmPassword}
                                                        onChange={handleChange}
                                                        ref={register({
                                                            validate: value =>
                                                              value === password.current || "The passwords do not match"
                                                        })}
                                                    />
                                                    <div className='invalid-feedback' style={{display: 'block'}}>
                                                        { errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="text-center">
                                                    <button type="submit" className="btn signup-btn">Reset Passowrd</button>
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

export default ResetPassword;