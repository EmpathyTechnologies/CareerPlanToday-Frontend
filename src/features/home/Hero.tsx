import { Button } from "react-bootstrap";
import "../../assets/styles/Hero.css";

function Hero() {
  return (
    <div className='hero-container' style={{ backgroundColor: "#1cb0f6" }}>
      <h1>Navigate your future today</h1>
      <p>Explore careers, compare colleges, and form your plan</p>

      <div className='hero-btns'>
        <Button variant='success' className='btns' href='./careers'>
          EXPLORE CAREERS
        </Button>
        <Button variant='success' className='btns' href='./colleges'>
          COMPARE COLLEGES
        </Button>
        <Button variant='success' className='btns' href='./plan'>
          FORM YOUR PLAN
        </Button>
      </div>
    </div>
  );
}

export default Hero;
