import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

import Navigation from '../../layouts/Navigation';
import HeroSection from './sections/heroSection';
import CareerSection from './sections/careersSection';
import CollegesSection from './sections/collegesSection';
import PlanSection from './sections/planSection';
import AboutUsSection from './sections/aboutUsSection';
import Footer from '../../layouts/Footer';

function Home() {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <CareerSection />
      <CollegesSection />
      <PlanSection />
      <AboutUsSection />
      <Footer />
    </div>
  );
}

export default Home;
