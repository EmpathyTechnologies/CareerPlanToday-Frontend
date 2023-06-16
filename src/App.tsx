import ReactGA from "react-ga";
import { Routes, Route } from "react-router-dom";

import NavigationBar from "./layouts/NavigationBar";
import Footer from "./layouts/Footer";

import About from "./pages/About";
import Admin from "./pages/Admin";
import Budget from "./pages/Budget";
import Calculator from "./pages/Calculator";
import Career from "./pages/Career";
import Careers from "./pages/Careers";
import College from "./pages/College";
import Colleges from "./pages/Colleges";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Retire from "./pages/Retire";
import NotFound from "./pages/NotFound";
import Plan from "./pages/Plan";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";

function App() {
  ReactGA.initialize("UA-000000-01");
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <>
      <NavigationBar />
      <div className='navbar-spacer footer-spacer'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='admin' element={<Admin />} />
          <Route path='budget' element={<Budget />} />
          <Route path='calculator' element={<Calculator />} />
          <Route path='careers' element={<Careers />} />
          <Route path='careers/:id' element={<Career />} />
          <Route path='colleges' element={<Colleges />} />
          <Route path='colleges/:id' element={<College />} />
          <Route path='contact' element={<Contact />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='feedback' element={<Feedback />} />
          <Route path='plan' element={<Plan />} />
          <Route path='invest' element={<Retire />} />
          <Route path='privacypolicy' element={<PrivacyPolicy />} />
          <Route path='termsofuse' element={<TermsOfUse />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
