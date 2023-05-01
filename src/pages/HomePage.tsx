import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "../assets/HomePage.module.css";
import { useScreenWidth } from "../hooks/useScreenWidth";
import { Col, Container, Row } from "react-bootstrap";

// Maybe put all cards inside same <Card> div to remove border lines.
export default function HomePage() {
  let width = useScreenWidth();
  // {width > 700  ?  <div>this shows to the page</div>  :  ""}
  return (
    <Container className={styles.homeBodyDiv}>
      <Row className={styles.cardDiv} style={{ width: "80rem" }}>
        <Col className={styles.homeFirstCard}>
          <Card.Text className={styles.homePageCircle}>
            Career Plan Today!
          </Card.Text>
          <Button className={styles.exploreCareersButton}>
            Explore Careers
          </Button>
          <Button className={styles.compareCollegesButton}>
            Compare Colleges
          </Button>
        </Col>
      </Row>

      <Row className={styles.cardDiv} style={{ width: "80rem" }}>
        <Card.Body className={styles.homeThirdCard}>
          <Card.Text className={styles.secondCardSquare}>
            Earn $500,000+ More
          </Card.Text>
          <Card.Text className={styles.secondCardInformation}>
            An athletic trainer pay is $48,420. A physical therapist assistant
            pay is $61,180. This is $12,760 more per year. Over 40 years, this
            is $510,400. Explore what careers pay.
          </Card.Text>
          <Button className={styles.secondCardButton}>Explore Careers</Button>
        </Card.Body>
      <hr className={styles.homeBreakLine} />
      </Row>
      <Row className={styles.cardDiv} style={{ width: "80rem" }}>
        <Card.Body className={styles.homeSecondCard}>
          <Card.Text className={styles.thirdCardInformation}>
            The University of Notre Dame costs $57,699 per year. Indiana
            University-Blooming costs $11,221 per year. This is $46,478 less per
            year for same degree. Over a 4 year degree this is $185,912. Compare
            college costs.
          </Card.Text>
          <Button className={styles.thirdCardButton}>Compare Careers</Button>
          <Card.Text className={styles.thirdCardSquare}>
            Save $500,000+
          </Card.Text>
        </Card.Body>
      </Row>
    </Container>
  );
}
