import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import { userService } from '../services';
import NotificationManager from 'react-notifications/lib/NotificationManager';

// Form initial state
const INITIAL_STATE = {
    fname: "",
    lname: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
    role : "client",
    gridCheck: false
};

const SignUp = () => {  

    const router = useRouter();

    const [data, setData] = useState(INITIAL_STATE);

    const { register, handleSubmit, errors, watch } = useForm();

    const password = useRef({});

    password.current = watch("password", "");


    const handleChange = e => {
        const { name, value } = e.target;
        setData(prevState => ({ ...prevState, [name]: value }));
    }

    useEffect(() => {
        if (userService.userValue && userService.userValue.type == 'success') {
            router.push('/');
        }
    }, [router])


    const onSubmit = async e => {
        // if (e && e.preventDefault) {
        //     e.preventDefault();
        // }
        try {
            const { fname, lname, email, number, password, role } = data;
            setData(data);
            const payload = { fname, lname, email, number, password, role };
            const user = await userService.register(payload);
            console.log(user)
            if(user.type == 'success' && user.role == 'staff') {
                router.push('/staff-profile');
                NotificationManager.success('Success message', user.msg);
                setData(INITIAL_STATE);
            } else if (user.type == 'success' && user.role == 'client') {
                router.push('/');
                NotificationManager.success('Success message', user.msg);
                setData(INITIAL_STATE);
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
                                <picture><img src="/images/signup-bg.jpg" alt="SignUp" /></picture>
                            </div>
                        </div>

                        <div className="col-lg-6 ptb-100">
                            <div className="signup-item">
                                <div className="signup-head">
                                    <h2>Sign Up Here</h2>
                                    <p>Already have an account? <Link href="/sign-in"><a>Sign In</a></Link></p>
                                </div>

                                <div className="signup-form">
                                    <form id="registerForm" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input 
                                                        type="text" 
                                                        name="fname"
                                                        className="form-control" 
                                                        placeholder="First Name"
                                                        value={data.fname}
                                                        onChange={handleChange}
                                                        ref={register({ required: true })} 
                                                    />
                                                    <div className='invalid-feedback' style={{display: 'block'}}>
                                                        {errors.fname && 'First Name is required.'}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input 
                                                        type="text" 
                                                        name="lname"
                                                        className="form-control" 
                                                        placeholder="Last Name" 
                                                        value={data.lname}
                                                        onChange={handleChange}
                                                        ref={register({ required: true })} 
                                                    />
                                                    <div className='invalid-feedback' style={{display: 'block'}}>
                                                        {errors.lname && 'Last Name is required.'}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input 
                                                        type="text" 
                                                        name="number"
                                                        className="form-control" 
                                                        placeholder="Phone Number" 
                                                        value={data.number}
                                                        onChange={handleChange}
                                                        ref={register({ required: true })} 
                                                    />
                                                    <div className='invalid-feedback' style={{display: 'block'}}>
                                                        {errors.number && 'Phone Number is required.'}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input 
                                                        type="email" 
                                                        name="email"
                                                        className="form-control" 
                                                        placeholder="Your Email" 
                                                        value={data.email}
                                                        onChange={handleChange}
                                                        ref={register({ required: true, pattern: /^\S+@\S+$/i })} 
                                                    />
                                                    <div className='invalid-feedback' style={{display: 'block'}}>
                                                        {errors.email && 'Email is required.'}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input 
                                                        type="password"
                                                        name="password"
                                                        className="form-control" 
                                                        placeholder="Password" 
                                                        // value={data.password}
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
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input 
                                                        type="password" 
                                                        name="confirmPassword"
                                                        className="form-control" 
                                                        placeholder="Confirm Password" 
                                                        value={data.confirmPassword}
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
                                                <div className="form-group">
                                                    <select className="form-control" value={data.role} onChange={handleChange} name="role">
                                                        <option value="client">Client</option>
                                                        <option value="staff">Staff</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="form-check">
                                                        <input 
                                                            name="gridCheck"
                                                            ref={register({
                                                                validate: value =>
                                                                value === true
                                                            })} 
                                                            className="form-check-input" 
                                                            type="checkbox" 
                                                            id="gridCheck" 
                                                        />
                                                        <label className="form-check-label" htmlFor="gridCheck">
                                                            Yes, I agree with all <Link href="/terms-condition">Terms & Conditions</Link>
                                                        </label>
                                                        <div className="invalid-feedback" style={{display: 'block'}}>
                                                            {errors.gridCheck && 'Accept Ts & Cs is required'}
                                                        </div>
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