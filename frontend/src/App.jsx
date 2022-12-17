import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './components/Pages/Pages';
import Nav from './components/Header/Nav';

function App() {
	return (
		<Router>
			<Nav />
			<Pages />
		</Router>
	);
}

export default App;
