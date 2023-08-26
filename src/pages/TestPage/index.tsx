import "./scss/common.scss";
import "./scss/pages/career.scss";

import { useState } from "react";

import allCareers from "../../data/allCareers";
import Content from "./content";
import Header from "./header";
import Navigation from "./navbar";
import SecondNavigation from "./second-navigation";

function Home() {
  const [careers, setCareers] = useState(allCareers);

  return (
    <div>
      <Navigation />
      <Header />
      <SecondNavigation />
      <Content careers={careers} setCareers={setCareers} />
    </div>
  );
}

export default Home;
