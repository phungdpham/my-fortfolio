import React, { Component } from 'react';
import './about.css';
import $ from 'jquery';
import Contact from '../Contact/Contact';


class About extends Component {
    render() {
        $(document).ready(function () {
            $('#extend-content').hide();
            $('#learn-more').on('click', function () {
                $('#extend-content').show();
                $('#learn-more').text(' ');
            });
        })
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
                                    <div className='d-block mb-3'>
                                        <h6>Phung is an experienced Front End Full Stack Developer</h6>
                                        <p>
                                            He is able to build a sophisticated website with full database backend all the way from mockup to rollout,
                                            and adapt to work with diverse teams to implement projects. He experienced in building create websites for
                                            business owners, and web applicaiton that supports selling procedure for saleperson.
                                        </p>
                                    </div>

                                    <div>
                                        <div className='d-block'>
                                            <h6>His Skill sets</h6>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>React.js</li>
                                                        <li>HTML5</li>
                                                        <li>CS3</li>
                                                        <li>JavaScript</li>
                                                        <li>jQuery</li>
                                                        <li>Bootstrap</li>
                                                        <li>Responsive Design</li>
                                                    </ul>
                                                </div>
                                                <div className='col-md-6'>
                                                    <ul>
                                                        <li>Node.js</li>
                                                        <li>MongoDB</li>
                                                        <li>MySQL</li>
                                                        <li>Git</li>
                                                        <li>AWS</li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='d-block mb-3'>
                                            <span>
                                                <a id='view-portfolio' href='/'>View My Works</a>
                                            </span>
                                            <span className='ml-5'>
                                                <a id='learn-more'>Learn More</a>
                                            </span>

                                        </div>
                                        <div id='extend-content'>
                                            <div className='d-block'>
                                                <h6>He loves coding business application and creative websites</h6>
                                                <p>
                                                    Phung's original background is in Sale and Business Administration, and now he becomes a web developer.
                                                    He fell in love with coding since he started learning to build business website for his customers.
                                                    Having graduated from UCF bootcamp equips him with not only coding skill sets and fast learning ability of
                                                    new technologies in web developments. He loves building business website and web application to support
                                                    business owners.
                                            </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Contact />
            </div>
        )
    }
}
export default About;