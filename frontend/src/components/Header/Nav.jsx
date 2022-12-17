import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import './styles/Nav.scss';

const Nav = () => {
	const [activeTab, setActiveTab] = useState('home');
	return (
		<div className='navbar-container'>
			<div className='school-logo'>
				<img src={logo} alt='logo' />
			</div>
			<div className='school-title'>SN Public School</div>
			<div className='navigator'>
				<Link
					className={`navigate-btn ${activeTab === 'home' ? 'active' : ''}`}
					onClick={() => setActiveTab('home')}
					to={'/'}
				>
					Home
				</Link>
				<Link
					className={`navigate-btn ${activeTab === 'about' ? 'active' : ''}`}
					onClick={() => setActiveTab('about')}
					to={'/about'}
				>
					About
				</Link>
				<Link
					className={`navigate-btn ${activeTab === 'contact' ? 'active' : ''}`}
					onClick={() => setActiveTab('contact')}
					to={'/contact'}
				>
					Contact
				</Link>
				<Link
					className={`navigate-btn ${activeTab === 'gallery' ? 'active' : ''}`}
					onClick={() => setActiveTab('gallery')}
					to={'/gallery'}
				>
					Gallery
				</Link>
				<Link
					className={`navigate-btn ${activeTab === 'admission' ? 'active' : ''}`}
					onClick={() => setActiveTab('admission')}
					to={'/admission'}
				>
					Admission
				</Link>
			</div>
		</div>
	);
};

export default Nav;
