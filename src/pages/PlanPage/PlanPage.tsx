import Button from "../../components/FilterButton";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Navigation from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";

interface CardItem {
  step: number;
  title: string;
  btnText: string;
  href: string;
}

function Plan() {
  let myCards: CardItem[] = [
    { step: 1, title: "Save at least 1 Career - Incomplete", btnText: "Explore Careers", href: "/careers" },
    { step: 2, title: "Incomplete", btnText: "Compare Colleges", href: "/colleges" },
    { step: 3, title: "Incomplete", btnText: "How to Fund College", href: "/calculator" },
    { step: 4, title: "Incomplete", btnText: "Choose Your Lifestyle", href: "/budget" },
    { step: 5, title: "Incomplete", btnText: "See How You Can Invest", href: "/invest" },
  ];

  const navigate = useNavigate();

  const handleButtonClick = (href: string) => {
    if (href) {
      navigate(href);
    }
  };

  return (
    <div>
      <Navigation />
      <div className='plan-flex-column-center'>
        {myCards.map((card) => (
          <div className='plan-flex-center' key={card.step}>
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
      <Footer />
    </div>
  );
}

export default Plan;
