import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function CareerBox(props: any) {
  return (
    <Col className='career-box' lg={4} sm={6}>
      <a href='#' style={{ textDecoration: "none" }}>
        <Card className='text-white'>
          <Card.Img src={props.img} alt='Card image' />
          <Card.ImgOverlay>
            <div className='career-box-card-text'>
              <Card.Title className='card-title'>{props.jobTitle}</Card.Title>
              <Card.Title className='card-salary'>Salary ${props.salary}</Card.Title>
            </div>
          </Card.ImgOverlay>
        </Card>
      </a>
    </Col>
  );
}

export default CareerBox;
