import Navbar from "../components/Navbar";
import Hero2 from "../components/Hero2";
import Hero5 from "../components/Hero5";
import Footer from "../components/Footer";
import LandingHero from "../components/LandingHero";
import CuponSection from "../components/CuponSection";
import HowToOrder from "../components/HowToOrder";
import ReferAFriend from "../components/ReferAFriend"; 
import Info from "../components/Info";
import RecentlyAdded from "../components/RecentlyAdded";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <LandingHero />
      <Hero2 />
      <Hero5 />
      <ReferAFriend />
      <HowToOrder />
      <Info />
      <RecentlyAdded />
      <CuponSection />
      <Footer />
    </div>
  );
};

export default LandingPage;