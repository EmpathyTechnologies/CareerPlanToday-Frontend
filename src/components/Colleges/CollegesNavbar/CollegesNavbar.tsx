import React from "react";

import "./CollegesNavbar.css";
import CollegesFilterByStates from "./CollegesFilterByStates";
import CollegesFilterByTuition from "./CollegesFilterByTuition";

interface CollegesNavbarProps {
  collegesList: any;
  setFilter: any;
  sliderValues: any;
  setSliderValues: any;
  lowestTuition: any;
  setLowestTuition: any;
  highestTuition: any;
  setHighestTuition: any;
}

const CollegesNavbar: React.FC<CollegesNavbarProps> = ({
  collegesList,
  setFilter,
  sliderValues,
  setSliderValues,
  lowestTuition,
  setLowestTuition,
  highestTuition,
  setHighestTuition,
}) => {
  return (
    <div id='colleges-navbar-container'>
      <CollegesFilterByStates setFilter={setFilter} />
      <CollegesFilterByTuition
        collegesList={collegesList}
        sliderValues={sliderValues}
        setSliderValues={setSliderValues}
        lowestTuition={lowestTuition}
        setLowestTuition={setLowestTuition}
        highestTuition={highestTuition}
        setHighestTuition={setHighestTuition}
      />
    </div>
  );
};

export default CollegesNavbar;
