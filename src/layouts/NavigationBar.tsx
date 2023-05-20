import { BsMortarboardFill, BsTools } from "react-icons/bs";
import { TbBusinessplan } from "react-icons/tb";

import { OverlayTrigger, Tooltip } from "react-bootstrap";

import "../assets/styles/NavigationBar.css";

export default function NavigationBar() {
  const careersTooltip = <Tooltip id='careers-tooltip'>Explore Careers</Tooltip>;
  const collegesTooltip = <Tooltip id='colleges-tooltip'>Compare Colleges</Tooltip>;
  const planTooltip = <Tooltip id='plan-tooltip'>Form Your Financial Plan</Tooltip>;

  return (
    <div className='navbar-container navbar-fixed navbar-zindex-top'>
      <a href='/' className='navbar-link'>
        Career Plan Today
      </a>
      <div>
        <OverlayTrigger placement='bottom' overlay={careersTooltip}>
          <a href='/careers' className='navbar-link'>
            <BsTools />
          </a>
        </OverlayTrigger>

        <OverlayTrigger placement='bottom' overlay={collegesTooltip}>
          <a href='/colleges' className='navbar-link'>
            <BsMortarboardFill />
          </a>
        </OverlayTrigger>

        <OverlayTrigger placement='bottom' overlay={planTooltip}>
          <a href='/plan' className='navbar-link'>
            <TbBusinessplan />
          </a>
        </OverlayTrigger>
      </div>
    </div>
  );
}
