import Footer from "../components/Footer/Footer";

import NavigationBar from "../components/NavigationBar/NavigationBar";

export default function NoMatch(props: any) {
  const { navbarSelected, setNavbarSelected } = props;

  return (
    <div>
      <NavigationBar navbarSelected={navbarSelected} setNavbarSelected={setNavbarSelected} />

      <a href='./'>Home</a>
      <div>NoMatch</div>
      <Footer />
    </div>
  );
}
