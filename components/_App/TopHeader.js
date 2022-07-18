import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { userService } from '../../services';
import { useRouter } from 'next/router'
import jwtDecode from 'jwt-decode';

const TopHeader = () => {
    const router = useRouter();

    const [account, setAccount] = useState(null);

    const logout = () => {
        userService.logout();
        setAccount(null);
    }

    const editProfile = () => {
        if(account.user.role == 'staff') {
            router.push('/staff-profile');
        } else {
            router.push('/staff-profile');
            console.log('client')
        }

    }

    useEffect(() => {
        if (userService.userValue) {
            setAccount(jwtDecode(userService.userValue));
            console.log(account)
        }
    }, [])

    return (
        <div className="header-top">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-6 col-lg-6">
                        <div className="header-top-item">
                            <div className="header-top-left">
                                <ul>
                                    <li>
                                        <a href="tel:+07554332322">
                                            <i className="icofont-ui-call"></i>
                                            Call : +1 234 567 8901
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:ben@bkginvestments.com">
                                            <i className="icofont-ui-message"></i>
                                            ben@bkginvestments.com
                                        </a>
                                    </li>
                                    <li>
                                        <i className="icofont-location-pin"></i>
                                        California, US 
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="header-top-item">
                            <div className="header-top-right">
                                <ul className="lang-list">
                                    <li><a href="/">EN</a></li>
                                    <li><a href="/ar">AR</a></li>
                                </ul>

                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i className="icofont-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank">
                                            <i className="icofont-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank">
                                            <i className="icofont-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <i className="icofont-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="header-top-item">
                            <div className="header-top-left top-login">
                                <ul>
                                    {
                                        account ? (
                                        <li className='nav-item dropdown'>
                                            <a  className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="icofont-user-alt-5"></i></a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{zIndex: '1000000'}}>
                                                <a className="dropdown-item" href="#">{`${account.user.firstname} ${account.user.lastname}`}</a>
                                                <a className="dropdown-item" href="#">Dashboard</a>
                                                <a className="dropdown-item" onClick={editProfile}>Edit Profile</a>
                                                <a className="dropdown-item" onClick={logout} >Log Out</a>
                                            </div>
                                        </li>
                                        ) : (
                                        <li>
                                            <Link href="/sign-in">
                                                <a  className="nav-link"><i className="icofont-login"></i> </a>
                                            </Link>
                                        </li>
                                        )
                                    }
                               </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;