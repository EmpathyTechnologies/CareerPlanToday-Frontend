import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img1 from "../../../assets/images/home/img-9.png";
import ListGroup from "react-bootstrap/ListGroup";
import Heading from "../components/heading";

function AboutUs() {
  return (
    <div className='about-us'>
      <Container>
        <Row className='flex-lg-row flex-column'>
          <Col>
            <Image src={img1} />
          </Col>
          <Col className='about-us-content'>
            <div className='mb-3'>
              <Heading title='More About Us' />
            </div>
            <p className='sub-heading'>
              Lörem ipsum besost lant: sakroll. Tris koskade och vindvändare. Nevossa bedins. Miras kaktig. Dinägönade denat. Psykostat anömegen.{" "}
            </p>
            <ListGroup>
              <ListGroup.Item className='d-flex align-items-center'>
                <div className='check'>
                  <svg width='21' height='12' viewBox='0 0 31 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M9.91273 17.2739L2.87296 10.4609L0.526367 12.7319L9.91273 21.8159L30.0264 2.35012L27.6798 0.0791016L9.91273 17.2739Z'
                      fill='black'
                    />
                  </svg>
                </div>
                <p>Lörem ipsum besost lant: sakroll.</p>
              </ListGroup.Item>
              <ListGroup.Item className='d-flex align-items-center'>
                <div className='check'>
                  <svg width='21' height='12' viewBox='0 0 31 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M9.91273 17.2739L2.87296 10.4609L0.526367 12.7319L9.91273 21.8159L30.0264 2.35012L27.6798 0.0791016L9.91273 17.2739Z'
                      fill='black'
                    />
                  </svg>
                </div>
                <p>Lörem ipsum besost lant: sakroll.</p>
              </ListGroup.Item>
              <ListGroup.Item className='d-flex align-items-center'>
                <div className='check'>
                  <svg width='21' height='12' viewBox='0 0 31 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M9.91273 17.2739L2.87296 10.4609L0.526367 12.7319L9.91273 21.8159L30.0264 2.35012L27.6798 0.0791016L9.91273 17.2739Z'
                      fill='black'
                    />
                  </svg>
                </div>
                <p>Lörem ipsum besost lant: sakroll.</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;
