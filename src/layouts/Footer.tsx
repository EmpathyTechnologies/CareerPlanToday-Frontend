import Nav from "react-bootstrap/Nav";

export default function Footer() {
  return (
    <Nav className='BorderTop'>
      <Nav.Item as='li'>
        <Nav.Link href='./termsofuse'>Terms</Nav.Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Nav.Link href='./privacypolicy'>Privacy</Nav.Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Nav.Link href='./about'>About</Nav.Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Nav.Link href='./contact'>Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Nav.Link href='./feedback'>Feedback</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
