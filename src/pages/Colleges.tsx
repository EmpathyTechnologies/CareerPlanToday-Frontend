import "../features/colleges/assets/colleges.css";
import { useState, useEffect } from "react";
import { minTuition, maxTuition } from "../features/colleges/utils/minAndMaxTuition";
import { filterColleges } from "../features/colleges/utils/filterColleges";
import allColleges from "../data/colleges.json";
import CollegesNavbar from "../features/colleges/components/CollegesNavbar/CollegesNavbar";
import CollegesTable from "../features/colleges/components/CollegesNavbar/CollegesTable";

// TODO:  Set up a scroll on the table, instead of scrolling on the window

export default function Colleges() {
  const [colleges, setColleges] = useState(allColleges);
  const [filterByStates, setFilterByStates] = useState<string>("All States");
  const [filterByTuition, setFilterByTuition] = useState<number[]>([minTuition, maxTuition]);

  useEffect(() => {
    let filteredColleges = filterColleges(filterByStates, filterByTuition);
    setColleges(filteredColleges);
  }, [filterByStates, filterByTuition]);

  return (
    <div className='navbar-spacer footer-spacer'>
      <div className='CareersContainer'>
        <div style={{ position: "fixed" }}>
          <CollegesNavbar
            setFilterByStates={setFilterByStates}
            filterByTuition={filterByTuition}
            setFilterByTuition={setFilterByTuition}
            minTuition={minTuition}
            maxTuition={maxTuition}
          />
        </div>
        <div style={{ padding: "25px", paddingTop: "74px" }}>
          <CollegesTable colleges={colleges} setColleges={setColleges}></CollegesTable>
        </div>
      </div>
    </div>
  );
}
