import Hero from "../features/home/Hero";
import Cards from "../features/home/Cards";

// Maybe put all cards inside same <Card> div to remove border lines.
export default function Home() {
  return (
    <div className='navbar-spacer'>
      <Hero />
      <Cards />
    </div>
  );
}
