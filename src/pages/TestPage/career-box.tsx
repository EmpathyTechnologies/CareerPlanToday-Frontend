import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
// import Heart from "react-heart";

function CareerBox(props: any) {
  const [active, setActive] = useState(false);
  return (
    <Col className='career-box' lg={4} sm={6}>
      <a href='#' style={{ textDecoration: "none" }}>
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
      {/* <div className='heart' style={{ width: "2rem" }}>
        <Heart isActive={active} onClick={() => setActive(!active)} inactiveColor='#fff' />
      </div> */}
    </Col>
  );
}

export default CareerBox;
