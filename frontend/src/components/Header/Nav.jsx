import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import './styles/Nav.scss';

const Nav = () => {
	return (
		<div className='navbar-container'>
			<div className='school-logo'>
				<img src={logo} alt='logo' />
			</div>
			<div className='school-title'>SN Public School</div>
			<div className='navigator'>
				<Link className='navigate-btn' to={'/'}>
					Home
				</Link>
				<Link className='navigate-btn' to={'/about'}>
					About
				</Link>
				<Link className='navigate-btn' to={'/contact'}>
					Contact
				</Link>
				<Link className='navigate-btn' to={'/gallery'}>
					Gallery
				</Link>
				<Link className='navigate-btn' to={'/admission'}>
					Admission
				</Link>
			</div>
		</div>
	);
};


export default Nav;
