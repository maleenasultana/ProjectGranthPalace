import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../src/Components/Navbar';
import Tabs from '../src/Components/Tabs';
import Footer from '../src/Components/Footer';
import Hero from '../src/Components/Hero';
import Text from './Components/Text';
import Features from '../src/Components/Features';
import Books from './Components/NewArrivals';
import './App.css';
import whatsappimage from './whatsapp.jpg';
import About from './Components/About';
import Contact from './Components/Contact';
import NewArrivals from './Components/Books';
import PostGraduation from './Components/PostGraduation';
import SS from './Components/SS';
import MedicalCollege from './Components/Medical College';
import Courses from './Components/Courses';
import Bds from './Components/Bds';
import Bams from './Components/Bams';
import KnowyourCollege from './Components/KnowyourCollege';

function App() {
  return (
    <>
      <Text />
      <Navbar />
      <About />
      <Tabs />
      <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path="/features" element={<Features />} />
        <Route path="/books" element={<Books />} />
        <Route path="/newarrivals" element={<NewArrivals />} />
        <Route path="/postgraduation" element={<PostGraduation />} />
        <Route path="/ss" element={<SS />} />
        <Route path="/medicalcollege" element={<MedicalCollege />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/bds" element={<Bds />} />
        <Route path="/bams" element={<Bams />} />
        <Route path="/knowyourcollege" element={<KnowyourCollege />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>

      <div>
        <a href="https://wa.me/919975042526" target="_blank">
          {' '}
          <img src={whatsappimage} alt="..." className="wimage" />
        </a>
      </div>
    </>
  );
}

export default App;
