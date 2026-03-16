import React from "react";
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import JobSeekers from './pages/JobSeekers';
import Employers from './pages/Employers';
import Contact from './pages/Contact';

export default function App(){
  return (
    <div className="app-shell">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/job-seekers" element={<JobSeekers />} />
          <Route path="/employers" element={<Employers />} />
          <Route path="/contact" element={<Contact />} />
          {/* add a catch-all later for 404 */}
        </Routes>
      </main>
      {/* Footer is included by pages that need the dark variant */}
    </div>
  )
}
