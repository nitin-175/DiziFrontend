import './App.css'
import React from "react";
import Navbar from './components/Navbar';
import Hero2 from './components/Hero2';
import Hero5 from './components/Hero5';
import Footer from './components/Footer';
import LandingHero from './components/LandingHero';
import CuponSection from './components/CuponSection';
import HowToOrder from './components/HowToOrder';
import ReferAFriend from './components/ReferAFriend';
import Info from './components/Info';
import ItemsCategory from './components/ItemsCategory';
import EducationSection from './components/EducationSection';
import RecentlyAdded from './components/RecentlyAdded';
import SpiritualProducts from './components/Hero5';




function App() {

  return (
    <div>
      <Navbar />

      <LandingHero />
      <Hero2 />

      
      <SpiritualProducts/>

      <HowToOrder />

      <Info />


      <RecentlyAdded />

      <ItemsCategory />

      <EducationSection />

      <CuponSection />

      <Footer />

      {/* <Filters/> */}

    </div>
  );
}

export default App;