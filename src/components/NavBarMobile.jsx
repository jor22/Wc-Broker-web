import React, { useMemo, useRef, useState } from 'react';
import './navBar.css';
import logoMobile from '../assets/LogoMobile.png';
import { Link } from 'react-scroll';
import BurgerButton from './BurgerButton';
import { createPortal } from 'react-dom';

const NavBarMobile = () => {
	const [isActive, setIsActive] = useState(false);

	const linksHeightRef = useRef(null);

	const handleClick = () => {
		setIsActive(!isActive);
	};

	const linksHeight = useMemo(() => {
		if (linksHeightRef.current) {
			const height = linksHeightRef.current.offsetHeight;
			return height;
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isActive]);

	const navNode = document.getElementById('nav');

	return createPortal(
		<>
			<div className='nav_container mobile'>
				<div className='LogoMobile'>
					<img src={logoMobile} alt='WcBroker' />
				</div>

				<div className='burger'>
					<BurgerButton isActive={isActive} handleClick={handleClick} />
				</div>
			</div>
			<div className='nav_expand_options_container' style={{ height: isActive && linksHeight ? `${linksHeight}px` : '0px' }}>
				<div ref={linksHeightRef} className='links'>
					<Link to='insurrance' smooth={true} duration={500} className='a' onClick={() => setIsActive(false)}>
						Seguros
					</Link>

					<Link to='about' smooth={true} duration={600} className='a' onClick={() => setIsActive(false)}>
						Nosotros
					</Link>

					<Link to='contact' smooth={true} duration={750} className='a' onClick={() => setIsActive(false)}>
						Contacto
					</Link>
				</div>
			</div>
		</>,
		navNode
	);
};

export default NavBarMobile;
