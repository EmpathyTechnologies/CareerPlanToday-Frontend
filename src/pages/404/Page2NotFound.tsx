
import Footer from "../../layouts/Footer";
import Button from "react-bootstrap/Button";
import NotFound2 from "../../assets/notfound2.jpg";
import { Link } from "react-router-dom";
import Figure from "react-bootstrap/Figure";
import styles from "../../NoMatch.module.css";


export default function Page2NotFound(props: any) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Well...</h1>
      <h2 className={styles.subtitle}>Looks like the page you were looking for is experiencing a mid-career crisis.</h2>
      <h3 className={styles.message404}>404</h3>
      <Figure.Caption>
        <Link to="/">
          <div>
            <h3>Click on this link to continue.</h3>
          </div>
        </Link>
      </Figure.Caption>

      <Figure>
        <Figure.Image
          className={styles.figureImage}
          width={871}
          height={580}
          alt="Page Not Found"
          src={NotFound2}
        />
      </Figure>

      <Button
        className={styles.backButton}
        variant="contained"
        size="lg"
        href="/"
      >
        Back to All Careers
      </Button>
      <Footer />
    </div>
  );
}
