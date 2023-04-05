import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import img1 from "../Images/about-first.jpg";
import img2 from "../Images/about-second.jpg";
import img3 from "../Images/about-third.jpg";
import img4 from "../Images/about-fourth.jpg";
export default function About() {
  return (
    <div>

      <h1 className="aboutHeader">About Our Team</h1>

      <hr className="aboutHr"/>

      <Card className="about">
        <Card.Img src={img1} className="aboutImg1" alt="No Pic"/>
        <Card.ImgOverlay>
        <Card.Text className="aboutText">Eric</Card.Text>
        </Card.ImgOverlay>
      </Card> 

      <hr className="aboutHr"/>

      <Card className="about">
        <Card.Img src={img2} className="aboutImg1" alt="No Pic"/>
        <Card.ImgOverlay>
        <Card.Text className="aboutText">Yogi</Card.Text>
        
        </Card.ImgOverlay>
      </Card> 

      <hr className="aboutHr"/>

      <Card className="about">
        <Card.Img src={img3} className="aboutImg1" alt="No Pic"/>
        <Card.ImgOverlay>
        <Card.Text className="aboutText">Ramiro</Card.Text>
        </Card.ImgOverlay>
      </Card> 

      <hr className="aboutHr"/>

      <Card className="about">
        <Card.Img src={img4} className="aboutImg1" alt="No Pic"/>
        <Card.ImgOverlay>
        <Card.Text className="aboutText">Seygourney</Card.Text>
        </Card.ImgOverlay>
      </Card> 

      <br/>

      <Nav className='BorderTop'>
      <Nav.Item as='li'>
        <Nav.Link href='./termsofuse'>Terms</Nav.Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Nav.Link href='./privacypolicy'>Privacy</Nav.Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Nav.Link href='./about'>About</Nav.Link>
      </Nav.Item>
    </Nav>

    </div>
  );
}
