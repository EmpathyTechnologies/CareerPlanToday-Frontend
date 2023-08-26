import { brandRed } from "../../../../../../assets/brandColors";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { toggleCollegeSave } from "../../../../../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function CollegeTabItem(props: any) {
  function formatTuition(tuition: number) {
    const roundedTuition = Math.round(tuition / 1000) * 1000;
    return `$${roundedTuition / 1000}k`;
  }

  const { collegeData, title, itemCss } = props;
  function toggleSaveCollege() {
    dispatch(toggleCollegeSave(collegeData));
  }

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const dispatch = useDispatch();

  return (
    <ListItem disablePadding>
      <ListItemButton sx={itemCss}>
        <ListItemIcon style={{ color: brandRed }}>-{formatTuition(collegeData.tuition)}</ListItemIcon>
        <ListItemText sx={{ width: "55%" }}>{title}</ListItemText>
        <ListItemIcon sx={{ width: "3%" }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleSaveCollege}>
          {isHovered ? <DeleteIcon /> : <DeleteOutlineIcon />}
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  );
}

export default CollegeTabItem;
