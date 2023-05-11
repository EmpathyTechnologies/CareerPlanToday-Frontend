import { Button } from "react-bootstrap";
import "./Hero.css";

function Hero() {
  return (
    <div className='hero-container'>
      <video src='/videos/globe.mp4' autoPlay loop muted />
      <h1>CAREER PLAN TODAY</h1>
      <p>Design Your Better Tomorrow Today</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          // buttonStyle="btn--outline"
          // buttonSize="btn--large"
        >
          EXPLORE CAREERS
        </Button>
        <Button
          className='btns'
          // buttonStyle="btn--primary"
          // buttonSize="btn--large"
          // onClick={console.log("hey")}
        >
          COMPARE COLLEGES <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default Hero;
