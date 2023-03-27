import ReactGA from "react-ga";
import "./App.css";
import TermsOfUse from "./pages/TermsOfUse";
import Careers from "./pages/Careers";
import { Routes, Route } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Colleges from "./pages/Colleges";
import { useState } from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  ReactGA.initialize("UA-000000-01");
  ReactGA.pageview(window.location.pathname + window.location.search);
  const [navbarSelected, setNavbarSelected] = useState<string>("Careers");

  return (
    <>
      <NavigationBar navbarSelected={navbarSelected} setNavbarSelected={setNavbarSelected} />
      <Routes>
        <Route path='/' element={<Careers />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/colleges' element={<Colleges />} />
        <Route path='/termsofuse' element={<TermsOfUse />} />
        <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
