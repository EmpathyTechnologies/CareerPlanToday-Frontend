import { useState, useEffect } from "react";
import careers from "../data/careers.json";

import NavigationBar from "../components/NavigationBar/NavigationBar";
import CareersNavbar from "../components/Careers/CareersNavbar";
import CareersTable from "../components/Careers/CareersTable";
import Footer from "../components/Footer/Footer";

export default function Careers(props: any) {
  const { navbarSelected, setNavbarSelected } = props;

  const [careersList, setCareersList] = useState([...careers]);
  const [selected, setSelected] = useState<string>("All Careers");

  useEffect(() => {
    if (selected == "All Careers") {
      setCareersList([...careers]);
    } else {
      let selectedCareers = careers.filter((career) => career.industries.includes(selected));
      setCareersList([...selectedCareers]);
    }
  }, [selected]);

  return (
    <div className='CareerContainer'>
      <CareersNavbar selected={selected} setSelected={setSelected} />
      <table
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <tbody>
          <tr>
            <th>CAREER</th>
            <th>SALARY</th>
          </tr>
          {careersList.map((career: any, index: number) => (
            <CareersTable key={career.title} career={career} />
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
}
