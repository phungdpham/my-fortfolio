import React, { Component } from 'react';
import './about.css';

const About = () => {
    return (
        <div className="container mt-3" id='about'>
            <div className="p-3 bg-light text-dark">
                <div className="row mx-0 d-flex justify-content-center" id='title-about'>
                    <h2 className="col-md-12 text-info">About Me</h2>
                </div>
                <div className="row my-4">
                    <div className="col-md-12">
                        <div className="media mb-3rem">

                            <div className="media-body">
                                <p>My name is Phung Pham. I am a saleperson in Orlando who loves to work with my clients.
                                    They are salon owners, most of whom like to build business website and applicaiton for
                                    their salon . This is the reason I like to take UCF coding bootcamp to become web
                                developer who can create beautiful websites for my clients.</p>
                                <p>I have a business background, so I started finding a little bit difficulty in learning
                                    technician things such as building website but I will do my best. This is an
                                    opportunity for me to change my career or having another job besides my current sale
                                job.</p>
                                <p>After finishing this coding class, I hope I can use my coding skills to make super fast,
                                and super fun websites. Also, I am looking for meeting and knowing new friends</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;