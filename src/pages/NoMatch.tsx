import Footer from "../components/Footer/Footer";

export default function NoMatch(props: any) {
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
