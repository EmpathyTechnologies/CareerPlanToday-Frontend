import { Dropdown } from "react-bootstrap";


function SecondNavigation() {
  
  return (
    
    <div className="second-navigation">
    <div className="container">
    <div className="heading d-flex align-items-center justify-content-between">
    <h5 className="mb-0">2425 Careers Founds</h5>
    <Dropdown className="desktop-dropdown">
    <Dropdown.Toggle id="dropdown-basic">
    Sort By: <strong>A to Z</strong>
    </Dropdown.Toggle>
    
    <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">
    <strong>1 to 100</strong>
    </Dropdown.Item>
    <Dropdown.Item href="#/action-2">
    <strong>A to Z</strong>
    </Dropdown.Item>
    <Dropdown.Item href="#/action-3">
    <strong>A to Z</strong>
    </Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
    <Dropdown className="mobile-dropdown">
    <Dropdown.Toggle id="dropdown-basic">
    <strong>A to Z</strong>
    </Dropdown.Toggle>
    
    <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">
    <strong>1 to 100</strong>
    </Dropdown.Item>
    <Dropdown.Item href="#/action-2">
    <strong>A to Z</strong>
    </Dropdown.Item>
    <Dropdown.Item href="#/action-3">
    <strong>A to Z</strong>
    </Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
    </div>
    </div>
    </div>
    );
  }
  
  export default SecondNavigation;