import React from 'react';
import './navBar.css';
import Logo from '../assets/wcLogo.png';
import { Link } from 'react-scroll';

const NavBar = () => {
	return (
		<div className='nav_container desktop'>
			<div className='Logo'>
				<img src={Logo} alt='WcBroker' />
			</div>
			<div className='Links'>
				<ul className='Menu_container'>
					<li>
						<Link to='insurrance' smooth={true} duration={500} className='a'>
							Seguros
						</Link>
					</li>
					<li>
						<Link to='about' smooth={true} duration={600} className='a'>
							Nosotros
						</Link>
					</li>
					<li>
						<Link to='contact' smooth={true} duration={750} className='a'>
							Contacto
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
