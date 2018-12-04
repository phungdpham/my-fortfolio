import React, { Component } from 'react';
import './LandingPage.css';
import Navbar from '../../Navbar/Navbar';

import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';


const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <About />
            <Portfolio />
            <Footer />
        </div>
    )
}

export default LandingPage;