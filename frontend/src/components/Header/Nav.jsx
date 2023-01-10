import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/images/schoollogo.jpeg';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import './styles/Nav.scss';

const Nav = ({ setMenuOpen, menuOpen }) => {
	return (
		<div className='navbar-container'>
			<div className='school-logo'>
				<img src={logo} alt='logo' />
			</div>
			<div className='school-title'>SN Public School</div>
			<NavContent setMenuOpen={setMenuOpen} />
			<div className='navBtn' onClick={() => setMenuOpen(!menuOpen)}>
				<AiOutlineMenu />
			</div>
		</div>
	);
};

export const NavPhone = ({ menuOpen, setMenuOpen }) => {
	return (
		<div
			className={`navPhone ${menuOpen ? 'navPhoneComes' : ''}`}
			onClick={() => setMenuOpen(false)}
		>
			<NavContent setMenuOpen={setMenuOpen} />
		</div>
	);
};

const NavContent = ({ setMenuOpen }) => {
	const [activeTab, setActiveTab] = useState('/');
	const location = useLocation();

	useEffect(() => {
		setActiveTab(location.pathname);
	}, [location]);

	const onClickHandler = (route) => {
		setActiveTab(route);
		setMenuOpen(false);
	};

	return (
		<>
			<div className='navigator navigator-phone'>
				<div className='cross' onClick={() => setMenuOpen(false)}>
					<AiOutlineClose />
				</div>
				<Link
					className={`navigate-btn ${activeTab === '/' ? 'active' : ''}`}
					onClick={() => onClickHandler('/home')}
					to={'/'}
				>
					Home
				</Link>
				<Link
					className={`navigate-btn ${activeTab === '/about' ? 'active' : ''}`}
					onClick={() => onClickHandler('/about')}
					to={'/about'}
				>
					About
				</Link>
				<Link
					className={`navigate-btn ${activeTab === '/contact' ? 'active' : ''}`}
					onClick={() => onClickHandler('/contact')}
					to={'/contact'}
				>
					Contact
				</Link>
				<Link
					className={`navigate-btn ${activeTab === '/gallery' ? 'active' : ''}`}
					onClick={() => onClickHandler('/gallery')}
					to={'/gallery'}
				>
					Gallery
				</Link>
				<Link
					className={`navigate-btn ${activeTab === '/admission' ? 'active' : ''}`}
					onClick={() => onClickHandler('/admission')}
					to={'/admission'}
				>
					Admission
				</Link>
			</div>
		</>
	);
};

export default Nav;
