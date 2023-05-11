import ReactGA from "react-ga";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import Invest from "./pages/Invest";
import NavigationBar from "./layouts/NavigationBar";
import NoMatch from "./pages/404/NoMatch";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";

function App() {
  ReactGA.initialize("UA-000000-01");
  ReactGA.pageview(window.location.pathname + window.location.search);
  const [navbarSelected, setNavbarSelected] = useState<string>("Careers");

  return (
    <>
      <NavigationBar navbarSelected={navbarSelected} setNavbarSelected={setNavbarSelected} />
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
        <Route path='feedback' element={<Feedback />} />
        <Route path='invest' element={<Invest />} />
        <Route path='privacypolicy' element={<PrivacyPolicy />} />
        <Route path='termsofuse' element={<TermsOfUse />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
