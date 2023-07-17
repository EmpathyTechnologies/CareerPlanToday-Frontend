import { Card } from "react-bootstrap";

type Props = {
  person: Person;
};

type Person = {
  img: string;
  name: string;
  title: string;
  linkedIn: string;
};

const PersonCard = ({ person }: Props) => {
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

/* .card {
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 338px;
  margin: 20px;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.1);
}

.card-img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 10px;
}

.card-title {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-text {
  text-align: center;
  font-size: 16px;
  line-height: 1.4;
} */
