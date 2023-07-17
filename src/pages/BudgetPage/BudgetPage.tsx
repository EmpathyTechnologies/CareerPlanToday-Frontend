import { Row, Col, Form } from "react-bootstrap";
import Navigation from "../../layouts/Navbar";
import Footer from "../../layouts/footer4";

export default function Budget() {
  return (
    <div>
      <Navigation />
      <h3>Lifestyle Budget</h3>
      <h4>INCOME</h4>

      <Row>
        <Col xs={8}>Average Salary</Col>
        <Col xs={4}>
          <Form.Control type='text' />
        </Col>
      </Row>
      <Row>
        <Col xs={8}>Estimated Taxes</Col>
        <Col xs={4}>
          <Form.Control type='text' />
        </Col>
      </Row>
      <Row>
        <Col xs={8}>Monthly Take-home</Col>
        <Col xs={4}>
          <Form.Control type='text' />
        </Col>
      </Row>
      <Row>
        <Col xs={8}>Other Monthly Income</Col>
        <Col xs={4}>
          <Form.Control type='text' />
        </Col>
      </Row>
      <Row>
        <Col xs={8}>
          <strong>Total Monthly Income</strong>
        </Col>
        <Col xs={4}>
          <Form.Control type='text' />
        </Col>
      </Row>

      <div>EXPENSES (per Monthl)</div>

      <Form.Group controlId='housing'>
        <Form.Label>Housing</Form.Label>
        <Form.Control as='select'>
          <option value='1200'>Live Alone ($1200)</option>
          <option value='600'>Roommate ($600)</option>
          <option value='250'>Live with Relatives ($250)</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId='transport'>
        <Form.Label>Transport</Form.Label>
        <Form.Control as='select'>
          <option value='750'>New Car ($700)</option>
          <option value='325'>Used Car ($325)</option>
          <option value='150'>Public Transportation ($150)</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId='food'>
        <Form.Label>Food</Form.Label>
        <Form.Control as='select'>
          <option value='1000'>Restaurants ($1000)</option>
          <option value='750'>Fast Food ($750)</option>
          <option value='500'>Groceries ($500)</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId='entertainment'>
        <Form.Label>Entertainment</Form.Label>
        <Form.Control as='select'>
          <option value='1200'>Live Alone ($1200)</option>
          <option value='600'>Roommate ($600)</option>
          <option value='250'>Live with Relatives ($250)</option>{" "}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId='pets'>
        <Form.Label>Pets</Form.Label>
        <Form.Control as='select'>
          <option value='1200'>2 Pets ($500)</option>
          <option value='600'>1 Pet ($250)</option>
          <option value='250'>No Pets ($0)</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId='kids'>
        <Form.Label>Kids</Form.Label>
        <Form.Control as='select'>
          <option value='1200'>Live Alone ($1200)</option>
          <option value='600'>Roommate ($600)</option>
          <option value='250'>Live with Relatives ($250)</option>{" "}
        </Form.Control>
      </Form.Group>

      <div>
        <div>Other</div>
        <div>Insurance</div>
        <div>Internet</div>
        <div>Phone</div>
        <div>Student Loan Payment</div>
        <div>Emergency Savings</div>
        <div>Retirement Savings</div>
        <div>Home Savings</div>
        <div>Other</div>
      </div>

      <div>
        <div>Total Monthly Income</div>
      </div>

      <div>
        <div>Total Monthly Expenses</div>
      </div>
      <div>
        <div>Net Income (Loss)</div>
      </div>
      <Footer />
    </div>
  );
}
