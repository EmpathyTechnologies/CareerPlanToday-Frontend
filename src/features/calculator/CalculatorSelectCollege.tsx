import React, { useState, forwardRef } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

type LabelProps = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
  label: string;
  setLabel: React.Dispatch<React.SetStateAction<string>>;
};

type MenuProps = {
  children: React.ReactNode;
  style: React.CSSProperties;
  "aria-labelledby": string;
  label: string;
  setLabel: React.Dispatch<React.SetStateAction<string>>;
  setCollegeName: React.Dispatch<React.SetStateAction<string>>;
  setCollegeCost: React.Dispatch<React.SetStateAction<number>>;
  freshmenYear?: boolean;
  setSophomoreCollege?: any;
  setJuniorCollege?: any;
  setSeniorCollege?: any;
  setSophomoreTuition?: any;
  setJuniorTuition?: any;
  setSeniorTuition?: any;
  colleges: any[];
};

const Label = forwardRef<HTMLAnchorElement, LabelProps>(({ children, onClick, label, setLabel }, ref) => (
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

const Menu = forwardRef<HTMLDivElement, MenuProps>(
  (
    {
      children,
      style,
      "aria-labelledby": labeledBy,
      label,
      setLabel,
      setCollegeName,
      setCollegeCost,
      freshmenYear,
      setSophomoreCollege,
      setJuniorCollege,
      setSeniorCollege,
      setSophomoreTuition,
      setJuniorTuition,
      setSeniorTuition,
      colleges,
    },
    ref
  ) => {
    const [value, setValue] = useState("");

    const handleOnClick = (eventKey: any, childLabel: string) => {
      const selectedCollege = colleges.find((college: any) => college.id === eventKey);
      setCollegeName(selectedCollege.name);
      setCollegeCost(selectedCollege.tuition);
      setLabel(childLabel);

      if (freshmenYear) {
        setSophomoreCollege(selectedCollege.name);
        setJuniorCollege(selectedCollege.name);
        setSeniorCollege(selectedCollege.name);
        setSophomoreTuition(selectedCollege.tuition);
        setJuniorTuition(selectedCollege.tuition);
        setSeniorTuition(selectedCollege.tuition);
      }
    };

    return (
      <div ref={ref} style={style} aria-labelledby={labeledBy}>
        <Form.Control autoFocus placeholder='Type to filter...' onChange={(e) => setValue(e.target.value)} value={value} />
        <ul>
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

const CalculatorSelectCollege = ({
  colleges,
  setCollegeName,
  setCollegeCost,
  freshmenYear,
  setSophomoreCollege,
  setJuniorCollege,
  setSeniorCollege,
  setSophomoreTuition,
  setJuniorTuition,
  setSeniorTuition,
}: any) => {
  const [label, setLabel] = useState("Select College");
  return (
    <Dropdown>
      <Dropdown.Toggle as={Label} label={label} setLabel={setLabel}>
        {label}
      </Dropdown.Toggle>

      <Dropdown.Menu
        as={Menu}
        label={label}
        setLabel={setLabel}
        setCollegeName={setCollegeName}
        setCollegeCost={setCollegeCost}
        freshmenYear={freshmenYear}
        setSophomoreCollege={setSophomoreCollege}
        setJuniorCollege={setJuniorCollege}
        setSeniorCollege={setSeniorCollege}
        setSophomoreTuition={setSophomoreTuition}
        setJuniorTuition={setJuniorTuition}
        setSeniorTuition={setSeniorTuition}
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

export default CalculatorSelectCollege;
