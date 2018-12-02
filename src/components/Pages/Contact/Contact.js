import React from 'react';
import './contact.css';

const Contact = () => {
    return(
        <div className="p-3 bg-white text-dark">
            <div className="row">
                <div className="col-md-12">
                    <form className="mx-4">
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter Your Name" name="Name"></input>
                        </div>

                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter Your Email" name="email"></input>
                        </div>

                        <div className="form-group">
                            <label for="message">Message</label>
                            <textarea className="form-control" rows="5" id="message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;