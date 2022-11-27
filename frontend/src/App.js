
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './components/home';
import {BrowserRouter as Router, Navlink,Routes ,Route } from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';
import Gallery from './components/gallery';
function App() {
  return (
    <>
    //this is Akshat k saath ramesh ka branch
    
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
