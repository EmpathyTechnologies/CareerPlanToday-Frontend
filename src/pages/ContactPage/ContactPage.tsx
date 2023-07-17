import React from "react";
import { Form, Button } from "react-bootstrap";
import Navigation from "../../layouts/Navigation";
import Footer from "../../layouts/Footer";

const Contact = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // handle form submission logic here
  };

  return (
    <div>
      <Navigation />
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
      <Footer />
    </div>
  );
};

export default Contact;
