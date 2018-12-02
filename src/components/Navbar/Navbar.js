import React from 'react';
import './navbar.css';
import NavTabs from './NavTabs';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container" id="header">
                <div className="p-3 mb-0 bg-info text-info" id="logo">
                    <a className="navbar-brand text-info mx-0 pb-0 font-weight-bold" href="/">PHUNG PHAM</a>
                </div>
                <NavTabs />
            </div>
        </nav>
    )
}

export default Navbar;