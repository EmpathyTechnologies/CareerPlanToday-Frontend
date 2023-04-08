import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import img1 from "../Images/about-first.jpg";
import img2 from "../Images/about-second.jpg";
import img3 from "../Images/about-third.jpg";
import img4 from "../Images/about-fourth.jpg";
import img5 from "../Images/ramiro-pic.jpg";
import img6 from "../Images/Eric-pic.jpg";
// TO-DO:  Import the Footer Component
export default function About() {
  return (
    <div>
      <h1 className='aboutHeader'>About Our Team</h1>

      {/* TO-DO: Instead of creating code for the card multiple times, use the map function */}

      <hr className='aboutHr' />

      <Card className='about'>
        <Card.Img src={img1} className='aboutImg' alt='No Pic' />
        <Card.ImgOverlay>
          <Card.Text className='aboutCardHeader'>Eric</Card.Text>
          <img className='ericAbout' src={img6} />
          <Card.Text className='aboutText'>
            Eric's leadership skills and technical expertise as a skilled software developer allowed
            him to bring together a diverse team to help others find employment. He motivated the
            team to work collaboratively and create innovative solutions using their individual
            talents and perspectives. With Eric's guidance, the team was able to develop
            user-friendly websites and mobile applications that made job searching more accessible.
            Eric's leadership and technical proficiency were a winning combination that made a real
            difference in the lives of job seekers.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>

      <hr className='aboutHr' />

      <Card className='about'>
        <Card.Img src={img2} className='aboutImg' alt='No Pic' />
        <Card.ImgOverlay>
          <Card.Text className='aboutCardHeader'>Yogi</Card.Text>
        </Card.ImgOverlay>
      </Card>

      <hr className='aboutHr' />

      <Card className='about'>
        <Card.Img src={img3} className='aboutImg' alt='No Pic' />
        <Card.ImgOverlay>
          <Card.Text className='aboutCardHeader'>Seygourney</Card.Text>
        </Card.ImgOverlay>
      </Card>

      <hr className='aboutHr' />

      <Card className='about'>
        <Card.Img src={img4} className='aboutImg' alt='No Pic' />
        <Card.ImgOverlay>
          <Card.Text className='aboutCardHeader'>Ramiro</Card.Text>
          <img className='ramiroAbout' src={img5} alt='no pic' />
          <Card.Text className='aboutText'>
            I contribute as a skilled software developer with problem-solving abilities and
            attention to detail. My expertise in writing code and developing functional software
            solutions is essential to achieving the team's goals. I collaborate effectively, share
            my knowledge and expertise, and foster a culture of learning and growth. In addition, I
            highly value comradery within the team, and I believe that a positive and collaborative
            work environment is crucial for success. I am always willing to lend a helping hand and
            work together with my colleagues to achieve our common goals. As a team player, I strive
            to create an atmosphere of mutual respect and support, which allows us to work more
            efficiently and achieve our objectives effectively.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>

      <br />
      {/* TO-DO:  Replace the below code with the footer component <Footer />  */}
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
//
