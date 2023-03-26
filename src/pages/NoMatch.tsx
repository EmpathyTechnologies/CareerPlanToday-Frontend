import Footer from "../components/Footer/Footer";

import NavigationBar from "../components/NavigationBar/NavigationBar";

export default function NoMatch(props: any) {
  const { navbarSelected, setNavbarSelected } = props;

  return (
    <div>
      <h1>Sorry!</h1>
      <h2>
        <div>We couldn't find that page.</div>
        <div>Click on an above navigation link to continue.</div>
      </h2>
      <Footer />
    </div>
  );
}
