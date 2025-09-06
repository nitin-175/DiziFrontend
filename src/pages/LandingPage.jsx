import { motion } from "framer-motion";
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

const fadeScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
};
const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 60, damping: 18 } }
};
const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 60, damping: 18 } }
};

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-br from-orange-50 via-yellow-100 to-white">
      <Navbar />
      <motion.div initial="hidden" animate="visible" variants={fadeScale}>
        <LandingHero />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideLeft}>
        <Hero2 />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideRight}>
        <Hero5 />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeScale}>
        <Hero3 />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideLeft}>
        <Testimonials />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideRight}>
        <HowToOrder />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeScale}>
        <Info />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideLeft}>
        <RecentlyAdded />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideRight}>
        <ItemsCategory />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeScale}>
        <EducationSection />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideLeft}>
        <CuponSection />
      </motion.div>
      <Footer />
    </div>
  );
};

export default LandingPage;