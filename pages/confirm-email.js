import React, { useEffect } from 'react';
import Link from 'next/link';
import { userService } from '../services';
import { useRouter } from 'next/router';

function ConfirmEmail () {
    const router = useRouter();

    useEffect(() => {
        if (userService.userValue) {
            router.push('/');
        }
    })

    return(
        <>
            <div className='mt-5'>
                <img
                    className="d-block mx-auto mb-4"
                    src='images/newlogo.png'
                    alt="sent"
                    width={300}
                />
            </div>
            <div className="profile-area ptb-100 plr-15">
                <div className="container-fluid p-0">
                    <div className="appointment-item">
                        <h2 className='text-center'>Please check your email!</h2>
                        <img
                            className="d-block mx-auto mb-4"
                            src='images/16.png'
                            alt="sent"
                            width={100}
                        />
                        <p>
                        An email has been sent to <strong>topcoder728@gmail.com</strong>. Please click on the
                        included link to reset your password.
                        </p> 
                        <div className='text-center mt-5'>
                            <Link href="/sign-in">
                                <a className='btn btn-primary'><i className='icofont-rounded-left'></i>Return to Sini In</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConfirmEmail;
