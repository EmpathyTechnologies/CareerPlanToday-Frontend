import React from "react";
import "../../../../assets/styles/CollegesNavbar.css";
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
    <div id='colleges-navbar-container'>
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
