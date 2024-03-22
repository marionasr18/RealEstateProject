import React, { useCallback } from "react";
// import Link from "./Link";
import "./app.css"
import { Outlet } from 'react-router-dom';

import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
    const loc = useLocation()
    const navigate = useNavigate();
    const navigateTo = useCallback((key) => {
        navigate('/' + key)
    }, [navigate])
    return (<>

        <div className="sub-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8">
                        <ul className="info">
                            <li key="infoList1"><i className="fa fa-envelope"></i> info@company.com</li>
                            <li key="mapList2"><i className="fa fa-map"></i> Dubai Marina Bay, FL 33160</li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <ul className="social-links">
                            {/* <li><i className="fa fa-facebook"></i></a></li> */}
                           <li><a href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                           strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </a></li>
                           <li><a href="#">  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a></li>
                            <li><a href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                             strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a></li>
                            <li><a href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                             strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a></li>
                            {/* <li><a href="https://x.com/minthu" target="_blank"><i className="fa fa-twitter"></i></a></li> */}
                            {/* <li><a href="#"><i className="fa fa-linkedin"></i></a></li> */}
                            {/* <li><a href="#"><i className="fa fa-instagram"></i></a></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            <a href="index.html" className="logo">
                                <h1>Villa</h1>
                            </a>
                            <ul className="nav">
                                <li key="homeLink"><a onClick={() => navigateTo("Home")} className={loc.pathname.includes('Home') ? "active" : ''}>Home</a></li>
                                <li key="PropertiesLink"><a onClick={() => navigateTo("Properties")} className={loc.pathname.includes('Properties') ? "active" : ''}>Properties</a></li>
                                <li key="ContactUsLink"><a onClick={() => navigateTo("ContactUs")} className={loc.pathname.includes('ContactUs') ? "active" : ''}>Contact Us</a></li>
                                <li key="schedVisitLink"><a href="https://www.youtube.com/watch?v=zSmOvYzSeaQ" target="_blank" rel="noopener noreferrer"><i className="fa fa-calendar"></i> Schedule a visit</a></li>
                            </ul>
                            <a className='menu-trigger'>
                                <span>Menu</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        <Outlet />
    </>)
};
export default Header;