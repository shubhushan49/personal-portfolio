import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import './App.css';
import Education from './pages/Education';
import Experience from './pages/Experience';

const App = () => {
  return (
    <Router basename="/personal-portfolio">
      <div id="root">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path='/experiences' element={<Experience />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
