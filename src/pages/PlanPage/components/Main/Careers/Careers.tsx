import { useState, useEffect } from "react";
import allCareers from "../../../../../data/careers.json";
import CareersNavbar from "./components/CareersNavbar";
import CareersTable from "./components/CareersTable";
import { minSalary, maxSalary } from "./utilities/minAndMaxSalary";
import { filterCareers } from "./utilities/filterCareers";

export default function Careers({ setSelectedCareer }: any) {
  const [careers, setCareers] = useState(allCareers);
  const [filterByCareerName, setFilterByCareerName] = useState<string>("All Careers");
  const [filterBySalary, setFilterBySalary] = useState<any>([minSalary, maxSalary]);

  useEffect(() => {
    let filteredCareers = filterCareers(filterByCareerName, filterBySalary);
    setCareers(filteredCareers);
  }, [filterByCareerName, filterBySalary]);

  return (
    <div>
      <CareersNavbar
        setFilterByCareerName={setFilterByCareerName}
        filterBySalary={filterBySalary}
        setFilterBySalary={setFilterBySalary}
        minSalary={minSalary}
        maxSalary={maxSalary}
      />
      <CareersTable careers={careers} setCareers={setCareers} setSelectedCareer={setSelectedCareer} />
    </div>
  );
}
