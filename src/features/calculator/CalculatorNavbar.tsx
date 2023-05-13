import "./CalculatorNavbar.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
import careers from "../../data/careers.json";
import colleges from "../../data/colleges.json";
import CalculatorCustomDropDown from "../../features/calculator/CalculatorCustomDropDown";

export default function CalculatorNavbar({ setCollegeCost }: any) {
  return (
    <div className='CalculatorNavbar'>
      <CalculatorCustomDropDown colleges={colleges} setCollegeCost={setCollegeCost} />
      &nbsp;
      <DropdownButton title='Career without College'>
        <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
        <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
        <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
      </DropdownButton>
      &nbsp;
      <DropdownButton title='College'>
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
