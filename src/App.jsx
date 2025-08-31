import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import ContactSection from "./components/ContactSection";
import GemstoneCategory from "./pages/GemstoneCategory";
import GemDescription from "./pages/GemDescription";
function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/category/gemstones" element={<GemstoneCategory/>} />
          <Route path="/gem/:id" element={<GemDescription />} />
        </Routes>  
      </Router>
    </CartProvider>
  );
}

export default App;
