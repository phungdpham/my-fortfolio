import React from 'react';
import './navbar.css';

const Navbar = () => ({
    render() {
        return (
            <div>
                <nav class="navbar py-0 px-0 navbar-light bg-white">
                    <div class="container" id="header">
                        <div class="p-3 mb-0 bg-info text-white" id="logo">
                            <a class="navbar-brand text-white mx-0 pb-0 font-weight-bold" href="/">PHUNG PHAM</a>
                        </div>
                        <ul class="nav justify-content-end" id="nav-link">
                            <li class="nav-item">
                                <a class="nav-link active text-info">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-info">Portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-info">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
})

export default Navbar;