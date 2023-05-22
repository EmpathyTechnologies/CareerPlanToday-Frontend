import Button from "../components/Button";
import Card from "react-bootstrap/Card";

function Plan() {
  return (
    <div>
      <Card>
        <Card.Img variant='top' src='holder.js/100px180' />
        <Card.Body>
          <Card.Title>Career</Card.Title>
          <Card.Text>ABC</Card.Text>
          <Button text='Go somewhere' color='btn-blue' />
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant='top' src='holder.js/100px180' />
        <Card.Body>
          <Card.Title>College</Card.Title>
          <Card.Text>ABC</Card.Text>
          <Button text='Go somewhere' color='btn-blue' />
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant='top' src='holder.js/100px180' />
        <Card.Body>
          <Card.Title>Funding</Card.Title>
          <Card.Text>ABC</Card.Text>
          <Button text='Go somewhere' color='btn-blue' />
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant='top' src='holder.js/100px180' />
        <Card.Body>
          <Card.Title>My Plan</Card.Title>
          <Card.Text>ABC</Card.Text>
          <Button text='Go somewhere' color='btn-blue' />
        </Card.Body>
      </Card>
    </div>
  );
}

export default Plan;
