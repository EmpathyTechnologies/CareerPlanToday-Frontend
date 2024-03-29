import React, { useState, ChangeEvent, MouseEvent, useRef, ReactNode } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

interface CustomButtonProps {
  onClick: (event: MouseEvent<HTMLAnchorElement>) => void;
  children: ReactNode;
}

function CustomButton({ children, onClick }: CustomButtonProps) {
  return (
    <a
      className='btn btn-blue w-240'
      onClick={(e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onClick(e);
      }}>
      {children}▼
    </a>
  );
}

function CustomMenu({ children, style, className, labeledBy }: any) {
  const [value, setValue] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const filteredChildren = React.Children.toArray(children).filter(
    (child) => !value || (child as React.ReactElement).props.children.toLowerCase().startsWith(value)
  );
  return (
    <div ref={menuRef} style={style} className={className} aria-labelledby={labeledBy}>
      <Form.Control autoFocus className='mx-3 my-2 w-auto' placeholder='Type to filter' onChange={handleInputChange} value={value} />
      <ul>{filteredChildren}</ul>
    </div>
  );
}

function FilterDropdownSearch({ text, menuArray, setFilter }: any) {
  const [label, setLabel] = useState(text);

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomButton}>{label}</Dropdown.Toggle>
      <Dropdown.Menu as={CustomMenu}>
        {menuArray.map((menuItem: any, index: any) => (
          <Dropdown.Item
            key={index}
            eventKey={index.toString()}
            onClick={() => {
              setLabel(menuItem.name);
              setFilter(menuItem.name);
            }}>
            {menuItem.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default FilterDropdownSearch;
