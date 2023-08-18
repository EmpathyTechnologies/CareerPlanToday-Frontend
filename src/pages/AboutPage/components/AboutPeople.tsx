import developers from "../../../data/Developers";
import PersonCard from "./PersonCard";

const AboutPeople = () => {
  const cardsList = developers.map((person) => <PersonCard key={person.img} person={person} />);

  return (
    <div>
      <h1>About Us</h1>
      <div className='about-card-list'>{cardsList}</div>
    </div>
  );
};

export default AboutPeople;
