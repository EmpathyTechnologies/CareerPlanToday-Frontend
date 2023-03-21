import { useState, useEffect } from "react";
import CareersTable from "../components/Careers/CareersTable";
import careersData from "../data/careers.json";
export default function Careers() {
  const [careers, setCareers] = useState(careersData);
  const [sortedCareers, setSortedCareers] = useState([...careersData]);
  const [isAscending, setIsAscending] = useState<boolean>(true);
  const [favoriteCareers, setFavoriteCareers] = useState<any>([]);
  const [showAllCareers, setShowAllCareers] = useState<boolean>(true);

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
      isAscending
        ? a.salary.national.average - b.salary.national.average
        : b.salary.national.average - a.salary.national.average
    );

    setIsAscending(!isAscending);
    setSortedCareers(
      isAscending
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
      <button onClick={() => setShowAllCareers(true)}>All Careers</button>
      <button onClick={() => setShowAllCareers(false)}>Favorite Careers</button>
      <h2>{showAllCareers ? "All Careers" : "Favorite Careers"}</h2>
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
          {showAllCareers
            ? sortedCareers.map((career: any, index: number) => (
                <CareersTable career={career} handleCheckboxChange={handleCheckboxChange} />
              ))
            : favoriteCareers.map((career: any, index: number) => (
                <CareersTable career={career} handleCheckboxChange={handleCheckboxChange} />
              ))}
        </tbody>
      </table>
    </div>
  );
}
