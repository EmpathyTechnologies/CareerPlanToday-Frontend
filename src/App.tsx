import ReactGA from "react-ga";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import NavigationBar from "./layouts/NavigationBar";
import Career from "./pages/Career";
import Careers from "./pages/Careers";
import College from "./pages/College";
import Colleges from "./pages/Colleges";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import About from "./pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import NoMatch from "./pages/404/NoMatch";


function App() {
  ReactGA.initialize("UA-000000-01");
  ReactGA.pageview(window.location.pathname + window.location.search);
  const [navbarSelected, setNavbarSelected] = useState<string>("Careers");

  return (
    <>
      <NavigationBar navbarSelected={navbarSelected} setNavbarSelected={setNavbarSelected} />

      <Routes>
        <Route path='/' element={<Careers />} />
        <Route path='careers/:id' element={<Career />} />
        <Route path='careers' element={<Careers />} />
        <Route path='colleges/:id' element={<College />} />
        <Route path='colleges' element={<Colleges />} />
        <Route path='termsofuse' element={<TermsOfUse />} />
        <Route path='privacypolicy' element={<PrivacyPolicy />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
