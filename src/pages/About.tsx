import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import img1 from "../Images/about-first.jpg";

export default function About() {
  return (
    <div className="about">

      <h1 className="aboutHeader">About Our Team</h1>

      <hr/>

      <Card >
        <Card.Img src={img1} alt="No Pic"/>
        <Card.ImgOverlay>
        <Card.Text>This website is brought to you by Yogi, Ramiro, and Eric.</Card.Text>
        <Card.Text>
          This about website was created to inform the public about different job
          rates.
        </Card.Text>
        </Card.ImgOverlay>
      </Card> 
  

    </div>
  );
}
