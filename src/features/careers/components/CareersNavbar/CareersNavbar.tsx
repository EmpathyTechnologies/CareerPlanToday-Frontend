import React from "react";

import CareersFilterByCareerField from "./CareersFilterByCareerField";
import FilterDoubleSlider from "../../../../components/FilterDoubleSlider";

interface CareersNavbarProps {
  setFilterByCareerName: any;
  filterBySalary: any;
  setFilterBySalary: any;
  minSalary: any;
  maxSalary: any;
}

const CollegesNavbar: React.FC<CareersNavbarProps> = ({ setFilterByCareerName, filterBySalary, setFilterBySalary, minSalary, maxSalary }) => {
  return (
    <div>
      <CareersFilterByCareerField setFilterByCareerName={setFilterByCareerName} />
      <FilterDoubleSlider filter={filterBySalary} setFilter={setFilterBySalary} minNumber={minSalary} maxNumber={maxSalary} />
    </div>
  );
};

export default CollegesNavbar;
