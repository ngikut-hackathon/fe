import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Banner from './components/Banner';
import Youtube from './components/Youtube';
import Services from './components/Services';

function App() {
  return (
    <>
      <Navbar />
      <Hero /> 
      <Features />
      <Banner />
      <Services />
      <Youtube />
    </> 
  );
}

export default App
