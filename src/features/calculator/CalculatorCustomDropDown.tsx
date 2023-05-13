import React, { useState, forwardRef } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

type CustomToggleProps = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
  label: string;
  setLabel: React.Dispatch<React.SetStateAction<string>>;
};

const CustomToggle = forwardRef<HTMLAnchorElement, CustomToggleProps>(({ children, onClick, label, setLabel }, ref) => (
  <a
    href=''
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}>
    {label}
    &#x25bc;
  </a>
));

type CustomMenuProps = {
  children: React.ReactNode;
  style: React.CSSProperties;
  className?: string;
  "aria-labelledby": string;
  label: string;
  setLabel: React.Dispatch<React.SetStateAction<string>>;
  setCollegeName: React.Dispatch<React.SetStateAction<string>>;
  setCollegeCost: React.Dispatch<React.SetStateAction<number>>;
  colleges: any[]; // add colleges to the type
};

const CustomMenu = forwardRef<HTMLDivElement, CustomMenuProps>(
  ({ children, style, className, "aria-labelledby": labeledBy, label, setLabel, setCollegeName, setCollegeCost, colleges }, ref) => {
    const [value, setValue] = useState("");

    const handleOnClick = (eventKey: any, childLabel: string) => {
      const selectedCollege = colleges.find((college: any) => college.id === eventKey);
      setCollegeName(selectedCollege.name);
      setCollegeCost(selectedCollege.tuition);
      setLabel(childLabel);
    };

    return (
      <div ref={ref} style={style} className={className} aria-labelledby={labeledBy}>
        <Form.Control
          autoFocus
          className='mx-3 my-2 w-auto'
          placeholder='Type to filter...'
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className='list-unstyled'>
          {React.Children.toArray(children)
            .filter((child: any) => !value || child.props.children?.toString().toLowerCase().startsWith(value))
            .map((child: any) => (
              <Dropdown.Item
                key={child.props.eventKey}
                eventKey={child.props.eventKey}
                onClick={() => handleOnClick(child.props.eventKey, child.props.children?.toString() || "")}>
                {child.props.children}
              </Dropdown.Item>
            ))}
        </ul>
      </div>
    );
  }
);

const CalculatorCustomDropDown = ({ colleges, setCollegeName, setCollegeCost }: any) => {
  const [label, setLabel] = useState("Select College");

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id='dropdown-custom-components' label={label} setLabel={setLabel}>
        {label}
      </Dropdown.Toggle>

      <Dropdown.Menu
        as={CustomMenu}
        label={label}
        setLabel={setLabel}
        setCollegeName={setCollegeName}
        setCollegeCost={setCollegeCost}
        colleges={colleges}>
        {colleges.map((college: any) => (
          <Dropdown.Item key={college.id} eventKey={college.id}>
            {college.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CalculatorCustomDropDown;
