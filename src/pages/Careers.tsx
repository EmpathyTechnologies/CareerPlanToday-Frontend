import { useState } from "react";
import careers from "../data/careers.json";
export default function Careers() {
  const [sortedCareers, setSortedCareers] = useState([...careers]);
  const [ascending, setAscending] = useState<boolean>(true);
  let alphabetize = false;

  const sortByCareer = () => {
    let sortedCareers = careers.sort();
    if (!alphabetize) sortedCareers = careers.sort().reverse();
    setSortedCareers([...sortedCareers]);
    alphabetize = !alphabetize;
  };

  const sortByIncome = () => {
    let removeNumbersArray = careers.filter(
      (career) => typeof career.salary.national.average != "number"
    );

    let keepNumbersArray = careers.filter(
      (career) => typeof career.salary.national.average == "number"
    );

    keepNumbersArray = keepNumbersArray.sort((a: any, b: any) =>
      ascending
        ? a.salary.national.average - b.salary.national.average
        : b.salary.national.average - a.salary.national.average
    );

    setAscending(!ascending);
    setSortedCareers(
      ascending
        ? [...removeNumbersArray, ...keepNumbersArray]
        : [...keepNumbersArray, ...removeNumbersArray]
    );
  };

  return (
    <div>
      {" "}
      <h1>My Career Plan</h1>
      <table>
        <thead>
          <tr>
            <th>Favorite</th>
            <th>
              {" "}
              <button onClick={() => sortByCareer()}>Career</button>
            </th>
            <th>
              <button onClick={() => sortByIncome()}>Average Income</button>
            </th>
          </tr>
        </thead>

        {sortedCareers.map((career) => (
          <tr>
            <input type='checkbox' />
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
