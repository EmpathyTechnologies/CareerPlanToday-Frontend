import React from "react";

import "./CollegesNavbar.css";
import CollegesFilterByStates from "./CollegesFilterByStates";
import CollegesFilterByTuition from "./CollegesFilterByTuition";

interface CollegesNavbarProps {
  collegesList: any;
  setFilterByStates: any;
  filterByTuition: any;
  setFilterByTuition: any;
  minimumTuition: any;
  maximumTuition: any;
}

const CollegesNavbar: React.FC<CollegesNavbarProps> = ({
  collegesList,
  setFilterByStates,
  filterByTuition,
  setFilterByTuition,
  minimumTuition,
  maximumTuition,
}) => {
  return (
    <div id='colleges-navbar-container'>
      <CollegesFilterByStates setFilterByStates={setFilterByStates} />
      <CollegesFilterByTuition
        collegesList={collegesList}
        filterByTuition={filterByTuition}
        setFilterByTuition={setFilterByTuition}
        minimumTuition={minimumTuition}
        maximumTuition={maximumTuition}
      />
    </div>
  );
};

export default CollegesNavbar;
