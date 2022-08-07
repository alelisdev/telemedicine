import React, { useState, useEffect } from 'react';
import Link from '../../utils/ActiveLink';
import { userService } from '../../services';
import decodeToken from '../../utils/decodeToken';

const Navbar = () => {
    const [menu, setMenu] = useState(true);
    const [account, setAccount] = useState({});

    const toggleNavbar = () => {
        setMenu(!menu)
    }

    useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
    })

    useEffect(() => {
        if (userService.userValue && userService.userValue.type == 'success') {
            setAccount(decodeToken(userService.userValue.token));
        }
    }, [])

 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <div id="navbar" className="navbar-area sticky-top">
            <div className="main-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link href="/">
                            <a onClick={toggleNavbar} className="navbar-brand">
                                <picture><img src="/images/newlogo.png" alt="logo" /></picture>
                            </a>
                        </Link>

                        <button 
                            onClick={toggleNavbar} 
                            className={classTwo}
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="icon-bar top-bar"></span>
                            <span className="icon-bar middle-bar"></span>
                            <span className="icon-bar bottom-bar"></span>
                        </button>

                        <div className={classOne} id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link href="/" activeClassName="active">
                                        <a onClick={toggleNavbar} className="nav-link">
                                            Home
                                        </a>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="/about" activeClassName="active">
                                        <a onClick={toggleNavbar} className="nav-link">About</a>
                                    </Link>
                                </li>
   
                                <li className="nav-item">
                                    <Link href="#">
                                        <a onClick={e => e.preventDefault()} className="nav-link dropdown-toggle">
                                            Pages
                                        </a>
                                    </Link>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link href="/departments" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Departments</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/testimonials" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Testimonials</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/faq" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">{"FAQ's"}</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/coming-soon" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Coming Soon</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/privacy-policy" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Privacy Policy</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/terms-condition" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Terms & Conditions</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link href="#">
                                        <a onClick={e => e.preventDefault()} className="nav-link dropdown-toggle">
                                            Services
                                        </a>
                                    </Link>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link href="/services" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Services</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/service-details" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Service Details</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link href="#">
                                        <a onClick={e => e.preventDefault()} className="nav-link dropdown-toggle">
                                            Doctors
                                        </a>
                                    </Link>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link href="/doctors" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Doctors</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
 
                                <li className="nav-item">
                                    <Link href="/blog" activeClassName="active">
                                        <a onClick={toggleNavbar} className="nav-link">Blog</a>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="/contact" activeClassName="active">
                                        <a onClick={toggleNavbar} className="nav-link">Contact</a>
                                    </Link>
                                </li>
                                {
                                    account?.user?.email === 'stevekim@gmail.com' ? 
                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="nav-link dropdown-toggle">
                                                Admin
                                            </a>
                                        </Link>
                                        
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/admin/blogs" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Blogs</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/admin/users" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Users</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/admin/newsletters" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Newsletters</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li> :
                                    ''
                                }
                            </ul>
                        </div>

                        <div className="nav-srh">
                            <form>
                                <input type="text" className="form-control" id="search" placeholder="Search..." />

                                <button className="search-icon icon-search">
                                    <i className="icofont-search-1"></i>
                                </button>
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
