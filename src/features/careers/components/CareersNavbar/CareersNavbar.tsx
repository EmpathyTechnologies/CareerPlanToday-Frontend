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

// todo... figure out how filter dropdown search can up date minSalary & maxSalary
// todo... figure out how to keep these section sticky

const CollegesNavbar: React.FC<CareersNavbarProps> = ({ setFilterByCareerName, filterBySalary, setFilterBySalary, minSalary, maxSalary }) => {
  return (
    <div className='d-flex'>
      <div className='mr-25 mt-25 mb-25'>
        <FilterDropdownSearch text='All Careers' menuArray={careerFields} setFilter={setFilterByCareerName} />
      </div>
      <div className='mt-25 mb-25'>
        <FilterDoubleSlider filter={filterBySalary} setFilter={setFilterBySalary} minNumber={minSalary} maxNumber={maxSalary} />
      </div>
    </div>
  );
};

export default CollegesNavbar;
