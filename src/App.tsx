import React from "react";
import ReactGA from "react-ga";
import "./App.css";

function App() {
  ReactGA.initialize("UA-000000-01");
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div className='App'>
      <h1>My Career Plan</h1>
    </div>
  );
}

export default App;
