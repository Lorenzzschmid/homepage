import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header/Nav/Nav'; 
import Home from './components/Home/Home'; 
import About from './components/About/About'; 
import Projects from './components/Projects/Project'; 
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </Router>
    </>
  );
}; 

export default App;