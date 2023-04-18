import Card from "react-bootstrap/Card";
import ramiroPic from "../assets/ramiroPic.jpg";
import ericPic from "../assets/ericPic.jpg";
import yogiPic from "../assets/yogiPic.jpg";
import maePic from "../assets/maePic.jpg";
import Footer from "../layouts/Footer";
import styles from "../assets/About.module.css"; 

export default function About() {
  const people = [
    {
      img: ramiroPic,
      name: "Ramiro",
      position: "Software Developer",
      linkedIn: "https://www.linkedin.com/in/ramiro-pena/",
    },
    {
      img: yogiPic,
      name: "Yogi",
      position: "Software Developer",
      linkedIn: "https://www.linkedin.com/in/yogi-zipori/",
    },
    {
      img: maePic,
      name: "Mae",
      position: "Software Developer",
      linkedIn: "https://www.linkedin.com/in/maepena/",
    },
    {
      img: ericPic,
      name: "Eric",
      position: "Software Developer",
      linkedIn: "https://www.linkedin.com/in/hoov/",
    }
  ];

const cardsList = people.map((person) => (
    <Card style={{ width: "18rem" }} key={person.name}>
      <Card.Img variant="top" src={person.img} />
      <Card.Body>
        <Card.Title>{person.name}</Card.Title>
        <Card.Text>{person.position}</Card.Text>
        <Card.Link href={person.linkedIn}>LinkedIn</Card.Link>
      </Card.Body>
    </Card>
  ));

  return (
    <div>
      <h1 className={styles.aboutHeader}>About Us</h1>
      <div className={styles.aboutCardContainer}>{cardsList}</div>
      <Footer />
    </div>
  );
}
