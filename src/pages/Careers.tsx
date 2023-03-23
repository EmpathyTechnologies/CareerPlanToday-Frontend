import { useState, useEffect } from "react";
import careersData from "../data/careers.json";

import CareersTable from "../components/Careers/CareersTable";

import Button from "react-bootstrap/Button";
import Footer from "../components/Footer/Footer";

import { BiBookReader } from "react-icons/bi";
import { BsHeartPulse } from "react-icons/bs";
import { GrWorkshop } from "react-icons/gr";
import { TbTools, TbPigMoney } from "react-icons/tb";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { RxGear } from "react-icons/rx";

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
    <div className='CareerContainer'>
      <h1>My Career Plan</h1>

      <Button
        variant='outline-secondary'
        className='FlexColumnCenter Width138px'
        onClick={() => setFilter("All")}
      >
        <GrWorkshop size={30} />
        <div>All Careers</div>
      </Button>

      <Button
        variant='outline-secondary'
        className='FlexColumnCenter Width138px'
        onClick={() => setFilter("Favorite")}
      >
        <MdFavoriteBorder size={30} />
        <div>Favorite</div>
      </Button>

      <Button
        variant='outline-secondary'
        className='FlexColumnCenter Width138px'
        onClick={() => setFilter("Healthcare")}
      >
        <BsHeartPulse size={30} />
        <div>Healthcare</div>
      </Button>

      <Button variant='outline-secondary' className='FlexColumnCenter Width138px'>
        <TbTools size={30} />
        <div>Building Trades</div>
      </Button>

      <Button variant='outline-secondary' className='FlexColumnCenter Width138px'>
        <TbPigMoney size={30} />
        <div>Finance</div>
      </Button>

      <Button variant='outline-secondary' className='FlexColumnCenter Width138px'>
        <RxGear size={30} />
        <div>Engineering</div>
      </Button>

      <Button variant='outline-secondary' className='FlexColumnCenter Width138px'>
        <BiBookReader size={30} />
        <div>Education</div>
      </Button>

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
