import './App.css'
import React from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingHero from './components/LandingHero';
import CuponSection from './components/CuponSection';







function App() {

  return (
    <div>
      <Navbar />

      <LandingHero/>

      <CuponSection/>

      <Footer/>

      
    </div>
  );
}

export default App;
