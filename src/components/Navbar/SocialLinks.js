import React from 'react';
import './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SocialLink = () => {
	return(
		<ul>
			<li>
				<a href='github.com/phungdpham'>
					<FontAwesomeIcon icon={['fab', 'linkedin']} size='1x' />
				</a>
			</li>
		</ul>
	)
}

export default SocialLink;