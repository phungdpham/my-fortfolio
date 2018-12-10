import React from 'react';
import './contact.css';

const Contact = () => {
    return(
        <div className="container mt-3 p-3 bg-white text-dark" id='contact-e'>
            <div className='row mx-0' id='title-contact'>
                <h2 className='mx-4 text-info'>Contact</h2>
            </div>
            <div className="row">
                <div className="col-md-12" id='contact-phung'>
                    
                    <div className='contact-info'>
                        <p>
                            <span>Email Address: </span>
                            <span>
                                <strong>phung.tech@gmail.com</strong>
                            </span>
                        </p>
                        <p className='float-right'>
                            <a href='mailto:phung.tech'>
                                <button type="button" class="btn btn-warning">Send Email</button>
                            </a>
                        </p>
                    </div>
                    <div className='contact-info'>
                        <p>
                            <span>Contact Number: </span>
                            <span><strong>(407) 779.2731</strong></span>

                        </p>
                        <p className='float-right'>
                            <a href='tel:+14077792731'>
                                <button type="button" class="btn btn-warning">Call Me</button>
                            </a>
                        </p>
                    </div>
                    <p className='contact-inno'>
                        Please feel free to contact me at the above contact information. 
                        Thank you for visting my website!
                    </p>
                  
                </div>
            </div>
        </div>
    )
}

export default Contact;