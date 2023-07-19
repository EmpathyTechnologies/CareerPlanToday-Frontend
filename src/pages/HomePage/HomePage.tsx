import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App.css";

import Navigation from "../../layouts/Navigation";
import HeroSection from "./sections/heroSection";
import Career from "./sections/careersSection";
import CollegesSection from "./sections/collegesSection";
import Plan from "./sections/planSection";
import AboutUs from "./sections/aboutUsSection";

import Footer from "../../layouts/Footer";

function Home() {
  return (
    <div className='App'>
      <Navigation />
      <HeroSection />
      <Career />
      <CollegesSection />
      <Plan />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default Home;
