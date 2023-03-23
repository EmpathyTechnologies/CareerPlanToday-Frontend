import { useState, useEffect } from "react";
import CareersTable from "../components/Careers/CareersTable";
import careersData from "../data/careers.json";
import Footer from "../components/Footer/Footer";
import { BsHeartPulseFill } from "react-icons/bs";

export default function Careers() {
  const [careers] = useState(careersData);
  const [isAscending, setIsAscending] = useState<boolean>(true);

  const [filter, setFilter] = useState<string>("All");

  const [allCareers, setAllCareers] = useState([...careersData]);
  const [favoriteCareers, setFavoriteCareers] = useState<any>();
  const [healthcareCareers] = useState<any>(
    careersData.filter((career: any) => career.industries.includes("Healthcare"))
  );

  let alphabetize = false;

  const sortByCareer = () => {
    let sortedCareers = careers.sort();
    if (!alphabetize) sortedCareers.reverse();
    setAllCareers([...sortedCareers]);
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
    setAllCareers(
      isAscending
        ? [...nonNumericSalaries, ...sortedNumericSalaries]
        : [...sortedNumericSalaries, ...nonNumericSalaries]
    );
  };

  const handleCheckboxChange = (title: string) => {
    let newItems = [...allCareers];
    for (let i = 0; i < allCareers.length; i++) {
      if (newItems[i].title === title) {
        newItems[i].favorite = !newItems[i].favorite;
      }
    }
    setAllCareers(newItems);
  };

  useEffect(() => {
    let favoriteCareers = allCareers.filter((career) => career.favorite);
    setFavoriteCareers([...favoriteCareers]);
  }, [allCareers]);

  const renderCareers = (filter: any) => {
    switch (filter) {
      case "Favorite":
        return favoriteCareers.map((career: any, index: number) => (
          <CareersTable
            key={career.title}
            career={career}
            handleCheckboxChange={handleCheckboxChange}
          />
        ));
      case "Healthcare":
        return healthcareCareers.map((career: any, index: number) => (
          <CareersTable
            key={career.title}
            career={career}
            handleCheckboxChange={handleCheckboxChange}
          />
        ));
      default:
        return allCareers.map((career: any, index: number) => (
          <CareersTable
            key={career.title}
            career={career}
            handleCheckboxChange={handleCheckboxChange}
          />
        ));
    }
  };

  return (
    <div>
      <h1>My Career Plan</h1>

      <button onClick={() => setFilter("All")}>All Careers</button>
      <button onClick={() => setFilter("Favorite")}>Favorite Careers</button>
      <button onClick={() => setFilter("Healthcare")}> <div className="FlexColumnCenter"><BsHeartPulseFill color="8d0801" size={30}/> Healthcare Careers</div></button>
      

      <h2>{filter} Careers</h2>
      <table>
        <thead>
          <tr>
            <th>Favorite</th>
            <th>
              <button onClick={() => sortByCareer()}>Career ↕️</button>
            </th>
            <th>
              <button onClick={() => sortByIncome()}>Average Income ↕️</button>
            </th>
          </tr>
        </thead>
        <tbody>{renderCareers(filter)}</tbody>
      </table>
      <Footer />
    </div>
  );
}
