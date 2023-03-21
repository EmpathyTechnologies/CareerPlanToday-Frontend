import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";
import "./App.css";
import TermsOfUse from "./components/TermsOfUse/TermsOfUse";
import Careers from "./pages/Careers";
import { Routes, Route } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
function App() {
  ReactGA.initialize("UA-000000-01");
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div className='App'>
      <nav></nav>
      <Routes>
        <Route path='/' element={<Careers />} />
        <Route path='/termsofuse' element={<TermsOfUse />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
      <footer>
        <a href='./termsofuse'>Term of Use</a>
      </footer>
    </div>
  );
}

export default App;
