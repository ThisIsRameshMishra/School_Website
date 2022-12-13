import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Main/Home/Home';
import About from '../Main/About/About';
import Contact from '../Main/Contact/Contact';
import Gallery from '../Main/Gallery/Gallery';
import Admission from '../Main/Admission/Admission';

const Pages = () => {
	return (
		<Routes>
			<Route exact path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
			<Route path='/contact' element={<Contact />} />
			<Route path='/gallery' element={<Gallery />} />
			<Route path='/admission' element={<Admission />} />
		</Routes>
	);
};

export default Pages;
