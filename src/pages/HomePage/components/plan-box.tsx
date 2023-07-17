import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function PlanBox(props: any) {
  return (
    <Col className='plan-box' lg={4} sm={6}>
      <a href='#' style={{ textDecoration: "none" }}>
        <Card className='text-center'>
          <div className='m-auto plans-card-img'>
            <Card.Img variant='top' src={props.img} className='plans-img' />
          </div>
          <Card.Body className='plans-card-text'>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
          </Card.Body>
        </Card>
      </a>
    </Col>
  );
}

export default PlanBox;
