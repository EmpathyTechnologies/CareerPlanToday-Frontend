import Card from "react-bootstrap/Card";
import ramiroPic from "../assets/ramiroPic.jpg";
import ericPic from "../assets/ericPic.jpg";
import yogiPic from "../assets/yogiPic.jpg";
import maePic from "../assets/maePic.jpg";
import Footer from "../layouts/Footer";

export default function About() {
  const people = [
    {
      name: "Ramiro",
      img: ramiroPic,
      description:
        "I contribute as a skilled software developer with problem-solving abilities and attention to detail. My expertise in writing code and developing functional software solutions is essential to achieving the team's goals. I collaborate effectively, share my knowledge and expertise, and foster a culture of learning and growth. In addition, I highly value comradery within the team, and I believe that a positive and collaborative work environment is crucial for success. I am always willing to lend a helping hand and work together with my colleagues to achieve our common goals. As a team player, I strive to create an atmosphere of mutual respect and support, which allows us to work more efficiently and achieve our objectives effectively.",
    },
    {
      name: "Yogi",
      img: yogiPic,
      description: "",
    },
    {
      name: "Mae",
      img: maePic,
      description: "",
    },
    {
      name: "Eric",
      img: ericPic,
      description:
        "Eric's leadership skills and technical expertise as a skilled software developer allowed him to bring together a diverse team to help others find employment. He motivated the team to work collaboratively and create innovative solutions using their individual talents and perspectives. With Eric's guidance, the team was able to develop user-friendly websites and mobile applications that made job searching more accessible. Eric's leadership and technical proficiency were a winning combination that made a real difference in the lives of job seekers.",
    },
  ];

  const peopleList = people.map(person => (
    <div key={person.name}>
      <h2>{person.name}</h2>
      <img src={person.img} alt={person.name} />
      <p>{person.description}</p>
    </div>
  ));

  return (
    <div>
      <h1>About Us</h1>
      {peopleList}
    </div>
  );
}


