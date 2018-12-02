import React from 'react';
import './navbar.css';
import NavTabs from './NavTabs';

const Navbar = () => {
        return (
            <div>
                <nav className="navbar py-0 px-0 navbar-light bg-light">
                    <div className="container" id="header">
                        <div className="p-3 mb-0 bg-info text-white" id="logo">
                            <a className="navbar-brand text-white mx-0 pb-0 font-weight-bold" href="/">PHUNG PHAM</a>
                        </div>
                        <NavTabs />
                    </div>
                </nav>
            </div>
        )
}

export default Navbar;