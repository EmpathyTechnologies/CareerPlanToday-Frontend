import { useState, useEffect } from "react";
import { minTuition, maxTuition } from "./utilities/minAndMaxTuition";
import { filterColleges } from "./utilities/filterColleges";
import allColleges from "../../data/colleges.json";
import CollegesNavbar from "./components/CollegesNavbar";
import CollegesTable from "./components/CollegesTable";
import Navigation from "../../layouts/Navbar";
import Footer from "../../layouts/footer4";

export default function Colleges() {
  const [colleges, setColleges] = useState(allColleges);
  const [filterByStates, setFilterByStates] = useState<string>("All States");
  const [filterByTuition, setFilterByTuition] = useState<number[]>([minTuition, maxTuition]);

  useEffect(() => {
    let filteredColleges = filterColleges(filterByStates, filterByTuition);
    setColleges(filteredColleges);
  }, [filterByStates, filterByTuition]);

  return (
    <div>
      <Navigation />
      <CollegesNavbar
        setFilterByStates={setFilterByStates}
        filterByTuition={filterByTuition}
        setFilterByTuition={setFilterByTuition}
        minTuition={minTuition}
        maxTuition={maxTuition}
      />

      <CollegesTable colleges={colleges} setColleges={setColleges}></CollegesTable>
      <Footer />
    </div>
  );
}
