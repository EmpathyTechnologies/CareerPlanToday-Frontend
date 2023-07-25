import { useState, useEffect } from "react";
import { minTuition, maxTuition } from "./utilities/minAndMaxTuition";
import { filterColleges } from "./utilities/filterColleges";
import allColleges from "../../data/colleges.json";
import CollegesNavbar from "./components/CollegesNavbar";
import CollegesTable from "./components/CollegesTable";
import Navigation from "../../layouts/Navigation";
import Footer from "../../layouts/Footer";

export default function Colleges() {
  const [colleges, setColleges] = useState(allColleges);
  const [filterByStates, setFilterByStates] = useState<string>("All States");
  const [filterByTuition, setFilterByTuition] = useState<number[]>([minTuition, maxTuition]);

  useEffect(() => {
    let filteredColleges = filterColleges(filterByStates, filterByTuition);
    setColleges(filteredColleges);
  }, [filterByStates, filterByTuition]);

  const [userSavedColleges, setUserSavedColleges] = useState<number[]>([2, 4, 6]);

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

      <CollegesTable colleges={colleges} setColleges={setColleges} setUserSavedColleges={setUserSavedColleges}></CollegesTable>
      <Footer />
    </div>
  );
}
