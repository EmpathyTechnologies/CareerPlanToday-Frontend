import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";
import "./App.css";
import Disclaimer from "./components/disclaimer/Disclaimer";
import Careers from "./pages/Careers";

function App() {
  ReactGA.initialize("UA-000000-01");
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div className='App'>
      <Careers />
      <Disclaimer />
    </div>
  );
}

export default App;
