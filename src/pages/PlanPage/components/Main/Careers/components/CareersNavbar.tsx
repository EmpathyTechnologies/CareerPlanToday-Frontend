import { CareerNavbarType } from "../../../../../../types/CareerNavbarType";

import FilterDoubleSlider from "../../../../../../components/FilterDoubleSlider";
import FilterDropdownSearch from "../../../../../../components/FilterDropdownSearch";
import React from "react";

const careerFields = [
  { name: "All Careers" },
  { name: "Construction" },
  { name: "Education" },
  { name: "Engineer" },
  { name: "Finance" },
  { name: "Healthcare" },
];

// todo... figure out how filter dropdown search can update minSalary & maxSalary

const CollegesNavbar: React.FC<CareerNavbarType> = ({ setFilterByCareerName, filterBySalary, setFilterBySalary, minSalary, maxSalary }) => {
  return (
    <div className='d-flex'>
      <div className='mr-25 mt-25 mb-25'>
        <FilterDropdownSearch text='All Careers' menuArray={careerFields} setFilter={setFilterByCareerName} />
      </div>
      <div className='mt-25 mb-25'>
        <FilterDoubleSlider filter={filterBySalary} setFilter={setFilterBySalary} min={minSalary} max={maxSalary} />
      </div>
    </div>
  );
};

export default CollegesNavbar;
