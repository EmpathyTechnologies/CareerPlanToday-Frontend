import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";

import img1 from "../assets/about-first.jpg";
import img2 from "../assets/about-second.jpg";
import img3 from "../assets/about-third.jpg";
import img4 from "../assets/about-fourth.jpg";
import imgRamiro from "../assets/ramiro-pic.jpg";
import imgEric from "../assets/eric-pic.jpg";
import Footer from "../layouts/Footer";

export default function About() {
  const people = [
    {
      name: "Eric",
      img: imgEric,
      description:
        "Eric's leadership skills and technical expertise as a skilled software developer allowed him to bring together a diverse team to help others find employment. He motivated the team to work collaboratively and create innovative solutions using their individual talents and perspectives. With Eric's guidance, the team was able to develop user-friendly websites and mobile applications that made job searching more accessible. Eric's leadership and technical proficiency were a winning combination that made a real difference in the lives of job seekers.",
    },
    {
      name: "Yogi",
      img: img4,
      description: "",
    },
    {
      name: "Mae",
      img: img4,
      description: "",
    },
    {
      name: "Ramiro",
      img: imgRamiro,
      description:
        "I contribute as a skilled software developer with problem-solving abilities and attention to detail. My expertise in writing code and developing functional software solutions is essential to achieving the team's goals. I collaborate effectively, share my knowledge and expertise, and foster a culture of learning and growth. In addition, I highly value comradery within the team, and I believe that a positive and collaborative work environment is crucial for success. I am always willing to lend a helping hand and work together with my colleagues to achieve our common goals. As a team player, I strive to create an atmosphere of mutual respect and support, which allows us to work more efficiently and achieve our objectives effectively.",
    },
  ];

  return (
    <div>
      <h1 className='aboutHeader'>About Our Team</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div
          style={{ backgroundColor: "green", margin: "15px", height: "100px", width: "100px" }}
        ></div>{" "}
        <div
          style={{ backgroundColor: "green", margin: "15px", height: "100px", width: "100px" }}
        ></div>
        <div
          style={{ backgroundColor: "green", margin: "15px", height: "100px", width: "100px" }}
        ></div>
        <div
          style={{ backgroundColor: "green", margin: "15px", height: "100px", width: "100px" }}
        ></div>
        <div
          style={{ backgroundColor: "green", margin: "15px", height: "100px", width: "100px" }}
        ></div>
        <div
          style={{ backgroundColor: "green", margin: "15px", height: "100px", width: "100px" }}
        ></div>
        <div
          style={{ backgroundColor: "green", margin: "15px", height: "100px", width: "100px" }}
        ></div>
        <div
          style={{ backgroundColor: "green", margin: "15px", height: "100px", width: "100px" }}
        ></div>
        <div
          style={{ backgroundColor: "green", margin: "15px", height: "100px", width: "100px" }}
        ></div>
      </div>

      {/* TODO */}
      {/* {people.map()} */}

      <hr className='aboutHr' />

      <Card className='about'>
        <Card.Img src={img1} className='aboutImg' alt='No Pic' />
        <Card.ImgOverlay>
          <Card.Text className='aboutCardHeader'>Eric</Card.Text>
          <img className='ericAbout' src={imgEric} />
          <Card.Text className='aboutText'></Card.Text>
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
          <Card.Text className='aboutCardHeader'>Mae</Card.Text>
        </Card.ImgOverlay>
      </Card>

      <hr className='aboutHr' />

      <Card className='about'>
        <Card.Img src={img4} className='aboutImg' alt='No Pic' />
        <Card.ImgOverlay>
          <Card.Text className='aboutCardHeader'>Ramiro</Card.Text>
          <img className='ramiroAbout' src={imgRamiro} alt='no pic' />
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
      <Footer />
    </div>
  );
}
