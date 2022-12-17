import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NotFound.scss';

const NotFound = () => (
	<div className='not-found'>
		<div className='center'>
			<h1>404 - Page Not Found!</h1>
			<Link className='go-home-btn go-home-btn--white' to='/'>
				Go Home
			</Link>
		</div>
	</div>
);

export default NotFound;
