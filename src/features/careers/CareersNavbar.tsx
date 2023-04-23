import "./CareersNavbar.css";
import { BiBookReader } from "react-icons/bi";
import { BsHeartPulse } from "react-icons/bs";
import { GrWorkshop } from "react-icons/gr";
import { TbTools, TbPigMoney } from "react-icons/tb";

import { RxGear } from "react-icons/rx";
import Nav from "react-bootstrap/Nav";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import CareersFilterByCareerField from "./CareersFilterByCareerField";

export default function CareersNavbar(props: any) {
  let { setFilter } = props;
  const breakpoint = 650;
  let width = useScreenWidth();

  return (
    <div id='careers-navbar-container'>
      <CareersFilterByCareerField setFilter={setFilter} />
    </div>
  );
}
