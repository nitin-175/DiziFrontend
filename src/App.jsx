import './App.css'
import React from "react";
import { Carousel } from "flowbite-react";
import Navbar from './components/Navbar';
import Hero2 from './components/Hero2';
import Hero5 from './components/Hero5';
import Footer from './components/Footer';
import LandingHero from './components/LandingHero';
import CuponSection from './components/CuponSection';
import HowToOrder from './components/HowToOrder';
import ReferAFriend from './components/ReferAFriend';
import Info from './components/Info';
import RecentlyAdded from './components/RecentlyAdded';
import ItemsCategory from './components/ItemsCategory';
import EducationSection from './components/EducationSection';
import Filters from './components/CategoryPage/Filters';




function App() {

  return (
    <div>
    <Navbar />

    <LandingHero/>
    <Hero2 />
  <Hero5 />
  <div className="my-30"></div>
      
      <HowToOrder />
      <Info />
      <RecentlyAdded />

      <ItemsCategory/>

      <EducationSection/>
      
      <CuponSection/>

      <Footer/>

      {/* <Filters/> */}
    </div>
  );
}

export default App;
