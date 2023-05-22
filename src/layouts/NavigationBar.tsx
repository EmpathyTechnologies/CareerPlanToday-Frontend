import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavigationBar() {
  return (
    <>
      <Navbar bg='primary' variant='dark' fixed='top'>
        <Container>
          <Navbar.Brand href='./'>Career Plan Today</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='./careers'>Careers</Nav.Link>
            <Nav.Link href='./colleges'>Colleges</Nav.Link>
            <Nav.Link href='./plan'>Plan</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
