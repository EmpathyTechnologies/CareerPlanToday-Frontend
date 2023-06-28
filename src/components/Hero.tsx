import { Link } from "react-router-dom";
import laptopImg from "../assets/images/home/laptop.png";
import Button from "./Button";

function Hero() {
  return (
    <div className='hero'>
      <div className='hero-left-section'>
        <h1>
          <div>Navigate your</div>
          <div>future today</div>
        </h1>
        <div>Explore careers, compare colleges, and form your plan</div>

        <div className='hero-btns-container'>
          <div className='hero-btns'>
            <div className='hero-btn'>
            <Link to='/signup'>
              <Button text='Start Now' color={"btn-green"} />
            </Link>
            </div>
            <div className='hero-btn'>
              <Link to='/login'>
                <Button text='Log In' color={"btn-blue"} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='hero-right-section'>
        <img className='hero-img' src={laptopImg} alt='laptop' />
      </div>
    </div>
  );
}

export default Hero;
