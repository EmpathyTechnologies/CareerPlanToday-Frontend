import Card from "react-bootstrap/Card";
import eric from "../assets/images/about/eric.jpg";
import maxwell from "../assets/images/about/maxwell.jpg";
import ramiro from "../assets/images/about/ramiro.jpg";
import tyler from "../assets/images/about/tyler.jpeg";
import user from "../assets/images/about/user.jpeg";
import yogi from "../assets/images/about/yogi.jpg";

export default function About() {
  const people = [
    {
      img: tyler,
      name: "Tyler Tompkins",
      position: "Software Developer",
      linkedIn: "https://www.linkedin.com/in/tyler-tompkins-6280bb1a4/",
    },
    {
      img: user,
      name: "Dustin Pezley",
      position: "Software Developer",
      linkedIn: "https://www.linkedin.com/in/dustinpezley/",
    },
    {
      img: user,
      name: "Karim Soufan",
      position: "Software Developer",
      linkedIn: "https://www.linkedin.com/in/karim-soufan-b96831181/",
    },

    {
      img: ramiro,
      name: "Ramiro Peña",
      position: "Software Developer",
      linkedIn: "https://www.linkedin.com/in/ramiro-pena/",
    },
    {
      img: yogi,
      name: "Yogi Zipori",
      position: "Software Developer",
      linkedIn: "https://www.linkedin.com/in/yogi-zipori/",
    },
    {
      img: maxwell,
      name: "Max Morrow",
      position: "Software Developer",
      linkedIn: "https://www.linkedin.com/in/maxwell-morrow-6a3085228/",
    },
    {
      img: user,
      name: "Mae Peña",
      position: "Software Developer",
      linkedIn: "https://www.linkedin.com/in/maepena/",
    },
    {
      img: eric,
      name: "Eric Hoover",
      position: `Project Manager / Architect`,
      linkedIn: "https://www.linkedin.com/in/hoov/",
    },
  ];

  const cardsList = people.map((person) => (
    <Card className='about-width' key={person.name}>
      <Card.Img variant='top' src={person.img} />
      <Card.Body>
        <Card.Title>{person.name}</Card.Title>
        <Card.Text>{person.position}</Card.Text>
        <Card.Link href={person.linkedIn}>LinkedIn</Card.Link>
      </Card.Body>
    </Card>
  ));

  return (
    <div>
      <h1>About Us</h1>
      <div className='about-card-list'>{cardsList}</div>
    </div>
  );
}
