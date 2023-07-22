import { Card } from "react-bootstrap";
import { Person } from "../../../types/types";

type PersonCardProps = {
  person: Person;
};

const PersonCard = ({ person }: PersonCardProps) => {
  const altString = "Image of " + person.name;

  return (
    <Card className='about-width about-card' key={person.name}>
      <Card.Img variant='top' src={person.img} alt={altString} />
      <Card.Body>
        <Card.Title>{person.name}</Card.Title>
        <Card.Text>{person.title}</Card.Text>
        <Card.Link href={person.linkedIn}>LinkedIn</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default PersonCard;
