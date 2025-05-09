import React from 'react';
import './FrontPage.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutUs from './components/Aboutus';

function FrontPage() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Features />
        <AboutUs/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default FrontPage;