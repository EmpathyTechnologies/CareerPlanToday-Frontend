import { useState, useEffect } from "react";
import careersData from "../data/careers.json";
export default function Careers() {
  const [careers, setCareers] = useState(careersData);
  const [sortedCareers, setSortedCareers] = useState([...careersData]);
  const [ascending, setAscending] = useState<boolean>(true);
  const [favoriteCareers, setFavoriteCareers] = useState<any>([]);
  let alphabetize = false;

  const sortByCareer = () => {
    let sortedCareers = careers.sort();
    if (!alphabetize) sortedCareers.reverse();
    setSortedCareers([...sortedCareers]);
    alphabetize = !alphabetize;
  };

  const sortByIncome = () => {
    const nonNumericSalaries = [];
    const numericSalaries = [];

    for (const career of careers) {
      if (typeof career.salary.national.average === "number") {
        numericSalaries.push(career);
      } else {
        nonNumericSalaries.push(career);
      }
    }

    const sortedNumericSalaries = numericSalaries.sort((a: any, b: any) =>
      ascending
        ? a.salary.national.average - b.salary.national.average
        : b.salary.national.average - a.salary.national.average
    );

    setAscending(!ascending);
    setSortedCareers(
      ascending
        ? [...nonNumericSalaries, ...sortedNumericSalaries]
        : [...sortedNumericSalaries, ...nonNumericSalaries]
    );
  };

  const handleCheckboxChange = (title: string) => {
    let newItems = [...sortedCareers];

    for (let i = 0; i < sortedCareers.length; i++) {
      if (newItems[i].title == title) {
        newItems[i].favorite = !newItems[i].favorite;
      }
    }

    setSortedCareers(newItems);
  };

  useEffect(() => {
    let favoriteCareers = sortedCareers.filter((career) => career.favorite);
    setFavoriteCareers([...favoriteCareers]);
  }, [sortedCareers]);

  return (
    <div>
      <h1>My Career Plan</h1>
      <h2>Favorite Careers</h2>
      <table>
        <thead>
          <tr>
            <th>Favorite</th>
            <th>
              <button onClick={() => sortByCareer()}>Career</button>
            </th>
            <th>
              <button onClick={() => sortByIncome()}>Average Income</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {favoriteCareers.map((career: any, index: number) => (
            <tr>
              <td>
                <input
                  type='checkbox'
                  checked={career.favorite}
                  onChange={() => handleCheckboxChange(career.title)}
                />
              </td>
              <td>{career.title}</td>
              <td>
                {career.salary.national.average.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>All Careers</h2>

      <table>
        <thead>
          <tr>
            <th>Favorite</th>
            <th>
              <button onClick={() => sortByCareer()}>Career</button>
            </th>
            <th>
              <button onClick={() => sortByIncome()}>Average Income</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedCareers.map((career, index) => (
            <tr>
              <td>
                <input
                  type='checkbox'
                  checked={career.favorite}
                  onChange={() => handleCheckboxChange(career.title)}
                />
              </td>
              <td>{career.title}</td>
              <td>
                {career.salary.national.average.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
