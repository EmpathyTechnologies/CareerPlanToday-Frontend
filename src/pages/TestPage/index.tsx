import "./scss/common.scss";
import "./scss/pages/career.scss";
import Navigation from "./navbar";
import Header from "./header";
import Content from "./content";
import SecondNavigation from "./second-navigation";
import { useState } from "react";
import img1 from "./img/img-2.png";
import img2 from "./img/img-3.png";
import img3 from "./img/img-4.png";

function Home() {
  const [careers, setCareers] = useState([
    { img: img1, title: "Teacher", salary: 81220 },
    { img: img1, title: "ABC", salary: 81220 },
    { img: img2, title: "Nurse", salary: 81220 },
    { img: img3, title: "Engineer", salary: 81220 },
    { img: img1, title: "Teacher", salary: 81220 },
    { img: img2, title: "Nurse", salary: 81220 },
    { img: img3, title: "Engineer", salary: 81220 },
    { img: img1, title: "Teacher", salary: 81220 },
  ]);

  return (
    <div>
      <Navigation />
      <Header />
      <SecondNavigation />
      <Content careers={careers} />
    </div>
  );
}

export default Home;
