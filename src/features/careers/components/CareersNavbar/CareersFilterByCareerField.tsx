import React, { useState, forwardRef } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

interface CustomToggleProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const CustomToggle = forwardRef<HTMLAnchorElement, CustomToggleProps>(({ children, onClick }, ref) => (
  <a
    href=''
    ref={ref}
    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      onClick(e);
    }}>
    {children}
    &#x25bc;
  </a>
));

interface CustomMenuProps {
  children: React.ReactNode;
  style: React.CSSProperties;
  className: string;
  labeledBy: string;
}

const CustomMenu = forwardRef<HTMLDivElement, CustomMenuProps>(({ children, style, className, labeledBy }, ref) => {
  const [value, setValue] = useState("");

  return (
    <div ref={ref} style={style} className={className} aria-labelledby={labeledBy}>
      <Form.Control
        autoFocus
        placeholder='Type to filter...'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        value={value}
      />
      <ul>
        {React.Children.toArray(children).filter((child) => !value || (child as React.ReactElement).props.children.toLowerCase().startsWith(value))}
      </ul>
    </div>
  );
});

export default function CareersFilterByCareerField({ setFilterByCareerName }: any) {
  const careerFields = [
    { name: "All Careers" },
    { name: "Construction" },
    { name: "Education" },
    { name: "Engineer" },
    { name: "Finance" },
    { name: "Healthcare" },
  ];
  const [label, setLabel] = useState("All Careers");

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle}>{label}</Dropdown.Toggle>

      <Dropdown.Menu as={CustomMenu} labeledBy=''>
        {careerFields.map((careerField, index) => (
          <Dropdown.Item
            key={index}
            eventKey={index.toString()}
            onClick={() => {
              setLabel(careerField.name);
              setFilterByCareerName(careerField.name);
            }}>
            {careerField.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
