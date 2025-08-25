import Navbar from "../components/Navbar";
import Hero2 from "../components/Hero2";
import Hero5 from "../components/Hero5";
import Footer from "../components/Footer";
import LandingHero from "../components/LandingHero";
import CuponSection from "../components/CuponSection";
import HowToOrder from "../components/HowToOrder";
import Info from "../components/Info";
import RecentlyAdded from "../components/RecentlyAdded";
import EducationSection from "../components/EducationSection";
import ItemsCategory from "../components/ItemsCategory";
import Hero3 from "../components/Hero3";
import Testimonials from "../components/Testimonials";
const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <LandingHero />
      <Hero2 />
      <Hero5 />
      <Hero3 />
      <Testimonials />
      <HowToOrder />
      <Info />
      <RecentlyAdded />
      <ItemsCategory />
      <EducationSection />
      <CuponSection />
      <Footer />
    </div>
  );
};

export default LandingPage;