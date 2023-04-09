// TO-DO:  import React is unused.  Therefore this should be deleted to improve performance and clean code. (However, I have lots of unused code in this project that I need to delete)
import React from "react";

// TO-DO: import "bootstrap/dist/css/bootstrap.min.css" is already imported in index.tsx.  Therefore this code should be deleted to improve performance and clean code.
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
// DISCUSSION: images go inside an "assets" folder
import img1 from "../assets/about-first.jpg";
import img2 from "../assets/about-second.jpg";
import img3 from "../assets/about-third.jpg";
import img4 from "../assets/about-fourth.jpg";
import img5 from "../assets/ramiro-pic.jpg";
import img6 from "../assets/eric-pic.jpg";

// TO-DO:  Import the Footer Component

export default function About() {
  return (
    <div>
      <h1 className='aboutHeader'>About Our Team</h1>

      {/* DISCUSSION:  DRY Principle: do not repeat yourself */}
      {/* TO-DO: There are multiple codes for cards that are the same thing.  Instead, use the map function */}

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
      {/* DISCUSSION:  There is already a Footer component tha has the below code. */}
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
// DISCUSSION:  Team design discussion.  Realistic photos vs Drawn photos idea.  Image design & quality consistentcy.  Fiverr.  Would need standard photos.
// DISCUSSION:  Image on image vs. simplicity in design.  https://dribbble.com/stories/2020/05/05/7-best-practices-photography-ui-design
