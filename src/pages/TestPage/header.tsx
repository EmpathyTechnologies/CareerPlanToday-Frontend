import { Button, Container, Dropdown, Image, Form } from "react-bootstrap";
import Heading from "./heading";
import search from "./img/search.svg";

function Header() {
  return (
    <div className='header'>
      <Container>
        <div className='explore-career d-flex flex-column align-items-center justify-content-center'>
          <Heading title='Explore Careers' />
          <form>
            <div className='search-bar desktop-search-bar align-items-center mt-4'>
              <Dropdown>
                <Dropdown.Toggle id='choose-career'>Choose Career</Dropdown.Toggle>

                <Dropdown.Menu>
                  <h4>Choose Career</h4>
                  <Form.Control placeholder='Type to filter' aria-label='Username' aria-describedby='basic-addon1' />
                  <div className='radio-btn'>
                    <div>
                      <label>
                        <input type='radio' name='radio' readOnly />
                        <span>All Career</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type='radio' name='radio' />
                        <span>Construction</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type='radio' name='radio' />
                        <span>Education</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type='radio' name='radio' />
                        <span>Engineer</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type='radio' name='radio' />
                        <span>Finance</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type='radio' name='radio' />
                        <span>Healthcare</span>
                      </label>
                    </div>
                  </div>
                  <Button className='dropdown-btn'>Apply Changes</Button>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle id='choose-state'>Choose State</Dropdown.Toggle>

                <Dropdown.Menu>
                  <h4>Choose State</h4>
                  <Form.Control placeholder='Type to filter' aria-label='Username' aria-describedby='basic-addon1' />
                  <ul className='all-states'>
                    <li>
                      <label className='label-container'>
                        <span className='text'>All States</span>
                        <input type='checkbox' id='' name='' readOnly />
                        <span className='checkmark'></span>
                      </label>
                    </li>
                    <li>
                      <label className='label-container'>
                        <span className='text'>Alabama</span>
                        <input type='checkbox' id='' name='' readOnly />
                        <span className='checkmark'></span>
                      </label>
                    </li>
                    <li>
                      <label className='label-container'>
                        <span className='text'>Alabama</span>

                        <input type='checkbox' id='' name='' readOnly />
                        <span className='checkmark'></span>
                      </label>
                    </li>
                    <li>
                      <label className='label-container'>
                        <span className='text'>Alabama</span>
                        <input type='checkbox' id='' name='' readOnly />
                        <span className='checkmark'></span>
                      </label>
                    </li>
                    <li>
                      <label className='label-container'>
                        <span className='text'>Alabama</span>
                        <input type='checkbox' id='' name='' readOnly />
                        <span className='checkmark'></span>
                      </label>
                    </li>
                    <li>
                      <label className='label-container'>
                        <span className='text'>Alabama</span>
                        <input type='checkbox' id='' name='' readOnly />
                        <span className='checkmark'></span>
                      </label>
                    </li>
                    <li>
                      <label className='label-container'>
                        <span className='text'>Alabama</span>
                        <input type='checkbox' id='' name='' readOnly />
                        <span className='checkmark'></span>
                      </label>
                    </li>
                    <li>
                      <label className='label-container'>
                        <span className='text'>Alabama</span>
                        <input type='checkbox' id='' name='' readOnly />
                        <span className='checkmark'></span>
                      </label>
                    </li>
                    <li>
                      <label className='label-container'>
                        <span className='text'>Alabama</span>
                        <input type='checkbox' id='' name='' readOnly />
                        <span className='checkmark'></span>
                      </label>
                    </li>
                  </ul>
                  <hr />
                  <div className='radio-btn'>
                    <label>
                      <input type='radio' name='radio' />
                      <span>Enter Zip Code</span>
                    </label>
                  </div>
                  <Form.Control placeholder='Zip Code' aria-label='Username' aria-describedby='basic-addon1' />
                  <Button className='dropdown-btn'>Apply Changes</Button>
                </Dropdown.Menu>
              </Dropdown>
              <Button className='search' type='submit'>
                <Image src={search} />
              </Button>
            </div>
            <div className='mobile-explore flex-column align-items-center mt-4'>
              <Dropdown>
                <Dropdown.Toggle id='choose-career'>Choose Career</Dropdown.Toggle>

                <Dropdown.Menu>
                  <h4>Choose Career</h4>
                  <Form.Control placeholder='Type to filter' aria-label='Username' aria-describedby='basic-addon1' />
                  <div className='radio-btn'>
                    <div>
                      <label>
                        <input type='radio' name='radio' readOnly />
                        <span>All Career</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type='radio' name='radio' />
                        <span>Construction</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type='radio' name='radio' />
                        <span>Education</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type='radio' name='radio' />
                        <span>Engineer</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type='radio' name='radio' />
                        <span>Finance</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type='radio' name='radio' />
                        <span>Healthcare</span>
                      </label>
                    </div>
                  </div>
                  <Button className='dropdown-btn'>Apply Changes</Button>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle id='choose-state'>Choose State</Dropdown.Toggle>

                <Dropdown.Menu>
                  <h4>Choose State</h4>
                  <Form.Control placeholder='Type to filter' aria-label='Username' aria-describedby='basic-addon1' />
                  <ul>
                    <li>
                      <label className='label-container'>
                        All States
                        <input type='checkbox' id='' name='' readOnly />
                        <span className='checkmark'></span>
                      </label>
                    </li>
                    <li>
                      <label className='label-container'>
                        Alabama
                        <input type='checkbox' id='' name='' readOnly />
                        <span className='checkmark'></span>
                      </label>
                    </li>
                    <li>
                      <label className='label-container'>
                        Alabama
                        <input type='checkbox' id='' name='' readOnly />
                        <span className='checkmark'></span>
                      </label>
                    </li>
                    <li>
                      <label className='label-container'>
                        Alabama
                        <input type='checkbox' id='' name='' readOnly />
                        <span className='checkmark'></span>
                      </label>
                    </li>
                    <li>
                      <label className='label-container'>
                        Alabama
                        <input type='checkbox' id='' name='' readOnly />
                        <span className='checkmark'></span>
                      </label>
                    </li>
                  </ul>
                  <hr />
                  <div className='radio-btn'>
                    <label>
                      <input type='radio' name='radio' />
                      <span>Healthcare</span>
                    </label>
                  </div>
                  <Form.Control placeholder='Enter Zip Code' aria-label='Username' aria-describedby='basic-addon1' />
                  <Button className='dropdown-btn'>Apply Changes</Button>
                </Dropdown.Menu>
              </Dropdown>
              <Button className='search' type='submit'>
                <Image src={search} className='me-3' /> Search
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Header;
