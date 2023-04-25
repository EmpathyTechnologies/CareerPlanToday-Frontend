import { useState, useEffect } from "react";
import allCareers from "../data/careers.json";
import CareersNavbar from "../features/careers/CareersNavbar";
import CareersTable from "../features/careers/CareersTable";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function Careers() {
  const [careers, setCareers] = useState(allCareers);
  const [filter, setFilter] = useState<string>("All Careers");
  const [favorites, setFavorites] = useLocalStorage<any[]>("careerFavorites", []);

  useEffect(() => {
    if (filter === "All Careers") setCareers(allCareers);
    else {
      let filteredCareers = allCareers.filter((career) => career.industries.includes(filter));
      setCareers(filteredCareers);
    }
  }, [filter]);

  return (
    <div className='CareersContainer'>
      <CareersNavbar setFilter={setFilter} />
      <CareersTable careers={careers} favorites={favorites} setFavorites={setFavorites} />
    </div>
  );
}
