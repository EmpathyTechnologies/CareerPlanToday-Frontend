import "./scss/common.scss";
import "./scss/pages/career.scss";
import Navigation from "./navbar";
import Header from "./header";
import Content from "./content";
import SecondNavigation from "./second-navigation";
import { useState } from "react";
import allCareers from "../../data/allCareers";

function Home() {
  const [careers, setCareers] = useState(allCareers);

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
