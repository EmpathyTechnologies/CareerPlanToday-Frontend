import { Card } from "react-bootstrap";

type Props = {
    person: Person,
}

type Person = {
    img: string,
    name: string,
    position: string,
    linkedIn: string,
}

const PersonCard = ({person}: Props) => {
    const altString = "Image of " + person.name;

    return (
        <Card className='about-width' key={person.name}>
            <Card.Img variant='top' src={person.img} alt={altString}/>
            <Card.Body>
                <Card.Title>{person.name}</Card.Title>
                <Card.Text>{person.position}</Card.Text>
                <Card.Link href={person.linkedIn}>LinkedIn</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default PersonCard;