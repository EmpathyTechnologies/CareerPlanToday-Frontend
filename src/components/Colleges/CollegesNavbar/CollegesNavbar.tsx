import React from "react";

import "./CollegesNavbar.css";
import CollegesFilterByStates from "./CollegesFilterByStates";
import CollegesFilterByTuition from "./CollegesFilterByTuition";

interface CollegesNavbarProps {
  collegesList: any;
  setFilterByStates: any;
  filterByTuition: any;
  setFilterByTuition: any;
  lowestTuition: any;
  setLowestTuition: any;
  highestTuition: any;
  setHighestTuition: any;
}

const CollegesNavbar: React.FC<CollegesNavbarProps> = ({
  collegesList,
  setFilterByStates,
  filterByTuition,
  setFilterByTuition,
  lowestTuition,
  setLowestTuition,
  highestTuition,
  setHighestTuition,
}) => {
  return (
    <div id='colleges-navbar-container'>
      <CollegesFilterByStates setFilterByStates={setFilterByStates} />
      <CollegesFilterByTuition
        collegesList={collegesList}
        filterByTuition={filterByTuition}
        setFilterByTuition={setFilterByTuition}
        lowestTuition={lowestTuition}
        setLowestTuition={setLowestTuition}
        highestTuition={highestTuition}
        setHighestTuition={setHighestTuition}
      />
    </div>
  );
};

export default CollegesNavbar;
