import { BsSpeedometer2, BsMortarboardFill, BsTools } from "react-icons/bs";
import { TbBusinessplan } from "react-icons/tb";

import { OverlayTrigger, Tooltip } from "react-bootstrap";

import "./NavigationBar.css";

export default function NavigationBar(props: any) {
  const { setNavbarSelected } = props;

  const containerStyle = {
    height: "64px",
    background: "var(--Humpback)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "30px",
    paddingRight: "30px",
    fontSize: "24px",
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
  };

  const aTag = {
    textDecoration: "none",
    color: "var(--Polar)",
    background: "var(--Humpback)",
    marginRight: "20px",
  };

  const careersTooltip = <Tooltip id='gear-tooltip'>Explore Careers</Tooltip>;
  const collegesTooltip = <Tooltip id='gear-tooltip'>Compare Colleges</Tooltip>;
  const planTooltip = <Tooltip id='gear-tooltip'>Form Your Financial Plan</Tooltip>;

  return (
    <div style={containerStyle} className='navbar-fixed navbar-zindex-top'>
      <a href='/' onClick={() => setNavbarSelected("Careers")} style={aTag}>
        Career Plan Today
      </a>
      <div>
        <OverlayTrigger placement='bottom' overlay={careersTooltip}>
          <a href='/careers' onClick={() => setNavbarSelected("Careers")} style={aTag}>
            <BsTools />
          </a>
        </OverlayTrigger>

        <OverlayTrigger placement='bottom' overlay={collegesTooltip}>
          <a href='/colleges' onClick={() => setNavbarSelected("Colleges")} style={aTag}>
            <BsMortarboardFill />
          </a>
        </OverlayTrigger>

        <OverlayTrigger placement='bottom' overlay={planTooltip}>
          <a href='/plan' onClick={() => setNavbarSelected("Plan")} style={aTag}>
            <TbBusinessplan />
          </a>
        </OverlayTrigger>
      </div>
      {/* <div></div> */}
    </div>
  );
}
