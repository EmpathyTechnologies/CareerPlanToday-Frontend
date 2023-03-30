import { BiBookReader } from "react-icons/bi";
import { BsHeartPulse } from "react-icons/bs";
import { GrWorkshop } from "react-icons/gr";
import { TbTools, TbPigMoney } from "react-icons/tb";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { RxGear } from "react-icons/rx";

export default function CollegesNavbar(props: any) {
  let { selected, setSelected } = props;

  const navbarContainer = {
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
    width: "100vw",
    paddingTop: "10px",
    borderBottom: "3px solid var(--Swan)",
  };

  const btnActive = {
    backgroundColor: "var(--Polar)",
    borderLeft: "none",
    borderRight: "none",
    borderTop: "none",
    borderBottom: "3px solid var(--Eel)",
    borderRadius: 0,
  };

  const btnInactive = {
    backgroundColor: "var(--Polar)",
    borderLeft: "none",
    borderRight: "none",
    borderTop: "none",
    borderBottom: "none",
  };

  const careerButtons = [
    {
      select: "All Colleges",
      icon: GrWorkshop,
    },
    // {
    //   select: "Medical Doctor",
    //   icon: BsHeartPulse,
    // },
    // {
    //   select: "Nurse",
    //   icon: TbTools,
    // },
    {
      select: "Veterinary",
      icon: TbPigMoney,
    },
    // {
    //   select: "Veterinarian Technician ",
    //   icon: RxGear,
    // },
  ];

  return (
    <div style={navbarContainer}>
      {careerButtons.map((careerButton) => (
        <button
          className='FlexColumnCenter Width138px'
          onClick={() => setSelected(careerButton.select)}
          style={btnInactive}
        >
          <careerButton.icon size={30} />

          <div style={selected === careerButton.select ? btnActive : btnInactive}>
            {careerButton.select}
          </div>
        </button>
      ))}
    </div>
  );
}
