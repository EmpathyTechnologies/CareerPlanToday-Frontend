import { useState, useEffect } from "react";
import allCareers from "../data/careers.json";
import CareersNavbar from "../features/careers/components/CareersNavbar/CareersNavbar";
import CareersTable from "../features/careers/components/CareersTable/CareersTable";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { minSalary, maxSalary } from "../features/careers/utils/minAndMaxSalary";
import { filterCareers } from "../features/careers/utils/filterCareers";

// TODO:  Set up a scroll on the table, instead of scrolling on the window

export default function Careers() {
  const [careers, setCareers] = useState(allCareers);
  const [filterByCareerName, setFilterByCareerName] = useState<string>("All Careers");
  const [filterBySalary, setFilterBySalary] = useState<any>([minSalary, maxSalary]);

  useEffect(() => {
    let filteredCareers = filterCareers(filterByCareerName, filterBySalary);
    setCareers(filteredCareers);
  }, [filterByCareerName, filterBySalary]);

  return (
    <div className='CareersContainer navbar-spacer footer-spacer'>
      <div className='careers-fixed'>
        <CareersNavbar
          setFilterByCareerName={setFilterByCareerName}
          filterBySalary={filterBySalary}
          setFilterBySalary={setFilterBySalary}
          minSalary={minSalary}
          maxSalary={maxSalary}
        />
      </div>
      <div className='careers-paddingtop'>
        <CareersTable
          // favorites={favorites} setFavorites={setFavorites}
          careers={careers}
          setCareers={setCareers}
        />
      </div>
    </div>
  );
}
