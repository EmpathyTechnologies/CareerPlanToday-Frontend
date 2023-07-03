import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsFillGearFill } from 'react-icons/bs';
import Dropdown from 'react-bootstrap/Dropdown';

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
          <Dropdown>
      <Dropdown.Toggle variant="link" id="dropdown-basic">
      <BsFillGearFill /> 
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="./account">Account</Dropdown.Item>
        <Dropdown.Item href="./password">Password</Dropdown.Item>
        <Dropdown.Item href="./accessibility">Accessibility</Dropdown.Item>
       </Dropdown.Menu>
    </Dropdown>




        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
