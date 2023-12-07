/** @format */

import React, {useState} from 'react';
import {HashRouter, BrowserRouter as Router} from 'react-router-dom';
import Pages from './components/Pages/Pages';
import Nav, {NavPhone} from './components/Header/Nav';
import Footer from './components/Footer/Footer';
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HashRouter>
      <NavPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Pages />
      <Footer />
    </HashRouter>
  );
}

export default App;
