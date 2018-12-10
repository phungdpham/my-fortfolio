import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './about.css';
import $ from 'jquery';
import Contact from '../Contact/Contact';
import Learn from './LearnMore';

$(document).ready(function() {
    $('#contact-me-btn').on('click', function() {
        $(this).addClass('e-hide');
    });

    $('#learn-more').on('click', function() {
        // $(this).addClass('e-hide');
        $('#contact-me-btn').removeClass('e-hide');
    })
})

const About = props => {
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
                                        <h6>Phung is an experienced React Developer</h6>
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
                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <div className='float-left' id='learn-more'>
                                                        <Link to={`${props.match.url}/learn`} role='button' className='btn btn-link'>
                                                            Learn More
                                                </Link>
                                                        <Link to='/about' role='button' className='btn btn-link'>Learn Less</Link>
                                                        <Route exact path={`${props.match.url}/learn`} component={Learn} />
                                                    </div>
                                                    <div className='float-right' id='contact-me'>
                                                        <Link to={`${props.match.url}/contact`} role='button' className='btn btn-warning' id='contact-me-btn'>
                                                            Contact Me
                                                </Link>
                                                        {/* <Link to='/about' role='button' className='btn btn-link'>Learn Less</Link> */}
                                                        <Route exact path={`${props.match.url}/contact`} component={Contact} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Contact /> */}
            </div>
        )
    }
export default About;