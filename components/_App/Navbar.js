import React from 'react';
import Link from '../../utils/ActiveLink';

const Navbar = () => {
    const [menu, setMenu] = React.useState(true)

    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
    })
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <div id="navbar" className="navbar-area sticky-top">
            <div className="main-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link href="/">
                            <a onClick={toggleNavbar} className="navbar-brand">
                                <img src="/images/logo.png" alt="logo" />
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
                                    <Link href="#" activeClassName="active">
                                        <a onClick={e => e.preventDefault()} className="nav-link dropdown-toggle">
                                            Home
                                        </a>
                                    </Link>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link href="/" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Home Demo - 1</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/index-2" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Home Demo - 2</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/index-3" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Home Demo - 3</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/index-4" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Home Demo - 4</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/index-5" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Home Demo - 5</a>
                                            </Link>
                                        </li>
                                    </ul>
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
                                            <Link href="/appointment" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Appointment</a>
                                            </Link>
                                        </li>

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
                                            <Link href="/sign-up" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Sign Up</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/sign-in" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Sign In</a>
                                            </Link>
                                        </li>
 
                                        <li className="nav-item">
                                            <Link href="/faq" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">FAQ's</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/404" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">404 Error Page</a>
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

                                        <li className="nav-item">
                                            <Link href="/doctor-details" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Doctor Details</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
 
                                <li className="nav-item">
                                    <Link href="#">
                                        <a onClick={e => e.preventDefault()} className="nav-link dropdown-toggle">
                                            Blog
                                        </a>
                                    </Link>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link href="/blog" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Blog</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/blog-details" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Blog Details</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link href="/contact" activeClassName="active">
                                        <a onClick={toggleNavbar} className="nav-link">Contact</a>
                                    </Link>
                                </li>
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
