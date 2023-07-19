import people from "../data/People";
import PersonCard from "./PersonCard";

const AboutPeople = () => {
  const cardsList = people.map((person) => <PersonCard key={person.img} person={person} />);

  return (
    <div>
      <h1>About Us</h1>
      <div className='about-card-list'>{cardsList}</div>
    </div>
  );
};

export default AboutPeople;
