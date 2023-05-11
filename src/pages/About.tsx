import styles from "../assets/styles/About.module.css";
import Card from "react-bootstrap/Card";

import eric from "../assets/images/about/eric.jpg";
import maxwell from "../assets/images/about/maxwell.jpg";
import ramiro from "../assets/images/about/ramiro.jpg";
import yogi from "../assets/images/about/yogi.jpg";

export default function About() {
  const people = [
    {
      img: ramiro,
      name: "Ramiro",
      position: "Software Developer",
      linkedIn: "https://www.linkedin.com/in/ramiro-pena/",
    },
    {
      img: yogi,
      name: "Yogi",
      position: "Software Developer",
      linkedIn: "https://www.linkedin.com/in/yogi-zipori/",
    },
    {
      img: maxwell,
      name: "Max",
      position: "Software Developer",
      linkedIn: "https://www.linkedin.com/in/maxwell-morrow-6a3085228/",
    },
    {
      img: eric,
      name: "Eric",
      position: "Software Developer",
      linkedIn: "https://www.linkedin.com/in/hoov/",
    },
  ];

  const cardsList = people.map((person) => (
    <Card style={{ width: "18rem" }} key={person.name}>
      <Card.Img variant='top' src={person.img} />
      <Card.Body>
        <Card.Title>{person.name}</Card.Title>
        <Card.Text>{person.position}</Card.Text>
        <Card.Link href={person.linkedIn}>LinkedIn</Card.Link>
      </Card.Body>
    </Card>
  ));

  return (
    <div className='navbar-spacer footer-spacer'>
      <h1 className={styles.aboutHeader}>About Us</h1>
      <div className={styles.aboutCardContainer}>{cardsList}</div>
    </div>
  );
}
