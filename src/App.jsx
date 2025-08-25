import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

// Pages
import LandingPage from "./pages/LandingPage";
import Category from "./pages/Category";
import Cart from "./pages/Cart";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingHero from "./components/LandingHero";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Hero5 from "./components/Hero5";
import HowToOrder from "./components/HowToOrder";
import Info from "./components/Info";
import ItemsCategory from "./components/ItemsCategory";
import EducationSection from "./components/EducationSection";
import RecentlyAdded from "./components/RecentlyAdded";
import CuponSection from "./components/CuponSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />

        {/* Routes for pages */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LandingHero /> {/* Desktop Banner kept */}
                <Hero2 />
                <Hero3 />
                <Hero5 />
                <HowToOrder />
                <Info />
                <RecentlyAdded />
                <ItemsCategory />
                <EducationSection />
                <CuponSection />
              </>
            }
          />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>

        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
