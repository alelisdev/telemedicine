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
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
    role : "client",
    gridCheck: false
};

const SignUp = () => {  

    const router = useRouter();

    const [reginfo, setReginfo] = useState(INITIAL_STATE);

    const { register, handleSubmit, errors, watch } = useForm();

    const password = useRef({});

    password.current = watch("password", "");


    const handleChange = e => {
        const { name, value } = e.target;
        setReginfo(prevState => ({ ...prevState, [name]: value }));
    }

    useEffect(() => {
        if (userService.userValue) {
            console.log(userService.userValue)
            router.push('/');
        }
    }, [])


    const onSubmit = async e => {
        // e.preventDefault();
        try {
            const { firstname, lastname, email, number, password, role } = reginfo;
            setReginfo(reginfo);
            const payload = { firstname, lastname, email, number, password, role };
            const user = await userService.register(payload);
            if(user) {
                router.push('/staff-profile');
            }
        } catch (error) {
            console.log(error)
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
                                    <form id="registerForm" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input 
                                                        type="text" 
                                                        name="firstname"
                                                        className="form-control" 
                                                        placeholder="First Name"
                                                        value={reginfo.firstname}
                                                        onChange={handleChange}
                                                        ref={register({ required: true })} 
                                                    />
                                                    <div className='invalid-feedback' style={{display: 'block'}}>
                                                        {errors.firstname && 'First Name is required.'}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input 
                                                        type="text" 
                                                        name="lastname"
                                                        className="form-control" 
                                                        placeholder="Last Name" 
                                                        value={reginfo.lastname}
                                                        onChange={handleChange}
                                                        ref={register({ required: true })} 
                                                    />
                                                    <div className='invalid-feedback' style={{display: 'block'}}>
                                                        {errors.lastname && 'Last Name is required.'}
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
                                                        value={reginfo.number}
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
                                                        value={reginfo.email}
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
                                                        // value={reginfo.password}
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
                                                        value={reginfo.confirmPassword}
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
                                                    <select className="form-control" value={reginfo.role} onChange={handleChange} name="role">
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