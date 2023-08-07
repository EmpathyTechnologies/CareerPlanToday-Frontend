import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

import Navigation from "../../layouts/Navigation";
import HeroSection from "./sections/heroSection";
import CareersSection from "./sections/careersSection";
import CollegesSection from "./sections/CollegesSection";
import PlanSection from "./sections/PlanSection";
import AboutUsSection from "./sections/AboutSection";
import Footer from "../../layouts/Footer";

function Home() {
  return (
    <div className='App'>
      <Navigation />
      <HeroSection />
      <CareersSection />
      <CollegesSection />
      <PlanSection />
      <AboutUsSection />
      <Footer />
    </div>
  );
}

export default Home;
