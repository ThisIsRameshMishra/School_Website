import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import './styles/Nav.scss';

const Nav = () => {
	return (
		<div className='navbar-container'>
			<div className='school-title'>SN Public School</div>
			<div className='navigator'>
				<NavLink to={'/'}>Home</NavLink>
				<NavLink to={'/about'}>About</NavLink>
				<NavLink to={'/contact'}>Contact</NavLink>
				<NavLink to={'/gallery'}>Gallery</NavLink>
				<NavLink to={'/admission'}>Admission</NavLink>
			</div>
		</div>
	);
};

const NavLink = styled(Link)`
	text-decoration: none;
	padding: 5px;
	font-weight: 500;
	font-size: 25px;
	color: black;
	&:hover {
		opacity: 0.8;
	}
`;

export default Nav;
