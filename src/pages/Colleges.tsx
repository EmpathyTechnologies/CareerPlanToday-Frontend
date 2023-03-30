import { useState, useEffect } from "react";
import colleges from "../data/colleges.json";
import CollegesNavbar from "../components/Colleges/CollegesNavbar";
import Footer from "../components/Footer/Footer";

export default function Colleges() {
  const [collegesList, setCollegesList] = useState([...colleges]);
  const [selected, setSelected] = useState<string>("All Colleges");

  useEffect(() => {
    if (selected === "All Careers") {
      setCollegesList([...colleges]);
    } else {
      let selectedColleges = colleges.filter((colleges) => colleges.specialties.includes(selected));
      setCollegesList([...selectedColleges]);
    }
  }, [selected]);

  return (
    <div className='CareerContainer'>
      <CollegesNavbar selected={selected} setSelected={setSelected} />
      {/* ADD COLLEGE TABLE & COLLEGE TABLE ITEM COMPONENTS */}
      <Footer />
    </div>
  );
}
