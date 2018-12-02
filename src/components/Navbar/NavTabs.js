import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavTabs = () => (
    <ul className="nav nav-tabs justify-content-end" id="nav-link">
        <li className="nav-item">
            <Link
                to='/'
                className={
                    window.location.pathname === "About" ? "nav-link text-info active" : "nav-link text-info"
                }
            >
                About
            </Link>
        </li>
        <li className="nav-item">
            <Link
                to='/portfolio'
                className={
                    window.location.pathname === "Portfolio" ? "nav-link text-info active" : "nav-link text-info"
                }
            >
                Portfolio
            </Link>
        </li>
        <li className="nav-item">
        <Link
                to='/contact'
                className={
                    window.location.pathname === "Contact" ? "nav-link text-info active" : "nav-link text-info"
                }
            >
                Contact
            </Link>
        </li>
    </ul>
)

export default NavTabs;