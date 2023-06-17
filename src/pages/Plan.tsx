import React from "react";
import Button from "../components/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

interface CardItem {
  step: number;
  title: string;
  btnText: string;
  href: string;
}

function Plan() {
  let myCards: CardItem[] = [
    { step: 1, title: "Incomplete", btnText: "Explore Careers", href: "/careers" },
    { step: 2, title: "Incomplete", btnText: "Compare Colleges", href: "/colleges" },
    { step: 3, title: "Incomplete", btnText: "How to Fund College", href: "" },
    { step: 4, title: "Incomplete", btnText: "Choose your lifestyle", href: "" },
    { step: 5, title: "Incomplete", btnText: "See How You Can Invest", href: "" },
  ];

  const navigate = useNavigate();

  const handleButtonClick = (href: string) => {
    if (href) {
      navigate(href);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {myCards.map((card) => (
        <div style={{ display: "flex", alignItems: "center" }} key={card.step}>
          <h2>Step {card.step}</h2>
          <Card>
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Button text={card.btnText} color='btn-blue' onClick={() => handleButtonClick(card.href)} />
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Plan;
