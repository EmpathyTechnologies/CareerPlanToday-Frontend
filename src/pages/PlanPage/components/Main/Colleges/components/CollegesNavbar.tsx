import React from "react";
import FilterDropdownSearch from "../../../../../../components/FilterDropdownSearch";
import FilterDoubleSlider from "../../../../../../components/FilterDoubleSlider";
import { CollegesNavbarType } from "../../../../../../types/CollegesNavbarType";

const statesOfAmerica = [
  { name: "All States" },
  { name: "Alabama" },
  { name: "Alaska" },
  { name: "American Samoa" },
  { name: "Arizona" },
  { name: "Arkansas" },
  { name: "California" },
  { name: "Colorado" },
  { name: "Connecticut" },
  { name: "Delaware" },
  { name: "Florida" },
  { name: "Georgia" },
  { name: "Hawaii" },
  { name: "Idaho" },
  { name: "Illinois" },
  { name: "Indiana" },
  { name: "Iowa" },
  { name: "Kansas" },
  { name: "Kentucky" },
  { name: "Louisiana" },
  { name: "Maine" },
  { name: "Maryland" },
  { name: "Massachusetts" },
  { name: "Michigan" },
  { name: "Minnesota" },
  { name: "Mississippi" },
  { name: "Missouri" },
  { name: "Montana" },
  { name: "Nebraska" },
  { name: "Nevada" },
  { name: "New Hampshire" },
  { name: "New Jersey" },
  { name: "New Mexico" },
  { name: "New York" },
  { name: "North Carolina" },
  { name: "North Dakota" },
  { name: "Ohio" },
  { name: "Oklahoma" },
  { name: "Oregon" },
  { name: "Pennsylvania" },
  { name: "Puerto Rico" },
  { name: "Rhode Island" },
  { name: "South Carolina" },
  { name: "South Dakota" },
  { name: "Tennessee" },
  { name: "Texas" },
  { name: "Utah" },
  { name: "Vermont" },
  { name: "Virginia" },
  { name: "Washington" },
  { name: "Washington DC" },
  { name: "West Virginia" },
  { name: "Wisconsin" },
  { name: "Wyoming" },
];

// todo... figure out how filter dropdown search can up date minTuition & maxTuition

const CollegesNavbar: React.FC<CollegesNavbarType> = ({ setFilterByStates, filterByTuition, setFilterByTuition, minTuition, maxTuition }) => {
  return (
    <div className='d-flex'>
      <div className='mr-25 mt-25 mb-25'>
        <FilterDropdownSearch text='All States' menuArray={statesOfAmerica} setFilter={setFilterByStates} />
      </div>
      <div className='mt-25 mb-25'>
        <FilterDoubleSlider filter={filterByTuition} setFilter={setFilterByTuition} min={minTuition} max={maxTuition} />
      </div>
    </div>
  );
};

export default CollegesNavbar;
