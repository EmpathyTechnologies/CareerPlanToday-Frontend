import ReactGA from "react-ga";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import NavigationBar from "./layouts/NavigationBar";
import HomePage from "./pages/HomePage";
import Career from "./pages/Career";
import Careers from "./pages/Careers";
import College from "./pages/College";
import Colleges from "./pages/Colleges";
import Calculator from "./pages/Calculator";
import Budget from "./pages/Budget";
import Invest from "./pages/Invest";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Feedback from "./pages/Feedback";
import NoMatch from "./pages/404/NoMatch";
import Footer from "./layouts/Footer";
function App() {
  ReactGA.initialize("UA-000000-01");
  ReactGA.pageview(window.location.pathname + window.location.search);
  const [navbarSelected, setNavbarSelected] = useState<string>("Careers");

  return (
    <>
      <NavigationBar navbarSelected={navbarSelected} setNavbarSelected={setNavbarSelected} />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='careers/:id' element={<Career />} />
        <Route path='careers' element={<Careers />} />
        <Route path='colleges/:id' element={<College />} />
        <Route path='colleges' element={<Colleges />} />
        <Route path='calculator' element={<Calculator />} />
        <Route path='budget' element={<Budget />} />
        <Route path='invest' element={<Invest />} />
        <Route path='termsofuse' element={<TermsOfUse />} />
        <Route path='privacypolicy' element={<PrivacyPolicy />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='feedback' element={<Feedback />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
