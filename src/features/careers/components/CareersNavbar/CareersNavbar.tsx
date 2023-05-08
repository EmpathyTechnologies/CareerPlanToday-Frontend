import React from "react";
import "./CareersNavbar.css";
import CareersFilterByCareerField from "./CareersFilterByCareerField";
import CareersFilterBySalary from "./CareersFilterBySalary";

interface CareersNavbarProps {
  setFilterByCareerName: any;
  filterBySalary: any;
  setFilterBySalary: any;
  minSalary: any;
  maxSalary: any;
}

const CollegesNavbar: React.FC<CareersNavbarProps> = ({ setFilterByCareerName, filterBySalary, setFilterBySalary, minSalary, maxSalary }) => {
  return (
    <div id='colleges-navbar-container'>
      <CareersFilterByCareerField setFilterByCareerName={setFilterByCareerName} />
      <CareersFilterBySalary filterBySalary={filterBySalary} setFilterBySalary={setFilterBySalary} minSalary={minSalary} maxSalary={maxSalary} />
    </div>
  );
};

export default CollegesNavbar;
