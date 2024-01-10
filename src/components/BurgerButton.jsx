import React from 'react';
import './BurgerButton.css';

const BurgerButton = ({ handleClick, isActive }) => {
	return (
		<>
			<div className={`hamburger ${isActive ? 'is-active' : ''}`.trim()} onClick={handleClick}>
				<div className='_layer -top'></div>
				<div className='_layer -mid'></div>
				<div className='_layer -bottom'></div>
			</div>
		</>
	);
};

export default BurgerButton;
