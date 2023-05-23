import React from "react";
import FilterDropdownSearch from "../../../../components/FilterDropdownSearch";
import FilterDoubleSlider from "../../../../components/FilterDoubleSlider";

const statesOfAmerica = [
  { name: "All States" },
  { name: "Alabama" },
  { name: "Alaska" },
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
  { name: "Rhode Island" },
  { name: "South Carolina" },
  { name: "South Dakota" },
  { name: "Tennessee" },
  { name: "Texas" },
  { name: "Utah" },
  { name: "Vermont" },
  { name: "Virginia" },
  { name: "Washington" },
  { name: "West Virginia" },
  { name: "Wisconsin" },
  { name: "Wyoming" },
];

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
      <FilterDropdownSearch text='All States' menuArray={statesOfAmerica} setFilter={setFilterByStates} />
      <FilterDoubleSlider filter={filterByTuition} setFilter={setFilterByTuition} minNumber={minTuition} maxNumber={maxTuition} />
    </div>
  );
};

export default CollegesNavbar;
