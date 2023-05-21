import { Button } from "react-bootstrap";
import "../../assets/styles/Hero.css";
import { Link } from "react-router-dom";
import laptopImg from "../../assets/images/home/laptop.png";
function Hero() {
  return (
    <div id='hero'>
      <div id='hero-intro'>
        <div id='hero-text'>
          <h1>
            <div>Navigate your</div>
            <div>future today</div>
          </h1>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            Explore careers, compare colleges, and form your plan
          </p>
        </div>

        <div id='hero-action-btn'>
          <div id='apple' className='hero-btn'>
            <Link to='./careers' style={{ paddingRight: "10px" }}>
              <button className='hint'>Start Now</button>
            </Link>
            <Link to='./careers'>
              <button className='hint'>Log In</button>
            </Link>
          </div>
        </div>
      </div>

      <div id='hero-visual'>
        <div id='hero-img'>
          {/* <img src='https://thehelpfultipper.github.io/build_figma_design/imgs/iPhone-15.png' alt='iPhone 15 display.' /> */}
          <img src={laptopImg} alt='laptop' />
        </div>
      </div>
    </div>
  );
}

export default Hero;
