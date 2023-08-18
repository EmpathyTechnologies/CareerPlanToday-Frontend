
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import Navigation from "../../layouts/Navigation";
import CareersSection from "./sections/CareersSection";
import CollegesSection from "./sections/CollegesSection";
import PlanSection from "./sections/PlanSection";
import AboutUsSection from "./sections/AboutSection";
import Footer from "../../layouts/Footer";
import HeroSection from "./sections/HeroSection";


function Home({selectedSubpage,setSelectedSubpage}:any) {


  return (
    <div className='App'>
      <Navigation selectedSubpage ={selectedSubpage} setSelectedSubpage={setSelectedSubpage}/>
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
