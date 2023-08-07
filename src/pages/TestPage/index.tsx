// import "./scss/common.scss";
// import "./scss/pages/career.scss";
import Navigation from "./navbar";
import Header from "./header";
import Content from "./content";
import SecondNavigation from "./second-navigation";

function Home() {
  return (
    <div>
      <Navigation />
      <Header />
      <SecondNavigation />
      <Content />
    </div>
  );
}

export default Home;
