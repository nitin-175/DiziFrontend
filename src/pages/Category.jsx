import React from 'react';
import Navbar from "../components/Navbar";
import HeroC0 from '../components/HeroC0';
import ShopPage from '../components/ShopPage';
import CuponSection from '../components/CuponSection';
import Footer from '../components/Footer';
import FeaturedProduct from '../components/FeaturedProduct';
import ProductGrid2C from '../components/ProductGrid2C';

const Category = () => {
  return (
    <div>
      <Navbar />
      <HeroC0 />
      <ShopPage />
      <FeaturedProduct />
      <ProductGrid2C />  
        
          <CuponSection />
        
        <Footer />
      
    </div>
  );
};

export default Category;