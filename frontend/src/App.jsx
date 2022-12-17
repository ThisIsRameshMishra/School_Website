import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './components/Pages/Pages';
import Nav from './components/Header/Nav';
import Footer from './components/Footer/footer';

function App() {
	return (
		<Router>
			<Nav />
			<Pages />
			<Footer />
		</Router>
	);
}

export default App;
