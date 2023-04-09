import React from "react";

import "./CollegesNavbar.css";
import CollegesNavbarStatesDropdown from "./CollegesNavbarStatesDropdown";
import CollegesNavbarTuitionSlider from "./CollegesNavbarTuitionSlider";

interface CollegesNavbarProps {
  setFilter: any;
}

const CollegesNavbar: React.FC<CollegesNavbarProps> = ({ setFilter }) => {
  return (
    <div id='colleges-navbar-container'>
      <CollegesNavbarStatesDropdown setFilter={setFilter} />
      <CollegesNavbarTuitionSlider />
    </div>
  );
};

export default CollegesNavbar;
