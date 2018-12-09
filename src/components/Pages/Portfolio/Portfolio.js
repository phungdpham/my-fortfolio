import React from 'react';
import './portfolio.css';

import Project from './Projects/Project';
import Practice from './Practice/Practices';


const Portfolio = () => {
    return (
        <div className="container bg-light mt-3 mb-3" id='portfolio-content'>
            {/* Heading */}
            <div className="row mx-2 pt-2" id='portfolio-title'>
                <h2 className='text-info'>Portfolio</h2>
            </div>
            <div className='mx-2 mt-3 mb-3'>
                <h5>Work Projects</h5>
                <Project />
            </div>
            <div className='mx-2 mb-3'>
                <h5>Practices</h5>
                <Practice />
            </div>
            
            
        </div>
    )
}

export default Portfolio;