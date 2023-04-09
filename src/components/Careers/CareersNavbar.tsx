import "./CareersNavbar.css";
import { BiBookReader } from "react-icons/bi";
import { BsHeartPulse } from "react-icons/bs";
import { GrWorkshop } from "react-icons/gr";
import { TbTools, TbPigMoney } from "react-icons/tb";

import { RxGear } from "react-icons/rx";
import Nav from "react-bootstrap/Nav";
import { useScreenWidth } from "../../hooks/useScreenWidth";

export default function CareersNavbar(props: any) {
  let { setFilter } = props;
  const breakpoint = 650;
  let width = useScreenWidth();

  return (
    <Nav fill variant='tabs' defaultActiveKey='item-1' className='color-nav'>
      <Nav.Item>
        <Nav.Link eventKey='item-1' onClick={() => setFilter("All Careers")}>
          <GrWorkshop />
          {width > breakpoint ? <div>All Careers</div> : ""}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='item-2' onClick={() => setFilter("Healthcare")}>
          <BsHeartPulse />
          {width > breakpoint ? <div>Healthcare</div> : ""}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='item-3' onClick={() => setFilter("Construction")}>
          <TbTools />
          {width > breakpoint ? <div>Construction</div> : ""}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='item-4' onClick={() => setFilter("Finance")}>
          <TbPigMoney />
          {width > breakpoint ? <div>Finance</div> : ""}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='item-5' onClick={() => setFilter("Engineer")}>
          <RxGear />
          {width > breakpoint ? <div>Engineer</div> : ""}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='item-6' onClick={() => setFilter("Education")}>
          <BiBookReader />
          {width > breakpoint ? <div>Education</div> : ""}
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
