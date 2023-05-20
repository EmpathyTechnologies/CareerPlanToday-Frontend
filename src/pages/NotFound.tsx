import Figure from "react-bootstrap/Figure";
import Button from "react-bootstrap/Button";

import compilationImg from "../assets/images/notfound/notfound-compilation.jpg";
import hyenaImg from "../assets/images/notfound/notfound-hyena.jpg";
import lizardImg from "../assets/images/notfound/notfound-lizard.jpg";
import parakeetImg from "../assets/images/notfound/notfound-parakeet.jpg";

export default function NotFound() {
  const images = [compilationImg, hyenaImg, lizardImg, parakeetImg];
  const randomImg = images[Math.floor(Math.random() * images.length)];

  return (
    <div className='navbar-spacer' style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Sorry, the page you were looking for doesn’t exist</h1>

      <Figure>
        <Figure.Image width={871} height={580} alt='Page Not Found' src={randomImg} />
      </Figure>

      <Button variant='primary' size='lg' href='/'>
        Return to Home Page
      </Button>
    </div>
  );
}
