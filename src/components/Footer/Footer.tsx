import Nav from "react-bootstrap/Nav";

export default function Footer() {
  return (
    <Nav className='BorderTop'>
      <Nav.Item as='li'>
        <Nav.Link href='./termsofuse'>Terms</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
