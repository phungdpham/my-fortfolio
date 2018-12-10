import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className="row navbar navbar-expand-lg">
            <div className='container' id="footer1">
                <div className="col-md-8 float-left">
                    <p>
                        <span className='mr-3'>Email Address: <strong>phung.tech@gmail.com</strong></span>
                        <span>Contact Number: <strong>407.779.2731</strong></span>
                    </p>
                </div>
                <div className="col-md-4 float-right">
                    <p>Phung Pham © 2018 Copyright</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;