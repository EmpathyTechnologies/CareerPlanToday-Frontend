import { brandGreen_Dark } from "../../../../../../assets/brandColors";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { toggleCareerSave } from "../../../../../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function formatSalary(salary: number) {
  const roundedSalary = Math.round(salary / 1000) * 1000;
  return `$${roundedSalary / 1000}k`;
}

function CareerTabItem(props: any) {
  const { careerData, salary, title, itemCss } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const dispatch = useDispatch();

  function toggleSaveCareer() {
    dispatch(toggleCareerSave(careerData));
  }

  return (
    <ListItem disablePadding>
      <ListItemButton sx={itemCss}>
        <ListItemText style={{ color: brandGreen_Dark }}>+{formatSalary(salary.national.average)}</ListItemText>
        <ListItemText sx={{ width: "55%" }}>{title}</ListItemText>
        <ListItemIcon sx={{ width: "3%" }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleSaveCareer}>
          {isHovered ? <DeleteIcon /> : <DeleteOutlineIcon />}
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  );
}

export default CareerTabItem;
