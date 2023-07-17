import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function CollegeBox(props: any) {
  return (
    <Col className='college-box' lg={4} sm={6}>
      <a href={props.href} style={{ textDecoration: "none" }}>
        <Card className='text-center'>
          <div className='m-auto colleges-card-img'>
            <Card.Img variant='top' src={props.img} className='colleges-img' />
          </div>
          <Card.Body className='colleges-card-text'>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.cost}</Card.Text>
          </Card.Body>
        </Card>
      </a>
    </Col>
  );
}

export default CollegeBox;
