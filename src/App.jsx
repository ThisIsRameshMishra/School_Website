import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './components/Pages/Pages';
import Nav, { NavPhone } from './components/Header/Nav';
import Footer from './components/Footer/footer';

function App() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<Router>
			<NavPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Pages />
			<Footer />
		</Router>
	);
}

export default App;