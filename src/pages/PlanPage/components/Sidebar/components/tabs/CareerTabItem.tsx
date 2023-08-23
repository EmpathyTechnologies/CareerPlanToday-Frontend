import { useState } from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../../redux/store";
import { toggleCareerSave } from "../../../../../../redux/actions";

function formatSalary(salary: number) {
  const roundedSalary = Math.round(salary / 1000) * 1000;
  return `$${roundedSalary / 1000}k`;
}


function CareerTabItem(props: any) {
  const { careerData } = props;

  
  const { salary, title, itemCss } = props;
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  const dispatch = useDispatch();
  const savedCareers = useSelector((state: RootState) => state.careers);

  function toggleSaveCareer() {
    dispatch(toggleCareerSave(careerData));
  }

 function CareerTabItem(props:any) {
  const { salary,title,  itemCss } = props;
 

  return (
    <ListItem disablePadding>

      <ListItemButton sx={itemCss}>
        <ListItemText>{formatSalary(salary.national.average)}</ListItemText>
        <ListItemText
        sx={{ width: "60%" }}
        >{title}</ListItemText>
        <ListItemIcon
        sx={{ width: "5%" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={toggleSaveCareer}
        >
          {isHovered ? <DeleteIcon /> : <DeleteOutlineIcon />}
        </ListItemIcon>
      </ListItemButton>

    </ListItem>
  );
}

export default CareerTabItem;
