
import './App.css'
import React from "react";
import { Carousel } from "flowbite-react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingHero from './components/LandingHero';







function App() {

  return (
    <div>
      <Navbar />
      <LandingHero/>
      <Footer/>
      
    </div>
  );
}

export default App
