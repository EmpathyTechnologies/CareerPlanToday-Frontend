import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Btn from "../components/Button";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand className='logo' href='/home'>
          Career Plan Today
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse>
          <Nav className='ms-auto me-auto my-2 my-lg-0' style={{ maxHeight: "100px" }}>
            <Link className='nav-link' to='/careers'>
              Careers
            </Link>
            <Link className='nav-link' to='/colleges'>
              Colleges
            </Link>
            <Link className='nav-link' to='/plan'>
              Plan
            </Link>
          </Nav>
          <Btn cn='btn-transparent navbar-btn' name='Sign Up' />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
