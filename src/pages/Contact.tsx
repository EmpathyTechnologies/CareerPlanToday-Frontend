import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const Contact = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // handle form submission logic here
  };

  return (
    <div className='navbar-spacer footer-spacer' style={{ margin: "0 20px" }}>
      <h1>Contact Us</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='formBasicName'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder='Enter your name' />
        </Form.Group>

        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='Enter your email' />
        </Form.Group>

        <Form.Group controlId='formBasicMessage'>
          <Form.Label>Message</Form.Label>
          <Form.Control as='textarea' rows={3} placeholder='Enter your message' />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
