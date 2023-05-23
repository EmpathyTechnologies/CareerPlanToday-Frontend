import React from "react";
import FilterDropdownSearch from "../../../../components/FilterDropdownSearch";
import FilterDoubleSlider from "../../../../components/FilterDoubleSlider";

const careerFields = [
  { name: "All Careers" },
  { name: "Construction" },
  { name: "Education" },
  { name: "Engineer" },
  { name: "Finance" },
  { name: "Healthcare" },
];

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
      <FilterDropdownSearch text='All Careers' menuArray={careerFields} setFilter={setFilterByCareerName} />
      <FilterDoubleSlider filter={filterBySalary} setFilter={setFilterBySalary} minNumber={minSalary} maxNumber={maxSalary} />
    </div>
  );
};

export default CollegesNavbar;
