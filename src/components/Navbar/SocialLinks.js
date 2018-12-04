import React from 'react';
import './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhungImage from '../../assets/images/phung/PhungAvatar_tn.jpg';


const SocialLink = () => {
	return(
		<ul className="nav nav-tabs" id='social-icon'>
			
			<li  className="nav-item ml-3">
				<a href='https://github.com/phungdpham' target='_blank' title='Github'>
					<span className='icon'>
						<FontAwesomeIcon icon={['fab', 'github']} size='3x' color='#212F3C' />
					</span>
					<span className='tab-name'>
						<b>Github</b>
					</span>
				</a>
			</li>
			<li  className="nav-item ml-3">
				<a href='https://www.linkedin.com/in/phungdpham/' target='_blank'  title='Linkedin Profile'>
					<span className='icon'>
						<FontAwesomeIcon icon={['fab', 'linkedin']} size='3x'  color='#21618C' />
					</span>
					<span className='tab-name'>
						<b>Linkedin</b>
					</span>
				</a>
			</li>
			<li  className="nav-item ml-3">
				<a href='/' title='Portfolio'>
					<span className='icon'>
						<FontAwesomeIcon icon='folder-open' size='3x' color='#D4AC0D  ' />	
					</span>
					<span className='tab-name'>
						<b>Portfolio</b>
					</span>
				</a>
			</li>
			<li  className="nav-item ml-3">
				<a title='contact' href='/contact'>
					<span className='icon'>
						<FontAwesomeIcon icon='envelope' size='3x' color='#D4AC0D  ' />
					</span>
					<span className='tab-name'>
						<b>Contact</b>
					</span>
				</a>
			</li>
			<li  className="nav-item ml-3">
				<a href='/about'  title='About Me'>
					<span className='icon'>
						<img id='profile-img' src={PhungImage}></img>
					</span>
					<span className='tab-name'>
						<b>About Me</b>
					</span>

				</a>
			</li>
		</ul>
	)
}

export default SocialLink;