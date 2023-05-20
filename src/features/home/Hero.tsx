import { Button } from "react-bootstrap";
import "../../assets/styles/Hero.css";

function Hero() {
  return (
    <div className='hero-container' style={{ backgroundColor: "#1cb0f6" }}>
      <h1>Design Your Better Tomorrow Today</h1>
      <div className='hero-btns'>
        <Button variant='success' className='btns'>
          EXPLORE CAREERS
        </Button>
        <Button variant='success' className='btns'>
          COMPARE COLLEGES
        </Button>
      </div>
    </div>
  );
}

export default Hero;
