import './App.css'
import React from "react";
import { Carousel } from "flowbite-react";
import Navbar from './components/Navbar';
import Hero2 from './components/Hero2';
import Hero5 from './components/Hero5';
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
