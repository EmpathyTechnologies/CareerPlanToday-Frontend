import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App.css";

import Navigation from "../../layouts/navbar";
import HeroSection from "./sections/heroSection";
import Career from "./sections/careersSection";
import CollegesSection from "./sections/collegesSection";
import Plan from "./sections/planSection";
import AboutUs from "./sections/aboutUsSection";
import ChooseCareer from "./components/choose-career";
import Footer from "../../layouts/footer";

function Home() {
  return (
    <div className='App'>
      <Navigation />
      <HeroSection />
      <Career />
      <CollegesSection />
      <Plan />
      <AboutUs />
      <ChooseCareer />
      <Footer />
    </div>
  );
}

export default Home;
