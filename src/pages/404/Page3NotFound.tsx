import Button from "react-bootstrap/Button";
import NotFound3 from "../../assets/notfound3.jpg";
import { Link } from "react-router-dom";
import Figure from "react-bootstrap/Figure";
import styles from "../../NoMatch.module.css";

export default function Page3NotFound(props: any) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Oops...</h1>
      <h2 className={styles.subtitle}>
        It seems like the course syllabus you were hoping for is taking a sabbatical.
      </h2>
      <h3 className={styles.message404}>404</h3>
      <Figure.Caption>
        <Link to='/'>
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
          alt='Page Not Found'
          src={NotFound3}
        />
      </Figure>

      <Button className={styles.backButton} variant='contained' size='lg' href='/'>
        Back to All Careers
      </Button>
    </div>
  );
}
