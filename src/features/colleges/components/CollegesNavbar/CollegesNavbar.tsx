import React from "react";
import CollegesFilterByStates from "./CollegesFilterByStates";
import CollegesFilterByTuition from "./CollegesFilterByTuition";

interface CollegesNavbarProps {
  setFilterByStates: any;
  filterByTuition: any;
  setFilterByTuition: any;
  minTuition: any;
  maxTuition: any;
}

const CollegesNavbar: React.FC<CollegesNavbarProps> = ({ setFilterByStates, filterByTuition, setFilterByTuition, minTuition, maxTuition }) => {
  return (
    <div>
      <CollegesFilterByStates setFilterByStates={setFilterByStates} />
      <CollegesFilterByTuition
        filterByTuition={filterByTuition}
        setFilterByTuition={setFilterByTuition}
        minTuition={minTuition}
        maxTuition={maxTuition}
      />
    </div>
  );
};

export default CollegesNavbar;
