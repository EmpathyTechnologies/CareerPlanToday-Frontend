import { useState, useEffect } from "react";

import { BiBookReader } from "react-icons/bi";
import { BsHeartPulse } from "react-icons/bs";
import { GrWorkshop } from "react-icons/gr";
import { TbTools, TbPigMoney } from "react-icons/tb";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { RxGear } from "react-icons/rx";
import Nav from "react-bootstrap/Nav";
import { useScreenWidth } from "../../hooks/useScreenWidth";

export default function CareersNavbar(props: any) {
  let { setSelected } = props;
  const breakpoint = 650;
  let width = useScreenWidth();
  return (
    <Nav fill variant='tabs' defaultActiveKey='link-1'>
      <Nav.Item>
        <Nav.Link eventKey='link-1' onClick={() => setSelected("All Careers")}>
          <GrWorkshop />
          {width > breakpoint ? <div>All Careers</div> : ""}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='link-2' onClick={() => setSelected("Healthcare")}>
          <BsHeartPulse />
          {width > breakpoint ? <div>Healthcare</div> : ""}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='link-3' onClick={() => setSelected("Construction")}>
          <TbTools />
          {width > breakpoint ? <div>Construction</div> : ""}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='link-4' onClick={() => setSelected("Finance")}>
          <TbPigMoney />
          {width > breakpoint ? <div>Finance</div> : ""}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='link-5' onClick={() => setSelected("Engineer")}>
          <RxGear />
          {width > breakpoint ? <div>Engineer</div> : ""}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='link-6' onClick={() => setSelected("Education")}>
          <BiBookReader />
          {width > breakpoint ? <div>Education</div> : ""}
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
