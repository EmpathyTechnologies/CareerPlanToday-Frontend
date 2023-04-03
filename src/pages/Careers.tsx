import { useState, useEffect } from "react";
import careers from "../data/careers.json";

import CareersNavbar from "../components/Careers/CareersNavbar";
import Footer from "../components/Footer/Footer";
import CareersTable from "../components/Careers/CareersTable";

export default function Careers() {
  const [careersList, setCareersList] = useState([...careers]);
  const [selected, setSelected] = useState<string>("All Careers");

  useEffect(() => {
    if (selected === "All Careers") {
      setCareersList([...careers]);
    } else {
      let selectedCareers = careers.filter((career) => career.industries.includes(selected));
      setCareersList([...selectedCareers]);
    }
  }, [selected]);

  return (
    <div className='CareersContainer'>
      <CareersNavbar selected={selected} setSelected={setSelected} />
      <CareersTable careersList={careersList} />
      <Footer />
    </div>
  );
}
