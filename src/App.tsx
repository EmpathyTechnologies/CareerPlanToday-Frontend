import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";
import "./App.css";

import careers from "./data/careers.json";

function App() {
  ReactGA.initialize("UA-000000-01");
  ReactGA.pageview(window.location.pathname + window.location.search);

  const [sortedCareers, setSortedCareers] = useState([...careers]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSortClick = () => {
    let filterKeepNumbers = careers.filter(
      (career) => typeof career.salary.national.average == "number"
    );

    let filterRemoveNumbers = careers.filter(
      (career) => typeof career.salary.national.average != "number"
    );

    let sortedCareers = filterKeepNumbers.sort((a: any, b: any) =>
      sortOrder === "asc"
        ? a.salary.national.average - b.salary.national.average
        : b.salary.national.average - a.salary.national.average
    );

    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setSortedCareers(
      sortOrder === "asc"
        ? [...filterRemoveNumbers, ...sortedCareers]
        : [...sortedCareers, ...filterRemoveNumbers]
    );
  };

  return (
    <div className='App'>
      <h1>My Career Plan</h1>
      <table>
        <thead>
          <tr>
            <th>Career</th>
            <th>
              <button onClick={() => handleSortClick()}>Average Income</button>
            </th>
          </tr>
        </thead>
        {sortedCareers.map((career) => (
          <tr>
            <td>{career.name}</td>
            <td>
              {career.salary.national.average.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0,
              })}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
