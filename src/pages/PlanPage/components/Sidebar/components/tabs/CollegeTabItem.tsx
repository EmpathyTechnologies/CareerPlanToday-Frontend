import {   ListItem,ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AiFillHeart } from "react-icons/ai";

 function CollegeTabItem(props:any) {

  const { title, itemCss } = props;

  return (
    <ListItem disablePadding>
    <ListItemButton sx={itemCss}>
      <ListItemIcon><AiFillHeart/></ListItemIcon>
      <ListItemText>{title}</ListItemText>
    </ListItemButton>
    </ListItem>
  );
}


export default CollegeTabItem