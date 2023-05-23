import React from "react";
import CollegesFilterByStates from "./CollegesFilterByStates";
import FilterDoubleSlider from "../../../../components/FilterDoubleSlider";

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

      <FilterDoubleSlider filter={filterByTuition} setFilter={setFilterByTuition} minNumber={minTuition} maxNumber={maxTuition} />
    </div>
  );
};

export default CollegesNavbar;
