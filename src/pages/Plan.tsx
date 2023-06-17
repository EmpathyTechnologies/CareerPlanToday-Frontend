import Button from "../components/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Plan() {
  let myCards = [
    { step: 1, title: "Incomplete", btnText: "Explore Careers", href: "./careers" },
    { step: 2, title: "Incomplete", btnText: "Compare Colleges", href: "./colleges" },
    { step: 3, title: "Incomplete", btnText: "How to Fund College", href: "" },
    { step: 4, title: "Incomplete", btnText: "Choose your lifestyle", href: "" },
    { step: 5, title: "Incomplete", btnText: "See How You Can Invest", href: "" },
  ];

  // TODO: Add button onclick functionality to redirect to the desired hyperlink

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {myCards.map((card) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2>Step {card.step}</h2>
          <Card>
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Button text={card.btnText} color='btn-blue' />
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Plan;
