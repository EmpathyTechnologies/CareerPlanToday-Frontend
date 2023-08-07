import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img1 from "../../../assets/images/home/img-9.png";
import ListGroup from "react-bootstrap/ListGroup";
import Heading from "../components/heading";

function About() {
  return (
    <div className='about-us'>
      <Container>
        <Row className='flex-lg-row flex-column'>
          <Col>
            <Image src={img1} />
          </Col>
          <Col className='about-us-content'>
            <div className='mb-3'>
              <Heading text='Your Career Impacts Your Wellness' />
            </div>
            <p className='sub-heading'>
              Most people don't know what careers pay. For example, a registered nurse national average pay is $81,220. A social worker pay is
              $50,820. This is a difference of $30,400 per year or $1,216,000 over a 40-year career. Making informed decisions early makes a huge
              difference towards financial wellness.
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
                <p>Discover career pay ranges and next steps</p>
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
                <p>Compare colleges to lower education costs, if college supports your career goals</p>
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
                <p>Plan your career, education, finances, and more</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
