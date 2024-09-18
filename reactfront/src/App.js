import React from 'react';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import About from './components/About/About';
import Services from './components/Services/Services';
import DoorsGallery from './components/DoorsGallery/DoorsGallery';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <About />
      <Services />
      <DoorsGallery />
      <Contact />
    </div>
  );
}

export default App;
