import React, { Component } from 'react';
import './LandingPage.css';
import Navbar from '../../Navbar/Navbar';

import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';


class LandingPage extends Component {
    state = {
        currentPage: "About"
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    renderPage = () => {
        if (this.state.currentPage === "About") {
            return <About />;
        } else if (this.state.currentPage === "Portfolio") {
            return <Portfolio />;
        } else {
            return <Contact />;
        }
    }

    render() {
        return (
            <div>
                <Navbar 
                    currentPage={this.state.currentPage}
                    handlePagechange={this.handlePagechange}
                />
                {this.renderPage()}
            </div>
        )
    }
}

export default LandingPage;