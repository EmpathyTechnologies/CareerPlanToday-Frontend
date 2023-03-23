import React from "react";
import ReactGA from "react-ga";
import "./App.css";

function App() {
  ReactGA.initialize("UA-000000-01");
  ReactGA.pageview(window.location.pathname + window.location.search);

  let careers = [
    {
      name: "Information Security Analysts",
      tenthPercentile: 61520,
      average: 102600,
      ninetiethPercentile: 165920,
    },
    {
      name: "Registered Nurse",
      tenthPercentile: 59450,
      average: 77600,
      ninetiethPercentile: 120250,
    },
    {
      name: "Electrician",
      tenthPercentile: 37020,
      average: 60040,
      ninetiethPercentile: 99800,
    },
    {
      name: "Motorcycle Mechanics",
      tenthPercentile: 27890,
      average: 38170,
      ninetiethPercentile: 60420,
    },
    {
      name: "Animal Trainers",
      tenthPercentile: 23160,
      average: 31280,
      ninetiethPercentile: 58790,
    },
  ];

  return (
    <div className="App">
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
            <td>{career.average}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
