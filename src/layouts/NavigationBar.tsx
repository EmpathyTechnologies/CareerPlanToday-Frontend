import { BsGear, BsSpeedometer2, BsUmbrella, BsCoin, BsMortarboardFill, BsTools, BsFillPiggyBankFill } from "react-icons/bs";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

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
  const calculatorTooltip = <Tooltip id='gear-tooltip'>College Value Calculator</Tooltip>;
  const budgetTooltip = <Tooltip id='gear-tooltip'>After College Budget</Tooltip>;
  const investTooltip = <Tooltip id='gear-tooltip'>Investment Calculator</Tooltip>;

  return (
    <div style={containerStyle}>
      <a href='/' onClick={() => setNavbarSelected("Careers")} style={aTag}>
        Career Plan Today{" "}
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

        <OverlayTrigger placement='bottom' overlay={calculatorTooltip}>
          <a href='/calculator' onClick={() => setNavbarSelected("Calculator")} style={aTag}>
            <BsSpeedometer2 />
          </a>
        </OverlayTrigger>

        <OverlayTrigger placement='bottom' overlay={budgetTooltip}>
          <a href='/budget' onClick={() => setNavbarSelected("Budget")} style={aTag}>
            <BsUmbrella />
          </a>
        </OverlayTrigger>

        <OverlayTrigger placement='bottom' overlay={investTooltip}>
          <a href='/invest' onClick={() => setNavbarSelected("Invest")} style={aTag}>
            <BsCoin />
          </a>
        </OverlayTrigger>
      </div>
      {/* <div></div> */}
    </div>
  );
}
