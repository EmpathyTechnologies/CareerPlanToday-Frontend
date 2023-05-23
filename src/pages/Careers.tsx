import { useState, useEffect } from "react";
import allCareers from "../data/careers.json";
import CareersNavbar from "../features/careers/components/CareersNavbar/CareersNavbar";
import CareersTable from "../features/careers/components/CareersTable/CareersTable";
import { minSalary, maxSalary } from "../features/careers/utils/minAndMaxSalary";
import { filterCareers } from "../features/careers/utils/filterCareers";

export default function Careers() {
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
      <CareersTable careers={careers} setCareers={setCareers} />
    </div>
  );
}
