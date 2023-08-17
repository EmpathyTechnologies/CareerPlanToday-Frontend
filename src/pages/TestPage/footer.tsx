import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";

import icon1 from "../assets/img/fb.svg";
import icon2 from "../assets/img/tw.svg";
import icon3 from "../assets/img/yt.svg";
import icon4 from "../assets/img/cir.svg";

function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row className="text-center text-md-start">
          <Col lg={4} md={6} sm={12} className="mb-3">
            <ListGroup>
              <ListGroup.Item className="logo">
                <h4>Career Plan Today</h4>
              </ListGroup.Item>
              <ListGroup.Item>
                Lörem ipsum ir jåska, av pokanade. Reran plat är lade. Årat
                sorat fingen, att divis. Nyvis podda. Trehyd. Makroktiga{" "}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg={2} md={6} sm={12} className="mb-3">
            <ListGroup>
              <ListGroup.Item className="footer-link-heading">
                <p>Quick Links</p>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <a href="#">Home</a>{" "}
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <a href="#">About Us</a>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <a href="#">Contact Us</a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg={2} md={6} sm={12} className="mb-3">
            <ListGroup>
              <ListGroup.Item className="footer-link-heading">
                <p>Other Links</p>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <a href="#">Terms</a>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <a href="#">Privacy Policy</a>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <a href="#">Feedback</a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg={4} md={6} sm={12} className="mb-3">
            <div className="d-flex align-items-end justify-content-center justify-content-lg-end justify-content-md-start">
              <a href="#">
                <div className="social-icon">
                  <Image src={icon1} />
                </div>
              </a>
              <a href="#">
                <div className="social-icon">
                  <Image src={icon2} />
                </div>
              </a>
              <a href="#">
                <div className="social-icon">
                  <Image src={icon3} />
                </div>
              </a>
              <a href="#">
                <div className="social-icon">
                  <Image src={icon4} />
                </div>
              </a>
            </div>
          </Col>
        </Row>
        <p className="copyright text-center text-md-start">
          © 2023 | Career Plan Today All Rights Reserved
        </p>
      </Container>
    </div>
  );
}

export default Footer;
