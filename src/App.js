import React from 'react';
import { Routes, Route } from 'react-router-dom';
import useScrollToTop from './hooks/useScrollToTop';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import JobSeekers from './pages/JobSeekers';
import Employers from './pages/Employers';
import Contact from './pages/Contact';
import './index.css';

function ScrollToTop() {
  useScrollToTop();
  return null;
}

export default function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/job-seekers" element={<JobSeekers />} />
        <Route path="/employers" element={<Employers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
