import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Plan() {
  return (
    <div className='navbar-spacer footer-spacer plan-flex'>
      <Card className='plan-flex'>
        <Card.Img variant='top' src='holder.js/100px180' />
        <Card.Body>
          <Card.Title>Career</Card.Title>
          <Card.Text>ABC</Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className='plan-flex'>
        <Card.Img variant='top' src='holder.js/100px180' />
        <Card.Body>
          <Card.Title>College</Card.Title>
          <Card.Text>ABC</Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className='plan-flex'>
        <Card.Img variant='top' src='holder.js/100px180' />
        <Card.Body>
          <Card.Title>Funding</Card.Title>
          <Card.Text>ABC</Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className='plan-flex'>
        <Card.Img variant='top' src='holder.js/100px180' />
        <Card.Body>
          <Card.Title>My Plan</Card.Title>
          <Card.Text>ABC</Card.Text>
          <Button variant='primary' href='./calculator'>
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Plan;
