import { useState, useEffect } from "react";
import allCareers from "../data/careers.json";
import CareersNavbar from "../components/Careers/CareersNavbar";
import Footer from "../components/Footer/Footer";
import CareersTable from "../components/Careers/CareersTable";

export default function Careers() {
  const [careersList, setCareersList] = useState(allCareers);
  const [filter, setFilter] = useState<string>("All Careers");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (filter === "All Careers") setCareersList(allCareers);
    else {
      let filteredCareers = allCareers.filter((career) => career.industries.includes(filter));
      setCareersList(filteredCareers);
    }
  }, [filter]);

  return (
    <div className='CareersContainer'>
      <CareersNavbar setFilter={setFilter} />
      <CareersTable careersList={careersList} favorites={favorites} setFavorites={setFavorites} />
      <Footer />
    </div>
  );
}
