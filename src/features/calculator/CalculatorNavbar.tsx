import "./CalculatorNavbar.css";
import { Dropdown, DropdownButton } from "react-bootstrap";

export default function CalculatorNavbar() {
  return (
    <div className='CalculatorNavbar'>
      <DropdownButton title='Career with College'>
        <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
        <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
        <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
      </DropdownButton>
      &nbsp;
      <DropdownButton title='Career without College'>
        <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
        <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
        <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
      </DropdownButton>
      &nbsp;
      <DropdownButton title='Home State'>
        <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
        <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
        <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
      </DropdownButton>
      &nbsp;
      <DropdownButton title='Live On Campus'>
        <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
        <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
        <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}
