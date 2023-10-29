import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './components/Pages/Pages';
import Nav, { NavPhone } from './components/Header/Nav';
import Footer from './components/Footer/Footer';
import { HashRouter } from 'react-router-dom';
function App() {
	const [menuOpen, setMenuOpen] = useState(false);
	
	return (
		<HashRouter >
			<NavPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Pages />
			<Footer />
		</HashRouter>
	);
}

export default App;
