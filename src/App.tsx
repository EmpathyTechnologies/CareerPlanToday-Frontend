import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";
import "./App.css";

import careers from "./data/careers.json";

function App() {
  ReactGA.initialize("UA-000000-01");
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div className='App'>
      <h1>My Career Plan</h1>
      <table>
        <thead>
          <tr>
            <th>Career</th>
            <th>Average Income</th>
          </tr>
        </thead>
        {careers.map((career) => (
          <tr>
            <td>{career.name}</td>
            <td>{career.salary.national.average}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
