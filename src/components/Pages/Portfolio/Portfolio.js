import React from 'react';
import './portfolio.css';

import Practice from './Practices1';


const Portfolio = () => {
    return (
        <div className="container bg-light mt-3 mb-3" id='portfolio-content'>
            {/* Heading */}
            <div className="row mx-2 p-2" id='portfolio-title'>
                <h2 className='text-info'>Portfolio</h2>
            </div>
            <div>
                <h5>Work Projects</h5>
            </div>
            <div>
                <h5>Practices</h5>
                <Practice />
            </div>
            
            
        </div>
    )
}

export default Portfolio;