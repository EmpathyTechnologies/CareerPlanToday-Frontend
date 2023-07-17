import { useState, useEffect } from "react";
import allCareers from "../../data/careers.json";
import CareersNavbar from "./components/CareersNavbar";
import CareersTable from "./components/CareersTable";
import { minSalary, maxSalary } from "./utils/minAndMaxSalary";
import { filterCareers } from "./utils/filterCareers";
import Navigation from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";

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
      <Navigation />
      <CareersNavbar
        setFilterByCareerName={setFilterByCareerName}
        filterBySalary={filterBySalary}
        setFilterBySalary={setFilterBySalary}
        minSalary={minSalary}
        maxSalary={maxSalary}
      />
      <CareersTable careers={careers} setCareers={setCareers} />
      <Footer />
    </div>
  );
}
