import Hero from "../features/home/Hero";
import Cards from "../features/home/Cards";

export default function Home() {
  return (
    <div className='navbar-spacer' id='product-landing'>
      <Hero />
      <Cards />
    </div>
  );
}
