import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Main/Home/Home';
import About from '../Main/About/About';
import Contact from '../Main/Contact/Contact';
import Gallery from '../Main/Gallery/Gallery';
import Admission from '../Main/Admission/Admission';
import NotFound from '../Main/NotFound/NotFound';

const Pages = () => {
	return (
		<Routes>
			<Route exact path='/' element={<Home />} />
			<Route exact path='/about' element={<About />} />
			<Route exact path='/contact' element={<Contact />} />
			<Route exact path='/gallery' element={<Gallery />} />
			<Route exact path='/admission' element={<Admission />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
};

export default Pages;
