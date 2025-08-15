import './App.css'
import React from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingHero from './components/LandingHero';
import SupportIcon from './components/SupportIcon';







function App() {

  return (
    <div>
      <Navbar />

      <LandingHero/>

      <Footer/>

      <SupportIcon/>
      
    </div>
  );
}

export default App;
