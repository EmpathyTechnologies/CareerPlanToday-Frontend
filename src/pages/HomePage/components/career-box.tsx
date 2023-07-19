import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function CareerBox(props: any) {
  return (
    <Col className='career-box' lg={3} sm={6}>
      <a href={props.href} style={{ textDecoration: "none" }}>
        <Card className='text-white'>
          <Card.Img src={props.img} alt='Card image' />
          <Card.ImgOverlay>
            <div className='career-box-card-text'>
              <Card.Title className='card-title'>{props.title}</Card.Title>
              <Card.Title className='card-salary'>{props.salary}</Card.Title>
            </div>
          </Card.ImgOverlay>
        </Card>
      </a>
    </Col>
  );
}

export default CareerBox;
